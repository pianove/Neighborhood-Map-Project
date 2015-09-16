//=======Model=============
// to hard code 5 locations
var initialLocations = [
    {
    street: 'Girardin',
    city: 'Roanne',
    },
    
    {
    street: 'Girardin',
    city: 'Chennai',
    },

    {
    street: 'Girardin',
    city: 'Budapest',
    },
    
    {
    street: 'Girardin',
    city: 'Hong Kong',
    },
    
    
    {
    street: 'Girardin',
    city: 'New York',
    }
]

// to construct locations from initialLocations array
var Location = function(data) {
    this.street = ko.observable(data.street);
    this.city = ko.observable(data.city);
    this.greeting = ko.computed(function(){
        var greetingText = 'So, you want to live at '+ this.street() + ', ' + this.city() + '?';
        return greetingText
    },this);
    this.adress =  ko.computed(function(){
        var adress = this.street() + ', ' + this.city();
        return adress
    },this);
    this.streetViewUrl = ko.computed(function(){
        return ('http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + this.adress() + '')
    },this);
    
    
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
    };
    // load streetview
   console.log(this.currentLocation().streetViewUrl());    
};



ko.applyBindings(new ViewModel());
//ko.applyBindings({
//        street: ko.observable(""),        // Initially blank
//        city: ko.observable("")  // Initially blank
//});


//======ViewModel

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
