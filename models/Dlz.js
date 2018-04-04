var mongoose = require("mongoose");

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
