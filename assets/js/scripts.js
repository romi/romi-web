(function ($) {

    $(document).ready(function(){
            //image to background
            $('.bg-img').each(function() {
                var $this = $(this);
                $this.css('background-image', 'url('+ $this.find('> img').attr('src')+')');
            });
            //mobile menu
            $('.open-menu').click(function () {
                $('body').toggleClass('menu-opened');
                return false;
            });
            //slider
            $('.slider').slick({
                autoplay: true,
                autoplaySpeed: 2000,
                fade: true,
                responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        autoplay: false,
                        adaptiveHeight: true
                    }
                }
                ]
            });
            //map init
            if($('#map').length){
                init();

                    // google.maps.event.addDomListener(window, 'load', init);
                }
            }); /*ready*/
    //map
    function init() {
        var mapOptions = {
            zoom: 5,
            center: new google.maps.LatLng(46.729437,5.9850315),
            styles: [{
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#7f2200"
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#87ae79"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#495421"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "visibility": "on"
                }, {
                    "weight": 4.1
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#abce83"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "lightness": "25"
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#97b771"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#7B8758"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#EBF4A4"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "color": "#8dab68"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#5B5B3F"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ABCE83"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#EBF4A4"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#9BBF72"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#A4C67D"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#aee2e0"
                }]
            }]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var logo = {
            url: wp_helper.theme_path + '/assets/images/ico-place.svg',
            scaledSize: new google.maps.Size(70, 60)
        };
            //list marker
        map.data.loadGeoJson('https://romi-project.eu/assets/vegetable_microfarms_in_europe.geojson');

        map.data.setStyle(function(feature) {
            return {
                icon: logo //feature.getProperty('icon')
            };
        });

        var infowindow = new google.maps.InfoWindow({
            maxWidth: 200
        });

        // When the user clicks, open an infowindow
        map.data.addListener('click', function(event) {
            //var myHTML = event.feature.getProperty("Description");
            var content = parseMd(event.feature.l.description);
            infowindow.close();
            infowindow.setContent( "<div id='infowindow'>"+ content +"</div>");
            infowindow.setPosition(event.feature.getGeometry().get());
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
            infowindow.open(map);
        });

     }

    function parseMd(md){

    //ul
    md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
    md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    md = md.replace(/^\*(.+)/gm, '<li>$1</li>');

    //ol
    md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
    md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');

    //blockquote
    md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');

    //h
    md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
    md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
    md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
    md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
    md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
    md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');

    //alt h
    md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
    md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');

    //images
    md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');

    //links
    md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');

    //font styles
    md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');

    //pre
    md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
    md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');

    //code
    md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

    //p
    md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
    });

    //strip p from pre
    md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');

    return md;

    }

 })(jQuery);