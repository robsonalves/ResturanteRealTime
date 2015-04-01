/// <reference path="../json2.js" />

var Garcom = Garcom || {};
var pedido = pedido || {};

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


Garcom.InformarCozinha = function () {
    //var form = $("#formPedido").serializeObject();
    var form = { Pedido: { Codigo: 123, Items:'teste', Garcom: { Codigo: 23, Nome: 'Robson' } } };
    connector.server.informarCozinha(form);

}


Garcom.GetPedido = function (__pedido) {
    pedido = __pedido;
}

$("#btnSalvar").click(function () {
    Garcom.InformarCozinha();
});



