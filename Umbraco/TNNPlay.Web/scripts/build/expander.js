"use strict";
var App;
(function (App) {
    var Expander = (function () {
        function Expander(element) {
            var _this = this;
            var xsMin = window.matchMedia('(min-width: 768px)');
            if (!xsMin.matches) {
                this.mobileNavExpander(element);
                this.stickyToggle(element);
            }
            window.addEventListener('resize', function () {
                if (!xsMin.matches) {
                    _this.mobileNavExpander(element);
                    _this.stickyToggle(element);
                }
            });
        }
        Expander.prototype.mobileNavExpander = function (_element) {
            var __this = this;
            var navExpander = _element.querySelector('.expander__trigger--nav');
            navExpander.addEventListener('click', function (event) {
                var expander = this.closest('.expander');
                var mobileHeader = this.closest('.mobile-header');
                var expanderTarget = mobileHeader.querySelector('.mobile-header__nav');
                event.preventDefault();
                expander.classList.toggle('expander--open');
                mobileHeader.classList.toggle('mobile-header--open');
                __this.slideToggle(expanderTarget);
            });
        };
        Expander.prototype.stickyToggle = function (_element) {
            var mobileHeader = _element.closest('.mobile-header');
            var mobileHead = mobileHeader.querySelector('.mobile-header__head');
            var logo = mobileHead.querySelector('.mobile-header__logo');
            var cachedHeightMobileHead = mobileHead.offsetHeight;
            var cachedHeightLogo = logo.offsetHeight;
            var duration = 400;
            var easing = 'easeInOutQuad';
            mobileHead.style.height = cachedHeightMobileHead + "px";
            document.documentElement.style.paddingTop = mobileHeader.offsetHeight + "px";
            mobileHeader.classList.add('mobile-header--sticky');
            window.addEventListener('scroll', function () {
                var windowPosition = this.scrollY;
                console.log(windowPosition);
                if (windowPosition > 200) {
                    anime({
                        targets: mobileHead,
                        height: cachedHeightMobileHead * 0.7,
                        duration: duration,
                        easing: easing
                    });
                    anime({
                        targets: logo,
                        height: cachedHeightLogo * 0.7,
                        duration: duration,
                        easing: easing
                    });
                }
                else {
                    anime({
                        targets: mobileHead,
                        height: cachedHeightMobileHead,
                        duration: duration,
                        easing: easing
                    });
                    anime({
                        targets: logo,
                        height: cachedHeightLogo,
                        duration: duration,
                        easing: easing
                    });
                }
            });
        };
        Expander.prototype.slideToggle = function (_element, _duration, _easing) {
            if (_duration === void 0) { _duration = 600; }
            if (_easing === void 0) { _easing = 'easeInOutQuint'; }
            if (_element.offsetHeight > 0) {
                _element.style.overflowX = 'hidden';
                anime({
                    targets: _element,
                    height: 0,
                    duration: _duration,
                    easing: _easing,
                    complete: function () {
                        _element.removeAttribute('style');
                    }
                });
            }
            else {
                _element.style.overflowX = 'hidden';
                _element.style.display = 'block';
                _element.style.height = '0';
                var height = this.getHeightFromChilds(_element);
                anime({
                    targets: _element,
                    height: height,
                    duration: _duration,
                    easing: _easing,
                    complete: function () {
                        _element.style.overflowX = 'visible';
                        _element.style.height = 'auto';
                    }
                });
            }
        };
        Expander.prototype.getHeightFromChilds = function (_element) {
            var children = _element.childNodes;
            var combinedHeight = 0;
            for (var i = 0; i < children.length; i++) {
                if (children.item(i).nodeType === 1)
                    combinedHeight += children.item(i).offsetHeight;
            }
            return combinedHeight;
        };
        return Expander;
    }());
    App.Expander = Expander;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.expander');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Expander(elements.item(i));
    }
})();
//# sourceMappingURL=expander.js.map