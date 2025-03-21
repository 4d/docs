"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2038"],{18337:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/first-record","title":"FIRST RECORD","description":"FIRST RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/first-record.md","sourceDirName":"commands-legacy","slug":"/commands/first-record","permalink":"/docs/commands/first-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffirst-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"first-record","title":"FIRST RECORD","slug":"/commands/first-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"End selection","permalink":"/docs/commands/end-selection"},"next":{"title":"GET HIGHLIGHTED RECORDS","permalink":"/docs/commands/get-highlighted-records"}}'),t=n("785893"),o=n("250065");let d={id:"first-record",title:"FIRST RECORD",slug:"/commands/first-record",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"FIRST RECORD"})," {( ",(0,t.jsx)(r.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"aTable"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Table for which to move to the first selected record, or Default table, if omitted"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"FIRST RECORD"})," makes the first record of the current selection of ",(0,t.jsx)(r.em,{children:"aTable"})," the current record, and loads the record from disk. All query, selection, and sorting commands also set the current record to the first record. If the current selection is empty or if the current record is already the first record of the selection, ",(0,t.jsx)(r.strong,{children:"FIRST RECORD"})," has no effect."]}),"\n",(0,t.jsxs)(r.p,{children:["This command is most often used after the ",(0,t.jsx)(r.a,{href:"/docs/commands/use-set",children:"USE SET"})," command to begin looping through a selection of records from the first record. However, you can also call it from a subroutine if you are not sure whether or not the current record is actually the first."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"The following example makes the first record of the [Customers] table the first record:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0FIRST RECORD([Customers])\n"})}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/commands/before-selection",children:"Before selection"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/end-selection",children:"End selection"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/last-record",children:"LAST RECORD"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/next-record",children:"NEXT RECORD"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/commands/previous-record",children:"PREVIOUS RECORD"})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Command number"}),(0,t.jsx)(r.td,{children:"50"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread safe"}),(0,t.jsx)(r.td,{children:"\u2713"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Changes current record"}),(0,t.jsx)(r.td,{})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var s=n(667294);let t={},o=s.createContext(t);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);