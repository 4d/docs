/*! For license information please see 8084391b.f7901ba4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71646],{659458:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(474848),s=r(28453);const o={id:"vp-get-names",title:"VP Get names"},i=void 0,d={id:"ViewPro/commands/vp-get-names",title:"VP Get names",description:"VP Get names ( vpAreaName Number } ) : Collection",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-names.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-names",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-names",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-names.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-names",title:"VP Get names"},sidebar:"docs",previous:{title:"VP Get frozen panes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-frozen-panes"},next:{title:"VP Get print info",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-print-info"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Collection retourn\xe9e",id:"collection-retourn\xe9e",level:5},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get names"})," ( vpAreaName : Text { ; scope : Number } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:'"Scope" cible (par d\xe9faut=feuille courante)'}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Noms existant dans la zone d\xe9finie"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP Get names"}),' command returns a collection of all defined "names" in the current sheet or in the scope designated by the ',(0,t.jsx)(n.em,{children:"scope"})," parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["You can define where to get the names in ",(0,t.jsx)(n.em,{children:"scope"})," using either the sheet index (counting begins at 0) or the following constants:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"collection-retourn\xe9e",children:"Collection retourn\xe9e"}),"\n",(0,t.jsx)(n.p,{children:"La collection retourn\xe9e contient un objet par nom. Les propri\xe9t\xe9s d'objets suivantes peuvent \xeatre retourn\xe9es :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"nom de cellule ou de plage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"formula"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Commentaire associ\xe9 au nom"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Les propri\xe9t\xe9s disponibles d\xe9pendent du type d'\xe9l\xe9ment nomm\xe9 (cellule nomm\xe9e, plage nomm\xe9e ou formule nomm\xe9e)."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $list : Collection\n\n\n$list:=VP Get names("ViewProArea";2) //noms de la 3e feuille\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);