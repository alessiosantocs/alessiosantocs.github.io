
requirejs.config({
   "paths": {
     "jquery": "lib/jquery.min",
     "waypoints": "lib/waypoints"
   }
});


require(["jquery", "waypoints"], function ($, W) {
	require(["lib/jquery.scrollTo.min", "lib/bootstrap.min", "lib/vertical-align", "lib/window-sized", "lib/pressable", "lib/carousell", "cinnamon"], function (){

    $('.nav a').on('click', function(){
      if($(".navbar-toggle").css("display") !== "none")
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });

    $('section').on("touchstart", function() {
      if($(".navbar-collapse.collapse").hasClass("in"))
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });

    $('.panel-try button').click(function(){

      $('.panel-try .panel-overlay').css('z-index', '1');
      $('.panel-try').addClass('display-overlay');

      window.setTimeout(function(){
        $('.panel-try').removeClass('display-overlay');
        window.setTimeout(function(){
          $('.panel-try .panel-overlay').css('z-index', '0');
        }, 1000);
      }, 2000);
    });


    $('form').submit(function(event){
      event.preventDefault();
    });


	});
});
