/**
 * Created by winnie on 16/8/3.
 */

// 加载依赖库
var express = require('express'),
    amd = require('amd-loader'),
    socket=require('./moudle/module.socket'),
    route = require('./filter/filter.route');

var app = express();// 初始化项目对象
route.init(app);// 装载路由
socket.init();// 装载socket
app.listen(3000);// 开启端口，启动服务
