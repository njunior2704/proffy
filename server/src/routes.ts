import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController;



routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connnections', connectionsController.create);
routes.get('/connnections', connectionsController.index);


export default routes;