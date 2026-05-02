
const express  = require("express");
const app = express();

//middlewares

// app.use((req,res, next) => {
    
//   console.log(" 1st middleware working");
  
//   next();
// });


// app.use((req,res, next) => {
    
//   console.log(" 2nd middleware working");
  
//   next();
// });

// //logger
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname, req.path, req.time)
//     next();
// });

const checkToken = (req, res, next) => {

 let{token} = req.query;
 if (token === "giveaccess") {
    next();
 }
throw new Error("ACCESS DENIED!");
};

app.get("/api",checkToken, (req,res) => {
    res.send("data");
});

app.use("/random", (req,res,next) => {
    console.log("i am onnly for random ");
    next();
});



app.get("/",(req,res) => {
    res.send("hii iam root");

});

app.get("/random", (req,res) => {
    res.send("this is an random page");
});

//error handling 
app.use((req,res) => {
  res.status(404).send("page not found !");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});