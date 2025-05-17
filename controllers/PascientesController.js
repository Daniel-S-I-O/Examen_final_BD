import {
    listarTodosPascientesQuery,
    listarPascientesPorIdQuery,
    crearPascientesQuery,
    actualizarPascientesQuery,
    eliminarPascientesQuery
  } from "../db/PascientesQuery.js";
  
  /**
   * Obtener todos los Pascientes de la base de datos
   */
  const listarTodosPascientes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const Pascientes = await listarTodosPascientesQuery();
      res.json(Pascientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Pascientes con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarPascientesPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Pascientes = await listarPascientesPorIdQuery(req.params.id_Pascientes);
      res.json(Pascientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Pascientes
   */
  const crearPascientes = async (req, res) => {
    console.log(req.body)
    try {
        const datosPascientes = req.body;
        const resultado = await crearPascientesQuery(datosPascientes);
        res.json({ mensaje: 'Pascientes creado con éxito', id_Pascientes: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Pascientes
   */
  const actualizarPascientes = async (req, res) => {
    try {
        const id_Pascientes = req.params.id_Pascientes;
        const datosPascientes = req.body;
        const resultado = await actualizarPascientesQuery(id_Pascientes, datosPascientes);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Pascientes actualizado con éxito', id: id_Pascientes });
        } else {
            res.status(404).json({ mensaje: 'Pascientes no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Pascientes
   */
  const eliminarPascientes = async (req, res) => {
    try {
        const id_Pascientes = req.params.id;
        const resultado = await eliminarPascientesQuery(id_Pascientes);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Pascientes eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Pascientes no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Pascientes', error: error.message });
    }
  };
  
  export {
    listarTodosPascientesQuery,
    listarPascientesPorIdQuery,
    crearPascientesQuery,
    actualizarPascientesQuery,
    eliminarPascientesQuery
  };