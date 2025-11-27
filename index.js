const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/route");

let app = express();

app.use("/", route)
mongoose.connect("mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/Todo",()=>{
    console.log("MongoDb connected")
})


app.connect(3000 || PORT ,()=>{
    console.log("Server is running")
});
