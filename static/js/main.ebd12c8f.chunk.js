(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{19:function(t,e,n){t.exports=n(24)},24:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(17),u=n.n(a),i=n(15),o=n(32),s=n(33),b=n(28),p=n(27),l=n(29),f=n(30),O=n(18),j=n(31);function m(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],a=e[1],u=Object(c.useState)("stop"),m=Object(i.a)(u,2),E=m[0],k=m[1],S=Object(c.useRef)();Object(c.useEffect)((function(){var t=new o.a;Object(s.a)(1e3).pipe(Object(p.a)(t)).subscribe((function(){return"start"===E&&a((function(t){return t+1e3}))}));var e=Object(b.a)(S.current,"click"),n=e.pipe(Object(l.a)(300));return e.pipe(Object(f.a)(n),Object(O.a)((function(t){return t.length})),Object(j.a)((function(t){return 2===t}))).subscribe({next:function(){k("wait")}}),function(){return t.next()}}),[E]);return r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement("p",null,new Date(n).toISOString().slice(11,19)),r.a.createElement("button",{onClick:function(){k("start")}},"Start"),r.a.createElement("button",{onClick:function(){k("stop"),a(0)}},"Stop"),r.a.createElement("button",{onClick:function(){a(0),k((function(t){return"wait"===t?"start":t}))}},"Reset"),r.a.createElement("button",{ref:S},"Wait (x2-click)"))}u.a.render(r.a.createElement(m,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ebd12c8f.chunk.js.map