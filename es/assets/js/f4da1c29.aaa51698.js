"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20773"],{203870:function(n,e,r){r.r(e),r.d(e,{default:()=>a,frontMatter:()=>i,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/get-print-marker","title":"Get print marker","description":"Get print marker ( markNum ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-print-marker.md","sourceDirName":"commands-legacy","slug":"/commands/get-print-marker","permalink":"/docs/es/20-R8/commands/get-print-marker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-marker.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-print-marker","title":"Get print marker","slug":"/commands/get-print-marker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get current printer","permalink":"/docs/es/20-R8/commands/get-current-printer"},"next":{"title":"GET PRINT OPTION","permalink":"/docs/es/20-R8/commands/get-print-option"}}'),t=r("785893"),s=r("250065");let i={id:"get-print-marker",title:"Get print marker",slug:"/commands/get-print-marker",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function h(n){let e={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Get print marker"})," ( ",(0,t.jsx)(e.em,{children:"markNum"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe1metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"markNum"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"N\xfamero de marcador"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Resultado"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Posici\xf3n del marcador"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(e.p,{children:"El comando Get print marker permite obtener la posici\xf3n actual de un marcador durante una impresi\xf3n."}),"\n",(0,t.jsx)(e.p,{children:"Este comando puede utilizarse en dos contextos:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Durante el evento de formulario On Header, en el contexto de los comandos ",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"})," y ",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/print-record",title:"PRINT RECORD",children:"PRINT RECORD"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Durante el evento de formulario On Printing Detail, en el contexto del comando ",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/print-form",title:"Print form",children:"Print form"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Se devuelven las coordenadas en p\xedxeles (1 p\xedxel = 1/72 pulgadas)."}),"\n",(0,t.jsxs)(e.p,{children:["Pase una de las constantes del tema ",(0,t.jsx)(e.em,{children:"\xc1rea de formulario"})," en el par\xe1metro ",(0,t.jsx)(e.em,{children:"nummarc"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constante"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{children:"Valor"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break0"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"300"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break1"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"301"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break2"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"302"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break3"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"303"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break4"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"304"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break5"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"305"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break6"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"306"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break7"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"307"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break8"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"308"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form break9"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"309"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form detail"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form footer"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"100"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"200"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header1"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"201"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header10"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"210"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header2"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"202"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header3"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"203"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header4"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"204"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header5"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"205"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header6"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"206"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header7"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"207"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header8"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"208"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Form header9"}),(0,t.jsx)(e.td,{children:"Entero largo"}),(0,t.jsx)(e.td,{children:"209"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(e.p,{children:["Consulte el ejemplo del comando ",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/set-print-marker",title:"SET PRINT MARKER",children:"SET PRINT MARKER"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/object-move",children:"OBJECT MOVE"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/es/20-R8/commands/set-print-marker",children:"SET PRINT MARKER"})]}),"\n",(0,t.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero de comando"}),(0,t.jsx)(e.td,{children:"708"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Hilo seguro"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var d=r(667294);let t={},s=d.createContext(t);function i(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);