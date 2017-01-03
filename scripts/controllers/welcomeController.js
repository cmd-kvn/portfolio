(function(module) { // this is an IIFE
  var welcomeController = {};

  welcomeController.reveal = function() {
    // use jquery to grab and hide all the first children of parent main in the main div html, filter to select the class welcome-box, and show it
    //$('main > *').hide().filter('.welcome-box').show();
    // ^this is not working for some reason???

    $('section[id="about-me-content"]').hide();
    $('section[id="blog-content"]').hide();
    $('section[id-"project-content"]').hide();
    $('section[id="connect-content"]').hide();

    $('div[class="welcome-box"]').show();
  };

  module.welcomeController = welcomeController;
})(window);
