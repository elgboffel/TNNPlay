namespace App {
    export class Forms {

        constructor(element: HTMLElement) {
            this.focused(element);
        }

        focused(_element: HTMLElement) {
            let input = _element.querySelector('input');
            let parent = input.parentElement;

            input.addEventListener('focus', function () {
                parent.classList.add('form-group--focused');
            });

            input.addEventListener('focusout', function () {
                if (input.value === "")
                    parent.classList.remove('form-group--focused');
                
            });
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.mc-field-group') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.Forms(elements.item(i));
    }
})();