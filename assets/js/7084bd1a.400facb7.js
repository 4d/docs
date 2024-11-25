"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47859"],{688753:function(e,t,a){a.r(t),a.d(t,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>l});var o=JSON.parse('{"id":"MSC/rollback","title":"Rollback Page","description":"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database.","source":"@site/versioned_docs/version-18/MSC/rollback.md","sourceDirName":"MSC","slug":"/MSC/rollback","permalink":"/docs/18/MSC/rollback","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frollback.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"rollback","title":"Rollback Page","sidebar_label":"Rollback Page"},"sidebar":"docs","previous":{"title":"Compact Page","permalink":"/docs/18/MSC/compact"},"next":{"title":"Restore Page","permalink":"/docs/18/MSC/restore"}}'),n=a("785893"),s=a("250065");let l={id:"rollback",title:"Rollback Page",sidebar_label:"Rollback Page"},r=void 0,i={},c=[];function d(e){let t={a:"a",blockquote:"blockquote",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You use the Rollback page to access the rollback function among the operations carried out on the data file. It resembles an undo function applied over several levels. It is particularly useful when a record has been deleted by mistake in a database."}),"\n",(0,n.jsx)(t.p,{children:"This function is only available when the database functions with a data log file."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(314028).Z+"",width:"882",height:"666"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the ",(0,n.jsx)(t.strong,{children:"Values"})," column and a dialog requesting the passphrase or the data key is displayed if you click the ",(0,n.jsx)(t.strong,{children:"Rollback"})," button."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The contents and functioning of the list of operations are the same as for the ",(0,n.jsx)(t.a,{href:"/docs/18/MSC/analysis",children:"Activity analysis"})," window."]}),"\n",(0,n.jsx)(t.p,{children:"To perform a rollback among the operations, select the row after which all operations must be cancelled. The operation of the selected row will be the last kept. If, for example, you wish to cancel a deletion, select the operation located just before it. The deletion operation, as well as all subsequent operations, will be cancelled."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(894598).Z+"",width:"1008",height:"366"})}),"\n",(0,n.jsxs)(t.p,{children:["Next click on the ",(0,n.jsx)(t.strong,{children:"Rollback"})," button. 4D asks you to confirm the operation. If you click ",(0,n.jsx)(t.strong,{children:"OK"}),", the data is then restored to the exact state it was in at the moment of the selected action."]}),"\n",(0,n.jsx)(t.p,{children:"You use the menu found at the bottom of the window to select a data log file to be used when you apply the rollback function to a database restored from an archive file. In this case, you must specify the data log file corresponding to the archive."}),"\n",(0,n.jsxs)(t.p,{children:["Here is how the rollback function works: when the user clicks the ",(0,n.jsx)(t.strong,{children:"Rollback"})," button, 4D shuts the current database and restores the last backup of the database data. The restored database is then opened and 4D integrates the operations of the data log file up through to the selected operation. If the database has not yet been saved, 4D starts with a blank data file."]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},314028:function(e,t,a){a.d(t,{Z:function(){return o}});let o=a.p+"assets/images/MSC_rollback1-b21c02b97be368379d88a7bdb43633bc.png"},894598:function(e,t,a){a.d(t,{Z:function(){return o}});let o=a.p+"assets/images/MSC_rollback2-95de20fc9ee798b7396060a9a7ec5b1b.png"},250065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return l}});var o=a(667294);let n={},s=o.createContext(n);function l(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);