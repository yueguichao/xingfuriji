var mongoose = require('mongoose');

//创建 user 表结构 并抛出
module.exports = mongoose.Schema({
    title: String,
    author: String,
    pic: String,
    url: String
},
    {
        versionKey: false
    }
)