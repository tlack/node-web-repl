Node Web REPL
=============

This app is currently very rough and not really usable

Add a web-based command line to your Node.js apps in a simple way. Use this
to debug your apps, alter behavior on the fly, review in-app data structures,
ruin everything, etc. Connect to your apps after they've been running for
months and see how they're doing.

We use Node.js, Express, HTTP auth via express.basicAuth middleware, and Hogan
for templating. jcubic-jquery.terminal is used for the type-in terminal code
on the client side. Your input is sent via Ajax to the /api endpoint, which 
eval()'s you code and spits back a string.

Demo
----

How to use:

    var webrepl = require('node-web-repl');
		// setup your app as normal
		webrepl.createServer({
			username: 'admin',
			password: 'blob1010',
			port: 11911,
			host: '127.0.0.1
		});

You'll (hopefully) now have a running web-based REPL on port 11911! See
test_app.js for a full example. (More examples coming soon.)

Architecture notes
------------------

Right now Node Web REPL creates its own Express instance, instead of plugging
in to your existing routes. Motivation:

* Your existing app (to which you are adding the REPL) may not use Express.
* Separating the port numbers makes it safer against scanning (possibly).
* I can't assume that your Express app is using the same view system that
  mine is.
* Eventually, we may stop using Express entirely. Our needs are simple.

The Future
----------

* Hook console.log so you can view your console output via a web browser
* UI/UX cleanup - make it look slightly less like garbage
* Visual data browser (scope out 'global' and descend from there)
* Profile on the fly
* View Node.js's memory usage
* Autocomplete
* MySQL console?
* Memcache console?

Author
------

Written by Thomas Lackner ([@tlack](http://twitter.com/tlack)) and sponsored
by [.CO](http://go.co)

