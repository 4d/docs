"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26896],{488763:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=o(474848),t=o(28453);const d={id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/dom-set-xml-declaration",title:"DOM SET XML DECLARATION",description:"DOM SET XML DECLARATION ( elementRef ; codificacion {; autonomo {; indentacion}} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-set-xml-declaration.md",sourceDirName:"commands-legacy",slug:"/commands/dom-set-xml-declaration",permalink:"/docs/es/commands/dom-set-xml-declaration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-declaration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dom-set-xml-declaration",title:"DOM SET XML DECLARATION",slug:"/commands/dom-set-xml-declaration",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOM SET XML ATTRIBUTE",permalink:"/docs/es/commands/dom-set-xml-attribute"},next:{title:"DOM SET XML ELEMENT NAME",permalink:"/docs/es/commands/dom-set-xml-element-name"}},r={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DOM SET XML DECLARATION"})," ( ",(0,s.jsx)(n.em,{children:"elementRef"})," ; ",(0,s.jsx)(n.em,{children:"codificacion"})," {; ",(0,s.jsx)(n.em,{children:"autonomo"})," {; ",(0,s.jsx)(n.em,{children:"indentacion"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"codificacion"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Conjunto de caracteres del documento XML"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autonomo"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"True = el documento es aut\xf3nomo False (por defecto) = el documento no es aut\xf3nomo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indentacion"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"** Obsoleto no utilizar **"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando DOM SET XML DECLARATION permite definir diferentes opciones que \xfatiles en la creaci\xf3n del \xe1rbol XML designado por ",(0,s.jsx)(n.em,{children:"elementRef"}),". Estas opciones hacen referencia a la codificaci\xf3n y a la propiedad aut\xf3noma del \xe1rbol:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"codificacion"}),": indica el conjunto de caracteres utilizado en el documento. Por defecto (si no se llama al comando), se utiliza el conjunto de caracteres UTF-8 (Unicode comprimido).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Nota:"})," si pasa un conjunto de caracteres que no soporta los comandos XML de 4D, se utilizar\xe1 UTF-8. Consulte ",(0,s.jsx)(n.em,{children:"Conjuntos de caracteres"})," para ver la lista de conjuntos de caracteres soportados (sin embargo se recomienda UTF-8 en la mayor\xeda de los casos)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"autonomo"}),": indica si el \xe1rbol es aut\xf3nomo (",(0,s.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),") o si necesita otros archivos o recursos externos para su funcionamiento (",(0,s.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),"). Por defecto (si el comando no se llama o si se omite el par\xe1metro), el \xe1rbol no es aut\xf3nomo.\n",(0,s.jsx)(n.strong,{children:"Nota de compatibilidad:"})," El par\xe1metro ",(0,s.jsx)(n.em,{children:"indentacion"})," se conserva por razones de compatibilidad con las versiones anteriores de 4D pero su uso no se recomienda en 4D v12. De ahora en adelante, para especificar la indentaci\xf3n del documento, se recomienda utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo define la codificaci\xf3n a utilizar y la opci\xf3n aut\xf3nomo del elemento ",(0,s.jsx)(n.em,{children:"elementRef"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML DECLARATION(elementRef;"UTF-16";True)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/dom-create-xml-ref",children:"DOM Create XML Ref"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(296540);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);