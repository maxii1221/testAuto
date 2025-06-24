const express = require('express');
const { spawn } = require('child_process');
const kill = require('tree-kill');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const os = require('os');
const http = require('http');
const socketIO = require('socket.io');
const db = require('./db'); // ✅ Importa conexión con SQLite

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;

let testProcess = null;
let responseSent = false;

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

app.use(express.json());
app.use(cors());

io.on('connection', (socket) => {
  console.log('🧠 Cliente conectado al socket');
});

app.post('/run-tests', (req, res) => {
  const module = req.body.module;
  const usuario = req.body.usuario || 'Usuario desconocido';

  if (!module) return res.status(400).json({ error: 'Falta el parámetro "module"' });

  if (testProcess) {
    return res.status(400).json({ error: '❗ Ya hay un proceso de test en ejecución.' });
  }

  const resultsPath = path.join(__dirname, 'allure-results');
  const reportPath = path.join(__dirname, 'allure-report');
  responseSent = false;

  const fechaInicio = new Date().toISOString(); // 🕐

  // 📝 Registrar en base de datos
  db.run(
    `INSERT INTO historial (usuario, modulo, fecha_inicio, estado) VALUES (?, ?, ?, ?)`,
    [usuario, module, fechaInicio, 'pendiente'],
    function (err) {
      if (err) console.error('❌ Error al guardar historial:', err.message);
      else console.log(`📝 Registro inicial guardado con ID ${this.lastID}`);
    }
  );

  // Borrar resultados anteriores
  if (fs.existsSync(resultsPath)) {
    fs.rmSync(resultsPath, { recursive: true, force: true });
  }

  // 📝 Crear environment.properties
  const envData = `
    Ambiente=QA
    Modulo=${module}
    Navegador=Chromium
    BaseURL=https://console.ationet.com
    Fecha=${new Date().toLocaleDateString()}
  `;
  fs.mkdirSync(resultsPath, { recursive: true });
  fs.writeFileSync(path.join(resultsPath, 'environment.properties'), envData.trim());

  // 📝 Crear executor.json
  const executorData = {
    name: usuario,
    type: "Manual Run",
    buildOrder: Date.now(),
    buildName: "Ejecución de pruebas ATIONET",
    buildUrl: "http://localhost:3000",
    reportUrl: "http://localhost:3000/report/index.html"
  };
  fs.writeFileSync(
    path.join(resultsPath, 'executor.json'),
    JSON.stringify(executorData, null, 2)
  );

  // ▶️ Ejecutar el test
  const testCommand = `npx playwright test "${module}" --reporter=line,allure-playwright`;
  testProcess = spawn(testCommand, { shell: true });

  testProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(output);
    io.emit('test-progress', output);
  });

  testProcess.stderr.on('data', (data) => {
    const errorOutput = data.toString();
    console.warn(errorOutput);
    io.emit('test-progress', errorOutput);
  });

  testProcess.on('close', (code) => {
    testProcess = null;

    const fechaFin = new Date().toISOString();
    const estado = code === 0 ? 'exitoso' : 'fallido';

    // 📝 Actualizar el registro en la base de datos
    db.run(
      `UPDATE historial SET fecha_fin = ?, estado = ? 
       WHERE usuario = ? AND modulo = ? AND fecha_inicio = ?`,
      [fechaFin, estado, usuario, module, fechaInicio],
      (err) => {
        if (err) console.error('❌ Error actualizando historial:', err.message);
        else console.log('✅ Historial actualizado.');
      }
    );

    if (responseSent) return;

    const generateCommand = `npx allure generate ${resultsPath} --clean -o ${reportPath}`;
    const generate = spawn(generateCommand, { shell: true });

    generate.on('close', () => {
      if (!responseSent) {
        res.json({
          message: code === 0
            ? '✅ Tests ejecutados y reporte generado.'
            : '⚠️ Algunos tests fallaron, pero se generó el reporte.',
          reportUrl: '/report/index.html'
        });
        responseSent = true;
      }
    });
  });
});

app.post('/stop-tests', (req, res) => {
  if (testProcess) {
    kill(testProcess.pid, 'SIGTERM');
    io.emit('test-progress', '🛑 Proceso de test detenido manualmente.');
    testProcess = null;
    responseSent = true;
    res.json({ message: '🛑 Test detenido.' });
  } else {
    res.status(400).json({ error: '⚠️ No hay proceso en ejecución.' });
  }
});

// 📄 Endpoint para ver historial
app.get('/history', (req, res) => {
  db.all('SELECT * FROM historial ORDER BY fecha_inicio DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: '❌ Error leyendo historial' });
    } else {
      res.json(rows);
    }
  });
});

// Archivos estáticos
app.use('/report', express.static(path.join(__dirname, 'allure-report')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log(`🖥️ Servidor corriendo en: http://${ip}:${PORT}`);
});
