"use strict";
var App;
(function (App) {
    var ScrollTo = (function () {
        function ScrollTo(_element) {
            this.scrollTo(_element);
        }
        ScrollTo.prototype.scrollTo = function (_element) {
            var url = window.location.href, scrollId = _element.dataset.scroll, queryString = this.getQueryVariableValue('v', url);
            if (queryString === scrollId) {
                var distanceToTop = this.getElemDocTopDistance(_element);
                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            }
        };
        ScrollTo.prototype.getQueryVariableValue = function (variable, fullUrl) {
            if (fullUrl.length > 0) {
                var query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable.toLowerCase()) {
                        return pair[1];
                    }
                }
            }
            return "";
        };
        ;
        ScrollTo.prototype.getElemDocTopDistance = function (elem) {
            var location = 0;
            if (elem.offsetParent) {
                do {
                    location += elem.offsetTop;
                    elem = elem.offsetParent;
                } while (elem);
            }
            return location >= 0 ? location : 0;
        };
        ;
        return ScrollTo;
    }());
    App.ScrollTo = ScrollTo;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.scroll-to');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.ScrollTo(elements.item(i));
    }
})();
//# sourceMappingURL=scroll-to.js.map