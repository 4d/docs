/*! For license information please see d50b0cec.8652c262.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75771],{388613:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=s(474848),a=s(28453);const o={id:"vp-add-span",title:"VP ADD SPAN"},t=void 0,d={id:"ViewPro/commands/vp-add-span",title:"VP ADD SPAN",description:"VP ADD SPAN ( rangeObj : Object )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-add-span.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-span",permalink:"/docs/es/20-R5/ViewPro/commands/vp-add-span",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-add-span",title:"VP ADD SPAN"},sidebar:"docs",previous:{title:"VP ADD SHEET",permalink:"/docs/es/20-R5/ViewPro/commands/vp-add-sheet"},next:{title:"VP ADD STYLESHEET",permalink:"/docs/es/20-R5/ViewPro/commands/vp-add-stylesheet"}},i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP ADD SPAN"})," combina las celdas de ",(0,r.jsx)(n.em,{children:"rangeObj"})," como un \xfanico tramo de celdas."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celdas. Las celdas del rango se unen para crear una celda m\xe1s grande que se extiende por varias columnas y/o l\xedneas. Puede pasar varios rangos de celdas para crear varios espacios al mismo tiempo. Tenga en cuenta que si los rangos de celdas se superponen, s\xf3lo se utiliza el primer rango de celdas."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"S\xf3lo se muestran los datos de la celda superior izquierda. Los datos de las otras celdas combinadas se ocultan hasta que se elimina la fusi\xf3n."}),"\n",(0,r.jsx)(n.li,{children:"Los datos ocultos en las celdas fusionadas son accesibles mediante f\xf3rmulas (empezando por la celda superior izquierda)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para fusionar las celdas First quarter y Second quarter a trav\xe9s de las dos celdas al lado, y de fusionar la celda del \xe1rea South a trav\xe9s de las dos l\xedneas debajo de ella:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"initial-document",src:s(762703).A+"",width:"679",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Rango First quarter\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n\n// Rango Second quarter\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n\n  // Rango South area\n $south:=VP Cells("ViewProArea";0;5;1;3)\n\n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"vp-add-span-result",src:s(899490).A+"",width:"679",height:"163"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var r,o={},l=null,c=null;for(r in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)t.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},899490:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},762703:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var r=s(296540);const a={},o=r.createContext(a);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);