var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
});

module.exports = mongoose.model("Product", ProductSchema);