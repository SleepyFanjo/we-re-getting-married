(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[7],{34:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(6),s=n(14),l=n(15);t.a=function(e){var t=e.to,n=e.icon,a=e.title,o=Object(c.h)().pathname===t,i=l.a.find((function(e){return e.path===t})),u=void 0;return i&&(u=function(){i.component.preload()}),r.a.createElement(s.b,{to:t,onMouseEnter:u,className:"Link ".concat(o?"selected":"")},r.a.createElement("i",{className:"material-icons"},n),r.a.createElement("b",{className:"Link--linkTitle"},a))}},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(36),s=n.n(c),l=n(34);t.a=function(e){var t=e.children,n=e.noFooter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement("img",{alt:"Logo",src:s.a,className:"Header--logo"})),r.a.createElement("div",{className:"Header--padder"}),t,n?null:r.a.createElement("div",{className:"Footer"},r.a.createElement(l.a,{to:"/",icon:"assignment_turned_in",title:"Statut"}),r.a.createElement(l.a,{to:"/guest",icon:"sentiment_very_satisfied",title:"Invit\xe9s"}),r.a.createElement(l.a,{to:"/transport",icon:"directions_car",title:"Transport"}),r.a.createElement(l.a,{to:"/beds",icon:"hotel",title:"Sur Place"})))}},36:function(e,t,n){e.exports=n.p+"static/media/logo.75a7e9e1.svg"},37:function(e,t,n){"use strict";var a=n(9),r=n(0),c=n(6),s=n(10);t.a=function(){var e=Object(r.useContext)(s.b),t=e.jsonWebToken,n=e.user,l=e.setUser,o=Object(c.g)(),i=Object(r.useState)(!1),u=Object(a.a)(i,2),m=u[0],d=u[1];return Object(r.useEffect)((function(){n||(d(!0),fetch("/users/me?jsonWebToken="+t).then((function(e){return e&&!e.redirected?e.json():e.redirected?(o.push(e.url),null):void 0})).then((function(e){e&&e.user?(l(e.user),d(!1)):e.redirected&&(window.location.href=e.url)})).catch())}),[t,n,l,o]),[n,m,function(e){l(e),fetch("/users/me/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonWebToken:t,user:e})})}]}},42:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),c=n.n(r),s=n(35),l=n(34),o=n(16),i=n(14),u=n(37),m=function(){return c.a.createElement("div",{className:"HomeEmpty"},c.a.createElement("p",null,"Tu viens ? Avec qui ?",c.a.createElement("br",null),"Aide nous \xe0 organiser ce beau week-end ensemble"),c.a.createElement(i.b,{to:"/guest",className:"Button"},"Je viens !"))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Guest__intro"},c.a.createElement("div",{className:"Guest__intro--heading"},"Merci !"),c.a.createElement("div",{className:"Guest__intro--content"},"Tu peux \xe0 tout moment changer tes infos en utilisant le menu en bas de page. ",c.a.createElement("br",null),c.a.createElement("br",null),"Tu peux aussi consulter la Foire Aux Questions ici :",c.a.createElement(l.a,{to:"faq",icon:"help_outline"}))))};t.default=function(){var e=Object(u.a)(),t=Object(a.a)(e,2),n=t[0],r=t[1];return c.a.createElement(s.a,null,r||!n?c.a.createElement("div",{className:"HomeEmpty"},c.a.createElement(o.a,null)):n&&n.hasUpdatedInfos?c.a.createElement(d,null):c.a.createElement(m,null))}}}]);
//# sourceMappingURL=7.12cc7ea8.chunk.js.map