"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43679"],{952813:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/object-set-maximum-value","title":"OBJECT SET MAXIMUM VALUE","description":"OBJECT SET MAXIMUM VALUE ( { ;} objeto ; valorMax* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-maximum-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-maximum-value","permalink":"/docs/es/commands/object-set-maximum-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-maximum-value.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-maximum-value","title":"OBJECT SET MAXIMUM VALUE","slug":"/commands/object-set-maximum-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET LIST BY REFERENCE","permalink":"/docs/es/commands/object-set-list-by-reference"},"next":{"title":"OBJECT SET MINIMUM VALUE","permalink":"/docs/es/commands/object-set-minimum-value"}}'),t=s("785893"),r=s("250065");let a={id:"object-set-maximum-value",title:"OBJECT SET MAXIMUM VALUE",slug:"/commands/object-set-maximum-value",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET MAXIMUM VALUE"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"valorMax"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si especifica, objeto es un nombre de objeto(cadena)",(0,t.jsx)(n.br,{}),"Si se omite, objeto es un campo o variable"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nombre del objeto (si * se especifica) o ",(0,t.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valorMax"}),(0,t.jsx)(n.td,{children:"Date, Time, Number"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor m\xe1ximo para el objeto"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OBJECT SET MAXIMUM VALUE"})," modifica el valor m\xe1ximo del objeto o de los objetos designado(s) por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"})," para el proceso actual."]}),"\n",(0,t.jsxs)(n.p,{children:['La propiedad "Valor m\xe1ximo" se puede aplicar a datos de tipo n\xfamero, fecha u hora. Para m\xe1s informaci\xf3n, consulte ',(0,t.jsx)(n.em,{children:"Valores m\xe1ximos y m\xednimos"})," en el manual de ",(0,t.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"valorMax"}),', pase el nuevo valor m\xe1ximo que desea asignar al objeto para el proceso actual. Este valor debe coincidir con el tipo de objeto, de lo contrario se devuelve el error 18 "Tipos incompatibles".']}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/object-get-maximum-value",children:"OBJECT GET MAXIMUM VALUE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-minimum-value",children:"OBJECT SET MINIMUM VALUE"})]}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1244"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var o=s(667294);let t={},r=o.createContext(t);function a(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);