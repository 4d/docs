"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79187"],{94739:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/soap-get-info","title":"SOAP get info","description":"SOAP get info ( numInfo ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/soap-get-info","permalink":"/docs/pt/commands/soap-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-get-info","title":"SOAP get info","slug":"/commands/soap-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP DECLARATION","permalink":"/docs/pt/commands/soap-declaration"},"next":{"title":"SOAP REJECT NEW REQUESTS","permalink":"/docs/pt/commands/soap-reject-new-requests"}}'),s=t("785893"),r=t("250065");let d={id:"soap-get-info",title:"SOAP get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SOAP get info"})," ( ",(0,s.jsx)(n.em,{children:"numInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numInfo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero do tipo de informa\xe7\xe3o SOAP a conseguir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Informa\xe7\xe3o SOAP"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando SOAP get info permite recuperar na forma de cadeia de caracteres diferentes tipos de informa\xe7\xe3o relacionadas com uma peti\xe7\xe3o SOAP."}),"\n",(0,s.jsxs)(n.p,{children:["Quando processa uma peti\xe7\xe3o SOAP, pode ser \xfatil obter informa\xe7\xe3o adicional, que n\xe3o seja a dos valores dos par\xe2metros RPC, sobre a peti\xe7\xe3o. Por exemplo, por raz\xf5es de seguran\xe7a, pode utilizar este comando no ",(0,s.jsx)(n.em,{children:"M\xe9todo de banco On Web Aunthentication"})," para conhecer o nome do m\xe9todo Web service solicitado."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,s.jsx)(n.em,{children:"numInfo"})," o n\xfamero do tipo de informa\xe7\xe3o SOAP que deseja conhecer. Pode utilizar as seguintes constantes predefinidas, que ficam no tema ",(0,s.jsx)(n.em,{children:"Servi\xe7os Web (Servidor)"})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SOAP method name"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SOAP service name"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": Por raz\xf5es de seguran\xe7a, \xe9 poss\xedvel obter o tamanho m\xe1ximo das peti\xe7\xf5es de servi\xe7os web enviadas a 4D. Esta configura\xe7\xe3o \xe9 realizada utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/soap-send-fault",children:"SOAP SEND FAULT"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var o=t(667294);let s={},r=o.createContext(s);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);