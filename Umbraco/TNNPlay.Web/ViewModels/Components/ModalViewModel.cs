using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class ModalViewModel
    {
        public Guid Id { get; set; }

        public IEnumerable<IPublishedContent> Modal { get; set; }
    }
}
