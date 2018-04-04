const mongoose = require("mongoose");

const Dlz = mongoose.model("Dlz");

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

function get_all(req, payload) {
  return Dlz.find({})
    .lean()
    .exec();
}

module.exports = {
  create,
  get_all
};
