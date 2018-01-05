"use strict";
var App;
(function (App) {
    var StickyMobileHeader = (function () {
        function StickyMobileHeader(_element) {
            var _screenMdMin = window.matchMedia('(min-width: 768px)');
            if (!_screenMdMin.matches)
                this.stickyToggle(_element);
        }
        StickyMobileHeader.prototype.stickyToggle = function (_element) {
            var _this = this;
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var cachedHeightMobileHead = _element.offsetHeight;
            var elementDistanceToTop = this.getTotalDistanceToDocumentTop(_element);
            var mobileHeaderDownClass = 'mobile-header--down';
            var mobileHeaderUpClass = 'mobile-header--up';
            var parentElement = _element.parentElement;
            parentElement.style.height = cachedHeightMobileHead + 'px';
            window.addEventListener('scroll', function () {
                var windowPosition = this.pageYOffset;
                if (windowPosition >= elementDistanceToTop) {
                    didScroll = true;
                }
                else {
                    _element.classList.remove(mobileHeaderDownClass);
                }
            });
            setInterval(function () {
                if (didScroll && !_element.classList.contains('mobile-header--open')) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);
            function hasScrolled() {
                var scrollTop = window.scrollY;
                if (Math.abs(lastScrollTop - scrollTop) <= delta)
                    return;
                if (scrollTop > lastScrollTop && scrollTop > cachedHeightMobileHead) {
                    _element.classList.remove(mobileHeaderDownClass);
                    _element.classList.add(mobileHeaderUpClass);
                    _element.style.top = -cachedHeightMobileHead + 'px';
                }
                else {
                    if (scrollTop + $(window).height() < $(document).height()) {
                        _element.classList.remove(mobileHeaderUpClass);
                        _element.classList.add(mobileHeaderDownClass);
                        _element.style.top = 0 + 'px';
                    }
                }
                lastScrollTop = scrollTop;
            }
        };
        StickyMobileHeader.prototype.getTotalDistanceToDocumentTop = function (_element) {
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
        return StickyMobileHeader;
    }());
    App.StickyMobileHeader = StickyMobileHeader;
})(App || (App = {}));
(function () {
    var element = document.querySelector('.mobile-header');
    var init = new App.StickyMobileHeader(element);
})();
//# sourceMappingURL=sticky-mobile-header.js.map