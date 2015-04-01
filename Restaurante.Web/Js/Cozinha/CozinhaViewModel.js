var Cozinha = Cozinha || {};

Cozinha.Application = function() {
    var self = this;

    self.InformarCozinha  = function(pedido) {
        connector.server.informarCozinha(pedido);
    }

    self.AtualizarCozinheiros = function(pedido) {
     //Jquery que irá atualizar os pedidos na tela.
    console.log(pedido);   
    }
}