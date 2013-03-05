define(['jquery', 'http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js'], function ($) {

	var mapSetup = function(context, options){

    var mapDiv = $(context).find('.eom-map').get(0);
    		
		// create a map in the "map" div, set the view to a given place and zoom
		var map = L.map(mapDiv, {
      zoom: options.zoom,
      maxZoom: options.maxZoom
    });

		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		return map;

	};

	var addToMap = function(context, newEvent){
    
    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([newEvent.lat, newEvent.lng], { title: newEvent.title }).addTo(context.map).bindPopup('<h3>' + newEvent.title + '</h3>'+ '<p>' + newEvent.description + '</p>');

	};

  var setMapEvent = function(context, eventIndex){

    var lat = context.eventList[eventIndex].lat;

    var lng = context.eventList[eventIndex].lng;

    context.map.fitBounds([[lat, lng]]);

    context.map.panTo([lat, lng]);

  };

	var timelineSetup = function(context, options){

    var timelineDiv = $(context).find('.eom-timeline').get(0);    

    var timelineBase = $('<ul />').addClass('eom-timeline-base').appendTo($(timelineDiv));

	};

	var addToTimeline = function(context, newEvent){
		
    var timelineBase = $($(context).find('.eom-timeline').get(0)).find('.eom-timeline-base').get(0);

    $('<li />', { 
      id: newEvent.time, 
      html: '<a>' + newEvent.time + '</a>' ,
      click: function() {
        $(context).eom('set', findEventIndex(context, newEvent.time));
      }
    }).addClass('eom-timeline-event').appendTo($(timelineBase));

	};

  var setTimelineEvent = function(context, eventIndex){

    var timelineBase = $($(context).find('.eom-timeline').get(0)).find('.eom-timeline-base').get(0);

    $(timelineBase).find("li").each(function(){ $(this).removeClass('active-eom-event'); });

    $('#'+context.eventList[eventIndex].time).addClass('active-eom-event');

  };

  var findEventIndex = function(context, time) {
    
    var eventIndex = -1;

    $.each(context.eventList, function(index){
      if(this.time.toString() === time.toString()) {
        eventIndex = index;
        return false;
      }
    });

    return eventIndex;

  }

	/*set of methods available externally*/
    var methods = {

    	init: function(options) {
    		
        var self = this;

    		var settings = {

    			mapOptions: {
            maxZoom: 8,
            zoom: 12
    			},

    			timelineOptions: {

    			}

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

            this['eventList'] = [];

    		});

    	},

   		add: function(newEvents) {

        var self = this;

   			if( Object.prototype.toString.call(newEvents) !== '[object Array]' ) {
   				$.error( 'Method add requires an array parameter' );	
   			}

        if(!Boolean(newEvents.length)) {
   				return this;
   			}

   			/*
        adding the newEvents to the context
				  newEvent format: title, description, time, lat, lng
   			*/
   			
        return self.each(function(){

          var context = this;

          $.each(newEvents, function() {

            addToMap(context, this);

            addToTimeline(context, this);

            context.eventList.push(this);

          });

        });

   		},

      set: function(eventIndex){

        return this.each(function(){

          setMapEvent(this, eventIndex);

          setTimelineEvent(this, eventIndex);

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
