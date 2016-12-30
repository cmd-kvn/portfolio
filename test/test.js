QUnit.module('Blog Constructor', function() {

  QUnit.test('Blog should create a new Blog', function(assert) {
    var obj = {
      title: 'This blog nice'
    };

    var testBlog = new Blog(obj);

    assert.equal(testBlog.title, 'This blog nice');
  });

  QUnit.test('Blog instance should have a method toHtml', function(assert) {
    var obj = {
      title: 'This blog nice'
    };

    var testBlog = new Blog(obj);
    var testMethod = testBlog.toHtml;

    assert.notEqual(testMethod, 'undefined');
  });

  QUnit.test('Blog instance should have property pushToBlogsArr', function(assert) {

  });

}); // end module Blog Constructor

QUnit.module('Blog Class', function() {

  QUnit.test('Blog.blogsArr should be an array', function(assert) {
    assert.ok(Array.isArray(Blog.blogsArr));
  });

}); // end module Blog Class
