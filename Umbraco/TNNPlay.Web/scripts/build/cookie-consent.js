"use strict";
var App;
(function (App) {
    var CookieConsent = (function () {
        function CookieConsent(element) {
            this.setCookie(element);
        }
        CookieConsent.prototype.setCookie = function (element) {
            var submitBtn = element.querySelector('.cookie-consent__submit');
            var cookieExpiresAddDays = 30;
            var path = '/';
            var cookieValue = 1;
            var cookieName = 'CookieConsent';
            submitBtn.addEventListener('click', function (event) {
                var dateToExpire = Date.now() + cookieExpiresAddDays * 24 * 60 * 60 * 1000;
                var cookieExpires = new Date(dateToExpire);
                event.preventDefault();
                document.cookie = cookieName + "=" + cookieValue + "; expires=" + cookieExpires + "; path=" + path + ";";
                element.classList.add('cookie-consent--hidden');
            });
        };
        return CookieConsent;
    }());
    App.CookieConsent = CookieConsent;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.cookie-consent');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.CookieConsent(elements[i]);
    }
})();
//# sourceMappingURL=cookie-consent.js.map