QUnit.module('Blog Constructor', function() {

  QUnit.test('Blog should create a new Blog', function(assert) {
    var obj0 = {
      title: 'This blog nice'
    };

    var testBlog0 = new Blog(obj0);

    assert.equal(testBlog0.title, 'This blog nice');
  });

  QUnit.test('Blog instance should have a method toHtml', function(assert) {
    var obj1 = {
      title: 'This blog nice'
    };

    var testBlog1 = new Blog(obj1);
    var testMethod0 = testBlog1.toHtml;

    assert.notEqual(testMethod0, 'undefined');
  });

  QUnit.test('Blog instance should have method pushToBlogsArr', function(assert) {
    var obj2 = {
      title: 'This blog ok'
    };

    var testBlog2 = new Blog(obj2);
    var testMethod1 = testBlog2.pushToBlogsArr;

    assert.notEqual(testMethod1, 'undefined');
  });

  QUnit.test('Blog.blogsArr should be an array', function(assert) {
    assert.ok(Array.isArray(Blog.blogsArr));
  });

}); // end module Blog Constructor

QUnit.module('articleView ', function() {

  QUnit.test('articleView object should have handleMainNav property', function(assert) {
    var testForProperty = articleView.handleMainNav;

    assert.notEqual(testForProperty, 'undefined');
  });

}); // end module Blog Class
