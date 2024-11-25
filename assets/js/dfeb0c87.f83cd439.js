"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61654"],{761493:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>r});var n=JSON.parse('{"id":"commands-legacy/set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","description":"SET FILE TO PASTEBOARD ( file {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-file-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-file-to-pasteboard","permalink":"/docs/commands/set-file-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-file-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","slug":"/commands/set-file-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard data size","permalink":"/docs/commands/pasteboard-data-size"},"next":{"title":"SET PICTURE TO PASTEBOARD","permalink":"/docs/commands/set-picture-to-pasteboard"}}'),a=s("785893"),o=s("250065");let r={id:"set-file-to-pasteboard",title:"SET FILE TO PASTEBOARD",slug:"/commands/set-file-to-pasteboard",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"SET FILE TO PASTEBOARD"})," ( ",(0,a.jsx)(t.em,{children:"file"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"file"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"File name or complete pathname of file"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"*"}),(0,a.jsx)(t.td,{children:"Operator"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"If passed = add; If omitted = replace"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,a.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The SET FILE TO PASTEBOARD command adds the complete pathname of the file passed in the ",(0,a.jsx)(t.em,{children:"file"})," parameter. This command can be used to set up interfaces allowing the drag and drop of 4D objects to files on the desktop for example."]}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.em,{children:"file"})," parameter, you can pass either a complete pathname or a simple file name (without a pathname). In the latter case, the file must be located next to the database structure file."]}),"\n",(0,a.jsxs)(t.p,{children:["The command accepts the star ",(0,a.jsx)(t.em,{children:"*"})," as an optional parameter. By default, when this parameter is omitted, the command replaces the contents of the pasteboard by the last pathname specified by ",(0,a.jsx)(t.em,{children:"file"}),". If you pass this parameter, the command adds the ",(0,a.jsx)(t.em,{children:"file"}),' to the pasteboard. This way it can contain a "stack" of file pathnames. In both cases, if data other than pathnames was present in the pasteboard, it is erased.']}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note:"})," The pasteboard is in read-only mode during the On Drag Over form event. It is therefore not possible to use this command in that context."]}),"\n",(0,a.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return r}});var n=s(667294);let a={},o=n.createContext(a);function r(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);