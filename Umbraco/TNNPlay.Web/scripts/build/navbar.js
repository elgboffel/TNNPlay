"use strict";
var App;
(function (App) {
    var Expander = (function () {
        function Expander(element) {
            var xsMin = window.matchMedia('(min-width: 768px)');
            if (!xsMin.matches) {
                this.mobileNavExpander(element);
            }
        }
        Expander.prototype.mobileNavExpander = function (_element) {
            var __this = this;
            var navExpander = _element.querySelector('.navbar-header__expander');
            navExpander.addEventListener('click', function (event) {
                var mobileContent = _element.querySelector('.navbar-header__navbar');
                event.preventDefault();
                __this.slideToggle(mobileContent);
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
            var openClass = 'navbar-header__navbar--open';
            var openBtnClass = 'btn--toggle-open';
            var expanderBtn = _element.parentElement.querySelector('.btn--toggle');
            if (_element.classList.contains(openClass)) {
                _element.classList.remove(openClass);
                expanderBtn.classList.remove(openBtnClass);
            }
            else {
                _element.classList.add(openClass);
                expanderBtn.classList.add(openBtnClass);
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
    var elements = document.querySelectorAll('.navbar-header');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Expander(elements.item(i));
    }
})();
//# sourceMappingURL=navbar.js.map