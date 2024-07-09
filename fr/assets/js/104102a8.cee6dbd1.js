/*! For license information please see 104102a8.cee6dbd1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[696],{891727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(474848),r=n(28453);const o={id:"vp-get-stylesheet",title:"VP Get stylesheets"},l=void 0,i={id:"ViewPro/commands/vp-get-stylesheet",title:"VP Get stylesheets",description:"VP Get stylesheets ( vpAreaName Integer } ) : Collection",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-stylesheets.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-stylesheet",permalink:"/docs/fr/ViewPro/commands/vp-get-stylesheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-stylesheets.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-stylesheet",title:"VP Get stylesheets"},sidebar:"docs",previous:{title:"VP Get spans",permalink:"/docs/fr/ViewPro/commands/vp-get-spans"},next:{title:"VP Get stylesheet",permalink:"/docs/fr/ViewPro/commands/vp-get-stylesheets"}},d={},c=[{value:"Description",id:"Description",level:4},{value:"Exemple",id:"Exemple",level:4},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get stylesheets"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tres"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Cible (par d\xe9faut = feuille courante)"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Collection"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Collection d'objets feuille de style"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"Description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get stylesheets"})," command returns the collection of defined style sheet objects from the designated ",(0,s.jsx)(t.em,{children:"sheet"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"vpAreaName"}),", pass the name property of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(t.p,{children:["You can define where to get the style sheets in the optional ",(0,s.jsx)(t.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0) or with the following constants:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Le code suivant retournera une collection de tous les objets style de la feuille courante :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$styles:=VP Get stylesheets("ViewProArea")\n'})}),"\n",(0,s.jsx)(t.p,{children:"Dans ce cas, la feuille courante utilise deux objets style :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"[\n   {\n     backColor:green,\n     borderLeft:{color:green,style:10}, \n     borderTop:{color:green,style:10}, \n     borderRight:{color:green,style:10}, \n     borderBottom:{color:green,style:10}, \n     name:GreenDashDotStyle\n   },\n   {\n     backColor:red,\n     textIndent:10,\n     name:RedIndent\n   }\n]\n"})}),"\n",(0,s.jsx)(t.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-add-stylesheet",children:"VP ADD STYLESHEET"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-get-stylesheets",children:"VP Get stylesheet"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/ViewPro/commands/vp-remove-stylesheet",children:"VP REMOVE STYLESHEET"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var s=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,o={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:a,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(296540);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);