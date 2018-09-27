exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('companies', table => {
      table.increments('id')
      table.string('company')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('companies')
  };