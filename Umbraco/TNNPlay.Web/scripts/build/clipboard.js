"use strict";
var App;
(function (App) {
    var Clip = (function () {
        function Clip(_element) {
            this.clipboard(_element);
        }
        Clip.prototype.clipboard = function (_element) {
            _element.addEventListener('click', function (event) {
                event.preventDefault();
            });
        };
        return Clip;
    }());
    App.Clip = Clip;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.clipboard a');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Clip(elements.item(i));
    }
})();
//# sourceMappingURL=clipboard.js.map