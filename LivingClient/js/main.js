/**
 * Created by winnie on 16/8/12.
 */
var thirdpartPath='thirdpart/';
require.config({
    shim:{
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    paths:{
        'underscore':thirdpartPath+'underscore',
        'jquery':thirdpartPath+'jquery',
        'backbone':thirdpartPath+'backbone'
    }
});
require(['underscore','backbone','jquery'],function(){
    //TODO app start
    console.log('123');
});