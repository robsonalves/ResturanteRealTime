using Restaurante.Dominio.Entidade;

namespace Restaurante.Web.ViewModel
{
    public class PedidoViewModel
    {
        private Pedido _pedido;

        public PedidoViewModel(Pedido pedido)
        {
            _pedido = pedido;
        }

        public Pedido Pedido
        {
            get { return _pedido; }
        }
    }
}