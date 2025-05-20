import {
    listarTodosConsultasQuery,
    listarConsultasPorIdQuery,
    crearConsultasQuery,
    actualizarConsultasQuery,
    eliminarConsultasQuery
  } from "../db/ConsultasQuery.js";
  
  /**
   * Obtener todos los Consultas de la base de datos
   */
  const listarTodosConsultas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const Consultas = await listarTodosConsultasQuery();
      res.json(Consultas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Consultas con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarcursosPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Consultas = await listarConsultasPorIdQuery(req.params.id);
      res.json(Consultas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Consultas
   */
  const crearConsultas = async (req, res) => {
    console.log(req.body)
    try {
        const datosConsultas = req.body;
        const resultado = await crearConsultasQuery(datosConsultas);
        res.json({ mensaje: 'Consulta creado con éxito', id_Consultas: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Consultas
   */
  const actualizarConsultas = async (req, res) => {
    try {
        const id = req.params.id_Consultas;
        const datosConsultas = req.body;
        const resultado = await actualizarConsultasQuery(id_Consultas, datosConsultas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Consultas actualizado con éxito', id: id_Consultas });
        } else {
            res.status(404).json({ mensaje: 'Consultas no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Consultas
   */
  const eliminarConsultas = async (req, res) => {
    try {
        const id_Consultas = req.params.id_Consultas;
        const resultado = await eliminarConsultasQuery(id_Consultas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Consultas eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Consultas no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Consultas', error: error.message });
    }
  };
  
  export {
    listarTodosConsultas,
    listarConsultasPorId,
    crearConsultas,
    actualizarConsultas,
    eliminarConsultas
  };