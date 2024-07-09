/*! For license information please see 83ec8204.f4ae7f83.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16470],{351883:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(474848),s=r(28453);const o={id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},d=void 0,i={id:"ViewPro/commands/vp-remove-table-rows",title:"VP REMOVE TABLE ROWS",description:"History",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-remove-table-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-table-rows",permalink:"/docs/ViewPro/commands/vp-remove-table-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-rows.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},sidebar:"docs",previous:{title:"VP REMOVE TABLE COLUMNS",permalink:"/docs/ViewPro/commands/vp-remove-table-columns"},next:{title:"VP RESET SELECTION",permalink:"/docs/ViewPro/commands/vp-reset-selection"}},l={},c=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R7"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP REMOVE TABLE ROWS"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,t.jsx)(n.em,{children:"row"})," : Integer {; ",(0,t.jsx)(n.em,{children:"count"})," : Integer {; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tableName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Table name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Index in the table of the starting row to remove"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"count"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Number of rows to remove (must be >0)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP REMOVE TABLE ROWS"})," command removes one or ",(0,t.jsx)(n.em,{children:"count"})," row(s) from the specified ",(0,t.jsx)(n.em,{children:"tableName"})," at the specified ",(0,t.jsx)(n.em,{children:"row"})," index. The command removes values and styles."]}),"\n",(0,t.jsxs)(n.p,{children:["This command removes rows from the ",(0,t.jsx)(n.em,{children:"tableName"})," table, NOT from the sheet. The total number of rows of the sheet is not impacted by the command. Data present below the table (if any) are automatically moved up according to the number of removed rows."]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:"tableName"})," table is bound to a ",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-data-context",children:"data context"}),", the command removes element(s) from the collection."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.em,{children:"tableName"})," does not exist, nothing happens."]}),"\n",(0,t.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:'To remove two rows from 3rd row of the "dataTable" table:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,o={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,t)&&!l.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:a,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(296540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);