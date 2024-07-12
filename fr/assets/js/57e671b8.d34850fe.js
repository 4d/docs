/*! For license information please see 57e671b8.d34850fe.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51680],{950202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(474848),o=r(28453);const s={id:"vp-get-row-attributes",title:"VP Get row attributes"},i=void 0,c={id:"ViewPro/commands/vp-get-row-attributes",title:"VP Get row attributes",description:"VP Get row attributes ( rangeObj Collection",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-row-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-row-attributes",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-attributes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-row-attributes",title:"VP Get row attributes"},sidebar:"docs",previous:{title:"VP Get print info",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-print-info"},next:{title:"VP Get row count",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-row-count"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"VP Get row attributes"})," ( rangeObj : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param\xe8tres"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rangeObj"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"->"}),(0,n.jsx)(t.td,{children:"Objet plage"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"R\xe9sultat"}),(0,n.jsx)(t.td,{children:"Collection"}),(0,n.jsx)(t.td,{children:"<-"}),(0,n.jsx)(t.td,{children:"Collection de propri\xe9t\xe9s de lignes"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"VP Get row attributes"})," command returns a collection of properties for any row in the ",(0,n.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the rows whose attributes will be retrieved."]}),"\n",(0,n.jsxs)(t.p,{children:["The returned collection contains any properties for the rows, whether or not they have been set by the ",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})," method."]}),"\n",(0,n.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(t.p,{children:"Le code suivant retourne une collection d'attributs de la plage donn\xe9e :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'var $range : Object\nvar $attr : Collection\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get row attributes($range)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(692842).A+"",width:"699",height:"315"})}),"\n",(0,n.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-get-column-attributes",children:"VP Get column attributes"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},692842:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/cmd_vpGetRowAttributes-efed3a6fee4606a18820341e9a7ffe5a.PNG"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);