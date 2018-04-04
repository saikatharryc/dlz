/**
 * Import Library
 */
const mongoose = require("mongoose");

/**
 * Import Schemas
 */
const {DlzSchema} = require("./Dlz");

/**
 * Register Schema as model
 */
mongoose.model("Dlz", DlzSchema);

module.exports = mongoose;
