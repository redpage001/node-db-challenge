const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json({ data: projects})
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error retrieving list of projects." })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if(project) {
                res.status(200).json({ data: project })
            } else {
                res.status(404).json({ message: "Project with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error retrieving project with specified ID." })
        })
})

router.post('/', (req, res) => {
    const { project_name, project_description } = req.body;

    Projects.addProject({ project_name, project_description })
        .then(newProject => {
            if(newProject) {
                res.status(200).json({ data: newProject })
            } else {
                res.status(404).json({ message: "New project with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error creating new project." })
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
        .then(tasks => {
            if(tasks.length) {
                res.status(200).json({ data: tasks })
            } else {
                res.status(404).json({ message: "List of Tasks with specified ID was not found or does not have tasks." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error retrieving list of tasks from project with specified ID." })
        })
})

router.post('/:id/tasks', (req, res) => {
    const { task_description, task_notes } = req.body;
    const { id } = req.params

    Projects.addTask({task_description, task_notes}, id)
        .then(newTask => {
            res.status(200).json({ data: newTask })
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error creating new task for project with specified ID." })
        })
})

module.exports = router;