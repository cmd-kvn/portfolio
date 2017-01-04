(function(module) {
  var projectView = {};

  var projectCompiler = function(currentValue){
    var source = $('#project-handlebars').html();
    console.log('source: ', source);
    var template = Handlebars.compile(source);
    var html = template(currentValue);
    console.log('html: ', html);
    // $('#project-handlebars').append(html); // append happens in renderRepos
    return html; // so it can be appended in renderRepos
  };

  projectView.renderProjects = function() {
    console.log('inside renderprojects ', projectsObj.withTheAttribute('name'));
    $('#project-ul').empty().append(
      projectsObj.withTheAttribute('language')
      .map(projectCompiler)
    );
  };

  projectsObj.requestProjects(projectView.renderProjects);
  // projectCompiler();
  // renderRepos();
  module.projectView = projectView;
})(window);
