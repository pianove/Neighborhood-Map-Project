//=======Model=============
// to hard code locations -My To Do list during my visit to Chennai in November 2015 LOL

var categories = ['Yoga', 'Accomodation', 'Must see', 'Shopping', 'Beaches', 'Nature', 'Restaurant', 'Art', 'Cooking'
]
var initialLocations = [
    {
    name: "Yoga Vahini",
    street: '21/4, Ramaniyam Smriti Apartments, 3rd Floor, Beach Road, Kalakshetra Colony, Besant Nagar',
    city: 'Chennai',
    category: 'Yoga',
    description: "Centre for Specialised Yoga Training, Therapy & Research"        
    },
    
    {
    name: "Krishnamacharya Yoga Mandiram",
    street: '31, 4th Cross Street, Rama Krishna Nagar, Mandaveli',
    city: 'Chennai',
    category: 'Yoga',
    description: "Since its inception, the KYM has always stood for quality teaching respecting the needs, interests, abilities and secular faiths of its students. The KYM has played a significant role in popularizing yoga as a holistic science that stems from a well founded theoretical basis, rather than as mere exercises for physical fitness. "  
    },
    
    {
    name: "YWCA International Guest House",
    street: "1086 Poonamallee High Road",
    city: 'Chennai',
    category: 'Accomodation',
    description: "The YWCA guesthouse, set in shady grounds, offers very good value along with a calm atmosphere. Efficiently run by helpful staff, it has good-sized, brilliantly clean rooms, spacious common areas and solid-value meals."
    },

    {
    name: 'Ashtalakshmi Temple',
    street: 'Near Beach Seashore, Arulmigu Mahalakshmi Temple, Besant Nagar, Kalakshetra Colony',
    city: 'Chennai',
    category: 'Must see',
    description: "The Ashtalakshmi Kovil is a Hindu temple, which lies on the shorelines near the Elliot's beach."
    },
    
    {
    name: 'Kapaleeshwar Temple',
    street: '12, North Mada Street',
    city: 'Chennai',
    category: 'Must see',
    description: 'This ancient shrine to Shiva is centrally located and among the area’s most popular landmarks.'
    },
    
    {
    name: 'Sai Baba Temple',
    street: 'Injambakkam',
    city: 'Chennai',
    category: 'Must see',
    description: 'It is one stop for so many gods... There you go. So many different gods at one place. Sri Sai Ram... Peaceful place for worshipping.'
    },

    {
    name: 'Viswaroopa Adhivyadhihara Sri Bhaktha Anjaneyaswami Temple',
    street: '1, 8th street Ram Nagar, Nanganallur',
    city: 'Chennai',
    category: 'Must see',
    description: 'This temple has a huge statue of Hanuman. Powerful god. The temple is inside nanganallur and the temple is a must see one. Saturdays is crowded compared with other days.'
    },
    
    {
    name: 'FabIndia',
    street: '3 Woods Road',
    city: 'Chennai',
    category: 'Shopping',
    description: 'This is the place to go for all your natural-dyed, hand loomed and hand made textiles.'
    },
    
    {
    name: 'Sri Parthasarathy Temple',
    street: 'Singarachari Street, Triplicane',
    city: 'Chennai',
    category: 'Must see',
    description: 'Close to Marina Beach, yet another architectural wonder from the 8th century can be part of the itinerary. An intricate pyramid-shaped rajagopuram (dome) stands prominently and is the main feature of the temple. As anecdotes go, the British were unable to pronounce the original name, Thiriallikeni, and rechristened it Triplicane.'
    },
    
    {
    name: 'San Thome Church',
    street: ' 38, San Thome High Road',
    city: 'Chennai',
    category: 'Must see',
    description: "Probably the most magnificent and prominent reminder of Chennai's colonial lineage, the San Thome Church bears a colossal amount of history since A.D. 52, the year when St. Thomas traveled to India, though the Roman Catholic basilica was built in the 16th century by the Portuguese. It was then rebuilt by the British in 1893. The imposing structure reaches a height of 155 feet and emanates peace and architectural splendor with its tall spires over the tomb of the saint. The sea makes a wonderful backdrop to the pristine white structure. The San Thome Church is considered one of the pilgrimages for people around the world."
    },
    
    {
    name: 'Karl Schmidt Memorial',   
    street: 'Elliots Beach, Besant Nagar',
    city: 'Chennai',
    category: 'Must see',
    description: "The Karl Schmidt Memorial is an architectural landmark commemorating a Danish sailor who drowned in 1930 trying to save the life of a girl."
    },
    
     {
    name: 'Marina Beach',   
    street: 'Marina Beach',
    city: 'Chennai',
    category: 'Beaches',
    description: "This expansive beach is Chennai's most famous tourist attraction, though the undercurrent is too strong for all but the strongest swimmers."
    },
    
     {
    name: 'Breezy Beach',   
    street: 'Valmiki Nagar',
    city: 'Chennai',
    category: 'Beaches',
    description: "this is the only beach which is best secured and peaceful as well in the whole lot of chennai beaches '('except on holidays and week ends which is heavily crowded')'. Secured because police patrolling is available."
    },
    
    {
    name: 'Chennai Turtle Walk',   
    street: '8/25, 2nd Street, DP Nagar, Kotturpuram',
    city: 'Chennai',
    category: 'Nature',
    description: "Join independent conservation and wildlife enthusiast groups such as the Students’ Sea Turtle Conservation Network for midnight walks from Neelangarai to Besant Nagar beach to aid the endangered Olive Ridley sea turtle by relocating eggs for safe release to the sea."
    },

    {
    name: 'Nandanam Restaurant',
    street: 'E 28, 1st Floor, 2nd Avenue, GOCHS Colony, Besant Nagar',
    city: 'Chennai',
    category: 'Restaurant',
    description: "A really good Kerala restaurant in the area. Syrian Beef Fry is a must try item, it totally steals the show. I mostly go there for lunches, which are good - fish curry meals. You get most Kerala varieties like appam, idiyappam, etc."
    },
    
    {
    name: 'Kalakshetra Dance School',   
    street: 'Thiruvanmiyur',
    city: 'Chennai',
    category: 'Art',
    description: "Kalakshetra has been around since 1936. Many subtle nuances existed in the making of this institution — a symbol of uprising against the British, commitment to theosophy and creation of a strong identity for Indian classical dance forms."
    },
    
    {
    name: 'Pondy Bazaar',   
    street: 'Thyagaraya Road',
    city: 'Chennai',
    category: 'Shopping',
    description: "Pondy bazaar is a pretty old shopping area on T Road in Chennai. Hosting a variety of stores, most of the branded shops have their outlets here."
    },
    
    {
    name: 'M.Rm.Rm. Cultural Foundation',   
    street: 'Thyagaraya Road',
    city: 'Chennai',
    category: 'Art',
    description: "The MRM Foundation is a nonprofit organization that documents and supports revival of rural crafts, textiles and architecture. Keep walking on MRC Nagar Main Rd after passing the SUN TV then turn left. You will find your paradise on your left!"
    },
    
    {
    name: 'Kitchen e Lazeez',   
    street: '68/1, Q Block,Ground Floor, 15th Street | Annanagar East',
    city: 'Chennai',
    category: 'Cooking',
    description: "If u want to learn cooking it's one of the best places to visit. Do check their Facebook page (facebook.com/kitchenelazeez) events section and plan accordingly. Classes on Saturdays and Mondays only."
    },
    
    {
    name: 'Mudumalai National Park',   
    street: '',
    city: 'Theppakadu',
    category: 'Nature',
    description: "The protected area is home to several endangered and vulnerable species including Indian elephant, Bengal tiger, gaur and Indian leopard. There are at least 266 species of birds in the sanctuary, including critically endangered Indian white-rumped vulture and long-billed vulture. Elephant Safari and Van Safari, conducted by the Tamil Nadu Forest Department, depart from park headquarters at Theppakadu"
    },
    
    {
    name: 'Mamallapuram',   
    street: 'Varaha Cave',
    city: 'Mamallapuram',
    category: 'Nature',
    description: "A tourist town 60 km south of Chennai famous for its stone carvings.You can also catch the bus from Pondicherry. Learn how to surf with MUMU SURF SCHOOL in Mahabalipuram. If you are looking for an adventure in the Bay of Bengal, go and see Mukesh alias Mumu '('qualified Surfinstructor, Emergency Responder and Rescue Scuba Diver')'"
    },
    
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
    this.category = ko.observable(data.category);
    this.description = ko.observable(data.description);
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
    this.categoryList = ko.observableArray([]);
    categories.sort().forEach(function(catName){
        self.categoryList.push(catName)
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
            zoom: 13,
            center: chennai,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
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
                var contentString = '<div class: "info-container"><div id="info-title">'+ '<b>' + location.name() + "</b></div>" + location.adress()  + '<p><b>' + "Category: " + location.category() + "</b></p>" +  '<p>' + location.description() + "</p></div>";
                var infoWindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 280
                    
                });
                marker.addListener('click', animateMarker);
                //bounce marker and open infoWindow when clicked and set currentlocation to clicked marker's location
                function animateMarker() {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                        infoWindow.close(map, marker);
                        self.clearWikipedia();
                    } else {
                        marker.setAnimation(google.maps.Animation.BOUNCE);
                        self.setCurrentLocation(location);
                        infoWindow.open(map, marker);
                    }
                };

            } else {
              alert('Geocode was not successful for the following reason: ' + status);
              }
        });
        
    };
    this.initMap();
    
    this.clearWikipedia = function() {
        // clear out old data before new request
        var $wikiElem = $('#wikipedia-links');
        
        $('.wikipedia-container').css('display','none');
        $wikiElem.text(""); 
        
    };
    
    this.loadWikipedia = function() {

//        var $body = $('body');
        var $wikiElem = $('#wikipedia-links');
//        var location = self.currentLocation().name() + ", " + self.currentLocation().city();
        var location = self.currentLocation().name()
        self.clearWikipedia();

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
    
    this.filterLocationsByCategory = function(cat) {
        
    }

    
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
