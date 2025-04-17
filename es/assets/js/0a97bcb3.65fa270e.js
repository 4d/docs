"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79798"],{78001:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/window-kind","title":"Window kind","description":"Window kind {( ventana )} : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/window-kind.md","sourceDirName":"commands-legacy","slug":"/commands/window-kind","permalink":"/docs/es/commands/window-kind","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-kind.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"window-kind","title":"Window kind","slug":"/commands/window-kind","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tool bar height","permalink":"/docs/es/commands/tool-bar-height"},"next":{"title":"WINDOW LIST","permalink":"/docs/es/commands/window-list"}}'),s=d("785893"),t=d("250065");let r={id:"window-kind",title:"Window kind",slug:"/commands/window-kind",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Window kind"})," {( ",(0,s.jsx)(e.em,{children:"ventana"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Par\xe1metro"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ventana"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2192"}),(0,s.jsx)(e.td,{children:"N\xfamero de referencia de la ventana o Ventana del primer plano del proceso actual, si se  omite"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Resultado"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u2190"}),(0,s.jsx)(e.td,{children:"Tipo de ventana"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(e.p,{children:["El comando Window kind devuelve el tipo de ventana 4D cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(e.em,{children:"ventana"}),". Si la ventana no existe, Window kind devuelve ",(0,s.jsx)(e.em,{children:"0"})," (cero)."]}),"\n",(0,s.jsxs)(e.p,{children:["De lo contrario, Window kind devuelve una de las siguientes constantes predefinidas (tema ",(0,s.jsx)(e.em,{children:"Ventana"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Constante"}),(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{children:"Valor"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"External window"}),(0,s.jsx)(e.td,{children:"Entero largo"}),(0,s.jsx)(e.td,{children:"5"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Floating window"}),(0,s.jsx)(e.td,{children:"Entero largo"}),(0,s.jsx)(e.td,{children:"14"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Modal dialog"}),(0,s.jsx)(e.td,{children:"Entero largo"}),(0,s.jsx)(e.td,{children:"9"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Regular window"}),(0,s.jsx)(e.td,{children:"Entero largo"}),(0,s.jsx)(e.td,{children:"8"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["Si omite el par\xe1metro ",(0,s.jsx)(e.em,{children:"ventana"}),", Window kind devuelve el tipo de la ventana del primer plano del proceso actual."]}),"\n",(0,s.jsx)(e.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(e.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(e.a,{href:"/docs/es/commands/window-list",title:"WINDOW LIST",children:"WINDOW LIST"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/docs/es/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/es/commands/get-window-title",children:"Get window title"}),(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"/docs/es/commands/window-process",children:"Window process"})]}),"\n",(0,s.jsx)(e.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"N\xfamero de comando"}),(0,s.jsx)(e.td,{children:"445"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hilo seguro"}),(0,s.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return l},a:function(){return r}});var i=d(667294);let s={},t=i.createContext(s);function r(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);