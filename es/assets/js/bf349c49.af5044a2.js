"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44067"],{403959:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>d,assets:()=>a,toc:()=>t,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/base64-encode","title":"BASE64 ENCODE","description":"BASE64 ENCODE ( aCodificar {; codificado}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/base64-encode.md","sourceDirName":"commands-legacy","slug":"/commands/base64-encode","permalink":"/docs/es/commands/base64-encode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbase64-encode.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"base64-encode","title":"BASE64 ENCODE","slug":"/commands/base64-encode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 DECODE","permalink":"/docs/es/commands/base64-decode"},"next":{"title":"Choose","permalink":"/docs/es/commands/choose"}}'),i=s("785893"),c=s("250065");let o={id:"base64-encode",title:"BASE64 ENCODE",slug:"/commands/base64-encode",displayed_sidebar:"docs"},r=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"BASE64 ENCODE"})," ( ",(0,i.jsx)(n.em,{children:"aCodificar"})," {; ",(0,i.jsx)(n.em,{children:"codificado"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aCodificar"}),(0,i.jsx)(n.td,{children:"Blob, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor a codificar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valor codificado (si el par\xe1metro codificado se omite)"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"codificado"}),(0,i.jsx)(n.td,{children:"Blob, Text"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Varlor codificado"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Codificado en formato Base64URL"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"BASE64 ENCODE"})," encodes the text or blob value passed in the ",(0,i.jsx)(n.em,{children:"toEncode"})," parameter in Base64 or Base64URL format."]}),"\n",(0,i.jsxs)(n.p,{children:["La codificaci\xf3n base64 modifica los datos codificados sobre 8 bits de manera que no conserven m\xe1s de 7 bits \xfatiles. Esta codificaci\xf3n es necesaria, por ejemplo, para la manipulaci\xf3n de BLOBs utilizando XML. Base64URL es una codificaci\xf3n alernativa con un procesamiento espec\xedfico para las URLs y nombres de archivos (ver ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc4648#section-5",children:"rfc4648"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en ",(0,i.jsx)(n.em,{children:"aCodificar"})," un valor texto o blob a codificar."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," cuando se pasa un valor texto, el comando codifica la representaci\xf3n utf-8 del texto."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro ",(0,i.jsx)(n.em,{children:"codificado"}),", recibe los contenidos codificado de ",(0,i.jsx)(n.em,{children:"aCodificar"})," como texto o blob al final de la ejecuci\xf3n del comando. En este caso, el par\xe1metro ",(0,i.jsx)(n.em,{children:"aCodificar"})," mismo no es modificado por el comando."]}),"\n",(0,i.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"codificado"}),", el comando modifica directamente el par\xe1metro ",(0,i.jsx)(n.em,{children:"aCodificar"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", el comando utiliza una codificaci\xf3n Base64. Si pasa el par\xe1metro ",(0,i.jsx)(n.em,{children:"*"}),", el comando utiliza una codificaci\xf3n Base64URL."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/base64-decode",children:"BASE64 DECODE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/generate-digest",children:"Generate digest"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Presentaci\xf3n de los comandos XML DOM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/xml-decode",children:"XML DECODE"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"895"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var d=s(667294);let i={},c=d.createContext(i);function o(e){let n=d.useContext(c);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);