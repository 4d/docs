"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35500"],{11136:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","description":"BOOLEAN ARRAY FROM SET ( arrBool {; conjunto} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/boolean-array-from-set.md","sourceDirName":"commands-legacy","slug":"/commands/boolean-array-from-set","permalink":"/docs/es/20-R8/commands/boolean-array-from-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","slug":"/commands/boolean-array-from-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO SELECTION","permalink":"/docs/es/20-R8/commands/array-to-selection"},"next":{"title":"COPY ARRAY","permalink":"/docs/es/20-R8/commands/copy-array"}}'),o=r("785893"),t=r("250065");let a={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,o.jsx)(n.em,{children:"arrBool"})," {; ",(0,o.jsx)(n.em,{children:"conjunto"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"arrBool"}),(0,o.jsx)(n.td,{children:"Boolean array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Array para indicar si un registro est\xe1 en un conjunto o no"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"conjunto"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre del conjunto o UserSet si se omite este par\xe1metro"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando BOOLEAN ARRAY FROM SET llena un array de booleanos indicando si cada registro en la tabla est\xe1 o no en ",(0,o.jsx)(n.em,{children:"conjunto"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Los elementos en el array se ordenan en funci\xf3n del orden de creaci\xf3n de los registros en la tabla (n\xfameros de registro absolutos). Si N es el n\xfamero de registros en la tabla, el elemento 0 del array corresponde al registro n\xfamero 0, el elemento 1 del array corresponde al registro n\xfamero 1, etc."}),"\n",(0,o.jsx)(n.p,{children:"Cada elemento del array es:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Verdadero si el registro correspondiente pertenece al conjunto."}),"\n",(0,o.jsx)(n.li,{children:"Falso si el registro correspondiente no pertenece al conjunto."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Advertencia:"})," el n\xfamero total de elementos en el array ",(0,o.jsx)(n.em,{children:"arrBool"})," no es significativo. Por razones estructurales, este n\xfamero puede ser diferente del n\xfamero de registros realmente presentes en la tabla. Los posibles elementos extras son definidos como ",(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/false",title:"False",children:"False"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si no pasa el par\xe1metro ",(0,o.jsx)(n.em,{children:"conjunto"}),", el comando utilizar\xe1 UserSet en el proceso actual."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/es/20-R8/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"646"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var s=r(667294);let o={},t=s.createContext(o);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);