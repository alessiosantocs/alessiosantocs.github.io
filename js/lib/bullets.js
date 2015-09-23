
;(function ($) {

	var selectBullet = function (array, index) {
		array.removeClass("active");
		$(array[index]).addClass("active");
	};

	var initBulletGroup = function (object, options) {
		object.each(function eachBulletToggleRadioGroupF (index) {
			var group = $(this);

			var bullets = group.find(".bullet");

			bullets.click(function onBulletClickF (event) {
				var bullet = $(this);

				bullets.removeClass("active");
				bullet.addClass("active");
			});
		});
	};

	$.fn.bullets = function (action, value, properties) {
		var children = this.find(".bullet");

		if(value === undefined){
		}
		if(properties === undefined)
			properties = {};

		if(action == "select"){
			selectBullet(children, value);
		}else{
			initBulletGroup($(this));
		}
	};
}(jQuery))

$(document).ready(function() {

	var bullet_toggle_radio_groups = $(".bullet-group.bullet-toggle-radio");

	bullet_toggle_radio_groups.bullets();
});
