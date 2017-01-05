(function(module) {
  var projectsObj = {};

  projectsObj.allProjects = [];

  projectsObj.requestProjects = function(callback) {
    $.ajax('https://api.github.com/user/repos', {
      method: 'GET', // usually default
      headers: {Authorization: 'token ' + githubToken}, // this or parameters version
      //data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
      success: function(response) {
        projectsObj.allProjects = response;
        console.log('ajax success ', response);
        console.log('projectsObj.allProjects: ', projectsObj.allProjects);
        callback();
      },
      error: function(response) {
        console.log('ajax error', response);
      }
    });
  };

  projectsObj.withTheAttribute = function(myAttr) {
    return projectsObj.allProjects.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.projectsObj = projectsObj;
})(window);
