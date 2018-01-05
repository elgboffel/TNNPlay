"use strict";
var App;
(function (App) {
    var SqueezeBox = (function () {
        function SqueezeBox() {
            this.doubleClick();
            this.outerClick();
            this.squeezeExpander();
        }
        SqueezeBox.prototype.doubleClick = function () {
            $('.squeeze-box__expander').on('click', function (e) {
                var id = $(this).data().id;
                var url = $(this).data().url;
                if ($(this).closest('.squeeze-box').hasClass('squeeze-box--open')) {
                    window.location.href = url;
                }
            });
        };
        SqueezeBox.prototype.outerClick = function () {
            $('body').mouseup(function (event) {
                var element = $(".squeeze-box.squeeze-box--open");
                var isElement = element.has(event.target).length == 1;
                if (!isElement) {
                    element.find('.squeeze-box__content').slideUp(200);
                    element.closest('.squeeze-box').toggleClass('squeeze-box--open');
                }
            });
        };
        SqueezeBox.prototype.squeezeExpander = function () {
            $('.squeeze-box__expander').on('click', function () {
                var id = $(this).data().id;
                var element = $('#' + id);
                element.slideToggle(200);
                $(this).closest('.squeeze-box').toggleClass('squeeze-box--open');
            });
        };
        return SqueezeBox;
    }());
    App.SqueezeBox = SqueezeBox;
})(App || (App = {}));
$(function () {
    var init = new App.SqueezeBox();
});
//# sourceMappingURL=squeeze-box.js.map