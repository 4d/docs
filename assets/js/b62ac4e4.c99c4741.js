/*! For license information please see b62ac4e4.c99c4741.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78018],{861463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=t(474848),s=t(28453);const d={id:"vp-get-table-column-index",title:"VP Get table column index"},i=void 0,l={id:"ViewPro/commands/vp-get-table-column-index",title:"VP Get table column index",description:"History",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-table-column-index.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-table-column-index",permalink:"/docs/ViewPro/commands/vp-get-table-column-index",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-column-index.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-table-column-index",title:"VP Get table column index"},sidebar:"docs",previous:{title:"VP Get column attributes",permalink:"/docs/ViewPro/commands/vp-get-table-column-attributes"},next:{title:"VP Get table dirty rows",permalink:"/docs/ViewPro/commands/vp-get-table-dirty-rows"}},c={},o=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R7"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get table column index"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"columnName"})," : Text {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Name of the table column"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Index of ",(0,r.jsx)(n.em,{children:"columnName"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get table column index"})," command returns the index of the ",(0,r.jsx)(n.em,{children:"columnName"})," in the ",(0,r.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"columnName"}),", pass the name of the table column for which you want to get the index."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"tableName"})," or ",(0,r.jsx)(n.em,{children:"columnName"})," is not found, the command returns -1."]}),"\n",(0,r.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\t// Search the column id according the column name\nvar $id : Integer\n$id:=VP Get table column index($area; $tableName; "Weight price")\n\t// Remove the column by id\nVP REMOVE TABLE COLUMNS($area; $tableName; $id)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"See-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-table-column-attributes",children:"VP Get table column attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,d={},o=null,a=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:d,_owner:l.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);