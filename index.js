const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/route");

let app = express();
app.use(express.json());
app.use("/", route)
mongoose.connect("mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/Todo")


app.listen(3000 || PORT ,()=>{
    console.log("Server is running")
});