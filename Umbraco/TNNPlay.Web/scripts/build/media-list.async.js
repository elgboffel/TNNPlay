"use strict";
var App;
(function (App) {
    var MediaListAsync = (function () {
        function MediaListAsync(element) {
            this._element = element;
            this.submit();
            this.initEvents();
        }
        MediaListAsync.prototype.initEvents = function () {
            var form = this._element;
            var page = form.querySelector("#Page");
            var initialLoad = form.querySelector('#InitialLoad');
            var pageQueryString = this.getQueryVariableValue('p', document.location.href);
            var firstPage = document.querySelector('#nav-point1');
            if (pageQueryString.length > 0) {
                var navPoint = document.querySelector("#nav-point" + pageQueryString);
                var distanceToTop = this.getElemDocTopDistance(navPoint) - 35;
                page.setAttribute('value', pageQueryString);
                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            }
            else if (firstPage != undefined && window.location.href.indexOf('?') != -1) {
                var distanceToTop = this.getElemDocTopDistance(firstPage) - 125;
                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            }
            initialLoad.setAttribute('value', 'False');
        };
        MediaListAsync.prototype.submit = function () {
            var _this = this;
            this._element.addEventListener('submit', function (event) {
                var form = this;
                var button = form.querySelector('.btn');
                var $result = $(form).find('.media-list');
                var totalPages = form.querySelector('#TotalPages');
                var totalPagesVal = parseInt(totalPages.getAttribute('value'));
                var page = form.querySelector("#Page");
                var pageVal = page.getAttribute('value');
                event.preventDefault();
                $.ajax({
                    url: form.getAttribute('action'),
                    type: form.getAttribute('method'),
                    cache: false,
                    data: $(form).serialize(),
                    success: function (fetched) {
                        var $items = $(fetched).find('.media-list').children();
                        if ($items.length > 0) {
                            var action = $(fetched).attr('action');
                            var pageAction = _this.getQueryVariableValue('page', action);
                            var newPage = parseInt(pageAction) + 1;
                            $items.first().attr('id', "nav-point" + newPage);
                            $result.append($items);
                            page.setAttribute('value', newPage.toString());
                            _this.updateUrlParam('p', newPage.toString());
                            picturefill();
                            if (newPage === totalPagesVal)
                                button.style.display = 'none';
                        }
                    }
                });
            });
        };
        MediaListAsync.prototype.getQueryVariableValue = function (variable, fullUrl) {
            if (fullUrl.length > 0) {
                var query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable.toLowerCase()) {
                        return pair[1];
                    }
                }
            }
            return "";
        };
        ;
        MediaListAsync.prototype.updateUrlParam = function (key, value) {
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
        MediaListAsync.prototype.getElemDocTopDistance = function (elem) {
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
        return MediaListAsync;
    }());
    App.MediaListAsync = MediaListAsync;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.media-list-form');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.MediaListAsync(elements[i]);
    }
})();
//# sourceMappingURL=media-list.async.js.map