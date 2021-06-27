var express = require("express");
var router = express.Router();
var torso   =require("../models/torso");
var lower   =require("../models/lower");
var middleware=require("../middleware");




router.get("/torsoform",middleware.isLoggedIn,function(req,res)
{
    res.render("torsoform");
})


router.get("/lowerform",middleware.isLoggedIn,function(req,res)
{
    res.render("lowerform");
})

router.post("/lowerform",function(req,res) {
	var name=req.body.name;
	var image=req.body.image;
	var price=req.body.price;
	var newLower={name:name,image:image,price:price};

	lower.create(newLower,function(err,newlyCreated) {
		// body...if(err)
		if(err)
		{
			console.log(err);
		}
		else
		{	
			
			res.redirect("/lower");
		}
	})
	
	// body...
})

router.post("/torsoform",function(req,res) {
	var name=req.body.name;
	var image=req.body.image;
	var price=req.body.price;
	var newTorso={name:name,image:image,price:price};

	torso.create(newTorso,function(err,newlyCreated) {
		// body...if(err)
		if(err)
		{
			console.log(err);
		}
		else
		{	
			
			res.redirect("/torso");
		}
	})
	
	// body...
})




router.get("/admin",function(req,res)
{
    res.send("i am admin route");
})

router.get("/posts",function(req,res)
{
    res.send("i am new post route")
})

router.get("/data",function(req,res)
{
    res.send("i am user data route")
})

//logout route
router.get("/logout",function(req,res) {
	req.logout();
	
	res.redirect("/");
});



module.exports=router;