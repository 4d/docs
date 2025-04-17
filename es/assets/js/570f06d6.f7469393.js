"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14666"],{633981:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>l,assets:()=>o,toc:()=>a,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/dom-get-parent-xml-element","title":"DOM Get parent XML element","description":"DOM Get parent XML element ( elementRef {; nomElemPadre {; valorElemPadre}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-get-parent-xml-element.md","sourceDirName":"commands-legacy","slug":"/commands/dom-get-parent-xml-element","permalink":"/docs/es/commands/dom-get-parent-xml-element","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-get-parent-xml-element.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-get-parent-xml-element","title":"DOM Get parent XML element","slug":"/commands/dom-get-parent-xml-element","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Get next sibling XML element","permalink":"/docs/es/commands/dom-get-next-sibling-xml-element"},"next":{"title":"DOM Get previous sibling XML element","permalink":"/docs/es/commands/dom-get-previous-sibling-xml-element"}}'),d=t("785893"),r=t("250065");let s={id:"dom-get-parent-xml-element",title:"DOM Get parent XML element",slug:"/commands/dom-get-parent-xml-element",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DOM Get parent XML element"})," ( ",(0,d.jsx)(n.em,{children:"elementRef"})," {; ",(0,d.jsx)(n.em,{children:"nomElemPadre"})," {; ",(0,d.jsx)(n.em,{children:"valorElemPadre"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"elementRef"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia del elemento XML"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomElemPadre"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Nombre del elemento XML padre"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valorElemPadre"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valor del elemento XML padre"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Referencia del elemento XML padre"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando DOM Get parent XML element devuelve una referencia XML al \u201Cpadre\u201D del elemento XML pasado como referencia en ",(0,d.jsx)(n.em,{children:"refElement"}),". Esta referencia puede ser utilizada con los otros comandos de an\xe1lisis XML."]}),"\n",(0,d.jsxs)(n.p,{children:["Los par\xe1metros opcionales ",(0,d.jsx)(n.em,{children:"nomElemPadre"})," y ",(0,d.jsx)(n.em,{children:"valorElemPadre"}),", cuando se pasan, reciben respectivamente el nombre y el valor del elemento padre."]}),"\n",(0,d.jsx)(n.p,{children:"Si utiliza este comando en un nodo documento"}),"\n",(0,d.jsxs)(n.p,{children:["Cuando pasa un elemento ra\xedz en ",(0,d.jsx)(n.em,{children:"refElement"}),', el comando devuelve la referencia "#document". El nodo documento es el padre de un elemento ra\xedz.',(0,d.jsx)(n.br,{}),'\nSi utiliza este comando en un nodo documento, el comando devuelve una referencia nula ("0000000000000000") y la variable OK toma el valor 0.']}),"\n",(0,d.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-get-first-child-xml-element",children:"DOM Get first child XML element"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-get-last-child-xml-element",children:"DOM Get last child XML element"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/dom-get-root-xml-element",children:"DOM Get root XML element"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"923"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var l=t(667294);let d={},r=l.createContext(d);function s(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);