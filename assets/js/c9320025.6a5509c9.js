"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26678"],{879803:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/set-automatic-relations","title":"SET AUTOMATIC RELATIONS","description":"SET AUTOMATIC RELATIONS ( one {; many} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-automatic-relations.md","sourceDirName":"commands-legacy","slug":"/commands/set-automatic-relations","permalink":"/docs/commands/set-automatic-relations","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-automatic-relations.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-automatic-relations","title":"SET AUTOMATIC RELATIONS","slug":"/commands/set-automatic-relations","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAVE RELATED ONE","permalink":"/docs/commands/save-related-one"},"next":{"title":"SET FIELD RELATION","permalink":"/docs/commands/set-field-relation"}}'),a=s("785893"),r=s("250065");let i={id:"set-automatic-relations",title:"SET AUTOMATIC RELATIONS",slug:"/commands/set-automatic-relations",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"})," ( ",(0,a.jsx)(n.em,{children:"one"})," {; ",(0,a.jsx)(n.em,{children:"many"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"one"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Status of all Many-to-One relations"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"many"}),(0,a.jsx)(n.td,{children:"Boolean"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Status of all One-to-Many relations"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"})," temporarily changes all the manual relations into automatic relations for the entire database in the current process. The relations stay automatic unless a subsequent call to ",(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"})," is made."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.em,{children:"one"})," is true, then all manual Many-to-One relations will become automatic. If ",(0,a.jsx)(n.em,{children:"one"})," is false, all previously changed Many-to-One relations will revert to manual relations."]}),"\n",(0,a.jsxs)(n.li,{children:["The same is true for the ",(0,a.jsx)(n.em,{children:"many"})," parameter, except that manual One-to-Many relations are affected."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This command changes relations set as manual in the Design environment to automatic, just before executing operations that require them to be automatic (such as relational queries and sorts). After the operation is finished, relations can be changed back to manual by calling ",(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"})," again. Any relations set as automatic in the Design environment are not affected by this command."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["When you pass ",(0,a.jsx)(n.a,{href:"/docs/commands/true",title:"True",children:"True"})," to the ",(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"}),' command, the automatic mode is "locked" for all the manual relations during the session. In this case, any calls to the ',(0,a.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})," command during the same session are ignored, regardless of whether they are placed before or after ",(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"}),'. To "unlock" the automatic mode and take the calls to ',(0,a.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})," into account, pass ",(0,a.jsx)(n.a,{href:"/docs/commands/false",title:"False",children:"False"})," to ",(0,a.jsx)(n.strong,{children:"SET AUTOMATIC RELATIONS"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Automatic features are disabled when related tables are being viewed in a list form displayed using ",(0,a.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,a.jsx)(n.a,{href:"/docs/commands/modify-selection",children:"MODIFY SELECTION"}),", or a subform. See ",(0,a.jsx)(n.em,{children:"Automatic and manual relations"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"The following example makes all manual Many-to-One relations automatic and reverts any previously changed One-to-Many relations:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0SET AUTOMATIC RELATIONS(True;False)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"About Relations"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/selection-to-array",children:"SELECTION TO ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"310"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);