"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26076"],{747439:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-get-auto-spellcheck","title":"OBJECT Get auto spellcheck","description":"OBJECT Get auto spellcheck ( { ;} object* ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-auto-spellcheck.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-auto-spellcheck","permalink":"/docs/20-R7/commands/object-get-auto-spellcheck","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-auto-spellcheck.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-auto-spellcheck","title":"OBJECT Get auto spellcheck","slug":"/commands/object-get-auto-spellcheck","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get action","permalink":"/docs/20-R7/commands/object-get-action"},"next":{"title":"OBJECT GET BEST SIZE","permalink":"/docs/20-R7/commands/object-get-best-size"}}'),c=n("785893"),o=n("250065");let r={id:"object-get-auto-spellcheck",title:"OBJECT Get auto spellcheck",slug:"/commands/object-get-auto-spellcheck",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"OBJECT Get auto spellcheck"})," ( {* ;} ",(0,c.jsx)(t.em,{children:"object"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Parameter"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"*"}),(0,c.jsx)(t.td,{children:"Operator"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable or field"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"object"}),(0,c.jsx)(t.td,{children:"any"}),(0,c.jsx)(t.td,{children:"\u2192"}),(0,c.jsx)(t.td,{children:"Object Name (if * is specified) or Variable or field (if * is omitted)"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Function result"}),(0,c.jsx)(t.td,{children:"Boolean"}),(0,c.jsx)(t.td,{children:"\u2190"}),(0,c.jsx)(t.td,{children:"True = automatic spell-checking, False = no automatic spell-checking"})]})]})]}),"\n",(0,c.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.strong,{children:"OBJECT Get auto spellcheck"})," command returns the status of the Auto spellcheck option for the object(s) designated by the ",(0,c.jsx)(t.em,{children:"object"})," and ",(0,c.jsx)(t.em,{children:"*"})," parameters for the current process."]}),"\n",(0,c.jsxs)(t.p,{children:["If you pass the optional ",(0,c.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,c.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,c.jsx)(t.em,{children:"object"})," is a variable or a field. In this case, you pass a reference instead of a name."]}),"\n",(0,c.jsxs)(t.p,{children:["The command returns ",(0,c.jsx)(t.strong,{children:"True"})," when automatic spell-checking is enabled for the ",(0,c.jsx)(t.em,{children:"object"})," and ",(0,c.jsx)(t.strong,{children:"False"})," when it is not."]}),"\n",(0,c.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/20-R7/commands/object-set-auto-spellcheck",children:"OBJECT SET AUTO SPELLCHECK"})}),"\n",(0,c.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{}),(0,c.jsx)(t.th,{})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Command number"}),(0,c.jsx)(t.td,{children:"1174"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"Thread safe"}),(0,c.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var s=n(667294);let c={},o=s.createContext(c);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);