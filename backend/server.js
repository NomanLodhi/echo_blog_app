const app=require('./app');
const sequelize = require('./config/db');
const db = require('./models/index');

require('dotenv').config()
const port=process.env.PORT;
(async()=>{
    try{
        await sequelize.authenticate();
        await db.user.sync({force:false});
        // await db.author.sync({force:true});
        console.log('Database connected successfully!!')
    }
    catch(error){
        console.log(`Error while connecting database ${error}`)
    }
})()
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while starting server ${err}`)
    }
    else{
        console.log(`Server started t port : ${port}`)
    }
        
})