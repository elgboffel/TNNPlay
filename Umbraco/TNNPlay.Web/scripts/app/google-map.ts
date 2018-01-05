namespace App {
    
        export interface Marker {
            lat: number;
            lng: number;
            content: MarkerContent;
            contentList: Array<MarkerContent>
        }
    
        export interface MarkerContent {
            heading: string;
            url: string;
        }
    
        export class GoogleMap  {
            constructor(element: HTMLElement) {
                this.initMap(element);
            }
    
            initMap(element: HTMLElement) {
                let isPageType = element.classList.contains('some-class');
                let _googleMap = element.querySelector('.google-map__canvas') as HTMLElement;
                const iconRootUrl = '/content/images/';
    
                let zoom = element.dataset.zoom != undefined && element.dataset.zoom.length > 0 ?
                    parseInt(element.dataset.zoom) :
                    4;
    
                let dataMarkers: Array<Marker> = element.dataset.markers != undefined ?
                    JSON.parse(element.dataset.markers) :
                    '';
    
                // Init info window
                let infoWindow = new google.maps.InfoWindow(), marker, i;
    
                //Custom styling for google map
                let styledMapType = new google.maps.StyledMapType(
                    [
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
                    ],
                    { name: 'Styled Map' });
    
                //Init google map autozoom and fit
                let bounds = new google.maps.LatLngBounds();
    
                //Options for google map
                const options = {
                    center: { lat: 53.0000, lng: 9.0000 },
                    zoom: zoom,
                    mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                            'styled_map']
                    }
                };
    
                // Create a map object, and include the MapTypeId to add
                // to the map type control.
                let map = new google.maps.Map(_googleMap, options);
    
                //Associate the styled map with the MapTypeId and set it to display.
                map.mapTypes.set('styled_map', styledMapType);
                map.setMapTypeId('styled_map');
    
                // Markers Objects
                let markers = dataMarkers.map((markerModel: Marker, i) => {
                    //create latlng json object
                    let latLng: any = JSON.parse(`{"lat":${markerModel.lat},"lng":${markerModel.lng}}`);
    
                    let markerOptions: any = '';
    
                    //render different options depending on page and values
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
                        }
                    } else {
                        markerOptions = {
                            position: latLng,
                            label: {
                                text: (i + 1).toString(),
                                color: '#fff',
                                fontFamily: "'Montserrat', Helvetica",
                                fontSize: '10'
                            },
                            animation: google.maps.Animation.DROP
                        }
                    }
    
                    //Insert Marker
                    let mapMarker = new google.maps.Marker(markerOptions);
    
                    // If there is only 1 marker use manual zoom
                    if (dataMarkers.length === 1) {
                        map.setCenter(latLng as google.maps.LatLng);
                        map.setZoom(zoom)
                    }
    
                    // Automatically center the map fitting all markers on the screen
                    if (dataMarkers.length > 1) {
                        bounds.extend(latLng as google.maps.LatLng);
                        map.fitBounds(bounds);
                    }
    
                    //Insert Info Window Content if any exist
                    if (dataMarkers.length === 0 || (markerModel.content === undefined && markerModel.contentList === undefined))
                        return mapMarker
    
                    google.maps.event.addListener(mapMarker, 'click', ((marker, i) => {
                        let html = '<div>Læs om:</div>';
                        if (markerModel.contentList != undefined && markerModel.contentList.length > 0 ) {
                            for (let i = 0; i < markerModel.contentList.length; i++) {
                                let element = markerModel.contentList[i];
                                html += `<a href="${element.url}"><h6 class="heading-hover color-light-brown margin-bt10">${element.heading}</h6></a>`
                            }
                        } else {
                            let content = markerModel.content;
                            html += `<a href="${content.url}"><h6 class="color-light-brown margin-bt5">${content.heading}</h6></a>`
                        }
    
                        return () => {
                            infoWindow.setContent(html);
                            infoWindow.open(map, marker);
                        }
                    })(mapMarker, i));
    
                    return mapMarker;
                });
    
                // Add a marker clusterer to manage the markers.
                const altClusterIcon = 'geo-pos-cluster.png';
                const clusterIcon = altClusterIcon.length > 0 ?
                    iconRootUrl + altClusterIcon :
                    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
    
                const clusterOptions: MarkerClustererOptions = {
                    styles: [{
                        textColor: '#fff',
                        fontFamily: "'Montserrat', Helvetica",
                        url: clusterIcon,
                        height: 56,
                        width: 56
                    }],
                    maxZoom: 6,
                    minimumClusterSize: 2                
                }
    
                let markerCluster = new MarkerClusterer(map, markers, clusterOptions);
            }
        }
    }
    
    (function () {
        let elements = document.querySelectorAll('.google-map');
        for (let i = 0; i < elements.length; i++) {
            let init = new App.GoogleMap(<HTMLElement>elements[i]);
        }
    })();