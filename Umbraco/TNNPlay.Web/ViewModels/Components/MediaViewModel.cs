using System.Collections.Generic;
using System.Web.Mvc;
using Umbraco.Core.Models;
using System.ComponentModel;


namespace TNNPlay.Web.ViewModels.Components
{
    public class MediaViewModel
    {
        public IPublishedContent Image { get; set; }

        public string ImageUrl { get; set; }

        public MvcHtmlString EmbedVideo { get; set; }

        public string EmbedVideoUrl { get; set; }

        public RenderMediaTypes MediaType { get; set; }

        public bool EnableImageFallback { get; set; }

        public GridSettings GridSettings { get; set; }

        public MediaHeights MediaHeights { get; set; }

        /// <summary>
        /// None responsive width, overwrites grid sizes
        /// </summary>
        public TypedWidths TypedWidths { get; set; }

        public MediaViewModel()
        {
            GridSettings = new GridSettings();
            MediaHeights = new MediaHeights();
            MediaType = RenderMediaTypes.Image;
        }
    }

    public class TypedWidths
    {
        public int TypedXs { get; set; }
        public int TypedMs { get; set; }
        public int TypedSm { get; set; }
        public int TypedMd { get; set; }
        public int TypedLg { get; set; }
        public int TypedXl { get; set; }
        public int TypedXxl { get; set; }
        public bool InheritedValuesSet { get; set; }

        public TypedWidths() { }

        public TypedWidths(TypedWidths settings)
        {
            TypedXs = settings.TypedXs > 0 ? settings.TypedXs : 12;
            TypedMs = settings.TypedMs > 0 ? settings.TypedMs : TypedXs;
            TypedSm = settings.TypedSm > 0 ? settings.TypedSm : TypedMs;
            TypedMd = settings.TypedMd > 0 ? settings.TypedMd : TypedSm;
            TypedLg = settings.TypedLg > 0 ? settings.TypedLg : TypedMd;
            TypedXl = settings.TypedXl > 0 ? settings.TypedXl : TypedLg;
            TypedXxl = settings.TypedXxl > 0 ? settings.TypedXxl : TypedXl;
            InheritedValuesSet = true;
        }
    }

    public class GridSettings
    {
        [DisplayName("xs")]
        public int GridXs { get; set; }

        [DisplayName("ms")]
        public int GridMs { get; set; }

        [DisplayName("sm")]
        public int GridSm { get; set; }

        [DisplayName("md")]
        public int GridMd { get; set; }

        [DisplayName("lg")]
        public int GridLg { get; set; }

        [DisplayName("xl")]
        public int GridXl { get; set; }

        [DisplayName("xxl")]
        public int GridXxl { get; set; }

        public int GridTotalPadding { get; set; }

        public bool InheritedValuesSet { get; set; }

        public GridSettings()
        {
            GridTotalPadding = 30;
            GridXs = 12;
        }

        public GridSettings(GridSettings settings)
        {
            GridTotalPadding = 30;
            GridXs = settings.GridXs > 0 ? settings.GridXs : 12;
            GridMs = settings.GridMs > 0 ? settings.GridMs : GridXs;
            GridSm = settings.GridSm > 0 ? settings.GridSm : GridMs;
            GridMd = settings.GridMd > 0 ? settings.GridMd : GridSm;
            GridLg = settings.GridLg > 0 ? settings.GridLg : GridMd;
            GridXl = settings.GridXl > 0 ? settings.GridXl : GridLg;
            GridXxl = settings.GridXxl > 0 ? settings.GridXxl : GridXl;
            InheritedValuesSet = true;
        }
    }

    public class MediaHeights
    {
        public int? HeightXs { get; set; }
        public int? HeightMs { get; set; }
        public int? HeightSm { get; set; }
        public int? HeightMd { get; set; }
        public int? HeightLg { get; set; }
        public int? HeightXl { get; set; }
        public int? HeightXxl { get; set; }
        public bool InheritedValuesSet { get; set; }

        public MediaHeights() { }

        public MediaHeights(MediaHeights settings)
        {
            HeightXs = settings.HeightXs != null ? settings.HeightXs : null;
            HeightMs = settings.HeightMs > 0 ? settings.HeightMs : HeightXs;
            HeightSm = settings.HeightSm > 0 ? settings.HeightSm : HeightMs;
            HeightMd = settings.HeightMd > 0 ? settings.HeightMd : HeightSm;
            HeightLg = settings.HeightLg > 0 ? settings.HeightLg : HeightMd;
            HeightXl = settings.HeightXl > 0 ? settings.HeightXl : HeightLg;
            HeightXxl = settings.HeightXxl > 0 ? settings.HeightXxl : HeightXl;
            InheritedValuesSet = true;
        }
    }

    public enum RenderMediaTypes
    {
        Image,
        ImageUrl,
        Video,
        Cover
    }

    public enum YouTubeMediaType
    {
        Default,
        Hqdefault,
        Mqdefault,
        Sddefault,
        Maxresdefault
    }
}
