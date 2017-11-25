using Lecoati.LeBlender.Extension.Models;
using System.ComponentModel.DataAnnotations;
using System.Web;
using Umbraco.Web.PropertyValueConverters.Leaflet;
using Umbraco.Web.PublishedContentModels;

namespace BaseSite.Web.ViewModels.Components
{
    public class InfoBoxViewModel
    {
        public string Heading { get; set; }

        public IHtmlString Content { get; set; }

        public InfoBoxPosition Position { get; set; }

        public InfoBoxViewModel()
        {
            Position = InfoBoxPosition.RightOut;
        }

        public InfoBoxViewModel(LeBlenderValue x)
        {
            Heading = x.GetValue<string>("heading");
            Content = x.GetValue<IHtmlString>("rte");
            Position = x.GetValue<InfoBoxPosition>("factboxPosition");
        }

        public InfoBoxViewModel(Factbox x)
        {
            Heading = x.Heading;
            Content = x.Rte;
            Position = (InfoBoxPosition)x.FactboxPosition;
        }
    }

    public enum InfoBoxPosition
    {
        //Display name is used to genereate css namings
        [Display(Name = "default")]
        Default = 66,
        [Display(Name = "left-out")]
        LeftOut = 67,
        [Display(Name = "left")]
        Left = 68,
        [Display(Name = "right-out")]
        RightOut = 69,
        [Display(Name = "right")]
        Right = 70,
    }
}
