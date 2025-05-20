import {
    listarTodosCitasQuery,
    listarCitasPorIdQuery,
    crearCitasQuery,
    actualizarCitasQuery,
    eliminarCitasQuery
  } from "../db/CitasQuery.js";
  
  /**
   * Obtener todos los Citas de la base de datos
   */
  const listarTodosCitas = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const Citas = await listarTodosCitasQuery();
      res.json(Citas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Citas con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listarCitasPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Citas = await listarCitasPorIdQuery(req.params.id_Citas);
      res.json(Citas);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Citas
   */
  const crearCitas = async (req, res) => {
    console.log(req.body)
    try {
        const datosCitas = req.body;
        const resultado = await crearCitasQuery(datosCitas);
        res.json({ mensaje: 'Citas creado con éxito', id_Cita: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Citas
   */
  const actualizarCitas = async (req, res) => {
    try {
        const id_Citas = req.params.id;
        const datosCitas = req.body;
        const resultado = await actualizarCitasQuery(id_Citas, datosCitas);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Citas actualizado con éxito', id: id_Citas });
        } else {
            res.status(404).json({ mensaje: 'Citas no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Citas
   */
  const eliminarCitas = async (req, res) => {
    try {
        const id = req.params.id_Citas;
        const resultado = await eliminarCitasQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Citas eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Citas no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Citas', error: error.message });
    }
  };
  
  export {
  listarTodosCitas,
  listarCitasPorId,
  crearCitas,
  actualizarCitas,
  eliminarCitas
};