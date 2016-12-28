var articleView = {};

articleView.handleMainNav = function() {
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
};

articleView.renderIndexPage = function() {
  Blog.blogsArr.forEach(function(a) {
    $('#blog-content').append(a.toHtml());
  });

  articleView.handleMainNav();
};



$.ajax('/data/blogArticles.json', {
  	method: 'GET',
  	success: function(response){ // the response is blogArticles.json, but parsed
    Blog.pushToBlogsArr(response); // response is an array of objects that will be pushed into the array on the variable Blog.blogArr and appended to html

    // Blog.blogsArr now is an array of objects

    // map the blogsArr[] to add a wordCount property
    // count the words in the body property of the array and use .reduce to calculate the word count.
    // console.dir(Blog);
    var addWordCountKey = function(curBlogObj){
      // curBlogObj.wordCount = curBlogObj.body.match(/\w+/g).length;
      curBlogObj.wordCount = curBlogObj.body
      .split(' ') // the body string is now an array of strings
      .reduce(function(acc, curr){ // the indexes are all summed up
        return acc + curr;
      }, 0);

      return curBlogObj;
    };
    Blog.blogsArr.map(addWordCountKey); //(function(curBlogObj){
    //   curBlogObj.wordCount = 1000;
    //   });
    //   return curBlogObj;
    // });
    // console.log('blog.blogarr: ', Blog.blogsArr);


    articleView.renderIndexPage();
  	},
  	error: function(response) {
  	console.log ('error', response);
  }
});
