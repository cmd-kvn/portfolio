$('li[data-content="home"]').on('click', function(){
  console.log('I clicked home');
  // hide all nav content except home
  $('section[id="project-content"]').hide();
  $('section[id="about-me-content"]').hide();
  $('section[id="blog-content"]').hide();
  $('section[id="connect-content"]').hide();
  // display home page/reset css
  $('div[class="welcome-box"]').show();
});

$('li[data-content="about-me"]').on('click', function(){
  console.log('I clicked about me');
  // hide all nav content except about me
  $('div[class="welcome-box"]').hide();
  $('section[id="blog-content"]').hide();
  $('section[id="project-content"]').hide();
  $('section[id="connect-content"]').hide();
  // display about me content/reset css
  $('section[id="about-me-content"]').css('display', 'block');
});

$('li[data-content="blog"]').on('click', function(){
  console.log('I clicked blog');
  // hide all nav content except blogs
  $('div[class="welcome-box"]').hide();
  $('section[id="about-me-content"]').hide();
  $('section[id="project-content"]').hide();
  $('section[id="connect-content"]').hide();
  // display blog content/reset css
  $('section[id="blog-content"]').css('display', 'block');
});

$('li[data-content="projects"]').on('click', function(){
  console.log('I clicked projects');
  // hide all nav content except projects
  $('div[class="welcome-box"]').hide();
  $('section[id="about-me-content"]').hide();
  $('section[id="blog-content"]').hide();
  $('section[id="connect-content"]').hide();
  // display project content/reset css
  $('section[id="project-content"]').css('display', 'block');
});

$('li[data-content="connect"]').on('click', function(){
  console.log('I clicked connect');
  // hide all nav content except connect
  $('div[class="welcome-box"]').hide();
  $('section[id="about-me-content"]').hide();
  $('section[id="project-content"]').hide();
  $('section[id="blog-content"]').hide();
  // display connect content/reset css
  $('section[id="connect-content"]').css('display', 'block');
});
