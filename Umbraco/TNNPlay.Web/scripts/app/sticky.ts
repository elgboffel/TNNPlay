namespace App {
    export class Sticky {

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
                navbarHeight = 0,
                stickyClass = 'sticky',
                stickyTop = 'sticky--top',
                hideClass = 'sticky--hide',
                showClass = 'sticky--show',
                navbarHeader = document.querySelector('.navbar-header') as HTMLElement,
                breaks = document.querySelectorAll('.sticky--break') as NodeListOf<HTMLElement>,
                breaksDistanceToTop: Array<number> = [];

            for (let i = 0; i < breaks.length; i++) {
                let item = breaks.item(i);
                breaksDistanceToTop.push(_this.getTotalDistanceToDocumentTop(item));
            }

            window.addEventListener('scroll', function () {
                let windowPosition = this.pageYOffset,
                    elementTotalHeight = elementHeight + 100;

                if (navbarHeader.classList.contains('navbar-header--sticky')) {
                    navbarHeight = navbarHeader.offsetHeight + 45;
                }

                if (windowPosition >= elementTopDistance - navbarHeight)
                    _element.classList.add(stickyClass, stickyTop);
                else
                    _element.classList.remove(stickyClass, stickyTop);

                for (let i = 0; i < breaksDistanceToTop.length; i++) {
                    let item = breaksDistanceToTop[i];

                    if (windowPosition > item - elementHeight)
                        _element.classList.add(hideClass);
                    else
                        _element.classList.remove(hideClass);
                }

                //console.log(windowPosition);
            });

            //console.log(elementTopDistance);
        }

        getTotalDistanceToDocumentTop(_element: HTMLElement) {
            let location = 0;
            if (_element.offsetParent) {
                do {
                    location += _element.offsetTop;
                    _element = _element.offsetParent as HTMLElement;
                } while (_element);
            }
            return location >= 0 ? location : 0;
        };

        //windowResize(method, minWidth: number) {
        //    let timeout: any = false,
        //        delay = 250;

        //    method;

        //    window.addEventListener('resize', function () {
        //        let windowMedia = this.innerWidth;

        //        if (windowMedia >= minWidth) {
        //            clearTimeout(timeout);

        //            timeout = setTimeout(method, delay);
        //        }
        //    });
        //}
    }

}

(function () {
    let element = document.querySelector('.so-me-share') as HTMLElement;
    let init = new App.Sticky(element);
})();