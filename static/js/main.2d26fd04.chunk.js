(this.webpackJsonptrivia=this.webpackJsonptrivia||[]).push([[0],{11:function(e,t,n){},39:function(e,t,n){e.exports=n(48)},44:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),c=n.n(o),l=(n(44),n(13)),i=n(14),u=n(18),s=n(17);var m=function(){return a.a.createElement("div",{className:"hero__container"},a.a.createElement("h1",{className:"hero__heading"},"TRIVIA"))},f=(n(11),function(e){var t=e.onClick,n=e.cat;return a.a.createElement("button",{className:"CategoryButton",onClick:function(e){return t(n)}},n)}),h=n(3),p=n.n(h),v=n(15),g=["Load Categories"],d=[];function y(){return w.apply(this,arguments)}function w(){return(w=Object(v.a)(p.a.mark((function e(){var t,n,r,a,o,c,l,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/test.csv");case 2:return t=e.sent,e.next=5,t.text();case 5:for(n=e.sent,r=n.split("\n"),a=r[0].split("\t"),o=1;o<r.length;o+=1){for(c=r[o].split("\t"),l={},i=0;i<c.length;i+=1)l[a[i].trim()]=c[i];d.push(l)}console.log(d),g=Array.from(new Set(d.map((function(e){return e.Category})))),console.log(g);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y();var E=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,e.category),a.a.createElement("p",null,e.question),a.a.createElement("p",null,e.answer))},k=(n(46),n(47),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={currentCategory:null},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=g.map((function(t){return a.a.createElement(f,{key:t,cat:t,onClick:function(t){return e.setState({currentCategory:t})}})}));return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement("div",null,t," "),a.a.createElement(E,{category:"category",question:"question",answer:"answer"}))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.2d26fd04.chunk.js.map