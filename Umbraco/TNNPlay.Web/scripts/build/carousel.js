"use strict";
var App;
(function (App) {
    var Carousel = (function () {
        function Carousel(element) {
            this._element = element;
            this._dataOptions = this._element.getAttribute("data-options");
            this._defaultOptions = JSON.parse(this._dataOptions);
            this.activate();
            this.positionDots();
            this.onWindowResize();
        }
        Carousel.prototype.activate = function () {
            var _this = this;
            setTimeout(function () {
                $(_this._element).owlCarousel(_this._defaultOptions);
                $(_this._element).resize();
                picturefill();
            }, 300);
        };
        Carousel.prototype.onWindowResize = function () {
            var _this = this;
            $(window).resize(function () {
                _this.positionDots();
            });
        };
        Carousel.prototype.positionDots = function () {
            var element = $(this._element);
            var dots = element.find('.owl-dots');
            var dotsHeight = dots.outerHeight();
            var image = element.find('img');
            var imageHeight = image.outerHeight();
            var dotsPosition = imageHeight - dotsHeight - 5;
            dots.css({ 'top': dotsPosition });
        };
        return Carousel;
    }());
    App.Carousel = Carousel;
})(App || (App = {}));
(function () {
    var elements = document.getElementsByClassName('owl-carousel');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Carousel(elements[i]);
    }
})();
//# sourceMappingURL=carousel.js.map