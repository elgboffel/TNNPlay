namespace App {
    export class StickyNavbarHeader {

        constructor(_element: HTMLElement) {
            let _screenMdMin = window.matchMedia('(min-width: 991px)'),
                _this = this;

            if (_screenMdMin.matches)
                this.sticky(_element);
        }

        sticky(_element: HTMLElement) {
            let _this = this,
                elementTopDistance = this.getTotalDistanceToDocumentTop(_element),
                elementHeight = _element.offsetHeight,
                menu = _element.querySelector('.navbar-header__menu') as HTMLElement,
                menuTopDistanceAndHeight = this.getTotalDistanceToDocumentTop(menu) + menu.offsetHeight,
                stickyClass = 'navbar-header--sticky';

            window.addEventListener('scroll', function () {
                let windowPosition = this.pageYOffset;

                if (windowPosition >= menuTopDistanceAndHeight) {
                    _element.classList.add(stickyClass);
                    document.body.style.paddingTop = elementHeight + 'px';
                }
                else {
                    document.body.style.paddingTop =  '0';
                    _element.classList.remove(stickyClass);
                }

                //console.log(windowPosition);
            });

            //console.log(menuTopDistanceAndHeight);
        }

        getTotalDistanceToDocumentTop(_element: HTMLElement): number {
            let location = 0;
            if (_element.offsetParent) {
                do {
                    location += _element.offsetTop;
                    _element = _element.offsetParent as HTMLElement;
                } while (_element);
            }
            return location >= 0 ? location : 0;
        };
    }
}

(function () {
    let element = document.querySelector('.navbar-header') as HTMLElement;
    let init = new App.StickyNavbarHeader(element);
})();