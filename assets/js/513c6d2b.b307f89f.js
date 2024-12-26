"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74839"],{147968:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/delete-folder","title":"DELETE FOLDER","description":"DELETE FOLDER ( folder {; deleteOption} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/delete-folder.md","sourceDirName":"commands-legacy","slug":"/commands/delete-folder","permalink":"/docs/commands/delete-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-folder","title":"DELETE FOLDER","slug":"/commands/delete-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE DOCUMENT","permalink":"/docs/commands/delete-document"},"next":{"title":"DOCUMENT LIST","permalink":"/docs/commands/document-list"}}'),d=t("785893"),r=t("250065");let l={id:"delete-folder",title:"DELETE FOLDER",slug:"/commands/delete-folder",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DELETE FOLDER"})," ( ",(0,d.jsx)(n.em,{children:"folder"})," {; ",(0,d.jsx)(n.em,{children:"deleteOption"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"folder"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Name or full path of the folder to be deleted"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"deleteOption"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Folder deletion option"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"DELETE FOLDER"})," command deletes the folder whose name or full path has been passed in ",(0,d.jsx)(n.em,{children:"folder"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["By default, for security reasons, if you omit the ",(0,d.jsx)(n.em,{children:"deleteOption"})," parameter, ",(0,d.jsx)(n.strong,{children:"DELETE FOLDER"})," only allows empty folders to be deleted. If you want the command to be able to delete non-empty folders, you must use the ",(0,d.jsx)(n.em,{children:"deleteOption"})," parameter. In ",(0,d.jsx)(n.em,{children:"deleteOption"}),', you can pass one of the following constants, found in the "',(0,d.jsx)(n.em,{children:"System Documents"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Delete only if empty"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Deletes folder only when it is empty"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Delete with contents"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Deletes folder along with everything it contains"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["When Delete only if empty (0) is passed or if you omit the ",(0,d.jsx)(n.em,{children:"deleteOption"})," parameter:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["The folder specified in the ",(0,d.jsx)(n.em,{children:"folder"})," parameter is only deleted if it is empty; otherwise, the command does nothing and an error -47 (The file is already open, or the folder is not empty) is generated."]}),"\n",(0,d.jsx)(n.li,{children:"If the folder specified does not exist , the error -120 (Tried to access a file by using a pathname that specifies a non existing directory) is generated."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["When Delete with contents (1) is passed:\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["The folder along with all of its contents are deleted.",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"Warning:"})," Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, they are still deleted."]}),"\n",(0,d.jsxs)(n.li,{children:["If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and an error(*) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use ",(0,d.jsx)(n.a,{href:"/docs/commands/last-errors",children:"Last errors"}),"  command to retrieve the name and path of the offending file."]}),"\n",(0,d.jsxs)(n.li,{children:["If the folder specified does not exist, the command does nothing and no error is returned.",(0,d.jsx)(n.br,{}),"\n(*) under Windows: -54 (Attempt to open locked file for writing)",(0,d.jsx)(n.br,{}),"\nunder OS X: -45 (The file is locked or the pathname is not correct)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["You can intercept these errors using a method installed by the ",(0,d.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/delete-document",children:"DELETE DOCUMENT"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"693"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let d={},r=s.createContext(d);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);