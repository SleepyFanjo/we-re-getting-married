(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[9],{34:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(6),c=a(14),i=a(15);t.a=function(e){var t=e.to,a=e.icon,n=e.title,s=Object(r.h)().pathname===t,l=i.a.find((function(e){return e.path===t})),u=void 0;return l&&(u=function(){l.component.preload()}),o.a.createElement(c.b,{to:t,onMouseEnter:u,className:"Link ".concat(s?"selected":"")},o.a.createElement("i",{className:"material-icons"},a),o.a.createElement("b",{className:"Link--linkTitle"},n))}},35:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(36),c=a.n(r),i=a(34);t.a=function(e){var t=e.children,a=e.noFooter;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Header"},o.a.createElement("img",{alt:"Logo",src:c.a,className:"Header--logo"})),o.a.createElement("div",{className:"Header--padder"}),t,a?null:o.a.createElement("div",{className:"Footer"},o.a.createElement(i.a,{to:"/",icon:"assignment_turned_in",title:"Statut"}),o.a.createElement(i.a,{to:"/guest",icon:"sentiment_very_satisfied",title:"Invit\xe9s"}),o.a.createElement(i.a,{to:"/transport",icon:"directions_car",title:"Transport"}),o.a.createElement(i.a,{to:"/beds",icon:"hotel",title:"Sur Place"})))}},36:function(e,t,a){e.exports=a.p+"static/media/logo.75a7e9e1.svg"},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),c=a(9),i=a(6),s=a(16),l=a(10),u=function(){var e=Object(i.g)(),t=Object(n.useContext)(l.b),a=t.setJsonWebToken,r=t.setUser,u=Object(n.useState)(""),m=Object(c.a)(u,2),d=m[0],p=m[1],b=Object(n.useState)(""),f=Object(c.a)(b,2),g=f[0],E=f[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),j=v[0],N=v[1],O=Object(n.useState)(!1),k=Object(c.a)(O,2),L=k[0],S=k[1],y=Object(n.useCallback)((function(e){return p(e.target.value)}),[]),w=Object(n.useCallback)((function(e){return E(e.target.value)}),[]),C=function(t,n){S(!0),N(""),function(e,t){return fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))}(t,n).then((function(t){t.error?(N(t.error),S(!1)):(a(t.token),r(t.user),localStorage.setItem("jwtToken",t.token),e.push("/"))}))};return o.a.createElement("div",{className:"Login--container"},o.a.createElement("form",{className:"Login--input-container",onSubmit:function(e){e.preventDefault(),C(g,d)}},o.a.createElement("input",{className:"Login--input",name:"email",type:"email",value:g,onChange:w,placeholder:"exemple@domain.com"}),o.a.createElement("input",{className:"Login--input",name:"password",type:"password",value:d,onChange:y,placeholder:"Mot de passe"}),j&&o.a.createElement("div",{className:"Login--error"},j),L?o.a.createElement(s.a,{className:"Login--loader","aria-label":"Loading"}):o.a.createElement("button",{type:"submit",className:"Button Login--submit","aria-label":"Valider"},"Se connecter")))};t.default=function(){return o.a.createElement(r.a,{noFooter:!0},o.a.createElement(u,null))}}}]);
//# sourceMappingURL=9.a2eefae9.chunk.js.map