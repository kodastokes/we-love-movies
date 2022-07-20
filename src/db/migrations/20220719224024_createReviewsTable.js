
exports.up = function(knex) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments("review_id").primary()
        table.text("content")
        table.integer("score")
        table.foreign("critic_id")
             .reference("critic_id")
             .inTable("critics")
        table.foreign("movie_id")
             .reference("movie_id")
             .inTable("movies")
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};
