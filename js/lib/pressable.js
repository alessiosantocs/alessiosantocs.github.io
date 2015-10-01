window.updatePressables = function(){
	$('.pressable').on('tap click', function(event){
		var link = $(this).find('a');

		var ctrlpressed = event.metaKey;
		
		window.setTimeout(function(){
			if(ctrlpressed){
				window.open(link.attr('href'));
			}else{
				window.location.href = link.attr('href');
			}
		}, 700);
	});

	// Persisting active status
	$('.btn,.link,.project,.career-experience,.repository').mousedown(function(){
		$(this).addClass('active');
	});

	$('.btn,.link,.project,.career-experience,.repository').mouseout(function(){
		$(this).removeClass('active');
	});

	$('.btn,.link,.project,.career-experience,.repository').mouseup(function(){
		var _this = this;
		window.setTimeout(function(){
			$(_this).removeClass('active');
		}, 700)
	});
};

$(document).ready(function () {
	updatePressables();
});
