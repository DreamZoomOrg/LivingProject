/**
 * Created by winnie on 16/8/8.
 */
define(function () {
    var routeLibrarian = require('../librarian/librarian.route'),// 路由配置库
        _=require('underscore-contrib'),// underScore工具库
        routeMap = routeLibrarian.routeMap;// 读取route配置

    /**
     * @method 初始化路由
     * @params {Object} app 应用程序上下文对象
     */
    var initRoute = function (app) {
        // 根据配置映射生成路由规则
        if (routeMap && routeMap.length) {
            for (var i = 0, len = routeMap.length; i < len; i++) {
                var controller = require('../controller/controller.' + routeMap[i].name),// 加载controller
                    types = routeMap[i].type,// 请求类型（get，post）
                    name = '/'+routeMap[i].name;// 路由规则（‘／test’）
                _.each(types,function(type){
                    app[type](name,function(req,res){// ex: app.get('/test',controller.get);
                        // log
                        // 验证
                        // 数据处理
                        controller[type](req,res);// 跳转路由,调用controller
                        // exception
                    });
                });
            }
        }
    };

    return {
        initRoute: initRoute
    };
});