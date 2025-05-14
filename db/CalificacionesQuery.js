import {config} from '../config.js';

/**
 * Carga la lista de los calificaciones
 */
const listarTodoscalificacionesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM calificaciones', (err, filas) => {
            // Si genera error, mostramos en la consola que es lo que falla
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // Si no hay error, devolvemos los datos de la tabla 
                resolve(filas);
            }
        });
    });
};

/**
 * Buscar un calificaciones por su ID (llave primaria)
 */
const listarcalificacionesPorIdQuery = (id_calificaciones) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM calificaciones WHERE id_calificaciones = ? LIMIT 1', [id_calificaciones], (err, filas) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(filas);
            }
        });
    });
};


/**
 * Guardar calificaciones
 */
const crearcalificacionesQuery = async (calificaciones) => {
    const { id_calificaciones, calificacion } = calificaciones;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO calificaciones (nombres) VALUES (?)';
        config.query(sql, [id_calificaciones, calificaciones], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Actualizar un calificaciones por su ID
 */
const actualizarcalificacionesQuery = (id_calificaciones, calificaciones) => {
    const { nombres } = calificaciones;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE calificaciones SET nombres = ?, WHERE id_calificacion = ?';
        config.query(sql, [nombres, id_calificaciones], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

/**
 * Eliminar un calificaciones por su ID
 */
const eliminarcalificacionesQuery = (id_calificaciones) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM calificaciones WHERE id_calificacion = ?';
        config.query(sql, [id_calificaciones], (err, resultado) => {
            if (err) {
                reject(err);
            } else {
                resolve(resultado);
            }
        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    listarTodoscalificacionesQuery,
    listarcalificacionesPorIdQuery,
    crearcalificacionesQuery,
    actualizarcalificacionesQuery,
    eliminarcalificacionesQuery   
}