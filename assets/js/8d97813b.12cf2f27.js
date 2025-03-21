"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54451"],{140515:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/is-record-loaded","title":"Is record loaded","description":"Is record loaded {( aTable )} : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/is-record-loaded.md","sourceDirName":"commands-legacy","slug":"/commands/is-record-loaded","permalink":"/docs/20-R7/commands/is-record-loaded","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-record-loaded.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-record-loaded","title":"Is record loaded","slug":"/commands/is-record-loaded","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is new record","permalink":"/docs/20-R7/commands/is-new-record"},"next":{"title":"Modified record","permalink":"/docs/20-R7/commands/modified-record"}}'),d=t("785893"),o=t("250065");let s={id:"is-record-loaded",title:"Is record loaded",slug:"/commands/is-record-loaded",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Is record loaded"})," {( ",(0,d.jsx)(n.em,{children:"aTable"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"aTable"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Table of the record to examine or Default table if this parameter is omitted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True if the record is loaded Otherwise False"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The Is record loaded command returns True if ",(0,d.jsx)(n.em,{children:"aTable"}),"\u2019s current record is loaded in the current process.command will return False in remote mode (it returns True in local mode)."]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.p,{children:"Instead of using the \u201CNext record\u201D or \u201CPrevious record\u201D automatic actions, you can write object methods for these buttons to improve their operation. The \u201CNext\u201D button will display the beginning of the selection if the user is at the end of the selection and the \u201CPrevious\u201D button will show the end of the selection when the user is at the beginning of the selection."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Object method of the \u201CPrevious\u201D button (without an automatic action)\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0PREVIOUS RECORD([Group])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Group])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Group];Records in selection([Group]))\n\xa0\xa0//Go to the last record in the selection\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n\xa0\n\xa0\xa0// Object method of the \u201CNext\u201D button (without an automatic action)\n\xa0If(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0NEXT RECORD([Group])\n\xa0\xa0\xa0\xa0If(Not(Is record loaded([Group])))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD([Groups];1)\n\xa0\xa0//Go to the first record in the selection\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"669"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(667294);let d={},o=r.createContext(d);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);