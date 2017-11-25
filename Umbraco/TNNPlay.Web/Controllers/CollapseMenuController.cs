using BaseSite.Web.ViewModels.Components;
using System.Linq;
using Newtonsoft.Json;
using System.Web.Http;
using Umbraco.Core.Models;
using System.Net;
using Umbraco.Web.WebApi;
using Umbraco.Web;
using Newtonsoft.Json.Serialization;

namespace BaseSite.Web.Controllers
{

    public class CollapseMenuController : UmbracoApiController
    {

        [HttpGet]
        public IHttpActionResult GetChildrenOfPage(int id)
        {
            if (id == 0)
                return Content(HttpStatusCode.NotFound, "No PageId recieved");

            var page = Umbraco.TypedContent(id);

            if (page == null)
                return Content(HttpStatusCode.NotFound, $"No page with ID: {id} found");

            var childPages = page.Children()
                .Where(x => x.IsVisible())
                .Select(x => new CollapseMenuPage(x, true));

            if (!childPages.Any())
                return Content(HttpStatusCode.NotFound, $"No children found from page with ID: {id}");

            var model = new CollapseMenuSection
            {
                ParentPage = new CollapseMenuPage(page.Parent),
                ChildrenOfCurrentPage = childPages
            };

            return Json(
                model,
                new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver(),
                    NullValueHandling = NullValueHandling.Ignore
                });
        }
    }
}
