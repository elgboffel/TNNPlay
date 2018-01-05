using Umbraco.Web.PropertyValueConverters.Leaflet;
using System.Collections.Generic;
using Umbraco.Core.Models;
using Umbraco.Web;
using Newtonsoft.Json;
using Umbraco.Web.PublishedContentModels;
using System.Linq;

namespace TNNPlay.Web.ViewModels.Components
{
        public class MapViewModel
    {
        public string ClassModifiers { get; set; }

        public IEnumerable<IPublishedContent> MapList { get; set; }

        public LeafletMapModel MapLocation { get; set; }

        public MapListRenderType MapListRenderType { get; set; }

        public int Zoom { get; set; }

        public int CanvasHeight { get; set; }

        public IEnumerable<MapMarker> Markers { get; set; }

        public MapViewModel()
        {
            CanvasHeight = 400;
            MapListRenderType = MapListRenderType.Default;
        }
    }

    public class MapMarker
    {
        [JsonProperty(PropertyName = "lat")]
        public decimal Lat { get; set; }

        [JsonProperty(PropertyName = "lng")]
        public decimal Lng { get; set; }

        [JsonProperty(PropertyName = "content")]
        public MapMarkerContent content { get; set; }

        [JsonProperty(PropertyName = "contentList")]
        public IEnumerable<MapMarkerContent> contentList { get; set; }
    }

    public class MapMarkerContent
    {
        [JsonProperty(PropertyName = "heading")]
        public string Heading { get; set; }

        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }
    }

        public enum MapListRenderType
    {
        Default,
        NestedContent
    }
}
