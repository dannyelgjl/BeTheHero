import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentsController from './app/controllers/IncidentController';

const routes = new Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/incidents', IncidentsController.store);

export default routes;
