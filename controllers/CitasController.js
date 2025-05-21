import {
    listarTodoscitasQuery,
    listarcitasPorIdQuery,
    crearcitasQuery,
    actualizarcitasQuery,
    eliminarcitasQuery
  } from "../db/CitasQuery.js";
  
  /**
   * Obtener todos los citas de la base de datos
   */
  const listarTodoscitas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const citas = await listarTodoscitasQuery();
      res.json(citas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el citas con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarcitasPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const citas = await listarcitasPorIdQuery(req.params.id_citas);
      res.json(citas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un citas
   */
  const crearcitas = async (req, res) => {
    console.log(req.body)
    try {
        const datoscitas = req.body;
        const resultado = await crearcitasQuery(datoscitas);
        res.json({ mensaje: 'citas creado con éxito', id_cita: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un citas
   */
  const actualizarcitas = async (req, res) => {
    try {
        const id_citas = req.params.id;
        const datoscitas = req.body;
        const resultado = await actualizarcitasQuery(id_citas, datoscitas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'citas actualizado con éxito', id: id_citas });
        } else {
            res.status(404).json({ mensaje: 'citas no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un citas
   */
  const eliminarcitas = async (req, res) => {
    try {
        const id = req.params.id_citas;
        const resultado = await eliminarcitasQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'citas eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'citas no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el citas', error: error.message });
    }
  };
  
  export {
    listarTodoscitas,
    listarcitasPorId,
    crearcitas,
    actualizarcitas,
    eliminarcitas
  };