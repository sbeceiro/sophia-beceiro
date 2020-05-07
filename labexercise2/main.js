

// var flowers = ["rose", "sunflower", "daisy", "tulip", "lily", "daffodil", "orchid", "poppy", "pansy",  "hibiscus", "carnation", "lavender", "lilac", "voilet", "jasmine", "peony"] 

var flowers = [
	{
		"name": "rose",
		"color": "red",
		"size": "medium",
		"location":"asia",
		"image":"images/rose.png"
	},
	{
		"name": "daisy",
		"color": "white",
		"size": "small",
		"location":"asia, europe",
		"image":"images/daisy.png"
	},
	{
		"name": "sunflower",
		"color": "yellow",
		"size": "large",
		"location":"north america",
		"image":"images/sunflower.png"
	},
	{
		"name": "tulip",
		"color": "pink",
		"size": "medium",
		"location":"europe",
		"image":"images/tulip.png"
	},
	{
		"name": "lily",
		"color": "white",
		"size": "large",
		"location":"europe, asia, north america",
		"image":"images/lily.png"
	},
	{
		"name": "daffodil",
		"color": "yellow",
		"size": "medium",
		"location":"europe",
		"image":"images/daffodil.png"
	},
	{
		"name": "orchid",
		"color": "purple",
		"size": "large",
		"location": "south america",
		"image":"orchid/rose.png"
	},
	{
		"name": "poppy",
		"color": "red",
		"size": "medium",
		"location": "asia",
		"image":"images/poppy.png"
	},
	{
		"name": "pansy",
		"color": "purple",
		"size": "small",
		"location": "europe",
		"image":"images/pansy.png"
	},
	{
		"name": "hibiscus",
		"color": "red",
		"size": "large",
		"location": "asia",
		"image":"img src='images/hibiscus.png'"
	},
	{
		"name": "carnation",
		"color": "pink",
		"size": "medium",
		"location": "europe, asia",
		"image":"images/carnation.png"
	},
	{
		"name": "lavender",
		"color": "purple",
		"size": "large",
		"location": "europe, africa",
		"image":"images/lavender.png"
	},
	{
		"name": "lilac",
		"color": "purple",
		"size": "large",
		"location": "europe",
		"image":"images/lilac.png"
	},
	{
		"name": "violet",
		"color": "purple",
		"size": "small",
		"location": "north america",
		"image":"images/violet.png"
	},
	{
		"name": "jasmine",
		"color": "white",
		"size": "small",
		"location": "europe, asia",
		"image":"images/jasmine.png"
	},
		{
		"name": "peony",
		"color": "pink",
		"size": "large",
		"location": "europe, asia, north america",
		"image":"images/peony.png"
	}
]

for(var i=0; i<flowers.length; i++){
	$('#flowers').append('<div class="box">' + flowers[i].name + '</div>')
}

var counter = 0;

		$(window).mousedown(function( event ) {
			var flowersDiv = $('<div/>', {
				'class': 'mouseDownBox'
			})
			.html(flowers[counter%flowers.length].image)
			.css({'top': event.pageY-50, 'left': event.pageX-50})

			counter = counter+1;
			$('body').append(flowersDiv)
		})

// for(var i=0; i<flowers.length; i++){
// 	$('#flowers').append(flowers[i].name + "<br>")
// 	console.log(flowers[i])
// }

// for(var i=0; i<flowers.length; i++){
// 	$('#flowers').append(flowers[i].color + "<br>")
// 	console.log(flowers[i])
// }

// function describeFlower(flowers) {
// 	console.log("this flower is", flowers.name, "and is", flowers.color, "it is a", flowers.size, "flower.", "It grows in", flowers.location)
// }