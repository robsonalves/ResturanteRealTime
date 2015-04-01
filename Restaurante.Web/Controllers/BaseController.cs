using System.Web.Mvc;
using Restaurante.Dominio.Entidade;

namespace Restaurante.Web.Controllers
{
    public class BaseController : Controller
    {
        public Garcom GetCurrentGarcom()
        {
            return new Garcom() {Codigo = 12, Nome = "Robson"};
        }
    }
}