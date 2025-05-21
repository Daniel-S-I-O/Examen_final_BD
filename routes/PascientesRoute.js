import { Router } from 'express';

import {
    listarTodospascientes,
    listarpascientesPorId,
    crearpascientes,
    actualizarpascientes,
    eliminarpascientes
} from '../controllers/pascientesController.js';

const pascientesRouter = Router();

pascientesRouter.get('/', listarTodospascientes);
pascientesRouter.get('/:id_pascientes', listarpascientesPorId);
pascientesRouter.post('/', crearpascientes);
pascientesRouter.put('/:id_pascientes', actualizarpascientes);
pascientesRouter.delete('/:id_pascientes', eliminarpascientes);

export default pascientesRouter;