using System.ComponentModel.DataAnnotations;

namespace TNNPlay.Web.ViewModels.Components
{
    public class UtilityEnums
    {
        public enum RenderLayoutType
        {
            Default,
            Fluid
        }

        public enum ContentLayout
        {
            [Display(Name = "content-normal")]
            Default,
            [Display(Name = "content-left")]
            ContentLeft = 165,
            [Display(Name = "content-right")]
            ContentRight = 166,
        }

        public enum CustomGraphic
        {
            Default,
            MapAnimation = 246
        }
    }
}
