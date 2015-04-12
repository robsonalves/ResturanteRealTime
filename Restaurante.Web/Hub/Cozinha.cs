namespace Restaurante.Web.Hub
{
    public class Cozinha : Microsoft.AspNet.SignalR.Hub
    {
        public void InformarCozinha(dynamic pedido)
        {
            //Posso Fazer alguma coisa aqui...
            Clients.All.AtualizarCozinheiros(pedido);
        }
    }
}