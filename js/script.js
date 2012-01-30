/* Author: Oli Evans <oli@zilla.org.uk>
*/

$('.lazy img').hide();

$('.lazy article').appear(function(){
	$('img', $(this)).fadeIn('slow');
});

if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	var viewportmeta = document.querySelector('meta[name="viewport"]');
	if (viewportmeta) {
		viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
		document.body.addEventListener('gesturestart', function () {
			viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		}, false);
	}
}

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