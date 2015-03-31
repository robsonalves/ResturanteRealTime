using Restaurante.Dominio.Entidade;

namespace Restaurante.Web.Hub
{
    public class Cozinha : Microsoft.AspNet.SignalR.Hub
    {
        public void InformarCozinha(Pedido pedido)
        {
            //Posso Fazer alguma coisa aqui...
            Clients.All.InformarCozinheiros(pedido);
        }
    }
}