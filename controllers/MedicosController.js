import {
    listarTodosMedicosQuery,
    listarMedicosPorIdQuery,
    crearMedicosQuery,
    actualizarMedicosQuery,
    eliminarMedicosQuery
  } from "../db/MedicosQuery.js";
  
  /**
   * Obtener todos los eMedicos de la base de datos
   */
  const listarTodosMedicos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
    // Try -> intentar
    // Catch -> capturar el error
    try {
      //  Ejecutar la consulta en la base de datos
      const Medicos = await listarTodosMedicosQuery();
      res.json(Medicos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Obtener el Medicos con el ID especificado en la query / url
   * @param {*} req 
   * @param {*} res 
   */
  
  const listaresMedicosPorId = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Medicos = await listarMedicosPorIdQuery(req.params.id);
      res.json(Medicos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Medicos
   */
  const crearMedicos = async (req, res) => {
    console.log(req.body)
    try {
        const datosMedicos = req.body;
        const resultado = await crearMedicosQuery(datosMedicos);
        res.json({ mensaje: 'Medicos creado con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Medicos
   */
  const actualizarMedicos = async (req, res) => {
    try {
        const id = req.params.id_Medicos;
        const datosMedicos = req.body;
        const resultado = await actualizarMedicosQuery(id_Medicos, datosMedicos);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Medicos actualizado con éxito', id: id_Medicos });
        } else {
            res.status(404).json({ mensaje: 'Medicos no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar un Medicos
   */
  const eliminarMedicos = async (req, res) => {
    try {
        const id_Medicos = req.params.id_Medicos;
        const resultado = await eliminarMedicosQuery(id_Medicos);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Medicos eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Medicos no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Medicos', error: error.message });
    }
  };
  
  export {
    listarTodosMedicosQuery,
    listarMedicosPorIdQuery,
    crearMedicosQuery,
    actualizarMedicosQuery,
    eliminarMedicosQuery
  };