namespace App {
    export class Expander {
        
        constructor(element: HTMLElement) {
            const xsMin = window.matchMedia('(min-width: 768px)');

            if (!xsMin.matches) {
                this.mobileNavExpander(element);
                //this.stickyToggle(element);
            }
        }

        private mobileNavExpander(_element: HTMLElement) {
            let __this = this;

            let navExpander = _element.querySelector('.navbar-header__expander') as HTMLElement;

            navExpander.addEventListener('click', function (event) {
                let mobileContent = _element.querySelector('.navbar-header__navbar') as HTMLElement;

                event.preventDefault();

                __this.slideToggle(mobileContent);
            });
        }

        private stickyToggle(_element: HTMLElement) {
            let mobileHeader = _element.closest('.mobile-header') as HTMLElement;
            let mobileHead = mobileHeader.querySelector('.mobile-header__head') as HTMLElement;
            let logo = mobileHead.querySelector('.mobile-header__logo') as HTMLElement;
            let cachedHeightMobileHead = mobileHead.offsetHeight;
            let cachedHeightLogo = logo.offsetHeight;
            const duration = 400;
            const easing = 'easeInOutQuad';

            mobileHead.style.height = `${cachedHeightMobileHead}px`;
            document.documentElement.style.paddingTop = `${mobileHeader.offsetHeight}px`;
            mobileHeader.classList.add('mobile-header--sticky');

            window.addEventListener('scroll', function () {
                let windowPosition = this.scrollY;

                console.log(windowPosition);

                if (windowPosition > 200) {

                    anime({
                        targets: mobileHead,
                        height: cachedHeightMobileHead * 0.7,
                        duration: duration,
                        easing: easing
                    });

                    anime({
                        targets: logo,
                        height: cachedHeightLogo * 0.7,
                        duration: duration,
                        easing: easing
                    });
                } else {

                    anime({
                        targets: mobileHead,
                        height: cachedHeightMobileHead,
                        duration: duration,
                        easing: easing
                    });

                    anime({
                        targets: logo,
                        height: cachedHeightLogo,
                        duration: duration,
                        easing: easing
                    });
                }
            });
        }

        private slideToggle(_element: HTMLElement, _duration: number = 600, _easing: string = 'easeInOutQuint') {
            let openClass = 'navbar-header__navbar--open';
            let openBtnClass = 'btn--toggle-open';
            let expanderBtn = _element.parentElement.querySelector('.btn--toggle');
            if (_element.classList.contains(openClass)) {
                _element.classList.remove(openClass);
                expanderBtn.classList.remove(openBtnClass);


            } else {
                _element.classList.add(openClass);
                expanderBtn.classList.add(openBtnClass);
            }
        }

        private getHeightFromChilds(_element: HTMLElement) {
            let children = _element.childNodes as NodeListOf<HTMLElement>;
            let combinedHeight = 0;

            for (let i = 0; i < children.length; i++) {
                if (children.item(i).nodeType === 1)
                    combinedHeight += children.item(i).offsetHeight;
            }

            return combinedHeight;
        }
    }
}

(function () {
    var elements = document.querySelectorAll('.navbar-header') as NodeListOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
        var init = new App.Expander(elements.item(i));
    }
})();