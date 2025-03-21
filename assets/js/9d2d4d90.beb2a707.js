"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28672"],{732670:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/load-variables","title":"LOAD VARIABLES","description":"LOAD VARIABLES ( document ; variable {; variable2 ; ... ; variableN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/load-variables.md","sourceDirName":"commands-legacy","slug":"/commands/load-variables","permalink":"/docs/20-R7/commands/load-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-variables","title":"LOAD VARIABLES","slug":"/commands/load-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR VARIABLE","permalink":"/docs/20-R7/commands/clear-variable"},"next":{"title":"SAVE VARIABLES","permalink":"/docs/20-R7/commands/save-variables"}}'),a=s("785893"),t=s("250065");let d={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"LOAD VARIABLES"})," ( ",(0,a.jsx)(n.em,{children:"document"})," ; ",(0,a.jsx)(n.em,{children:"variable"})," {; ",(0,a.jsx)(n.em,{children:"variable2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"document"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Document containing 4D variables"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"variable"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Variable(s) to receive the value(s)"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"LOAD VARIABLES"}),"  command loads one or more variables from the document specified by ",(0,a.jsx)(n.em,{children:"document"}),". The document must have been created using the ",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/save-variables",children:"SAVE VARIABLES"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:["The variables ",(0,a.jsx)(n.em,{children:"variable"}),", ",(0,a.jsx)(n.em,{children:"variable2"}),"...",(0,a.jsx)(n.em,{children:"variableN"})," are created; if they already exist, they are overwritten."]}),"\n",(0,a.jsxs)(n.p,{children:["If you supply an empty string for ",(0,a.jsx)(n.em,{children:"document"}),", the standard Open File dialog box appears, so the user can choose the document to open. If a document is chosen, the 4D system variable Document is set to the name of the document."]}),"\n",(0,a.jsx)(n.p,{children:"In compiled databases, each variable must be of the same type as those loaded from disk."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WARNING:"})," This command does not support array variables. Use the new BLOB commands instead."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"The following example loads three variables from a document named UserPrefs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("User Prefs";vsName;vlCode;vgIconPicture)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,a.jsx)(n.p,{children:"If the variables are loaded properly, the OK system variable is set to 1; otherwise it is set to 0."}),"\n",(0,a.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/20-R7/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"74"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifies variables"}),(0,a.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let a={},t=r.createContext(a);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);