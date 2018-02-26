"use strict";
var App;
(function (App) {
    var MapAnimation = (function () {
        function MapAnimation(element) {
            this.animatePaths(element);
        }
        MapAnimation.prototype.animatePaths = function (_element) {
            var path2 = _element.querySelector('.map-animation__path2 path');
            var path4 = _element.querySelector('.map-animation__path4 path');
            var path6 = _element.querySelector('.map-animation__path6 path');
            var timeline = anime.timeline();
            anime({
                targets: [path2, path4, path6],
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1750,
                delay: function (el, i) { return i * 750; },
                direction: 'alternate',
                loop: true
            });
        };
        return MapAnimation;
    }());
    App.MapAnimation = MapAnimation;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.map-animation');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.MapAnimation(elements.item(i));
    }
})();
//# sourceMappingURL=map-animation.js.map