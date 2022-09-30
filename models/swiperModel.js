var mongoose = require('mongoose');
var swiperSchema = require('../schemas/swiperSchema');

//创建 swiper 模型 ( 需要使用 swiper 表结构 )
module.exports = mongoose.model('Swiper', swiperSchema, 'swiper' );