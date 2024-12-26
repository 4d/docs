"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48006"],{802070:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/goto-object","title":"GOTO OBJECT","description":"GOTO OBJECT ( { ;} object* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/goto-object.md","sourceDirName":"commands-legacy","slug":"/commands/goto-object","permalink":"/docs/commands/goto-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"goto-object","title":"GOTO OBJECT","slug":"/commands/goto-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHT","permalink":"/docs/commands/get-highlight"},"next":{"title":"HIGHLIGHT TEXT","permalink":"/docs/commands/highlight-text"}}'),o=t("785893"),r=t("250065");let i={id:"goto-object",title:"GOTO OBJECT",slug:"/commands/goto-object",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"GOTO OBJECT"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"object"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"If specified = object is an object name (string) If omitted = object is a field or a variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Field, Variable"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Object name (if * specified) or Field or Variable (if * omitted) to go to"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"GOTO OBJECT"})," command is used to select the data entry object ",(0,o.jsx)(n.em,{children:"object"})," as the active area of the form. It is equivalent to the user\u2019s clicking on or tabbing into the field or variable."]}),"\n",(0,o.jsxs)(n.p,{children:["If you specify the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, you indicate an object name (a string) in ",(0,o.jsx)(n.em,{children:"object"}),". If you omit the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, you indicate a field or a variable in ",(0,o.jsx)(n.em,{children:"object"}),". In this case, specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the section ",(0,o.jsx)(n.em,{children:"Object Properties"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To remove any focus in the current form, call the command while passing an empty object name in ",(0,o.jsx)(n.em,{children:"object"})," (see example 2)."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"GOTO OBJECT"})," command can be used in the context of a subform. When it is called from a subform, it first looks for the object in the subform, then, if the search does not find anything there, it extends the search to objects of the parent form."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"GOTO OBJECT"})," command can be used in both ways:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT([People]Name)\xa0// Field Reference\n\xa0GOTO OBJECT(*;"AgeArea")\xa0// Object Name\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"You don't want any object of the form to have the focus:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0GOTO OBJECT(*;"")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,o.jsxs)(n.p,{children:["See the example for the ",(0,o.jsx)(n.a,{href:"/docs/commands/reject",children:"REJECT"})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/call-subform-container",children:"CALL SUBFORM CONTAINER"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/reject",children:"REJECT"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"206"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);