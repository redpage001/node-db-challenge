
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: "Resource 1", resource_description: "Resource 1 Description"},
        { resource_name: "Resource 2", resource_description: "Resource 2 Description"},
        { resource_name: "Resource 3", resource_description: "Resource 3 Description"},
        { resource_name: "Resource 4", resource_description: "Resource 4 Description"},
        { resource_name: "Resource 5", resource_description: "Resource 5 Description"},
        { resource_name: "Resource 6", resource_description: "Resource 6 Description"},
        { resource_name: "Resource 7", resource_description: "Resource 7 Description"},
      ]);
    });
};
