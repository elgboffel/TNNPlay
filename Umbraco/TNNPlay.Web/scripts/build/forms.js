"use strict";
var App;
(function (App) {
    var Forms = (function () {
        function Forms(element) {
            this.focused(element);
        }
        Forms.prototype.focused = function (_element) {
            var input = _element.querySelector('input');
            var parent = input.parentElement;
            input.addEventListener('focus', function () {
                parent.classList.add('form-group--focused');
            });
            input.addEventListener('focusout', function () {
                if (input.value === "")
                    parent.classList.remove('form-group--focused');
            });
        };
        return Forms;
    }());
    App.Forms = Forms;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.mc-field-group');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Forms(elements.item(i));
    }
})();
//# sourceMappingURL=forms.js.map