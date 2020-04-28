

var objects = [
	// {
	// 	"name": "birthday song",
	// 	"type": "video",
	// 	"link": "media/birthday.mp4",
	// 	"tag": "zoom, birthday"
	// },
	{
		"name": "postcard",
		"type": "image",
		"link": "media/WriteYrFriends.jpg",
		"tag": "text"
	},
	{
		"name": "birthday",
		"type": "image",
		"link": "media/birthday.jpg",
		"tag": "zoom, birthday"
	},
	{
		"name": "chefs",
		"type": "image",
		"link": "media/Gnocchi1.jpg",
		"tag": "food"
	},
	{
		"name": "gnocchi",
		"type": "image",
		"link": "media/Gnocchi2.jpg",
		"tag": "food"
	},
	{
		"name": "ramen",
		"type": "image",
		"link": "media/ramen.jpg",
		"tag": "food"
	},
	{
		"name": "going crazy",
		"type": "image",
		"link": "media/goingcrazy.jpg",
		"tag": "marissa"
	},
	{
		"name": "moon kissed live",
		"type": "image",
		"link": "media/MoonKissed1.png",
		"tag": "instagram, live, social media"
	},
	{
		"name": "moon kissed live",
		"type": "image",
		"link": "media/MoonKissed2.jpg",
		"tag": "art"
	},
	{
		"name": "outdoor time",
		"type": "image",
		"link": "media/RoofPicnic2.jpg",
		"tag": "roof"
	},
	{
		"name": "plant trees",
		"type": "image",
		"link": "media/PlantTrees.jpg",
		"tag": "roof"
	},
	{
		"name": "rainbow",
		"type": "image",
		"link": "media/Rainbow2.jpg",
		"tag": "roof"
	},
	{
		"name": "bag secured",
		"type": "image",
		"link": "media/ACNH.jpg",
		"tag": "AC"
	},
	{
		"name": "art",
		"type": "image",
		"link": "media/WashEm.jpg",
		"tag": "social media, instagram"
	},
	{
		"name": "twitter",
		"type": "image",
		"link": "media/twitter2.png",
		"tag": "social media, twitter"
	},
	]

	for(var i=0; i<objects.length; i++){
	$('.object').append('<img class="inserted" src= " ' + objects[i].link + ' ">')
}

	for(var i=0; i<objects.length; i++){
	$('.object').append('<div class="box">' + objects[i].name + '</div>')
}

$(document).ready(function(){
  $("#hide").click(function(){
    $(".object").hide();
  });
  $("#show").click(function(){
    $(".object").show();
  });
});




