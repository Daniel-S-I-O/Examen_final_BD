import {config} from '../config.js';

/**
 * Carga la lista de los Medicos
 */
const listarTodosMedicosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Medicos', (err, filas) => {
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
const listarMedicosPorIdQuery = (id_Medicos) => {
    return new Promise((resolve, reject) => {
        config.query('SELECT * FROM Medicos WHERE id = ? LIMIT 1', [id_Medicos], (err, filas) => {
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
const crearMedicosQuery = async (Medicos) => {
    const { nombres, apellido } = Medicos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Medicos (nombres) VALUES (?, ?)';
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
const actualizarMedicosQuery = (id_Medicos, Medicos) => {
    const { nombres, apellido } = Medicos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Medicos SET nombres = ?, apellido = ?, WHERE id_estudiante = ?';
        config.query(sql, [nombres, apellido, id_Medicos], (err, resultado) => {
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
const eliminarMedicosQuery = (id_Medicos) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Medicos WHERE id_Medicos = ?';
        config.query(sql, [id_Medicos], (err, resultado) => {
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
    listarTodosMedicosQuery,
    listarMedicosPorIdQuery,
    crearMedicosQuery,
    actualizarMedicosQuery,
    eliminarMedicosQuery   
}