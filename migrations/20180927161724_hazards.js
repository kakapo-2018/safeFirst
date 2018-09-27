exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('hazards', table => {
      table.increments('id')
      table.string('hazard')
      table.string('risk')
      table.string('control')
      table.string('daily')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('hazards')
  };
