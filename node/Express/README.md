# Express

## Objectives

- Start a simple express app and review `require`  
- Add multiple routes to an express.js app
- Set status code on responses
- Read URL parameters in express
- Read query string parameters in express
- Send dynamic files using ejs as a templating engine

## Intro Videos

For some background, begin by watching the videos in the "Intro to Express.js" [article](https://workbook.galvanize.com/cohorts/41/articles/379) on Workbook.

Need to review HTTP? Check out [this article.](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

# Intro to Express.js

Objectives:

- Start a simple express app and review `require`  
- Apply routing knowledge to serve dynamic content

## Express

### What is it?

## What's Express?

When you're looking to build a small Node.js HTTP server with only a few route handlers, nothing is simpler or faster than the `http` module. But as you've seen, it takes quite a bit of code to build even a modest server. When you're looking to build a large server with many route handlers, then it's a good idea to reach for a tool like Express.

**Express** is a library, built top of the `http` module, that provides a minimal, flexible, and performant set of features that are fundamental to server-side web application development. A **server-side web application** is the class of programs that run on the backend, routing incoming HTTP requests to route handlers, and sending back HTTP responses that usually contain dynamic content from a database.

When you think of a database-driven, server-side application, think of products like GitHub. When an user logs into GitHub, he or she will see their own personal timeline on the [landing page](https://github.com/). Or when a user visits a repository, he or she will either see the [repository](https://github.com/expressjs/express) if they have permission or a 404 page if they don't. In order to accomplish this, a product like GitHub uses a server-side web application to handle each incoming request and respond with dynamic content depending on who made the request. In fact, GitHub uses a fleet of server-side web applications, all running simultaneously, to handle the volume of traffic that it receives every day.

### Getting Started

In this course, you'll learn how to develop large database-driven, server-side web applications like GitHub. But first, let's learn how Express works. To get started, create a new `hello_express` project.

```shell
mkdir hello_express
cd hello_express
```

Then, create a `server.js` file.

```shell
touch server.js
```

Next, use NPM to initialize a `package.json` file.

```shell
npm init
```

Then, use NPM to install the `express` module locally and save it as dependency in the `package.json` file.

```shell
npm install --save express
```

Next, open the `server.js` file in your text editor.

```shell
atom server.js
```

And type in the following code.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(function(req, res) {
  res.send('Hello World');
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Save the `server.js` file and run it with the `nodemon` command.

```shell
nodemon server.js
```

In a separate Terminal tab, send an HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/OuxwwyS.png)

### Exercise

Turn to a partner and share your thoughts about the similarities and differences you noticed about using the `express` module versus the `http` module. Afterwards, come up with a definition of Express in your own words.

## Why is Express useful?

There are many server-side web application frameworks for Node.js that you can download with NPM. For example, Express, hapi, koa.js, Nodal, Sails.js, and Meteor just to name a few. With over 6 million downloads per month, Express is the one of the most popular frameworks because it's fast, unopinionated, and minimalist. Additionally, Express has [good documentation](http://expressjs.com/en/4x/api.html), has a large community of plugins, and is used by both large and small companies.

## How do you create an HTTP server with the `express` module?

Now that you've learned a little bit about Express and web applications, let's convert the guest list Node.js HTTP server you built with the `http` module into an Express HTTP server using the `express` module.

To get started, return to the `party` project from yesterday and create a new `express` feature branch.

```shell
cd party
git checkout -b express
```

Next, create a `serverExpress.js` file.

```shell
touch serverExpress.js
```

Then, use NPM to install the `express` module locally and save it as dependency in the `package.json` file.

```shell
npm install --save express
```

Then, open the `party` project in your text editor.

```shell
atom .
```

And type in the following code to the `serverExpress.js` file.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.use(function(req, res) {
  var guests = ['Mary', 'Don'];
  res.send(guests);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Save the `serverExpress.js` file and run it with the `nodemon` command.

```shell
nodemon serverExpress.js
```

And you should see something like this.

![](https://i.imgur.com/m7dVeU8.png)

In a separate Terminal tab, send the following HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/Y6TeBbO.png)

Next, add and commit the latest changes to the `party` project's `express` branch.

```shell
git add .
git commit -m 'Add an Express HTTP server'
```

Right now, your Express server handles every request the same way, regardless of the request's method or path. It would be much more useful if your server could send back different responses based on the information inside the requests.

Let's fix that by refactoring the `serverExpress.js` file with the following code.

```javascript
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', function(req, res) {
  var guests = ['Mary', 'Don'];
  res.send(guests);
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Save the `serverExpress.js` file and send the following HTTP request to the server.

```shell
http GET localhost:8000/
```

And you should see something like this.

![](https://i.imgur.com/88z1b6W.png)

In a separate Terminal tab, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/1BHV6c7.png)

Next, add and commit the latest changes to the `party` project's `express` branch.

```shell
git add .
git commit -m 'Refactor Express server to send different responses'
```

Right now, your Express server sends a hardcoded guest list in the response. It would be much more useful if your Express server could send guest list that's read from the JSON-formatted `guests.json` file.

Let's fix that by refactoring the `serverExpress.js` file with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now, save the `serverExpress.js` file and add the following data to the `guests.json` file.

```shell
echo '["Mary", "Don"]' > guests.json
```

Send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/IgYJzHW.png)

Next, add and commit the latest changes to the `party` project's `express` branch.

```shell
git add .
git commit -m 'Send all guest records from the database'
```

Right now, your Express server can only send back all the records from the database. It would be much more useful if your Express server could send back individual records as well.

Let's fix that by refactoring the `serverExpress.js` file with the following code.

```javascript
'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var guests = JSON.parse(guestsJSON);

    res.send(guests);
  });
});

app.get('/guests/:id', function(req, res) {
  fs.readFile(guestsPath, 'utf8', function(err, guestsJSON)
    if (err) {
      console.error(err.stack);
      return res.sendStatus(500);
    }

    var id = Number.parseInt(req.params.id);
    var guests = JSON.parse(guestsJSON);

    if (id < 0 || id >= guests.length || Number.isNaN(id)) {
      return res.sendStatus(404);
    }

    res.set('Content-Type', 'text/plain');
    res.send(guests[id]);
  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
```

Now, save the `serverExpress.js` file and send the following HTTP request to the server.

```shell
http GET localhost:8000/guests
```

And you should see something like this.

![](https://i.imgur.com/IgYJzHW.png)

Now, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/0
```

And you should see something like this.

![](https://i.imgur.com/BAUNQqV.png)

Next, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/1
```

And you should see something like this.

![](https://i.imgur.com/HY5rw6x.png)

Next, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/3
```

And you should see something like this.

![](https://i.imgur.com/eGXNGd6.png)

Next, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/-1
```

And you should see something like this.

![](https://i.imgur.com/sRxSQtW.png)

Finally, send the following HTTP request to the server.

```shell
http GET localhost:8000/guests/abracadabra
```

And you should see something like this.

![](https://i.imgur.com/xHGcjJa.png)

Next, add and commit the latest changes to the `party` project's `express` branch.

```shell
git add .
git commit -m 'Send individual guest records from the database'
```

To merge, the commits from the `express` branch to the `master` branch, run the following commands.

```shell
git checkout master
git merge express
```

With the commits merged in, it's safe to delete the `express` branch.

```shell
git branch -d express
```

## URL Parameters

What if we want to create an app that can dynamically say hello to anyone?

* Using **url parameters** add a dynamic route to the application, indicated by `:` and the variable name you want to use, we'll use `:name` for the example below.

```javascript
app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});
```

Here we are seeing the first introduction to parameters that the application can identify. In the following route `:name` is consider a route parameter. We can access it using `req.params.name`.

## Query Parameters

Generally, you don't want to cram everything into a route. Just imagine when there are multiple parameters in route. Maybe we don't care about getting the order of the parameters correct. To solve this problem, we use **query parameters** with each request.

Let's see query params in action. Go to [https://google.com/search?q=puppies](https://google.com/search?q=puppies)

* `?` denotes the beginning of the query parameters
* `=` indicates an assignment; anything to the left is the key, while the right represents the value
* `&` allows for the input of multiple parameters, separating each

Let's add our first route to practice query params.

```javascript
app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});
```

Reset your server and go to [localhost:3000/hi?name=elie](http://localhost:3000/hi?name=elie). Note that we define parameters in the url after a `?`.

## Sending dynamic files

Sometimes there are static HTML files you want to send as a response. There are ways to send files using Express including `res.sendFile`, but if we want to send dynamic content, we will need to use something different.

Right now we have been using res.send to display information to our user, but if we want to render a dynamic page we will use `res.render`. Not only will we use this method, we will render templates using an engine called `ejs`. This requires us to run `npm install --save ejs` as well as including the line `app.set("view engine", "ejs")` inside of our `app.js`

```javascript
var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "Elie"});
});

