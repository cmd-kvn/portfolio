(function(module) {
  var projectsObj = {};

  projectsObj.allProjects = [];

  projectsObj.requestProjects = function(callback) {
    $.get('/github/user/repos' + //users/repos is the authenticated version
          '?per_page=10&sort=updated')
          .done(function(data) {
            projectsObj.allProjects = data;
          })
          .done(callback); // the callback will be the renderRepos
  };

  projectsObj.withTheAttribute = function(myAttr) {
    return projectsObj.allProjects.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.projectsObj = projectsObj;
})(window);
