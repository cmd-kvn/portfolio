(function(module) { // this is an IIFE
  var projectController = {};

  projectController.reveal = function() {
    // use jquery to grab and hide all the first children of parent main in the main div html, filter to select the project id, and show it
    //$('main > *').hide().filter('#project-content').show();
    // ^this doesn't work for some reason??
    
    $('div[class="welcome-box"]').hide();
    $('section[id="about-me-content"]').hide();
    $('section[id="blog-content"]').hide();
    $('section[id="connect-content"]').hide();

    $('section[id="project-content"]').show();

  };

  module.projectController = projectController;
})(window);
