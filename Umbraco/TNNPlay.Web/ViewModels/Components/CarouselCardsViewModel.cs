using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class CarouselCardsViewModel : MediaViewModel
    {
        public IEnumerable<IPublishedContent> List { get; set; }

        /// <summary>
        /// E.g owl-carousel--green
        /// </summary>
        public string CarouselClassModifier { get; set; }

        /// <summary>
        /// E.g card--green
        /// </summary>
        public string CardClassModifier { get; set; }

        public bool ShowTitle { get; set; }

        public bool ShowLead { get; set; }

        public bool ShowInfo { get; set; }

        public string Options { get; set; }

        public CarouselCardsViewModel()
        {
            Options = "{\"responsive\":{\"0\":{\"items\":1,\"stagePadding\":0},\"480\":{\"items\":1,\"stagePadding\":0},\"768\":{\"items\":1,\"stagePadding\":200},\"992\":{\"items\":1,\"stagePadding\":300},\"1200\":{\"items\":1,\"stagePadding\":350},\"1440\":{\"items\":1,\"stagePadding\":400}},\"nav\":true,\"loop\":true,\"dots\":false,\"navText\":[\"\",\"\"],\"autoplay\":false,\"margin\":30,\"autoHeight\":true}";
        }
    }
}


