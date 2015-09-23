$(document).ready(function () {
	var dom_array = $(".window-sized");

	dom_array.each(function () {
		var element = $(this);
		element.attr("data-original-height", element.innerHeight());
	});

	$(window).on('resize', function () {
		var window_height = window.innerHeight;
		dom_array.each(function () {
			var element = $(this);
			var original_height = element.attr("data-original-height");
			var screen_percentage = element.attr("data-size-percentage") || 1;

			if(window_height >= original_height)
				element.css("min-height", window_height * screen_percentage);
			else
				element.css("min-height", original_height);
		});

		$('.vertically-aligned').verticalAlign();
	});

	$(window).resize();
});
