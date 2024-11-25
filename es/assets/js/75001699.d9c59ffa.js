"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12025"],{391266:function(e,n,d){d.r(n),d.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"commands-legacy/find-window","title":"Find window","description":"Find window ( izquierda ; superior {; parteVentana} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/find-window.md","sourceDirName":"commands-legacy","slug":"/commands/find-window","permalink":"/docs/es/commands/find-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-window","title":"Find window","slug":"/commands/find-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ERASE WINDOW","permalink":"/docs/es/commands/erase-window"},"next":{"title":"Frontmost window","permalink":"/docs/es/commands/frontmost-window"}}'),r=d("785893"),t=d("250065");let s={id:"find-window",title:"Find window",slug:"/commands/find-window",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Find window"})," ( ",(0,r.jsx)(n.em,{children:"izquierda"})," ; ",(0,r.jsx)(n.em,{children:"superior"})," {; ",(0,r.jsx)(n.em,{children:"parteVentana"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"izquierda"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordenada global izquierda"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"superior"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Coordenada global superior"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parteVentana"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero de parte de ventana"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"N\xfamero de referencia de la ventana"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Find windowdevuelve (si existe) el n\xfamero de referencia de la primera ventana \u201Ctocada\u201D por el punto cuyas coordenadas se pasan en ",(0,r.jsx)(n.em,{children:"izquierda"})," y ",(0,r.jsx)(n.em,{children:"superior"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Las coordenadas deben ser expresadas con relaci\xf3n a la esquina superior izquierda del \xe1rea de contenido de la ventana de aplicaci\xf3n (Windows) o de la pantalla principal (Macintosh)."}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"parteVentana"})," devuelve 3 si se toca la ventana, de lo contrario 0. (",(0,r.jsx)(n.strong,{children:"Nota de compatibilidad:"})," a partir de 4D v14, las constantes del tema ",(0,r.jsx)(n.em,{children:"Buscar ventana"})," son obsoletas)."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/frontmost-window",children:"Frontmost window"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/next-window",children:"Next window"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return s}});var i=d(667294);let r={},t=i.createContext(r);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);