"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41745"],{585542:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/delete-document","title":"DELETE DOCUMENT","description":"DELETE DOCUMENT ( document )","source":"@site/versioned_docs/version-20-R9/commands-legacy/delete-document.md","sourceDirName":"commands-legacy","slug":"/commands/delete-document","permalink":"/docs/commands/delete-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-document","title":"DELETE DOCUMENT","slug":"/commands/delete-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE FOLDER","permalink":"/docs/commands/create-folder"},"next":{"title":"DELETE FOLDER","permalink":"/docs/commands/delete-folder"}}'),d=t("785893"),r=t("250065");let l={id:"delete-document",title:"DELETE DOCUMENT",slug:"/commands/delete-document",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," ( ",(0,d.jsx)(n.em,{children:"document"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"document"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Document name or Full document pathname"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," command deletes the document whose name you pass in ",(0,d.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"If the document name or the entered path name is incorrect, an error is generated."}),"\n",(0,d.jsx)(n.p,{children:"If the document is open when the command is called, the result depends on the OS:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"on Windows, an error is generated,"}),"\n",(0,d.jsx)(n.li,{children:"on macOS, no error is generated and the document is deleted."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," doesn\u2019t accept an empty string argument for ",(0,d.jsx)(n.em,{children:"document"}),". If an empty string is used, the Open File dialog box is not displayed and an error is generated."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"WARNING:"})," ",(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," can delete any file on a disk. This includes documents created with other applications as well as the applications themselves. ",(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," should be used with extreme caution. Deleting a document is a permanent operation and cannot be undone."]}),"\n",(0,d.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsx)(n.p,{children:"The following example deletes the document named Note:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0DELETE DOCUMENT("Note")\xa0// Delete the document\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsxs)(n.p,{children:["See example for the ",(0,d.jsx)(n.a,{href:"/docs/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,d.jsxs)(n.p,{children:["Deleting a document sets the OK system variable to 1. If ",(0,d.jsx)(n.strong,{children:"DELETE DOCUMENT"})," can\u2019t delete the document, the OK system variable is set to 0."]}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/test-path-name",children:"Test path name"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"159"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);