
var Garcom = Garcom || {};
var pedido = pedido || {};

Garcom.InformarCozinha = function () {
    var form = $("#formPedido");
    form.serialize();
    appCozinha.server.informarCozinha(form);
}


Garcom.GetPedido  = function(__pedido) {
    pedido = __pedido;
}

$("#btnSalvar").click(function() {
    Garcom.InformarCozinha();
});
    
        
    
