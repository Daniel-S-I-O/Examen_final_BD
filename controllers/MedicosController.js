import {
    listarTodosmedicosQuery,
    listarmedicosPorIdQuery,
    crearmedicosQuery,
    actualizarmedicosQuery,
    eliminarmedicosQuery
  } from "../db/medicosQuery.js";
  
  /**
   * Obtener todos los eMedicos de la base de datos
   */
  const listarTodosmedicos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const medicos = await listarTodosmedicosQuery();
      res.json(medicos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el medicos con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarmedicosPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const medicos = await listarmedicosPorIdQuery(req.params.id);
      res.json(medicos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un medicos
   */
  const crearmedicos = async (req, res) => {
    console.log(req.body)
    try {
        const datosmedicos = req.body;
        const resultado = await crearmedicosQuery(datosmedicos);
        res.json({ mensaje: 'medicos creado con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un medicos
   */
  const actualizarmedicos = async (req, res) => {
    try {
        const id = req.params.id_medicos;
        const datosmedicos = req.body;
        const resultado = await actualizarmedicosQuery(id_medicos, datosmedicos);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'medicos actualizado con éxito', id: id_medicos });
        } else {
            res.status(404).json({ mensaje: 'medicos no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un medicos
   */
  const eliminarmedicos = async (req, res) => {
    try {
        const id_medicos = req.params.id_medicos;
        const resultado = await eliminarmedicosQuery(id_medicos);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'medicos eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'medicos no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el medicos', error: error.message });
    }
  };
  
  export {
    listarTodosmedicos,
    listarmedicosPorId,
    crearmedicos,
    actualizarmedicos,
    eliminarmedicos
  };