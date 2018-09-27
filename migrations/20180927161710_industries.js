
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('industries', table => {
      table.increments('id')
      table.string('industry')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('industries')
  };
