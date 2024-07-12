/*! For license information please see d4bd4cb3.9327a950.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61931],{445169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},o=void 0,d={id:"ViewPro/commands/vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES",description:"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-set-show-print-lines.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-show-print-lines",permalink:"/docs/ViewPro/commands/vp-set-show-print-lines",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},sidebar:"docs",previous:{title:"VP SET SHEET OPTIONS",permalink:"/docs/ViewPro/commands/vp-set-sheet-options"},next:{title:"VP SET TABLE COLUMN ATTRIBUTES",permalink:"/docs/ViewPro/commands/vp-set-table-column-attributes"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"visible"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Print lines displayed if True (default), hidden if False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET SHOW PRINT LINES"})," command  sets whether to display print preview lines in a spreadsheet.."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"visible"}),", pass ",(0,t.jsx)(n.code,{children:"True"})," to display the print lines, and ",(0,t.jsx)(n.code,{children:"False"})," to hide them. ",(0,t.jsx)(n.code,{children:"True"})," is passed by default."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified, the command applies to the current sheet."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following code displays print lines in a document's second sheet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"set-show-print-lines",src:s(793015).A+"",width:"1340",height:"844"})}),"\n",(0,t.jsx)(n.p,{children:"With a page break:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"set-show-print-lines-with-page-break",src:s(428821).A+"",width:"1340",height:"844"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-show-print-lines",children:"4D Get show print lines"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,i={},c=null,a=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},428821:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},793015:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(296540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);