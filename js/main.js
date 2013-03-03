require(['jquery','jquery.eom'], function($) {
	$(function() {
        $("#activate").click(function(){
        	$("#map").eom({});
        });
    });
});