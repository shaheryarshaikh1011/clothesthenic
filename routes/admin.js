var express = require("express");
var router = express.Router();
var torso   =require("../models/torso");
var lower   =require("../models/lower");
var middleware=require("../middleware");
var csv      = require('csv-express');
var Subs    =require("../models/subs");





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




router.get("/admin",middleware.isLoggedIn,function(req,res)
{
    res.render("admin");
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

router.post("/subs",function(req,res) {
    var name=req.body.name;
    var age=req.body.age;
    var state=req.body.state;
    var city=req.body.city;
    var email=req.body.email;
    var phno=req.body.phno;
    var insta=req.body.insta;
   
	
	var newSubs={name:name,age:age,state:state,city:city,email:email,phno:phno,insta:insta};
    console.log(newSubs);

	Subs.create(newSubs,function(err,newlyCreated) {
		// body...if(err)
		if(err)
		{
			console.log(err);
		}
		else
		{	
			console.log(newlyCreated);
			res.redirect("/subs");
		}
	})
	
	// body...
})


router.get('/api/exporttocsv', middleware.exp,function(req, res, next) {
    var filename   = "subs.csv";
    var dataArray;
    Subs.find().lean().select('-__v  -_id').exec({}, function(err, products) {
        if (err) res.send(err);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
        res.csv(products, true);
    });
 });

module.exports=router;