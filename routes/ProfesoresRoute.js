import { Router } from 'express';

import {
    listarTodosprofesores,
    listarprofesoresPorId,
    crearprofesores,
    actualizarprofesores,
    eliminarprofesores
} from '../controllers/ProfesoresController.js';

const ProfesoresRouter = Router();

ProfesoresRouter.get('/', listarTodosprofesores);
ProfesoresRouter.get('/:id_profesor', listarprofesoresPorId);
ProfesoresRouter.post('/', crearprofesores);
ProfesoresRouter.put('/:id_profesor', actualizarprofesores);
ProfesoresRouter.delete('/:id_profesor', eliminarprofesores);

export default ProfesoresRouter;