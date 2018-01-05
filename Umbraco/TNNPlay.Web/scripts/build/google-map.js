"use strict";
var App;
(function (App) {
    var GoogleMap = (function () {
        function GoogleMap(element) {
            this.initMap(element);
        }
        GoogleMap.prototype.initMap = function (element) {
            var isPageType = element.classList.contains('some-class');
            var _googleMap = element.querySelector('.google-map__canvas');
            var iconRootUrl = '/content/images/';
            var zoom = element.dataset.zoom != undefined && element.dataset.zoom.length > 0 ?
                parseInt(element.dataset.zoom) :
                4;
            var dataMarkers = element.dataset.markers != undefined ?
                JSON.parse(element.dataset.markers) :
                '';
            var infoWindow = new google.maps.InfoWindow(), marker, i;
            var styledMapType = new google.maps.StyledMapType([
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#523735"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9b2a6"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dcd2be"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ae9e90"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#93817c"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a5b076"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#447530"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fdfcf8"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f8c967"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e9bc62"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e98d58"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#db8555"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#806b63"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8f7d77"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b9d3c2"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#92998d"
                        }
                    ]
                }
            ], { name: 'Styled Map' });
            var bounds = new google.maps.LatLngBounds();
            var options = {
                center: { lat: 53.0000, lng: 9.0000 },
                zoom: zoom,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                        'styled_map']
                }
            };
            var map = new google.maps.Map(_googleMap, options);
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
            var markers = dataMarkers.map(function (markerModel, i) {
                var latLng = JSON.parse("{\"lat\":" + markerModel.lat + ",\"lng\":" + markerModel.lng + "}");
                var markerOptions = '';
                if (isPageType || dataMarkers.length === 1) {
                    markerOptions = {
                        position: latLng,
                        icon: iconRootUrl + 'mapsPin.png',
                        label: {
                            color: '#fff',
                            fontFamily: "'Montserrat', Helvetica",
                            fontSize: '10'
                        },
                        animation: google.maps.Animation.DROP
                    };
                }
                else {
                    markerOptions = {
                        position: latLng,
                        label: {
                            text: (i + 1).toString(),
                            color: '#fff',
                            fontFamily: "'Montserrat', Helvetica",
                            fontSize: '10'
                        },
                        animation: google.maps.Animation.DROP
                    };
                }
                var mapMarker = new google.maps.Marker(markerOptions);
                if (dataMarkers.length === 1) {
                    map.setCenter(latLng);
                    map.setZoom(zoom);
                }
                if (dataMarkers.length > 1) {
                    bounds.extend(latLng);
                    map.fitBounds(bounds);
                }
                if (dataMarkers.length === 0 || (markerModel.content === undefined && markerModel.contentList === undefined))
                    return mapMarker;
                google.maps.event.addListener(mapMarker, 'click', (function (marker, i) {
                    var html = '<div>Læs om:</div>';
                    if (markerModel.contentList != undefined && markerModel.contentList.length > 0) {
                        for (var i_1 = 0; i_1 < markerModel.contentList.length; i_1++) {
                            var element_1 = markerModel.contentList[i_1];
                            html += "<a href=\"" + element_1.url + "\"><h6 class=\"heading-hover color-light-brown margin-bt10\">" + element_1.heading + "</h6></a>";
                        }
                    }
                    else {
                        var content = markerModel.content;
                        html += "<a href=\"" + content.url + "\"><h6 class=\"color-light-brown margin-bt5\">" + content.heading + "</h6></a>";
                    }
                    return function () {
                        infoWindow.setContent(html);
                        infoWindow.open(map, marker);
                    };
                })(mapMarker, i));
                return mapMarker;
            });
            var altClusterIcon = 'geo-pos-cluster.png';
            var clusterIcon = altClusterIcon.length > 0 ?
                iconRootUrl + altClusterIcon :
                'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
            var clusterOptions = {
                styles: [{
                        textColor: '#fff',
                        fontFamily: "'Montserrat', Helvetica",
                        url: clusterIcon,
                        height: 56,
                        width: 56
                    }],
                maxZoom: 6,
                minimumClusterSize: 2
            };
            var markerCluster = new MarkerClusterer(map, markers, clusterOptions);
        };
        return GoogleMap;
    }());
    App.GoogleMap = GoogleMap;
})(App || (App = {}));
(function () {
    var elements = document.querySelectorAll('.google-map');
    for (var i = 0; i < elements.length; i++) {
        var init = new App.GoogleMap(elements[i]);
    }
})();
//# sourceMappingURL=google-map.js.map