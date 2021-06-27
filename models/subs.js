var mongoose = require("mongoose");

var SubsSchema = new mongoose.Schema({
   name: String,
   age:{type:Number},
   state:String,
   city:String,
   email:String,
   phno:{type:Number},
   insta: String
});

module.exports = mongoose.model("Subs", SubsSchema);


