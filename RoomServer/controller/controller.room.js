/**
 * Created by winnie on 16/8/8.
 */
define(function(){
    return {
        get:function(req,res){
            res.send('room get');
        },
        post:function(req,res){
            res.send('room post');
        }
    };
});