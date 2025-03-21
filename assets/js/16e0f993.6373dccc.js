"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7592"],{263246:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/backup-info","title":"BACKUP INFO","description":"BACKUP INFO ( selector ; info1 ; info2 )","source":"@site/versioned_docs/version-20-R7/commands-legacy/backup-info.md","sourceDirName":"commands-legacy","slug":"/commands/backup-info","permalink":"/docs/20-R7/commands/backup-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup-info","title":"BACKUP INFO","slug":"/commands/backup-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP","permalink":"/docs/20-R7/commands/backup"},"next":{"title":"CHECK LOG FILE","permalink":"/docs/20-R7/commands/check-log-file"}}'),d=t("785893"),r=t("250065");let i={id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"BACKUP INFO"})," ( ",(0,d.jsx)(n.em,{children:"selector"})," ; ",(0,d.jsx)(n.em,{children:"info1"})," ; ",(0,d.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"selector"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Type of information to get"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"info1"}),(0,d.jsx)(n.td,{children:"Integer, Date"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Value 1 of the selector"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"info2"}),(0,d.jsx)(n.td,{children:"Time, Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Value 2 of the selector"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"The BACKUP INFO command gets information related to the last backup performed on the database data."}),"\n",(0,d.jsxs)(n.p,{children:["Pass the type of information to get in ",(0,d.jsx)(n.em,{children:"selector"}),". The type and content of the ",(0,d.jsx)(n.em,{children:"info1"})," and ",(0,d.jsx)(n.em,{children:"info2"})," parameters depend on the value of ",(0,d.jsx)(n.em,{children:"selector"}),". You can use one of the following constants, placed in the \u201C",(0,d.jsx)(n.em,{children:"Backup and Restore"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last backup date"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"info1"})," returns the date and ",(0,d.jsx)(n.em,{children:"info2"})," the time of the last backup."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last backup information"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"info1"})," returns the last backup duration in milliseconds (longint) and ",(0,d.jsx)(n.em,{children:"info2"})," the last backup begin timestamp (string, see formatting details in the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/timestamp",children:"Timestamp"})," command)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Last backup status"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"info1"})," returns the number and ",(0,d.jsx)(n.em,{children:"info2"})," the text of the status of the last backup"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Next backup date"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.em,{children:"info1"})," returns the date and ",(0,d.jsx)(n.em,{children:"info2"})," the time of the next scheduled backup"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/restore",children:"RESTORE"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"888"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);