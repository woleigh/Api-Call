$(document).ready(function(){
	
	$(document).keydown(function(event){
		var choice = $("input[name=foodChoice]").val();
		// get the value of the Search the user submitted
		if (event.which == 13){
    		event.preventDefault();
			getResolution(choice);
			$('form').find('input[type=text]').val('');
		}
	});

/**	
	$("a.menuClose").click(function(){
		
  		$(".menuShow").fadeOut(1000);
  	});
**/
	
});
// Variable declaration for Result Images
var getImage = function(result){
	var $imgOne = $('.imageOne'),
		$imgTwo = $('.imageTwo'),
		$imgThree = $('.imageThree'),
		$imgFour = $('.imageFour'),
		$imgFive = $('.imageFive'),
		$imgSix = $('.imageSix'),
		$imgSeven = $('.imageSeven'),
		$imgEight = $('.imageEight'),
		$imgNine = $('.imageNine')
		
// Array for Result Images	
	var $images = [$imgOne,$imgTwo,$imgThree,$imgFour,$imgFive,$imgSix,$imgSeven,$imgEight,$imgNine];
		
		for (var i = 0, j=result.matches.length-1; i < j; i++){
			$images[i].attr('src', result.matches[i].smallImageUrls[0]);
		}

};
// Variable declaration for Result names
var getLabel= function(result){
	var	$txtOne = $('.textOne'),
		$txtTwo = $('.textTwo'),
		$txtThree = $('.textThree'),
		$txtFour = $('.textFour'),
		$txtFive = $('.textFive'),
		$txtSix = $('.textSix'),
		$txtSeven = $('.textSeven'),
		$txtEight = $('.textEight'),
		$txtNine = $('.textNine')
		
// Array for Result Names
	var $texts = [$txtOne,$txtTwo,$txtThree,$txtFour,$txtFive,$txtSix,$txtSeven,$txtEight,$txtNine];
for (var i = 0, j=result.matches.length-1; i < j; i++){
			$texts[i].text(result.matches[i].recipeName);
			 
		}

};
// Yummly API Call 
var getResolution = function(choice) {

	var result = $.ajax({
		url: "http://api.yummly.com/v1/api/recipes?_app_id=6b86089b&_app_key=9abbe4dc697a30da00779bedce2ae772&q="+choice+"&requirePictures=true",
		dataType: "jsonp",
		type: "GET",
		})
	.done(function(result){
		
		$('.formArea p').text(result.totalMatchCount + " " + 'results');
		$('.resultShow p').text("Hover above picture for food Name");
		getImage(result);
		getLabel(result);
		
/**		selection = result.matches[0].id;
		$('.textOne').click(function(){
			getFullMenu(selection);
			
				
		$('.menuShow').fadeIn(1000);
		});
**/
		
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log(textStatus);
		console.log(errorThrown);
	});
	
};



/** 
// 2nd Yummly API Call Function
var getFullMenu = function(selection) {
	
	var result2 = $.ajax({
		url: "http://api.yummly.com/v1/api/recipe/"+selection+"?_app_id=6b86089b&_app_key=9abbe4dc697a30da00779bedce2ae772",
		dataType: "jsonp",
		type: "GET",
		})
	.done(function(result2){
		console.log(result2);
		delete selection;
		$('.imageMenu').attr('src', result2.images[0].hostedLargeUrl);
		$('.menuShow h1').text(result2.name);
		$('.menuList li').remove();
		$.each(result2.ingredientLines, function(i, item) {
			var $list =$('.menuList')
			$list.append('<li>' + item + '<li>');
		});
		
	})
	.fail(function(jqXHR, textStatus, errorThrown){
		console.log(textStatus);
		console.log(errorThrown);
	});


}; 
**/