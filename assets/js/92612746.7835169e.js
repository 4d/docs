"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49018"],{542985:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/restore-info","title":"RESTORE INFO","description":"RESTORE INFO ( selector ; info1 ; info2 )","source":"@site/versioned_docs/version-20-R8/commands-legacy/restore-info.md","sourceDirName":"commands-legacy","slug":"/commands/restore-info","permalink":"/docs/commands/restore-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"restore-info","title":"RESTORE INFO","slug":"/commands/restore-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/commands/restore"},"next":{"title":"SELECT LOG FILE","permalink":"/docs/commands/select-log-file"}}'),r=t("785893"),d=t("250065");let i={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,r.jsx)(n.em,{children:"selector"})," ; ",(0,r.jsx)(n.em,{children:"info1"})," ; ",(0,r.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of information to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info1"}),(0,r.jsx)(n.td,{children:"Integer, Date"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value 1 of the selector"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info2"}),(0,r.jsx)(n.td,{children:"Text, Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value 2 of the selector"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The RESTORE INFO command gets information related to the last automatic database restore."}),"\n",(0,r.jsxs)(n.p,{children:["Pass the type of information to get in ",(0,r.jsx)(n.em,{children:"selector"}),". You can use one of the following constants, placed in the \u201C",(0,r.jsx)(n.em,{children:"Backup and Restore"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore date"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore status"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The type and content of the ",(0,r.jsx)(n.em,{children:"info1"})," and ",(0,r.jsx)(n.em,{children:"info2"})," parameters depend on the value of ",(0,r.jsx)(n.em,{children:"selector"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"selector"})," = 0 (Last Restore Date), ",(0,r.jsx)(n.em,{children:"info1"})," returns the date and ",(0,r.jsx)(n.em,{children:"info2"})," the time of the last automatic database restore."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"selector"})," = 2 (Last Restore Status), ",(0,r.jsx)(n.em,{children:"info1"})," returns the number and ",(0,r.jsx)(n.em,{children:"info2"})," the text of the status of the last automatic database restore."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This command does not take manual database restores into account."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/restore",children:"RESTORE"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"889"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);