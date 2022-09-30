var mongoose = require('mongoose');
var musicSchema = require('../schemas/musicSchema');

//创建 user 模型 ( 需要使用 user 表结构 )
module.exports = mongoose.model('Music', musicSchema, 'music' );