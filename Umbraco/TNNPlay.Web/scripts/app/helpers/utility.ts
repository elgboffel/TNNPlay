
namespace Helpers {

    export class Utility {

        insertStringAfter(identifier: string, valueToInsert: string, string: string) {
            let identifierIndex = string.indexOf(identifier) + identifier.length,
            newString = string.slice(0, identifierIndex) + ' ' + valueToInsert + string.slice(identifierIndex);
            
            return newString;
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
        }

        getQueryVariableValue(key: string, fullUrl: string) {
            if (fullUrl.length > 0) {
                var query = fullUrl.substr(fullUrl.indexOf('?') + 1).toLowerCase();
                var vars = query.split("&");

                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == key.toLowerCase()) {
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

        setCookie(element: HTMLElement) {
            const cookieExpiresAddDays = 30;
            const path = '/';
            const cookieValue = 1
            const cookieName = 'CookieConsent';
            let dateToExpire = Date.now() + cookieExpiresAddDays * 24 * 60 * 60 * 1000;
            let cookieExpires = new Date(dateToExpire);
            //let cookieExpires = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1)).toUTCString();

            document.cookie = `${cookieName}=${cookieValue}; expires=${cookieExpires}; path=${path};`;
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

        resetClassQuery(_fromElement: HTMLElement, _classToRemoveList: string[]) {            
            _classToRemoveList.forEach((classToRemove) => {
                let classQuery = _fromElement.querySelectorAll(`.${classToRemove}`) as NodeListOf<HTMLElement>;

                for (let i = 0; i < classQuery.length; i++) {
                    let ancestor = classQuery.item(i);
                    ancestor.removeAttribute('style');
                    ancestor.classList.remove(classToRemove);
                }
            });
        }
    }
}