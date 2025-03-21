"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75730"],{430848:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/soap-get-info","title":"SOAP get info","description":"SOAP get info ( numInfo ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/soap-get-info","permalink":"/docs/es/20-R7/commands/soap-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-get-info","title":"SOAP get info","slug":"/commands/soap-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP DECLARATION","permalink":"/docs/es/20-R7/commands/soap-declaration"},"next":{"title":"SOAP REJECT NEW REQUESTS","permalink":"/docs/es/20-R7/commands/soap-reject-new-requests"}}'),r=s("785893"),i=s("250065");let d={id:"soap-get-info",title:"SOAP get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP get info"})," ( ",(0,r.jsx)(n.em,{children:"numInfo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numInfo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de tipo de informaci\xf3n SOAP a obtener"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Informaci\xf3n SOAP"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"SOAP get info"})," permite recuperar bajo la forma de cadena de caracteres diferentes tipos de informaci\xf3n relacionada con una petici\xf3n SOAP."]}),"\n",(0,r.jsxs)(n.p,{children:["Cuando procesa una petici\xf3n SOAP, puede ser \xfatil obtener informaci\xf3n adicional, diferente a los valores de los par\xe1metros RPC, sobre la petici\xf3n. Por ejemplo, por razones de seguridad, puede utilizar este comando en el ",(0,r.jsx)(n.em,{children:"M\xe9todo base On Web Authentication"})," para conocer el nombre del m\xe9todo Web service solicitado."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,r.jsx)(n.em,{children:"numInfo"})," el n\xfamero del tipo de informaci\xf3n SOAP que quiere conocer. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema ",(0,r.jsx)(n.em,{children:"Servicios Web (Servidor)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP method name"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Nombre del m\xe9todo ofrecido como servicio web a punto de ejecutarse"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP service name"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Nombre del servicio web al que pertenece el m\xe9todo"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," por razones de seguridad, es posible obtener el tama\xf1o m\xe1ximo de las peticiones de servicios web enviadas a 4D. Esta configuraci\xf3n se lleva a cabo utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (Tema \u201CDefinici\xf3n estructura\u201D)."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"784"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);