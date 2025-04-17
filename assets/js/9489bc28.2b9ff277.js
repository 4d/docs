"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3840"],{752054:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-set-action","title":"OBJECT SET ACTION","description":"OBJECT SET ACTION ( { ;} object ; action* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-action.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-action","permalink":"/docs/20-R8/commands/object-set-action","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-action.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-action","title":"OBJECT SET ACTION","slug":"/commands/object-set-action","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT MOVE","permalink":"/docs/20-R8/commands/object-move"},"next":{"title":"OBJECT SET AUTO SPELLCHECK","permalink":"/docs/20-R8/commands/object-set-auto-spellcheck"}}'),i=n("785893"),r=n("250065");let a={id:"object-set-action",title:"OBJECT SET ACTION",slug:"/commands/object-set-action",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT SET ACTION"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"action"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or",(0,i.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"action"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Name of action to associate (including parameters if necessary)"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"OBJECT SET ACTION"})," command modifies the standard action associated with the object(s) designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["Passing the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.em,{children:"action"})," parameter, pass a string containing the name of the standard action to associate with the object, or a constant from the ",(0,i.jsx)(t.em,{children:"Standard Action"})," theme. Optionally, the action can have parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["For detailed information on action names, please refer to the ",(0,i.jsx)(t.em,{children:"Standard actions"})," section in the ",(0,i.jsx)(t.em,{children:"4D Design Reference"})," manual."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Compatibility Note:"}),' Legacy constants (prefixed by _o_ in the "',(0,i.jsx)(t.em,{children:"Standard Action"}),'" theme) are deprecated starting with 4D v16 R3. However, they are still supported for compatibility.']}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["You want to associate the ",(0,i.jsx)(t.strong,{children:"Validate"})," standard action with a button:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET ACTION(*;"bValidate";ak accept)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/object-get-action",children:"OBJECT Get action"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1259"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var s=n(667294);let i={},r=s.createContext(i);function a(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);