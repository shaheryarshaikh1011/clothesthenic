var express = require("express");
var app= express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var User    =require("./models/user");


var adminRoutes=require("./routes/admin");
var indexRoutes=require("./routes/index");
var audRoutes=require("./routes/aud")
app.use(express.static(__dirname + "/public"));

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://shaheryar:shaheryar@clothesthenic.echts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err) {
	if(err)
	{
		//if connection fails
		console.log(err);
	}
	else
	{
		console.log("we are connected to Database");
	}
});


//passport configuration
app.use(require("express-session")({
	secret:"Once again Bittu wins cutest dog!",
	resave: false,
	saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.use(indexRoutes);
app.use(adminRoutes);
app.use(audRoutes);


//this function get triggered when a user tries to access invalid route it return status of 404 not found and a webpage
app.use(function (req, res) {
    res.status(404).render('404');
  });


const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
    console.log("Listening to port "+"http://localhost:"+port);
	console.log("CLothesthenic server has Started");
});