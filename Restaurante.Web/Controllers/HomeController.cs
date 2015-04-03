using System.Web.Mvc;
using Restaurante.Dominio.Entidade;
using Restaurante.Web.ViewModel;
using UniqueIT.Authorization;

namespace Restaurante.Web.Controllers
{
    public class HomeController : BaseController
    {       
        [Authorization]
        public ActionResult Index()
        {
            var garcom = GetCurrentGarcom();
         
            var viewmodel = new PedidoViewModel(new Pedido(garcom));
            
            return View(viewmodel);
        }
    }
}