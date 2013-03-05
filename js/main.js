require(['jquery','jquery.eom'], function($) {
	$(function() {
		var eomObj = $('#container').eom().eom('add',
		[
			{
				title:'test1',
				description: 'blah blah',
				time: 1989,
				lat: 51.5,
				lng: -0.09
			},
			{
				title:'test2',
				description: 'blah blah2',
				time: 1989,
				lat: 51.49,
				lng: -0.09
			},
			{
				title:'test3',
				description: 'blah blah2',
				time: 1989,
				lat: 51.49,
				lng: -0.08
			},
			{
				title:'test4',
				description: 'blah blah2',
				time: 1989,
				lat: 51.49,
				lng: -0.07
			},
			{
				title:'test5',
				description: 'blah blah2',
				time: 1989,
				lat: 51.49,
				lng: -0.06
			},
			{
				title:'test6',
				description: 'blah blah2',
				time: 1989,
				lat: 51.48,
				lng: -0.09
			},
			{
				title:'test7',
				description: 'blah blah2',
				time: 1989,
				lat: 51.47,
				lng: -0.09
			},
			{
				title:'test8',
				description: 'blah blah2',
				time: 1986,
				lat: 51.46,
				lng: -0.09
			},
			{
				title:'test9',
				description: 'blah blah2',
				time: 1987,
				lat: 51.48,
				lng: -0.09
			}
		])
		.eom('set',4);

		console.log('eomObj', eomObj);

	});
});