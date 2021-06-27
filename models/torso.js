var mongoose = require("mongoose");

var TorsoSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
});

module.exports = mongoose.model("Torso", TorsoSchema);