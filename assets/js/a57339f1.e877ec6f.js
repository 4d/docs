"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42887"],{462947:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/save-record","title":"SAVE RECORD","description":"SAVE RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/save-record.md","sourceDirName":"commands-legacy","slug":"/commands/save-record","permalink":"/docs/20-R7/commands/save-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"save-record","title":"SAVE RECORD","slug":"/commands/save-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Records in table","permalink":"/docs/20-R7/commands/records-in-table"},"next":{"title":"Sequence number","permalink":"/docs/20-R7/commands/sequence-number"}}'),d=n("785893"),t=n("250065");let o={id:"save-record",title:"SAVE RECORD",slug:"/commands/save-record",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," {( ",(0,d.jsx)(r.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"aTable"}),(0,d.jsx)(r.td,{children:"Table"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Table for which to save the current record, or Default table, if omitted"})]})})]}),"\n",(0,d.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," saves the current record of ",(0,d.jsx)(r.em,{children:"aTable"})," in the current process. If there is no current record, then ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," is ignored."]}),"\n",(0,d.jsxs)(r.p,{children:["You use ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," to save a record that you created or modified with code. A record that has been modified and validated by the user in a form does not need to be saved with ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"}),". A record that has been modified by the user in a form, but has been canceled, can still be saved with ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["If you call the ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," command when no field has been modified in the record, the command does nothing (the trigger is not called)."]}),"\n",(0,d.jsxs)(r.p,{children:["Here are some cases where ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," is required:"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["To save a new record created with ",(0,d.jsx)(r.a,{href:"/docs/20-R7/commands/create-record",children:"CREATE RECORD"})," or ",(0,d.jsx)(r.a,{href:"/docs/20-R7/commands/duplicate-record",children:"DUPLICATE RECORD"})]}),"\n",(0,d.jsxs)(r.li,{children:["To save data from ",(0,d.jsx)(r.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"})]}),"\n",(0,d.jsx)(r.li,{children:"To save a record modified by a method"}),"\n",(0,d.jsxs)(r.li,{children:["To save a record that contains new or modified subrecord data following an ",(0,d.jsx)(r.em,{children:"_o_ADD SUBRECORD"}),", ",(0,d.jsx)(r.em,{children:"_o_CREATE SUBRECORD"}),", or ",(0,d.jsx)(r.em,{children:"_o_MODIFY SUBRECORD"})," command"]}),"\n",(0,d.jsx)(r.li,{children:"During data entry to save the displayed record before using a command that changes the current record"}),"\n",(0,d.jsx)(r.li,{children:"During data entry to save the current record"}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["You should not execute a ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"})," during the On Validate event for a form that has been accepted. If you do, the record will be saved twice."]}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Note:"})," Saving a record that contains edited object field(s) usually requires that you notify explicitely 4D before calling ",(0,d.jsx)(r.strong,{children:"SAVE RECORD"}),". For more information, please refer to the ",(0,d.jsx)(r.em,{children:"Saving Object fields"})," section."]}),"\n",(0,d.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(r.p,{children:"The following example is part of a method that reads records from a document. The code segment receives a record, and then, if it is received properly, saves it:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:"\xa0RECEIVE RECORD([Customers])\xa0// Receive record from disk\n\xa0If(OK=1)\xa0// If the record is received properly\u2026\n\xa0\xa0\xa0\xa0SAVE RECORD([Customers])\xa0// save it\n\xa0End if\n"})}),"\n",(0,d.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/20-R7/commands/create-record",children:"CREATE RECORD"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/20-R7/commands/locked",children:"Locked"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.em,{children:"Triggers"})]}),"\n",(0,d.jsx)(r.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Command number"}),(0,d.jsx)(r.td,{children:"53"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread safe"}),(0,d.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return o}});var s=n(667294);let d={},t=s.createContext(d);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);