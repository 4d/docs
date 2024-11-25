"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47394"],{628484:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>t,frontMatter:()=>o});var s=JSON.parse('{"id":"WebServer/errorPages","title":"P\xe1ginas de error HTTP personalizadas","description":"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/WebServer/errorPages.md","sourceDirName":"WebServer","slug":"/WebServer/errorPages","permalink":"/docs/es/19/WebServer/errorPages","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"errorPages","title":"P\xe1ginas de error HTTP personalizadas"},"sidebar":"docs","previous":{"title":"Permitir m\xe9todos proyecto","permalink":"/docs/es/19/WebServer/allowProject"},"next":{"title":"Autenticaci\xf3n","permalink":"/docs/es/19/WebServer/authentication"}}'),a=n("785893"),i=n("250065");let o={id:"errorPages",title:"P\xe1ginas de error HTTP personalizadas"},l=void 0,d={},t=[{value:"Reemplazo de las p\xe1ginas por defecto",id:"reemplazo-de-las-p\xe1ginas-por-defecto",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function p(e){let r={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"El servidor web de 4D le permite personalizar las p\xe1ginas de error HTTP enviadas a los clientes, bas\xe1ndose en el c\xf3digo de estado de la respuesta del servidor. Las p\xe1ginas de error se refieren a:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"los c\xf3digos de estado que empiezan por 4 (errores del cliente), por ejemplo 404"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"los c\xf3digos de estado que empiezan por 5 (errores del servidor), por ejemplo 501."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Para una descripci\xf3n completa de los c\xf3digos de estado de error HTTP, puede consultar la ",(0,a.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"lista de c\xf3digos de estado HTTP"})," (Wikipedia)."]}),"\n",(0,a.jsx)(r.h2,{id:"reemplazo-de-las-p\xe1ginas-por-defecto",children:"Reemplazo de las p\xe1ginas por defecto"}),"\n",(0,a.jsx)(r.p,{children:"Para reemplazar las p\xe1ginas de error predeterminadas de 4D Web Server por sus propias p\xe1ginas, s\xf3lo tiene que:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"poner las p\xe1ginas HTML personalizadas en el primer nivel de la carpeta web de la aplicaci\xf3n,"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'nombrar las p\xe1ginas personalizadas "{statusCode}.html" (por ejemplo, "404.html").'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:'Puede definir una p\xe1gina de error por c\xf3digo de estado y/o una p\xe1gina de error gen\xe9rica para un rango de errores, llamada "{number}xx.html". Por ejemplo, puede crear "4xx.html" para los errores gen\xe9ricos del cliente. El servidor Web 4D buscar\xe1 primero una p\xe1gina {statusCode}.html y luego, si no existe, una p\xe1gina gen\xe9rica.'}),"\n",(0,a.jsx)(r.p,{children:"Por ejemplo, cuando una respuesta HTTP devuelve un c\xf3digo de estado 404:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'Si no se encuentra, 4D Web Server intenta enviar una p\xe1gina "404.html" ubicada en la carpeta web de la aplicaci\xf3n.'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Si no se encuentra, 4D Web Server utiliza su p\xe1gina de error por defecto."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(r.p,{children:"Si define las siguientes p\xe1ginas personalizadas en su carpeta web:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:n(492993).Z+"",width:"166",height:"287"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'se servir\xe1n las p\xe1ginas "403.html" o "404.html" cuando se devuelvan respuestas HTTP 403 o 404 respectivamente,'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'la p\xe1gina "4xx.html" se servir\xe1 para cualquier otro estado de error 4xx (400, 401, etc.),'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'la p\xe1gina "5xx.html" se servir\xe1 para cualquier estado de error 5xx.'}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},492993:function(e,r,n){n.d(r,{Z:function(){return s}});let s=n.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var s=n(667294);let a={},i=s.createContext(a);function o(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);