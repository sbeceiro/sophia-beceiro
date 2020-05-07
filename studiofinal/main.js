var foods = [ 
			{
		"name": "ramen",
		"link": "<img src= 'media/ramen.jpg'>",
		"description": "<br>late night snack."
	},
	{
		"name": "chefs",
		"link": "<img src= 'media/Gnocchi1.jpg'>",
		"description": "<br>marissa found a recipe for gnocchi on tasty and she really wanted to try it out. we didn't have a potato masher, but we tried"
	},
	{
		"name": "gnocchi",
		"link": "<img src= 'media/Gnocchi2.jpg'>",
		"description": "<br>i would say this gnocchi was definitely a success."
	},
	{
		"name": "penne alla vodka",
		"link": "<img src= 'media/penne.jpg'>",
		"description": "<br>i made penne alla vodka. this was my first attempt at ever making a sauce from scratch. all we had was this leftover smirnof someone had left in my apartment one weekend pre-corona. this also took twice as long as it should have to prepare becase i couldn't figure out how to use my roommate's blender..."
	},
	{
		"name": "picadillo",
		"link": "<img src= 'media/picadillo.jpg'>",
		"description": "<br>picadillo is a cuban dish that consitst of ground beef, tomatoes, rasins and olives. the word picadillo roughly translates to minced, or chopping up in small pieces. i tried my hand at this traditional dish using pieces of a recipe that i had from memory and a few google searches. i'd say for my first attempt making this, i was pretty successful, and definitely nostalgic."
	},
	{
		"name": "avocado toast",
		"link": "<img src= 'media/avotoast.jpg'>",
		"description": "<br>avocado toast topped with a fried egg and bacon."
	},
	{
		"name": "pizza",
		"link": "<img src= 'media/pizza.jpg'>",
		"description": "<br>a very simple pizza: cauliflower crust topped with raos tomato sauce and shredded mozzarella."
	},
	{
		"name": "mac",
		"link": "<img src= 'media/mac.jpg'>",
		"description": "<br>marissa's very famous mac and cheese recipe, she won't share her secret but she says, 'it's bangin'."
	},
	{
		"name": "mac",
		"link": "<img src= 'media/floorkale.jpg'>",
		"description": "<br>bonus image: floor kale."
	},
	]

// document.body.style.backgroundColor = "green";
		var counter = 0;
// gives us the mousedown function + creates a class in HTML called mouseDownBox + a variable called photoclick
		$(window).mousedown(function( event ) {
			var photoClick = $('<div/>', {
				'class': 'mouseDownBox'
			})
// chooses .pic from the array to add the event listener to
			.html(foods[counter%foods.length].link)
			.append(foods[counter%foods.length].description)
			// .append(photos[counter%photos.length].desc)
				.hover(function(){
					$("description").css({'opacity': 100})
				});
			// appends the variable to the HTML
			counter = counter+1;
			$('.food').append(photoClick)
			});

var roofs = [ 
	{
		"name": "sweater",
		"link": "<img src= 'media/sweater.jpg'>",
		"description": "<br>a chilly afternoon on the roof"
	},
	{
		"name": "roof working",
		"link": "<img src= 'media/roofworking.jpg'>",
		"description": "<br>staying inside all day is getting boring... so we try to take our work up to the roof sometimes, we usually end up distracted or the wifi gives out."
	},
	{
		"name": "serious face",
		"link": "<img src= 'media/roofsrs.jpg'>",
		"description": "<br>serving very 'over this' looks."
	},
	{
		"name": "rainbow one",
		"link": "<img src= 'media/rainbow2.jpg'>",
		"description": "<br>this was taken on the day of the famous double rainbow over nyc. i was actually having a terrible day and went up on the roof to get some fresh air and started crying. i was about to go back downstairs when i noticed the rainbow starting to form, i don't necissarily believe in ~signs~ but this made me cry-laugh. felt pretty good."
	},
	{
		"name": "rainbow two",
		"link": "<img src= 'media/rainbow1.jpg'>",
		"description": "<br>double rainbow over nyc on april 13"
	},
	{
		"name": "bday roof",
		"link": "<img src= 'media/bday.jpg'>",
		"description": "<br>it was my birthday so we spent the day outside soaking in the sun, unfortunately marissa had a video project due the next day, also unfortunately we only had pbr."
	},
	{
		"name": "roof view",
		"link": "<img src= 'media/roofview.jpeg'>",
		"description": "<br>a view of the roof on a sunny day."
	},
	{
		"name": "lookin down",
		"link": "<img src= 'media/lookindown.jpeg'>",
		"description": "<br>we see u."
	},
	{
		"name": "green thumb",
		"link": "<img src= 'media/PlantTrees.JPG'>",
		"description": "<br>plants make you happy :)"
	},
	]
	
