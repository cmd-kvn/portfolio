(function(module) {
  var projectsObj = {};

  projectsObj.allProjects = [];

  projectsObj.requestProjects = function(callback) {
    // $.ajax('https://api.github.com/user/repos', {
    //   method: 'GET', // usually default
    //   headers: {Authorization: 'token ' + githubToken}, // this or parameters version
    //   //data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
    //   success: function(response) {
    //     projectsObj.allProjects = response;
    //     console.log('ajax success ', response);
    //     console.log('projectsObj.allProjects: ', projectsObj.allProjects);
    //     callback();
    //   },
    //   error: function(response) {
    //     console.log('ajax error', response);
    //   }
    // });
    $.get('/github/user/repos' + //users/repos is the authenticated version
          '?per_page=10&sort=updated')
          .done(function(data) {
            reposObj.allRepos = data;
            // $.get('/github/user/followers') // second ajax call
            // .done(function(data) {
            //   reposObj.followers = data;
          })
          .done(callback); // the callback will be the renderRepos
          // });
  };

  projectsObj.withTheAttribute = function(myAttr) {
    return projectsObj.allProjects.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.projectsObj = projectsObj;
})(window);
