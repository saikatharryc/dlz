const mongoose = require("mongoose");

const {DlzSchema} = require("./Dlz");

mongoose.model("Dlz", DlzSchema);

module.exports = mongoose;
