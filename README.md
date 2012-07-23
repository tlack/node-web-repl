Node Web REPL
=============

Add a web-based REPL to your Node apps in a simple way.

How to use:

    XXX TODO

Right now Node Web REPL creates its own Express instance, instead of plugging
in to your existing routes. Motivation:

* Your existing app (to which you are adding the REPL) may not use Express.
* Separating the port numbers makes it safer against scanning.
* I can't assume that your Express app is using the same view system that
  mine is.
* Eventually, we may stop using Express entirely.


