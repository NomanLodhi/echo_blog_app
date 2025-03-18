const express=require('express');
const route=express.Router()
const { authorRegister } = require("../controllers/author.controller");
route.post('/register',authorRegister)

module.exports=route

