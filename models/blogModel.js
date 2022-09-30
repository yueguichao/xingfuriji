var mongoose = require('mongoose');
var blogSchema = require('../schemas/blogSchema');

//创建 user 模型 ( 需要使用 user 表结构 )
module.exports = mongoose.model('Blog', blogSchema, 'blog' );