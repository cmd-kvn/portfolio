(function(module) { // this is an IIFE
  var connectController = {};

  connectController.reveal = function() {
    // use jquery to grab and hide all the first children of parent main in the main div html, filter to select the connect id, and show it
    $('main > *').hide().filter('#connect-content').show();
    // other options would be to give each html element a matching role or data attribute with the same value
    // ex. data="tab" or role="tabpanel"
  };

  module.connectController = connectController;
})(window);
