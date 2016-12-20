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
  var source = $('#blog-handlebars').html();
  var template = Handlebars.compile(source);
  var html = template(this);

  return html;
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
