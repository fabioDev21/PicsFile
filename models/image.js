const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ImageSchema = new Schema({
    name: {type: String, required: true},
    local: {type: String, required: true},
    src:{type: String, required: true}
})

module.exports = mongoose.model("Image", ImageSchema)
