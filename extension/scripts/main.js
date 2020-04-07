//Strike through EROS
$('.tac, .mb').css({"text-decoration": "line-through"})

//removes links from resources section
$('ul').remove();

//add text to resources dropdown 
$('.pt4').html("<b>United States Supreme Court<br>GINZBURG v. UNITED STATES(1966)<br>No. 42<br>Argued: December 7, 1965 Decided: March 21, 1966</b><br><br>Petitioner Ginzburg and three corporations which he controlled were convicted of violating the federal obscenity statute, 18 U.S.C. § 1461, by mailing three publications: an expensive hardcover magazine dealing with sex, a sexual newsletter, and a short book purporting to be a sexual autobiography. The prosecution charged that these publications were obscene in the context of their production, sale, and attendant publicity. Besides testimony as to the merit of the material, abundant evidence was introduced that each of the publications was originated or sold as stock in trade of the business of pandering, i.e., the purveying of publications openly advertised to appeal to the customers' erotic interest. Mailing privileges were sought from places with salaciously suggestive names; circulars for the magazine and newsletter stressed unrestricted expression of sex, and advertising of the book which purported to be of medical and psychiatric interest, but whose distribution was not confined to a professional audience, dwelt on the book's sexual imagery. In finding petitioners guilty, the trial judge applied the obscenity standards first enunciated in Roth v. United States, 354 U. S. 476, and the Court of Appeals affirmed.")

//append image to the magazine covers
$('.lazy-wrap').append('<div class="filth">'+'<img src="https://icplibrary.files.wordpress.com/2016/12/ginzburgerossummer1962letterresponse4.jpg?w=390&h=264&zoom=2">');

//css for .filth
$('.filth').css({"margin": "0", "position": "absolute", "top": "25%", "width": "80%", "transform": "rotate(5deg)", "margin-left": "10%"})

//append image to volumes div
$('.p1').append('<div class="bible">'+'<img src="https://icplibrary.files.wordpress.com/2016/12/ginzburgerossummer1962letterresponse.jpg?w=2000&h=">'); 

//css for .bible img
$('.bible').css({"margin": "0", "position": "absolute", "top": "0%", "width": "30%", "transform": "rotate(-5deg)", "margin-left": "30%"})




//append image to index div
//$('.t0').append('<div class="maniac">'+'<img src="https://icplibrary.files.wordpress.com/2016/12/ginzburgerossummer1962letterresponse3.jpg?w=999&h=&zoom=2">');
//$('.t0').append('<div class="bast">'+'<img src="https://icplibrary.files.wordpress.com/2016/12/ginzburgerossummer1962letterresponse2.jpg?w=957&h=&zoom=2">');
//css for .maniac img
//$('.maniac').css({"margin": "0", "position": "absolute", "top": "10%", "width": "30%", "transform": "rotate(5deg)", "margin-left": "30%"})
//$('.bast').css({"margin": "0", "position": "absolute", "top": "60%", "width": "30%", "transform": "rotate(-5deg)", "margin-left": "30%"})