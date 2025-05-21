import {config} from '../config.js';

/**
 * Carga la lista de los Citas
 */
const listarTodoscitasQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Citas', (err, filas) => {
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
 * Buscar un Citas por su ID (llave primaria)
 */
const listarcitasPorIdQuery = (id_citas) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Citas WHERE id_Citas = ? LIMIT 1', [id_citas], (err, filas) => {
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
 * Guardar Citas
 */
const crearcitasQuery = async (citas) => {
    const { nombres } = citas;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Citas (nombres) VALUES (?)';
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
 * Actualizar un Citas por su ID
 */
const actualizarcitasQuery = (id_citas, citas) => {
    const { nombres } = citas;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Citas SET nombres = ?, WHERE id_calificacion = ?';
        config.query(sql, [nombres, id_citas], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado.rows);
            }
        });
    });
};

/**
 * Eliminar un Citas por su ID
 */
const eliminarcitasQuery = (id_citas) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Citas WHERE id_citas = ?';
        config.query(sql, [id_citas], (err, resultado) => {
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
    listarTodoscitasQuery,
    listarcitasPorIdQuery,
    crearcitasQuery,
    actualizarcitasQuery,
    eliminarcitasQuery   
}