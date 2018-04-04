var api = {};
api.includeRoutes = function(app) {
  const dlz = require("./dlz");

  app.use("/", dlz);
};

module.exports = api;
