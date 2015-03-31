
var Garcom = Garcom || {};
var pedido = pedido || {};

Garcom.InformarCozinha = function () {
    var self = this;
    pedido = self.GetPedido();
    appCozinha.server.informarCozinha(pedido);
}


Garcom.GetPedido  = function(__pedido) {
    pedido = __pedido;
}

$("#btnSalvar").click(function() {
    var form = $("#formPedido");
    self.GetPedido(form.serialize());
});
    
        
    
