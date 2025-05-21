import { Router } from 'express';

import {
    listarTodosmedicos,
    listarmedicosPorId,
    crearmedicos,
    actualizarmedicos,
    eliminarmedicos
} from '../controllers/MedicosController.js';

const medicosRouter = Router();

medicosRouter.get('/', listarTodosmedicos);
medicosRouter.get('/:id_medicos', listarmedicosPorId);
medicosRouter.post('/', crearmedicos);
medicosRouter.put('/:id_medicos', actualizarmedicos);
medicosRouter.delete('/:id_medicos', eliminarmedicos);

export default medicosRouter;