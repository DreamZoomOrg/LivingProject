/**
 * Created by winnie on 16/8/8.
 */
define(function(){
    var routeModule=require('../module/module.route');

    /**
     * @method
     */
    var init=function(app){
      routeModule.initRoute(app);
    };
    return {
        init:init
    };
});