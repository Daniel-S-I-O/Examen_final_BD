import {config} from '../config.js';

/**
 * Carga la lista de Pascientes
 */
const listarTodosPascientesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Pascientes', (err, filas) => {
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
const listarPascientesPorIdQuery = (id_Pascientes) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Pascientes WHERE id_Pascientes = ? LIMIT 1', [id_Pascientes], (err, filas) => {
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
const crearPascientesQuery = async (Pascientes) => {
    const { nombre, apellido } = Pascientes;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Pascientes (nombre, apellido) VALUES (?, ?)';
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
const actualizarPascientesQuery = (id_Pascientes, Pascientes) => {
    const { nombre, apellido } = Pascientes;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Pascientes SET nombre = ?, apellido = ? WHERE id_Pascientes = ?';
        config.query(sql, [nombre, apellido, id_Pascientes], (err, resultado) => {
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
const eliminarPascientesQuery = (id_Pascientes) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Pascientes WHERE id_profesor = ?';
        config.query(sql, [id_Pascientes], (err, resultado) => {
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
    listarTodosPascientesQuery,
    listarPascientesPorIdQuery,
    crearPascientesQuery,
    actualizarPascientesQuery,
    eliminarPascientesQuery   
}