const USER =require('./user.model')
const AUTHOR =require('./author.model')

const db={}
db.user=USER;
db.author=AUTHOR;

// db.user.hasOne(
//     db.author,{
//         foreignKey:'user_id'
//     });
// db.author.belongsTo(db.user,{foreignKey:'user_id'});

module.exports=db;