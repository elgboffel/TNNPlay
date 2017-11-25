using Newtonsoft.Json.Linq;
using BaseSite.Web.ViewModels.Components;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web.Mvc;

namespace BaseSite.Web.Helpers
{
    public static partial class UtilityHelpers
    {
        public static bool CheckIfGridExist(this JToken grid)
        {
            if (grid == null)
                return false;

            var check = grid.FindTokens("areas").Any();
            return check;
        }

        public static List<JToken> FindTokens(this JToken containerToken, string name)
        {
            List<JToken> matches = new List<JToken>();
            FindTokens(containerToken, name, matches);
            return matches;
        }

        private static void FindTokens(JToken containerToken, string name, List<JToken> matches)
        {
            if (containerToken.Type == JTokenType.Object)
            {
                foreach (JProperty child in containerToken.Children<JProperty>())
                {
                    if (child.Name == name)
                    {
                        matches.Add(child.Value);
                    }
                    FindTokens(child.Value, name, matches);
                }
            }
            else if (containerToken.Type == JTokenType.Array)
            {
                foreach (JToken child in containerToken.Children())
                {
                    FindTokens(child, name, matches);
                }
            }
        }

        public static string GetEnumDisplayName(this Enum enumType)
        {
            return enumType.GetType().GetMember(enumType.ToString())
                           .First()
                           .GetCustomAttribute<DisplayAttribute>()
                           .Name;
        }

        public static string GetValueBetween(this string value, string a, string b)
        {
            int posA = value.IndexOf(a);
            int posB = value.LastIndexOf(b);
            if (posA == -1)
                return "";

            if (posB == -1)
                return "";

            int adjustedPosA = posA + a.Length;
            if (adjustedPosA >= posB)
                return "";

            return value.Substring(adjustedPosA, posB - adjustedPosA);
        }

        public static string GetTagNameFromId(this string id)
        {
            var umbracoHelper = new Umbraco.Web.UmbracoHelper(Umbraco.Web.UmbracoContext.Current);

            var tag = umbracoHelper.TypedContent(id);

            if (tag == null)
                return "";

            return tag.Name;
        }

        public static string GetEmbedThumbnail(this string embed)
        {
            if (string.IsNullOrEmpty(embed))
                return "";

            var thumbnailUrl = string.Empty;
            var embedString = embed.ToString();

            if (embedString.Contains("youtube"))
                thumbnailUrl = embed.GetYouTubeThumbnail();

            if (embedString.Contains("vimeo"))
                thumbnailUrl = embed.GetVimeoThumbnail();

            return thumbnailUrl;
        }

        public static string GetYouTubeThumbnail(this string embed)
        {
            if (string.IsNullOrEmpty(embed))
                return "";

            var videoId = string.Empty;

            if(embed.Contains("?"))
                videoId = embed.GetValueBetween("embed/", "?");
            else
                videoId = embed.Substring(embed.LastIndexOf('/') + 1);

            var thumbnailUrl = $"http://img.youtube.com/vi/{videoId}/maxresdefault.jpg";

            return thumbnailUrl;
        }

        public static string GetVimeoThumbnail(this string embed)
        {
            if (string.IsNullOrEmpty(embed))
                return "";

            var videoId = string.Empty;

            if(embed.Contains("\" width"))
                videoId = embed.GetValueBetween("video/", "\" width");
            else
                videoId = embed.Substring(embed.LastIndexOf('/') + 1);

            var thumbnailUrl = $"https://i.vimeocdn.com//video/{videoId}_1280x720.jpg";

            return thumbnailUrl;
        }

        public static string ConvertGridSettingsToString(this GridSettings settings)
        {
            if (settings == null)
                return "";

            var result = new StringBuilder();
            var properties = typeof(GridSettings).GetProperties();

            for (var i = 0; i < properties.Count(); i++)
            {
                var property = properties.ElementAt(i);
                var propertyName = property.GetCustomAttribute(typeof(DisplayNameAttribute)) as DisplayNameAttribute;
                var propertyValue = settings.GetType().GetProperty(property.Name).GetValue(settings);
                if (propertyName == null) continue;

                result.Append($"col-{propertyName.DisplayName}-{propertyValue} ");
            }

            return result.ToString();
        }
    }
}
