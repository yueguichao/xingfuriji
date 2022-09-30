var express = require('express');
var jwt = require('jsonwebtoken');

//创建express子路由
var router = express.Router();

//导入Swiper模型对象, 用来处理用户的登陆
var swiperModel = require("../models/swiperModel")

//api接口,增加轮播图
router.post('/add', (req, res) => {
    let _id = _id ? parseInt(_id + 1) : 100
    swiperModel.insertMany(req.body, (err) => {
        if (!err) { //如果没有出错
            res.send({ code: 200, msg: "添加成功!" });
        }
    })
})

//api接口,轮播图列表
router.get('/list', (req, res) => {
    swiperModel.find({}, (err, data) => {
        if (!err) {
            res.send({ code: 200, msg: "查询成功!", list: data });
        }
    })
})

module.exports = router;