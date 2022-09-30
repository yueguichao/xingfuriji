var mongoose = require('mongoose');

//创建 user 表结构 并抛出
module.exports = mongoose.Schema({
    pic: String
},
    {
        versionKey: false
    }
)