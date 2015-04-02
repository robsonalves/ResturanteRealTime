var Cozinha = Cozinha || {};

Cozinha.Application = function () {
    var self = this;

    self.InformarCozinha = function (pedido) {
        connector.server.informarCozinha(pedido);
    }

    self.AtualizarCozinheiros = function ($container, data) {
        var pedido = $.parseJSON(data);
        var html = '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="col-sm-8" style="background-color:lavender;"> Pedido: ' + pedido.Itens + ' Garcom: '+ pedido.Garcom.Nome +' </div></div>' +
            '</div><div class="container-fluid"></div>';

        $($container).append(html);
    }
}