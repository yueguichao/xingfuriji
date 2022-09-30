var mongoose = require('mongoose');

//创建 user 表结构 并抛出
module.exports = mongoose.Schema({
    blogType: String,
    blogTitle: String,
    blogContent: String
},

    {
        versionKey: false
    }
)