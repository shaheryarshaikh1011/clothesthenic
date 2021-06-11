var express = require("express");
var app= express();

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
})

app.get("/reg",function(req,res)
{
    res.send("register route");
})

app.get("/login",function(req,res)
{
    res.send("login route");
})

app.get("/subscribe",function(req,res){
    res.send("offer route");
})

app.get("/upload",function(req,res)
{
    res.send("Upload form");
})
//this function get triggered when a user tries to access invalid route it return status of 404 not found and a webpage
app.use(function (req, res) {
    res.status(404).render('404');
  });


const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
    console.log("Listening to port "+port);
	console.log("CLothesthenic has Started");
});