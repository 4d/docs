"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76849"],{926035:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>l,assets:()=>c,toc:()=>i,contentTitle:()=>o});var l=JSON.parse('{"id":"commands/formula","title":"Formula","description":"History","source":"@site/versioned_docs/version-20-R7/commands/formula.md","sourceDirName":"commands","slug":"/commands/formula","permalink":"/docs/commands/formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fformula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"formula","title":"Formula","slug":"/commands/formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE FORMULA","permalink":"/docs/commands/execute-formula"},"next":{"title":"Formula from string","permalink":"/docs/commands/formula-from-string"}}'),a=r("785893"),t=r("250065");let s={id:"formula",title:"Formula",slug:"/commands/formula",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Release"}),(0,a.jsx)(n.th,{children:"Changes"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"17 R6"}),(0,a.jsx)(n.td,{children:"Renamed (New formula -> Formula)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"17 R3"}),(0,a.jsx)(n.td,{children:"Added"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Formula"})," ( ",(0,a.jsx)(n.em,{children:"formulaExp"})," : Expression ) : 4D.Function"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{style:{textAlign:"center"}}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"formulaExp"}),(0,a.jsx)(n.td,{children:"Expression"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(n.td,{children:"Formula to be returned as object"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Result"}),(0,a.jsx)(n.td,{children:"4D.Function"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,a.jsx)(n.td,{children:"Native function encapsulating the formula"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Formula"})," command creates a ",(0,a.jsx)(n.code,{children:"4D Function"})," object based upon the ",(0,a.jsx)(n.em,{children:"formulaExp"})," expression. ",(0,a.jsx)(n.em,{children:"formulaExp"})," can be as simple as a single value or complex, such as a project method with parameters."]}),"\n",(0,a.jsx)(n.p,{children:'Having a formula as an object allows it to be passed as a parameter (calculated attribute) to commands or methods or to be executed from various components without needing to declare them as "shared by components and host database". When called, the formula object is evaluated within the context of the database or component that created it.'}),"\n",(0,a.jsx)(n.p,{children:"The returned formula can be called with:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#call",children:(0,a.jsx)(n.code,{children:".call()"})})," or ",(0,a.jsx)(n.a,{href:"#apply",children:(0,a.jsx)(n.code,{children:".apply()"})})," methods, or"]}),"\n",(0,a.jsxs)(n.li,{children:["object notation syntax (see ",(0,a.jsx)(n.a,{href:"#formula-object",children:"formula object"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n $o:=New object("myFormula";$f)\n\n  //three different ways to call the formula\n $f.call($o) //returns 3\n $f.apply($o) //returns 3\n $o.myFormula() //returns 3\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can pass ",(0,a.jsx)(n.a,{href:"#passing-parameters",children:"parameters"})," to the ",(0,a.jsx)(n.code,{children:"Formula"}),", as seen below in ",(0,a.jsx)(n.a,{href:"#example-4",children:"example 4"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the object on which the formula is executed, as seen in ",(0,a.jsx)(n.a,{href:"#example-5",children:"example 5"}),". The properties of the object can then be accessed via the ",(0,a.jsx)(n.code,{children:"This"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"formulaExp"})," uses local variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the local variables. Note that using arrays as local variables is not supported."]}),"\n",(0,a.jsxs)(n.p,{children:["The object created by ",(0,a.jsx)(n.code,{children:"Formula"})," can be saved, for example, in a database field or in a blob document."]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"A simple formula:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(1+2)\n\n var $o : Object\n $o:=New object("f";$f)\n\n $result:=$o.f() // returns 3\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:"A formula using local variables:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\n\n $value:=10\n $o:=New object("f";Formula($value))\n $value:=20\n\n $result:=$o.f() // returns 10\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,a.jsx)(n.p,{children:"A simple formula using parameters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula($1+$2))\n $result:=$o.f(10;20) //returns 30\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,a.jsx)(n.p,{children:"A formula using a project method with parameters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("f";Formula(myMethod))\n $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.code,{children:"This"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))\n $o.firstName:="John"\n $o.lastName:="Smith"\n $result:=$o.fullName() //returns "John Smith"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,a.jsx)(n.p,{children:"Calling a formula using object notation:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:' var $feta; $robot : Object\n var $calc : 4D.Function\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n  //sets the formula to object properties\n $feta.calc:=$calc\n $robot.calc:=$calc\n\n  //call the formula\n $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}\n $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-formula-more-power-behind-simplicity/",children:"4D Blog - Formula: More power behind simplicity"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-formula-think-outside-the-box/",children:"4D Blog - Formula: Think outside the box"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://blog.4d.com/write-your-own-methods-for-objects/",children:"4D Blog - Write your own methods for objects"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/formula-from-string",children:"Formula from string"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"1597"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return s}});var l=r(667294);let a={},t=l.createContext(a);function s(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);