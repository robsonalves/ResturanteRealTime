    var Garcom = Garcom || {};
    var pedido = pedido || {};

    Garcom.InformarCozinha = function () {
        var form = Garcom.GetPedido();
        connector.server.informarCozinha(JSON.stringify(form));
    }


    Garcom.GetPedido = function () {
        var form = $("#formPedido").serializeArray();
        var pedido = {};
        pedido.Garcom = {};

        $.each(form, function (i, field) {

            if (field.name === 'Pedido.Garcom.Codigo')
                pedido.Garcom.Codigo = field.value;

            if (field.name === 'Pedido.Garcom.Nome')
                pedido.Garcom.Nome = field.value;

            if (field.name === 'Pedido.Codigo')
                pedido.Codigo = field.value;

            if (field.name === 'Pedido.Items')
                pedido.Itens = field.value;
        });

        return pedido;

    }

    $("#btnSalvar").click(function () {
        Garcom.InformarCozinha();
    });



