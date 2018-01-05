"use strict";
var Helpers;
(function (Helpers) {
    var Utility = (function () {
        function Utility() {
        }
        Utility.prototype.insertStringAfter = function (identifier, valueToInsert, string) {
            var identifierIndex = string.indexOf(identifier) + identifier.length, newString = string.slice(0, identifierIndex) + ' ' + valueToInsert + string.slice(identifierIndex);
            return newString;
        };
        Utility.prototype.getTotalDistanceToDocumentTop = function (_element) {
            var location = 0;
            if (_element.offsetParent) {
                do {
                    location += _element.offsetTop;
                    _element = _element.offsetParent;
                } while (_element);
            }
            return location >= 0 ? location : 0;
        };
        Utility.prototype.getQueryVariableValue = function (key, fullUrl) {
            if (fullUrl.length > 0) {
                var query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == key.toLowerCase()) {
                        return pair[1];
                    }
                }
            }
            return "";
        };
        ;
        Utility.prototype.updateUrlParam = function (key, value) {
            var currentUrl = window.location.href;
            var keyIndex = currentUrl.indexOf(key + "=");
            if (keyIndex === -1) {
                var newUrl = currentUrl + ("&" + key + "=" + value);
                window.history.pushState(null, '', newUrl);
            }
            else {
                var newUrl = currentUrl.substring(0, keyIndex) + (key + "=" + value);
                window.history.replaceState(null, '', newUrl);
            }
        };
        Utility.prototype.getElemDocTopDistance = function (elem) {
            var location = 0;
            if (elem.offsetParent) {
                do {
                    location += elem.offsetTop;
                    elem = elem.offsetParent;
                } while (elem);
            }
            return location >= 0 ? location : 0;
        };
        ;
        Utility.prototype.setCookie = function (element) {
            var cookieExpiresAddDays = 30;
            var path = '/';
            var cookieValue = 1;
            var cookieName = 'CookieConsent';
            var dateToExpire = Date.now() + cookieExpiresAddDays * 24 * 60 * 60 * 1000;
            var cookieExpires = new Date(dateToExpire);
            document.cookie = cookieName + "=" + cookieValue + "; expires=" + cookieExpires + "; path=" + path + ";";
        };
        Utility.prototype.getHeightFromChilds = function (_element) {
            var children = _element.childNodes;
            var combinedHeight = 0;
            for (var i = 0; i < children.length; i++) {
                if (children.item(i).nodeType === 1)
                    combinedHeight += children.item(i).offsetHeight;
            }
            return combinedHeight;
        };
        Utility.prototype.resetClassQuery = function (_fromElement, _classToRemoveList) {
            _classToRemoveList.forEach(function (classToRemove) {
                var classQuery = _fromElement.querySelectorAll("." + classToRemove);
                for (var i = 0; i < classQuery.length; i++) {
                    var ancestor = classQuery.item(i);
                    ancestor.removeAttribute('style');
                    ancestor.classList.remove(classToRemove);
                }
            });
        };
        return Utility;
    }());
    Helpers.Utility = Utility;
})(Helpers || (Helpers = {}));
//# sourceMappingURL=utility.js.map