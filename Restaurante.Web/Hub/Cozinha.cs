using Restaurante.Web.ViewModel;

namespace Restaurante.Web.Hub
{
    public class Cozinha : Microsoft.AspNet.SignalR.Hub
    {
        public void InformarCozinha(PedidoViewModel viewmodel)
        {
            //Posso Fazer alguma coisa aqui...
            Clients.All.InformarCozinheiros(viewmodel.Pedido);
        }
    }
}