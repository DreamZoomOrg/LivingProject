/**
 * Created by winnie on 16/8/3.
 */

// 加载依赖项
var express = require('express'),
    amd = require('amd-loader'),
    route = require('./filter/filter.route');

var app = express();// 初始化项目对象

route.init(app);// 装载路由
app.listen(3000);// 开启端口，启动服务
