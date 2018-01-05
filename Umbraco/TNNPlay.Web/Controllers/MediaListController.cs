using TNNPlay.Web.ViewModels.Components;
using Umbraco.Web.PublishedContentModels;
using Examine;
using Examine.LuceneEngine.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Mvc;
using Umbraco.Core;

namespace TNNPlay.Web.Controllers
{
    public class MediaListController : SurfaceController
    {
        public ActionResult GetPage(MediaListViewModel model)
        {
            ModelState.Clear();

            var result = Enumerable.Empty<IPublishedContent>();
            var pageQueryString = Umbraco.GetQueryString("p", string.Empty);

            result = model.RenderMethod != RenderListMethod.Default ?
                GetSearchTypeMethod(model.RenderMethod.ToString(), this, new object[] { model }) :
                model.MediaList;

            model.MediaList = result;

            //If items per page isn't initiated, render the full result
            if (model.ItemsPerPage == 0)
                model.ItemsPerPage = model.MediaList.Count();

            model.Page = model.Page <= 0 ? 1 : model.Page + 1;
            model.TotalPages = Math.Ceiling((decimal)result.Count() / model.ItemsPerPage);

            if (!string.IsNullOrEmpty(pageQueryString) && model.InitialLoad)
                model.MediaList = model.MediaList.Take(model.ItemsPerPage * int.Parse(pageQueryString));
            else
                model.MediaList = model.MediaList.Skip(model.Skips).Take(model.ItemsPerPage);

            if(model.MediaList != null && model.MediaList.Any())
                return PartialView($"Components/_{model.RenderPartialView}", model);

            return PartialView("_EmptySearchResult", model);

        }

        public IEnumerable<IPublishedContent> OverviewNested(MediaListViewModel model)
        {
            var viewModel = model.ViewModel;

            var overwritePicker = viewModel.GetPropertyValue("overviewOverwriterPicker", Enumerable.Empty<IPublishedContent>());
            var rootPicker = viewModel.GetPropertyValue("overviewRootPicker", Enumerable.Empty<IPublishedContent>());

            if (rootPicker != null && rootPicker.Any())
            {
                var children = rootPicker
                    .First()
                    .Children
                    .Where(x => x.IsVisible() && x.DocumentTypeAlias.Equals("gridPage"))
                    .OrderByDescending(x => x.GetPropertyValue("date", x.CreateDate));

                var joinedList = overwritePicker.Concat(children).DistinctBy(x => x.Id);

                return joinedList;
            }

            return Enumerable.Empty<IPublishedContent>();
        }

        public IEnumerable<IPublishedContent> RelatedPagesByTags()
        {
            var currentPage = CurrentPage;
            var searchInstance = ExamineManager.Instance;
            var searcher = searchInstance.SearchProviderCollection["ExternalSearcher"];

            var tags = currentPage
                .GetPropertyValue<IEnumerable<IPublishedContent>>("tagPicker")
                .Select(x => x.Id.ToString())
                .ToArray();

            if (!tags.Any())
                return Enumerable.Empty<IPublishedContent>();

            var criteria = searcher.CreateSearchCriteria();
            var query = criteria
                .Field("__IndexType", "content")
                .Not().Field("umbracoNaviHide", "1")
                .Not().Field(" __NodeTypeAlias", "defaultTag")
                .And().GroupedOr(new[] { "searchTags" }, tags)
                .Compile();

            var result = Umbraco.TypedSearch(query)
                .Where(x => x.Id != currentPage.Id && x.IsVisible());

            return result;
        }

        public IEnumerable<IPublishedContent> SearchVideoBySelectedTag()
        {
            var tags = new List<string>();
            var travelTag = Umbraco.GetQueryString("t", string.Empty);
            var destinationTag = Umbraco.GetQueryString("d", string.Empty);

            if (!string.IsNullOrEmpty(travelTag))
                tags.Add(travelTag);

            if (!string.IsNullOrEmpty(destinationTag))
                tags.Add(destinationTag);

            var searchInstance = ExamineManager.Instance;
            var searcher = searchInstance.SearchProviderCollection["ExternalSearcher"];

            if (tags == null && !tags.Any())
                return Enumerable.Empty<IPublishedContent>();

            var criteria = searcher.CreateSearchCriteria();
            var query = criteria
                .Field("__IndexType", "content")
                .Not().Field("umbracoNaviHide", "1")
                .Not().Field(" __NodeTypeAlias", "defaultTag")
                .And().Field("__NodeTypeAlias", "videoPage")
                .And().GroupedOr( new string[] { "searchTags" }, tags.ToArray())
                .Compile();

            var result = Umbraco.TypedSearch(query)
                .Where(x => x.IsVisible());

            return result;
        }

