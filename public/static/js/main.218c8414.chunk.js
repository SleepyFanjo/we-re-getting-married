(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(9),r=n(0),c=n.n(r),o=c.a.createContext(null),l=function(e){var t=e.children,n=Object(r.useState)(localStorage.getItem("jwtToken")),l=Object(a.a)(n,2),u=l[0],i=l[1],s=Object(r.useState)(null),p=Object(a.a)(s,2),m=p[0],d=p[1];return c.a.createElement(o.Provider,{value:{jsonWebToken:u,setJsonWebToken:function(e){i(e),d(null)},user:m,setUser:d}},t)};t.b=o},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n(8),r=n(0),c=n.n(r),o=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return c.a.createElement("div",Object.assign({className:"Loader ".concat(t||"")},n),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},l=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return c.a.createElement("div",Object.assign({className:"StyledLoader ".concat(t||"")},n))}},16:function(e,t,n){"use strict";var a=n(0),r=function(e){var t=Object(a.lazy)(e);return t.preload=e,t},c=r((function(){return n.e(6).then(n.bind(null,40))})),o=r((function(){return n.e(4).then(n.bind(null,41))})),l=r((function(){return n.e(3).then(n.bind(null,42))})),u=r((function(){return n.e(5).then(n.bind(null,43))})),i=r((function(){return n.e(8).then(n.bind(null,46))})),s=r((function(){return n.e(10).then(n.bind(null,44))})),p=[{path:"/",exact:!0,component:c,private:!0},{path:"/guest",exact:!0,component:o,private:!0},{path:"/transport",exact:!0,component:u,private:!0},{path:"/beds",exact:!0,component:l,private:!0},{path:"/login",exact:!1,component:r((function(){return n.e(7).then(n.bind(null,47))})),private:!1},{path:"/logout",exact:!1,component:r((function(){return n.e(9).then(n.bind(null,45))})),private:!1},{path:"/register",exact:!1,component:i,private:!1},{path:"/registered",exact:!1,component:s,private:!1}];t.a=p},22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=(n(27),n(8)),u=n(6),i=n(14),s=n(15),p=n(10),m=n(16),d=function(e){var t=e.children,n=Object(l.a)(e,["children"]),c=Object(a.useContext)(p.b).jsonWebToken;return r.a.createElement(u.b,n,c?t:r.a.createElement(u.a,{to:"/login"}))},b=function(){return r.a.createElement(p.a,null,r.a.createElement(i.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(s.b,null)},r.a.createElement(u.d,null,m.a.map((function(e){var t=e.private?d:u.b;return r.a.createElement(t,{key:e.path,exact:e.exact,path:e.path,component:e.component})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("react-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.218c8414.chunk.js.map