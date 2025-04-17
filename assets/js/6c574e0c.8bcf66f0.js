"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8106"],{622199:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-get-border-style","title":"OBJECT Get border style","description":"OBJECT Get border style ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-border-style.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-border-style","permalink":"/docs/20-R8/commands/object-get-border-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-border-style.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-border-style","title":"OBJECT Get border style","slug":"/commands/object-get-border-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET BEST SIZE","permalink":"/docs/20-R8/commands/object-get-best-size"},"next":{"title":"OBJECT Get context menu","permalink":"/docs/20-R8/commands/object-get-context-menu"}}'),s=t("785893"),d=t("250065");let i={id:"object-get-border-style",title:"OBJECT Get border style",slug:"/commands/object-get-border-style",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get border style"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Border line style"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OBJECT Get border style"})," command returns the border line style of the object(s) designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["You can set the border line style for an object in Design mode using the Property List, or using the ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,s.jsxs)(n.p,{children:['The command returns a value corresponding to the border line style. You can compare the value received with the following constants, found in the "',(0,s.jsx)(n.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Dotted"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Objects appear framed with a dotted 1-pt. border line"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Double"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Objects appear framed with a double line, i.e., two continuous 1-pt. lines separated by a pixel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border None"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Objects appear with no border"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Plain"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Objects appear framed with a continuous 1-pt. border line"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Raised"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Objects appear framed with a 3D effect (raised)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Sunken"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Objects appear framed with a sunken 3D effect"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border System"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"The border line is drawn based on the graphic specifications of the system"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1263"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);