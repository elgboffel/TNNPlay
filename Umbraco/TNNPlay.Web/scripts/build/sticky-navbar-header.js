"use strict";
var App;
(function (App) {
    var StickyNavbarHeader = (function () {
        function StickyNavbarHeader(_element) {
            var _screenMdMin = window.matchMedia('(min-width: 991px)'), _this = this;
            if (_screenMdMin.matches)
                this.sticky(_element);
        }
        StickyNavbarHeader.prototype.sticky = function (_element) {
            var _this = this, elementTopDistance = this.getTotalDistanceToDocumentTop(_element), elementHeight = _element.offsetHeight, menu = _element.querySelector('.navbar-header__menu'), menuTopDistanceAndHeight = this.getTotalDistanceToDocumentTop(menu) + menu.offsetHeight, stickyClass = 'navbar-header--sticky';
            window.addEventListener('scroll', function () {
                var windowPosition = this.pageYOffset;
                if (windowPosition >= menuTopDistanceAndHeight) {
                    _element.classList.add(stickyClass);
                    document.body.style.paddingTop = elementHeight + 'px';
                }
                else {
                    document.body.style.paddingTop = '0';
                    _element.classList.remove(stickyClass);
                }
            });
        };
        StickyNavbarHeader.prototype.getTotalDistanceToDocumentTop = function (_element) {
            var location = 0;
            if (_element.offsetParent) {
                do {
                    location += _element.offsetTop;
                    _element = _element.offsetParent;
                } while (_element);
            }
            return location >= 0 ? location : 0;
        };
        ;
        return StickyNavbarHeader;
    }());
    App.StickyNavbarHeader = StickyNavbarHeader;
})(App || (App = {}));
(function () {
    var element = document.querySelector('.navbar-header');
    var init = new App.StickyNavbarHeader(element);
})();
//# sourceMappingURL=sticky-navbar-header.js.map