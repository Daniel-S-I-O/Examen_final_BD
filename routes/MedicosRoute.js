import { Router } from 'express';

import {
    listarTodosMedicos,
    listarMedicosPorId,
    crearMedicos,
    actualizarMedicos,
    eliminarMedicos
} from '../controllers/MedicosController.js';

const MedicosRouter = Router();

MedicosRouter.get('/', listarTodosMedicos);
MedicosRouter.get('/:id_estudiante', listarMedicosPorId);
MedicosRouter.post('/', crearMedicos);
MedicosRouter.put('/:id_estudiante', actualizarMedicos);
MedicosRouter.delete('/:id_estudiante', eliminarMedicos);

export default MedicosRouter;