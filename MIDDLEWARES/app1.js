const express = require("express");
const app = express();

//middleware
app.use((req, res, next) =>{
    console.log("Hi, I am 1st middlewares");
    return next();
});

app.use((req, res, next) =>{
    console.log("Hi, I am 2nd middlewares");
    return next();
});

app.get("/", (req,res) => {
    res.send("hi i am root");
});


//////////LOGGER/ UTILITY MIDDLEWARE////////////
//logger- morgan
app.use((req, res, next ) => {
    req.time = new Date(Date.now()).toString;
      console.log(req.method, req.time, req.hostname, req.pathname);
      return  next();
});

app.use("/random", (req, res, next) => {
    console.log("i am only for random  page ");
    return next();
});

////////////API TOKEN QUERY ///////////////////////

const checkToken = (req, res, next) => {
     let {token}= req.query;
        if(token === "giveaccess") {
           return next();
        }
        throw new Error("ACCESS DENIED");
};

app.get("/wrong", (req, res) => {
    abcd = abcd;
});

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/random", (req,res) => { 
    res.send("this is an random page ");
});    

//404
app.use((req, res) => {
    res.status(404).send("page not found!");
});


 app.listen(3000, () => { 
    console.log("server listening to port 3000");
 });
