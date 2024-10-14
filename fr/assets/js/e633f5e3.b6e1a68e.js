"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52427],{357134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(474848),r=n(28453);const o={id:"allowProject",title:"M\xe9thodes projet"},i=void 0,l={id:"WebServer/allowProject",title:"M\xe9thodes projet",description:"Les balises 4D telles que 4DEVAL, 4DTEXT, 4DHTML... ainsi que l'URL /4DACTION vous permettent de d\xe9clencher l'ex\xe9cution de toute m\xe9thode projet d'un projet 4D publi\xe9 sur le Web. Par exemple, la requ\xeate http://www.server.com/4DACTION/login entra\xeene l'ex\xe9cution de la m\xe9thode projet **login**, si elle existe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/WebServer/allowProject.md",sourceDirName:"WebServer",slug:"/WebServer/allowProject",permalink:"/docs/fr/20-R5/WebServer/allowProject",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FallowProject.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"allowProject",title:"M\xe9thodes projet"},sidebar:"docs",previous:{title:"Traitement des requ\xeates HTTP",permalink:"/docs/fr/20-R5/WebServer/httpRequests"},next:{title:"Pages d'erreur HTTP personnalis\xe9es",permalink:"/docs/fr/20-R5/WebServer/errorPages"}},c={},d=[];function u(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Les balises 4D telles que ",(0,s.jsx)(t.code,{children:"4DEVAL"}),", ",(0,s.jsx)(t.code,{children:"4DTEXT"}),", ",(0,s.jsx)(t.code,{children:"4DHTML"}),"... ainsi que l'URL ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R5/WebServer/httpRequests#/4daction",children:(0,s.jsx)(t.code,{children:"/4DACTION"})})," vous permettent de d\xe9clencher l'ex\xe9cution de toute m\xe9thode projet d'un projet 4D publi\xe9 sur le Web. Par exemple, la requ\xeate ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://www.server.com/4DACTION/login",children:"http://www.server.com/4DACTION/login"})})," entra\xeene l'ex\xe9cution de la m\xe9thode projet ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"login"})}),", si elle existe."]}),"\n",(0,s.jsx)(t.p,{children:"Ce m\xe9canisme pr\xe9sente donc un risque de s\xe9curit\xe9 pour l'application, notamment si un internaute d\xe9clenche intentionnellement (ou non) une m\xe9thode non destin\xe9e \xe0 \xeatre ex\xe9cut\xe9e via le web. Vous pouvez \xe9viter ce risque comme suit :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Filtrez les m\xe9thodes appel\xe9es via les URL \xe0 l'aide de la m\xe9thode base ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R5/WebServer/authentication#on-web-authentication",children:(0,s.jsx)(t.code,{children:"On Web Authentication"})}),". Inconv\xe9nients : si le projet comprend un grand nombre de m\xe9thodes, ce syst\xe8me peut \xeatre difficile \xe0 g\xe9rer."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Utilisez l'option ",(0,s.jsx)(t.strong,{children:"Disponible via Balises HTML et URLs 4D (4DACTION...)"})," situ\xe9e dans la bo\xeete de dialogue des Propri\xe9t\xe9s de la m\xe9thode :"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(829953).A+"",width:"577",height:"575"})}),"\n",(0,s.jsxs)(t.p,{children:["Cette option est utilis\xe9e pour d\xe9signer individuellement chaque m\xe9thode projet qui peut \xeatre appel\xe9e en utilisant l'URL sp\xe9ciale ",(0,s.jsx)(t.code,{children:"4DACTION"}),", ou les balises ",(0,s.jsx)(t.code,{children:"4DTEXT"}),", ",(0,s.jsx)(t.code,{children:"4DHTML"}),", ",(0,s.jsx)(t.code,{children:"4DEVAL"}),", ",(0,s.jsx)(t.code,{children:"4DSCRIPT"}),", ",(0,s.jsx)(t.code,{children:"4DIF"}),", ",(0,s.jsx)(t.code,{children:"4DELSEIF"})," ou ",(0,s.jsx)(t.code,{children:"4DLOOP"}),". Lorsqu'elle n'est pas coch\xe9e, la m\xe9thode projet concern\xe9e ne peut pas \xeatre directement ex\xe9cut\xe9e via une requ\xeate HTTP. Cependant, elle peut toujours \xeatre ex\xe9cut\xe9e en utilisant d'autres types d'appels (formules, autres m\xe9thodes, etc.)."]}),"\n",(0,s.jsxs)(t.p,{children:["Cette option n'est pas coch\xe9e par d\xe9faut. Les m\xe9thodes qui peuvent \xeatre ex\xe9cut\xe9es via ",(0,s.jsx)(t.code,{children:"4DACTION"})," ou des balises sp\xe9cifiques doivent \xeatre sp\xe9cifiquement indiqu\xe9es."]}),"\n",(0,s.jsx)(t.p,{children:"Dans l'Explorateur, les m\xe9thodes projet avec cette propri\xe9t\xe9 b\xe9n\xe9ficient d'une ic\xf4ne sp\xe9cifique :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(798617).A+"",width:"54",height:"48"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},798617:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAIAAADVfh6XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVFhH7ZWxagJBEIbXIJcXyEsIVjYSEDshIQasLALBFxAvjaWVpU1O8gIiWFkEVFLYiY2NbV7CF4gQLr/OsmzQPQ3uRe9uPpZxZq8ZPmbWlO/74rK5kr8XDLdoA27RBqFs9PXTu8wO8TWoyMwMWxRi2iogFjM3iLPPFWKpPd982MIWzZBF8qc7I/T7mFgMsUXMH40ggC0lTL8/hmRbxP7SCgNMp1pz/f4Y4rXRpfs3xOlHncoA+F3cB/l7fHlGHL32EYNdpqpDRCedpjKAZFjU/emQy/LdN5UK13VlZo8kzaLneYhs8RCmdzHvdmX2m4XXkNlpRMDiH1rE/u6usCKXvVVHXlkiLhZrnQ7Ocr3GoVx++Beiv9EkLP9QplKxmIwRe80mIm+0DYsE/7uYCbaYcxwqFWzRzO5DqE9h2MTF4nmJgEVu0Qbcog24RRtwi6cjxA+unqf/blDP8gAAAABJRU5ErkJggg=="},829953:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/methodProperties-867b582c26764645149bb24d65d58006.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(296540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);