var appCozinha = appCozinha || {};

$(function() {
    appCozinha = $.connection.cozinha;
    $.connection.hub.start();   
});

