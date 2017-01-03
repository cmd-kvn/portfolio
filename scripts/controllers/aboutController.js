(function(module) { // this is an IIFE
  var aboutController = {};

  aboutController.reveal = function() {
    // use jquery to grab and hide all the first children of parent main in the main div html, filter to select the about-me-content id, and show it
    // other options would be to give each html element a matching role or data attribute with the same value
    // ex. data="tab" or role="tabpanel"
    $('main > *').hide().filter('#about-me-content').show(); // chaining the jquery eliminates line 10 $(id).show()
    // use jquery to show the about section in main html
    //$('#about-me-content').show();
  };

  module.aboutController = aboutController;
})(window);
