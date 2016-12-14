// Create a new .js file with the appropriate methods to help modify your source data to help render it to the DOM:
// Use good Object Oriented code: Create a constructor function for projects or source data.
// Leave as little in the window (global) namespace as possible: attach functions to objects, etc.
// Use jQuery to clone the example markup for each project, as you add additional content.
// Your "Project" prototype should have a .toHtml() function that adds new data to the DOM.

var blogsArr = [];

// constructor that will take in the blogEntries object array
function Blog (arr) {
  this.title = arr.title;
  this.date = arr.date;
  this.tag = arr.tag;
  this.link = arr.link;
  this.body = arr.body;
}

Blog.prototype.toHtml = function() {
  // find the beginning of the DOM node and all its children where you will fill in the html
  var $newBlog = $('article.blog-template').clone();
  // change the attribute 'data-tag' to match the passed-in object
  $newBlog.attr('data-tag', this.tag);
  // find() the elements in the clone and fill in the rest of the current template clone with properties from this particular Blog instance
  $newBlog.find('.title').html(this.title);
  $newBlog.find('a').html(this.date);
  $newBlog.find('a').attr('href', this.link);
  $newBlog.find('.blog-body').html(this.body);

  // remove the class from the clone which is saying in css to not display
  $newBlog.removeAttr('class');

  return $newBlog;
};

// sorts blog entries by date but the date value needs yyyy-mm-dd notation
// blogEntries.sort(function(curElem, nextElem) {
//   return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
// });

// for each element of the blogEntries object array, push a new blog object into the var blogsArr. The new blog object has the needed toHtml function
blogEntries.forEach(function(ele) {
  blogsArr.push(new Blog(ele));
});

// for each object in the blogsArr, run the toHtml function and append the object to the id'ed section
blogsArr.forEach(function(a) {
  $('#blog-content').append(a.toHtml());
});
