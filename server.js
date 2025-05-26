const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const os = require('os');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

// Función para obtener la IP local
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
  if (!module) return res.status(400).json({ error: 'Falta el parámetro "module"' });

  const resultsPath = path.join(__dirname, 'allure-results');
  const reportPath = path.join(__dirname, 'allure-report');

  if (fs.existsSync(resultsPath)) fs.rmSync(resultsPath, { recursive: true, force: true });

  const testCommand = `npx playwright test "${module}" --reporter=line,allure-playwright`;

  const testProcess = spawn(testCommand, { shell: true });

  testProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(output);
    io.emit('test-progress', output); // 🔴 Emitir al frontend
  });

  testProcess.stderr.on('data', (data) => {
    const errorOutput = data.toString();
    console.warn(errorOutput);
    io.emit('test-progress', errorOutput);
  });

  testProcess.on('close', (code) => {
    const generateCommand = `npx allure generate ${resultsPath} --clean -o ${reportPath}`;
    const generate = spawn(generateCommand, { shell: true });

    generate.on('close', () => {
      res.json({
        message: code === 0
          ? '✅ Tests ejecutados y reporte generado.'
          : '⚠️ Algunos tests fallaron, pero se generó el reporte.',
        reportUrl: '/report/index.html'
      });
    });
  });
});

app.use('/report', express.static(path.join(__dirname, 'allure-report')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log(`🖥️ Servidor corriendo en: http://${ip}:${PORT}`);
});