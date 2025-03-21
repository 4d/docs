"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86982"],{226416:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/http-parse-message","title":"HTTP Parse message","description":"HTTP Parse message ( data ObjectHTTP Parse message( data Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/http-parse-message.md","sourceDirName":"commands","slug":"/commands/http-parse-message","permalink":"/docs/es/20-R7/commands/http-parse-message","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fhttp-parse-message.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-parse-message","title":"HTTP Parse message","slug":"/commands/http-parse-message","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP GET OPTION","permalink":"/docs/es/20-R7/commands/http-get-option"},"next":{"title":"HTTP Request","permalink":"/docs/es/20-R7/commands/http-request"}}'),a=s("785893"),r=s("250065");let d={id:"http-parse-message",title:"HTTP Parse message",slug:"/commands/http-parse-message",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"HTTP Parse message"})," ( ",(0,a.jsx)(n.em,{children:"data"})," : Text ) : Object",(0,a.jsx)(n.br,{}),(0,a.jsx)(n.strong,{children:"HTTP Parse message"}),"( ",(0,a.jsx)(n.em,{children:"data"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metros"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"data"}),(0,a.jsx)(n.td,{children:"Text, Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Datos a analizar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Objeto, cada propiedad es parte de los datos de varias partes"})]})]})]}),"\n",(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Lanzamiento"}),(0,a.jsx)(n.th,{children:"Modificaciones"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"20 R4"}),(0,a.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"HTTP Parse message"}),' command parses a multipart/form-data text or blob (HTTP "response" message) and extracts the content to an object. Cada propiedad del objeto devuelto corresponde a una parte de los datos multiparte.']}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:['El propio HTTP es un protocolo de comunicaci\xf3n sin estado. En este marco, los clientes inician la comunicaci\xf3n enviando mensajes de "petici\xf3n" a los servidores, especificando detalles como el m\xe9todo, el objetivo, los encabezados, el contenido, etc. Los servidores, a su vez, responden con mensajes de "respuesta" que incluyen los mismos detalles. ',(0,a.jsx)(n.code,{children:"HTTP Parse message"}),' analiza el mensaje "request" o "response" en un objeto estructurado.']})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente ejemplo, analizamos los datos de un archivo de texto que contiene peticiones HTTP."}),"\n",(0,a.jsx)(n.p,{children:"Este es el contenido del archivo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"POST /batch/gmail/v1/ HTTP/1.1\nAccept-Encoding: gzip, deflate\nAuthorization: Bearer xxxxxx\nConnection: Close\nContent-Length: 442\nContent-Type: multipart/mixed; boundary=batch_19438756D576A14ABA87C112F56B9396; charset=UTF-8\nDate: Wed, 29 Nov 2023 13:51:35 GMT\nHost: gmail.googleapis.com\nUser-Agent: 4D/20.4.0\n\n\n--batch_19438756D576A14ABA87C112F56B9396\nContent-Type: application/http\nContent-ID: <item1>\n\nGET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58689824c92?format=raw HTTP/1.1\n\n\n--batch_19438756D576A14ABA87C112F56B9396\nContent-Type: application/http\nContent-ID: <item2>\n\nGET https://gmail.googleapis.com/gmail/v1/users/me/messages/18c1b58642b28e2b?format=raw HTTP/1.1\n\n--batch_19438756D576A14ABA87C112F56B9396--\n"})}),"\n",(0,a.jsx)(n.p,{children:"Para analizar el archivo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $message : Text:=File("/RESOURCES/HTTPrequest.txt").getText()\nvar $parsedMessage : Object:=HTTP Parse message($message)\n//$parsedMessage= {\n//headers:{"User-Agent":"4D/20.4.0",...},\n//parts:[{"contentType":"application/http","contentID":"item1",...}],\n//requestLine:"POST /batch/gmail/v1/ HTTP/1.1"\n//}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1824"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let a={},r=t.createContext(a);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);