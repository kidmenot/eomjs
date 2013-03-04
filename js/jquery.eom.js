define(['jquery','http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js'], function ($) {

	var mapSetup = function(context, options){

		var mapDiv = $(context).find('.eom-map').get(0);
    		
		// create a map in the "map" div, set the view to a given place and zoom
		var map = L.map(mapDiv).setView([51.505, -0.09], 13);

		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		return map;

	};

	var addToMap = function(context, newEvent){

    return context.each(function(){
      console.log(this);
      // add a marker in the given location, attach some popup content to it and open the popup
      L.marker(new L.LatLng(newEvent.lat, newEvent.lng), { title: newEvent.title }).addTo(this.map).bindPopup(newEvent.description);

    });

	};

	var timelineSetup = function(context, options){

		var timelineDiv = $(context).find('.eom-timeline').get(0);

		var max = options.max || 1000;
   		var min = options.min || 0;
   		var step = options.step || 10;


   		$(timelineDiv).append($('<input />',{ class:'time-line', type:"range", min:min, max:max, step: step }));

   		return timelineDiv;

	};

	var addToTimeline = function(context, options){
		$('.time-line').attr('step', eventList.length);
	};

	/*set of methods available externally*/
    var methods = {

    	init: function(options) {
    		
        var self = this;

    		var settings = {
    			mapOptions: {

    			},
    			timelineOptions: {
    				max:1000,
    				min:0,
            step:10
    			},
    			eventList: []
    		};

        return this.each(function() {        

            /*merging options with default settings*/
      			if ( options ) { 
        			$.extend( settings, options );
      			}

      			/*DOM Manipulation*/
      			$(this).empty();

      			$(this).append($('<div/>').addClass('eom-map'));

      			$(this).append($('<div/>').addClass('eom-timeline'));
				
      			this['map'] = mapSetup(this, settings.mapOptions);

      			this['timeline'] = timelineSetup(this, settings.timelineOptions);

            this['eventList']  = settings.eventList;

      			$(this).eom('add', this.eventList);

    		});

    	},

   		add: function(newEvents) {

        var context = this;

   			if( Object.prototype.toString.call(newEvents) !== '[object Array]' ) {
   				$.error( 'Method add requires an array parameter' );	
   			}

        if(!Boolean(newEvents.length)) {
   				return this;
   			}

   			/*
				title, description, time, lat, lng
   			*/
   			$.each(newEvents, function() {

          addToMap(context ,this);
			   
        });

			

   		}

    };

    $.fn.eom = function(method) {

    	if ( methods[method] ) {
     		return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    	} else if ( typeof method === 'object' || ! method ) {
      		return methods.init.apply( this, arguments );
    	} else {
      		$.error( 'Method ' +  method + ' does not exist on jQuery.eom' );
    	}

    };
});
