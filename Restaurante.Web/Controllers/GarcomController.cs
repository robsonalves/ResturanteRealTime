using System.Web.Mvc;
using Restaurante.Dominio.Entidade;
using Restaurante.Web.ViewModel;

namespace Restaurante.Web.Controllers
{
    [Authorize]
    public class GarcomController : BaseController
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Restaurante RealTime";

            var garcom = GetCurrentGarcom();

            var viewmodel = new PedidoViewModel(new Pedido(garcom));

            return View(viewmodel);
        }
    }
}