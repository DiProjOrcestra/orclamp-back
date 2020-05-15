const { Router } = require('express');
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');
const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/projects', ProjectController.store);
module.exports = routes;