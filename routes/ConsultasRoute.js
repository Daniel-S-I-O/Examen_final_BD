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
ConsultasRouter.get('/:id_Consultas', listarConsultasPorId);
ConsultasRouter.post('/', crearConsultas);
ConsultasRouter.put('/:id_Consultas', actualizarConsultas);
ConsultasRouter.delete('/:id_Consultas', eliminarConsultas);

export default ConsultasRouter;