/*

 |       __ _____                     ________                              __
 |      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 |  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 | /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 | \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 |           \/              /____/                              version 0.4.15
 http://terminal.jcubic.pl

 Licensed under GNU LGPL Version 3 license
 Copyright (c) 2011 Jakub Jankiewicz <http://jcubic.pl>

 Includes:

 Storage plugin Distributed under the MIT License
 Copyright (c) 2010 Dave Schindler

 LiveQuery plugin Dual MIT and GPL
 Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)

 jQuery Timers licenced with the WTFPL
 <http://jquery.offput.ca/every/>

 Date: Wed, 02 May 2012 10:41:10 +0000
*/
Array.prototype.has=function(j){for(var B=this.length;B--;)if(this[B]==j)return true;return false};function get_stack(j){return j?[j.toString().match(/.*\n.*\n/)].concat(get_stack(j.caller)):[]}
(((j, B) => {
 function ga(c,e){var f;if(typeof c==="string"&&typeof e==="string"){localStorage[c]=e;return true}else if(typeof c==="object"&&typeof e==="undefined"){for(f in c)if(c.hasOwnProperty(f))localStorage[f]=c[f];return true}return false}function ba(c,e){
  var f;
  var h;
  f=new Date;f.setTime(f.getTime()+31536E6);f="; expires="+f.toGMTString();if(typeof c==="string"&&typeof e==="string"){document.cookie=c+"="+e+f+"; path=/";return true}else if(typeof c==="object"&&typeof e==="undefined"){for(h in c)if(c.hasOwnProperty(h))document.cookie=
  h+"="+c[h]+f+"; path=/";return true}return false
 }function ha(c){return localStorage[c]}function ia(c){
  var e;
  var f;
  var h;
  c+="=";e=document.cookie.split(";");for(f=0;f<e.length;f++){for(h=e[f];h.charAt(0)===" ";)h=h.substring(1,h.length);if(h.indexOf(c)===0)return h.substring(c.length,h.length)}return null
 }function ja(c){return delete localStorage[c]}function ka(c){return ba(c,"",-1)}function Z(c,e){
  var f=[];
  var h=c.length;
  if(h<e)return[c];for(var g=0;g<h;g+=e)f.push(c.substring(g,g+e));return f
 }function F(c){if(typeof c==
 "string"){c=c.replace(/&(?!#[0-9]+;|[a-zA-Z]+;)/g,"&amp;");c=c.replace(/</g,"&lt;").replace(/>/g,"&gt;");c=c.replace(/\n/g,"<br/>");c=c.replace(/ /g,"&nbsp;");c=c.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");var e=c.split(la);if(e.length>1)c=j.map(e,f => f===""?f:f[0]=="["?f.replace($,(h, g, y, x, C) => {if(C==="")return"<span>&nbsp;</span>";h="";if(g.indexOf("b")!=-1)h+="font-weight:bold;";var M="text-decoration:";if(g.indexOf("u")!=-1)M+="underline ";if(g.indexOf("s")!=-1)M+="line-through";
 if(g.indexOf("s")!=-1||g.indexOf("u")!=-1)h+=M+";";if(g.indexOf("i")!=-1)h+="font-style:italic; ";if(y.match(ca))h+="color:"+y+";";if(x.match(ca))h+="background-color:"+x;return c='<span style="'+h+'">'+C+"</span>"}):"<span>"+f+"</span>").join("");return c}else return""}function da(c){
  var e=c instanceof Array?c:c?[c]:[];
  var f=0;
  j.extend(this,{left() {if(f===0)f=e.length-1;else--f;return e[f]},right() {if(f==e.length-1)f=0;else++f;return e[f]},current() {return e[f]},data() {return e},
  length() {return e.length},reset() {f=0},append(h) {e.push(h);this.reset()}})
 }function ma(c){var e=c?[c]:[];j.extend(this,{size() {return e.length},pop() {if(e.length===0)return null;else{var f=e[e.length-1];e=e.slice(0,e.length-1);return f}},push(f) {e=e.concat([f]);return f},top() {return e.length>0?e[e.length-1]:null}})}function na(c){
  var e=true;if(typeof c==="string"&&c!=="")c+="_";
  var f=j.Storage.get(c+"commands");

  var h=new da(f?eval("("+f+
  ")"):[""]);

  j.extend(this,{append(g) {if(e&&h.current()!=g){h.append(g);j.Storage.set(c+"commands",j.json_stringify(h.data()))}},data() {return h.data()},next() {return h.right()},last() {h.reset()},previous() {return h.left()},clear() {h=new da;j.Storage.remove(c+"commands")},enable() {e=true},disable() {e=false}})
 }var W=typeof window.localStorage!=="undefined";j.extend({Storage:{set:W?ga:ba,get:W?ha:ia,remove:W?ja:ka}});jQuery.fn.extend({everyTime(c, e, f, h, g) {return this.each(function(){jQuery.timer.add(this,c,e,f,h,g)})},oneTime(c, e, f) {return this.each(function(){jQuery.timer.add(this,c,e,f,1)})},stopTime(c, e) {return this.each(function(){jQuery.timer.remove(this,c,e)})}});jQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1E3,das:1E4,hs:1E5,ks:1E6},timeParse(c) {if(c==B||c===null)return null;var e=this.regex.exec(jQuery.trim(c.toString()));return e[2]?parseInt(e[1],10)*(this.powers[e[2]]||
 1):c},add(c, e, f, h, g, y) {var x=0;if(jQuery.isFunction(f)){g||(g=h);h=f;f=e}e=jQuery.timer.timeParse(e);if(!(typeof e!="number"||isNaN(e)||e<=0)){if(g&&g.constructor!=Number){y=!!g;g=0}g=g||0;y=y||false;if(!c.$timers)c.$timers={};c.$timers[f]||(c.$timers[f]={});h.$timerID=h.$timerID||this.guid++;var C=function(){if(!(y&&this.inProgress)){this.inProgress=true;if(++x>g&&g!==0||h.call(c,x)===false)jQuery.timer.remove(c,f,h);this.inProgress=false}};C.$timerID=h.$timerID;c.$timers[f][h.$timerID]||
 (c.$timers[f][h.$timerID]=window.setInterval(C,e));this.global[f]||(this.global[f]=[]);this.global[f].push(c)}},remove(c, e, f) {
  var h=c.$timers;
  var g;
  if(h){if(e){if(h[e]){if(f){if(f.$timerID){window.clearInterval(h[e][f.$timerID]);delete h[e][f.$timerID]}}else for(f in h[e]){window.clearInterval(h[e][f]);delete h[e][f]}for(g in h[e])break;if(!g){g=null;delete h[e]}}}else for(e in h)this.remove(c,e,f);for(g in h)break;if(!g)c.$timers=null}
 }}});if(jQuery.browser.msie)jQuery(window).one("unload",
 () => {
  var c=jQuery.timer.global;
  var e;
  for(e in c)for(var f=c[e],h=f.length;--h;)jQuery.timer.remove(f[h],e)
 });
 var la=/(\[\[[bius]*;[^;]*;[^\]]*\][^\]\[]*\])/g;
 var $=/\[\[([bius]*);([^;]*);([^\]]*)\]([^\]\[]*)\]/g;
 var ca=/#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/;
 j.json_stringify=(c, e) => {
  var f="";
  var h;
  e=e===B?1:e;switch(typeof c){case "function":f+=c;break;case "boolean":f+=c?"true":"false";break;case "object":if(c===null)f+="null";else if(c instanceof Array){f+="[";var g=c.length;for(h=0;h<g-1;++h)f+=j.json_stringify(c[h],
  e+1);f+=j.json_stringify(c[g-1],e+1)+"]"}else{f+="{";for(g in c)if(c.hasOwnProperty(g))f+='"'+g+'":'+j.json_stringify(c[g],e+1);f+="}"}break;case "string":g=c;var y={"\\\\":"\\\\",'"':'\\"',"/":"\\/","\\n":"\\n","\\r":"\\r","\\t":"\\t"};for(h in y)if(y.hasOwnProperty(h))g=g.replace(RegExp(h,"g"),y[h]);f+='"'+g+'"';break;case "number":f+=String(c)}f+=e>1?",":"";if(e==1)f=f.replace(/,([\]}])/g,"$1");return f.replace(/([\[{]),/g,"$1")
 };j.fn.cmd=function(c){
  function e(){N.toggleClass("inverted")}function f(d){var q=
  d.substring(0,x-C-1);d=d.substring(x-C-1);return[q].concat(Z(d,x))}function h(){y.focus();g.oneTime(1,() => {g.insert(y.val());y.blur().val("")})}var g=this;g.addClass("cmd");g.append('<span class="prompt"></span><span></span><span class="cursor">&nbsp;</span><span></span>');var y=j("<textarea/>").addClass("clipboard").appendTo(g);c.width&&g.width(c.width);
  var x;
  var C;
  var M=c.mask||false;
  var l="";
  var o=0;
  var J;
  var K=c.enabled;
  var X;
  var G;
  var N=g.find(".cursor");

  var b=(d => {function q(s,t){if(t==s.length){D.html(F(s));N.html("&nbsp;");
  I.html("")}else if(t===0){D.html("");N.html(F(s.slice(0,1)));I.html(F(s.slice(1)))}else{var p=F(s.slice(0,t));D.html(p);p=s.slice(t,t+1);N.html(p==" "?"&nbsp;":F(p));t==s.length-1?I.html(""):I.html(F(s.slice(t+1)))}}function L(s){return"<div>"+F(s)+"</div>"}function S(s){var t=I;j.each(s,(p, H) => {t=j(L(H)).insertAfter(t).addClass("clear")})}function m(s){j.each(s,(t, p) => {D.before(L(p))})}var D=N.prev(),I=N.next();return () => {var s=M?l.replace(/./g,"*"):l,t;d.find("div").remove();
  D.html("");if(s.length>x-C-1||s.match(/\n/)){var p,H=s.match(/\t/g),O=H?H.length*3:0;if(H)s=s.replace(/\t/g,"\u0000\u0000\u0000\u0000");if(s.match(/\n/)){var w=s.split("\n"),n=x-C-1;for(t=0;t<w.length-1;++t)w[t]+=" ";if(w[0].length>n){p=[w[0].substring(0,n)];p=p.concat(Z(w[0].substring(n),x))}else p=[w[0]];for(t=1;t<w.length;++t)if(w[t].length>x)p=p.concat(Z(w[t],x));else p.push(w[t])}else p=f(s);if(H)p=j.map(p,i => i.replace(/\x00\x00\x00\x00/g,"\t"));n=p[0].length;if(o<n){q(p[0],
  o);S(p.slice(1))}else if(o==n){D.before(L(p[0]));q(p[1],0);S(p.slice(2))}else{t=p.length;if(o<n){q(p[0],o);S(p.slice(1))}else if(o==n){D.before(L(p[0]));q(p[1],0);S(p.slice(2))}else{H=p.slice(-1)[0];w=s.length-o;var a=H.length;s=0;if(w<=a){m(p.slice(0,-1));q(H,(a==w?0:a-w)+O)}else if(t==3){D.before("<div>"+F(p[0])+"</div>");q(p[1],o-n-1);I.after('<div class="clear">'+F(p[2])+"</div>")}else{s=o;for(t=0;t<p.length;++t){O=p[t].length;if(s>O)s-=O;else break}O=p[t];n=t;if(s==O.length){s=0;O=p[++n]}q(O,
  s);m(p.slice(0,n));S(p.slice(n+1))}}}}else if(s===""){D.html("");N.html("&nbsp;");I.html("")}else q(s,o)};})(g);

  var P=(() => {var d=g.find(".prompt");return () => {if(typeof J=="string"){C=J.replace($,"$4").length;d.html(F(J))}else J(q => {C=q.replace($,"$4").length;d.html(F(q))})};})();
  j.extend(g,{name(d) {if(d!==B){X=d;G=new na(d)}else return X},history() {return G},set(d, q) {if(d!==B){l=d;if(!q)o=l.length;b();if(typeof c.onCommandChange=="function")c.onCommandChange(l)}},
  insert(d, q) {if(o==l.length)l+=d;else l=o===0?d+l:l.slice(0,o)+d+l.slice(o);q||(o+=d.length);b();if(typeof c.onCommandChange=="function")c.onCommandChange(l)},get() {return l},commands(d) {if(d)c.commands=d;else return d},destroy() {j(document.documentElement).unbind(".commandline");g.find(".prompt").remove()},prompt(d) {if(d===B)return J;else{if(typeof d=="string"||typeof d=="function")J=d;else throw"prompt must be a function or string";P();b()}},position(d) {if(typeof d==
  "number"){o=d<0?0:d>l.length?l.length:d;b()}else return o},show:(() => {var d=g.show;return () => {d.apply(g,[]);b();P()};})(),resize(d) {if(d)x=d;else{d=g.width();var q=N.innerWidth();x=Math.floor(d/q)}b()},enable() {if(!K){g.everyTime(500,"blink",e);K=true}},isenabled() {return K},disable() {if(K){g.stopTime("blink",e);g.find(".cursor").removeClass("inverted");K=false}},mask(d) {if(typeof d=="boolean"){M=d;b()}else return M}});g.name(c.name||"");J=c.prompt||
  "> ";P();if(c.enabled===B||c.enabled===true)g.enable();j(j.browser.msie?document.documentElement:window).keypress(d => {var q;if(d.ctrlKey&&d.which==99)return true;if(c.keypress)q=c.keypress(d);if(q===B||q){if(K)if([38,32,13,0,8].has(d.which)&&d.keyCode!=123&&!(d.which==38&&d.shiftKey))return false;else if(!d.ctrlKey&&!(d.altKey&&d.which==100)){g.insert(String.fromCharCode(d.which));return false}else d.altKey&&g.insert(String.fromCharCode(d.which))}else return q}).keydown(d => {if(K){if(c.keydown&&
  c.keydown(d)===false)return false;var q;if(d.altKey){if(d.which==68){g.set(l.slice(0,o)+l.slice(o).replace(/[^ ]+ |[^ ]+$/,""),true);return false}return true}else if(d.keyCode==13){if(G&&l&&(c.historyFilter&&c.historyFilter(l)||!c.historyFilter))G.data().slice(-1)[0]!=l&&G.append(l);G.last();d=l;g.set("");c.commands&&c.commands(d);typeof J=="function"&&P()}else if(d.which==32)g.insert(" ");else if(d.which==8){if(l!==""&&o>0){l=l.slice(0,o-1)+l.slice(o,l.length);--o;b()}}else if(d.which==9&&!(d.ctrlKey||
  d.altKey))g.insert("\t");else if(d.which==46){if(l!==""&&o<l.length){l=l.slice(0,o)+l.slice(o+1,l.length);b()}return true}else if(G&&d.which==38||d.which==80&&d.ctrlKey)g.set(G.previous());else if(G&&d.which==40||d.which==78&&d.ctrlKey)g.set(G.next());else if(d.which==37||d.which==66&&d.ctrlKey)if(d.ctrlKey&&d.which!=66){q=o-1;d=0;for(l[q]==" "&&--q;q>0;--q)if(l[q]==" "&&l[q+1]!=" "){d=q+1;break}else if(l[q]=="\n"&&l[q+1]!="\n"){d=q;break}g.position(d)}else{if(o>0){--o;b()}}else if(d.which==39||d.which==
  70&&d.ctrlKey)if(d.ctrlKey&&d.which!=70){l[o]==" "&&++o;d=l.slice(o).match(/\S[\n\s]{2,}|[\n\s]+\S?/);if(!d||d[0].match(/^\s+$/))o=l.length;else if(d[0][0]!=" ")o+=d.index+1;else{o+=d.index+d[0].length-1;d[0][d[0].length-1]!=" "&&--o}b()}else{if(o<l.length){++o;b()}}else if(d.which==123)return true;else if(d.which==36)g.position(0);else if(d.which==35)g.position(l.length);else if(d.ctrlKey||d.metaKey)if(d.shiftKey){if(d.which==84)return true}else if(d.which==65)g.position(0);else if(d.which==69)g.position(l.length);
  else if(d.which==88||d.which==67||d.which==87||d.which==84)return true;else if(d.which==86){h();return true}else if(d.which==75)if(o===0)g.set("");else o!=l.length&&g.set(l.slice(0,o));else if(d.which==85){g.set(l.slice(o,l.length));g.position(0)}else{if(d.which==17)return true}else return true;return false}});return g
 };j.jrpc=(c, e, f, h, g, y) => {e=j.json_stringify({jsonrpc:"2.0",method:f,params:h,id:e});return j.ajax({url:c,data:e,success:g,error:y,contentType:"application/json",dataType:"json",
 async:true,cache:false,type:"POST"})};W=/ {14}$/;

 var oa=[["jQuery Terminal","(c) 2011 jcubic"],["JQuery Terminal Emulator v. 0.4.15","Copyright (c) 2011 Jakub Jankiewicz <http://jcubic.pl>".replace(/ *<.*>/,"")],["JQuery Terminal Emulator version version 0.4.15","Copyright (c) 2011 Jakub Jankiewicz <http://jcubic.pl>"],["      _______                 ________                        __","     / / _  /_ ____________ _/__  ___/______________  _____  / /"," __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /",
 "/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__","\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/","         \\/          /____/                                   ".replace(W,"")+"version 0.4.15","Copyright (c) 2011 Jakub Jankiewicz <http://jcubic.pl>"],["      __ _____                     ________                              __","     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /"," __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /",
 "/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__","\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/","          \\/              /____/                                          ".replace(W,"")+"version 0.4.15","Copyright (c) 2011 Jakub Jankiewicz <http://jcubic.pl>"]];

 var pa=[];

 var Q=new (function(c) {var e=c?[c]:[],f=0;j.extend(this,{rotate() {if(e.length==1)return e[0];else{if(f==e.length-1)f=0;else++f;return e[f]}},length() {return e.length},
 set(h) {for(var g=e.length;g--;)if(e[g]===h){f=g;return}this.append(h)},front() {return e[f]},append(h) {e.push(h)}})});

 j.fn.terminal=function(c,e){
  function f(){return b.get(0).scrollHeight>b.innerHeight()}function h(){
   var a=b.find(".cursor").width();
   var i=Math.floor(b.width()/a);
   if(f()){var k=b.innerWidth()-b.width();i-=Math.ceil((20-k/2)/(a-1))}return i
  }function g(a,i){b.error("&#91;"+i+"&#93;: "+(typeof a=="string"?a:a.fileName+": "+a.message));b.pause();typeof a.fileName=="string"&&
  j.get(a.fileName,k => {b.resume();var u=a.lineNumber-1;(k=k.split("\n")[u])&&b.error("&#91;"+a.lineNumber+"&#93;: "+k)})}function y(a,i){try{if(typeof i=="function")i(() => {});else if(typeof i!="string")throw a+" must be string or function";}catch(k){g(k,a.toUpperCase());return false}return true}function x(){var a=b.prop?b.prop("scrollHeight"):b.attr("scrollHeight");b.scrollTop(a)}function C(a){
   a=typeof a=="string"?a:String(a);
   var i;
   var k;
   var u;
   if(a.length>L){
    i=L;k=a.split(/\n/g);u=/(\[\[[bius]*;[^;]*;[^\]]*\][^\]\[]*\]?)/g;
    var r=/(\[\[[bius]*;[^;]*;[^\]]*\])/;
    var z=/\[\[[bius]*;?[^;]*;?[^\]]*\]?$/;
    var v=false;
    var E=false;
    var A="";
    a=[];for(var V=0,qa=k.length;V<qa;++V){if(A!=="")if(k[V]===""){a.push(A+"]");continue}else{k[V]=A+k[V];A=""}else if(k[V]===""){a.push("");continue}for(var Y=k[V],ea=0,aa=0,T=0,fa=Y.length;T<fa;++T){if(Y[T]=="["&&Y[T+1]=="[")v=true;else if(v&&Y[T]=="]")if(E)E=v=false;else E=true;else if(v&&E||!v)++aa;if(aa==i||T==fa-1){var R=Y.substring(ea,T+1);if(A){R=A+R;if(R.match("]"))A=""}ea=T+1;aa=0;var U=R.match(u);
    if(U){U=U[U.length-1];if(U[U.length-1]!="]"){A=U.match(r)[1];R+="]"}else if(R.match(z)){R=R.replace(z,"");A=U.match(r)[1]}}a.push(R)}}}i=j("<div></div>");k=0;for(u=a.length;k<u;++k)a[k]===""||a[k]=="\r"?i.append("<div>&nbsp;</div>"):j("<div/>").html(F(a[k])).appendTo(i)
   }else i=j("<div/>").html(F(a));d.append(i);i.width("100%");x();return i
  }function M(a,i){
   var k=1;

   var u=(r, z) => {i.pause();j.jrpc(a,k++,r,z,v => {if(v.error)i.error("&#91;RPC&#93; "+v.error.message);else if(typeof v.result=="string")i.echo(v.result);
   else if(v.result instanceof Array)i.echo(v.result.join(" "));else if(typeof v.result=="object"){var E="",A;for(A in v.result)if(v.result.hasOwnProperty(A))E+=A+": "+v.result[A]+"\n";i.echo(E)}i.resume()},(v, E) => {i.error("&#91;AJAX&#93; "+E+" - Server reponse is: \n"+v.responseText);i.resume()})};

   return (r, z) => {if(r!==""){
    var v;
    var E;
    if(r.match(/[^ ]* /)){r=r.split(/ +/);v=r[0];E=r.slice(1)}else{v=r;E=[]}if(!m.login||v=="help")u(v,E);else{var A=z.token();A?u(v,[A].concat(E)):z.error("&#91;AUTH&#93; Access denied (no token)")}
   }};
  }
  function l(a){var i=n.prompt();if(n.mask())a=a.replace(/./g,"*");typeof i=="function"?i(k => {b.echo(k+a)}):b.echo(i+a)}function o(a){try{var i=w.top();if(a=="exit"&&m.exit)if(w.size()==1)if(m.login)K();else{l(a);b.echo("You can exit from main interpeter")}else b.pop("exit");else{l(a);a=="clear"&&m.clear?b.clear():i.eval(a,b)}}catch(k){g(k,"USER");b.resume();throw k;}}function J(){var a=null;n.prompt("login: ");m.history&&n.history().disable();n.commands(i => {try{l(i);if(a){n.mask(false);
  b.pause();if(typeof m.login!="function")throw"Value of login property must be a function";m.login(a,i,u => {if(u){var r=m.name;r=r?"_"+r:"";j.Storage.set("token"+r,u);j.Storage.set("login"+r,a);n.commands(o);G()}else{b.error("Wrong password try again");n.prompt("login: ");a=null}b.resume();m.history&&n.history().enable()})}else{a=i;n.prompt("password: ");n.mask(true)}}catch(k){g(k,"LOGIN",b);throw k;}})}function K(){var a=m.name;a=a?"_"+a:"";j.Storage.remove("token"+a,null);j.Storage.remove("login"+
  a,null);m.history&&n.history().disable();J()}function X(){
   var a=w.top();
   var i="";
   if(a.name!==B&&a.name!=="")i+=a.name+"_";i+=q;n.name(i);n.prompt(a.prompt);m.history&&n.history().enable();n.set("");if(typeof a.onStart=="function")a.onStart(b)
  }function G(){X();if(e.greetings===B)b.echo(b.signature);else e.greetings&&b.echo(e.greetings);if(typeof m.onInit=="function")m.onInit(b)}function N(a){b.oneTime(5,() => {if(s!=f()){b.resize();s=f()}});if(!b.paused()){if(m.keydown&&m.keydown(a,b)===false)return false;
  if(a.which!=9)I=0;if(a.which==68&&a.ctrlKey){if(n.get()==="")if(w.size()>1||m.login!==B)b.pop("");else{b.resume();b.echo("")}else b.set_command("");return false}else if(m.tabcompletion&&a.which==9){++I;a=n.get();if(!a.match(" ")){for(var i=RegExp("^"+a),k=w.top().command_list,u=[],r=k.length;r--;)i.test(k[r])&&u.push(k[r]);if(u.length==1)b.set_command(u[0]);else if(u.length>1)if(I>=2){l(a);b.echo(u.join("\t"));I=0}}return false}else if(a.which==86&&a.ctrlKey){b.oneTime(1,() => {x()});return true}else if(a.which==
  9&&a.ctrlKey){Q.length()>1&&b.focus(false);return false}else if(a.which==34)b.scroll(b.height());else if(a.which==33)b.scroll(-b.height());else if(a.which==82&&a.ctrlKey){if(!p){t=b.get_prompt();b.set_prompt("(reverse-i-search)`':");p=true}return false}else if(a.which==27){if(p){b.set_prompt(t);p=false}}else b.attr({scrollTop:b.attr("scrollHeight")})}}
  var b=this;
  var P=[];
  var d;
  var q=Q.length();
  var L;
  var S=[];

  var m={name:"",prompt:"> ",history:true,exit:true,clear:true,enabled:true,login:null,tabcompletion:false,historyFilter:null,
  onInit:null,onExit:null,keypress:null,keydown:null};

  if(e){e.width&&b.width(e.width);e.height&&b.height(e.height);j.extend(m,e)}var D=!m.enabled;if(b.length===0)throw'Sorry, but terminal said that "'+b.selector+'" is not valid selector!';b.ajaxSend((a, i) => {pa.push(i)});if(b.data("terminal"))return b.data("terminal");d=j("<div>").addClass("terminal-output").appendTo(b);b.addClass("terminal").append("<div/>");j.extend(b,{clear() {d.html("");n.set("");P=[];b.attr({scrollTop:0});return b},
  paused() {return D},pause() {if(n){b.disable();n.hide()}return b},resume() {if(n){b.enable();n.show();x()}return b},cols() {return L},rows() {return P.length},history() {return n.history()},next() {if(Q.length()==1)return b;else{
   var a=b.offset().top;b.height();b.scrollTop();
   var i=b;
   var k=j(window).scrollTop();
   var u=k+j(window).height();
   var r=j(i).offset().top;
   if(r+j(i).height()>=k&&r<=u){Q.front().disable();a=Q.rotate().enable();i=a.offset().top-50;j("html,body").animate({scrollTop:i},
   500);return a}else{b.enable();j("html,body").animate({scrollTop:a-50},500);return b}
  }},focus(a) {b.oneTime(1,() => {if(Q.length()==1)a===false?b.disable():b.enable();else if(a===false)b.next();else{Q.front().disable();Q.set(b);b.enable()}});return b},enable() {L===B&&b.resize();if(D)if(n){n.enable();D=false}return b},disable() {if(n){D=true;n.disable()}return b},enabled() {return D},signature() {var a=b.cols();a=a<15?null:a<35?0:a<55?1:a<64?2:a<75?3:4;return a!==
  null?oa[a].join("\n")+"\n":""},version() {return"0.4.15"},get_command() {return n.get()},insert(a) {n.insert(a);return b},set_prompt(a) {y("prompt",a)&&n.prompt(a);return b},get_prompt() {return n.prompt()},set_command(a) {n.set(a);return b},set_mask(a) {n.mask(a);return b},get_output() {return j.map(P,(a, i) => typeof i=="function"?i():i).get().join("\n");},resize(a, i) {if(a&&i){b.width(a);b.height(i)}L=h();n.resize(L);
  var k=d.detach();d.html("");j.each(P,(u, r) => {C(typeof r=="function"?r():r)});b.prepend(k);x();return b},echo(a) {P.push(a);return C(typeof a=="function"?a():a)},error(a) {b.echo("[[;#f00;]"+a.replace(/\[/g,"&#91;").replace(/\]/g,"&#93;")+"]")},scroll(a) {var i;if(b.prop){a>b.prop("scrollTop")&&a>0&&b.prop("scrollTop",0);i=b.prop("scrollTop");b.prop("scrollTop",i+a)}else{a>b.attr("scrollTop")&&a>0&&b.attr("scrollTop",0);i=b.attr("scrollTop");b.attr("scrollTop",i+a)}return b},
  logout:m.login?() => {for(;w.size()>1;)w.pop();K();return b}:() => {throw"You don't have login function";},token:m.login?() => {var a=m.name;return j.Storage.get("token"+(a?"_"+a:""))}:null,login_name:m.login?() => {var a=m.name;return j.Storage.get("login"+(a?"_"+a:""))}:null,name() {return m.name},push(a, i) {if(!i.prompt||y("prompt",i.prompt)){if(typeof a=="string")a=M(i.eval,b);w.push(j.extend({eval:a},i));X()}return b},pop(a) {a!==B&&l(a);if(w.top().name===
  m.name){if(m.login){K();if(typeof m.onExit=="function")m.onExit(b)}}else{a=w.pop();X();if(typeof a.onExit=="function")a.onExit(b)}return b}});
  var I=0;
  var s=f();
  var t;
  var p=false;
  var H;
  if(m.login&&typeof m.onBeforeLogin=="function")m.onBeforeLogin(b);if(c.constructor==String){H=c;c=M(c,b)}else if(c.constructor==Array)throw"You can't use array as eval";else if(typeof c=="object"){for(var O in c)S.push(O);c=function a(i){return k => {if(k!==""){
   k=k.split(/ +/);
   var u=k[0];
   var r=k.slice(1);
   k=i[u];var z=typeof k;if(z==
   "function")k.apply(b,r);else if(z=="object"||z=="string"){r=[];if(z=="object"){for(var v in k)r.push(v);k=a(k)}b.push(k,{prompt:u+"> ",name:u,command_list:r})}else b.error("Command '"+u+"' Not Found")
  }};}(c)}else if(typeof c!="function")throw'Unknow object "'+String(c)+'" passed as eval';if(H&&(typeof m.login=="string"||m.login))m.login=(a => {var i=1;return (k, u, r) => {b.pause();j.jrpc(H,i++,a,[k,u],z => {b.resume();!z.error&&z.result?r(z.result):r(null)},(z, v) => {b.resume();b.error("&#91;AJAX&#92; Response: "+
  v+"\n"+z.responseText)})};})(typeof m.login=="boolean"?"login":m.login);if(y("prompt",m.prompt)){
   var w=new ma({name:m.name,eval:c,prompt:m.prompt,command_list:S,greetings:m.greetings});
   var n=b.find(".terminal-output").next().cmd({prompt:m.prompt,history:m.history,historyFilter:m.historyFilter,width:"100%",keydown:N,keypress:m.keypress?a => m.keypress(a,b):null,onCommandChange(a) {if(typeof m.onCommandChange=="function")m.onCommandChange(a,b);x()},commands:o});
   Q.append(b);m.enabled===
   true?b.focus():b.disable();j(window).resize(b.resize);b.click(() => {b.focus()});b.token&&!b.token()&&b.login_name&&!b.login_name()?J():G();typeof j.fn.init.prototype.mousewheel==="function"&&b.mousewheel((a, i) => {i>0?b.scroll(-40):b.scroll(40);return false},true)
  }b.data("terminal",b);return b
 }
}))(jQuery);
