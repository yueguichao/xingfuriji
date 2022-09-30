var express = require('express');
var jwt = require('jsonwebtoken');

//创建express子路由
var router = express.Router();

//导入User模型对象, 用来处理用户的登陆
var userModel = require("../models/userModel")

//api接口,处理注册用户的请求
router.post('/register', (req, res) => {
    //req 请求对象
    var { name,phone, pass } = req.body;
    //查询用户是否存在
    userModel.find({ phone }, (err, data) => {
        if (data.length != 0) { //用户存在
            res.send({ code: 400, msg: "用户已存在,注册失败!" });
        } else { //用户不存在, 插入新用户到数据表中
            userModel.insertMany({name,phone, pass}, (err) => {
                if (!err) { //如果没有出错
                    res.send({ code: 200, msg: "注册成功!" });
                }
            })
        }
    })
})

//api接口,处理用户登陆的请求
router.get('/login', (req, res) => {
    //req 请求对象 , 从 req.query 获取get参数
    //res 响应对象 , 通过 res.send 发送数据到客户端(浏览器)
    var { name,phone, pass } = req.query;
    //查询用户是否存在
    userModel.find({phone,pass }, (err, data) => {
        if (data.length == 1) { //用户存在,登陆成功
            var token = jwt.sign({ phone }, 'nodejs', { algorithm: 'HS256', expiresIn: '1h' });
            res.send({
                code: 200,
                msg: "登陆成功!",
                token,
                userinfo:{name,phone}
            });
        } else { //用户不存在,登陆失败
            res.send({ code: 400, msg: "登陆失败!" });
        }
    })
})

module.exports = router;