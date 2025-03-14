const { Sequelize } = require("sequelize");
require('dotenv').config();
const db_name=process.env.DB_NAME;
const db_username=process.env.DB_USERNAME;
const db_password=process.env.DB_PASSWORD;
const db_host=process.env.DB_HOST;
const sequelize=new Sequelize(db_name,db_username,db_password,{
    host:db_host,
    dialect:'mysql'
})
module.exports=sequelize