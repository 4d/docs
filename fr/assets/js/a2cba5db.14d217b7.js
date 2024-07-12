/*! For license information please see a2cba5db.14d217b7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80149],{249339:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(474848),t=r(28453);const o={id:"vp-get-formulas",title:"VP Get formulas"},l=void 0,i={id:"ViewPro/commands/vp-get-formulas",title:"VP Get formulas",description:"VP Get formulas ( rangeObj Collection",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-formulas",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-formulas.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-formulas",title:"VP Get formulas"},sidebar:"docs",previous:{title:"VP Get formula by name",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-formula-by-name"},next:{title:"VP Get frozen panes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-frozen-panes"}},a={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get formulas"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Collection de valeurs d'une formule"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get formulas"})," command retrieves the formulas from a designated ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range whose formulas you want to retrieve. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," designates multiple ranges, the formula of the first range is returned. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," does not contain any formulas, the command returns an empty string."]}),"\n",(0,s.jsx)(n.p,{children:"La collection retourn\xe9e est bidemensionnelle :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection repr\xe9sente une ligne."}),"\n",(0,s.jsx)(n.li,{children:"Chaque sous-collection d\xe9finit les valeurs des cellules de la ligne. Les valeurs sont des \xe9l\xe9ments textuels contenant les formules des cellules."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer les formules des colonnes Sum et Average de ce document :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(719092).A+"",width:"521",height:"147"})}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez utiliser ce code :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))\n//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]\n//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]\n//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-formula",children:"VP Get formula"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-values",children:"VP Get values"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,o={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:c,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},719092:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpGetFormulas-75332305b21fbedadcd2ba342151d16a.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(296540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);