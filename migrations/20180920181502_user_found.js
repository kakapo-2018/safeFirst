
exports.up = function(knex, Promise) {
    knex.schema.createTable('user_found', function(table){
        table.increments('id').primary();
        table.integer('user_id');
        table.integer('found_id')
      })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('user_found')
};
