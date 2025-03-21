"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92583"],{912873:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/dom-set-xml-declaration","title":"DOM SET XML DECLARATION","description":"DOM SET XML DECLARATION ( elementRef ; codificacion {; autonomo {; indentacion}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-declaration.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-declaration","permalink":"/docs/es/20-R7/commands/dom-set-xml-declaration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-set-xml-declaration","title":"DOM SET XML DECLARATION","slug":"/commands/dom-set-xml-declaration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML ATTRIBUTE","permalink":"/docs/es/20-R7/commands/dom-set-xml-attribute"},"next":{"title":"DOM SET XML ELEMENT NAME","permalink":"/docs/es/20-R7/commands/dom-set-xml-element-name"}}'),d=s("785893"),t=s("250065");let i={id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," ; ",(0,d.jsx)(n.em,{children:"codificacion"})," {; ",(0,d.jsx)(n.em,{children:"autonomo"})," {; ",(0,d.jsx)(n.em,{children:"indentacion"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"codificacion"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Conjunto de caracteres del documento XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"autonomo"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"True = el documento es aut\xf3nomo False (por defecto) = el documento no es aut\xf3nomo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"indentacion"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"** Obsoleto no utilizar **"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando DOM SET XML DECLARATION permite definir diferentes opciones que \xfatiles en la creaci\xf3n del \xe1rbol XML designado por ",(0,d.jsx)(n.em,{children:"elementRef"}),". Estas opciones hacen referencia a la codificaci\xf3n y a la propiedad aut\xf3noma del \xe1rbol:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"codificacion"}),": indica el conjunto de caracteres utilizado en el documento. Por defecto (si no se llama al comando), se utiliza el conjunto de caracteres UTF-8 (Unicode comprimido).",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Nota:"})," si pasa un conjunto de caracteres que no soporta los comandos XML de 4D, se utilizar\xe1 UTF-8. Consulte ",(0,d.jsx)(n.em,{children:"Conjuntos de caracteres"})," para ver la lista de conjuntos de caracteres soportados (sin embargo se recomienda UTF-8 en la mayor\xeda de los casos)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.em,{children:"autonomo"}),": indica si el \xe1rbol es aut\xf3nomo (",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/true",title:"True",children:"True"}),") o si necesita otros archivos o recursos externos para su funcionamiento (",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/false",title:"False",children:"False"}),"). Por defecto (si el comando no se llama o si se omite el par\xe1metro), el \xe1rbol no es aut\xf3nomo.\n",(0,d.jsx)(n.strong,{children:"Nota de compatibilidad:"})," El par\xe1metro ",(0,d.jsx)(n.em,{children:"indentacion"})," se conserva por razones de compatibilidad con las versiones anteriores de 4D pero su uso no se recomienda en 4D v12. De ahora en adelante, para especificar la indentaci\xf3n del documento, se recomienda utilizar el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["El siguiente ejemplo define la codificaci\xf3n a utilizar y la opci\xf3n aut\xf3nomo del elemento ",(0,d.jsx)(n.em,{children:"elementRef"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML DECLARATION(elementRef;"UTF-16";True)\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"859"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var o=s(667294);let d={},t=o.createContext(d);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);