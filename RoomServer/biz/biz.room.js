/**
 * Created by winnie on 16/8/8.
 */
define(function(){
    var Room=class Room{
        constructor(){
            this.rooms=[];
        }
        getRoom(){
            return this.rooms;
        }
    };
    return {
        Room:Room
    };
});