namespace App {
    interface Clipboard {
        element: HTMLElement;
    }

    $(function () {
        var clipboard = new Clipboard(document.querySelector('#copy-link') as HTMLElement);
        $('.share-item a').on('click', function (e) {
            e.preventDefault();
        });
    });
}
