import {config} from '../config.js';

/**
 * Carga la lista de los Consultas
 */
const listarTodosConsultasQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Consultas', (err, filas) => {
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
const listarConsultasPorIdQuery = (id_Consultas) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Consultas WHERE id_Consultas = ? LIMIT 1', [id_Consultas], (err, filas) => {
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
const crearConsultasQuery = async (Consultas) => {
    const { nombres } = Consultas;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Consultas (nombres) VALUES (?)';
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
const actualizarConsultasQuery = (id_Consultas, Consultas) => {
    const { nombres } = Consultas;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Consultas SET nombres = ?, WHERE id_curso = ?';
        config.query(sql, [nombres, id_Consultas], (err, resultado) => {
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
const eliminarConsultasQuery = (id_Consultas) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Consultas WHERE id = ?';
        config.query(sql, [id_Consultas], (err, resultado) => {
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
    listarTodosConsultasQuery,
    listarConsultasPorIdQuery,
    crearConsultasQuery,
    actualizarConsultasQuery,
    eliminarConsultasQuery   
}