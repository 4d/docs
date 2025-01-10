"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63416"],{503085:function(e,n,l){l.r(n),l.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/null","title":"Null","description":"Null  : Null","source":"@site/versioned_docs/version-20-R7/commands-legacy/null.md","sourceDirName":"commands-legacy","slug":"/commands/null","permalink":"/docs/commands/null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnull.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"null","title":"Null","slug":"/commands/null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is nil pointer","permalink":"/docs/commands/is-nil-pointer"},"next":{"title":"RESOLVE POINTER","permalink":"/docs/commands/resolve-pointer"}}'),t=l("785893"),r=l("250065");let i={id:"null",title:"Null",slug:"/commands/null",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Null"}),"  : Null"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Null"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Null value"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Null"})," returns the Null type value ",(0,t.jsx)(n.strong,{children:"null"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This function allows you to assign or compare the ",(0,t.jsx)(n.strong,{children:"null"})," value to the following language elements:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Language elements"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Comments"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object property values"}),(0,t.jsxs)(n.td,{children:["Comparing ",(0,t.jsx)(n.strong,{children:"Null"})," to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing ",(0,t.jsx)(n.strong,{children:"Null"})," also returns true if the property does not exist in the object (i.e. is ",(0,t.jsx)(n.a,{href:"/docs/commands/undefined",children:"Undefined"}),"), see example 4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"collection elements"}),(0,t.jsxs)(n.td,{children:["When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the ",(0,t.jsx)(n.strong,{children:"null"})," value."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object variables"}),(0,t.jsx)(n.td,{children:"See (*) below"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"collection variables"}),(0,t.jsx)(n.td,{children:"See (*) below"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pointer variables"}),(0,t.jsx)(n.td,{children:"See (*) below"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"picture variables"}),(0,t.jsxs)(n.td,{children:["(*) Assigning the ",(0,t.jsx)(n.strong,{children:"null"})," value to such a variable type clears its contents. In this case, it has the same effect as calling the ",(0,t.jsx)(n.a,{href:"/docs/commands/clear-variable",children:"CLEAR VARIABLE"})," command."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"variant variables"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command cannot be used with scalar database fields. Null values in database fields are managed by the SQL engine, and are handled through the ",(0,t.jsx)(n.a,{href:"/docs/commands/is-field-value-null",children:"Is field value Null"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/set-field-value-null",children:"SET FIELD VALUE NULL"})," commands,"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["You want to assign and test the ",(0,t.jsx)(n.strong,{children:"null"})," value to an object property:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0If(vEmp.children=Null)\xa0//true\n\xa0End if\n\xa0If(vEmp.name=Null)\xa0//false\n\xa0End if\n\xa0If(vEmp.parent=Null)\xa0//true\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This example requires that the object notation is activated in the database."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["You want to assign and compare the ",(0,t.jsx)(n.strong,{children:"null"})," value to a collection element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var myCol : Collection\n\xa0myCol:=New collection(10;20;Null)\n\xa0...\n\xa0If(myCol[2]=Null)\n\xa0\xa0// if the 3rd element is null\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(n.p,{children:["These examples show the various ways to assign or compare the ",(0,t.jsx)(n.strong,{children:"null"})," value to variables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Object variable\n\xa0var $o : Object\n\xa0$o:=New object\n\xa0$o:=Null\xa0//equivalent to CLEAR VARIABLE($o)\n\xa0If($o#Null)\xa0//equivalent to If (OB Is defined($o))\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Collection variable\n\xa0var $c : Collection\n\xa0$c:=New collection\n\xa0$c:=Null\xa0//equivalent to CLEAR VARIABLE($c)\n\xa0If($c#Null)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Pointer variable\n\xa0var $p : Pointer\n\xa0$p:=->$v\n\xa0$p:=Null\xa0//equivalent to CLEAR VARIABLE($p)\n\xa0If($p=Null)\xa0//equivalent to If (Is Nil pointer($p))\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Picture variable\n\xa0var $i : Picture\n\xa0$i:=$vpicture\n\xa0$i:=Null\xa0//equivalent to CLEAR VARIABLE($i)\n\xa0If($i#Null)\xa0//equivalent to If (Picture size($i)#0)\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsxs)(n.p,{children:["Here are the different results of the ",(0,t.jsx)(n.a,{href:"/docs/commands/undefined",children:"Undefined"})," command as well as the ",(0,t.jsx)(n.a,{href:"/docs/commands/null",children:"Null"})," command with object properties, depending on the context:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var vEmp : Object\n\xa0vEmp:=New object\n\xa0vEmp.name:="Smith"\n\xa0vEmp.children:=Null\n\xa0\n\xa0$undefined:=Undefined(vEmp.name)\xa0// False\n\xa0$null:=(vEmp.name=Null)\xa0//False\n\xa0\n\xa0$undefined:=Undefined(vEmp.children)\xa0// False\n\xa0$null:=(vEmp.children=Null)\xa0//True\n\xa0\n\xa0$undefined:=Undefined(vEmp.parent)\xa0// True\n\xa0$null:=(vEmp.parent=Null)\xa0//True\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/is-field-value-null",children:"Is field value Null"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/ob-set-null",children:"OB SET NULL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/set-field-value-null",children:"SET FIELD VALUE NULL"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1517"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return i}});var s=l(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);