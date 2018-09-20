
exports.up = function(knex, Promise) {
    knex.schema.createTable('user_lost', function(table){
        table.increments('id').primary();
        table.integer('user_id');
        table.integer('lost_id')
      })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('user_lost')
};
