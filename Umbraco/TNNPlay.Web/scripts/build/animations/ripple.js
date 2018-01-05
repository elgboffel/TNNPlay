"use strict";
var App;
(function (App) {
    var Animations;
    (function (Animations) {
        var Ripple = (function () {
            function Ripple(_element) {
                this.hover(_element);
            }
            Ripple.prototype.hover = function (_element) {
                var elementBgColor = window.getComputedStyle(_element).getPropertyValue('background-color'), bgColor = this.colorLuminance(elementBgColor, -0.04), width = _element.offsetWidth, height = _element.offsetHeight, size = Math.max(width, height), transition = size >= 700 ? size * 0.6 : 400, rippleEffectElement = document.createElement('div');
                var easing = 'linear';
                rippleEffectElement.classList.add('ripple__effect');
                _element.appendChild(rippleEffectElement);
                _element.addEventListener('mouseenter', function () {
                    rippleEffectElement.style.width = size + "px";
                    rippleEffectElement.style.height = size + "px";
                    rippleEffectElement.style.backgroundColor = bgColor;
                    rippleEffectElement.style.transition = "transform " + transition + "ms linear, opacity 200ms ease";
                });
            };
            Ripple.prototype.colorLuminance = function (rgb, luminance) {
                var hex = this.rgbTohex(rgb);
                hex = String(hex).replace(/[^0-9a-f]/gi, '');
                if (hex.length < 6) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }
                luminance = luminance || 0;
                var color = "#", c, i;
                for (i = 0; i < 3; i++) {
                    c = parseInt(hex.substr(i * 2, 2), 16);
                    c = Math.round(Math.min(Math.max(0, c + (c * luminance)), 255)).toString(16);
                    color += ("00" + c).substr(c.length);
                }
                return color;
            };
            Ripple.prototype.rgbTohex = function (rgb) {
                rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                return (rgb && rgb.length === 4) ? "#" +
                    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
            };
            return Ripple;
        }());
        Animations.Ripple = Ripple;
    })(Animations = App.Animations || (App.Animations = {}));
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.ripple');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Animations.Ripple(elements.item(i));
    }
})();
//# sourceMappingURL=ripple.js.map