"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97227"],{247477:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/data-file","title":"Data file","description":"Data file {( segment )} : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/data-file.md","sourceDirName":"commands-legacy","slug":"/commands/data-file","permalink":"/docs/commands/data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdata-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"data-file","title":"Data file","slug":"/commands/data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create entity selection","permalink":"/docs/commands/create-entity-selection"},"next":{"title":"Database measures","permalink":"/docs/commands/database-measures"}}'),a=t("785893"),r=t("250065");let d={id:"data-file",title:"Data file",slug:"/commands/data-file",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Data file"})," {( ",(0,a.jsx)(n.em,{children:"segment"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"segment"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Obsolete, do not use"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Function result"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Long name of the data file for the database"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The Data file command returns the long name of the data file for the database with which you are currently working."}),"\n",(0,a.jsxs)(n.p,{children:["Starting with version 11 of 4D, data segments are no longer supported. The ",(0,a.jsx)(n.em,{children:"segment"})," parameter is now ignored and must no longer be used."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"On Windows"}),(0,a.jsx)(n.br,{}),"\nIf, for example, you are working with the database MyCDs located at \\DOCS\\MyCDs on the volume G, a call to ",(0,a.jsx)(n.strong,{children:"Data file"})," returns G:\\DOCS\\MyCDs\\MyCDs.4DD (provided that you accepted the default location and name proposed by 4D when you created the database)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"On Macintosh"}),(0,a.jsx)(n.br,{}),"\nIf, for example, you are working with the database located in the folder Documents:MyCDs\u0192: on the disk Macintosh HD, a call to ",(0,a.jsx)(n.strong,{children:"Data file"})," returns Macintosh HD:Documents:MyCDs\u0192:MyCDs.data (provided that you accepted the default location and name proposed by 4D when you created the database)."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WARNING:"})," If you call this command from 4D in remote mode, only the name of the data file is returned, not the long name."]}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/application-file",children:"Application file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/structure-file",children:"Structure file"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"490"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);