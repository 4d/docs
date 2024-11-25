"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97640"],{344129:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/form-edit","title":"FORM EDIT","description":"FORM EDIT ( {aTable ;} form )","source":"@site/versioned_docs/version-20-R7/commands-legacy/form-edit.md","sourceDirName":"commands-legacy","slug":"/commands/form-edit","permalink":"/docs/commands/form-edit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-edit.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-edit","title":"FORM EDIT","slug":"/commands/form-edit","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current method path","permalink":"/docs/commands/current-method-path"},"next":{"title":"FORM GET NAMES","permalink":"/docs/commands/form-get-names"}}'),r=t("785893"),o=t("250065");let d={id:"form-edit",title:"FORM EDIT",slug:"/commands/form-edit",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FORM EDIT"})," ( {",(0,r.jsx)(n.em,{children:"aTable"})," ;} ",(0,r.jsx)(n.em,{children:"form"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table owning the form or If omitted: default table or use of project form"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"form"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Form name"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"FORM EDIT"})," command opens the ",(0,r.jsx)(n.em,{children:"form"})," associated to ",(0,r.jsx)(n.em,{children:"aTable"}),' in the 4D Form editor. Note that you must have access to the Design environment, otherwise the error -9804 ("Cannot open form") is generated.']}),"\n",(0,r.jsx)(n.p,{children:"The command is asynchronous: it returns immediately to the calling method and does not wait for the form to be open."}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"aTable"})," parameter, you indicate the table associated with ",(0,r.jsx)(n.em,{children:"form"}),". If you omit this parameter, you indicate that ",(0,r.jsx)(n.em,{children:"form"})," is a project form."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"form"}),' parameter, pass the name of the form to open in the 4D Form editor. If you pass a name that does not exist, the error 81 is generated ("Form not found").']}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["To open the ",(0,r.jsx)(n.em,{children:"Contacts"})," table ",(0,r.jsx)(n.em,{children:"Address"})," form:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0FORM EDIT([Contacts];"Address")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To open the ",(0,r.jsx)(n.em,{children:"ContactList"})," project form:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0FORM EDIT("ContactList")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Design Object Access Commands"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);