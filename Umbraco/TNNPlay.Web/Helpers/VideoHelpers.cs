using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TNNPlay.Web.ViewModels.Components;

namespace TNNPlay.Web.Helpers
{
    public static partial class UtilityHelpers
    {
        public static string GetYouTubeEmbedFromUrl(this string url)
        {
            var embed = string.Empty;

            if (string.IsNullOrEmpty(url))
                return embed;

            var videoId = url.Substring(url.LastIndexOf("v=") + 2);
            embed = $"https://www.youtube.com/embed/{videoId}";

            return embed;
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

            if (embed.Contains("?"))
                videoId = embed.GetValueBetween("embed/", "?");
            else
                videoId = embed.Substring(embed.LastIndexOf('/') + 1);

            var thumbnailUrl = $"http://img.youtube.com/vi/{videoId}/{YouTubeMediaType.Maxresdefault.ToString().ToLower()}.jpg";

            return thumbnailUrl;
        }

        public static string GetVimeoThumbnail(this string embed)
        {
            if (string.IsNullOrEmpty(embed))
                return "";

            var videoId = string.Empty;

            if (embed.Contains("\" width"))
                videoId = embed.GetValueBetween("video/", "\" width");
            else
                videoId = embed.Substring(embed.LastIndexOf('/') + 1);

            var thumbnailUrl = $"https://i.vimeocdn.com//video/{videoId}_1280x720.jpg";

            return thumbnailUrl;
        }
    }
}
