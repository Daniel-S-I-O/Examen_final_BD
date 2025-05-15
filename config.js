import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Create a pool to avoid the overhead of creating a new connection every time one is needed

const config = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    ssl: { rejectUnauthorized: false },
    max: 10, // maximum number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    connectionTimeoutMillis: 2000, // time to wait before timing out when connecting a new client
});

// Validate the connection

config.connect((err, client, release) => {
    if (err) {
        console.error('ERROR: ', err);
        switch (err.code) {
            case 'ECONNREFUSED':
                console.error('La conexión a la base de datos fue rechazada.');
                break;
            default:
                console.error('Error de conexión desconocido.');
        }
    } else {
        console.log('Conexión a la base de datos establecida.');
        release(); // Release the client back to the pool
    }
});
export { config };