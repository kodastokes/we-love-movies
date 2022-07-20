const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await moviesService.list();
  res.json({ data });
}

module.exports = {
//   read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
//   listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
//   listPriceSummary: asyncErrorBoundary(listPriceSummary),
//   listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
