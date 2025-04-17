"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80806"],{689807:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-document-icon","title":"GET DOCUMENT ICON","description":"GET DOCUMENT ICON ( docPath ; icon {; size} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-document-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-icon","permalink":"/docs/20-R8/commands/get-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-document-icon","title":"GET DOCUMENT ICON","slug":"/commands/get-document-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FOLDER LIST","permalink":"/docs/20-R8/commands/folder-list"},"next":{"title":"Get document position","permalink":"/docs/20-R8/commands/get-document-position"}}'),i=t("785893"),r=t("250065");let c={id:"get-document-icon",title:"GET DOCUMENT ICON",slug:"/commands/get-document-icon",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET DOCUMENT ICON"})," ( ",(0,i.jsx)(n.em,{children:"docPath"})," ; ",(0,i.jsx)(n.em,{children:"icon"})," {; ",(0,i.jsx)(n.em,{children:"size"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"docPath"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Name or path of document to get icon, or Empty string for standard Open File dialog box"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icon"}),(0,i.jsx)(n.td,{children:"Picture, Picture"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Document icon"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Size of the returned picture (in pixels)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The GET DOCUMENT ICON command returns, in the 4D picture variable or field ",(0,i.jsx)(n.em,{children:"icon"}),", the icon of the document whose name or complete pathname is passed in ",(0,i.jsx)(n.em,{children:"docPath"}),".can specify a file of any type (executable, document, shortcut or alias, etc.) or a folder."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"docPath"})," contains the full pathname of the document. You can also pass the document name only or a relative pathname, in this case the document must be placed in the database current working directory (usually, the folder containing the database structure file).",(0,i.jsx)(n.br,{}),"\nIf you pass an empty string in ",(0,i.jsx)(n.em,{children:"docPath"}),", the standard Open File dialog box appears. The user can then select the file to read. Once the dialog box is validated, the Document system variable contains the full pathname to the selected file."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass a 4D picture field or variable in ",(0,i.jsx)(n.em,{children:"icon"}),". After the command is executed, this parameter contains the icon of the file (PICT format)."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"size"})," parameter sets the dimensions in pixels of the returned icon. This value actually represents the side length of the square including the icon. Icons are usually defined in 32x32 pixels (\u201Clarge icons\u201D) or 16x16 pixels (\u201Csmall icons\u201D). If you pass 0 or omit this parameter, the largest available icon is returned."]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"700"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifies variables"}),(0,i.jsx)(n.td,{children:"Document, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var s=t(667294);let i={},r=s.createContext(i);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);