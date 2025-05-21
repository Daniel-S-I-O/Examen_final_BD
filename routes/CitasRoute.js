import { Router } from 'express';

import {
    listarTodoscitas,
    listarcitasPorId,
    crearcitas,
    actualizarcitas,
    eliminarcitas
} from '../controllers/citasController.js';

const citasRouter = Router();

citasRouter.get('/', listarTodoscitas);
citasRouter.get('/:id_citas', listarcitasPorId);
citasRouter.post('/', crearcitas);
citasRouter.put('/:id_citas', actualizarcitas);
citasRouter.delete('/:id_citas', eliminarcitas);

export default citasRouter;