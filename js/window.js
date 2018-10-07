$(document).ready(function() {
  var zindex = 1;
  var open = 0;

  // universal window functions
  $('.window').draggable({ containment: '.pc' });
  $('.window').resizable({ containment: '.pc' });

  $('.window').on('click', '.button-close', function(e) {
    $(this).closest('.window').addClass('hide');
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-item-container').removeClass('highlight');
    $('.finder-section.finder-inner-items-list-container').removeClass('finder-section-border');
    $('.project-items').removeClass('disabled-text');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  $('.window').on('click', '.button-min', function(e) {
    $(this).closest('.window').addClass('hide');
  });

  $('.window').on('click', function(e) {
    open = open + 1;
    $(this).closest('.window').css('z-index', zindex + open);
  });

  // taskbar triggers
  $('.finder-icon').on('click', function(e) {
    open = open + 1;
    $('.finder-window').css('z-index', zindex + open);
    $('.finder-window').removeClass('hide');
  });

  $('.browser-icon').on('click', function(e) {
    open = open + 1;
    $('.browser-window').css('z-index', zindex + open);
    $('.browser-window').removeClass('hide');
  });

  $('.sublime-icon').on('click', function(e) {
    open = open + 1;
    $('.sublime-window').css('z-index', zindex + open);
    $('.sublime-window').removeClass('hide');
  });

  $('.terminal-icon').on('click', function(e) {
    open = open + 1;
    $('.terminal-window').css('z-index', zindex + open);
    $('.terminal-window').removeClass('hide');
  });

  // desktop folders
  $('.desktop-education-folder').on('click', function(e) {
    open = open + 1;
    $('.finder-window').css('z-index', zindex + open);
    $('.education-items').removeClass('hide');
  });

  $('.desktop-experience-folder').on('click', function(e) {
    open = open + 1;
    $('.finder-window').css('z-index', zindex + open);
    $('.experience-items').removeClass('hide');
  });

  $('.desktop-projects-folder').on('click', function(e) {
    open = open + 1;
    $('.finder-window').css('z-index', zindex + open);
    $('.project-items').removeClass('hide');
  });

  $('.desktop-documents-folder').on('click', function(e) {
    open = open + 1;
    $('.finder-window').css('z-index', zindex + open);
    $('.document-items').removeClass('hide');
  });
});
