
exports.up = function(knex) {
    return knex.schema.createTable("movies_theaters", (table) => {
        table.foreign("movie_id")
             .reference("movie_id")
             .inTable("movies")
        table.foreign("theater_id")
             .reference("theater_id")
             .inTable("theaters")
        table.boolean("is_showing")
    })
};
