using System.Web.Mvc;
using UniqueIT.Authorization;

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