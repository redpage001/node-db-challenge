
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Project 1', project_description: "Project 1 Description"},
        { project_name: 'Project 2', project_description: "Project 2 Description"},
        { project_name: 'Project 3', project_description: "Project 3 Description"},
      ]);
    });
};
