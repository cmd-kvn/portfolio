(function(module) { // this is an IIFE
  var blogController = {};

  blogController.reveal = function() {
    // use jquery to grab and hide the content in the main div html
    // see aboutController for more efficient way
    $('div[class="welcome-box"]').hide();
    $('section[id="project-content"]').hide();
    $('section[id="about-me-content"]').hide();
    $('section[id="connect-content"]').hide();

    // use jquery to show the about section in main html
    $('section[id="blog-content"]').show();
  };

  module.blogController = blogController;
})(window);
