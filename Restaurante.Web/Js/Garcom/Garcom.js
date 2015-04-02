var Garcom = Garcom || {};
var pedido = pedido || {};

Garcom.InformarCozinha = function () {
    var form = $("#formPedido").serialize();
    //var form = { Pedido: { Codigo: 123, Items:'teste', Garcom: { Codigo: 23, Nome: 'Robson' } } };
    connector.server.informarCozinha(JSON.stringify(form));
}


Garcom.GetPedido = function (__pedido) {
    pedido = __pedido;
}

$("#btnSalvar").click(function () {
    Garcom.InformarCozinha();
});



