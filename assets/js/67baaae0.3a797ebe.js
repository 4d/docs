"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52336"],{229143:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/verify-current-data-file","title":"VERIFY CURRENT DATA FILE","description":"VERIFY CURRENT DATA FILE {( objects ; options ; method {; tablesArray {; fieldsArray}} )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/verify-current-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/verify-current-data-file","permalink":"/docs/commands/verify-current-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-current-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify-current-data-file","title":"VERIFY CURRENT DATA FILE","slug":"/commands/verify-current-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"USE ENTITY SELECTION","permalink":"/docs/commands/use-entity-selection"},"next":{"title":"VERIFY DATA FILE","permalink":"/docs/commands/verify-data-file"}}'),s=t("785893"),i=t("250065");let d={id:"verify-current-data-file",title:"VERIFY CURRENT DATA FILE",slug:"/commands/verify-current-data-file",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VERIFY CURRENT DATA FILE"})," {( ",(0,s.jsx)(n.em,{children:"objects"})," ; ",(0,s.jsx)(n.em,{children:"options"})," ; ",(0,s.jsx)(n.em,{children:"method"})," {; ",(0,s.jsx)(n.em,{children:"tablesArray"})," {; ",(0,s.jsx)(n.em,{children:"fieldsArray"}),"}} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objects"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objects to check"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Checking options"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"method"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of 4D callback method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tablesArray"}),(0,s.jsx)(n.td,{children:"Array integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Numbers of tables to be checked"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldsArray"}),(0,s.jsx)(n.td,{children:"2D Integer array, 2D Integer array, 2D Real array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Numbers of indexes to be checked"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The VERIFY CURRENT DATA FILE command carries out a structural check of the objects found in the data file currently opened by 4D."}),"\n",(0,s.jsxs)(n.p,{children:["This command has the same functioning as the ",(0,s.jsx)(n.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})," command, except that it only applies to the current data file of the open database. It therefore does not require parameters specifying the structure and data."]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})," command for a description of the parameters."]}),"\n",(0,s.jsx)(n.p,{children:"If you pass the VERIFY CURRENT DATA FILE command with no parameters, the verification is carried out with the default values of the parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"objects"})," = Verify All (= value 16)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"options"})," = 0 (log file is created but not timestamped)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"method"}),' = ""']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"tablesArray"})," and ",(0,s.jsx)(n.em,{children:"fieldsArray"})," are omitted."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When this command is executed, the data cache is flushed and all operations accessing the data are blocked during the verification."}),"\n",(0,s.jsxs)(n.p,{children:["If a log file has been generated, its complete pathname is returned in the ",(0,s.jsx)(n.em,{children:"Document"})," system variable."]}),"\n",(0,s.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsx)(n.p,{children:"If the callback method does not exist, the verification is not carried out, an error is generated and the system variable OK is set to 0. If a log file was generated, its complete pathname is returned in the Document system variable."}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/verify-data-file",children:"VERIFY DATA FILE"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1008"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);