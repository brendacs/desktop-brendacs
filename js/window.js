$(document).ready(function() {
  $('.window').draggable({ containment: '.pc' });

  $('.window').on('click', '.button-close', function(e) {
    $(this).closest('.window').addClass('hide');
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-item-container').removeClass('highlight');
    $('.finder-section.finder-inner-items-list-container').removeClass('finder-section-border');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
  });
});
