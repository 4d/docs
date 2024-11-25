"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46422"],{424262:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>t,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>i});var n=JSON.parse('{"id":"WebServer/errorPages","title":"P\xe1ginas de erro HTTP personalizadas","description":"4D Web Server permite que voc\xea personalize as p\xe1ginas de erro HTTP enviadas aos clientes, com base no c\xf3digo de status da resposta do servidor. As p\xe1ginas de erro referem-se a:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/WebServer/errorPages.md","sourceDirName":"WebServer","slug":"/WebServer/errorPages","permalink":"/docs/pt/19/WebServer/errorPages","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FerrorPages.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"errorPages","title":"P\xe1ginas de erro HTTP personalizadas"},"sidebar":"docs","previous":{"title":"Permitir m\xe9todos projeto","permalink":"/docs/pt/19/WebServer/allowProject"},"next":{"title":"Autentica\xe7\xe3o","permalink":"/docs/pt/19/WebServer/authentication"}}'),a=s("785893"),o=s("250065");let i={id:"errorPages",title:"P\xe1ginas de erro HTTP personalizadas"},t=void 0,d={},l=[{value:"Substituir p\xe1ginas predefinidas",id:"substituir-p\xe1ginas-predefinidas",level:2},{value:"Exemplo",id:"exemplo",level:2}];function p(e){let r={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"4D Web Server permite que voc\xea personalize as p\xe1ginas de erro HTTP enviadas aos clientes, com base no c\xf3digo de status da resposta do servidor. As p\xe1ginas de erro referem-se a:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"os c\xf3digos de estado que come\xe7am por 4 (erros do cliente), por exemplo, 404"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"os c\xf3digos de estado que come\xe7am por 5 (erros do servidor), por exemplo, 501."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Para obter uma descri\xe7\xe3o completa dos c\xf3digos de status de erro HTTP, consulte ",(0,a.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",children:"Lista de c\xf3digos de estado HTTP"})," (Wikipedia)."]}),"\n",(0,a.jsx)(r.h2,{id:"substituir-p\xe1ginas-predefinidas",children:"Substituir p\xe1ginas predefinidas"}),"\n",(0,a.jsx)(r.p,{children:"To replace default 4D Web Server error pages with your own pages you just need to:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"coloque p\xe1ginas HTML personalizadas no primeiro n\xedvel da pasta da Web do aplicativo,"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'nomeie as p\xe1ginas personalizadas "{statusCode}.html" (por exemplo, "404.html").'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:'You can define one error page per status code and/or a generic error page for a range of errors, named "{number}xx.html". Por exemplo, voc\xea pode criar "4xx.html" para erros gen\xe9ricos do cliente. The 4D Web Server will first look for a {statusCode}.html page then, if it does not exist, a generic page.'}),"\n",(0,a.jsx)(r.p,{children:"Por exemplo, quando uma resposta HTTP devolve um c\xf3digo de estado 404:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'O 4D Web Server tenta enviar uma p\xe1gina "404.html" localizada na pasta web do aplicativo.'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'Se n\xe3o for encontrado, o 4D Web Server tenta enviar uma p\xe1gina "4xx.html" localizada na pasta web do aplicativo.'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Se n\xe3o for encontrado, 4D Web Server usa sua p\xe1gina de erro padr\xe3o."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(r.p,{children:"Se definir as seguintes p\xe1ginas personalizadas na sua pasta Web:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{src:s(200525).Z+"",width:"166",height:"287"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'as p\xe1ginas "403.html" ou "404.html" ser\xe3o exibidas quando as respostas HTTP 403 ou 404 forem retornadas, respectivamente,'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'a p\xe1gina "4xx.html" ser\xe1 servida para qualquer outro status de erro 4xx (400, 401, etc.),'}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:'a p\xe1gina "5xx.html" ser\xe1 apresentada para qualquer estado de erro 5xx.'}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},200525:function(e,r,s){s.d(r,{Z:function(){return n}});let n=s.p+"assets/images/errorPage-bb5ef39d5d9367d15b40cab7157ad217.png"},250065:function(e,r,s){s.d(r,{Z:function(){return t},a:function(){return i}});var n=s(667294);let a={},o=n.createContext(a);function i(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);