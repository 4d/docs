/*! For license information please see 7dd60be7.e9e7d1b4.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11742],{524853:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(474848),t=i(28453);const s={id:"analysis",title:"Activity analysis Page",sidebar_label:"Activity analysis Page"},r=void 0,a={id:"MSC/analysis",title:"Activity analysis Page",description:"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine.",source:"@site/versioned_docs/version-20/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/20/MSC/analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"analysis",title:"Activity analysis Page",sidebar_label:"Activity analysis Page"},sidebar:"docs",previous:{title:"Information Page",permalink:"/docs/20/MSC/information"},next:{title:"Verify Page",permalink:"/docs/20/MSC/verify"}},l={},c=[];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The Activity analysis page allows viewing the contents of the current log file. This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["It is also possible to rollback the operations carried out on the data of the database. For more information, refer to ",(0,o.jsx)(n.a,{href:"/docs/20/MSC/rollback",children:"Rollback page"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(516550).A+"",width:"882",height:"666"})}),"\n",(0,o.jsx)(n.p,{children:"Every operation recorded in the log file appears as a row. The columns provide various information on the operation. You can reorganize the columns as desired by clicking on their headers."}),"\n",(0,o.jsx)(n.p,{children:"This information allows you to identify the source and context of each operation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Operation"}),": Sequence number of operation in the log file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Action"}),": Type of operation performed on the data. This column can contain one of the following operations:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Opening of Data File: Opening of a data file."}),"\n",(0,o.jsx)(n.li,{children:"Closing of Data File: Closing of an open data file."}),"\n",(0,o.jsx)(n.li,{children:"Creation of a Context: Creation of a process that specifies an execution context."}),"\n",(0,o.jsx)(n.li,{children:"Closing of a Context: Closing of process."}),"\n",(0,o.jsx)(n.li,{children:"Addition: Creation and storage of a record."}),"\n",(0,o.jsx)(n.li,{children:"Adding a BLOB: Storage of a BLOB in a BLOB field."}),"\n",(0,o.jsx)(n.li,{children:"Deletion: Deletion of a record."}),"\n",(0,o.jsx)(n.li,{children:"Modification: Modification of a record."}),"\n",(0,o.jsx)(n.li,{children:"Start of Transaction: Transaction started."}),"\n",(0,o.jsx)(n.li,{children:"Validation of Transaction: Transaction validated."}),"\n",(0,o.jsx)(n.li,{children:"Cancellation of Transaction: Transaction cancelled."}),"\n",(0,o.jsxs)(n.li,{children:["Update context: Change in extra data (e.g. a call to ",(0,o.jsx)(n.code,{children:"CHANGE CURRENT USER"})," or ",(0,o.jsx)(n.code,{children:"SET USER ALIAS"}),")."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Table"}),": Table to which the added/deleted/modified record or BLOB belongs."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Primary Key/BLOB"}),": contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Process"}),": Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Size"}),": Size (in bytes) of data processed by the operation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Date and Hour"}),": Date and hour when the operation was performed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"System User"}),": System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D User"}),": 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Values"}),": Values of fields for the record in the case of addition or modification. The values are separated by \u201c;\u201d. Only values represented in alphanumeric form are displayed.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsxs)(n.em,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column."]})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Records"}),": Record number."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Analyze"})," to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. The ",(0,o.jsx)(n.strong,{children:"Export..."})," button can be used to export the contents of the file as text."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,i)=>{var o=i(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var o,s={},c=null,d=null;for(o in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:c,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,i)=>{e.exports=i(221020)},516550:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(296540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);