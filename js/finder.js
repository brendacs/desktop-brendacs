$(document).ready(function() {
  // folders
  $('.finder-directory-container').on('click', function(e) {
    $('.finder-directory-container').removeClass('highlight');
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-section.finder-inner-items-list-container').addClass('finder-section-border');
    $('.finder-inner-items-list').addClass('hide');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  // folder outer directories
  $('.education-folder').on('click', function(e) {
    $('.education-items').removeClass('hide');
  });

  $('.experience-folder').on('click', function(e) {
    $('.experience-items').removeClass('hide');
  });

  $('.projects-folder').on('click', function(e) {
    $('.project-items').removeClass('hide');
  });

  $('.documents-folder').on('click', function(e) {
    $('.document-items').removeClass('hide');
  });

  // folder items
  $('.finder-item-container').on('click', function(e) {
    $('.finder-item-container').removeClass('highlight');
    $(this).addClass('highlight');
    $('.finder-selected-item-wrapper').addClass('hide');
  });

  // education
  $('.finder-item-container.burton-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.burton-selected-item').removeClass('hide');
  });

  $('.finder-item-container.berkeley-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.berkeley-selected-item').removeClass('hide');
  });

  $('.finder-item-container.major-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.major-selected-item').removeClass('hide');
  });

  $('.finder-item-container.minor-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.minor-selected-item').removeClass('hide');
  });

  // experience
  $('.finder-item-container.adobe-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.adobe-selected-item').removeClass('hide');
  });

  $('.finder-item-container.climate-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.climate-selected-item').removeClass('hide');
  });

  $('.finder-item-container.stowk-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.stowk-selected-item').removeClass('hide');
  });

  $('.finder-item-container.registria-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.registria-selected-item').removeClass('hide');
  });

  $('.finder-item-container.aaa-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.aaa-selected-item').removeClass('hide');
  });

  $('.finder-item-container.decal-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.decal-selected-item').removeClass('hide');
  });

  $('.finder-item-container.ffl-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.ffl-selected-item').removeClass('hide');
  });

  // projects
  $('.finder-item-container.stopbot-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.stopbot-selected-item').removeClass('hide');
  });

  $('.finder-item-container.devils-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.devils-selected-item').removeClass('hide');
  });

  $('.finder-item-container.referobot-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.referobot-selected-item').removeClass('hide');
  });

  $('.finder-item-container.liquefy-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.liquefy-selected-item').removeClass('hide');
  });

  $('.finder-item-container.news-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.news-selected-item').removeClass('hide');
  });

  $('.finder-item-container.csch-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.csch-selected-item').removeClass('hide');
  });

  // documents
  $('.finder-item-container.resume-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.resume-selected-item').removeClass('hide');
  });

  $('.finder-item-container.about-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.about-selected-item').removeClass('hide');
  });

  $('.finder-item-container.quotes-list-item').on('click', function(e) {
    $('.finder-selected-item-wrapper.quotes-selected-item').removeClass('hide');
  });
});
