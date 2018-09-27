
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('incidents', table => {
      table.increments('id')
      table.integer('user_id')
      table.string('incident_type')
      table.string('date_time')
      table.string('task')
      table.string('other_task')
      table.string('incident')
      table.string('other_incident')
      table.string('location')
      table.string('first_aid')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('incidents')
  };
