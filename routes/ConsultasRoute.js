import { Router } from 'express';

import {
    listarTodosConsultas,
    listarConsultasPorId,
    crearConsultas,
    actualizarConsultas,
    eliminarConsultas
} from '../controllers/ConsultasController.js';

const ConsultasRouter = Router();

ConsultasRouter.get('/', listarTodosConsultas);
ConsultasRouter.get('/:id', listarConsultasPorId);
ConsultasRouter.post('/', crearConsultas);
ConsultasRouter.put('/:id', actualizarConsultas);
ConsultasRouter.delete('/:id', eliminarConsultas);

export default ConsultasRouter;