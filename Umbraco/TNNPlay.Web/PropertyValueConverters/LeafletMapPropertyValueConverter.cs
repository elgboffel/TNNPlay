using Newtonsoft.Json;
using System;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;

namespace Umbraco.Web.PropertyValueConverters.Leaflet
{
	public class LeafletMapPropertyValueConverter : PropertyValueConverterBase, IPropertyValueConverterMeta
	{
		public override bool IsConverter(PublishedPropertyType propertyType)
		{
			return propertyType.PropertyEditorAlias.Equals("Leaflet.Map");
		}

		public override object ConvertDataToSource(PublishedPropertyType propertyType, object source, bool preview)
		{
			if (source == null) return new LeafletMapModel();
			return JsonConvert.DeserializeObject<LeafletMapModel>(source.ToString());
		}

		public override object ConvertSourceToObject(PublishedPropertyType propertyType, object source, bool preview)
		{
			// source should come from ConvertSource and be a string (or null) already
			return source ?? new LeafletMapModel();
		}

		public override object ConvertSourceToXPath(PublishedPropertyType propertyType, object source, bool preview)
		{
			// source should come from ConvertSource and be a string (or null) already
			throw new NotImplementedException();
		}

		public Type GetPropertyValueType(PublishedPropertyType propertyType)
		{
			return typeof(LeafletMapModel);
		}

		public PropertyCacheLevel GetPropertyCacheLevel(PublishedPropertyType propertyType, PropertyCacheValue cacheValue)
		{
			return PropertyCacheLevel.Request;
		}
	}

	public class LeafletMapModel
	{
		[JsonProperty("zoom")]
		public int Zoom { get; set; }

		[JsonProperty("center")]
		public LeafletLatLngModel Center { get; set; }

		[JsonProperty("latLng")]
		public LeafletLatLngModel LatLng { get; set; }

		[JsonProperty("bounds")]
		public LeafletLatLngBoundsModel Bounds { get; set; }
	}

	public class LeafletLatLngModel
	{
		[JsonProperty("lat")]
		public decimal Lat { get; set; }

		[JsonProperty("lng")]
		public decimal Lng { get; set; }
	}

	public class LeafletLatLngBoundsModel
	{
		[JsonProperty("southWest")]
		public LeafletLatLngModel SouthWest { get; set; }

		[JsonProperty("northEast")]
		public LeafletLatLngModel NorthEast { get; set; }

		[JsonProperty("northWest")]
		public LeafletLatLngModel NorthWest { get; set; }

		[JsonProperty("southEast")]
		public LeafletLatLngModel SouthEast { get; set; }
	}
}