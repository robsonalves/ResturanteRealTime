var viewmodel = viewmodel || {};


viewmodel.InformarCozinheiros = function (pedido) {
    //Jquery que irá atualizar os pedidos na tela.
    console.log(pedido);
}

$(function() {
    appCozinha.server.informarCozinha = function (pedido) {
        viewmodel.InformarCozinheiros(pedido);
    }
})