var mongoose = require("mongoose");

var LowerSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
});

module.exports = mongoose.model("lower", LowerSchema);