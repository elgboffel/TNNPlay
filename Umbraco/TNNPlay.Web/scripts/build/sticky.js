"use strict";
var App;
(function (App) {
    var Sticky = (function () {
        function Sticky(_element) {
            var _screenMdMin = window.matchMedia('(min-width: 991px)'), _this = this;
            if (_screenMdMin.matches)
                this.sticky(_element);
        }
        Sticky.prototype.sticky = function (_element) {
            var _this = this, elementTopDistance = this.getTotalDistanceToDocumentTop(_element), elementHeight = _element.offsetHeight, navbarHeight = 0, stickyClass = 'sticky', stickyTop = 'sticky--top', hideClass = 'sticky--hide', showClass = 'sticky--show', navbarHeader = document.querySelector('.navbar-header'), breaks = document.querySelectorAll('.sticky--break'), breaksDistanceToTop = [];
            for (var i = 0; i < breaks.length; i++) {
                var item = breaks.item(i);
                breaksDistanceToTop.push(_this.getTotalDistanceToDocumentTop(item));
            }
            window.addEventListener('scroll', function () {
                var windowPosition = this.pageYOffset, elementTotalHeight = elementHeight + 100;
                if (navbarHeader.classList.contains('navbar-header--sticky')) {
                    navbarHeight = navbarHeader.offsetHeight + 45;
                }
                if (windowPosition >= elementTopDistance - navbarHeight)
                    _element.classList.add(stickyClass, stickyTop);
                else
                    _element.classList.remove(stickyClass, stickyTop);
                for (var i = 0; i < breaksDistanceToTop.length; i++) {
                    var item = breaksDistanceToTop[i];
                    if (windowPosition > item - elementHeight)
                        _element.classList.add(hideClass);
                    else
                        _element.classList.remove(hideClass);
                }
            });
        };
        Sticky.prototype.getTotalDistanceToDocumentTop = function (_element) {
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
        return Sticky;
    }());
    App.Sticky = Sticky;
})(App || (App = {}));
(function () {
    var element = document.querySelector('.so-me-share');
    var init = new App.Sticky(element);
})();
//# sourceMappingURL=sticky.js.map