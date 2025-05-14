import { Router } from 'express';

import {
    listarTodosinscripciones,
    listarinscripcionesPorId,
    crearinscripciones,
    actualizarinscripciones,
    eliminarinscripciones
} from '../controllers/InscripcionesController.js';

const InscripcionesRouter = Router();

InscripcionesRouter.get('/', listarTodosinscripciones);
InscripcionesRouter.get('/:id_inscripcion', listarinscripcionesPorId);
InscripcionesRouter.post('/', crearinscripciones);
InscripcionesRouter.put('/:id_inscripcion', actualizarinscripciones);
InscripcionesRouter.delete('/:id_inscripcion', eliminarinscripciones);

export default InscripcionesRouter;