"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21251"],{120627:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>a,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/is-data-file-locked","title":"Is data file locked","description":"Is data file locked  : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/is-data-file-locked.md","sourceDirName":"commands-legacy","slug":"/commands/is-data-file-locked","permalink":"/docs/commands/is-data-file-locked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-data-file-locked.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-data-file-locked","title":"Is data file locked","slug":"/commands/is-data-file-locked","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is compiled mode","permalink":"/docs/commands/is-compiled-mode"},"next":{"title":"NOTIFY RESOURCES FOLDER MODIFICATION","permalink":"/docs/commands/notify-resources-folder-modification"}}'),s=t("785893"),i=t("250065");let l={id:"is-data-file-locked",title:"Is data file locked",slug:"/commands/is-data-file-locked",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function r(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is data file locked"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = file/segment locked False = file/segment not locked"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The Is data file locked command returns True if the data file of the open database or at least one of its segments is locked \u2014 i.e. write protected."}),"\n",(0,s.jsx)(n.p,{children:"Placed, for instance, in the , this command enables the prevention of any risk of accidental opening of a locked data file."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This method will prevent the opening of the database if the data file is locked:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0ALERT("The data file is locked. Impossible to open database.")\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"716"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var d=t(667294);let s={},i=d.createContext(s);function l(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);