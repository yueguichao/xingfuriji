// 连接数据库
var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/blog',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connect('mongodb+srv://yueguichao:ygc1999ygc@cluster0.nozswrc.mongodb.net/personal_blog',{ useNewUrlParser: true, useUnifiedTopology: true})
//2.连接成功
mongoose.connection.on('connected',function(){
    console.log('连接成功');
})
//3.连接失败
mongoose.connection.on('error',function(err){
    console.log('连接错误：',err);
})
//4.断开连接
mongoose.connection.on('disconnection',function(){
    console.log('断开连接');
})
module.exports = mongoose;
