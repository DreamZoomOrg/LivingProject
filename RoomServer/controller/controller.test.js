/**
 * Created by winnie on 16/8/9.
 */
define(function(){
        return {
            get:function(req,res){
                res.send('test get');
            },
            post:function(req,res){
                res.send('test post');
            }
        };
    }
);