$(document).ready(function() {
  $('.window').draggable({ containment: '.pc' });

  $('.window').on('click', '.button-close', function(e) {
    $(this).closest('.window').addClass('hide');
  });
});
