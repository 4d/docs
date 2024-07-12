/*! For license information please see 790996dd.defdca51.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94391],{958096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"vp-get-row-count",title:"VP Get row count"},i=void 0,c={id:"ViewPro/commands/vp-get-row-count",title:"VP Get row count",description:"VP Get row count ( vpAreaName Integer } ) : Integer",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-row-count.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-row-count",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-count",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-count.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-row-count",title:"VP Get row count"},sidebar:"docs",previous:{title:"VP Get row attributes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-attributes"},next:{title:"VP Get selection",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-selection"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get row count"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Nombre total de lignes"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get row count"})," command returns the total number of rows from the designated ",(0,r.jsx)(n.em,{children:"sheet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name property of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["You can define where to get the row count in the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0). If omitted or if you pass ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant retourne le nombre de lignes dans la zone 4D View Pro :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $rowCount : Integer\n$rowCount:=VP Get row count("ViewProarea")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-column-count",children:"VP SET COLUMN COUNT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,a=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(296540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);