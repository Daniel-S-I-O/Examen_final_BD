import { Router } from 'express';

import {
    listarTodosconsultas,
    listarconsultasPorId,
    crearconsultas,
    actualizarconsultas,
    eliminarconsultas
} from '../controllers/consultasController.js';

const consultasRouter = Router();

consultasRouter.get('/', listarTodosconsultas);
consultasRouter.get('/:id_consultas', listarconsultasPorId);
consultasRouter.post('/', crearconsultas);
consultasRouter.put('/:id_consultas', actualizarconsultas);
consultasRouter.delete('/:id_consultas', eliminarconsultas);

export default consultasRouter;