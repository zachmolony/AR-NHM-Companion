$('html').on('init', function (e) {

    $('.artefact-carousel').flickity({
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });

    $('.gallery').flickity({
        contain: true,
        autoPlay: true
    });

    var page = event.target;

    if (page.id !== 'home') {
        page.querySelector('#logo').onclick = function () {
            document.querySelector('#myNavigator').resetToPage('home', {
                animation: 'lift'
            });
        };
    }

    if (page.id !== 'map') {
        page.querySelector('#mapIcon').onclick = function () {
            document.querySelector('#myNavigator').pushPage('map', {
                animation: 'lift'
            });
        };
    }

    if (page.id !== 'qr') {
        page.querySelector('#scannerIcon').onclick = function () {
            document.querySelector('#myNavigator').pushPage('qr', {
                animation: 'lift'
            });
        };
    }

    if (page.id === 'home') {
        page.querySelector('#article-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('article', {
                animation: 'slide'
            });
        };
        page.querySelector('#artefact-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('artefact', {
                animation: 'slide'
            });
        };
    }
});