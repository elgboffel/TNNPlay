namespace App {
    export class Dropdown {

        constructor(_element: HTMLElement) {
            this.toggleDropdown(_element);
        }

        toggleDropdown(_element: HTMLElement) {
            let expander = _element.querySelector('.dropdown__expander') as HTMLElement;
            expander.addEventListener('click', () => {
                _element.classList.toggle('dropdown--open');
            });
        }
    }
}

(function () {
    var elements = document.querySelectorAll('.dropdown') as NodeListOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
        var init = new App.Dropdown(elements.item(i));
    }
})();