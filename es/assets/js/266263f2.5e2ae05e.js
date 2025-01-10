"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74657"],{380310:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/set-allowed-methods","title":"SET ALLOWED METHODS","description":"SET ALLOWED METHODS ( methodsArray )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/set-allowed-methods.md","sourceDirName":"commands","slug":"/commands/set-allowed-methods","permalink":"/docs/es/commands/set-allowed-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fset-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-allowed-methods","title":"SET ALLOWED METHODS","slug":"/commands/set-allowed-methods","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Parse formula","permalink":"/docs/es/commands/parse-formula"},"next":{"title":"Graphs","permalink":"/docs/es/category/graphs"}}'),o=s("785893"),r=s("250065");let d={id:"set-allowed-methods",title:"SET ALLOWED METHODS",slug:"/commands/set-allowed-methods",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET ALLOWED METHODS"})," ( ",(0,o.jsx)(n.em,{children:"methodsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"methodsArray"}),(0,o.jsx)(n.td,{children:"Text array"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Array of method names"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"SET ALLOWED METHODS"})," command designates the project methods that can be entered via the application."]}),"\n",(0,o.jsx)(n.p,{children:"4D includes a security mechanism that filters enterable project methods from the following contexts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The formula editor - allowed methods appear at the end of the list of default commands and can be used in formulas (see section ",(0,o.jsx)(n.em,{children:"Description of formula editor"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["The label editor - the allowed methods are listed in the ",(0,o.jsx)(n.strong,{children:"Apply"})," menu if they are also shared with the component (see section ",(0,o.jsx)(n.em,{children:"Description of label editor"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Formulas inserted in styled text areas or 4D Write Pro documents through the ",(0,o.jsx)(n.a,{href:"/docs/es/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})," command - disallowed methods are automatically rejected."]}),"\n",(0,o.jsxs)(n.li,{children:["4D View Pro documents - by default, if the ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-allowed-methods",children:(0,o.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})})," command has never been called during the session, 4D View Pro formulas only accept methods defined by ",(0,o.jsx)(n.strong,{children:"SET ALLOWED METHODS"}),". However, using ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-allowed-methods",children:(0,o.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})})," is recommended. See ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/formulas#declaring-allowed-methods",children:"Declaring allowed method"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, if you do not use the ",(0,o.jsx)(n.strong,{children:"SET ALLOWED METHODS"})," command, no method is enterable (using an unauthorized method in an expression causes an error)."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"methodsArray"})," parameter, pass the name of an array containing the list of methods to allow. The array must have been set previously."]}),"\n",(0,o.jsx)(n.p,{children:"You can use the wildcard character (@) in method names to define one or more authorized method groups."}),"\n",(0,o.jsx)(n.p,{children:"If you would like the user to be able to call 4D commands that are unauthorized by default or plug-in commands, you must use specific methods that handle these commands."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," Formula filtering access can be disabled for all users or for the Designer and Administrator via ",(0,o.jsx)(n.a,{href:"/docs/es/settings/security#options",children:'an option on the "Security" page of the Settings'}),'. If the "Disabled for all" option is checked, the ',(0,o.jsx)(n.strong,{children:"SET ALLOWED METHODS"})," command will have no effect."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["This command only filters the ",(0,o.jsx)(n.strong,{children:"input"})," of methods, not their ",(0,o.jsx)(n.strong,{children:"execution"}),". It does not control the execution of formulas created outside the application."]})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"This example authorizes all methods starting with \u201Cformula\u201D and the \u201CTotal_general\u201D method to be entered by the user in protected contexts:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(methodsArray;2)\n\xa0methodsArray{1}:="formula@"\n\xa0methodsArray{2}:="Total_general"\n\xa0SET ALLOWED METHODS(methodsArray)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/edit-formula",children:"EDIT FORMULA"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/get-allowed-methods",children:"GET ALLOWED METHODS"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"805"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"&amp;amp;amp;amp;amp;amp;amp;amp;cross;"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var t=s(667294);let o={},r=t.createContext(o);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);