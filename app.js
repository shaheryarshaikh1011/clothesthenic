var express = require("express");
var app= express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
})



app.listen(3000,'localhost',function() {
	// body...
	console.log("Listening to port"+3000);
	console.log("Clothesthenic Local Server has Started");

});