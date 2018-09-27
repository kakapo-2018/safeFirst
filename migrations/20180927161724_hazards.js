exports.up = function(knex, Promise) {
    return knex.schema.createTable('hazards', table => {
      table.increments('id')
      table.string('hazard')
      table.string('risk')
      table.string('control')
      table.string('daily')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hazards')
  };
