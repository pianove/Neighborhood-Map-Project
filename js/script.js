//=======Model=============
// to hard code 5 locations
var initialLocations = [
    {
    name: "Yoga Vahini",
    street: '21/4, Ramaniyam Smriti Apartments, 3rd Floor, Beach Road, Kalakshetra Colony, Besant Nagar',
    city: 'Chennai',
    },
    
    {
    name: "Governor's Beach Bungalow",
    street: "Odaimanagar, Besant Nagar",
    city: 'Chennai',
    },

    {
    name: 'Ashtalakshmi Temple',
    street: 'Near Beach Seashore, Arulmigu Mahalakshmi Temple, Besant Nagar, Kalakshetra Colony',
    city: 'Chennai',
    },
    
    {
    name: 'Karl Schmidt Memorial',   
    street: 'Elliots Beach, Besant Nagar',
    city: 'Chennai',
    },
    
    
    {
    name: 'Nandanam Restaurant',
    street: 'E 28, 1st Floor, 2nd Avenue, GOCHS Colony, Besant Nagar',
    city: 'Chennai',
    }
]

// to construct locations from initialLocations array
var Location = function(data) {
    this.name = ko.observable(data.name);
    this.street = ko.observable(data.street);
    this.city = ko.observable(data.city);
////    this.greeting = ko.computed(function(){
////        var greetingText = 'So, you want to live at '+ this.street() + ', ' + this.city() + '?';
//        return greetingText
//    },this);
    this.adress =  ko.computed(function(){
        var adress = this.street() + ', ' + this.city();
        return adress
    },this);
//    this.streetViewUrl = ko.computed(function(){
//        return ('http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + this.adress() + '')
//    },this);
    
    
}

//======ViewModel=======================
// makes the locations show up in a list
var ViewModel = function(){
    var self = this;
    this.initialLocationList = ko.observableArray([]);
    initialLocations.forEach(function(locationItem){
        self.initialLocationList.push(new Location(locationItem) );
    });
    
    //set the first element of initialLocations as current location 
    this.currentLocation = ko.observable(this.initialLocationList()[0]);
    //set the currently selected location to the object passed in
    this.setCurrentLocation = function(clickedLocation) {
        self.currentLocation(clickedLocation);
        self.loadWikipedia();
    };
    // load streetview
//   console.log(this.currentLocation().adress());
    //load google map
    this.initMap = function() {
        //Chennai generic latitude and longitude
        var chennai = {lat: 13.0827, lng: 80.2707};
        var mapOptions = {
            zoom: 15,
            center: chennai,
            disableDefaultUI: true,
//            mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeControl: true,
            mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        // convert hard coded location adresses into geographical coordinates and add markers to map
        // Resource: https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
        var geocoder = new google.maps.Geocoder();
        self.initialLocationList().forEach(function(locationItem){
            geocodeAddress(locationItem, geocoder, map);
        });
    };
    // function converts adress to geographical coordinates via geocoder services and add a marker and infoWindow to resultsMap
    //Resource: https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
    function geocodeAddress(location, geocoder, resultsMap) {        
        geocoder.geocode({'address': location.adress()}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                // add markers to map with bounce animation   
                var marker = new google.maps.Marker({
                map: resultsMap,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location
                });
                
                //create infoWindow with location name and adress                
                var infoWindow = new google.maps.InfoWindow({
                content: '<div class="info-content"><div style="font-size: 16px; line-height:20px;">'+location.name() + "</div>" + location.adress()  + "</div>"
                });
                marker.addListener('click', animateMarker);
                //bounce marker and open infoWindow when clicked and set currentlocation to clicked marker's location
                function animateMarker() {
                    self.setCurrentLocation(location);
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                        infoWindow.close(map, marker);
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        self.loadWikipedia();
                        infoWindow.open(map, marker);
                    }
                };

            } else {
              alert('Geocode was not successful for the following reason: ' + status);
              }
        });
        
    };
    this.initMap();
    
    this.loadWikipedia = function () {

//        var $body = $('body');
        var $wikiElem = $('#wikipedia-links');
//        var location = self.currentLocation().name() + ", " + self.currentLocation().city();
        var location = self.currentLocation().name()

        // clear out old data before new request
        $('.wikipedia-container').css('display','none');
        $wikiElem.text("");        

        // load wikipedia data
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + location + '&format=json&callback=wikiCallback';
        var wikiRequestTimeout = setTimeout(function(){
            $wikiElem.text("failed to get wikipedia resources");
        }, 8000);

        $.ajax({
            url: wikiUrl,
            dataType: "jsonp",
            jsonp: "callback",
            success: function( response ) {
                var articleList = response[1];
                for (var i = 0; i < articleList.length; i++) {
                    var articleStr = articleList[i];
                    var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                    $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
                    if (articleList.length > 0) {
                        $('.wikipedia-container').css('display','inline');
    
                    }
                };

                clearTimeout(wikiRequestTimeout);
            }
        });

        return false;
    };

    
};

ko.applyBindings(new ViewModel());



function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

//    var streetStr = $('#street').val();
//    var cityStr = $('#city').val();
//    var address = streetStr + ', ' + cityStr;
//
//    $greeting.text('So, you want to live at ' + address + '?');

    // load streetview
//    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
//    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // load nytimes
    // obviously, replace all the "X"s with your own API key
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=ad070610b55dfb1bbf37db5b3c317c38:9:72310292';
    $.getJSON(nytimesUrl, function(data){

        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">'+
                '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                '<p>' + article.snippet + '</p>'+
            '</li>');
        };

    }).error(function(e){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });



    // load wikipedia data
    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function( response ) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            };

            clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
};

//$('#form-container').submit(loadData);
