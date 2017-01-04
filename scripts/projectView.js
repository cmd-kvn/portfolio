(function(module) {
  var projectView = {};

  var projectCompiler = function(currentValue){
    var source = $('#project-handlebars').html();
    var template = Handlebars.compile(source);
    var html = template(currentValue);
    // $('#project-handlebars').append(html); // append happens in renderRepos
    return html; // so it can be appended in renderRepos
  };

  projectView.renderProjects = function() {
    console.log('inside renderprojects ', projectsObj.withTheAttribute('name'));
    $('#about ul').empty().append(
      projectsObj.withTheAttribute('language')
      .map(projectCompiler)
    );
  };

  projectsObj.requestRepos(projectView.renderProjects);
  // projectCompiler();
  // renderRepos();
  module.projectView = projectView;
})(window);
