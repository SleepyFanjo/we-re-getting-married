(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[4],{34:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(6),o=n(14),i=n(15);t.a=function(e){var t=e.to,n=e.icon,a=e.title,l=Object(c.h)().pathname===t,s=i.a.find((function(e){return e.path===t})),u=void 0;return s&&(u=function(){s.component.preload()}),r.a.createElement(o.b,{to:t,onMouseEnter:u,className:"Link ".concat(l?"selected":"")},r.a.createElement("i",{className:"material-icons"},n),r.a.createElement("b",{className:"Link--linkTitle"},a))}},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(36),o=n.n(c),i=n(34);t.a=function(e){var t=e.children,n=e.noFooter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Header"},r.a.createElement("img",{alt:"Logo",src:o.a,className:"Header--logo"})),r.a.createElement("div",{className:"Header--padder"}),t,n?null:r.a.createElement("div",{className:"Footer"},r.a.createElement(i.a,{to:"/",icon:"assignment_turned_in",title:"Statut"}),r.a.createElement(i.a,{to:"/guest",icon:"sentiment_very_satisfied",title:"Invit\xe9s"}),r.a.createElement(i.a,{to:"/transport",icon:"directions_car",title:"Transport"}),r.a.createElement(i.a,{to:"/beds",icon:"hotel",title:"Sur Place"})))}},36:function(e,t,n){e.exports=n.p+"static/media/logo.75a7e9e1.svg"},37:function(e,t,n){"use strict";var a=n(9),r=n(0),c=n(6),o=n(10);t.a=function(){var e=Object(r.useContext)(o.b),t=e.jsonWebToken,n=e.user,i=e.setUser,l=Object(c.g)(),s=Object(r.useState)(!1),u=Object(a.a)(s,2),m=u[0],p=u[1];return Object(r.useEffect)((function(){n||(p(!0),fetch("/users/me?jsonWebToken="+t).then((function(e){return e&&!e.redirected?e.json():e.redirected?(l.push(e.url),null):void 0})).then((function(e){e&&e.user?(i(e.user),p(!1)):e.redirected&&(window.location.href=e.url)})).catch())}),[t,n,i,l]),[n,m,function(e){i(e),fetch("/users/me/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonWebToken:t,user:e})})}]}},38:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(14),o=n(39),i=n.n(o);t.a=function(e){var t=e.target,n=e.label,a=e.onClick;return r.a.createElement(c.b,{to:t,onClick:a,className:"NextPageArrow__link"},r.a.createElement("span",null,n),r.a.createElement("img",{src:i.a,alt:"Arrow Icon"}))}},39:function(e,t,n){e.exports=n.p+"static/media/arrow.aeb9504d.svg"},40:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},43:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(40),c=n(0),o=n.n(c),i=n(35),l=n(16),s=n(38),u=n(37),m=function(e){var t=e.people,n=e.index,a=e.updatePeople,c=function(e){var c=e.target.value;a(Object(r.a)({},t,{attending:c}),n)};return o.a.createElement("div",{className:"Guest__peopleContainer"},o.a.createElement("div",null,t.name),o.a.createElement("div",{className:"Guest__peopleSelector"},o.a.createElement("div",{className:"Guest__peopleInput"},o.a.createElement("input",{type:"radio",id:t.name+"-oui",value:"oui",checked:"oui"===t.attending,name:t.name+"_attending",onChange:c}),o.a.createElement("label",{htmlFor:t.name+"-oui"},"Vient")),o.a.createElement("div",{className:"Guest__peopleInput"},o.a.createElement("input",{type:"radio",id:t.name+"-non",value:"non",checked:"non"===t.attending,name:t.name+"_attending",onChange:c}),o.a.createElement("label",{htmlFor:t.name+"-non"},"Ne vient pas"))))};t.default=function(){var e=Object(u.a)(),t=Object(a.a)(e,3),n=t[0],c=t[1],p=t[2],d=function(e,t){p(Object(r.a)({},n,{peoples:n.peoples.map((function(n,a){return a===t?e:n}))}))};return o.a.createElement(i.a,null,o.a.createElement("div",{className:"Guest__intro"},o.a.createElement("div",{className:"Guest__intro--heading"},"Ici tu peux confirmer ou non la pr\xe9sence de chacun"),o.a.createElement("div",{className:"Guest__intro--content"},"Si tu ne sais pas encore pour tout le monde tu pourra revenir plus tard pour compl\xe9ter. ",o.a.createElement("br",null),"Si nous avons oubli\xe9 quelqu\u2019un n\u2019h\xe9sites pas \xe0 nous appeler ou faire un email.")),c?o.a.createElement("div",{className:"HomeEmpty"},o.a.createElement(l.a,null)):o.a.createElement("div",{className:"Guest__container"},n&&n.peoples.map((function(e,t){return o.a.createElement(m,{people:e,key:e._id,index:t,updatePeople:d})}))),o.a.createElement(s.a,{target:"/transport",label:"En bus, en voiture ?"}))}}}]);
//# sourceMappingURL=4.b126e47c.chunk.js.map