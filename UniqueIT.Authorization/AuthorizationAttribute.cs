using System;
using System.Web.Mvc;
using System.Web.Security;

namespace UniqueIT.Authorization
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
    public class AuthorizationAttribute : AuthorizeAttribute, IActionFilter, IExceptionFilter
    {

        public AuthorizationAttribute() { }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
        }

        void IActionFilter.OnActionExecuted(ActionExecutedContext filtercontext)
        {

        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                
            }
        }

        public void OnException(ExceptionContext filterContext)
        {

        }
    }
}
