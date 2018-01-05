"use strict";
var App;
(function (App) {
    var Clipboard = (function () {
        function Clipboard(_element) {
            this.expand(_element);
        }
        Clipboard.prototype.expand = function (_element) {
            var button = _element.querySelector('.preview__expander');
            button.addEventListener('click', function () {
                _element.querySelector('.preview__content').classList.toggle('preview__content--expand');
            });
        };
        return Clipboard;
    }());
    App.Clipboard = Clipboard;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.preview');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Clipboard(elements.item(i));
    }
})();
//# sourceMappingURL=preview.js.map