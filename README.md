Node Web REPL
=============

This app is currently very rough and not really usable

Add a web-based command prompt to your Node apps in a simple way. Use this
to debug your apps, alter behavior on the fly, review in-app data structures,
ruin everything, etc.

How to use:

    XXX TODO

Right now Node Web REPL creates its own Express instance, instead of plugging
in to your existing routes. Motivation:

* Your existing app (to which you are adding the REPL) may not use Express.
* Separating the port numbers makes it safer against scanning.
* I can't assume that your Express app is using the same view system that
  mine is.
* Eventually, we may stop using Express entirely.

Author
------

Written by Thomas Lackner ([@tlack](http://twitter.com/tlack)) and sponsored
by [.CO](http://go.co)

