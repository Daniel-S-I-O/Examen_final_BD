import { Router } from 'express';

import {
    listarTodosPascientes,
    listarPascientesPorId,
    crearPascientes,
    actualizarPascientes,
    eliminarPascientes
} from '../controllers/PascientesController.js';

const PascientesRouter = Router();

PascientesRouter.get('/', listarTodosPascientes);
PascientesRouter.get('/:id_profesor', listarPascientesPorId);
PascientesRouter.post('/', crearPascientes);
PascientesRouter.put('/:id_profesor', actualizarPascientes);
PascientesRouter.delete('/:id_profesor', eliminarPascientes);

export default PascientesRouter;