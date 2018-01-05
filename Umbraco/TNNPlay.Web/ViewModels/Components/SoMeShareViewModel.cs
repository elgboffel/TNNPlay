using Umbraco.Core.Models;

namespace TNNPlay.Web.ViewModels.Components
{
    public class SoMeShareViewModel
    {
        public IPublishedContent CurrentPage { get; set; }

        public bool EnableFacebook { get; set; }

        public bool EnableEmail { get; set; }

        public bool EnableTwitter { get; set; }

        public bool EnableGooglePlus { get; set; }

        public bool EnableLinkedIn { get; set; }

        public bool EnablePrint { get; set; }

        public bool EnableCopyUrl { get; set; }
    }
}
