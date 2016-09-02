By now I'm sure that you have run into the dreaded message in your browser. Especially if you have an api deployed to a server like Heroku and a front end deployed to Firebase.

> ... is not allowed by Access-Control-Allow-Origin.

And your typical response may be to install a CORS plugin for Chrome that will then allow you to use your api.

However you may be left feeling that asking your users to install a plugin on Chrome just to use your web app is not the best way to go about things.

You would be correct.

But first lets go into why Chrome blocks your cross origin request in the first place.

## Web security model

All of the major web browsers have agreed to follow the Web Application Security Model outlined by the [w3c](www.w3.org) for [Same Origin Policy](http://www.w3.org/Security/wiki/Same_Origin_Policy).

What this means is that the browsers enforce the rules that the servers request. And if the browser doesn't set any rules, then the default behavior is to not allow scripts accross different domains.

### What does that mean for you?

Lets say that you have an api server at the address `random-name-4285.herokuapp.com` and an angular front end deployed to `random-name-2847.firebase.com`. When you run a $http request from the angular app to the api, you may end up with a Same Origin Policy error.

Lets take a look at this cross origin thing and what it means.

Cross origin is where the requesting dns name is not exactly the same as the target dns name.

`random-name-4285.herokuapp.com != random-name-2847.firebase.com`

This has a cross origin problem. In fact the cross origin is so strict that the following has a cross origin problem!

`http://random-name-4285.herokuapp.com != http://www.random-name-4285.herokuapp.com`

### Why did they do this?

It is easy to wonder why Chrome or any other browser is so strict in enforcing this Same Origin Policy. But the reason is that your code is not necessarily the only code that will run on the browser.

Remember that on your web app you will be using other libraries from github, or even advertisements. These libraries may have Ajax calls out to their own servers. Nefarious libraries may try to call your apis and mess with your api server.

What you want to be able to do is tell the browser what is allowed to make these calls to your api, and deny all of the other ones.

### What are the options?

**JSON-P**

You may have heard of JSON-P. What it does is wrap your JSON requested from the server into a callback function and then executes it with exec.

This is a glorious hack that somehow works, but only for GET requests. This will not save you from POSTs, PUTs, DELETEs, or any other HTTP verb.

In that way, JSON-P is flawed and should be avoided.

**CORS**

CORS stands for Cross Origin Resource Sharing. It is a standard for allowing browsers to request resources from apis on other domains. This is perfect for us, as this is exactly what we are looking for.

But how do we tell the browser that we want it to be allowed to access that api?

The answer is counterintuitive. The server will tell the browser who is allowed, and the browser then enforces those rules. This means that you, the programmer, must write some code in order to allow other origins.

For Node, that code comes in the form of middleware before the api routes.

```javascript
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

Lets go through this code one line at a time.

`res.header("Access-Control-Allow-Origin", "*");`

This is telling the browser that any other domain can access your api. You may want to change this from a '*' to the fully qualified domain name.

`res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");`

This is telling the browser what headers are allowed to be sent. If you want to add any additional headers, like a token header, you must add it here.

If you need to whitelist multiple domains, then you will need to make the middleware dynamic so that it will automatically choose what headers to send to the client.

### For more learning

* [A video about cors](https://www.youtube.com/watch?v=rlnhiwN8AnU)
* [Code snippets for use in servers](http://enable-cors.org/index.html)
* [Same origin policy](http://www.w3.org/Security/wiki/Same_Origin_Policy)
