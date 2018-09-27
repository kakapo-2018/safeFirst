exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('hazards', table => {
      table.increments('id')
      table.string('hazard')
      table.string('risk')
      table.string('control')
      table.string('daily')
      table.string('incident')
      table.string('other_incident')
      table.string('location')
      table.string('first_aid')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('hazards')
  };
