var foods = [ 
			{
		"name": "ramen",
		"title": "image",
		"link": "<img src= 'media/ramen.jpg'>",
		"description": "<br>late night snack."
	},
	{
		"name": "chefs",
		"type": "image",
		"link": "<img src= 'media/Gnocchi1.jpg'>",
		"description": "<br>marissa found a recipe for gnocchi on tasty and she really wanted to try it out. we didn't have a potato masher, but we tried"
	},
	{
		"name": "gnocchi",
		"type": "image",
		"link": "<img src= 'media/Gnocchi2.jpg'>",
		"description": "<br>i would say this gnocchi was definitely a success."
	},
	{
		"name": "penne alla vodka",
		"type": "image",
		"link": "<img src= 'media/penne.jpg'>",
		"description": "<br>this was my first attempt at ever making a sauce from scratch. all we had was this leftover smirnof someone had left in my apartment one weekend pre-corona. this also took twice as long as it should have to prepare becase i couldn't figure out how to use my roommate's blender..."
	},
	{
		"name": "picadillo",
		"type": "image",
		"link": "<img src= 'media/picadillo.jpg'>",
		"description": "<br>picadillo is a cuban dish that consitst of ground beef, tomatoes, rasins and olives. the word picadillo roughly translates to minced, or chopping up in small pieces. i tried my hand at this traditional dish using pieces of a recipe that i had from memory and a few google searches. i'd say for my first attempt making this, i was pretty successful, and definitely nostalgic."
	},
	{
		"name": "avocado toast",
		"type": "image",
		"link": "<img src= 'media/avotoast.jpg'>",
		"description": "<br>avocado toast topped with a fried egg and bacon."
	},
	{
		"name": "pizza",
		"type": "image",
		"link": "<img src= 'media/pizza.jpg'>",
		"description": "<br>a very simple pizza: cauliflower crust topped with raos tomato sauce and shredded mozzarella."
	},
	{
		"name": "mac",
		"type": "image",
		"link": "<img src= 'media/mac.jpg'>",
		"description": "<br>marissa's very famous mac and cheese recipe, she won't share her secret but she says, 'it's bangin'."
	},
	{
		"name": "mac",
		"type": "image",
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
					// $( this ).fadeOut( 100 );
  			// 		$( this ).fadeIn( 500 );
				});
			// appends the variable to the HTML
			counter = counter+1;
			$('.food').append(photoClick)
			});


	

