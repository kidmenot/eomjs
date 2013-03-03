define(['jquery','http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js'], function ($) {

	var eventCount = 0;

	/*set of methods available*/
    var methods = {

    	init: function(options) {
    		var mapDiv = options.mapDiv || 'map';
    		var scaleDiv = options.scaleDiv|| 'scale';
    		$('#' + mapDiv).eom(options.mapOptions||{});
    		$('#' + scaleDiv).eom(options.scaleOptions||{});
    		return this;
    	},

    	map: function(options) {

    		var div = this[0].id;
    		
			// create a map in the "map" div, set the view to a given place and zoom
			var map = L.map('map').setView([51.505, -0.09], 13);

			// add an OpenStreetMap tile layer
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			/*
			// add a marker in the given location, attach some popup content to it and open the popup
			L.marker([51.5, -0.09]).addTo(map)
    			.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    			.openPopup();
			*/
			console.log(this);
   			return this;
   		},

   		scale: function(options) {
   			
   			var max = options.max || 1000;
   			var min = options.min || 0;
   			var step = eventCount;


   			$(this).append($('<input />',{ class:'time-scale', type:"range", min:min, max:max, step: step }));

   			console.log(this);
   			return this;
   		},
   		
   		add: function(options) {

   			if( Object.prototype.toString.call(newEvents) !== '[object Array]' ) {
   				$.error( 'Method add requires an array parameter' );	
   			}

   			var mapDiv = options.mapDiv || 'map';
    		var scaleDiv = options.scaleDiv|| 'scale';
    		
   			/*
				title, description, time, lat, lng
   			*/
   			$.each(newEvents, function(newEvent) {

				$('#'+mapDiv).eom('addToMap', newEvent);

				$('#'+scaleDiv).eom('addToScale', newEvent)

   				eventCount++;

			});

   		},

   		addToMap: function(newEvent){

   			// add a marker in the given location, attach some popup content to it and open the popup
			L.marker([newEvent.lat, newEvent.lng], { title: newEvent.title }).addTo(L.map(this[0].id)).bindPopup(newEvent.description);

   		},

   		addToScale: function(newEvent) {

   			$('.time-scale').attr('step', eventCount);

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
