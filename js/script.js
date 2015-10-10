//global variables to reach out in ViewModel once initMap() executed
var map,
    bounds,
    geocoder;

function initMap() {
    "use strict";
    var chennai = {lat: 12.42773, lng: 80.77881},
    //Chennai generic latitude and longitude
    mapOptions = {
        zoom: 10,
        center: chennai,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
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
    bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(12.81710, 80.00464));
    bounds.extend(new google.maps.LatLng(13.65394, 80.46332));
    map.fitBounds(bounds);
    geocoder = new google.maps.Geocoder();
}


//=======Model=============
// to hard code locations -Places to visit during my trip to Chennai in November 2015 as a FEND graduation present LOL
var categories = ['all', 'yoga', 'food', 'mustsee', 'beach','shopping', 'hotel'];

var icons = {
    all: {
        name: 'ALL',
        icon: 'public/img/all.png'
    },
    yoga: {
        name: 'Yoga',
        icon: 'public/img/yoga.png'
    },
    hotel: {
        name: 'Hotel',
        icon: 'public/img/hotel.png'
    },
    mustsee: {
        name: 'Must see',
        icon: 'public/img/must_see.png'
    },
    shopping: {
        name: 'Shopping',
        icon: 'public/img/shopping.png'
    },
    beach: {
        name: 'Beach',
        icon: 'public/img/beach.png'
    },
    food: {
        name: 'Food',
        icon: 'public/img/restaurant.png'
    }
};

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
    description: "Since its inception, the KYM has always stood for quality teaching respecting the needs, interests, abilities and secular faiths of its students. The KYM has played a significant role in popularizing yoga as a holistic science that stems from a well founded theoretical basis, rather than as mere exercises for physical fitness."
    },

    {
    name: "YWCA International Guest House",
    street: "1086 Poonamallee High Road",
    city: 'Chennai',
    category: 'Hotel',
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
    name: 'San Thome Basilica',
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
    category: 'Beach',
    description: "This expansive beach is Chennai's most famous tourist attraction, though the undercurrent is too strong for all but the strongest swimmers."
    },

     {
    name: 'Breezy Beach',
    street: 'Valmiki Nagar',
    city: 'Chennai',
    category: 'Beach',
    description: "this is the only beach which is best secured and peaceful as well in the whole lot of chennai beaches '('except on holidays and week ends which is heavily crowded')'. Secured because police patrolling is available."
    },

    {
    name: 'Chennai Turtle Walk',
    street: '8/25, 2nd Street, DP Nagar, Kotturpuram',
    city: 'Chennai',
    category: 'Must see',
    description: "Join independent conservation and wildlife enthusiast groups such as the Students’ Sea Turtle Conservation Network for midnight walks from Neelangarai to Besant Nagar beach to aid the endangered Olive Ridley sea turtle by relocating eggs for safe release to the sea."
    },

    {
    name: 'Nandanam Restaurant',
    street: 'E 28, 1st Floor, 2nd Avenue, GOCHS Colony, Besant Nagar',
    city: 'Chennai',
    category: 'Food',
    description: "A really good Kerala restaurant in the area. Syrian Beef Fry is a must try item, it totally steals the show. I mostly go there for lunches, which are good - fish curry meals. You get most Kerala varieties like appam, idiyappam, etc."
    },

    {
    name: 'Kalakshetra Dance School',
    street: 'Thiruvanmiyur',
    city: 'Chennai',
    category: 'Must see',
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
    category: 'Shopping',
    description: "The MRM Foundation is a nonprofit organization that documents and supports revival of rural crafts, textiles and architecture. Keep walking on MRC Nagar Main Rd after passing the SUN TV then turn left. You will find your paradise on your left!"
    },

    {
    name: 'Kitchen e Lazeez',
    street: '68/1, Q Block,Ground Floor, 15th Street | Annanagar East',
    city: 'Chennai',
    category: 'Food',
    description: "If u want to learn cooking it's one of the best places to visit. Do check their Facebook page (facebook.com/kitchenelazeez) events section and plan accordingly. Classes on Saturdays and Mondays only."
    },

    {
    name: 'VK Advanced Yoga Teacher Venue',
    street: '77, Greenways Rd Ext, Bishop Garden, Raja Annamalai Puram',
    city: 'Chennai',
    category: 'Yoga',
    description: "This location will host the Vinyasa Krama 100h Advanced Yoga Teacher Program with Srivatsa Ramaswami."
    },

    {
    name: 'Mamallapuram',
    street: 'Varaha Cave',
    city: 'Mamallapuram',
    category: 'Must see',
    description: "A tourist town 60 km south of Chennai famous for its stone carvings.You can also catch the bus from Pondicherry. Learn how to surf with MUMU SURF SCHOOL in Mahabalipuram. If you are looking for an adventure in the Bay of Bengal, go and see Mukesh alias Mumu '('qualified Surfinstructor, Emergency Responder and Rescue Scuba Diver')'"
    }
];

