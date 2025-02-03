"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22865"],{766621:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/web-server-list","title":"WEB Server list","description":"WEB Server list : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/web-server-list.md","sourceDirName":"commands","slug":"/commands/web-server-list","permalink":"/docs/es/20-R7/commands/web-server-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fweb-server-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-server-list","title":"WEB Server list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Server","permalink":"/docs/es/20-R7/commands/web-server"},"next":{"title":"WEB SET HOME PAGE","permalink":"/docs/es/20-R7/commands/web-set-home-page"}}'),t=s("785893"),i=s("250065");let d={id:"web-server-list",title:"WEB Server list",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB Server list"})," : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Collection of the available Web Server objects"})]})})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R3"}),(0,t.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"WEB Server list"})," devuelve una colecci\xf3n de todos los objetos del servidor Web disponibles en la aplicaci\xf3n 4D ."]}),"\n",(0,t.jsx)(n.p,{children:"Queremos saber cu\xe1ntos servidores web en funcionamiento hay disponibles:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un servidor web para la base de datos del host (servidor web por defecto)"}),"\n",(0,t.jsx)(n.li,{children:"un servidor web para cada componente."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Todos los servidores Web disponibles son devueltos por el comando ",(0,t.jsx)(n.code,{children:"WEB Server list"}),", se est\xe9n ejecutando o no."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["El objeto servidor web por defecto es cargado autom\xe1ticamente por 4D al inicio. On the other hand, each component Web server that you want to use must be instantiated using the ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-server",children:(0,t.jsx)(n.code,{children:"WEB Server"})})," command."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Puede utilizar la propiedad ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#name",children:".name"})," del objeto servidor Web para identificar el proyecto o el componente al que est\xe1 adjunto cada objeto servidor Web de la lista."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Queremos saber cu\xe1ntos servidores web en funcionamiento hay disponibles:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $wSList : Collection\n var $vRun : Integer\n\n $wSList:=WEB Server list\n $vRun:=$wSList.countValues(True;"isRunning")\n ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-server",children:"Servidor WEB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/API/WebServerClass#stop",children:"webServer.stop()"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1716"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;amp;check;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);