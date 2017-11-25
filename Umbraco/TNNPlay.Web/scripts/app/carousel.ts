namespace App {
    export class Carousel {
        private _element: HTMLElement;
        private _defaultOptions: any;
        private _dataOptions: any;

        constructor(element: HTMLElement) {
            this._element = element;
            this._dataOptions = this._element.getAttribute("data-options");
            this._defaultOptions = JSON.parse(this._dataOptions);
            this.activate();
            this.positionDots();
            this.onWindowResize();
        }

        activate() {
            setTimeout(() => {
                $(this._element).owlCarousel(this._defaultOptions);
                $(this._element).resize();
                picturefill();
                //this.anime(this._element);
            }, 300);
        }


        onWindowResize() {
            let _this = this;
            $(window).resize(function () {
                _this.positionDots();
            });
        }

        positionDots() {
            let element = $(this._element);
            let dots = element.find('.owl-dots');
            let dotsHeight = dots.outerHeight();
            let image = element.find('img');
            let imageHeight = image.outerHeight();
            let dotsPosition = imageHeight - dotsHeight - 5;

            dots.css({ 'top': dotsPosition });
        }

        //anime(_element: HTMLElement) {
        //    let nextBtn = _element.querySelector('.owl-next') as HTMLElement;
        //    let prevBtn = _element.querySelector('.owl-prev') as HTMLElement;

        //    this.hoverBtn(nextBtn);
        //    this.hoverBtn(prevBtn);

        //}

        //hoverBtn(_element: HTMLElement) {
        //    _element.addEventListener('mouseover', () => {
        //        anime({
        //            targets: _element,
        //            scale: 1.2,
        //            duration: 200,
        //            easing: 'easeInQuint'
        //        });
        //    })

        //    _element.addEventListener('mouseout', () => {
        //        anime({
        //            targets: _element,
        //            scale: 1,
        //            duration: 200,
        //            easing: 'easeOutQuint'
        //        });
        //    });
        //}
    }
}

(function () {
    let elements = document.getElementsByClassName('owl-carousel');
    for (let i = 0; i < elements.length; i++) {
        let init = new App.Carousel(<HTMLElement>elements[i]);
    }
})()