// to construct locations from initialLocations array
var Location = function(data) {
    var self = this;
    this.name = ko.observable(data.name);
    this.street = ko.observable(data.street);
    this.city = ko.observable(data.city);
    this.adress =  ko.computed(function(){
        var adress = this.street() + ', ' + this.city();
        return adress;
    },this);
    this.category = ko.observable(data.category);
    this.description = ko.observable(data.description);
};


//======ViewModel=======================
// makes the locations/markers/wikilinks show up in a list
// with a reali time search/filter function
var ViewModel = function(){
    "use strict";
    var self = this;
    var geocodeTimeOutId,
        infoWindowGlobal = new google.maps.InfoWindow({
            maxWidth: 260
        }),
        i = 0;

    //cache markers for quick hide and show
    this.markersArray = ko.observableArray([]);

    //add markers to map ref to hardcoded locations
    this.addMarker = function (locationItem) {
        geocodeAddress(locationItem, geocoder, map);
    };
    //creates locations and markers/infowindows
    this.initialLocationList = ko.observableArray([]);
    initialLocations.forEach(function(locationItem){
        self.initialLocationList.push(new Location(locationItem));
        self.addMarker(self.initialLocationList()[i]);
        i++;
    });

    //set the currently selected location to the object passed in
    this.currentLocation = ko.observable(this.initialLocationList()[0]);

    //helper function to select correspondant marker
    this.getMarkerByName = function(name){
        var i;
        self.markersArray().forEach(function(marker){
            if (marker.getTitle() === name){
                i = self.markersArray().indexOf(marker);
            }
         });
        return i;
    };

    //click on location, animate marker,popup infowindow and wikilink
    this.setCurrentLocation = function(clickedLocation) {
        self.currentLocation(clickedLocation);
        var i = self.getMarkerByName(clickedLocation.name());
        var marker = self.markersArray()[i];
        marker.onClick();
    };

    //input value to search and filter
    this.searchName = ko.observable("");

    //set initial value ALL to category filter
    this.searchCat = ko.observable("ALL");

    //set clicked category to filter
    this.setCategory = function(clickedCategory) {
        self.searchCat(clickedCategory.name);
    };

    //create legend on view
    this.category = ko.observableArray([]);
    for (var c = 0; c < categories.length; c++){
        self.category.push(icons[categories[c]]);
    }

    //filters search result array and listview if input matches
    //hide and show markers accordingly
    this.selectedLocations = ko.computed(function(){
        //close infowindow if any open
        infoWindowGlobal.close(map);
        //clear filter if legend hides
        if ($('#legend').hasClass('legend-hidden')) {
            self.searchCat = ko.observable('ALL');
        }
        return ko.utils.arrayFilter(self.initialLocationList(),
                    function (locItem){
                 var n = locItem.name().search(new RegExp(self.searchName(), "i")),
                     doesMatch = false;
                    var i = self.getMarkerByName(locItem.name());
                    var marker = self.markersArray()[i];

            if (marker !== undefined) {
                if (n != -1)   {
                    doesMatch = true;
                    if (self.searchCat() !== "ALL") {
                        if (locItem.category() !== self.searchCat()) {
                            doesMatch = false;
                            n = -1;
                        }
                    }
                }
                marker.setVisible(doesMatch);
            }
            return n != -1 ;
            });
    });


    //select the first location on listview on submit
    this.findLocation = ko.observable(this.selectedLocations()[0]);

    //prevent filter button submit
    $(".sb_input").keypress(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            if ($('#legend').hasClass('legend-hidden')) {
              self.searchCat = ko.observable('ALL');
            }
        }
    });

    //slide legend when clicked show/hide filter button
    //clear category selection when legend hides
    var filter = $('.sb_filter');
    filter.on('click', function(e) {
        $('#legend').toggleClass('legend-hidden');
    });

    // to limit bouncing time for a few seconds
    //reference to http://stackoverflow.com/questions/14657779/google-maps-bounce-animation-on-marker-for-a-limited-period
    function stopAnimation (marker) {
        setTimeout(function () {
        marker.setAnimation(null);
        }, 2500);
    }

    //bounce marker and open infoWindow when clicked
    function animateMarker (marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        stopAnimation(marker);
      }
    }

    // function converts adress to geographical coordinates via geocoder services
    // and add a marker and infoWindow to map
    //Resource: https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
    function geocodeAddress(location, geocoder, resultsMap) {
        var marker;
        //set icons per category
        //credit to https://developers.google.com/maps/tutorials/customizing/custom-markers

        geocoder.geocode({'address': location.adress()}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                location.latLng = results[0].geometry.location;
                var cat = location.category().toLowerCase().replace(" ", "");
                // add markers to map with bounce animation
                marker = new google.maps.Marker({
                map: resultsMap,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location,
                title: location.name(),
                icon: icons[cat].icon,
                onClick: function(){
                            infoWindowGlobal.close(map, marker);
                            infoWindowGlobal = addInfoWindow(this, location);
                            animateMarker(this);
                            infoWindowGlobal.open(map, this);
                            self.loadWikipedia(marker.title);
                        }
                });

                marker.setVisible(false);
                //cache markers for quick hide and show
                self.markersArray.push(marker);
                //http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/
                google.maps.event.addListener(marker, 'click', function(){
                    this.onClick();
                   }, false);
            } else {
            //to avoid query limit error alerts
            //credit to http://stackoverflow.com/questions/7649155/avoid-geocode-limit-on-custom-google-map-with-multiple-markers?lq=1
            if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT)
            {
                geocodeTimeOutId = setTimeout(function() { geocodeAddress(location, geocoder, resultsMap);}, (1200));
            }
            else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
            }
       });
    }

    // creates infoWindow to marker with locations name, category, description and wikilink content
    function addInfoWindow(marker, location) {
        var  contentString = '<div class= "info-container"><div id="info-title">'+ '<b>' + location.name() + "</b></div>" + location.adress()  + '<p><b>' + "Category: " + location.category() + "</b></p>" +  '<p>' + location.description() + "</p>" + '<p><b>' + "Wikipedia Links: " + "</b><p><ul id='wikipedia-links' style='height: 40px;' ></ul>" + "</div>";
        var infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 280
        });
        return infoWindow;
    }

    // clear out old wiki links before new request
    this.clearWikipedia = function() {
        var $wikiElem = $('#wikipedia-links');
        $wikiElem.text("");
    };

    // load wikilinks
    this.loadWikipedia = function(name) {

        var $wikiElem = $('#wikipedia-links');
        var location = name;
        self.clearWikipedia();

        // load wikipedia data
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + location + '&format=json&callback=wikiCallback';
        var wikiRequestTimeout = setTimeout(function(){
            $wikiElem.text("Failed to get wikipedia resources");
        }, 8000);

        $.ajax({
            url: wikiUrl,
            dataType: "jsonp",
            jsonp: "callback",
            success: function( response ) {
                var articleList = response[1];
                if (response[1].length === 0){
                    $wikiElem.text("We could not find any relevant links");
                }
                for (var i = 0; i < articleList.length; i++) {
                    var articleStr = articleList[i];
                    var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                    $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
                }
                clearTimeout(wikiRequestTimeout);
            }
        });
        return false;
    };

    //slide listview when clicked show/hide list button
    var el = $('button.sb_view');
    el.on('click', function() {
        var title = el.text().toLowerCase();
        //alternate title show/hide
        if (title === 'show list'){
            el.text('hide list');
        } else if (title === 'hide list'){
            el.text('show list');
        }

        $('.list-view').toggleClass('view-hidden');
    });
};

//make it run once google.maps fired up initMap()
//ref http://stackoverflow.com/questions/20718183/adding-google-maps-with-knockoutjs?rq=1

$(window).load(function() {
    ko.applyBindings(new ViewModel());
});
