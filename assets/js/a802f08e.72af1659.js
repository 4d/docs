"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15921"],{239477:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>d,assets:()=>a,toc:()=>h,frontMatter:()=>s});var o=JSON.parse('{"id":"Concepts/looping","title":"Looping structures","description":"Looping structures repeat a sequence of statements until a condition is met or a number of times is reached.","source":"@site/versioned_docs/version-19/Concepts/cf_looping.md","sourceDirName":"Concepts","slug":"/Concepts/looping","permalink":"/docs/19/Concepts/looping","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fcf_looping.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"looping","title":"Looping structures"},"sidebar":"docs","previous":{"title":"Branching structures","permalink":"/docs/19/Concepts/branching"},"next":{"title":"Transformation tags","permalink":"/docs/19/Tags/tags"}}'),i=t("785893"),l=t("250065");let s={id:"looping",title:"Looping structures"},r=void 0,a={},h=[{value:"While...End while",id:"whileend-while",level:2},{value:"Example",id:"example",level:3},{value:"Repeat...Until",id:"repeatuntil",level:2},{value:"Example",id:"example-1",level:3},{value:"For...End for",id:"forend-for",level:2},{value:"Basic examples",id:"basic-examples",level:3},{value:"Decrementing variable counter",id:"decrementing-variable-counter",level:3},{value:"Incrementing the counter variable by more than one",id:"incrementing-the-counter-variable-by-more-than-one",level:3},{value:"Comparing looping structures",id:"comparing-looping-structures",level:3},{value:"Optimizing the execution of the For...End for loops",id:"optimizing-the-execution-of-the-forend-for-loops",level:3},{value:"Nested For...End for looping structures",id:"nested-forend-for-looping-structures",level:3},{value:"For each...End for each",id:"for-eachend-for-each",level:2},{value:"Loop through collections",id:"loop-through-collections",level:3},{value:"Example",id:"example-2",level:4},{value:"Loop through entity selections",id:"loop-through-entity-selections",level:3},{value:"Example",id:"example-3",level:4},{value:"Loop through object properties",id:"loop-through-object-properties",level:3},{value:"Example",id:"example-4",level:4},{value:"begin / end parameters",id:"begin--end-parameters",level:3},{value:"Example",id:"example-5",level:4},{value:"Until and While conditions",id:"until-and-while-conditions",level:3},{value:"Example",id:"example-6",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Looping structures repeat a sequence of statements until a condition is met or a number of times is reached."}),"\n",(0,i.jsx)(n.h2,{id:"whileend-while",children:"While...End while"}),"\n",(0,i.jsxs)(n.p,{children:["The formal syntax of the ",(0,i.jsx)(n.code,{children:"While...End while"})," control flow structure is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" While(Boolean_Expression)\n    statement(s)\n End while\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"While...End while"})," loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE."]}),"\n",(0,i.jsxs)(n.p,{children:["It is common to initialize the value tested in the Boolean expression immediately before entering the ",(0,i.jsx)(n.code,{children:"While...End while"})," loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and ",(0,i.jsx)(n.code,{children:"While...End while"})," executes the loop."]}),"\n",(0,i.jsxs)(n.p,{children:["The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because ",(0,i.jsx)(n.em,{children:"NeverStop"})," is always TRUE:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" NeverStop:=True\n While(NeverStop)\n End while\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the ",(0,i.jsx)(n.a,{href:"/docs/19/Concepts/error-handling",children:"Error handling"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' CONFIRM("Add a new record?") //The user wants to add a record?\n While(OK=1) //Loop as long as the user wants to\n    ADD RECORD([aTable]) //Add a new record\n End while //The loop always ends with End while\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"OK"})," system variable is set by the ",(0,i.jsx)(n.code,{children:"CONFIRM"})," command before the loop starts. If the user clicks the ",(0,i.jsx)(n.strong,{children:"OK"})," button in the confirmation dialog box, the ",(0,i.jsx)(n.code,{children:"OK"})," system variable is set to 1 and the loop starts. Otherwise, the ",(0,i.jsx)(n.code,{children:"OK"})," system variable is set to 0 and the loop is skipped. Once the loop starts, the ",(0,i.jsx)(n.code,{children:"ADD RECORD"})," command keeps the loop going because it sets the ",(0,i.jsx)(n.code,{children:"OK"})," system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the ",(0,i.jsx)(n.code,{children:"OK"})," system variable is set to 0 and the loop stops."]}),"\n",(0,i.jsx)(n.h2,{id:"repeatuntil",children:"Repeat...Until"}),"\n",(0,i.jsxs)(n.p,{children:["The formal syntax of the ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," control flow structure is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" Repeat\n    statement(s)\n Until(Boolean_Expression)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loop is similar to a ",(0,i.jsx)(n.a,{href:"flow-control#whileend-while",children:"While...End while"})," loop, except that it tests the Boolean expression after the loop rather than before. Thus, a ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loop always executes the loop once, whereas if the Boolean expression is initially False, a ",(0,i.jsx)(n.code,{children:"While...End while"})," loop does not execute the loop at all."]}),"\n",(0,i.jsxs)(n.p,{children:["The other difference with a ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loop is that the loop continues until the Boolean expression is TRUE."]}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Compare the following example with the example for the ",(0,i.jsx)(n.code,{children:"While...End while"})," loop. Note that the Boolean expression does not need to be initialized\u2014there is no ",(0,i.jsx)(n.code,{children:"CONFIRM"})," command to initialize the ",(0,i.jsx)(n.code,{children:"OK"})," variable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" Repeat\n    ADD RECORD([aTable])\n Until(OK=0)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"forend-for",children:"For...End for"}),"\n",(0,i.jsxs)(n.p,{children:["The formal syntax of the ",(0,i.jsx)(n.code,{children:"For...End for"})," control flow structure is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})\n    statement(s)\n End for\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"For...End for"})," loop is a loop controlled by a counter variable:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The counter variable ",(0,i.jsx)(n.em,{children:"Counter_Variable"})," is a numeric variable (Real or Long Integer) that the ",(0,i.jsx)(n.code,{children:"For...End for"})," loop initializes to the value specified by ",(0,i.jsx)(n.em,{children:"Start_Expression"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Each time the loop is executed, the counter variable is incremented by the value specified in the optional value ",(0,i.jsx)(n.em,{children:"Increment_Expression"}),". If you do not specify ",(0,i.jsx)(n.em,{children:"Increment_Expression"}),", the counter variable is incremented by one (1), which is the default."]}),"\n",(0,i.jsxs)(n.li,{children:["When the counter variable passes the ",(0,i.jsx)(n.em,{children:"End_Expression"})," value, the loop stops."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important:"})," The numeric expressions ",(0,i.jsx)(n.em,{children:"Start_Expression"}),", ",(0,i.jsx)(n.em,{children:"End_Expression"})," and ",(0,i.jsx)(n.em,{children:"Increment_Expression"})," are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," However, for special purposes, you can change the value of the counter variable ",(0,i.jsx)(n.em,{children:"Counter_Variable"})," within the loop; this will affect the loop."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Usually ",(0,i.jsx)(n.em,{children:"Start_Expression"})," is less than ",(0,i.jsx)(n.em,{children:"End_Expression"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"Start_Expression"})," and ",(0,i.jsx)(n.em,{children:"End_Expression"})," are equal, the loop will execute only once."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.em,{children:"Start_Expression"})," is greater than ",(0,i.jsx)(n.em,{children:"End_Expression"}),", the loop will not execute at all unless you specify a negative ",(0,i.jsx)(n.em,{children:"Increment_Expression"}),". See the examples."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"basic-examples",children:"Basic examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The following example executes 100 iterations:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Do something\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through all elements of the array anArray:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //Do something with the element\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through all the characters of the text vtSomeText:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlChar;1;Length(vtSomeText))\n  //Do something with the character if it is a TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through the selected records for the table [aTable]:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" FIRST RECORD([aTable])\n For($vlRecord;1;Records in selection([aTable]))\n  //Do something with the record\n    SEND RECORD([aTable])\n  //...\n  //Go to the next record\n    NEXT RECORD([aTable])\n End for\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Most of the ",(0,i.jsx)(n.code,{children:"For...End for"})," loops you will write in your projects will look like the ones listed in these examples."]}),"\n",(0,i.jsx)(n.h3,{id:"decrementing-variable-counter",children:"Decrementing variable counter"}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify ",(0,i.jsx)(n.em,{children:"Start_Expression"})," greater than ",(0,i.jsx)(n.em,{children:"End_Expression"})," and a negative ",(0,i.jsx)(n.em,{children:"Increment_Expression"}),". The following examples do the same thing as the previous examples, but in reverse order:"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"The following example executes 100 iterations:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For(vCounter;100;1;-1)\n  //Do something\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through all elements of the array anArray:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlElem;Size of array(anArray);1;-1)\n  //Do something with the element\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through all the characters of the text vtSomeText:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlChar;Length(vtSomeText);1;-1)\n  //Do something with the character if it is a TAB\n    If(Character code(vtSomeText[[$vlChar]])=Tab)\n  //...\n    End if\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through the selected records for the table [aTable]:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" LAST RECORD([aTable])\n For($vlRecord;Records in selection([aTable]);1;-1)\n  //Do something with the record\n    SEND RECORD([aTable])\n  //...\n  //Go to the previous record\n    PREVIOUS RECORD([aTable])\n End for\n"})}),"\n",(0,i.jsx)(n.h3,{id:"incrementing-the-counter-variable-by-more-than-one",children:"Incrementing the counter variable by more than one"}),"\n",(0,i.jsxs)(n.p,{children:["If you need to, you can use an ",(0,i.jsx)(n.em,{children:"Increment_Expression"})," (positive or negative) whose absolute value is greater than one."]}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsx)(n.li,{children:"The following loop addresses only the even elements of the array anArray:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlElem;2;Size of array(anArray);2)\n  //Do something with the element #2,#4...#2n\n    anArray{$vlElem}:=...\n End for\n"})}),"\n",(0,i.jsx)(n.h3,{id:"comparing-looping-structures",children:"Comparing looping structures"}),"\n",(0,i.jsxs)(n.p,{children:["Let's go back to the first ",(0,i.jsx)(n.code,{children:"For...End for"})," example. The following example executes 100 iterations:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For(vCounter;1;100)\n  //Do something\n End for\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It is interesting to see how the ",(0,i.jsx)(n.code,{children:"While...End while"})," loop and ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loop would perform the same action. Here is the equivalent ",(0,i.jsx)(n.code,{children:"While...End while"})," loop:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $i:=1 //Initialize the counter\n While($i<=100) //Loop 100 times\n  //Do something\n    $i:=$i+1 //Need to increment the counter\n End while\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here is the equivalent ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loop:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $i:=1 //Initialize the counter\n Repeat\n  //Do something\n    $i:=$i+1 //Need to increment the counter\n Until($i=100) //Loop 100 times\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," The ",(0,i.jsx)(n.code,{children:"For...End for"})," loop is usually faster than the ",(0,i.jsx)(n.code,{children:"While...End while"})," and ",(0,i.jsx)(n.code,{children:"Repeat...Until"})," loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the ",(0,i.jsx)(n.code,{children:"For...End for"})," loop whenever possible."]}),"\n",(0,i.jsx)(n.h3,{id:"optimizing-the-execution-of-the-forend-for-loops",children:"Optimizing the execution of the For...End for loops"}),"\n",(0,i.jsx)(n.p,{children:"You can use Real and Long Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables."}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsx)(n.li,{children:"Here is an example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" C_LONGINT($vlCounter) //use local Long Integer variables\n For($vlCounter;1;10000)\n  //Do something\n End for\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nested-forend-for-looping-structures",children:"Nested For...End for looping structures"}),"\n",(0,i.jsxs)(n.p,{children:["You can nest as many control structures as you (reasonably) need. This includes nesting ",(0,i.jsx)(n.code,{children:"For...End for"})," loops. To avoid mistakes, make sure to use different counter variables for each looping structure."]}),"\n",(0,i.jsx)(n.p,{children:"Here are two examples:"}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsx)(n.li,{children:"The following example goes through all the elements of a two-dimensional array:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For($vlElem;1;Size of array(anArray))\n  //...\n  //Do something with the row\n  //...\n    For($vlSubElem;1;Size of array(anArray{$vlElem}))\n  //Do something with the element\n       anArray{$vlElem}{$vlSubElem}:=...\n    End for\n End for\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsx)(n.li,{children:"The following example builds an array of pointers to all the date fields present in the database:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" ARRAY POINTER($apDateFields;0)\n $vlElem:=0\n For($vlTable;1;Get last table number)\n    If(Is table number valid($vlTable))\n       For($vlField;1;Get last field number($vlTable))\n          If(Is field number valid($vlTable;$vlField))\n             $vpField:=Field($vlTable;$vlField)\n             If(Type($vpField->)=Is date)\n                $vlElem:=$vlElem+1\n                INSERT IN ARRAY($apDateFields;$vlElem)\n                $apDateFields{$vlElem}:=$vpField\n             End if\n          End if\n       End for\n    End if\n End for\n"})}),"\n",(0,i.jsx)(n.h2,{id:"for-eachend-for-each",children:"For each...End for each"}),"\n",(0,i.jsxs)(n.p,{children:["The formal syntax of the ",(0,i.jsx)(n.code,{children:"For each...End for each"})," control flow structure is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}\n    statement(s)\n End for each\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"For each...End for each"})," structure iterates a specified ",(0,i.jsx)(n.em,{children:"Current_item"})," over all values of the ",(0,i.jsx)(n.em,{children:"Expression"}),". The ",(0,i.jsx)(n.em,{children:"Current_item"})," type depends on the ",(0,i.jsx)(n.em,{children:"Expression"})," type. The ",(0,i.jsx)(n.code,{children:"For each...End for each"})," loop can iterate through three ",(0,i.jsx)(n.em,{children:"Expression"})," types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"collections: loop through each element of the collection,"}),"\n",(0,i.jsx)(n.li,{children:"entity selections: loop through each entity,"}),"\n",(0,i.jsx)(n.li,{children:"objects: loop through each object property."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following table compares the three types of ",(0,i.jsx)(n.code,{children:"For each...End for each"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Loop through collections"}),(0,i.jsx)(n.th,{children:"Loop through entity selections"}),(0,i.jsx)(n.th,{children:"Loop through objects"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Current_Item type"}),(0,i.jsx)(n.td,{children:"Variable of the same type as collection elements"}),(0,i.jsx)(n.td,{children:"Entity"}),(0,i.jsx)(n.td,{children:"Text variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Expression type"}),(0,i.jsx)(n.td,{children:"Collection (with elements of the same type)"}),(0,i.jsx)(n.td,{children:"Entity selection"}),(0,i.jsx)(n.td,{children:"Object"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Number of loops (by default)"}),(0,i.jsx)(n.td,{children:"Number of collection elements"}),(0,i.jsx)(n.td,{children:"Number of entities in the selection"}),(0,i.jsx)(n.td,{children:"Number of object properties"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Support of begin / end parameters"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations."}),"\n",(0,i.jsxs)(n.li,{children:["By default, the enclosed ",(0,i.jsx)(n.em,{children:"statement(s)"})," are executed for each value in ",(0,i.jsx)(n.em,{children:"Expression"}),". It is, however, possible to exit the loop by testing a condition either at the begining of the loop (",(0,i.jsx)(n.code,{children:"While"}),") or at the end of the loop (",(0,i.jsx)(n.code,{children:"Until"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"begin"})," and ",(0,i.jsx)(n.em,{children:"end"})," optional parameters can be used with collections and entity selections to define boundaries for the loop."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"For each...End for each"})," loop can be used on a ",(0,i.jsx)(n.strong,{children:"shared collection"})," or a ",(0,i.jsx)(n.strong,{children:"shared object"}),". If your code needs to modify one or more element(s) of the collection or object properties, you need to use the ",(0,i.jsx)(n.code,{children:"Use...End use"})," keywords. Depending on your needs, you can call the ",(0,i.jsx)(n.code,{children:"Use...End use"})," keywords:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"before entering the loop, if items should be modified together for integrity reasons, or"}),"\n",(0,i.jsx)(n.li,{children:"within the loop when only some elements/properties need to be modified and no integrity management is required."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"loop-through-collections",children:"Loop through collections"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"For each...End for each"})," is used with an ",(0,i.jsx)(n.em,{children:"Expression"})," of the ",(0,i.jsx)(n.em,{children:"Collection"})," type, the ",(0,i.jsx)(n.em,{children:"Current_Item"})," parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection."]}),"\n",(0,i.jsxs)(n.p,{children:["The collection must contain only elements of the same type, otherwise an error will be returned as soon as the ",(0,i.jsx)(n.em,{children:"Current_Item"})," variable is assigned the first mismatched value type."]}),"\n",(0,i.jsxs)(n.p,{children:["At each loop iteration, the ",(0,i.jsx)(n.em,{children:"Current_Item"})," variable is automatically filled with the matching element of the collection. The following points must be taken into account:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.em,{children:"Current_Item"})," variable is of the object type or collection type (i.e. if ",(0,i.jsx)(n.em,{children:"Expression"})," is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"Current_Item"})," variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops."]}),"\n",(0,i.jsxs)(n.li,{children:["If the collection contains elements with a ",(0,i.jsx)(n.strong,{children:"Null"})," value, an error will be generated if the ",(0,i.jsx)(n.em,{children:"Current_Item"})," variable type does not support ",(0,i.jsx)(n.strong,{children:"Null"})," values (such as longint variables)."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to compute some statistics for a collection of numbers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" C_COLLECTION($nums)\n $nums:=New collection(10;5001;6665;33;1;42;7850)\n C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)\n For each($item;$nums)\n    If($item%2=0)\n       $vEven:=$vEven+1\n    Else\n       $vOdd:=$vOdd+1\n    End if\n    Case of\n       :($item<5000)\n          $vUnder:=$vUnder+1\n       :($item>6000)\n          $vOver:=$vOver+1\n    End case\n End for each\n  //$vEven=3, $vOdd=4\n  //$vUnder=4,$vOver=2\n"})}),"\n",(0,i.jsx)(n.h3,{id:"loop-through-entity-selections",children:"Loop through entity selections"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"For each...End for each"})," is used with an ",(0,i.jsx)(n.em,{children:"Expression"})," of the ",(0,i.jsx)(n.em,{children:"Entity selection"})," type, the ",(0,i.jsx)(n.em,{children:"Current_Item"})," parameter is the entity that is currently processed."]}),"\n",(0,i.jsxs)(n.p,{children:["The number of loops is based on the number of entities in the entity selection. On each loop iteration, the ",(0,i.jsx)(n.em,{children:"Current_Item"})," parameter is automatically filled with the entity of the entity selection that is currently processed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop."]}),"\n",(0,i.jsxs)(n.p,{children:["Keep in mind that any modifications applied on the current entity must be saved explicitly using ",(0,i.jsx)(n.code,{children:"entity.save( )"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to raise the salary of all British employees in an entity selection:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" C_OBJECT(emp)\n For each(emp;ds.Employees.query(\"country='UK'\"))\n    emp.salary:=emp.salary*1,03\n    emp.save()\n End for each\n"})}),"\n",(0,i.jsx)(n.h3,{id:"loop-through-object-properties",children:"Loop through object properties"}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"For each...End for each"})," is used with an ",(0,i.jsx)(n.em,{children:"Expression"})," of the Object type, the ",(0,i.jsx)(n.em,{children:"Current_Item"})," parameter is a text variable automatically filled with the name of the currently processed property."]}),"\n",(0,i.jsx)(n.p,{children:"The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object."}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to switch the names to uppercase in the following object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'{\n    "firstname": "gregory",\n    "lastname": "badikora",\n    "age": 20\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can write:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" For each(property;vObject)\n    If(Value type(vObject[property])=Is text)\n       vObject[property]:=Uppercase(vObject[property])\n    End if\n End for each\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "firstname": "GREGORY",\n    "lastname": "BADIKORA",\n    "age": 20\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"begin--end-parameters",children:"begin / end parameters"}),"\n",(0,i.jsx)(n.p,{children:"You can define bounds to the iteration using the optional begin and end parameters."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," The ",(0,i.jsx)(n.em,{children:"begin"})," and ",(0,i.jsx)(n.em,{children:"end"})," parameters can only be used in iterations through collections and entity selections (they are ignored on object properties)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.em,{children:"begin"})," parameter, pass the element position in ",(0,i.jsx)(n.em,{children:"Expression"})," at which to start the iteration (",(0,i.jsx)(n.em,{children:"begin"})," is included)."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.em,{children:"end"})," parameter, you can also pass the element position in ",(0,i.jsx)(n.em,{children:"Expression"})," at which to stop the iteration (",(0,i.jsx)(n.em,{children:"end"})," is excluded)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"end"})," is omitted or if ",(0,i.jsx)(n.em,{children:"end"})," is greater than the number of elements in ",(0,i.jsx)(n.em,{children:"Expression"}),", elements are iterated from ",(0,i.jsx)(n.em,{children:"begin"})," until the last one (included).\nIf the ",(0,i.jsx)(n.em,{children:"begin"})," and ",(0,i.jsx)(n.em,{children:"end"})," parameters are positive values, they represent actual positions of elements in ",(0,i.jsx)(n.em,{children:"Expression"}),".\nIf ",(0,i.jsx)(n.em,{children:"begin"})," is a negative value, it is recalculed as ",(0,i.jsx)(n.code,{children:"begin:=begin+Expression size"})," (it is considered as the offset from the end of ",(0,i.jsx)(n.em,{children:"Expression"}),"). If the calculated value is negative, ",(0,i.jsx)(n.em,{children:"begin"})," is set to 0.\n",(0,i.jsx)(n.strong,{children:"Note:"})," Even if begin is negative, the iteration is still performed in the standard order.\nIf ",(0,i.jsx)(n.em,{children:"end"})," is a negative value, it is recalculed as ",(0,i.jsx)(n.code,{children:"end:=end+Expression size"})]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a collection contains 10 elements (numbered from 0 to 9)"}),"\n",(0,i.jsx)(n.li,{children:"begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)"}),"\n",(0,i.jsx)(n.li,{children:"end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' C_COLLECTION($col;$col2)\n $col:=New collection("a";"b";"c";"d";"e")\n $col2:=New collection(1;2;3)\n C_TEXT($item)\n For each($item;$col;0;3)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c"]\n For each($item;$col;-2;-1)\n    $col2.push($item)\n End for each\n  //$col2=[1,2,3,"a","b","c","d"]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"until-and-while-conditions",children:"Until and While conditions"}),"\n",(0,i.jsxs)(n.p,{children:["You can control the ",(0,i.jsx)(n.code,{children:"For each...End for each"})," execution by adding an ",(0,i.jsx)(n.code,{children:"Until"})," or a ",(0,i.jsx)(n.code,{children:"While"})," condition to the loop. When an ",(0,i.jsx)(n.code,{children:"Until(condition)"})," statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to ",(0,i.jsx)(n.code,{children:"True"}),", whereas when is case of a ",(0,i.jsx)(n.code,{children:"While(condition)"})," statement, the iteration will stop when the condition is first evaluated to ",(0,i.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can pass either keyword depending on your needs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Until"})," condition is tested at the end of each iteration, so if the ",(0,i.jsx)(n.em,{children:"Expression"})," is not empty or null, the loop will be executed at least once."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"While"})," condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)\n \n $total:=0\n For each($num;$colNum)While($total<30) //tested at the beginning\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)\n \n $total:=1000\n For each($num;$colNum)Until($total>30) //tested at the end\n    $total:=$total+$num\n End for each\n ALERT(String($total)) //$total = 1001 (1000+1)\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var o=t(667294);let i={},l=o.createContext(i);function s(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);