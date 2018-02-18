using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class CarouselCardsViewModel : MediaViewModel
    {
        public IEnumerable<IPublishedContent> MediaList { get; set; }

        public MediaListSettings MediaListSettings { get; set; }

        public CarouselType CarouselType { get; set; }
        /// <summary>
        /// E.g owl-carousel--green
        /// </summary>
        public string CarouselClassModifier { get; set; }

        /// <summary>
        /// E.g card--green
        /// </summary>
        public string CardClassModifier { get; set; }


        public string Options { get; set; }

        public CarouselCardsViewModel()
        {
            Options = "{\"responsive\":{\"0\":{\"items\":1,\"stagePadding\":0},\"480\":{\"items\":1,\"stagePadding\":0},\"768\":{\"items\":1,\"stagePadding\":200},\"992\":{\"items\":1,\"stagePadding\":300},\"1200\":{\"items\":1,\"stagePadding\":350},\"1440\":{\"items\":1,\"stagePadding\":400}},\"nav\":true,\"loop\":true,\"dots\":false,\"navText\":[\"\",\"\"],\"autoplay\":false,\"margin\":30,\"autoHeight\":true}";
            CarouselType = CarouselType.Default;
        }
    }

    public enum CarouselType
    {
        Default,
        Hero
    }

    public enum HeroPosition
    {
        //Display name is used to genereate css namings
        [Display(Name = "top-left")]
        TopLeft = 264,
        [Display(Name = "top-right")]
        topRight = 265,
        [Display(Name = "default")]
        Default = 266,
        [Display(Name = "bottom-right")]
        BottomRight = 267
    }
}


