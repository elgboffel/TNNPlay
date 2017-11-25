using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;

namespace BaseSite.Web.ViewModels.Components
{
     public class MediaListViewModel : MediaViewModel
    {
        public IPublishedContent ViewModel { get; set; }

        public IEnumerable<IPublishedContent> MediaList { get; set; }

        public MediaListSettings MediaListSettings { get; set; }

        /// <summary>
        /// Modify a specific index
        /// </summary>
        public MediaListIndex MediaListIndex { get; set; }

        public int ItemsPerPage { get; set; }

        public int Page { get; set; }

        public decimal TotalPages { get; set; }

        public int Skips {
            get
            {
                return (Page - 1) * ItemsPerPage;
            }
        }

        /// <summary>
        /// Method name for method containing logic for the rendered view
        /// </summary>
        public RenderListMethod RenderMethod { get; set; }

        public ViewRenderMode ViewRenderMode { get; set; }

        public RenderPartialView RenderPartialView { get; set; }

        public bool InitialLoad { get; set; }

        /// <summary>
        /// E.g media-list--green
        /// </summary>
        public string MedialistClassModifier { get; set; }

        /// <summary>
        /// E.g card--green
        /// </summary>
        public string CardClassModifier { get; set; }

        public string AsyncButtonClass { get; set; }

        public MediaListViewModel()
        {
            RenderPartialView = RenderPartialView.MediaListAsync;
            ViewRenderMode = ViewRenderMode.Default;
            InitialLoad = true;
            MediaListSettings = new MediaListSettings
            {
                ShowLead = true,
                ShowImage = true
            };
        }
    }

    public class MediaListSettings
    {
        public bool ShowImage { get; set; }

        public bool ShowLead { get; set; }

        public bool ShowTitle { get; set; }

        public bool ShowBreadcrumb { get; set; }

        public bool ShowTrumpet { get; set; }
    }

    public class MediaListIndex
    {
        public int[] Indexes { get; set; }

        public string CardClassModifier { get; set; }

        public TypedWidths TypedWidths { get; set; }

        public GridSettings GridSettings { get; set; }

        public MediaHeights MediaHeights { get; set; }
    }

    public enum ViewRenderMode
    {
        Default,
        EnableBootstrap
    }

    public enum RenderListMethod
    {
        Default,
        RelatedPagesByTags,
        SearchByQuery,
        SearchVideoBySelectedTag,
        SeachVideoByQuery,
        OverviewNested
    }

    public enum RenderPartialView
    {
        MediaListAsync,
        MediaList
    }
}
