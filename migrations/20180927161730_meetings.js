exports.up = function(knex, Promise) {
    return knex.schema.createTable('meetings', table => {
      table.increments('id')
      table.string('date_time')
      table.string('location')
      table.string('issues')
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('meetings')
  };