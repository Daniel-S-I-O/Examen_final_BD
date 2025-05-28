import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    })
  : new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
      ssl: false, // Desactiva SSL en local
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

config.connect((err, client, release) => {
  if (err) {
    console.error('ERROR: ', err);
    switch (err.code) {
      case 'ECONNREFUSED':
        console.error('La conexión a la base de datos fue rechazada.');
        break;
      case 'ENOTFOUND':
        console.error('No se pudo encontrar el host de la base de datos.');
        break;
      default:
        console.error('Error de conexión desconocido.');
    }
  } else {
    console.log('Conexión a la base de datos establecida.');
    release();
  }
});

export { config };
