
// configure the routes by registering each URL the app can handle, linked to a single controller function to handle it
page('/about', aboutController.reveal);
page('/blog', blogController.reveal);
page('/connect', connectController.reveal);
page('/projects', projectController.reveal);
page('/', welcomeController.reveal);

// call the page function to activate page.js and execute
page();
