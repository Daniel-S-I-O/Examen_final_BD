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
CitasRouter.get('/:id_Citas', listarCitasPorId);
CitasRouter.post('/', crearCitas);
CitasRouter.put('/:id_Citas', actualizarCitas);
CitasRouter.delete('/:id_Citas', eliminarCitas);

export default CitasRouter;