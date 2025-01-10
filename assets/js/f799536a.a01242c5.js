"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51613"],{738965:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/is-in-print-preview","title":"Is in print preview","description":"Is in print preview  : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/is-in-print-preview.md","sourceDirName":"commands-legacy","slug":"/commands/is-in-print-preview","permalink":"/docs/commands/is-in-print-preview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-in-print-preview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-in-print-preview","title":"Is in print preview","slug":"/commands/is-in-print-preview","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get printed height","permalink":"/docs/commands/get-printed-height"},"next":{"title":"Level","permalink":"/docs/commands/level"}}'),r=i("785893"),s=i("250065");let d={id:"is-in-print-preview",title:"Is in print preview",slug:"/commands/is-in-print-preview",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Is in print preview"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"True = Print preview,False = No print preview"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Is in print preview"})," command returns True if the ",(0,r.jsx)(n.strong,{children:"Preview on Screen"})," option is checked in the printing dialog box and False otherwise. This setting is local to the process."]}),"\n",(0,r.jsxs)(n.p,{children:["Unlike the ",(0,r.jsx)(n.a,{href:"/docs/commands/get-print-preview",children:"Get print preview"})," command, ",(0,r.jsx)(n.strong,{children:"Is in print preview"}),' returns the final value of the option, after the dialog box is validated by the user. So this command lets you determine with certainty whether printing actually takes place in "preview" mode.']}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example takes all types of printing into account:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET PRINT PREVIEW(True)\xa0//Print preview by default\n\xa0PRINT SETTINGS\n\xa0If(OK=1)\n\xa0\xa0//The user may have changed the print destination\n\xa0\xa0\xa0\xa0If(Is in print preview)\xa0// True if preview\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET OUTPUT([Invoices];"toScreen")\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FORM SET OUTPUT([Invoices];"toPrinter"\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0OPEN PRINTING JOB\n\xa0\xa0\xa0\xa0ALL RECORDS([Invoices])\n\xa0\xa0\xa0\xa0PRINT SELECTION([Invoices];>)\n\xa0\xa0\xa0\xa0CLOSE PRINTING JOB\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/get-print-preview",children:"Get print preview"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/set-print-preview",children:"SET PRINT PREVIEW"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1198"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var t=i(667294);let r={},s=t.createContext(r);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);