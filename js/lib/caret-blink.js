(function() {
  var $ghost, $shell, sentinel, textCheck;

  $ghost = $('#ghost');

  $shell = $('#shell');

  $ghost.click(function() {
    return $(this).val('');
  });

  $(function() {
    return $ghost.val($shell.text());
  });

  textCheck = function() {
    var cur, oldVal;
    cur = $ghost.val();
    if (cur !== oldVal) {
      $shell.text($ghost.val());
    }
    return oldVal = cur;
  };

  sentinel = setInterval(textCheck, .1);

}).call(this);
