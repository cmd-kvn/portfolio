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
