import {config} from '../config.js';

/**
 * Carga la lista de Pascientes
 */
const listarTodospascientesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM pascientes', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas.rows);
            }
        });
    });
};

/**
 * Buscar un Pascientes por su ID (llave primaria)
 */
const listarpascientesPorIdQuery = (id_pascientes) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM pascientes WHERE id_Pascientes = ? LIMIT 1', [id_pascientes], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas.rows);
            }
        });
    });
};


/**
 * Guardar un nuevo Pascientes
 */
const crearpascientesQuery = async (pascientes) => {
    const { nombre, apellido } = pascientes;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO pascientes (nombre, apellido) VALUES (?, ?)';
        config.query(sql, [nombre, apellido], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Actualizar un Pascientes por su ID
 */
const actualizarpascientesQuery = (id_pascientes, pascientes) => {
    const { nombre, apellido } = pascientes;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Pascientes SET nombre = ?, apellido = ? WHERE id_pascientes = ?';
        config.query(sql, [nombre, apellido, id_pascientes], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Eliminar un Pascientes por su ID
 */
const eliminarpascientesQuery = (id_pascientes) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM pascientes WHERE id_pascientes = ?';
        config.query(sql, [id_pascientes], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodospascientesQuery,
    listarpascientesPorIdQuery,
    crearpascientesQuery,
    actualizarpascientesQuery,
    eliminarpascientesQuery   
}