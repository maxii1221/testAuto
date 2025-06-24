// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta al archivo .db que se creará (si no existe)
const dbPath = path.join(__dirname, 'ejecuciones.db');

// Abrir o crear la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err.message);
  } else {
    console.log('📦 Base de datos SQLite creada o abierta correctamente.');
  }
});

// Crear la tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS historial (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario TEXT,
      modulo TEXT,
      fecha_inicio TEXT,
      fecha_fin TEXT,
      estado TEXT
    )
  `);
});

module.exports = db;