var counter = 0;

		$(window).mousedown(function( event ) {
			var photoClack = $('<div/>', {
				'class': 'mouseDownBox'
			})

			.html(roofs[counter%roofs.length].link)
			.append(roofs[counter%roofs.length].description)

				.hover(function(){
					$("description").css({'opacity': 100})


				});

			counter = counter+1;
			$('.roof').append(photoClack)
			});

var walks = [ 
	{
		"name": "wandering",
		"link": "<img src= 'media/bluesky.jpeg'>",
		"description": "<br>some blue skies in the village"
	},
	{
		"name": "bandana masks",
		"link": "<img src= 'media/badmasks.jpeg'>",
		"description": "<br>before getting a hold of actual masks we suffocated under bandanas."
	},
	{
		"name": "pretty sight",
		"link": "<img src= 'media/flowers.jpeg'>",
		"description": "<br>spring has spring! sorta!."
	},
	{
		"name": "t joes",
		"link": "<img src= 'media/groceries.jpg'>",
		"description": "<br>a trader joes run in preparation for the city's lockdown. *taken prior to the state's requirement to wear masks in public"
	},
	{
		"name": "rona selfie",
		"link": "<img src= 'media/IMG_3163.jpeg'>",
		"description": "<br>all masked up with nowhere to go"
	},
	{
		"name": "fit check",
		"link": "<img src= 'media/IMG_3168.jpeg'>",
		"description": "<br>getting dressed is worthy of documentation nowadays."
	},
	{
		"name": "masks",
		"link": "<img src= 'media/newmask.jpeg'>",
		"description": "<br>strolling down sixth ave when we walked up on this lady selling neoprene masks for $5, honestly the cheapest we've seen masks in the city. jumped on that #sale."
	},
	]
	
var counter = 0;

		$(window).mousedown(function( event ) {
			var photoClock = $('<div/>', {
				'class': 'mouseDownBox'
			})

			.html(walks[counter%walks.length].link)
			.append(walks[counter%walks.length].description)

				.hover(function(){
					$("description").css({'opacity': 100})
				});

			counter = counter+1;
			$('.walks').append(photoClock)
			});

var misc = [ 
	{
		"name": "washsq",
		"link": "<img src= 'media/ATMEESHPHOTOS.JPG'>",
		"description": "<br>pre-city-lockdown, spending the days in washington square park"
	},
	{
		"name": "birth",
		"link": "<img src= 'media/birthday.jpg'>",
		"description": "<br>my 20th birthday took place on zoom"
	},
	{
		"name": "zoom",
		"link": "<img src= 'media/HowToZoom.PNG'>",
		"description": "<br>miss the good ol' days."
	},
	{
		"name": "moon smooch",
		"link": "<img src= 'media/MoonKissed1.PNG'>",
		"description": "<br>we miss our favorite band."
	},
	{
		"name": "miss meesh",
		"link": "<img src= 'media/NotSocialDistanced.JPG'>",
		"description": "<br>our friend michelle had to leave the city when it shut down. i miss her so."
	},
	{
		"name": "springish",
		"link": "<img src= 'media/spring.jpeg'>",
		"description": "<br>went on a walk and i needed to take these beautiful flowers home with me."
	},
	{
		"name": "flower",
		"link": "<img src= 'media/spring.jpg'>",
		"description": "<br>just look at this! a callery pear tree flower."
	},
	{
		"name": "postcard",
		"link": "<img src= 'media/WriteYrFriends.jpg'>",
		"description": "<br>recieved a postcard from our dear friend khaya while moon kissed was on tour, the last line said 'hope you guys are happy and healthy'. postmarked march 10, 2020."
	},
	{
		"name": "plants",
		"link": "<img src= 'media/IMG_3206.jpeg'>",
		"description": "<br>hoping this sprouts!"
	},
	{
		"name": "animal crossing",
		"link": "<img src= 'media/acnh.jpeg'>",
		"description": "<br>yep"
	},
	]
	
var counter = 0;

		$(window).mousedown(function( event ) {
			var photoCluck = $('<div/>', {
				'class': 'mouseDownBox'
			})

			.html(misc[counter%misc.length].link)
			.append(misc[counter%misc.length].description)

				.hover(function(){
					$("description").css({'opacity': 100})
				});

			counter = counter+1;
			$('.misc').append(photoCluck)
			});
