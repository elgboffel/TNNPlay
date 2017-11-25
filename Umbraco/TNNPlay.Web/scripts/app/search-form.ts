namespace App {
    export class SearchForm {
        private _element: HTMLElement;
        constructor(element: HTMLElement) {
            this._element = element;
            this.openToggle();
            this.doubleClick();
            this.outerClick();
        }

        openToggle() {
            var element = $(this._element)
            if (element.hasClass('search-form--closed')) {
                element.find('.search-form__submit').on('click', function (e) {
                    $('.search-form--toggle input').focus();
                    $('.search-form--toggle').removeClass('search-form--closed').addClass('search-form--open');
                });
            }
        }

        //if double clicked
        doubleClick() {
            var element = $(this._element)
            element.find('.search-form__submit').on('click', function (e) {
                if ($('.search-form--toggle').hasClass('search-form__open')) {
                    var url = $(this).attr('data-action');
                    var searchValue = $('.search-form__input').val();
                    window.location.href = url + '?q=' + searchValue;
                }
            });
        }

        //if panel is open and click outside of element it will close
        outerClick() {
            $('body').mouseup(function (event) {
                var element = $(".search-form--toggle");
                var isElement = element.has(event.target).length == 1;
                if (!isElement) {
                    element.removeClass('search-form--open').addClass('search-form--closed');
                }
            });
        }
    }
}

$(function () {
    var elements = document.getElementsByClassName('search-form--toggle');
    for (var i = 0; i < elements.length; i++) {
        var searchForm = new App.SearchForm(<HTMLElement>elements[i]);
    }
})