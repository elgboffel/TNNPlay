
namespace App {
    export class ScrollTo {

        constructor(_element: HTMLElement) {
            this.scrollTo(_element);
        }

        scrollTo(_element: HTMLElement) {
            let url = window.location.href,
                scrollId = _element.dataset.scroll,
                queryString = this.getQueryVariableValue('v', url);

            if (queryString === scrollId) {
                let distanceToTop = this.getElemDocTopDistance(_element);
                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            }
        }

        getQueryVariableValue(variable: string, fullUrl: string) {
            if (fullUrl.length > 0) {
                let query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                let vars = query.split("&");

                for (let i = 0; i < vars.length; i++) {
                    let pair = vars[i].split("=");
                    if (pair[0] == variable.toLowerCase()) {
                        return pair[1];
                    }
                }
            }

            return "";
        };

        getElemDocTopDistance(elem) {
            let location = 0;
            if (elem.offsetParent) {
                do {
                    location += elem.offsetTop;
                    elem = elem.offsetParent;
                } while (elem);
            }
            return location >= 0 ? location : 0;
        };
    }
}

(function () {
    let elements = document.querySelectorAll('.scroll-to') as NodeListOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
        let init = new App.ScrollTo(elements.item(i));
    }
})();
