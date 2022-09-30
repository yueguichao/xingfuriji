var mongoose = require('mongoose');
var userSchema = require('../schemas/userSchema');

//创建 user 模型 ( 需要使用 user 表结构 )
module.exports = mongoose.model('User', userSchema, 'users' );