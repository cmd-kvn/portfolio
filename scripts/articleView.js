$('li[data-content="blog"]').on('click', function(){
  console.log('I clicked blog');
  // hide all nav content except blogs
  $('div[class="welcome-box"]').hide();
  $('section[id="project-content"]').hide();
  // display blog content/reset css
  $('section[id="blog-content"]').css('display', 'block');
});

$('li[data-content="projects"]').on('click', function(){
  console.log('I clicked projects');
  // hide all nav content except projects
  $('div[class="welcome-box"]').hide();
  $('section[id="blog-content"]').hide();
  // display project content/reset css
  $('section[id="project-content"]').css('display', 'block');
});
