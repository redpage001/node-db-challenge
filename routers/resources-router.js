const express = require('express');

const Resources = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json({ data: resources })
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error retrieving list of resources." })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Resources.getResourceById(id)
        .then(resource => {
            if(resource) {
                res.status(200).json({ data: resource })
            } else {
                res.status(404).json({ message: "Resource with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error retrieving resource with specified ID." })
        })

})

router.post('/', (req, res) => {
    const { resource_name, resource_description } = req.body;

    Resources.addResource({ resource_name, resource_description})
        .then(newResource => {
            if(newResource) {
                res.status(200).json({ data: newResource })
            } else {
                res.status(404).json({ message: "New resource with specified ID was not found." })
            }
        })
        .catch(error => {
            console.log({ error })
            res.status(500).json({ message: "Error creating new resource." })
        })
})

module.exports = router;