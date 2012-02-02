/* Author: Oli Evans <oli@zilla.org.uk>
*/

$(function(){

	function lazyLoadImages() {
		// TODO: load images on demand. Looks like browsers will start doing this kind of optimisation soon:
		$('.lazy img').hide();

		$('.lazy').appear(function(){
			$('img', $(this)).fadeIn('slow');
		});
	}

	function disableZoomOnRotate() {
		if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
			var viewportmeta = document.querySelector('meta[name="viewport"]');
			if (viewportmeta) {
				viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
				document.body.addEventListener('gesturestart', function () {
					viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
				}, false);
			}
		}
	}

	function zoomInOnWorkImages() {
		$('.work a.lazy').colorbox({rel:'lazy', maxWidth:'96%', maxHeight:'96%', scalePhotos:'true'});
	}

	// on document ready
	lazyLoadImages();
	disableZoomOnRotate();
	zoomInOnWorkImages();
});
