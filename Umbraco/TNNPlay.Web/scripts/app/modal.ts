namespace App {
    export class Modal {

        constructor(element: HTMLElement) {
            this.toggle(element);
        }

        toggle(_element: HTMLElement) {
            let body = document.body,
                hideScrollClass = 'modal--hide-scroll',
                visibleClass = 'modal--visible',
                modalTarget = _element.dataset.target,
                modal = document.querySelector(`#${modalTarget}`) as HTMLElement,
                modalContent = modal.querySelector('.modal__content') as HTMLElement,
                modalClose = modal.querySelector('.modal__close') as HTMLElement;


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
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.modal--btn') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.Modal(elements.item(i));
    }
})();