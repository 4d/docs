"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26702"],{812042:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>m,assets:()=>r,toc:()=>i,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/sax-close-xml-element","title":"SAX CLOSE XML ELEMENT","description":"SAX CLOSE XML ELEMENT ( documento )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sax-close-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/sax-close-xml-element","permalink":"/docs/es/commands/sax-close-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-close-xml-element.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-close-xml-element","title":"SAX CLOSE XML ELEMENT","slug":"/commands/sax-close-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX ADD XML ELEMENT VALUE","permalink":"/docs/es/commands/sax-add-xml-element-value"},"next":{"title":"SAX GET XML CDATA","permalink":"/docs/es/commands/sax-get-xml-cdata"}}'),l=s("785893"),d=s("250065");let o={id:"sax-close-xml-element",title:"SAX CLOSE XML ELEMENT",slug:"/commands/sax-close-xml-element",displayed_sidebar:"docs"},c=void 0,r={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",book:"book",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"SAX CLOSE XML ELEMENT"})," ( ",(0,l.jsx)(n.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"documento"}),(0,l.jsx)(n.td,{children:"Time"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Referencia del documento abierto"})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando SAX CLOSE XML ELEMENT escribe en el documento XML referenciado por ",(0,l.jsx)(n.em,{children:"documento"})," las instrucciones necesarias para cerrar el \xfaltimo elemento abierto utilizando el comando SAX OPEN XML."]}),"\n",(0,l.jsx)(n.p,{children:"El uso de este comando es opcional. De hecho, 4D a\xf1ade autom\xe1ticamente si es necesario, al momento del cierre de los documentos XML, las etiquetas de fin de los elementos no cerrados expl\xedcitamente."}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["Si el \xfaltimo elemento abierto es ",(0,l.jsx)(n.em,{children:(0,l.jsx)(n.book,{})}),", la siguiente instrucci\xf3n:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0SAX CLOSE XML ELEMENT($DocRef)\n"})}),"\n",(0,l.jsx)(n.p,{children:"... escribir\xe1 la siguiente l\xednea en el documento:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\n"})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/commands/sax-open-xml-element-arrays",children:"SAX OPEN XML ELEMENT ARRAYS"})]}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"854"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(667294);let l={},d=t.createContext(l);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);