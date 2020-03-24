import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentsController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';

const routes = new Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentsController.store);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

export default routes;
