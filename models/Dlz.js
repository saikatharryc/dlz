/**
 * Import Library
 */
var mongoose = require("mongoose");

/**
 * Schema for this model,
 * we can define multiple schema as well.
 */
const DlzSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required!"]
    },
    id:{
        type:Number,
        required:[true,"id is required!"]
    }
});

module.exports = { DlzSchema };
