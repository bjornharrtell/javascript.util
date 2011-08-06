/*
  javascript.util is a port of selected parts of java.util to JavaScript which
  main purpose is to ease porting Java code to JavaScript.

  Copyright (C) 2011 by Björn Harrtell

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
(function() {function b(){return function(){}}function c(a,j){var p=a.split("."),k=window;!(p[0]in k)&&k.execScript&&k.execScript("var "+p[0]);for(var q;p.length&&(q=p.shift());)!p.length&&j!==void 0?k[q]=j:k=k[q]?k[q]:k[q]={}}c("javascript.util.version","0.1.1");function d(a){this.message=a||""}c("javascript.util.OperationNotSupported",d);d.prototype=Error();d.prototype.name="OperationNotSupported";d.prototype.name=d.prototype.name;function e(a){this.message=a||""}
c("javascript.util.IndexOutOfBoundsException",e);e.prototype=Error();e.prototype.name="IndexOutOfBoundsException";e.prototype.name=e.prototype.name;function f(a){this.message=a||""}c("javascript.util.NoSuchElementException",f);f.prototype=Error();f.prototype.name="NoSuchElementException";f.prototype.name=f.prototype.name;function g(){}c("javascript.util.Iterator",g);g.prototype.d=b();g.prototype.hasNext=g.prototype.d;g.prototype.next=b();g.prototype.next=g.prototype.next;g.prototype.remove=b();
g.prototype.remove=g.prototype.remove;function h(){}c("javascript.util.Collection",h);h.prototype.add=b();h.prototype.add=h.prototype.add;h.prototype.e=b();h.prototype.isEmpty=h.prototype.e;h.prototype.f=b();h.prototype.iterator=h.prototype.f;h.prototype.size=b();h.prototype.size=h.prototype.size;function i(){}c("javascript.util.List",i);i.prototype=new h;i.prototype.get=b();i.prototype.get=i.prototype.get;function l(){this.a=[]}c("javascript.util.ArrayList",l);l.prototype=new i;l.prototype.a=null;
l.prototype.add=function(a){this.a.push(a);return!0};l.prototype.add=l.prototype.add;l.prototype.f=function(){return new m(this)};l.prototype.iterator=l.prototype.f;l.prototype.get=function(a){if(a<0||a>=this.size())throw new e;return this.a[a]};l.prototype.get=l.prototype.get;l.prototype.e=function(){return this.a.length===0};l.prototype.isEmpty=l.prototype.e;l.prototype.size=function(){return this.a.length};l.prototype.size=l.prototype.size;function m(a){this.b=a}l.Iterator=m;m.prototype.b=null;
m.prototype.position=0;m.prototype.next=function(){if(this.position===this.b.size())throw new f;return this.b.get(this.position++)};m.prototype.next=m.prototype.next;m.prototype.d=function(){return this.position<this.b.size()?!0:!1};m.prototype.hasNext=m.prototype.d;m.prototype.remove=function(){throw new d;};m.prototype.remove=m.prototype.remove;function n(){}c("javascript.util.Map",n);n.prototype.get=b();n.prototype.get=n.prototype.get;n.prototype.put=b();n.prototype.put=n.prototype.put;
n.prototype.size=b();n.prototype.size=n.prototype.size;n.prototype.c=b();n.prototype.values=n.prototype.c;function o(){this.object={}}c("javascript.util.HashMap",o);o.prototype.object=null;o.prototype.get=function(a){return this.object[a]||null};o.prototype.get=o.prototype.get;o.prototype.put=function(a,j){return this.object[a]=j};o.prototype.put=o.prototype.put;o.prototype.c=function(){var a=new l,j;for(j in this.object)this.object.hasOwnProperty(j)&&a.add(this.object[j]);return a};
o.prototype.values=o.prototype.c;o.prototype.size=function(){return this.c().size()};o.prototype.size=o.prototype.size;})();
