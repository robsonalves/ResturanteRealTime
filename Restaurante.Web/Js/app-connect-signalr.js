var connector = connector || {};

$(function() {
    connector = $.connection.cozinha;
    $.connection.hub.start();   
});

