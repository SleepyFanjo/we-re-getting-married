(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[8],{34:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(35),i=a.n(o),l=a(6),c=a(14),s=a(16),u=function(e){var t=e.to,a=e.icon,n=e.title,o=Object(l.h)().pathname===t,i=s.a.find((function(e){return e.path===t})),u=void 0;return i&&(u=function(){i.component.preload()}),r.a.createElement(c.b,{to:t,onMouseEnter:u,className:"Footer--link ".concat(o?"selected":"")},r.a.createElement("i",{className:"material-icons"},a),r.a.createElement("b",{className:"Footer--linkTitle"},n))};t.a=function(e){var t=e.children,a=e.noFooter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement("img",{alt:"Logo",src:i.a,className:"Header--logo"})),r.a.createElement("div",{className:"Header--padder"}),t,a?null:r.a.createElement("div",{className:"Footer"},r.a.createElement(u,{to:"/",icon:"assignment_turned_in",title:"Statut"}),r.a.createElement(u,{to:"/guest",icon:"sentiment_very_satisfied",title:"Invit\xe9s"}),r.a.createElement(u,{to:"/transport",icon:"directions_car",title:"Transport"}),r.a.createElement(u,{to:"/beds",icon:"hotel",title:"Sur Place"})))}},35:function(e,t,a){e.exports=a.p+"static/media/logo.75a7e9e1.svg"},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),i=a(9),l=a(6),c=a(15),s=function(){var e=Object(l.g)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],s=a[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),p=m[0],d=m[1],b=Object(n.useState)(""),E=Object(i.a)(b,2),f=E[0],g=E[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),N=h[0],j=h[1],O=Object(n.useCallback)((function(e){return s(e.target.value)}),[]),S=Object(n.useCallback)((function(e){return d(e.target.value)}),[]),y=function(t,a){t&&a?(j(!0),g(""),function(e,t){return fetch("/users/temporary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:e})}).then((function(e){return e.json()}))}(t,a).then((function(t){t.error?g(t.error):e.push("/registered"),j(!1)}))):g("Nous avons besoin de ton nom et de ton email pour planifier notre soir\xe9e")};return r.a.createElement("form",{className:"Register--input-container",onSubmit:function(e){e.preventDefault(),y(o,p)}},r.a.createElement("input",{className:"Register--input",name:"name",type:"text",value:p,onChange:S,placeholder:"Ton nom"}),r.a.createElement("input",{className:"Register--input",name:"email",type:"email",value:o,onChange:O,placeholder:"exemple@domaine.com"}),f&&r.a.createElement("div",{className:"Register--error"},f),N?r.a.createElement(c.a,{className:"Register--loader","aria-label":"Loading"}):r.a.createElement("button",{type:"submit",className:"Button Register--submit","aria-label":"Valider"},"Je viens !"))};t.default=function(){return r.a.createElement(o.a,{noFooter:!0},r.a.createElement("div",{className:"Register--container"},r.a.createElement("p",null,"Ah ! En voila une bonne nouvelle !",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Laisse nous ton nom et ton email pour que nous puissions te cr\xe9er un compte sur le site.",r.a.createElement("br",null),"Il te permettra de nous confirmer ta venue ainsi que celle de ton entourage, r\xe9server ta chambre au ch\xe2teau et nous indiquer si tu as un r\xe9gime particulier."),r.a.createElement(s,null)))}}}]);
//# sourceMappingURL=8.002a409f.chunk.js.map