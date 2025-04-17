"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53080"],{375154:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"API/FunctionClass","title":"Function","description":"A 4D.Function object contains a piece of code that can be executed from an object, either using the () operator, or using the apply() and call() functions. 4D proposes three kinds of Function objects:","source":"@site/versioned_docs/version-20-R9/API/FunctionClass.md","sourceDirName":"API","slug":"/API/FunctionClass","permalink":"/docs/API/FunctionClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FFunctionClass.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"FunctionClass","title":"Function"},"sidebar":"docs","previous":{"title":"Folder","permalink":"/docs/API/FolderClass"},"next":{"title":"HTTPAgent","permalink":"/docs/API/HTTPAgentClass"}}'),l=s("785893"),t=s("250065");let c={id:"FunctionClass",title:"Function"},a=void 0,i={},d=[{value:"Formula objects",id:"formula-objects",level:3},{value:"Passing parameters",id:"passing-parameters",level:4},{value:"Parameters to a single method",id:"parameters-to-a-single-method",level:4},{value:"Summary",id:"summary",level:3},{value:".apply()",id:"apply",level:2},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".call()",id:"call",level:2},{value:"Description",id:"description-1",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:".source",id:"source",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4}];function o(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["A ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"4D.Function"})})," object contains a piece of code that can be executed from an object, either using the ",(0,l.jsx)(n.code,{children:"()"})," operator, or using the ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," and ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})})," functions. 4D proposes three kinds of ",(0,l.jsx)(n.code,{children:"Function"})," objects:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"native functions"}),", i.e. built-in functions from various 4D classes such as ",(0,l.jsx)(n.code,{children:"collection.sort()"})," or ",(0,l.jsx)(n.code,{children:"file.copyTo()"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"user functions"}),", created in user ",(0,l.jsx)(n.a,{href:"/docs/Concepts/classes",children:"classes"})," using the ",(0,l.jsx)(n.a,{href:"/docs/Concepts/classes#function",children:"Function keyword"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"formula functions"}),", i.e. functions that can execute any 4D formula."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"formula-objects",children:"Formula objects"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/commands/formula",children:"Formula"})," and ",(0,l.jsx)(n.a,{href:"/docs/commands/formula-from-string",children:"Formula from string"})," commands allow you to create ",(0,l.jsxs)(n.a,{href:"#formula-objects",children:[(0,l.jsx)(n.code,{children:"4D.Function"})," objects"]})," to execute any 4D expression or code expressed as text."]}),"\n",(0,l.jsx)(n.p,{children:"Formula objects can be encapsulated in object properties:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=New object\n $f.message:=Formula(ALERT("Hello world"))\n'})}),"\n",(0,l.jsxs)(n.p,{children:['This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the ',(0,l.jsx)(n.strong,{children:"()"})," operator after the property name, such as:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message() //displays "Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Syntax with brackets is also supported:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f["message"]() //displays "Hello world"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Note that, even if it does not have parameters (see below), an object function to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $o:=$f.message //returns the formula object in $o\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can also execute a function using the ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:"apply()"})})," and ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:"call()"})})," functions:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $f.message.apply() //displays "Hello world"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"passing-parameters",children:"Passing parameters"}),"\n",(0,l.jsx)(n.p,{children:"You can pass parameters to your formulas using a sequential parameter syntax based upon $1, $2...$n. For example, you can write:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=New object\n $f.message:=Formula(ALERT("Hello "+$1))\n $f.message("John") //displays "Hello John"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Or using the ",(0,l.jsx)(n.a,{href:"#call",children:".call()"})," function:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : Object\n $f:=Formula($1+" "+$2)\n $text:=$f.call(Null;"Hello";"World") //returns "Hello World"\n $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //returns "Welcome to 2019" (for example)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"parameters-to-a-single-method",children:"Parameters to a single method"}),"\n",(0,l.jsx)(n.p,{children:"For more convenience, when the formula is made of a single project method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n\n $f:=Formula(myMethod)\n  //Writing Formula(myMethod($1;$2)) is not necessary\n $text:=$f.call(Null;"Hello";"World") //returns "Hello World"\n $text:=$f.call() //returns "How are you?"\n\n  //myMethod\n #DECLARE ($param1 : Text; $param2 : Text)->$return : Text\n If(Count parameters=2)\n    $return:=$param1+" "+$param2\n Else\n    $return:="How are you?"\n End if\n'})}),"\n",(0,l.jsx)(n.p,{children:"Parameters are received within the method, in the order they are specified in the call."}),"\n",(0,l.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsx)(n.tr,{children:(0,l.jsx)(n.th,{})})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#apply",children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),(0,l.jsx)(n.br,{}),"executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#call",children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),(0,l.jsx)(n.br,{}),"executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value"]})}),(0,l.jsx)(n.tr,{children:(0,l.jsxs)(n.td,{children:[(0,l.jsxs)(n.a,{href:"#source",children:[(0,l.jsx)(n.strong,{children:".source"})," : Text "]}),(0,l.jsx)(n.br,{}),"contains the source expression of the ",(0,l.jsx)(n.code,{children:"formula"})," as text"]})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"apply",children:".apply()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Changes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".apply"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".apply"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ",(0,l.jsx)(n.em,{children:"formulaParams"})," : Collection } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"center"}}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsx)(n.td,{children:"Object to be returned by the This command in the formula"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formulaParams"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,l.jsxs)(n.td,{children:["Collection of values to be passed as $1...$n when ",(0,l.jsx)(n.code,{children:"formula"})," is executed"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Result"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,l.jsx)(n.td,{children:"Value from formula execution"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".apply()"})," function executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,l.jsx)(n.code,{children:"Formula"})," or ",(0,l.jsx)(n.code,{children:"Formula from string"})," commands."]}),"\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.em,{children:"thisObj"})," parameter, you can pass a reference to the object to be used as ",(0,l.jsx)(n.code,{children:"This"})," within the formula."]}),"\n",(0,l.jsxs)(n.p,{children:["You can also pass a collection to be used as $1...$n parameters in the formula using the optional ",(0,l.jsx)(n.em,{children:"formulaParams"})," parameter."]}),"\n",(0,l.jsxs)(n.p,{children:["Note that ",(0,l.jsx)(n.code,{children:".apply()"})," is similar to ",(0,l.jsx)(n.a,{href:"#call",children:(0,l.jsx)(n.code,{children:".call()"})})," except that parameters are passed as a collection. This can be useful for passing calculated results."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" var $f : 4D.Function\n $f:=Formula($1+$2+$3)\n\n $c:=New collection(10;20;30)\n $result:=$f.apply(Null;$c) // returns 60\n"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $calc : 4D.Function\n var $feta; $robot : Object\n $robot:=New object("name";"Robot";"price";543;"quantity";2)\n $feta:=New object("name";"Feta";"price";12.5;"quantity";5)\n\n $calc:=Formula(This.total:=This.price*This.quantity)\n\n $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}\n $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"call",children:".call()"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Changes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"17 R3"}),(0,l.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".call"}),"() : any",(0,l.jsx)(n.br,{}),(0,l.jsx)(n.strong,{children:".call"}),"( ",(0,l.jsx)(n.em,{children:"thisObj"})," : Object { ; ...",(0,l.jsx)(n.em,{children:"params"})," : any } ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"thisObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Object to be returned by the This command in the formula"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"params"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Value(s) to be passed as $1...$n when formula is executed"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Result"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Value from formula execution"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".call()"})," function executes the ",(0,l.jsx)(n.code,{children:"formula"})," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,l.jsx)(n.code,{children:"Formula"})," or ",(0,l.jsx)(n.code,{children:"Formula from string"})," commands."]}),"\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.em,{children:"thisObj"})," parameter, you can pass a reference to the object to be used as ",(0,l.jsx)(n.code,{children:"This"})," within the formula."]}),"\n",(0,l.jsxs)(n.p,{children:["You can also pass values to be used as ",(0,l.jsx)(n.em,{children:"$1...$n"})," parameters in the formula using the optional ",(0,l.jsx)(n.em,{children:"params"})," parameter(s)."]}),"\n",(0,l.jsxs)(n.p,{children:["Note that ",(0,l.jsx)(n.code,{children:".call()"})," is similar to ",(0,l.jsx)(n.a,{href:"#apply",children:(0,l.jsx)(n.code,{children:".apply()"})})," except that parameters are passed directly."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1-1",children:"Example 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $f : 4D.Function\n $f:=Formula(Uppercase($1))\n $result:=$f.call(Null;"hello") // returns "HELLO"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"example-2-1",children:"Example 2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $o:=New object("value";50)\n $f:=Formula(This.value*2)\n $result:=$f.call($o) // returns 100\n'})}),"\n",(0,l.jsx)(n.h2,{id:"source",children:".source"}),"\n",(0,l.jsxs)(n.details,{children:[(0,l.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Release"}),(0,l.jsx)(n.th,{children:"Changes"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"18 R2"}),(0,l.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:".source"})," : Text"]}),"\n",(0,l.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:".source"})," property contains the source expression of the ",(0,l.jsx)(n.code,{children:"formula"})," as text."]}),"\n",(0,l.jsxs)(n.p,{children:["This property is ",(0,l.jsx)(n.strong,{children:"read-only"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $of : 4D.Function\n var $tf : Text\n $of:=Formula(String(Current time;HH MM AM PM))\n $tf:=$of.source //"String(Current time;HH MM AM PM)"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var r=s(667294);let l={},t=r.createContext(l);function c(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);