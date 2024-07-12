/*! For license information please see 59726bb6.b899e573.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31918],{641319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(474848),r=t(28453);const i={id:"vp-get-spans",title:"VP Get spans"},o=void 0,c={id:"ViewPro/commands/vp-get-spans",title:"VP Get spans",description:"VP Get spans ( rangeObj Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-spans.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-spans",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-spans",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-spans.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-spans",title:"VP Get spans"},sidebar:"docs",previous:{title:"VP Get show print lines",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-show-print-lines"},next:{title:"VP Get stylesheets",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-stylesheet"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get spans"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Objet de cellules fusionn\xe9es (cell spans) dans la plage d\xe9finie"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get spans"})," command retrieves the cell spans in the designated ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass a range of cell spans you want to retrieve. If ",(0,s.jsx)(n.em,{children:"rangeObj"})," does not contain a cell span, an empty range is returned."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour centrer le texte des cellules fusionn\xe9es dans ce document :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(284626).A+"",width:"678",height:"170"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Search for all cell spans \n$range:=VP Get spans(VP All("ViewProArea"))\n \n//center text\n$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)\nVP SET CELL STYLE($range;$style)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,i={},l=null,a=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},284626:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cmd_vpGetSpans-60a3f93621cbbd596f1162f143d29894.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);