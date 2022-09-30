//1.引入express模块
var express = require('express');
var expressjwt = require('express-jwt').expressjwt
//连接mongodb数据库
require("./db/index.js")
//2.创建express实例对象
var app = express();

//静态资源托管
app.use( express.static('static') )


//处理post参数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//设置中间件 验证token的有效性
app.use(expressjwt({
    secret: 'nodejs',
    algorithms: ['HS256']
}).unless({
    path: [ //接口白名单, 这里的接口时免除token验证的
        '/api/user/login',
        '/api/user/register'
    ]
}))


//应用 user的 子路由
var userRouter = require('./router/user')
app.use( "/api/user", userRouter )

//应用 music的 子路由
var musicRouter = require('./router/music')
app.use( "/api/music", musicRouter )

//应用 blog的 子路由
var blogRouter = require('./router/blog')
app.use( "/api/blog", blogRouter )

//应用 swiper的 子路由
var swiperRouter = require('./router/swiper')
app.use( "/api/swiper", swiperRouter )

//3.监听端口
app.listen(4000, () => {
    console.log('服务器运行在 http://localhost:4000');
});
