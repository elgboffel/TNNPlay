namespace App {
    export class Expander {
        
        constructor(element: HTMLElement) {
            const xsMin = window.matchMedia('(min-width: 768px)');

            if (!xsMin.matches) {
                this.mobileNavExpander(element);
                this.stickyToggle(element);
            }

            window.addEventListener('resize', () => {
                if (!xsMin.matches) {
                    this.mobileNavExpander(element);
                    this.stickyToggle(element);
                }
            });
        }

        private mobileNavExpander(_element: HTMLElement) {
            let __this = this;

            let navExpander = _element.querySelector('.expander__trigger--nav') as HTMLElement;

            navExpander.addEventListener('click', function (event) {
                let expander = this.closest('.expander') as HTMLElement;
                let mobileHeader = this.closest('.mobile-header');
                let expanderTarget = mobileHeader.querySelector('.mobile-header__nav') as HTMLElement;

                event.preventDefault();

                expander.classList.toggle('expander--open');
                mobileHeader.classList.toggle('mobile-header--open');

                __this.slideToggle(expanderTarget);
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

            if (_element.offsetHeight > 0) {
                _element.style.overflowX = 'hidden';

                anime({
                    targets: _element,
                    height: 0,
                    duration: _duration,
                    easing: _easing,
                    complete: () => {
                        _element.removeAttribute('style');
                    }
                });

            } else {
                _element.style.overflowX = 'hidden';
                _element.style.display = 'block';
                _element.style.height = '0';
                let height = this.getHeightFromChilds(_element);

                anime({
                    targets: _element,
                    height: height,
                    duration: _duration,
                    easing: _easing,
                    complete: () => {
                        _element.style.overflowX = 'visible';
                        _element.style.height = 'auto';
                    }
                });
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
    var elements = document.querySelectorAll('.expander') as NodeListOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
        var init = new App.Expander(elements.item(i));
    }
})();