
exports.up = function(knex) {
    return knex.schema
          .createTable('projects', tbl => {
              tbl.increments()
              tbl.text('project_name', 128).notNullable().unique()
              tbl.text('project_description', 255)
              tbl.boolean('project_completed').notNullable().defaultTo(false)
          })
  
          .createTable('resources', tbl => {
              tbl.increments()
              tbl.text('resource_name', 128).notNullable().unique()
              tbl.text('resource_description', 255)
          })
  
          .createTable('project_resource', tbl => {
              tbl.increments()
              
              tbl.integer("project_id")
                  .unsigned()
                  .notNullable()
                  .references("projects.id")
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE")
  
              tbl.integer("resource_id")
                  .unsigned()
                  .notNullable()
                  .references("resources.id")
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE")
          })
  
          .createTable('tasks', tbl => {
              tbl.increments()
              tbl.text('task_description', 255).notNullable()
              tbl.text('task_notes', 255)
              tbl.boolean('task_completed').notNullable().defaultTo(false)
  
              tbl.integer("project_id")
                  .unsigned()
                  .notNullable()
                  .references("projects.id")
                  .onUpdate("CASCADE")
                  .onDelete("CASCADE")
          })
  
  };
  
  exports.down = function(knex) {
    return knex.schema
          .dropTableIfExists('tasks')
          .dropTableIfExists('project_resource')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects')
  };
  