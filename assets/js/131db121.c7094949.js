"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56200"],{110032:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/object-set-minimum-value","title":"OBJECT SET MINIMUM VALUE","description":"OBJECT SET MINIMUM VALUE ( { ;} object ; minValue* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-minimum-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-minimum-value","permalink":"/docs/commands/object-set-minimum-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-minimum-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-minimum-value","title":"OBJECT SET MINIMUM VALUE","slug":"/commands/object-set-minimum-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET MAXIMUM VALUE","permalink":"/docs/commands/object-set-maximum-value"},"next":{"title":"OBJECT SET MULTILINE","permalink":"/docs/commands/object-set-multiline"}}'),i=t("785893"),r=t("250065");let o={id:"object-set-minimum-value",title:"OBJECT SET MINIMUM VALUE",slug:"/commands/object-set-minimum-value",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function m(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET MINIMUM VALUE"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"minValue"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,i.jsx)(n.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minValue"}),(0,i.jsx)(n.td,{children:"Date, Time, Number"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Minimum value for object"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT SET MINIMUM VALUE"})," command modifies the minimum value of the object(s) designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters for the current process."]}),"\n",(0,i.jsxs)(n.p,{children:['The "Minimum Value" property can be applied to number, date or time type data. For more information, refer to ',(0,i.jsx)(n.em,{children:"Maximum and minimum values"})," in the ",(0,i.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,i.jsxs)(n.p,{children:["Passing the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"minValue"}),', pass the new minimum value you want to assign to the object for the current process. This value must correspond to the object type, otherwise error 18 "Field types are incompatible" is returned.']}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/object-get-minimum-value",children:"OBJECT GET MINIMUM VALUE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-maximum-value",children:"OBJECT SET MAXIMUM VALUE"})]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);