"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73803"],{178378:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/resolve-pointer","title":"RESOLVE POINTER","description":"RESOLVE POINTER ( aPointer ; varName ; tableNum ; fieldNum )","source":"@site/versioned_docs/version-20-R7/commands-legacy/resolve-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/resolve-pointer","permalink":"/docs/commands/resolve-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresolve-pointer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resolve-pointer","title":"RESOLVE POINTER","slug":"/commands/resolve-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Null","permalink":"/docs/commands/null"},"next":{"title":"Self","permalink":"/docs/commands/self"}}'),s=r("785893"),i=r("250065");let d={id:"resolve-pointer",title:"RESOLVE POINTER",slug:"/commands/resolve-pointer",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RESOLVE POINTER"})," ( ",(0,s.jsx)(n.em,{children:"aPointer"})," ; ",(0,s.jsx)(n.em,{children:"varName"})," ; ",(0,s.jsx)(n.em,{children:"tableNum"})," ; ",(0,s.jsx)(n.em,{children:"fieldNum"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aPointer"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pointer for which to retrieve the referenced object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"varName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Name of referenced variable or empty string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Number of referenced table or array element or 0 or -1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Number of referenced field or 0"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The RESOLVE POINTER command retrieves the information of the object referenced by the pointer expression ",(0,s.jsx)(n.em,{children:"aPointer"})," and returns it into the parameters ",(0,s.jsx)(n.em,{children:"varName"}),", ",(0,s.jsx)(n.em,{children:"tableNum,"})," and ",(0,s.jsx)(n.em,{children:"fieldNum"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Depending on the nature of the referenced object, RESOLVE POINTER returns the following values:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Referenced object"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"varName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"tableNum"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"fieldNum"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"None (NIL pointer)"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"Name of the variable"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"-1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"Name of the array"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"-1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Array element"}),(0,s.jsx)(n.td,{children:"Name of the array"}),(0,s.jsx)(n.td,{children:"Element number"}),(0,s.jsx)(n.td,{children:"-1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2D array element"}),(0,s.jsx)(n.td,{children:"Name of the 2D array"}),(0,s.jsx)(n.td,{children:"Element row number"}),(0,s.jsx)(n.td,{children:"Element column number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"Table number"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"Table number"}),(0,s.jsx)(n.td,{children:"Field number"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the value you pass in ",(0,s.jsx)(n.em,{children:"pointer"})," is not a pointer expression, a syntax error occurs."]}),"\n",(0,s.jsx)(n.li,{children:"The RESOLVE POINTER command does not work with pointers to local variables. In fact, by definition several local variables with the same name could exist in different locations, so it is not possible for the command to find the correct variable."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Within a form, you create a group of 100 enterable variables called v1, v2... v100. To do so, you perform the following steps:"}),"\n",(0,s.jsx)(n.p,{children:"a. Create one enterable variable that you name v."}),"\n",(0,s.jsx)(n.p,{children:"b. Set the properties of the object."}),"\n",(0,s.jsx)(n.p,{children:"c. Attach the following method to that object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0DoSomething(Self)\xa0// DoSomething being a project method in your database\n"})}),"\n",(0,s.jsx)(n.p,{children:"d. At this point, you can either duplicate the variable as many times as you need, or use the Objects on Grid feature in the Form Editor."}),"\n",(0,s.jsx)(n.p,{children:"e. Within the DoSomething method, if you need to know the index of the variable for which the method is called, you write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0RESOLVE POINTER($1;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0$vlVarNum:=Num(Substring($vsVarName;2))\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that by constructing your form in this way, you write the methods for the 100 variables only once; you do not need to write DoSomething (1), DoSomething (2)...,DoSomething (100)."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"For debugging purposes, you need to verify that the second parameter ($2) to a method is a pointer to a table. At the beginning of this method, you write: // ..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(<>DebugOn)\n\xa0\xa0\xa0\xa0RESOLVE POINTER($2;$vsVarName;$vlTableNum;$vlFieldNum)\n\xa0\xa0\xa0\xa0If(Not(($vlTableNum>0)&($vlFieldNum=-1)&($vsVarName="")))\n\xa0\xa0// WARNING: The pointer is not a reference to a table\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// ...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["See example for the ",(0,s.jsx)(n.em,{children:"_o_DRAG AND DROP PROPERTIES"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of a 2D array pointer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(atCities;100;50)\n\xa0var $city : Pointer\n\xa0atCities{1}{2}:="Rome"\n\xa0atCities{1}{5}:="Paris"\n\xa0atCities{2}{6}:="New York"\n\xa0\xa0// ...other values\n\xa0$city:=->atCities{1}{5}\n\xa0RESOLVE POINTER($city;$var;$rowNum;$colNum)\n\xa0\xa0//$var="atCities"\n\xa0\xa0//$rowNum="1"\n\xa0\xa0//$colNum="5"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-pointer",children:"Get pointer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/is-a-variable",children:"Is a variable"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/is-nil-pointer",children:"Is nil pointer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/table",children:"Table"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"394"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);