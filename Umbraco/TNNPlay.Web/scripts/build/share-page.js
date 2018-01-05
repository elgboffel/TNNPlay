"use strict";
var App;
(function (App) {
    $(function () {
        var clipboard = new App.Clipboard(document.querySelector('#copy-link'));
        $('.share-item a').on('click', function (e) {
            e.preventDefault();
        });
    });
})(App || (App = {}));
//# sourceMappingURL=share-page.js.map