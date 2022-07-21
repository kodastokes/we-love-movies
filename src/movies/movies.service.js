const knex = require("../db/connection");
// const mapProperties = require("../utils/map-properties");

function list() {
  return knex("movies").select("*");
}

function listMovie() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .groupBy("m.movie_id");
}

function read(movie_id) {
  return knex("movies as m")
    .select("m.*")
    .where({ "m.movie_id": movie_id })
    .first();
}

module.exports = {
  list,
  read,
  listMovie,
};
