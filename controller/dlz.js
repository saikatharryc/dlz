/**
 * Library Imports 
 */
const mongoose = require("mongoose");

/**
 * Model Imports 
 */
const Dlz = mongoose.model("Dlz");
/**
 * 
 * @param {Object} req 
 * @param {name,id} payload 
 */
function create(req, payload) {
  return new Promise((resolve, reject) => {
    let savableObj = new Dlz(payload);
    savableObj.save((error, saved) => {
      if (error) {
        return reject(error);
      }
      return resolve(saved);
    });
  });
}

/**
 * 
 * @param {Object} req 
 * @param {any} payload 
 */
function get_all(req, payload) {
  return Dlz.find({})
    .lean()
    .exec();
}

module.exports = {
  create,
  get_all
};
