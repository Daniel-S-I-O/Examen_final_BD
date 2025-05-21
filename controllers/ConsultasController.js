import {
    listarTodosconsultasQuery,
    listarconsultasPorIdQuery,
    crearconsultasQuery,
    actualizarconsultasQuery,
    eliminarconsultasQuery
  } from "../db/ConsultasQuery.js";
  
  /**
   * Obtener todos los consultas de la base de datos
   */
  const listarTodosconsultas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const consultas = await listarTodosconsultasQuery();
      res.json(consultas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el consultas con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarconsultasPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const consultas = await listarconsultasPorIdQuery(req.params.id);
      res.json(consultas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un consultas
   */
  const crearconsultas = async (req, res) => {
    console.log(req.body)
    try {
        const datosconsultas = req.body;
        const resultado = await crearconsultasQuery(datosconsultas);
        res.json({ mensaje: 'Consulta creado con éxito', id_consultas: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un consultas
   */
  const actualizarconsultas = async (req, res) => {
    try {
        const id = req.params.id_Consultas;
        const datosconsultas = req.body;
        const resultado = await actualizarconsultasQuery(id_consultas, datosconsultas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'consultas actualizado con éxito', id: id_consultas });
        } else {
            res.status(404).json({ mensaje: 'consultas no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un consultas
   */
  const eliminarconsultas = async (req, res) => {
    try {
        const id_consultas = req.params.id_consultas;
        const resultado = await eliminarconsultasQuery(id_consultas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'consultas eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'consultas no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el consultas', error: error.message });
    }
  };
  
  export {
    listarTodosconsultas,
    listarconsultasPorId,
    crearconsultas,
    actualizarconsultas,
    eliminarconsultas
  };