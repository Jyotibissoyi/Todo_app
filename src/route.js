const { fetchById, fetchTask, createTask} = require("./todoController");
const {registerUser, login} = require("./userController");
const {auth} = require("./auth");
const express = require("express");
const Route = express.Router();


Route.post("/login",auth, login);
Route.post("/register",auth, registerUser);
Route.post("/fetch",fetchTask);
Route.post("fetch/id",auth,fetchById);
Route.post("create",auth, createTask);

module.exports = Route;