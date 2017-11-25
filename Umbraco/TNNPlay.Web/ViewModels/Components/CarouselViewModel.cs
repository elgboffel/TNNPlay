﻿using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace BaseSite.Web.ViewModels.Components
{
    public class CarouselViewModel : MediaViewModel
    {
        public IEnumerable<IPublishedContent> Carousel { get; set; }

    }
}