```

Now inside of a views folder, we can create an index.ejs file and include

```html
<!DOCTYPE HTML>

<html>
  <head>
  </head>
  <body>
    Hello, <%= name %>!
  </body>
</html>
```

## Status Codes

You can also set the status code manually if you choose. Using the code
from above, add a new route after your `'/vegetables'` route.  We will
use a wild card operator. This route must be placed _after_ all your
other routes.

```js
//truncated code from above...

app.get("/vegetables", function (req, res) {
  //send all the veggies
  res.send(vegetables.join(", "));
});

// Our new route utilizing a wild card
app.get('/*', function (req, res) {
  res.status(404).send('Nope! Nothing here.');
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
```

# In-class Assignment

[Express Calculator](../Exercises/01-calculator)

## Slides

[Slides](https://docs.google.com/presentation/d/1JwgJOjsMuScIJMawBYdbZvwrfTwQp81ChkW1-p2387k/edit?usp=sharing)

## Resources

- [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [Installing Express](http://expressjs.com/en/starter/installing.html)
- [Getting started: Hello world](http://expressjs.com/en/starter/hello-world.html)
- [Getting started: Basic routing](http://expressjs.com/en/starter/basic-routing.html)
- [Guide: Routing](http://expressjs.com/en/guide/routing.html)
- [Express API Docs](http://expressjs.com/en/4x/api.html)
- [Express - Using Middleware](http://expressjs.com/en/guide/using-middleware.html)
- https://github.com/strongloop/express/blob/master/lib/application.js#L616

## Data Flow in Express

<iframe src="https://player.vimeo.com/video/136796681?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Intro to Dynamic Web App Concepts

<iframe src="https://player.vimeo.com/video/136579022?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Static Websites vs Dynamic Websites

<iframe src="https://player.vimeo.com/video/136582439?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Challenges

This is a repo of Express application exercises: [Exercises](../Exercises)

# Further Practice

* Write code using `readFileSync()` to count the number of new line characters in a given file.  The user should supply the file name as an argument when running the script.  For example:

    Given the following `test.txt` file:

    ```
    hello
    blah blah
    goodbye
    ```
    Running `node newLineCount.js test.txt` should print out 2.

* Rewrite the above code using `readFile()`
* Use the HTTP module to make a request to "http://omdbapi.com/?i=tt0241527" and store the data in an array.  Once the first request is finished, make another request to "http://omdbapi.com/?i=tt0295297" and add the data to the same array.  When the second request is finished, console.log the array with the data.  Callbacks!!!

- https://github.com/gSchool/express_intro_exercise
- [Booklist Refactor](https://github.com/gSchool/booklist_express)

## Resources

- [Envato - HTTP: The Protocol Every Web Developer Must Know - Part 1](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
- [Express - Request](http://expressjs.com/en/4x/api.html#req)
- [Express - Response](http://expressjs.com/en/4x/api.html#res)

## Slides

* [Introduction to Express](https://docs.google.com/a/galvanize.com/presentation/d/1HhAUwBwn0PhzqcYy77OcVyVsnOsNcL5Ffd8a28WO780/edit?usp=sharing)
