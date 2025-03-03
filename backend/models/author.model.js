const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AUTHOR=sequelize.define('author',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV1,
        primaryKey:true
    },
    bio:{
        type:DataTypes.STRING(200)
    },
    qualification:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=AUTHOR;