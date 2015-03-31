namespace Restaurante.Dominio.Entidade
{
    public class Pedido
    {
        public Pedido(Garcom _garcom)
        {
            Garcom = _garcom;
        }
        public int Codigo { get; set; }
        public Garcom Garcom { get; private set; }
        public string Items { get; set; }
    }
}
