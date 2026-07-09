const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/", (req,res) => {
    res.send("hi i am root");
});

app.get("/err", (req, res) => {
   abcd=abcd;
});

app.use((err,req,res,next)=> {
    console.log("-------ERROR-------");
    next(err);

})

app.use((err,req,res,next)=> {
    console.log("-------ERROR2-------");
    next(err);

})

app.use((req,res) => {
    res.status(404).send("Page not found");
});

 app.listen(3000, () => { 
    console.log("server listening to port 3000");
 });