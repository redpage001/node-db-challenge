
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: "Project 1 Task 1 Description", task_notes: "Project 1 Task 1 Notes", project_id: 1},
        { task_description: "Project 1 Task 2 Description", task_notes: "Project 1 Task 2 Notes", project_id: 1},
        { task_description: "Project 2 Task 1 Description", task_notes: "Project 2 Task 1 Notes", project_id: 2},
        { task_description: "Project 2 Task 2 Description", task_notes: "Project 2 Task 2 Notes", project_id: 2},
        { task_description: "Project 3 Task 1 Description", task_notes: "Project 3 Task 1 Notes", project_id: 3},
        { task_description: "Project 3 Task 2 Description", task_notes: "Project 3 Task 2 Notes", project_id: 3},
        { task_description: "Project 3 Task 3 Description", task_notes: "Project 3 Task 3 Notes", project_id: 3},
      ]);
    });
};
