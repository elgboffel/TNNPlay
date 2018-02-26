namespace App {
    export class MapAnimation {

        constructor(element: HTMLElement) {
            this.animatePaths(element);
        }

        animatePaths(_element: HTMLElement) {
            let path2 = _element.querySelector('.map-animation__path2 path');
            let path4 = _element.querySelector('.map-animation__path4 path');
            let path6 = _element.querySelector('.map-animation__path6 path');
            let timeline = anime.timeline();

            anime({
                targets: [path2, path4, path6],
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1750,
                delay: function (el, i) { return i * 750 },
                direction: 'alternate',
                loop: true
            });
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.map-animation') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.MapAnimation(elements.item(i));
    }
})();