var express = require("express");
var router = express.Router();

var torso   =require("../models/torso");
var lower   =require("../models/lower");

router.get("/subscribe",function(req,res){
    res.send("offer route");
})

router.get("/upload",function(req,res)
{
    res.send("Upload form");
})

router.get("/home",function(req,res)
{
    res.render("home");
})

router.get("/torso",function(req,res) {
	
	torso.find({},function(err,alltorso) {
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.render("torso.ejs",{torso:alltorso});

		}
		// body...
	})
	
	// body...
})
router.get("/lower",function(req,res) {
	
	lower.find({},function(err,alllower) {
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.render("lower.ejs",{lower:alllower});

		}
		// body...
	})
	
	// body...
})


router.get("/subs",function(req,res)
{
    res.render("user.ejs")
})
module.exports=router;