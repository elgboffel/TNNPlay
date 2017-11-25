namespace App {
    export class SqueezeBox {
        constructor() {
            this.doubleClick();
            this.outerClick();
            this.squeezeExpander();
        }

        ////if double clicked
        doubleClick() {
            $('.squeeze-box__expander').on('click', function (e) {
                var id = $(this).data().id;
                var url = $(this).data().url;

                if ($(this).closest('.squeeze-box').hasClass('squeeze-box--open')) {
                    window.location.href = url;
                }
            });
        }

        ////if panel is open and click outside of element it will close
        outerClick() {
            $('body').mouseup(function (event) {
                var element = $(".squeeze-box.squeeze-box--open");
                var isElement = element.has(event.target).length == 1;

                if (!isElement) {
                    element.find('.squeeze-box__content').slideUp(200);
                    element.closest('.squeeze-box').toggleClass('squeeze-box--open')
                }
            });
        }

        squeezeExpander() {
            $('.squeeze-box__expander').on('click', function () {
                var id = $(this).data().id;
                var element = $('#' + id);
                element.slideToggle(200);
                $(this).closest('.squeeze-box').toggleClass('squeeze-box--open');
            });
        }


    }
}

$(function() {
    var init = new App.SqueezeBox();
});