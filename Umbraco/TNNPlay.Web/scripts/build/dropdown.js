"use strict";
var App;
(function (App) {
    var Dropdown = (function () {
        function Dropdown(_element) {
            this.toggleDropdown(_element);
        }
        Dropdown.prototype.toggleDropdown = function (_element) {
            var expander = _element.querySelector('.dropdown__expander');
            expander.addEventListener('click', function () {
                _element.classList.toggle('dropdown--open');
            });
        };
        return Dropdown;
    }());
    App.Dropdown = Dropdown;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.dropdown');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Dropdown(elements.item(i));
    }
})();
//# sourceMappingURL=dropdown.js.map