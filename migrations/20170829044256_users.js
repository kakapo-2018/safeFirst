exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('user_name')
      table.string('email_address')
      table.string('contact_details')
      table.string('hash')
      table.integer('company_id')
      table.integer('industry_id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };