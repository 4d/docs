/*! For license information please see dd304235.2fc8b7db.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90728],{938123:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(474848),s=r(28453);const i={id:"vp-get-frozen-panes",title:"VP Get frozen panes"},o=void 0,d={id:"ViewPro/commands/vp-get-frozen-panes",title:"VP Get frozen panes",description:"VP Get frozen panes ( vpAreaName Integer } ) : Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-frozen-panes",permalink:"/docs/fr/ViewPro/commands/vp-get-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-frozen-panes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-frozen-panes",title:"VP Get frozen panes"},sidebar:"docs",previous:{title:"VP Get formulas",permalink:"/docs/fr/ViewPro/commands/vp-get-formulas"},next:{title:"VP Get names",permalink:"/docs/fr/ViewPro/commands/vp-get-names"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Objet retourn\xe9",id:"objet-retourn\xe9",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get frozen panes"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objet contenant des informations sur les colonnes et lignes fig\xe9es"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get frozen panes"})," command returns an object with information about the frozen columns and rows in ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["In the optional ",(0,t.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass ",(0,t.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,t.jsx)(n.h5,{id:"objet-retourn\xe9",children:"Objet retourn\xe9"}),"\n",(0,t.jsx)(n.p,{children:"La commande retourne un objet d\xe9crivant les lignes et colonnes fig\xe9es. Cet objet peut avoir les propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columnCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la gauche de la feuille"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trailingColumnCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Le nombre de colonnes fig\xe9es sur la droite de la feuille"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en haut de la feuille"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trailingRowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"Le nombre de lignes fig\xe9es en bas de la feuille"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer des informations sur le nombre de colonnes et de lignes fig\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $panesObj : Object\n\n \n$panesObj:=VP Get frozen panes("ViewProArea")\n'})}),"\n",(0,t.jsx)(n.p,{children:"L'objet retourn\xe9 contient, par exemple :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(259303).A+"",width:"1123",height:"210"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-frozen-panes",children:"VP SET FROZEN PANES"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},259303:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpGetFrozenpanes-398acd4f3af923b58c396d0fa808b53c.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(296540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);