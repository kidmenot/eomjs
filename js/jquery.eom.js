define(['jquery','OpenLayers'], function ($) {

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
    		console.log(this);
   			return this;
   		},
   		scale: function(options) {
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
