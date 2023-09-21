
const express = require("express");
const router = express.Router();


const userDetails = [];

router.post("/users", (req, res) =>{
    userDetails.push({name:req.body.name})
    res.render('users', {title:"Users Page", data:userDetails})
    console.log(userDetails)
})

router.get("/users", (req,res) =>{
    res.render('users', {title:"Users Page", data:userDetails})
})

module.exports = router;