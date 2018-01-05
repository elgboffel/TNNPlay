using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class TagListViewModel
    {
        public IEnumerable<IPublishedContent> Tags { get; set; }

        public TagListViewModel(IEnumerable<IPublishedContent> items)
        {
            Tags = items;
        }
    }
}
