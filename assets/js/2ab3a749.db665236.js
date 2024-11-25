"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12467"],{778687:function(e,r,t){t.r(r),t.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/first-record","title":"FIRST RECORD","description":"FIRST RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/first-record.md","sourceDirName":"commands-legacy","slug":"/commands/first-record","permalink":"/docs/commands/first-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffirst-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"first-record","title":"FIRST RECORD","slug":"/commands/first-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"End selection","permalink":"/docs/commands/end-selection"},"next":{"title":"GET HIGHLIGHTED RECORDS","permalink":"/docs/commands/get-highlighted-records"}}'),s=t("785893"),o=t("250065");let c={id:"first-record",title:"FIRST RECORD",slug:"/commands/first-record",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"FIRST RECORD"})," {( ",(0,s.jsx)(r.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"aTable"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Table for which to move to the first selected record, or Default table, if omitted"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"FIRST RECORD"})," makes the first record of the current selection of ",(0,s.jsx)(r.em,{children:"aTable"})," the current record, and loads the record from disk. All query, selection, and sorting commands also set the current record to the first record. If the current selection is empty or if the current record is already the first record of the selection, ",(0,s.jsx)(r.strong,{children:"FIRST RECORD"})," has no effect."]}),"\n",(0,s.jsxs)(r.p,{children:["This command is most often used after the ",(0,s.jsx)(r.a,{href:"/docs/commands/use-set",children:"USE SET"})," command to begin looping through a selection of records from the first record. However, you can also call it from a subroutine if you are not sure whether or not the current record is actually the first."]}),"\n",(0,s.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"The following example makes the first record of the [Customers] table the first record:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0FIRST RECORD([Customers])\n"})}),"\n",(0,s.jsx)(r.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/commands/before-selection",children:"Before selection"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/end-selection",children:"End selection"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/last-record",children:"LAST RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/next-record",children:"NEXT RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/previous-record",children:"PREVIOUS RECORD"})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return c}});var n=t(667294);let s={},o=n.createContext(s);function c(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);