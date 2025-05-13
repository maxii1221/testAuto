const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const os = require('os');

const app = express();
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

app.post('/run-tests', (req, res) => {
  const module = req.body.module;
  if (!module) return res.status(400).json({ error: 'Falta el parámetro "module"' });

  console.log('📦 Módulo recibido para ejecutar:', module);

  const resultsPath = path.join(__dirname, 'allure-results');
  const reportPath = path.join(__dirname, 'allure-report');

  if (fs.existsSync(resultsPath)) {
    fs.rmSync(resultsPath, { recursive: true, force: true });
    console.log('🧹 Resultados anteriores (allure-results) eliminados.');
  }

  const testCommand = `npx playwright test "${module}" --reporter=line,allure-playwright`;

  exec(testCommand, { shell: '/bin/bash' }, (error, stdout, stderr) => {
    console.log('📜 Resultados de ejecución:\n', stdout);
    if (stderr) console.warn('⚠️ Stderr:\n', stderr);

    exec(`rm -rf ${reportPath}`, { shell: '/bin/bash' }, (err) => {
      if (err) {
        console.error('❌ Error eliminando allure-report:', err.message);
        return res.status(500).json({ error: 'Error eliminando allure-report' });
      }
      console.log('🧹 Directorio allure-report eliminado.');

      const generateCommand = `npx allure generate ${resultsPath} --clean -o ${reportPath}`;
      exec(generateCommand, { shell: '/bin/bash' }, (genErr, genOut, genStderr) => {
        if (genErr) {
          console.error('❌ Error generando el reporte:', genStderr || genErr.message);
          return res.status(500).json({ error: 'Error generando reporte' });
        }
        console.log('📊 Reporte generado correctamente.');

        exec(`npx allure open ${reportPath} --host`, { shell: '/bin/bash' }, (openErr, openOut, openStderr) => {
          if (openErr) {
            console.warn('⚠️ Error abriendo el reporte:', openStderr || openErr.message);
          } else {
            console.log('🌐 Reporte abierto.');
          }

          res.json({
            message: error
              ? '⚠️ Algunos tests fallaron, pero se generó el reporte.'
              : '✅ Tests ejecutados y reporte generado.',
            reportUrl: '/report/index.html'
          });
        });
      });
    });
  });
});

app.use('/report', express.static(path.join(__dirname, 'allure-report')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Escuchar en todas las interfaces
app.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log(`🖥️ Servidor corriendo en: http://${ip}:${PORT}`);
});
