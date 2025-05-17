import { Router } from 'express';

import {
    listarTodosCitas,
    listarCitasPorId,
    crearCitas,
    actualizarCitas,
    eliminarCitas
} from '../controllers/CitasController.js';

const CitasRouter = Router();

CitasRouter.get('/', listarTodosCitas);
CitasRouter.get('/:id_calificaciones', listarCitasPorId);
CitasRouter.post('/', crearCitas);
CitasRouter.put('/:id_calificaciones', actualizarCitas);
CitasRouter.delete('/:id_calificaciones', eliminarCitas);

export default CitasRouter;