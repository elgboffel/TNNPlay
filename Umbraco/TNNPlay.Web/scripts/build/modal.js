"use strict";
var App;
(function (App) {
    var Modal = (function () {
        function Modal(element) {
            this.toggle(element);
        }
        Modal.prototype.toggle = function (_element) {
            var body = document.body, hideScrollClass = 'modal--hide-scroll', visibleClass = 'modal--visible', modalTarget = _element.dataset.target, modal = document.querySelector("#" + modalTarget), modalContent = modal.querySelector('.modal__content'), modalClose = modal.querySelector('.modal__close');
            _element.addEventListener('click', function () {
                body.classList.add(hideScrollClass);
                modal.classList.add(visibleClass);
                anime({
                    targets: modalContent,
                    marginTop: 0,
                    duration: 500,
                    delay: 100
                });
            });
            modalClose.addEventListener('click', function () {
                body.classList.remove(hideScrollClass);
                modal.classList.remove(visibleClass);
                modalContent.style.marginTop = '-200px';
            });
        };
        return Modal;
    }());
    App.Modal = Modal;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.modal--btn');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.Modal(elements.item(i));
    }
})();
//# sourceMappingURL=modal.js.map