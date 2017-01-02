(function(module) { // this is an IIFE
  var aboutController = {};

  aboutController.reveal = function() {
    // use jquery to grab and hide the content in the main div html
    $('main').hide();
    // use jquery to show the about section in main html
    $('section[id="about-me-content"]').show();
  };

  module.aboutController = aboutController;
})(window);
