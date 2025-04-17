"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2715"],{527850:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/display-record","title":"DISPLAY RECORD","description":"DISPLAY RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R9/commands-legacy/display-record.md","sourceDirName":"commands-legacy","slug":"/commands/display-record","permalink":"/docs/commands/display-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisplay-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"display-record","title":"DISPLAY RECORD","slug":"/commands/display-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE RECORD","permalink":"/docs/commands/delete-record"},"next":{"title":"DUPLICATE RECORD","permalink":"/docs/commands/duplicate-record"}}'),t=r("785893"),d=r("250065");let o={id:"display-record",title:"DISPLAY RECORD",slug:"/commands/display-record",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DISPLAY RECORD"})," {( ",(0,t.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table from which to display the current record, or Default table, if omitted"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"DISPLAY RECORD"})," command displays the current record of ",(0,t.jsx)(n.em,{children:"aTable"}),", using the current input form. The record is displayed only until an event redraws the window. Such an event might be the execution of an ",(0,t.jsx)(n.a,{href:"/docs/commands/add-record",children:"ADD RECORD"})," command, returning to an input form, or returning to the menu bar. ",(0,t.jsx)(n.strong,{children:"DISPLAY RECORD"})," does nothing if there is no current record."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DISPLAY RECORD"})," is often used to display custom progress messages. It can also be used to generate a free-running slide show."]}),"\n",(0,t.jsx)(n.p,{children:"If a form method exists, an On Load event will be generated."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WARNING:"})," Do not call ",(0,t.jsx)(n.strong,{children:"DISPLAY RECORD"})," from within a Web connection process, because the command will be executed on the 4D Web server machine and not on the Web browser client machine."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following example displays a series of records as a slide show:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Demo])\xa0// Select all of the records\n\xa0FORM SET INPUT([Demo];"Display")\xa0// Set the form to use for display\n\xa0For($vlRecord;1;Records in selection([Demo]))\xa0// Loop through all of the records\n\xa0\xa0\xa0\xa0DISPLAY RECORD([Demo])\xa0// Display a record\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;180)\xa0// Pause for 3 seconds\n\xa0\xa0\xa0\xa0NEXT RECORD([Demo])\xa0// Move to the next record\n\xa0End for\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/commands/message",children:"MESSAGE"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"105"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);