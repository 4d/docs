"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53781"],{918960:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","description":"FORM SET VERTICAL RESIZING ( resize {; minHeight {; maxHeight}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/form-set-vertical-resizing.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-vertical-resizing","permalink":"/docs/20-R8/commands/form-set-vertical-resizing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-vertical-resizing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-set-vertical-resizing","title":"FORM SET VERTICAL RESIZING","slug":"/commands/form-set-vertical-resizing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET SIZE","permalink":"/docs/20-R8/commands/form-set-size"},"next":{"title":"FORM UNLOAD","permalink":"/docs/20-R8/commands/form-unload"}}'),t=s("785893"),i=s("250065");let d={id:"form-set-vertical-resizing",title:"FORM SET VERTICAL RESIZING",slug:"/commands/form-set-vertical-resizing",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM SET VERTICAL RESIZING"})," ( ",(0,t.jsx)(n.em,{children:"resize"})," {; ",(0,t.jsx)(n.em,{children:"minHeight"})," {; ",(0,t.jsx)(n.em,{children:"maxHeight"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resize"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"True: The form can be resized verticallyFalse: The form cannot be resized vertically"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"minHeight"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Smallest form height allowed (pixels)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"maxHeight"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Largest form height allowed (pixels)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"FORM SET VERTICAL RESIZING"})," command allows you to change the vertical resizing properties of the current form through programming. By default, these properties are set in the Design environment Form editor. New properties are set for the current process; they are not stored with the form."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"resize"})," parameter lets you set whether the form can be resized vertically; in other words, if the height can be changed (manually by the user or through programming)."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass ",(0,t.jsx)(n.strong,{children:"True"}),", the form height can be modified by the user; 4D uses values passed in ",(0,t.jsx)(n.em,{children:"minHeight"})," and ",(0,t.jsx)(n.em,{children:"maxHeight"})," as markers."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass ",(0,t.jsx)(n.strong,{children:"False"}),", the current form height cannot be changed; in this case, there is no need to pass values in the ",(0,t.jsx)(n.em,{children:"minHeight"})," and ",(0,t.jsx)(n.em,{children:"maxHeight"})," parameters."]}),"\n",(0,t.jsxs)(n.p,{children:["If you passed ",(0,t.jsx)(n.strong,{children:"True"})," in the first parameter, you can pass new minimum and maximum heights (in pixels) in the optional ",(0,t.jsx)(n.em,{children:"minHeight"})," and ",(0,t.jsx)(n.em,{children:"maxHeight"})," parameters. If you leave these parameters out, the values set in the Design environment (if any) are used."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the example of the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/form-set-size",children:"FORM SET SIZE"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/form-get-vertical-resizing",children:"FORM GET VERTICAL RESIZING"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/form-set-horizontal-resizing",children:"FORM SET HORIZONTAL RESIZING"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/form-set-size",children:"FORM SET SIZE"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"893"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);