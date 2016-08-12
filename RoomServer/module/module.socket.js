/**
 * Created by winnie on 16/8/10.
 */
define(function () {

    var io=require('socket.io'),
        roomBiz=require('../biz/biz.room');
    function init() {
        io.on('connect',function(socket){// 长链接事件
            let roomObj=new roomBiz.Room(),
                rooms=roomObj.getRoom();
            socket.on('setup',function(msg){// 获取房间列表
                return rooms;
            });

            socket.on('join room',function(msg){// 加入房间
                let roomName=msg.room;
                socket.join(roomName);// 加入房间
                io.in(roomName).emit('boast message',msg);// 广播通知所有用户，有人加入
            });

            socket.on('broast message',function(msg){// 广播消息
                let roomName=msg.room;
                io.in(roomName).emit('send message',{msg:msg});
            });

            socket.on('private message',function(msg){// 私聊发送消息
                socket.emit('private',{});
            });

            socket.on('disconnect',function(msg){
                let roomName=msg.room;
                socket.leave(roomName);
                io.in(roomName).emit('broast message',msg);// 广播通知所有用户，有人离开
            });// 退出房间，断开链接
        });
    };

    return {
        init:init
    };
});