/**
 * Created by winnie on 16/8/3.
 */
var express=require('express'),
    restful=require('node-restful');
var app=express();
var resource=restful.model().methods(['get','post']);
resource.register(app,'/resource');
app.listen(3000);
