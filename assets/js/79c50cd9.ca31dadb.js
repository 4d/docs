"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88420"],{519673:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-relation-properties","title":"GET RELATION PROPERTIES","description":"GET RELATION PROPERTIES ( fieldPtr ; oneTable ; oneField {; choiceField {; autoOne {; autoMany}}} )GET RELATION PROPERTIES ( tableNum ; fieldNum ; oneTable ; oneField {; choiceField {; autoOne {; autoMany}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-relation-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-relation-properties","permalink":"/docs/20-R8/commands/get-relation-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-relation-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-relation-properties","title":"GET RELATION PROPERTIES","slug":"/commands/get-relation-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/20-R8/commands/get-missing-table-names"},"next":{"title":"GET TABLE PROPERTIES","permalink":"/docs/20-R8/commands/get-table-properties"}}'),i=r("785893"),s=r("250065");let d={id:"get-relation-properties",title:"GET RELATION PROPERTIES",slug:"/commands/get-relation-properties",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ",(0,i.jsx)(n.em,{children:"fieldPtr"})," ; ",(0,i.jsx)(n.em,{children:"oneTable"})," ; ",(0,i.jsx)(n.em,{children:"oneField"})," {; ",(0,i.jsx)(n.em,{children:"choiceField"})," {; ",(0,i.jsx)(n.em,{children:"autoOne"})," {; ",(0,i.jsx)(n.em,{children:"autoMany"}),"}}} )",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ",(0,i.jsx)(n.em,{children:"tableNum"})," ; ",(0,i.jsx)(n.em,{children:"fieldNum"})," ; ",(0,i.jsx)(n.em,{children:"oneTable"})," ; ",(0,i.jsx)(n.em,{children:"oneField"})," {; ",(0,i.jsx)(n.em,{children:"choiceField"})," {; ",(0,i.jsx)(n.em,{children:"autoOne"})," {; ",(0,i.jsx)(n.em,{children:"autoMany"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldPtr|tableNum"}),(0,i.jsx)(n.td,{children:"Pointer, Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field pointer or table number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field number if the table number is passed as first parameter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oneTable"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"One table number or 0 if no relation is defined from the field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oneField"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"One field number or 0 if no relation is defined from the field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"choiceField"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Choice field number or 0 if no choice field"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoOne"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = Auto relate one, False = Manual relate one"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoMany"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = Auto one to many, False = Manual one to many"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The GET RELATION PROPERTIES command returns the properties of the relation (if any) which starts from the source field defined by ",(0,i.jsx)(n.em,{children:"tableNum"})," and ",(0,i.jsx)(n.em,{children:"fieldNum"})," or by ",(0,i.jsx)(n.em,{children:"fieldPtr"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can pass:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Either table and field numbers in ",(0,i.jsx)(n.em,{children:"tableNum"})," and ",(0,i.jsx)(n.em,{children:"fieldNum"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["Or a pointer to the field in ",(0,i.jsx)(n.em,{children:"fieldPtr"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the command has been executed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"oneTable"})," and ",(0,i.jsx)(n.em,{children:"oneField"})," parameters contain respectively the table and field number to which the relation (from the source field) is pointing. If there is no relation starting from the field, these parameters return 0."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"choicefield"})," parameter contains the choice field number (from the target table) defined within this relation. If no choice field has been set for this relation, or if no relation starts from the source field, this parameter returns 0."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"autoOne"})," and ",(0,i.jsx)(n.em,{children:"autoMany"})," parameters return ",(0,i.jsx)(n.strong,{children:"True"})," if, respectively, the \u201CAuto Relate One\u201D and \u201CAuto One to Many\u201D boxes has been checked for this relation; otherwise, they return ",(0,i.jsx)(n.strong,{children:"False"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The ",(0,i.jsx)(n.em,{children:"autoOne"})," and ",(0,i.jsx)(n.em,{children:"autoMany"})," parameters will also return ",(0,i.jsx)(n.strong,{children:"True"})," if no relation starts from the source field (in this case they return non-significant values). The value of both the ",(0,i.jsx)(n.em,{children:"oneTable"})," and ",(0,i.jsx)(n.em,{children:"oneField"})," parameters allows you to make sure that a relation exists."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/get-table-properties",children:"GET TABLE PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"686"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);