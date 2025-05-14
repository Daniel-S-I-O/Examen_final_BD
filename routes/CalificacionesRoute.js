import { Router } from 'express';

import {
    listarTodoscalificaciones,
    listarcalificacionesPorId,
    crearcalificaciones,
    actualizarcalificaciones,
    eliminarcalificaciones
} from '../controllers/CalificacionesController.js';

const CalificacionesRouter = Router();

CalificacionesRouter.get('/', listarTodoscalificaciones);
CalificacionesRouter.get('/:id_calificaciones', listarcalificacionesPorId);
CalificacionesRouter.post('/', crearcalificaciones);
CalificacionesRouter.put('/:id_calificaciones', actualizarcalificaciones);
CalificacionesRouter.delete('/:id_calificaciones', eliminarcalificaciones);

export default CalificacionesRouter;