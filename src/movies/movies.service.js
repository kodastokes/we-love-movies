const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

function list() {
  return knex("movies").select("*");
}

function read(movie_id) {
    return knex("movies as m")
      .select("m.*")
      .where({ "m.movie_id": movie_id })
      .first()
    //   .then(addCategory);
  }

module.exports = {
  list,
  read,
//   listOutOfStockCount,
//   listPriceSummary,
//   listTotalWeightByProduct,
};
