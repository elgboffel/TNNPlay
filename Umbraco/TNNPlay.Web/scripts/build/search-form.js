"use strict";
var App;
(function (App) {
    var SearchForm = (function () {
        function SearchForm(element) {
            this._element = element;
            this.openToggle();
            this.doubleClick();
            this.outerClick();
        }
        SearchForm.prototype.openToggle = function () {
            var element = $(this._element);
            if (element.hasClass('search-form--closed')) {
                element.find('.search-form__submit').on('click', function (e) {
                    $('.search-form--toggle input').focus();
                    $('.search-form--toggle').removeClass('search-form--closed').addClass('search-form--open');
                });
            }
        };
        SearchForm.prototype.doubleClick = function () {
            var element = $(this._element);
            element.find('.search-form__submit').on('click', function (e) {
                if ($('.search-form--toggle').hasClass('search-form__open')) {
                    var url = $(this).attr('data-action');
                    var searchValue = $('.search-form__input').val();
                    window.location.href = url + '?q=' + searchValue;
                }
            });
        };
        SearchForm.prototype.outerClick = function () {
            $('body').mouseup(function (event) {
                var element = $(".search-form--toggle");
                var isElement = element.has(event.target).length == 1;
                if (!isElement) {
                    element.removeClass('search-form--open').addClass('search-form--closed');
                }
            });
        };
        return SearchForm;
    }());
    App.SearchForm = SearchForm;
})(App || (App = {}));
$(function () {
    var elements = document.getElementsByClassName('search-form--toggle');
    for (var i = 0; i < elements.length; i++) {
        var searchForm = new App.SearchForm(elements[i]);
    }
});
//# sourceMappingURL=search-form.js.map