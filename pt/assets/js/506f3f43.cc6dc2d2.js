/*! For license information please see 506f3f43.cc6dc2d2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57756],{90559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(474848),o=n(28453);const s={id:"vp-get-column-attributes",title:"VP Get column attributes"},c=void 0,i={id:"ViewPro/commands/vp-get-column-attributes",title:"VP Get column attributes",description:"VP Get column attributes (  rangeObj Collection",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-column-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-column-attributes",permalink:"/docs/pt/ViewPro/commands/vp-get-column-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-column-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-column-attributes",title:"VP Get column attributes"},sidebar:"docs",previous:{title:"VP Get cell style",permalink:"/docs/pt/ViewPro/commands/vp-get-cell-style"},next:{title:"VP Get column count",permalink:"/docs/pt/ViewPro/commands/vp-get-column-count"}},l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get column attributes"})," (  ",(0,r.jsx)(t.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rangeObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Objeto intervalo"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultados"}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Cole\xe7\xe3o de propriedades da colunas"}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get column attributes"})," command returns a collection of properties for any column in the ",(0,r.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the columns whose attributes will be retrieved."]}),"\n",(0,r.jsxs)(t.p,{children:["The returned collection contains any properties for the columns, whether or not they have been set by the ",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})," command."]}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"O seguinte c\xf3digo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($range)\nC_COLLECTION($attr)\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get column attributes($range)\n'})}),"\n",(0,r.jsx)(t.p,{children:"... will return a collection of the attributes within the given range:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(817619).A+"",width:"669",height:"277"})}),"\n",(0,r.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:a,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},817619:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cmd_vpGetColumnAttributes-d45cff2b73744bff1f1bc960ba54c2d8.PNG"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(296540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);