"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2381"],{717939:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>i,frontMatter:()=>t});var o=JSON.parse('{"id":"ViewPro/commands/vp-set-boolean-value","title":"VP SET BOOLEAN VALUE","description":"VP SET BOOLEAN VALUE ( rangeObj Boolean)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-boolean-value.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-boolean-value","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-boolean-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-boolean-value.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-boolean-value","title":"VP SET BOOLEAN VALUE"},"sidebar":"docs","previous":{"title":"VP SET BINDING PATH","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-binding-path"},"next":{"title":"VP SET BORDER","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-border"}}'),r=s("785893"),l=s("250065");let t={id:"vp-set-boolean-value",title:"VP SET BOOLEAN VALUE"},a=void 0,d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET BOOLEAN VALUE"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,r.jsx)(n.em,{children:"boolValue"})," : Boolean)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boolValue"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Valor del booleano a definir"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SET BOOLEAN VALUE"})," asigna un valor booleano especificado a un rango de celdas designado."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-cell",children:(0,r.jsx)(n.code,{children:"VP Cell"})})," o ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-column",children:(0,r.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, el valor especificado se repetir\xe1 en cada una de ellas."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"boolValue"})," permite pasar el valor booleano (",(0,r.jsx)(n.strong,{children:"True"})," o ",(0,r.jsx)(n.strong,{children:"False"}),") que se asignar\xe1 al ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//Establecer el valor de la celda como False\nVP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var o=s(667294);let r={},l=o.createContext(r);function t(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);