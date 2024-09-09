/*! For license information please see d913cfe1.e0ca54dc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72847],{59258:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(474848),r=s(28453);const i={id:"vp-get-spans",title:"VP Get spans"},l=void 0,o={id:"ViewPro/commands/vp-get-spans",title:"VP Get spans",description:"VP Get spans ( rangeObj Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-spans.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-spans",permalink:"/docs/fr/ViewPro/commands/vp-get-spans",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-spans.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-spans",title:"VP Get spans"},sidebar:"docs",previous:{title:"VP Get show print lines",permalink:"/docs/fr/ViewPro/commands/vp-get-show-print-lines"},next:{title:"VP Get stylesheets",permalink:"/docs/fr/ViewPro/commands/vp-get-stylesheet"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get spans"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objet de cellules fusionn\xe9es (cell spans) dans la plage d\xe9finie"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP Get spans"})," r\xe9cup\xe8re les cellules fusionn\xe9es (cell spans) dans le ",(0,t.jsx)(n.em,{children:"rangeObj"})," d\xe9sign\xe9."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"rangeObj"}),", passez une plage de cellules fusionn\xe9es que vous souhaitez r\xe9cup\xe9rer. Si ",(0,t.jsx)(n.em,{children:"rangeObj"})," ne contient pas de cellules fusionn\xe9es, une plage vide est retourn\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Pour centrer le texte des cellules fusionn\xe9es dans ce document :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(947419).A+"",width:"678",height:"170"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Rechercher toutes les cellules fusionn\xe9es \n$range:=VP Get spans(VP All("ViewProArea"))\n \n//centrer le texte\n$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)\nVP SET CELL STYLE($range;$style)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,i={},d=null,a=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:d,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},947419:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_vpGetSpans-60a3f93621cbbd596f1162f143d29894.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(296540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);