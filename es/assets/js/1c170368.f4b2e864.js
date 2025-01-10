"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1194"],{528884:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"ViewPro/commands/vp-add-span","title":"VP ADD SPAN","description":"VP ADD SPAN ( rangeObj : Object )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-add-span.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-span","permalink":"/docs/es/20-R6/ViewPro/commands/vp-add-span","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-add-span","title":"VP ADD SPAN"},"sidebar":"docs","previous":{"title":"VP ADD SHEET","permalink":"/docs/es/20-R6/ViewPro/commands/vp-add-sheet"},"next":{"title":"VP ADD STYLESHEET","permalink":"/docs/es/20-R6/ViewPro/commands/vp-add-stylesheet"}}'),r=s("785893"),d=s("250065");let t={id:"vp-add-span",title:"VP ADD SPAN"},i=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP ADD SPAN"})," combina las celdas de ",(0,r.jsx)(n.em,{children:"rangeObj"})," como un \xfanico tramo de celdas."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celdas. Las celdas del rango se unen para crear una celda m\xe1s grande que se extiende por varias columnas y/o l\xedneas. Puede pasar varios rangos de celdas para crear varios espacios al mismo tiempo. Tenga en cuenta que si los rangos de celdas se superponen, s\xf3lo se utiliza el primer rango de celdas."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S\xf3lo se muestran los datos de la celda superior izquierda. Los datos de las otras celdas combinadas se ocultan hasta que se elimina la fusi\xf3n."}),"\n",(0,r.jsx)(n.li,{children:"Los datos ocultos en las celdas fusionadas son accesibles mediante f\xf3rmulas (empezando por la celda superior izquierda)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para fusionar las celdas First quarter y Second quarter a trav\xe9s de las dos celdas al lado, y de fusionar la celda del \xe1rea South a trav\xe9s de las dos l\xedneas debajo de ella:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"initial-document",src:s(856373).Z+"",width:"679",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Rango First quarter\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n\n// Rango Second quarter\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n\n  // Rango South area\n $south:=VP Cells("ViewProArea";0;5;1;3)\n\n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"vp-add-span-result",src:s(565889).Z+"",width:"679",height:"163"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},565889:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},856373:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var a=s(667294);let r={},d=a.createContext(r);function t(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);