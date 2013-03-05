require(['jquery','jquery.eom'], function($) {
	$(function() {
		var eomObj = $('#container').eom().eom('add',
		[
			{
				title:'Birth',
				description: 'Napolean Bonaparte was born in Ajaccio, Corsica',
				time: 1769,
				lat: 41.916,
				lng: 8.733
			},
			{
				title:'Valence',
				description: 'Graduates from Ecole Militaire holding the rank of Second Leutenant, first posting is in Valence',
				time: 1785,
				lat: 39.469,
				lng: -0.376
			},
			{
				title:'Bravery at Toulon',
				description: 'Promoted to Brigadier General for his courage in the internal french battle at Toulon',
				time: 1793,
				lat: 43.117,
				lng: 5.933
			},
			{
				title:'Italian Command',
				description: 'Napolean is given command of the french army in Italy.',
				time: 1795,
				lat: 41.9,
				lng: 12.483
			},
			{
				title:'Egyptian Campaign',
				description: 'Napolean captures Alexandria and Cairo but loses to the british navy in the Battle of Aboukir',
				time: 1798,
				lat: 30.060,
				lng: 31.311
			},
			{
				title:'British Treaty',
				description: 'Treaty of Amiens signed with Britain ',
				time: 1802,
				lat: 49.9,
				lng: 2.3
			},
			{
				title:'The French Emporer',
				description: 'Napoleon crowns himself Emperor in Notre-Dame Cathedral, Paris ',
				time: 1804,
				lat: 48.867,
				lng: 2.333
			},
			{
				title:'The King Of Italy',
				description: 'Napoleon is crowned king of Italy in Milan',
				time: 1805,
				lat: 45.467,
				lng: 9.2
			},
			{
				title:'The Russian Treaty',
				description: 'Czar Alexander I makes peace with Napoleon in the Treaty of Tilsit in the aftermath of his victory at Friedland',
				time: 1807,
				lat: 51.417,
				lng: 9.933
			},
			{
				title:'Battle of Vitoria',
				description: 'The French fall to Spain in the Battle of Vitoria.',
				time: 1813,
				lat: 42.85,
				lng: 2.667
			},
			{
				title:'End of Reign',
				description: 'Napoleon abdicates his rule and Louis XVIII, a Bourbon, is restored to the French throne and is exiled to Elba.',
				time: 1814,
				lat: 42.817,
				lng: 10.317
			},
			{
				title:'End of the "Hundred Days Campaign"',
				description: 'After rallying the french troops once more, he is defeated in the Battle of Waterloo by the British and Prussians, led by Wellington and Blucher and abdicates the throne once more.',
				time: 1815,
				lat: 50.833,
				lng: 4.333
			},
			{
				title:'Death in exile',
				description: 'Dies in exile at Saint Helena',
				time: 1821,
				lat: -15.933,
				lng: -5.7
			}
		])
		.eom('set',0);

		console.log('eomObj', eomObj);

	});
});