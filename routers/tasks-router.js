const express = require('express');

const Tasks = require('./projects-model');

const router = express.Router();

router.put('/:id', (req, res) => {
    const { task_description, task_notes, task_completed } = req.body;
    const { id } = req.params;
    
    Tasks.editTask({ task_description, task_notes, task_completed }, id)
        .then(updatedTask => {
            if(updatedTask) {
                res.status(200).json({ data: updatedTask })
            } else {
                res.status(404).json({ message: "Updated task with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error updating task." })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Tasks.removeTask(id)
        .then(count => {
            if(count) {
                res.status(204).end()
            } else {
                res.status(404).json({ message: "Task with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error deleting task with specified ID." })
        })
})

module.exports = router;