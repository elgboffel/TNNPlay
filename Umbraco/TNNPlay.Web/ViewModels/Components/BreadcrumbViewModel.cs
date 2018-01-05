using System.Collections.Generic;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class BreadcrumbViewModel
    {
        public IPublishedContent CurrentPage { get; set; }

        public bool ShowCurrentPage { get; set; }

        public string ClassModifier { get; set; }

        public string DropdownClassModifier { get; set; }

        public BreadcrumbViewModel()
        {
            this.ShowCurrentPage = true;
        }
    }
}
