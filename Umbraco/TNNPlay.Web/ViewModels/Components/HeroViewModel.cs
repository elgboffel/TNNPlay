using Our.Umbraco.LinksPicker.Models;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class HeroViewModel : MediaViewModel
    {
        public string Heading { get; set; }

        public string Trumpet { get; set; }

        public string Lead { get; set; }

        public LinksPickerItem Link { get; set; }

        public bool FluidHero { get; set; }

        public string ModifierClass { get; set; }

        public HeroViewModel()
        {
            FluidHero = false;
        }

    }
}
