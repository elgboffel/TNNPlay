using Newtonsoft.Json.Linq;
using TNNPlay.Web.ViewModels.Components;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web.Mvc;
using static TNNPlay.Web.ViewModels.Components.UtilityEnums;

namespace TNNPlay.Web.Helpers
{
    public static partial class UtilityHelpers
    {
        public static ContentLayout ConvertToContentLayout(this string value)
        {
            var result = ContentLayout.Default;

            if (value == string.Empty)
                return ContentLayout.Default;

            switch (value)
            {
                case "Content Right":
                    result = ContentLayout.ContentRight;
                    break;

                case "Content Left":
                    result = ContentLayout.ContentLeft;
                    break;

                default:
                    break;
            }

            return result;
        }

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
    }
}
