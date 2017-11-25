using System.Collections.Generic;
using Umbraco.Core.Models;

namespace BaseSite.Web.ViewModels.Components
{
    public class ContactCardViewModel : MediaViewModel
    {
        public string Name { get; set; }

        public string Title { get; set; }

        public string WorkArea { get; set; }

        public string Department { get; set; }

        public string Phone { get; set; }

        public string Mobile { get; set; }

        public string Mail { get; set; }

    }
}

