"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34492"],{658343:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"commands-legacy/resolve-alias","title":"RESOLVE ALIAS","description":"RESOLVE ALIAS ( aliasPath ; targetPath )","source":"@site/versioned_docs/version-20-R7/commands-legacy/resolve-alias.md","sourceDirName":"commands-legacy","slug":"/commands/resolve-alias","permalink":"/docs/20-R7/commands/resolve-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresolve-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resolve-alias","title":"RESOLVE ALIAS","slug":"/commands/resolve-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Path to object","permalink":"/docs/20-R7/commands/path-to-object"},"next":{"title":"Select document","permalink":"/docs/20-R7/commands/select-document"}}'),a=t("785893"),r=t("250065");let i={id:"resolve-alias",title:"RESOLVE ALIAS",slug:"/commands/resolve-alias",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let s={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"RESOLVE ALIAS"})," ( ",(0,a.jsx)(s.em,{children:"aliasPath"})," ; ",(0,a.jsx)(s.em,{children:"targetPath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"aliasPath"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Name or access path of the alias/shortcut"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"targetPath"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Name or access path of the alias/shortcut target"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(s.p,{children:"The RESOLVE ALIAS command returns the full path to the target file or folder of the alias (named shortcut under Windows)."}),"\n",(0,a.jsxs)(s.p,{children:["The full path to the alias is passed in ",(0,a.jsx)(s.em,{children:"aliasPath"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Once the command has been executed, the ",(0,a.jsx)(s.em,{children:"targetPath"})," variable contains the full path to the target file or folder of the alias and the OK system variable is set to 1."]}),"\n",(0,a.jsxs)(s.p,{children:["If the path passed in ",(0,a.jsx)(s.em,{children:"aliasPath"})," corresponds to a file and not an alias, ",(0,a.jsx)(s.em,{children:"targetPath"})," returns the path of the file and the OK system variable is set to 0."]}),"\n",(0,a.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.em,{children:"aliasPath"})," does specify an alias/shortcut, the OK system variable is set to 1. If ",(0,a.jsx)(s.em,{children:"aliasPath"})," specifies a standard file, the OK system variable is set to 0."]}),"\n",(0,a.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/docs/20-R7/commands/create-alias",children:"CREATE ALIAS"})}),"\n",(0,a.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Command number"}),(0,a.jsx)(s.td,{children:"695"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread safe"}),(0,a.jsx)(s.td,{children:"\u2713"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Modifies variables"}),(0,a.jsx)(s.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return i}});var n=t(667294);let a={},r=n.createContext(a);function i(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);