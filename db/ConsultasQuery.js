import {config} from '../config.js';

/**
 * Carga la lista de los Consultas
 */
const listarTodosconsultasQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM consultas', (err, filas) => {
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
 * Buscar un Consultas por su ID (llave primaria)
 */
const listarconsultasPorIdQuery = (id_consultas) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM consultas WHERE id_consultas = ? LIMIT 1', [id_consultas], (err, filas) => {
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
 * Guardar Consultas
 */
const crearconsultasQuery = async (consultas) => {
    const { nombres } = consultas;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO consultas (nombres) VALUES (?)';
        config.query(sql, [nombres], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Actualizar un Consultas por su ID
 */
const actualizarconsultasQuery = (id_consultas, consultas) => {
    const { nombres } = consultas;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Consultas SET nombres = ?, WHERE id_consultas = ?';
        config.query(sql, [nombres, id_consultas], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Eliminar un Consultas por su ID
 */
const eliminarconsultasQuery = (id_consultas) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM consultas WHERE id = ?';
        config.query(sql, [id_consultas], (err, resultado) => {
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
    listarTodosconsultasQuery,
    listarconsultasPorIdQuery,
    crearconsultasQuery,
    actualizarconsultasQuery,
    eliminarconsultasQuery   
}