const express = require('express');

const ProjectsRouter = require('./routers/projects-router.js');
const ResourcesRouter = require('./routers/resources-router.js');
const TasksRouter = require('./routers/tasks-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;