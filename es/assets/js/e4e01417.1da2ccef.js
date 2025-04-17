"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96485"],{923678:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","description":"SAX GET XML DOCUMENT VALUES ( documento ; codificacion ; version ; autonomo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sax-get-xml-document-values.md","sourceDirName":"commands-legacy","slug":"/commands/sax-get-xml-document-values","permalink":"/docs/es/20-R8/commands/sax-get-xml-document-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-get-xml-document-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sax-get-xml-document-values","title":"SAX GET XML DOCUMENT VALUES","slug":"/commands/sax-get-xml-document-values","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX GET XML COMMENT","permalink":"/docs/es/20-R8/commands/sax-get-xml-comment"},"next":{"title":"SAX GET XML ELEMENT","permalink":"/docs/es/20-R8/commands/sax-get-xml-element"}}'),d=s("785893"),o=s("250065");let r={id:"sax-get-xml-document-values",title:"SAX GET XML DOCUMENT VALUES",slug:"/commands/sax-get-xml-document-values",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SAX GET XML DOCUMENT VALUES"})," ( ",(0,d.jsx)(n.em,{children:"documento"})," ; ",(0,d.jsx)(n.em,{children:"codificacion"})," ; ",(0,d.jsx)(n.em,{children:"version"})," ; ",(0,d.jsx)(n.em,{children:"autonomo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"documento"}),(0,d.jsx)(n.td,{children:"Time"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"codificacion"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Conjunto de caracteres del documento XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"version"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Versi\xf3n XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"autonomo"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True = el documento es aut\xf3nomo, de lo contrario es False"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando SAX GET XML DOCUMENT VALUES  extrae informaci\xf3n b\xe1sica del encabezado XML del documento XML referenciado por ",(0,d.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando devuelve respectivamente el tipo de codificaci\xf3n, la versi\xf3n y la propiedad \u201Caut\xf3noma\u201D del documento en los par\xe1metros ",(0,d.jsx)(n.em,{children:"codificacion"}),", ",(0,d.jsx)(n.em,{children:"version"})," y ",(0,d.jsx)(n.em,{children:"autonomo"}),". Este comando debe utilizarse en el evento del contexto del evento SAX XML Start Document. Para mayor informaci\xf3n sobre los eventos SAX, consulte la descripci\xf3n del comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-get-xml-node",title:"SAX Get XML node",children:"SAX Get XML node"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0 y se genera un error."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-get-xml-node",children:"SAX Get XML node"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R8/commands/sax-set-xml-declaration",children:"SAX SET XML DECLARATION"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"873"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let d={},o=t.createContext(d);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);