"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38114"],{473186:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/modify-selection","title":"MODIFY SELECTION","description":"MODIFY SELECTION ( {; selectMode}{; enterList}{; }{; } )","source":"@site/versioned_docs/version-20-R7/commands-legacy/modify-selection.md","sourceDirName":"commands-legacy","slug":"/commands/modify-selection","permalink":"/docs/commands/modify-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmodify-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"modify-selection","title":"MODIFY SELECTION","slug":"/commands/modify-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LAST RECORD","permalink":"/docs/commands/last-record"},"next":{"title":"NEXT RECORD","permalink":"/docs/commands/next-record"}}'),i=t("785893"),o=t("250065");let r={id:"modify-selection",title:"MODIFY SELECTION",slug:"/commands/modify-selection",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"})," ( {",(0,i.jsx)(n.em,{children:"aTable"}),"}{; ",(0,i.jsx)(n.em,{children:"selectMode"}),"}{; ",(0,i.jsx)(n.em,{children:"enterList"}),"}{; *}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"aTable"}),(0,i.jsx)(n.td,{children:"Table"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table to display and modify, or Default table, if omitted"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selectMode"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Selection mode"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enterList"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Authorize Enter in list option"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Use output form for one record selection and hide scroll bars in the input form"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Show scroll bars in the input form (overrides second option of first optional *)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"})," does almost the same thing as ",(0,i.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"}),". Refer to the description of ",(0,i.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," for details. The differences between the two commands are:"]}),"\n",(0,i.jsxs)(n.p,{children:["1. ",(0,i.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," and ",(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"})," enable you to display the current selected records in list mode, or in the input form when you double-click on a record. Using ",(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"}),", you can also modify the fields of the record in the input form when you double-click on it, if it is not already in use by another process or user, or in \u201CEnter in List\u201D mode (if it is authorized)."]}),"\n",(0,i.jsxs)(n.p,{children:["2. ",(0,i.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," loads the records in Read-only mode in the current process, which means that they are not locked for writing in the other processes. ",(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"})," places all the records of the selection in Read-Write mode, which means that they are automatically locked for writing in other processes. ",(0,i.jsx)(n.strong,{children:"MODIFY SELECTION"})," frees the records when its execution is completed."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Sets"})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);