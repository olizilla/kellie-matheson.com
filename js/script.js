/* Author: Oli Evans <oli@zilla.org.uk>
*/

$('.lazy img').hide();

$('.lazy article').appear(function(){
	$('img', $(this)).fadeIn('slow');
});

//$('article').appear(function(){
//	var lazy = $('.lazy', $(this));
//	var src = lazy.attr('data-src');
//	var img = $('<img/>').hide();
//	img.attr('src', src);
//	lazy.replaceWith(img);
//	img.ready(function(){
//		img.fadeIn('slow');
//	})
//});

