"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96317"],{534373:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-auto-spellcheck","title":"OBJECT SET AUTO SPELLCHECK","description":"OBJECT SET AUTO SPELLCHECK ( { ;} object ; autoSpellcheck* )","source":"@site/versioned_docs/version-20-R9/commands-legacy/object-set-auto-spellcheck.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-auto-spellcheck","permalink":"/docs/commands/object-set-auto-spellcheck","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-auto-spellcheck.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-auto-spellcheck","title":"OBJECT SET AUTO SPELLCHECK","slug":"/commands/object-set-auto-spellcheck","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ACTION","permalink":"/docs/commands/object-set-action"},"next":{"title":"OBJECT SET BORDER STYLE","permalink":"/docs/commands/object-set-border-style"}}'),c=n("785893"),o=n("250065");let r={id:"object-set-auto-spellcheck",title:"OBJECT SET AUTO SPELLCHECK",slug:"/commands/object-set-auto-spellcheck",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"OBJECT SET AUTO SPELLCHECK"})," ( {* ;} ",(0,c.jsx)(t.em,{children:"object"})," ; ",(0,c.jsx)(t.em,{children:"autoSpellcheck"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Parameter"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"*"}),(0,c.jsx)(t.td,{children:"Operator"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable or field"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"object"}),(0,c.jsx)(t.td,{children:"any"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"Object Name (if * is specified) or Variable or field (if * is omitted)"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"autoSpellcheck"}),(0,c.jsx)(t.td,{children:"Boolean"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"True = automatic spell-checking,False= no automatic spell-checking"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.strong,{children:"OBJECT SET AUTO SPELLCHECK"})," command sets or dynamically modifies the status of the ",(0,c.jsx)(t.strong,{children:"Auto spellcheck"})," option for the object(s) designated by the ",(0,c.jsx)(t.em,{children:"object"})," and ",(0,c.jsx)(t.em,{children:"*"})," parameters for the current process. This option enables or disables the automatic spellcheck when data is entered for the object (Text type objects only)."]}),"\n",(0,c.jsxs)(t.p,{children:["If you pass the optional ",(0,c.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,c.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,c.jsx)(t.em,{children:"object"})," is a variable or a field. In this case, you pass a reference instead of a name."]}),"\n",(0,c.jsxs)(t.p,{children:["Pass ",(0,c.jsx)(t.strong,{children:"True"})," in ",(0,c.jsx)(t.em,{children:"autoSpellcheck"})," to enable this function for the object, and ",(0,c.jsx)(t.strong,{children:"False"})," to disable it."]}),"\n",(0,c.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/commands/object-get-auto-spellcheck",children:"OBJECT Get auto spellcheck"})}),"\n",(0,c.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Command number"}),(0,c.jsx)(t.td,{children:"1173"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Thread safe"}),(0,c.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var s=n(667294);let c={},o=s.createContext(c);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);