var express = require("express");
var router = express.Router();

router.get("/subscribe",function(req,res){
    res.send("offer route");
})

router.get("/upload",function(req,res)
{
    res.send("Upload form");
})

router.get("/torso",function(req,res)
{
    res.render("home");
})

router.get("/lower",function(req,res)
{
    res.render("home");
})


module.exports=router;