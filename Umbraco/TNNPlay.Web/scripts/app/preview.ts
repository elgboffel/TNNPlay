namespace App {
    export class Clipboard {

        constructor(_element: HTMLElement) {
            this.expand(_element);
        }

        expand(_element: HTMLElement) {
            var button = _element.querySelector('.preview__expander') as HTMLElement;

            button.addEventListener('click', function () {
                _element.querySelector('.preview__content').classList.toggle('preview__content--expand');
            });
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.preview') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.Clipboard(elements.item(i));
    }
})();