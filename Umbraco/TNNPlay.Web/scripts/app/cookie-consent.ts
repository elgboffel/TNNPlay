namespace App {

    export class CookieConsent {
        constructor(element: HTMLElement) {

            this.setCookie(element);
        }

        setCookie(element: HTMLElement) {
            let submitBtn = element.querySelector('.cookie-consent__submit') as HTMLElement;
            const cookieExpiresAddDays = 30;
            const path = '/';
            const cookieValue = 1
            const cookieName = 'CookieConsent';

            submitBtn.addEventListener('click', function (event) {
                let dateToExpire = Date.now() + cookieExpiresAddDays * 24 * 60 * 60 * 1000;
                let cookieExpires = new Date(dateToExpire);
                //let cookieExpires = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1)).toUTCString();

                event.preventDefault();

                document.cookie = `${cookieName}=${cookieValue}; expires=${cookieExpires}; path=${path};`;
                element.classList.add('cookie-consent--hidden');
            });
        }
    }
}

(function () {
    let elements = document.querySelectorAll('.cookie-consent');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.CookieConsent(<HTMLElement>elements[i]);
    }
})();
