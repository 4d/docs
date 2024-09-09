/*! For license information please see 28009d68.287dce10.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28164],{353389:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var r=s(474848),t=s(28453);const l={id:"vp-add-span",title:"VP ADD SPAN"},o=void 0,i={id:"ViewPro/commands/vp-add-span",title:"VP ADD SPAN",description:"VP ADD SPAN ( rangeObj : Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-add-span.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-span",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-add-span",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-add-span",title:"VP ADD SPAN"},sidebar:"docs",previous:{title:"VP ADD SHEET",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-add-sheet"},next:{title:"VP ADD STYLESHEET",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-add-stylesheet"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP ADD SPAN"})," combine les cellules dans ",(0,r.jsx)(n.em,{children:"rangeObj"})," en une seule cellule fusionn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Dans ",(0,r.jsx)(n.em,{children:"rangeObj"}),", passez un objet de plage de cellules. Les cellules de la plage sont jointes, afin de cr\xe9er une cellule plus large qui s'\xe9tend sur plusieurs colonnes et/ou lignes. Vous pouvez passer plusieurs plages de cellules pour cr\xe9er plusieurs fusions de cellules en m\xeame temps. A noter que si les plages de cellules se chevauchent, seule la premi\xe8re plage est utilis\xe9e."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Seules les donn\xe9es contenues dans la cellule sup\xe9rieure gauche sont affich\xe9es. Les donn\xe9es des autres cellules combin\xe9es sont cach\xe9es jusqu'\xe0 ce que la fusion soit retir\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"Les donn\xe9es masqu\xe9es, contenues dans les cellules fusionn\xe9es, sont accessibles via des formules (commen\xe7ant par la cellule sup\xe9rieure gauche)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour fusionner les cellules First quarter et Second quarter avec les deux cellules c\xf4te \xe0 c\xf4te, et de fusionner la cellule South area avec les deux lignes en-dessous :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"initial-document",src:s(598763).A+"",width:"679",height:"170"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Plage First quarter\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n \n  // Plage Second quarter\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n \n  // Plage South area\n $south:=VP Cells("ViewProArea";0;5;1;3)\n \n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"vp-add-span-result",src:s(459718).A+"",width:"679",height:"163"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,l={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:c,props:l,_owner:i.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},459718:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},598763:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(296540);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);