
namespace App {
    export class Clip {

        constructor(_element: HTMLElement) {
            this.clipboard(_element);
        }

        clipboard(_element: HTMLElement) {
            _element.addEventListener('click', (event) => {
                event.preventDefault();
            });
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.clipboard a') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.Clip(elements.item(i));
    }
})();
