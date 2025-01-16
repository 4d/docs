"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60902"],{651235:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/data-file","title":"Data file","description":"Data file {( segmento )} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/data-file.md","sourceDirName":"commands-legacy","slug":"/commands/data-file","permalink":"/docs/es/commands/data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdata-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"data-file","title":"Data file","slug":"/commands/data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create entity selection","permalink":"/docs/es/commands/create-entity-selection"},"next":{"title":"Database measures","permalink":"/docs/es/commands/database-measures"}}'),a=s("785893"),d=s("250065");let i={id:"data-file",title:"Data file",slug:"/commands/data-file",displayed_sidebar:"docs"},r=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Data file"})," {( ",(0,a.jsx)(n.em,{children:"segmento"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"segmento"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Obsoleto, no utilizar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Nombre largo del archivo de datos de la base"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando Data file devuelve el nombre largo del archivo de datos o del primer segmento de la base en la cual est\xe1 trabajando actualmente."}),"\n",(0,a.jsxs)(n.p,{children:["A partir de la versi\xf3n 11 de 4D, no se soportan segmentos de datos. El par\xe1metro ",(0,a.jsx)(n.em,{children:"segmento"})," se ignora y no debe utilizarse m\xe1s."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"En Windows"}),(0,a.jsx)(n.br,{}),"\nSi est\xe1 trabajando por ejemplo con la base MisCDs en \\DOCS\\MisCDs en el disco G, una llamada a Data file devuelve G:\\DOCS\\MisCDs \\MisCDs .4DD (siempre y cuando haya aceptado la ubicaci\xf3n y el nombre por defecto propuesto por 4D cuando cre\xf3 la base)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"En Macintosh"}),(0,a.jsx)(n.br,{}),"\nSi est\xe1 trabajando por ejemplo con la base en la carpeta Documentos:MisCDs\u0192: en el disco Macintosh HD, una llamada a Data file devuelve Macintosh HD:Documentos:MisCDs\u0192:MisCDs\u0192.data (siempre y cuando haya aceptado la ubicaci\xf3n y el nombre por defecto propuesto por 4D cuando cre\xf3 la base)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Advertencia:"})," si llama este comando desde 4D en modo remoto, s\xf3lo se devuelve el nombre del archivo de datos, no el nombre largo."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/application-file",children:"Application file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/structure-file",children:"Structure file"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"490"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return i}});var t=s(667294);let a={},d=t.createContext(a);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);