const express=require('express');
const getAdmin=require('../controllers/admin.controller');
const AuthorizationMW = require('../middlewares/authorization');
const roleauthMV = require('../middlewares/authentication.middleware');

const route=express.Router();

route.get('/',roleauthMV,AuthorizationMW(['admin']),getAdmin)

module.exports=route;
