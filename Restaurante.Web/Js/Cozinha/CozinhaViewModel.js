var Cozinha = Cozinha || {};

Cozinha.Application = function () {
    var self = this;

    self.InformarCozinha = function (pedido) {
        connector.server.informarCozinha(pedido);
    }

    self.AtualizarCozinheiros = function ($container, pedido) {
        var html = '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="col-sm-8" style="background-color:lavender;"> ' + pedido + ' </div></div>' +
            '</div><div class="container-fluid"></div>';

        $($container).append(html);
    }
}