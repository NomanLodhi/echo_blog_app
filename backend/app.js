const express=require('express');
const app=express();
const path=require('path'); 
const cors=require('cors');
const user=require('./routes/user.route');
const admin=require('./routes/admin.route');

app.use(express.json());
app.use('/files',express.static(path.join(__dirname,'files')))
app.use(cors('*'));
app.use('/api/v1/users',user);
app.use('/api/v1/admin',admin);


module.exports=app;