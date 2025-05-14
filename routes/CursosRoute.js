import { Router } from 'express';

import {
    listarTodoscursos,
    listarcursosPorId,
    crearcursos,
    actualizarcursos,
    eliminarcursos
} from '../controllers/CursosController.js';

const CursosRouter = Router();

CursosRouter.get('/', listarTodoscursos);
CursosRouter.get('/:id', listarcursosPorId);
CursosRouter.post('/', crearcursos);
CursosRouter.put('/:id', actualizarcursos);
CursosRouter.delete('/:id', eliminarcursos);

export default CursosRouter;