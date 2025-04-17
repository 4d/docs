"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77146"],{852536:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"Concepts/operators","title":"Operators","description":"An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values.","source":"@site/versioned_docs/version-20-R9/Concepts/operators.md","sourceDirName":"Concepts","slug":"/Concepts/operators","permalink":"/docs/Concepts/operators","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Foperators.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"operators","title":"Operators"},"sidebar":"docs","previous":{"title":"A Quick Tour","permalink":"/docs/Concepts/quick-tour"},"next":{"title":"Data types overview","permalink":"/docs/Concepts/data-types"}}'),t=r("785893"),i=r("250065");let l={id:"operators",title:"Operators"},d=void 0,o={},a=[{value:"Terminology",id:"terminology",level:2},{value:"Assignment operator",id:"assignment-operator",level:2},{value:"Basic operators",id:"basic-operators",level:2},{value:"Compound assignment operators",id:"compound-assignment-operators",level:2},{value:"Examples",id:"examples",level:4},{value:"Short-circuit operators",id:"short-circuit-operators",level:2},{value:"Short-circuit AND operator (&amp;&amp;)",id:"short-circuit-and-operator-",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Short-circuit OR operator (||)",id:"short-circuit-or-operator-",level:3},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"Precedence",id:"precedence",level:3},{value:"Ternary operator",id:"ternary-operator",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples-1",level:3},{value:"A simple example",id:"a-simple-example",level:4},{value:"Handling data from a table",id:"handling-data-from-a-table",level:4},{value:"Truthy and falsy",id:"truthy-and-falsy",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, ",(0,t.jsx)(n.code,{children:"1 + 2"})," uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values."]}),"\n",(0,t.jsxs)(n.p,{children:["The 4D language supports the operators you may already know from other languages like C or JavaScript. However, the assignment operator is ",(0,t.jsx)(n.code,{children:":="})," to prevent it from being mistakenly used when the equal to operator (",(0,t.jsx)(n.code,{children:"="}),") is intended. ",(0,t.jsx)(n.a,{href:"#basic-operators",children:"Basic operators"})," such as arithmetic operators (+, -, *, /, %...) and comparison operators (=, >, >=...) can be used with numbers, but also with boolean, text, date, time, pointer, or picture data types. Like JavaScript, the 4D language supports the concept of ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy and falsy values"}),", which in use in ",(0,t.jsx)(n.a,{href:"#short-circuit-operators",children:"short-cicrcuit operators"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsxs)(n.p,{children:["The 4D language supports ",(0,t.jsx)(n.strong,{children:"binary"})," and ",(0,t.jsx)(n.strong,{children:"ternary"})," operators:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["binary operators operate on two targets (such as ",(0,t.jsx)(n.code,{children:"2 + 3"}),") and appear in between their two targets."]}),"\n",(0,t.jsxs)(n.li,{children:["ternary operators operate on three targets. Like C, 4D has only one ternary operator, the ",(0,t.jsx)(n.a,{href:"#ternary-operator",children:"ternary conditional operator"})," (",(0,t.jsx)(n.code,{children:"a ? b : c"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The values that operators affect are operands. In the expression ",(0,t.jsx)(n.code,{children:"1 + 2"}),", the + symbol is a binary operator and its two operands are the values 1 and 2."]}),"\n",(0,t.jsx)(n.h2,{id:"assignment-operator",children:"Assignment operator"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"assignment operator"})," (",(0,t.jsx)(n.code,{children:"a:=b"}),") initializes or updates the value of ",(0,t.jsx)(n.code,{children:"a"})," with the value of ",(0,t.jsx)(n.code,{children:"b"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$myNumber:=3 //assigns 3 to MyNumber variable  \n$myDate:=!2018/01/21! //assigns a date literal\n$myLength:=Length("Acme") //assigns the result of the command (4) to $myLength\n$col:=New collection //$col is initialized with an empty collection\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Do NOT confuse the assignment operator ",(0,t.jsx)(n.code,{children:":="})," with the equality comparison operator ",(0,t.jsx)(n.code,{children:"="}),". A different assignment operator (and not ",(0,t.jsx)(n.code,{children:"="}),") was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"basic-operators",children:"Basic operators"}),"\n",(0,t.jsxs)(n.p,{children:["Operator results depend on the ",(0,t.jsx)(n.strong,{children:"data types"})," they are applied to. 4D supports different operators on scalar data types. They are described with the data types, in the following sections:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/Concepts/boolean#logical-operators",children:(0,t.jsx)(n.strong,{children:"Logical operators"})})," (on ",(0,t.jsx)(n.strong,{children:"boolean"})," expressions)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/date#date-operators",children:(0,t.jsx)(n.strong,{children:"Date operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/time#time-operators",children:(0,t.jsx)(n.strong,{children:"Time operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/number#number-operators",children:(0,t.jsx)(n.strong,{children:"Number operators"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/Concepts/number#bitwise-operators",children:(0,t.jsx)(n.strong,{children:"Bitwise operators"})})," (on ",(0,t.jsx)(n.strong,{children:"long integer"})," expressions)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/picture#picture-operators",children:(0,t.jsx)(n.strong,{children:"Picture operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/pointer#pointer-operators",children:(0,t.jsx)(n.strong,{children:"Pointer operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/string#string-operators",children:(0,t.jsx)(n.strong,{children:"String operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/object#object-operators",children:(0,t.jsx)(n.strong,{children:"Object reference operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/collection#collection-operators",children:(0,t.jsx)(n.strong,{children:"Collection reference operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/null-undefined#null-operators",children:(0,t.jsx)(n.strong,{children:"Null operators"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/Concepts/null-undefined#undefined-operators",children:(0,t.jsx)(n.strong,{children:"Undefined operators"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compound-assignment-operators",children:"Compound assignment operators"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["4D provides ",(0,t.jsx)(n.strong,{children:"compound assignment operators"})," that combine assignment with another operation. One example is the addition assignment operator (",(0,t.jsx)(n.code,{children:"+="}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$a:=1 \n$a+=2 // $a=3\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following compound assignment operators are supported:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Operator"}),(0,t.jsx)(n.th,{children:"Syntax"}),(0,t.jsx)(n.th,{children:"Assigns"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Addition"}),(0,t.jsx)(n.td,{children:"Text += Text"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'$t+=" World"  //$t:=$t+" World"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Number += Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$n+=5 //$n:=$n+5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Date += Number"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$d+=5 //$d:=$d+5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time += Time"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1+=$t2 //$t1:=$t1+$t2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time += Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1+=5 //$t1:=$t1+5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture += Picture"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1+=$p2 //$p1:=$p1+$p2 (add $p2 to the right of $p1)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture += Number"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1+=5 //$p1:=$p1+5 (move $p1 horizontally 5 pixels to the right)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Subtraction"}),(0,t.jsx)(n.td,{children:"Number -= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$n-=5 //$n:=$n-5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Date -= Number"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$d-=5 //$d:=$d-5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time -= Time"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1-=$t2 //$t1:=$t1-$t2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time -= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1-=5 //$t1:=$t1-5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture -= Number"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1-=5 //$p1:=$p1-5 (move $p1 horizontally 5 pixels to the left)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Division"}),(0,t.jsx)(n.td,{children:"Number /= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$n/=5 //$n:=$n/5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time /= Time"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1/=$t2 //$t1:=$t1/$t2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time /= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1/=5 //$t1:=$t1/5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture /= Picture"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1/=$p2 //$p1:=$p1/$p2 (add $p2 to the bottom of $p1)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture /= Number"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1/=5 //$p1:=$p1/5 (move $p1 vertically 5 pixels)"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Multiplication"}),(0,t.jsx)(n.td,{children:"Text *= Number"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'$t*="abc"  //$t:=$t*"abc"'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Number *= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$n*=5 //$n:=$n*5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time *= Time"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1*=$t2 //$t1:=$t1*$t2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Time *= Number"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$t1*=5 //$t1:=$t1*5"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Picture *= Number"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$p1*=5 //$p1:=$p1*5 (resize $p1 by 5)"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["These operators apply on any ",(0,t.jsx)(n.a,{href:"/docs/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"assignable expressions"})," (except pictures as object properties or collection elements)."]}),"\n",(0,t.jsxs)(n.p,{children:['The operation "source ',(0,t.jsx)(n.code,{children:"operator"}),' value" is not strictly equivalent to "source := source ',(0,t.jsx)(n.code,{children:"operator"}),' value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as ',(0,t.jsx)(n.code,{children:"getPointer()->+=1"})," the ",(0,t.jsx)(n.code,{children:"getPointer"})," method is called only once."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/Concepts/string#character-reference-symbols",children:"Character indexing in text"})," and ",(0,t.jsx)(n.a,{href:"/docs/Concepts/blob#accessing-a-scalar-blobs-bytes",children:"byte indexing in blob"})," do not support these operators."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Addition\n$x:=2\n$x+=5 //$x=7\n\n$t:="Hello" \n$t+=" World" //$t="Hello World" \n\n$d:=!2000-11-10!\n$d+=10 //$d=!2000-11-20!\n\n// Subtraction\n$x1:=10\n$x1-=5 //$x1=5\n\n$d1:=!2000-11-10!\n$d1-=10 // $d1=!2000-10-31!\n\n// Division\n$x3:=10\n$x3/=2 // $x3=5\n\n\n// Multiplication\n$x2:=10\n$x2*=5 // $x2=50\n\n$t2:="Hello" \n$t2*=2 // $t2="HelloHello"\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"short-circuit-operators",children:"Short-circuit operators"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"&&"})," and ",(0,t.jsx)(n.strong,{children:"||"})," operators are ",(0,t.jsx)(n.strong,{children:"short circuit operators"}),". A short circuit operator is one that doesn't necessarily evaluate all of its operands."]}),"\n",(0,t.jsxs)(n.p,{children:["The difference with the single ",(0,t.jsxs)(n.a,{href:"/docs/Concepts/boolean#logical-operators",children:[(0,t.jsx)(n.strong,{children:"&"})," and ",(0,t.jsx)(n.strong,{children:"|"})," boolean operators"]})," is that the short-circuit operators ",(0,t.jsx)(n.strong,{children:"&&"})," and ",(0,t.jsx)(n.strong,{children:"||"})," don't return a boolean value. They evaluate expressions as ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy or falsy"}),", then return one of the expressions."]}),"\n",(0,t.jsx)(n.h3,{id:"short-circuit-and-operator-",children:"Short-circuit AND operator (&&)"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The rule is as follows:"}),"\n",(0,t.jsxs)(n.p,{children:["Given ",(0,t.jsx)(n.code,{children:"Expr1 && Expr2"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", the value of the last operand is returned."]}),"\n",(0,t.jsxs)(n.p,{children:["The following table summarizes the different cases for the ",(0,t.jsx)(n.strong,{children:"&&"})," operator:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Expr1"}),(0,t.jsx)(n.th,{children:"Expr2"}),(0,t.jsx)(n.th,{children:"Value returned"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"Expr2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"Expr2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"Expr1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"Expr1"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $v : Variant\n\n$v:= "Hello" && "World" //"World"\n$v:=False && 0 // False\n$v:=0 && False // False\n$v:=5 && !00-00-00! // 00/00/00\n$v := 5 && 10 && "hello" //"hello"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"Say you have an online store, and some products have a tax rate applied, and others don't."}),"\n",(0,t.jsx)(n.p,{children:"To calculate the tax, you multiply the price by the tax rate, which may not have been specified."}),"\n",(0,t.jsx)(n.p,{children:"So you can write this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $tax : Variant\n\n$tax:=$item.taxRate && ($item.price*$item.taxRate)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$tax"})," will be NULL if taxRate is NULL (or undefined), otherwise it will store the result of the calculation."]}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"Short-circuit operators are useful in tests such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"If(($myObject#Null) && ($myObject.value>10))\n	//code\nEnd if\n"})}),"\n",(0,t.jsx)(n.p,{children:"If $myObject is Null, the second argument is not executed, thus no error is thrown."}),"\n",(0,t.jsx)(n.h3,{id:"short-circuit-or-operator-",children:"Short-circuit OR operator (||)"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:'}),"\n",(0,t.jsxs)(n.p,{children:["Given ",(0,t.jsx)(n.code,{children:"Expr1 || Expr2"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["If Expr1 is ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", Expr2 is not evaluated and the calculation returns Expr1."]}),"\n",(0,t.jsxs)(n.p,{children:["If Expr1 is ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"}),", the calculation returns Expr2."]}),"\n",(0,t.jsxs)(n.p,{children:["The following table summarizes the different cases and the value returned for the ",(0,t.jsx)(n.strong,{children:"||"})," operator:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Expr1"}),(0,t.jsx)(n.th,{children:"Expr2"}),(0,t.jsx)(n.th,{children:"Value returned"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"Expr1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"Expr1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"truthy"}),(0,t.jsx)(n.td,{children:"Expr2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"falsy"}),(0,t.jsx)(n.td,{children:"Expr2"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"example-1-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["Say you have a table called Employee. Some employees have entered a phone number, and others haven't. This means that ",(0,t.jsx)(n.code,{children:"$emp.phone"})," could be NULL, and you cannot assign NULL to a Text variable. But you can write the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $phone : Text\n\n$phone:=$emp.phone || "n/a"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In which case ",(0,t.jsx)(n.code,{children:"$phone"}),' will store either a phone number or the "n/a" string.']}),"\n",(0,t.jsx)(n.h4,{id:"example-2-1",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["Given a table called Person with a ",(0,t.jsx)(n.em,{children:"name"})," field, as well as a ",(0,t.jsx)(n.em,{children:"maiden name"})," field for married women."]}),"\n",(0,t.jsx)(n.p,{children:"The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"var $name: Text\n\n$name:=$person.maidenName || $person.name\n"})}),"\n",(0,t.jsx)(n.h3,{id:"precedence",children:"Precedence"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"&&"})," and ",(0,t.jsx)(n.code,{children:"||"})," operators have the same precedence as the logical operators ",(0,t.jsx)(n.code,{children:"&"})," and ",(0,t.jsx)(n.code,{children:"|"}),", and are evaluated left to right."]}),"\n",(0,t.jsxs)(n.p,{children:["This means that ",(0,t.jsx)(n.code,{children:"a || b && c"})," is evaluated as ",(0,t.jsx)(n.code,{children:"(a || b) && c"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ternary-operator",children:"Ternary operator"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of ",(0,t.jsx)(n.a,{href:"/docs/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"})," statements."]}),"\n",(0,t.jsx)(n.p,{children:"It takes three operands in the following order:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a condition followed by a question mark (?)"}),"\n",(0,t.jsxs)(n.li,{children:["an expression to execute if the condition is ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"truthy"}),", followed by a colon (:)"]}),"\n",(0,t.jsxs)(n.li,{children:["an expression to execute if the condition is ",(0,t.jsx)(n.a,{href:"#truthy-and-falsy",children:"falsy"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:"The syntax is as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"condition ? exprIfTruthy : exprIfFalsy"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Since the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.6/Using-tokens-in-formulas.300-7487422.en.html",children:"token syntax"})," uses colons, we recommend inserting a space after the colon ",(0,t.jsx)(n.code,{children:":"})," or enclosing tokens using parentheses to avoid any conflicts."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(n.h4,{id:"a-simple-example",children:"A simple example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $age : Integer\nvar $beverage : Text\n\n$age:=26\n$beverage:=($age>=21) ? "Beer" : "Juice"\n\nALERT($beverage) // "Beer"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"handling-data-from-a-table",children:"Handling data from a table"}),"\n",(0,t.jsx)(n.p,{children:"This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $fullname : Text\n\n// If one of the names is missing, store the one that exists, otherwise store an empty string\n$fullname:=($person.firstname && $person.lastname) ? ($person.firstname+" "+$person.lastname) : ($person.lastname || $person.firstname) || ""\n'})}),"\n",(0,t.jsx)(n.h2,{id:"truthy-and-falsy",children:"Truthy and falsy"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"19 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As well as a type, each value also has an inherent Boolean value, generally known as either ",(0,t.jsx)(n.strong,{children:"truthy"})," or ",(0,t.jsx)(n.strong,{children:"falsy"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"truthy"})," and ",(0,t.jsx)(n.strong,{children:"falsy"})," values are only evaluated by ",(0,t.jsx)(n.a,{href:"#short-circuit-operators",children:"short-circuit"})," and ",(0,t.jsx)(n.a,{href:"#ternary-operator",children:"ternary"})," operators."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following values are ",(0,t.jsx)(n.strong,{children:"falsy"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"false"}),"\n",(0,t.jsx)(n.li,{children:"Null"}),"\n",(0,t.jsx)(n.li,{children:"undefined"}),"\n",(0,t.jsx)(n.li,{children:"Null object"}),"\n",(0,t.jsx)(n.li,{children:"Null collection"}),"\n",(0,t.jsx)(n.li,{children:"Null pointer"}),"\n",(0,t.jsx)(n.li,{children:"Null picture"}),"\n",(0,t.jsx)(n.li,{children:"Null date !00-00-00!"}),"\n",(0,t.jsx)(n.li,{children:'"" - Empty strings'}),"\n",(0,t.jsx)(n.li,{children:"[] - Empty collections"}),"\n",(0,t.jsx)(n.li,{children:"{} - Empty objects"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All other values are considered ",(0,t.jsx)(n.strong,{children:"truthy"}),", including:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"0 - numeric zero (Integer or otherwise)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In 4D, ",(0,t.jsx)(n.strong,{children:"truthy"})," and ",(0,t.jsx)(n.strong,{children:"falsy"})," evaluation reflects the ",(0,t.jsx)(n.strong,{children:"usability"})," of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle ",(0,t.jsx)(n.em,{children:"undefined"})," and ",(0,t.jsx)(n.em,{children:"null"})," values in objects and collections, so that a reduced number of ",(0,t.jsx)(n.a,{href:"/docs/Concepts/control-flow#ifelseend-if",children:"If\u2026Else"})," statements are necessary to avoid runtime errors."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, when you use a ",(0,t.jsx)(n.a,{href:"#short-circuit-or-operator-",children:"short-circuit OR operator"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"$value:=$object.value || $defaultValue\n"})}),"\n",(0,t.jsxs)(n.p,{children:["... you get the default value whenever ",(0,t.jsx)(n.em,{children:"$object"})," does not contain the ",(0,t.jsx)(n.code,{children:"value"})," property OR when it is ",(0,t.jsx)(n.em,{children:"null"}),". So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is ",(0,t.jsx)(n.strong,{children:"truthy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['Regarding values representing collections, objects, or strings, "empty" values are considered ',(0,t.jsx)(n.strong,{children:"falsy"}),". It is handy when you want to assign a default value whenever an empty one is encountered."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$phone:=$emp.phone || "n/a"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let t={},i=s.createContext(t);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);