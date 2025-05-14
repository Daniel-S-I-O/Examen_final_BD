import { Router } from 'express';

import {
    listarTodosestudiantes,
    listarestudiantesPorId,
    crearestudiantes,
    actualizarestudiantes,
    eliminarestudiantes
} from '../controllers/EstudiantesController.js';

const EstudiantesRouter = Router();

EstudiantesRouter.get('/', listarTodosestudiantes);
EstudiantesRouter.get('/:id_estudiante', listarestudiantesPorId);
EstudiantesRouter.post('/', crearestudiantes);
EstudiantesRouter.put('/:id_estudiante', actualizarestudiantes);
EstudiantesRouter.delete('/:id_estudiante', eliminarestudiantes);

export default EstudiantesRouter;