define(['jquery','http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js'], function ($) {

	/*set of methods available*/
    var methods = {

    	init: function(options) {
    		var mapDiv = options.mapDiv || 'map';
    		var scaleDiv = options.scaleDiv|| 'scale';
    		$('#' + mapDiv).eom(mapDiv,options.mapOptions||{});
    		$('#' + scaleDiv).eom(scaleDiv,options.scaleOptions||{});
    		return this;
    	},
    	map: function(options) {

    		var div = this[0].id;
    		/*
    		var map = new OpenLayers.Map(div, {numZoomLevels: 2});
            var layer = new OpenLayers.Layer.WMS( "OpenLayers WMS", "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
            
            map.addLayer(layer);
            map.zoomToMaxExtent();
			*/

			// create a map in the "map" div, set the view to a given place and zoom
			var map = L.map('map').setView([51.505, -0.09], 13);

			// add an OpenStreetMap tile layer
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			// add a marker in the given location, attach some popup content to it and open the popup
			L.marker([51.5, -0.09]).addTo(map)
    			.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    			.openPopup();

            console.log(this);
   			return this;
   		},
   		scale: function(options) {
   			
   			var max = options.max || 1000;
   			var min = options.min || 0;
   			var step = options.step || 10;


   			$(this).append($('<input />',{ type:"range", min:min, max:max, step: step }));

   			console.log(this);
   			return this;
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
