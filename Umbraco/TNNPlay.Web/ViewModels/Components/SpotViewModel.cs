using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web;
using static TNNPlay.Web.ViewModels.Components.UtilityEnums;

namespace TNNPlay.Web.ViewModels.Components
{
    public class SpotViewModel : MediaViewModel
    {
        public SpotSettings SpotSettings { get; set; }

        public string Heading { get; set; }

        public IEnumerable<IPublishedContent> CallToAction { get; set; }

        public string Url { get; set; }

        public string Trumpet { get; set; }

        public HtmlString Content { get; set; }

        /// <summary>
        /// E.g spot--green
        /// </summary>
        public string ClassModifier { get; set; }

        public SpotViewModel()
        {
            SpotSettings = new SpotSettings()
            {
                ContentLayout = ContentLayout.Default
            };
        }
    }

    public class SpotSettings
    {
        public RenderLayoutType LayoutType { get; set; }

        public bool EnableHeroLayout { get; set; }

        public bool EnableOverlay { get; set; }

        public ContentLayout ContentLayout { get; set; }

        public CustomGraphic CustomGraphic { get; set; }

    }
}
