"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63612],{148962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(474848),s=n(28453);const o={id:"vp-get-column-attributes",title:"VP Get column attributes"},i=void 0,c={id:"ViewPro/commands/vp-get-column-attributes",title:"VP Get column attributes",description:"VP Get column attributes (  rangeObj Collection",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-column-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-column-attributes",permalink:"/docs/ViewPro/commands/vp-get-column-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-column-attributes.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-column-attributes",title:"VP Get column attributes"},sidebar:"docs",previous:{title:"VP Get cell style",permalink:"/docs/ViewPro/commands/vp-get-cell-style"},next:{title:"VP Get column count",permalink:"/docs/ViewPro/commands/vp-get-column-count"}},l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get column attributes"})," (  ",(0,r.jsx)(t.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rangeObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Range object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Collection of column properties"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get column attributes"})," command returns a collection of properties for any column in the ",(0,r.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"rangeObj"}),", pass an object containing a range of the columns whose attributes will be retrieved."]}),"\n",(0,r.jsxs)(t.p,{children:["The returned collection contains any properties for the columns, whether or not they have been set by the ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})," command."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'C_OBJECT($range)\nC_COLLECTION($attr)\n \n$range:=VP Column("ViewProArea";1;2)\n$attr:=VP Get column attributes($range)\n'})}),"\n",(0,r.jsx)(t.p,{children:"... will return a collection of the attributes within the given range:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(915052).A+"",width:"669",height:"277"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},915052:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cmd_vpGetColumnAttributes-d45cff2b73744bff1f1bc960ba54c2d8.PNG"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);