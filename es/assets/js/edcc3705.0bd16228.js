/*! For license information please see edcc3705.0bd16228.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52209],{272248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var s=r(474848),o=r(28453);const t={id:"vp-get-formulas",title:"VP Get formulas"},l=void 0,a={id:"ViewPro/commands/vp-get-formulas",title:"VP Get formulas",description:"VP Get formulas ( rangeObj Collection",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-formulas",permalink:"/docs/es/ViewPro/commands/vp-get-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formulas.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-formulas",title:"VP Get formulas"},sidebar:"docs",previous:{title:"VP Get formula by name",permalink:"/docs/es/ViewPro/commands/vp-get-formula-by-name"},next:{title:"VP Get frozen panes",permalink:"/docs/es/ViewPro/commands/vp-get-frozen-panes"}},c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get formulas"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Colecci\xf3n de valores de una f\xf3rmula"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP Get formulas"})," recupera las f\xf3rmulas de un ",(0,s.jsx)(n.em,{children:"rangeObj"})," designado."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pase un rango cuyas f\xf3rmulas desea recuperar. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," designa varios rangos, se devuelve la f\xf3rmula del primer rango. Si ",(0,s.jsx)(n.em,{children:"rangeObj"})," no contiene f\xf3rmulas, el comando devuelve una cadena vac\xeda."]}),"\n",(0,s.jsx)(n.p,{children:"La colecci\xf3n devuelta es bidimensional:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La colecci\xf3n de primer nivel contiene subcolecciones de f\xf3rmulas. Cada subcolecci\xf3n representa una l\xednea."}),"\n",(0,s.jsx)(n.li,{children:"Cada subcolecci\xf3n define los valores de las celdas para la l\xednea. The first-level collection contains subcollections of formulas."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Quiere recuperar las f\xf3rmulas de las columnas Sum y Average de este documento:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(160291).A+"",width:"521",height:"147"})}),"\n",(0,s.jsx)(n.p,{children:"Puede utilizar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))\n//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]\n//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]\n//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formula",children:"VP Get formula"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var s=r(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var s,t={},i=null,d=null;for(s in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,s)&&!c.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:o,type:e,key:i,ref:d,props:t,_owner:a.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},160291:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpGetFormulas-75332305b21fbedadcd2ba342151d16a.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(296540);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);