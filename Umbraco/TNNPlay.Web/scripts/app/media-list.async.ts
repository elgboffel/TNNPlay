
namespace App {

    export class MediaListAsync {
        private _element: HTMLElement;
        constructor(element: HTMLElement) {
            this._element = element
            this.submit();
            this.initEvents()
        }

        initEvents() {
            let form = this._element;
            let page = form.querySelector("#Page") as HTMLElement;
            let initialLoad = form.querySelector('#InitialLoad') as HTMLElement;
            let pageQueryString = this.getQueryVariableValue('p', document.location.href);
            let firstPage = document.querySelector('#nav-point1') as HTMLElement;

            //Tell controller this is no longer the initial render.
            //Set the rendered page value.
            //This is needed to return the correct page.
            if (pageQueryString.length > 0) {
                let navPoint = document.querySelector(`#nav-point${pageQueryString}`) as HTMLElement;
                let distanceToTop = this.getElemDocTopDistance(navPoint) - 35;
                page.setAttribute('value', pageQueryString);

                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            } else if (firstPage != undefined && window.location.href.indexOf('?') != -1) {
                let distanceToTop = this.getElemDocTopDistance(firstPage) - 125;

                $('Html, body').animate({ scrollTop: distanceToTop }, 700);
            }


            initialLoad.setAttribute('value', 'False');
        }

        submit() {
            let _this = this;
            this._element.addEventListener('submit', function (event) {
                let form = this;
                let button = form.querySelector('.btn') as HTMLElement;
                let $result = $(form).find('.media-list');
                let totalPages = form.querySelector('#TotalPages') as HTMLElement;
                let totalPagesVal = parseInt(totalPages.getAttribute('value'));
                let page = form.querySelector("#Page") as HTMLElement;
                let pageVal = page.getAttribute('value');

                event.preventDefault();

                $.ajax({
                    url: form.getAttribute('action'),
                    type: form.getAttribute('method'),
                    cache: false,
                    data: $(form).serialize(),
                    success: (fetched: HTMLElement) => {
                        let $items = $(fetched).find('.media-list').children();
                        if ($items.length > 0) {
                            let action = $(fetched).attr('action');
                            let pageAction = _this.getQueryVariableValue('page', action);
                            let newPage = parseInt(pageAction) + 1;

                            //Add new items to DOM
                            $items.first().attr('id', `nav-point${newPage}`);
                            $result.append($items);

                            //Set new page values
                            page.setAttribute('value', newPage.toString());
                            _this.updateUrlParam('p', newPage.toString());

                            picturefill();


                            if (newPage === totalPagesVal)
                                button.style.display = 'none';

                        }
                    }
                });
            });
        }

        getQueryVariableValue(variable: string, fullUrl: string) {
            if (fullUrl.length > 0) {
                var query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                var vars = query.split("&");

                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == variable.toLowerCase()) {
                        return pair[1];
                    }
                }
            }

            return "";
        };

        updateUrlParam(key: string, value: string) {
            let currentUrl = window.location.href;
            let keyIndex = currentUrl.indexOf(`${key}=`);

            if (keyIndex === -1) {
                let newUrl = currentUrl + `&${key}=${value}`;
                window.history.pushState(null, '', newUrl);
            }
            else {
                let newUrl = currentUrl.substring(0, keyIndex) + `${key}=${value}`;
                window.history.replaceState(null, '', newUrl)
            }
        }

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
    var elements = document.querySelectorAll('.media-list-form');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.MediaListAsync(<HTMLElement>elements[i]);
    }
})();

