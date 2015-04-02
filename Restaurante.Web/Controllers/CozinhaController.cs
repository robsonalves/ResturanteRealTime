using System.Web.Mvc;

namespace Restaurante.Web.Controllers
{
    public class CozinhaController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}