

// var flowers = ["rose", "sunflower", "daisy", "tulip", "lily", "daffodil", "orchid", "poppy", "pansy",  "hibiscus", "carnation", "lavender", "lilac", "voilet", "jasmine", "peony"] 

var flowers = [
	{
		"name": "rose",
		"color": "red",
		"size": "medium",
		"location":"asia"
	},
	{
		"name": "daisy",
		"color": "white",
		"size": "small",
		"location":"asia, europe"
	},
	{
		"name": "sunflower",
		"color": "yellow",
		"size": "large",
		"location":"north america"
	},
	{
		"name": "tulip",
		"color": "pink",
		"size": "medium",
		"location":"europe"
	},
	{
		"name": "lily",
		"color": "white",
		"size": "large",
		"location":"europe, asia, north america"
	},
	{
		"name": "daffodil",
		"color": "yellow",
		"size": "medium",
		"location":"europe"
	},
	{
		"name": "orchid",
		"color": "purple",
		"size": "large",
		"location": "south america"
	},
	{
		"name": "poppy",
		"color": "red",
		"size": "medium",
		"location": "asia"
	},
	{
		"name": "pansy",
		"color": "purple",
		"size": "small",
		"location": "europe"
	},
	{
		"name": "hibiscus",
		"color": "red",
		"size": "large",
		"location": "asia"
	},
	{
		"name": "carnation",
		"color": "pink",
		"size": "medium",
		"location": "europe, asia"
	},
	{
		"name": "lavender",
		"color": "purple",
		"size": "large",
		"location": "europe, africa"
	},
	{
		"name": "lilac",
		"color": "purple",
		"size": "large",
		"location": "europe"
	},
	{
		"name": "violet",
		"color": "purple",
		"size": "small",
		"location": "north america"
	},
	{
		"name": "jasmine",
		"color": "white",
		"size": "small",
		"location": "europe, asia"
	},
		{
		"name": "peony",
		"color": "pink",
		"size": "large",
		"location": "europe, asia, north america"
	}
]

for(var i=0; i<flowers.length; i++){
	$('#flowers').append('<div class="box">' + flowers[i].name + '</div>')
}

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