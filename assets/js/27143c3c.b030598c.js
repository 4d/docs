"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27931"],{795709:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/get-field-relation","title":"GET FIELD RELATION","description":"GET FIELD RELATION ( manyField ; one ; many {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-field-relation.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-relation","permalink":"/docs/20-R8/commands/get-field-relation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-relation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-field-relation","title":"GET FIELD RELATION","slug":"/commands/get-field-relation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET AUTOMATIC RELATIONS","permalink":"/docs/20-R8/commands/get-automatic-relations"},"next":{"title":"OLD RELATED MANY","permalink":"/docs/20-R8/commands/old-related-many"}}'),s=t("785893"),i=t("250065");let a={id:"get-field-relation",title:"GET FIELD RELATION",slug:"/commands/get-field-relation",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET FIELD RELATION"})," ( ",(0,s.jsx)(n.em,{children:"manyField"})," ; ",(0,s.jsx)(n.em,{children:"one"})," ; ",(0,s.jsx)(n.em,{children:"many"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manyField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Starting field of a relation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"one"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Status of the Many-to-One relation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"many"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Status of the One-to-Many relation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\u2022 If passed: one and many return the current status of the relation (values 2 or 3 only) \u2022 If omitted (default): one and many can return the value 1 if the relation has not been modified through programming"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET FIELD RELATION"})," command lets you find out the automatic/manual status of the relation starting from ",(0,s.jsx)(n.em,{children:"manyField"})," for the current process. You can view any relation, including automatic relations set in the Structure window."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.em,{children:"manyField"}),", pass the name of theMany table field from which the relation whose status you want to find out originates. If no relation originates from the ",(0,s.jsx)(n.em,{children:"manyField"})," field, the ",(0,s.jsx)(n.em,{children:"one"})," et ",(0,s.jsx)(n.em,{children:"many"})," parameters return 0, an error is returned and the system variable OK is set to 0 (see below)."]}),"\n",(0,s.jsxs)(n.li,{children:["After the command is executed, the ",(0,s.jsx)(n.em,{children:"one"})," parameter contains a value indicating whether the Many-to-One relation specified is set as automatic:",(0,s.jsx)(n.br,{}),"\n0 = There is no relation originating from ",(0,s.jsx)(n.em,{children:"manyField"}),". Syntax error No. 16 (\u201CThe field has no relation\u201D) is generated and the system variable OK is set to 0.",(0,s.jsx)(n.br,{}),"\n1 = The automatic/manual status of the Many-to-One relation specified is that set by the ",(0,s.jsx)(n.strong,{children:"Auto Relate One"})," option in the Relation properties of the Design environment (it has not been modified by programming).",(0,s.jsx)(n.br,{}),"\n2 = The Many-to-One relation is manual for the process.",(0,s.jsx)(n.br,{}),"\n3 = The Many-to-One relation is automatic for the process."]}),"\n",(0,s.jsxs)(n.li,{children:["After the command is executed, the ",(0,s.jsx)(n.em,{children:"many"})," parameter contains a value indicating whether the One-to-Many relation specified is set as automatic:",(0,s.jsx)(n.br,{}),"\n0 = There is no relation originating from ",(0,s.jsx)(n.em,{children:"manyField"}),". Syntax error No. 16 (\u201CThe field has no relation\u201D) is generated and the system variable OK is set to 0.",(0,s.jsx)(n.br,{}),"\n1 = The automatic/manual status of the One-to-Many relation specified is that set by the ",(0,s.jsx)(n.strong,{children:"Auto One to Many"})," option in the Relation properties of the Design environment (it has not been modified by programming).",(0,s.jsx)(n.br,{}),"\n2 = The One-to-Many relation is manual for the process.",(0,s.jsx)(n.br,{}),"\n3 = The One-to-Many relation is automatic for the process."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can compare the values returned in the ",(0,s.jsx)(n.em,{children:"one"})," and ",(0,s.jsx)(n.em,{children:"many"})," parameters with the constants of the \u201C",(0,s.jsx)(n.em,{children:"Relations"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Automatic"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Manual"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"No relation"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Structure configuration"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The optional ",(0,s.jsx)(n.em,{children:"*"})," parameter lets you \u201Cforce\u201D the reading of the current status of the relation, even if it has not been modified by programming. In other words, when you pass the * parameter, only the values 2 or 3 can be returned in the ",(0,s.jsx)(n.em,{children:"one"})," and ",(0,s.jsx)(n.em,{children:"many"})," parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given the following structure:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(844737).Z+"",width:"365",height:"256"})}),"\n",(0,s.jsx)(n.p,{children:"The properties of the relation linking the [Employees]Company field to the [Companies]Name field are the following:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(509789).Z+"",width:"269",height:"650"})}),"\n",(0,s.jsxs)(n.p,{children:["The following code illustrates the various possibilities offered by the ",(0,s.jsx)(n.strong,{children:"GET FIELD RELATION"}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"})," and ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-field-relation",children:"SET FIELD RELATION"}),", ",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," commands along with their effects:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//returns False, False\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//returns 1,1\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//returns 3,2\n\xa0\n\xa0SET FIELD RELATION([Employees]Company;2;0)\xa0//changes Many-to-One relation to manual\n\xa0\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//returns 2,1\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//returns 2, 2\n\xa0\n\xa0SET FIELD RELATION([Employees]Company;1;0)\xa0//re-establishes the parameters set in Design environment for Many-to-One relation\n\xa0\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//returns 1,1\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//returns 3,2\n\xa0\n\xa0SET AUTOMATIC RELATIONS(True;True)\xa0//changes all relations of all tables to automatic\n\xa0\n\xa0GET AUTOMATIC RELATIONS(one;many)\xa0//returns True, True\n\xa0GET FIELD RELATION([Employees]Company;one;many)\xa0//returns 1,1\n\xa0GET FIELD RELATION([Employees]Company;one;many;*)\xa0//returns 3,3\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/get-automatic-relations",children:"GET AUTOMATIC RELATIONS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/get-relation-properties",children:"GET RELATION PROPERTIES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"920"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},844737:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict31607.en-1360d05d6566c3b5cd0b5eda86448a8b.png"},509789:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict31608.en-5f4ef41e11c8cc0ea518a455bfee8781.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);