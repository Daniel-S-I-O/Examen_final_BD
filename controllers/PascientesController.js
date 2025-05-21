import {
    listarTodospascientesQuery,
    listarpascientesPorIdQuery,
    crearpascientesQuery,
    actualizarpascientesQuery,
    eliminarpascientesQuery
  } from "../db/pascientesQuery.js";
  
  /**
   * Obtener todos los pascientes de la base de datos
   */
  const listarTodospascientes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const pascientes = await listarTodospascientesQuery();
      res.json(pascientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el pascientes con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarpascientesPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const pascientes = await listarpascientesPorIdQuery(req.params.id_pascientes);
      res.json(pascientes);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un pascientes
   */
  const crearpascientes = async (req, res) => {
    console.log(req.body)
    try {
        const datospascientes = req.body;
        const resultado = await crearpascientesQuery(datospascientes);
        res.json({ mensaje: 'pascientes creado con éxito', id_pascientes: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un pascientes
   */
  const actualizarpascientes = async (req, res) => {
    try {
        const id_pascientes = req.params.id_pascientes;
        const datospascientes = req.body;
        const resultado = await actualizarpascientesQuery(id_pascientes, datospascientes);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'pascientes actualizado con éxito', id: id_pascientes });
        } else {
            res.status(404).json({ mensaje: 'pascientes no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un pascientes
   */
  const eliminarpascientes = async (req, res) => {
    try {
        const id_pascientes = req.params.id;
        const resultado = await eliminarpascientesQuery(id_pascientes);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'pascientes eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'pascientes no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el pascientes', error: error.message });
    }
  };
  
  export {
    listarTodospascientes,
    listarpascientesPorId,
    crearpascientes,
    actualizarpascientes,
    eliminarpascientes
  };