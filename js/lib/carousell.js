$(document).ready(function () {

  $(".carousell .carousell-control").click(function (event) {

    var control = $(this);
    var parent = control.parent();

    // tell me which button has been pressed ["left", "right"]
    var buttonPressed = function buttonPressedFn() {
      if(control.hasClass("left"))
        return "left";
      else if(control.hasClass("right"))
        return "right";
    };

    // find the next child whatever it takes
    var findNext = function findNextFn() {
      var next;
      var children = parent.find(".carousell-slide");

      var activeChild = parent.find(".carousell-slide.solid.active");

      if(buttonPressed() == "right"){
        next = activeChild.next(".carousell-slide");

        if(next.length == 0){
          next = $(children[0]);
        }
      }

      if(buttonPressed() == "left"){
        next = activeChild.prev(".carousell-slide");

        if(next.length == 0){
          next = $(children[children.length - 1]);
        }
      }

      return next;
    };


    // Disable a slide and accept a callback when done
    var deactivateSlide = function activateSlideFn(slide, callback) {
      slide.removeClass("active");

      setTimeout(function () {
        slide.removeClass("solid");

        if(callback !== undefined)
          callback();
      }, 500)
    };

    // Activate slide
    var activateSlide = function activateSlideFn(slide) {
      if(slide === undefined)
        console.error("There is no slide to activate") && exit();

      slide.addClass("solid");

      setTimeout(function () {
        slide.addClass("active");
      }, 500);
    };


    var activeChild = $(parent).find(".carousell-slide.solid.active");
    var nextChild = findNext();

    deactivateSlide(activeChild, function () {
      activateSlide(nextChild);
    });

  });
});
