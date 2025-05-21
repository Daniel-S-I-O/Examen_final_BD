import {config} from '../config.js';

/**
 * Carga la lista de los Medicos
 */
const listarTodosmedicosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM medicos', (err, filas) => {
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
 * Buscar un estudiante por su ID (llave primaria)
 */
const listarmedicosPorIdQuery = (id_medicos) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM medicos WHERE id = ? LIMIT 1', [id_medicos], (err, filas) => {
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
 * Guardar Medicos
 */
const crearmedicosQuery = async (medicos) => {
    const { nombres, apellido } = medicos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO medicos (nombres) VALUES (?, ?)';
        config.query(sql, [nombres, apellido ], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Actualizar un Medicos por su ID
 */
const actualizarmedicosQuery = (id_medicos, medicos) => {
    const { nombres, apellido } = medicos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Medicos SET nombres = ?, apellido = ?, WHERE id_estudiante = ?';
        config.query(sql, [nombres, apellido, id_medicos], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Eliminar un estudiante por su ID
 */
const eliminarmedicosQuery = (id_medicos) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM medicos WHERE id_medicos = ?';
        config.query(sql, [id_medicos], (err, resultado) => {
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
    listarTodosmedicosQuery,
    listarmedicosPorIdQuery,
    crearmedicosQuery,
    actualizarmedicosQuery,
    eliminarmedicosQuery   
}