const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

app.use(bodyParser.urlencoded({extended:true}));
app.use(homeRoute);
app.use(usersRoute);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, ()=>{
    console.log("Server Running at Port No: 3000");
})
