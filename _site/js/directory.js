$(document).ready(function() {
  $('.desktop-icon-container').on('click', function() {
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-section.finder-inner-items-list-container').addClass('finder-section-border');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
    $('.finder-window').removeClass('hide');
  });

  $('.desktop-education-folder').on('click', function() {
    $('.education-folder').addClass('highlight');
    $('.education-items').removeClass('hide');
  });

  $('.desktop-experience-folder').on('click', function() {
    $('.experience-folder').addClass('highlight');
    $('.experience-items').removeClass('hide');
  });

  $('.desktop-projects-folder').on('click', function() {
    $('.projects-folder').addClass('highlight');
    $('.project-items').removeClass('hide');
  });

  $('.desktop-documents-folder').on('click', function() {
    $('.documents-folder').addClass('highlight');
    $('.document-items').removeClass('hide');
  });
});
