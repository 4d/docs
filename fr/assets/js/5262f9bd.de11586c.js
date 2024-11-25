"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13884"],{74862:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>l,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"WebServer/allowProject","title":"M\xe9thodes projet","description":"Les balises 4D telles que 4DEVAL, 4DTEXT, 4DHTML, etc. ainsi que l\'URL /4DACTION vous permettent de d\xe9clencher l\'ex\xe9cution de toute m\xe9thode projet d\'un projet 4D publi\xe9 sur le Web. For example, the request  causes the execution of the login project method, if it exists.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/WebServer/allowProject.md","sourceDirName":"WebServer","slug":"/WebServer/allowProject","permalink":"/docs/fr/19/WebServer/allowProject","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"allowProject","title":"M\xe9thodes projet"},"sidebar":"docs","previous":{"title":"Traitement des requ\xeates HTTP","permalink":"/docs/fr/19/WebServer/httpRequests"},"next":{"title":"Pages d\'erreur HTTP personnalis\xe9es","permalink":"/docs/fr/19/WebServer/errorPages"}}'),s=n("785893"),o=n("250065");let i={id:"allowProject",title:"M\xe9thodes projet"},c=void 0,l={},d=[];function u(e){let t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Les balises 4D telles que ",(0,s.jsx)(t.code,{children:"4DEVAL"}),", ",(0,s.jsx)(t.code,{children:"4DTEXT"}),", ",(0,s.jsx)(t.code,{children:"4DHTML"}),", etc. ainsi que l'",(0,s.jsx)(t.a,{href:"/docs/fr/19/WebServer/httpRequests#/4daction",children:(0,s.jsx)(t.code,{children:"URL /4DACTION"})})," vous permettent de d\xe9clencher l'ex\xe9cution de toute m\xe9thode projet d'un projet 4D publi\xe9 sur le Web. For example, the request ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," causes the execution of the ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"login"})})," project method, if it exists."]}),"\n",(0,s.jsx)(t.p,{children:"Ce m\xe9canisme pr\xe9sente donc un risque de s\xe9curit\xe9 pour l'application, notamment si un internaute d\xe9clenche intentionnellement (ou non) une m\xe9thode non destin\xe9e \xe0 \xeatre ex\xe9cut\xe9e via le web. Vous pouvez \xe9viter ce risque comme suit :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Filtrez les m\xe9thodes appel\xe9es via les URL \xe0 l'aide de la m\xe9thode base ",(0,s.jsx)(t.a,{href:"/docs/fr/19/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(t.code,{children:"On Web Authentication"})}),". Inconv\xe9nients : si le projet comprend un grand nombre de m\xe9thodes, ce syst\xe8me peut \xeatre difficile \xe0 g\xe9rer."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Utilisez l'option ",(0,s.jsx)(t.strong,{children:"Available through 4D tags and URLs (4DACTION...)"})," de la bo\xeete de dialogue Propri\xe9t\xe9s de la m\xe9thode :"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(915290).Z+"",width:"577",height:"575"})}),"\n",(0,s.jsxs)(t.p,{children:["This option is used to individually designate each project method that can be called using the ",(0,s.jsx)(t.code,{children:"4DACTION"})," special URL, or the ",(0,s.jsx)(t.code,{children:"4DTEXT"}),", ",(0,s.jsx)(t.code,{children:"4DHTML"}),", ",(0,s.jsx)(t.code,{children:"4DEVAL"}),", ",(0,s.jsx)(t.code,{children:"4DSCRIPT"}),", ",(0,s.jsx)(t.code,{children:"4DIF"}),", ",(0,s.jsx)(t.code,{children:"4DELSEIF"})," or ",(0,s.jsx)(t.code,{children:"4DLOOP"})," tags. Lorsqu'elle n'est pas coch\xe9e, la m\xe9thode projet concern\xe9e ne peut pas \xeatre directement ex\xe9cut\xe9e via une requ\xeate HTTP. Cependant, elle peut toujours \xeatre ex\xe9cut\xe9e en utilisant d'autres types d'appels (formules, autres m\xe9thodes, etc.)."]}),"\n",(0,s.jsxs)(t.p,{children:["Cette option n'est pas coch\xe9e par d\xe9faut. Methods that can be executed through ",(0,s.jsx)(t.code,{children:"4DACTION"})," or specific tags must be specifically indicated."]}),"\n",(0,s.jsx)(t.p,{children:"Dans l'Explorateur, les m\xe9thodes projet avec cette propri\xe9t\xe9 b\xe9n\xe9ficient d'une ic\xf4ne sp\xe9cifique :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(418692).Z+"",width:"54",height:"48"})})]})}function a(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},418692:function(e,t,n){n.d(t,{Z:function(){return r}});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},915290:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);