require(['jquery','jquery.eom'], function($) {
	$(function() {
		var a = $('#container').eom({
			eventList: [
				{
					title:'test',
					description: 'blah blah',
					time: 1989,
					lat: 51.5,
					lng: -0.09
				}
			]
		});
		console.log(a); 
		/*$("#map").eom('map',{});
		$("#scale").eom('scale',{});
		$.eom('add', 'map',[
			{
				title: 'test',
				description: 'test description',
				lat: 51.5,
				lng: -0.09,
				time: 100
			}
		]);*/
    });
});