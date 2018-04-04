var api = {};
/**
 * 
 * @param {Object} app 
 * app is Express Route  Object.
 */
api.includeRoutes = function(app) {
  /**
   * Import Route
   */
  const dlz = require("./dlz");

  /**
   * Register route Object to path
   */
  app.use("/", dlz);
};

module.exports = api;