        public IEnumerable<IPublishedContent> SeachVideoByQuery()
        {
            var searchInstance = ExamineManager.Instance;
            var searcher = searchInstance.SearchProviderCollection["ExternalSearcher"];

            var queryString = Umbraco.GetQueryString("video", string.Empty);
            var SearchFields = new string[] { "searchWords", "nodeName", "heading", "pathNames", "lead", "teaserHeading", "teaserDescription", " __Raw_layout" };
            var result = new List<IPublishedContent>();

            if (string.IsNullOrEmpty(queryString))
                return result.AsEnumerable();

            var criteria = searcher.CreateSearchCriteria();
            var query = criteria
                .Field("__IndexType", "content")
                .Not().Field("umbracoNaviHide", "1")
                .Not().Field("template", "0")
                .And().Field("__NodeTypeAlias", "videoPage")
                .And().GroupedOr(SearchFields, queryString)
                .Compile();

            result.AddRange(Umbraco.TypedSearch(query));

            return result.AsEnumerable();
        }

        public IEnumerable<IPublishedContent> SearchByQuery()
        {
            var searchInstance = ExamineManager.Instance;
            var searcher = searchInstance.SearchProviderCollection["ExternalSearcher"];

            var queryString = Umbraco.GetQueryString("q", string.Empty);
            var SearchFields = new string[] { "searchWords", "nodeName", "heading", "lead", "teaserHeading", "teaserDescription", " __Raw_layout" };
            var result = new List<IPublishedContent>();

            if (string.IsNullOrEmpty(queryString))
                return result.AsEnumerable();

            var criteria = searcher.CreateSearchCriteria();
            var query = criteria
                .Field("__IndexType", "content")
                .Not().Field("umbracoNaviHide", "1")
                .Not().Field("template", "0")
                .And().GroupedOr(SearchFields, queryString)
                .Compile();

            result.AddRange(Umbraco.TypedSearch(query));

            return result.AsEnumerable();
        }

        //private ISearchResults SearchEmployees(SearchModel model)
        //{
        //    var searcher = ExamineManager.Instance.SearchProviderCollection["InternalMemberSearcher"];
        //    string[] fields = new string[] { "nodeName" };
        //    var criteria = searcher.CreateSearchCriteria();

        //    var terms = model.SearchTerms.Select(x => x.MultipleCharacterWildcard()).ToArray();
        //    var query = criteria.NodeTypeAlias("employee")
        //        .And()
        //        .Field("hideEmployee", "0")
        //        .And()
        //        .GroupedOr(fields, terms)
        //        .Compile();

        //    return searcher.Search(query);
        //}

        //private ISearchResults SearchPDF(SearchModel model)
        //{
        //    var searcher = ExamineManager.Instance.SearchProviderCollection["PDFSearcher"];
        //    string[] fields = new string[] { "FileTextContent", "nodeName" };
        //    var terms = model.SearchTerms.Select(x => x.MultipleCharacterWildcard()).ToArray();
        //    var criteria = searcher.CreateSearchCriteria();

        //    var query = criteria.GroupedOr(fields, terms).Compile();

        //    if (model.RootMediaNode != null)
        //    {
        //        query.Field("searchPath", model.RootMediaNode.Id.ToString()).Compile();
        //    }

        //    return searcher.Search(query);
        //}

        public IEnumerable<IPublishedContent> GetSearchTypeMethod<T>(string methodName, T instance, object[] objectParams = null)
        {
            var methodInfo = typeof(T).GetMethod(methodName);

            return (IEnumerable<IPublishedContent>)methodInfo.Invoke(instance, objectParams);
        }
    }
}
