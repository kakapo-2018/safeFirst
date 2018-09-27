
exports.up = function(knex, Promise) {
    return knex.schema.createTable('industries', table => {
      table.increments('id')
      table.string('industry')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('industries')
  };
