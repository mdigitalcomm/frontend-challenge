# Frontend Challenge

This is a front-end web-app built with javascript and [Mocky.io](https://mocky.io)

## How to run?
Option 1: Create a webserver with tools like [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) to run it.

Option 2: Use build tools (instructed as below) to run it. 

## Run it with build tools
This project uses [Gulp](https://gulpjs.com/) for build.
You need to have Node.js installed before you can install Gulp.

To succesfully run the project, please follow these steps to install Gulp and plugins used in the project:

1. Install Gulp into the project by using command: 
	$ npm install gulp --save -dev

2. Install plugin gulp-sass 
	$ npm install gulp-sass --save -dev

3. Install plugin browser-sync 
	$ npm install browser-sync --save -dev

4. To host the app locally on localhost, cd to the root folder of the project and run command: 
	$ gulp serve

