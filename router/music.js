var express = require('express');
var jwt = require('jsonwebtoken');

//创建express子路由
var router = express.Router();

//导入Music模型对象
var musicModel = require("../models/musicModel")

//api接口,新增音乐的请求
router.post('/add', (req, res) => {
    //req 请求对象
    console.log('req.body', req.body);
    
    musicModel.insertMany(req.body, (err) => {
        if (!err) { //如果没有出错
            res.send({ code: 200, msg: "添加成功!" });
        }
    })
})

//api接口,音乐列表的请求
router.get('/list', (req, res) => {
    musicModel.find({}, (err, data) => {
        if (!err) {
            res.send({ code: 200, msg: "查询成功!", list: data });
        }
    })
})

module.exports = router;