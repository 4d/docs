"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78003"],{80682:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/move-document","title":"MOVE DOCUMENT","description":"MOVE DOCUMENT ( srcPathname ; dstPathname )","source":"@site/versioned_docs/version-20-R9/commands-legacy/move-document.md","sourceDirName":"commands-legacy","slug":"/commands/move-document","permalink":"/docs/commands/move-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmove-document.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"move-document","title":"MOVE DOCUMENT","slug":"/commands/move-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Localized document path","permalink":"/docs/commands/localized-document-path"},"next":{"title":"Object to path","permalink":"/docs/commands/object-to-path"}}'),d=t("785893"),o=t("250065");let c={id:"move-document",title:"MOVE DOCUMENT",slug:"/commands/move-document",displayed_sidebar:"docs"},r=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function i(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"MOVE DOCUMENT"})," ( ",(0,d.jsx)(n.em,{children:"srcPathname"})," ; ",(0,d.jsx)(n.em,{children:"dstPathname"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"srcPathname"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Full pathname to existing document"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dstPathname"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Destination pathname"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"MOVE DOCUMENT"})," command moves or renames a document."]}),"\n",(0,d.jsxs)(n.p,{children:["You specify the full pathname to the document in ",(0,d.jsx)(n.em,{children:"srcPathname"})," and the new name and/or new location for the document in ",(0,d.jsx)(n.em,{children:"dstPathname"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Warning:"})," Using ",(0,d.jsx)(n.strong,{children:"MOVE DOCUMENT"}),", you can move a document from and to any directory on the same volume. If you want to move a document between two distinct volumes, use ",(0,d.jsx)(n.a,{href:"/docs/commands/copy-document",children:"COPY DOCUMENT"})," to \u201Cmove\u201D the document then delete the original copy of the document using ",(0,d.jsx)(n.a,{href:"/docs/commands/delete-document",children:"DELETE DOCUMENT"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsx)(n.p,{children:"The following example renames the document DocName:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\FOLDER\\\\DocName";"C:\\\\FOLDER\\\\NewDocName")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(n.p,{children:"The following example moves and renames the document DocName:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\FOLDER1\\\\DocName";"C:\\\\FOLDER2\\\\NewDocName")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,d.jsx)(n.p,{children:"The following example moves the document DocName:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0MOVE DOCUMENT("C:\\\\FOLDER1\\\\DocName";"C:\\\\FOLDER2\\\\DocName")\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," In the last two examples, the destination folder ",(0,d.jsx)(n.em,{children:'"C:\\\\FOLDER2"'})," must exist. The MOVE DOCUMENT command only moves a document; it does not create folders."]}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/copy-document",children:"COPY DOCUMENT"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"540"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(667294);let d={},o=s.createContext(d);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);