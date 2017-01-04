(function(module) {
  var projectObj = {};

  projectObj.allRepos = [];

  projectObj.requestRepos = function(callback) {
    $.ajax('https://api.github.com/user/repos', {
      method: 'GET', // usually default
      headers: {Authorization: 'token ' + githubToken}, // this or parameters version
      //data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
      success: function(response) {
        projectObj.allRepos = response;
        console.log('ajax success ', response);
        console.log('projectObj.allRepos: ', projectObj.allRepos);
        callback();
      },
      error: function(response) {
        console.log('ajax error', response);
      }
    });
  };

  projectObj.withTheAttribute = function(myAttr) {
    return projectObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.projectObj = projectObj;
})(window);
