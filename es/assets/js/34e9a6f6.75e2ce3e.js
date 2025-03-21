"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64435"],{222935:function(e,n,d){d.r(n),d.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","description":"SAX ADD XML DOCTYPE ( documento ; docType )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-add-xml-doctype.md","sourceDirName":"commands-legacy","slug":"/commands/sax-add-xml-doctype","permalink":"/docs/es/20-R7/commands/sax-add-xml-doctype","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-add-xml-doctype.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-add-xml-doctype","title":"SAX ADD XML DOCTYPE","slug":"/commands/sax-add-xml-doctype","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML COMMENT","permalink":"/docs/es/20-R7/commands/sax-add-xml-comment"},"next":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/es/20-R7/commands/sax-add-xml-element-value"}}'),t=d("785893"),r=d("250065");let i={id:"sax-add-xml-doctype",title:"SAX ADD XML DOCTYPE",slug:"/commands/sax-add-xml-doctype",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SAX ADD XML DOCTYPE"})," ( ",(0,t.jsx)(n.em,{children:"documento"})," ; ",(0,t.jsx)(n.em,{children:"docType"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"documento"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del documento abierto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"docType"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"DocType a a\xf1adir"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando SAX ADD XML DOCTYPE a\xf1ade la instrucci\xf3n DocType definida por el par\xe1metro ",(0,t.jsx)(n.em,{children:"docType"})," en el documento XML referenciado por ",(0,t.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"La instrucci\xf3n DocType permite indicar el tipo de XML en el cual el documento ha sido escrito y especificar la Declaraci\xf3n de tipo de documento (DTD) utilizada. Una instrucci\xf3n DocType generalmente tiene la siguiente forma: ."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"La siguiente instrucci\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vDocType:="SYSTEM Books \\"Book.DTD\\""\n\xa0SAX ADD XML DOCTYPE($DocRef;vDocType)\n'})}),"\n",(0,t.jsx)(n.p,{children:"... escribir\xe1 la siguiente l\xednea en el documento:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario toma el valor 0."}),"\n",(0,t.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,t.jsx)(n.p,{children:"En caso de error, el comando devuelve un error que puede interceptarse utilizando un m\xe9todo de gesti\xf3n de errores."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/sax-add-xml-comment",children:"SAX ADD XML COMMENT"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"851"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return c},a:function(){return i}});var s=d(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);