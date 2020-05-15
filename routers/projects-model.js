const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    editProject,
    removeProject,
    getResources,
    getResourceById,
    addResource,
    getTasks,
    getTasksById,
    addTask,
    editTask,
    removeTask
}

//Projects//

function getProjects() {
    return db('projects')
}

function getProjectById(project_id) {
    return db('projects')
        .where({ id: project_id })
        .first()
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => {
            return getProjectById(id)
        })
}

function editProject(changes, id) {
    return db('projects')
        .where({ id: id })
        .update(changes)
        .then(count => {
            return getProjectById(id)
        })
}

function removeProject(id) {
    return db('projects')
        .where({ id: id })
        .del()
}

//Resourecs//

function getResources() {
    return db('resources')
}

function getResourceById(resource_id) {
    return db('resources')
        .where({ id: resource_id })
        .first()
}

function addResource(resource) {
    return db('resources')
        .insert(resource, "id")
        .then(([id]) => {
            return getResourceById(id)
        })
}

//Tasks//

function getTasks(project_id) {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed')
        .where({ 'tasks.project_id': project_id })
        .orderBy('tasks.id')
}

function getTasksById(task_id) {
    return db('tasks')
        .where({ id: task_id})
        .first()
}

function addTask(task, project_id) {
    return db('tasks')
        .insert({ ...task, project_id: project_id }, 'id')
        .then(([task_id]) => {
            return getTasksById(task_id)
        })
}

function editTask(changes, id) {
    return db('tasks')
        .where({ id: id })
        .update(changes)
        .then(count => {
            return getTasksById(id)
        })
}

function removeTask(id) {
    return db('tasks')
        .where({ id: id })
        .del()
}