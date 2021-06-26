var express = require("express");
var router = express.Router();

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
module.exports=router;