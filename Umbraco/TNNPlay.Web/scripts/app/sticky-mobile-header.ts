namespace App {
    export class StickyMobileHeader {

        constructor(_element: HTMLElement) {
            let _screenMdMin = window.matchMedia('(min-width: 768px)');

            if (!_screenMdMin.matches)
                this.stickyToggle(_element);
        }

        stickyToggle(_element: HTMLElement) {
            let _this = this;
            let didScroll;
            let lastScrollTop = 0;
            let delta = 5;
            let cachedHeightMobileHead = _element.offsetHeight;
            let elementDistanceToTop = this.getTotalDistanceToDocumentTop(_element);
            let mobileHeaderDownClass = 'mobile-header--down';
            let mobileHeaderUpClass = 'mobile-header--up';
            let parentElement = _element.parentElement;

            parentElement.style.height = cachedHeightMobileHead + 'px'

            window.addEventListener('scroll', function () {
                let windowPosition = this.pageYOffset;

                if (windowPosition >= elementDistanceToTop) {
                    didScroll = true;
                } else {
                    _element.classList.remove(mobileHeaderDownClass);
                }
            });

            setInterval(() => {
                if (didScroll && !_element.classList.contains('mobile-header--open')) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                let scrollTop = window.scrollY;

                if (Math.abs(lastScrollTop - scrollTop) <= delta)
                    return;

                if (scrollTop > lastScrollTop && scrollTop > cachedHeightMobileHead) {
                    // Scroll Down
                    _element.classList.remove(mobileHeaderDownClass);
                    _element.classList.add(mobileHeaderUpClass);
                    _element.style.top = -cachedHeightMobileHead + 'px';
                } else {
                    // Scroll Up
                    if (scrollTop + $(window).height() < $(document).height()) {
                        _element.classList.remove(mobileHeaderUpClass);
                        _element.classList.add(mobileHeaderDownClass);
                        _element.style.top = 0 + 'px';

                    }
                }

                lastScrollTop = scrollTop;
            }
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
    let element = document.querySelector('.mobile-header') as HTMLElement;
    let init = new App.StickyMobileHeader(element);
})();