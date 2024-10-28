"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2936],{196956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=r(474848),a=r(28453);const n={id:"get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",slug:"/commands/get-list-item-parameter-arrays",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",description:"GET LIST ITEM PARAMETER ARRAYS ( { ;} list ; itemRef |  ; arrSelection {; arrValues} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-list-item-parameter-arrays.md",sourceDirName:"commands-legacy",slug:"/commands/get-list-item-parameter-arrays",permalink:"/docs/commands/get-list-item-parameter-arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-list-item-parameter-arrays",title:"GET LIST ITEM PARAMETER ARRAYS",slug:"/commands/get-list-item-parameter-arrays",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET LIST ITEM PARAMETER",permalink:"/docs/commands/get-list-item-parameter"},next:{title:"GET LIST ITEM PROPERTIES",permalink:"/docs/commands/get-list-item-properties"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"list"})," ; itemRef | * ; ",(0,s.jsx)(t.em,{children:"arrSelection"})," {; ",(0,s.jsx)(t.em,{children:"arrValues"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"If specified, list is an object name (string)If omitted, list is a list reference number"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"list"}),(0,s.jsx)(t.td,{children:"Integer, Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"List reference number (if * omitted) orName of list type object (if * passed)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"itemRef | *"}),(0,s.jsx)(t.td,{children:"Longint, Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Item reference number or 0 for the last item appended to the list or * for the current list item"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arrSelection"}),(0,s.jsx)(t.td,{children:"Text array"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Array of parameter names"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arrValues"}),(0,s.jsx)(t.td,{children:"Text array"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Array of parameter values"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," command lets you retrieve all the parameters in a single call (as well as, optionally, their values) that are associated with the ",(0,s.jsx)(t.em,{children:"itemRef"})," item in the hierarchical list whose reference or object name is passed in the ",(0,s.jsx)(t.em,{children:"list"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["Parameters associated with items store additional information about each item. They are set using the ",(0,s.jsx)(t.a,{href:"/docs/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the first optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, this indicates that ",(0,s.jsx)(t.em,{children:"list"})," is an object name (string) corresponding to a list representation in the form. If you do not pass this parameter, this indicates that ",(0,s.jsx)(t.em,{children:"list"})," is a hierarchical list reference (",(0,s.jsx)(t.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). If you use a single list representation or work with structural items (second ",(0,s.jsx)(t.em,{children:"*"})," omitted), you can use either syntax. However, if you use several representations of the same list and work with the current item (second ",(0,s.jsx)(t.em,{children:"*"})," passed), you must use the syntax based on the object name because each representation may have its own current item."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET LIST ITEM PARAMETER ARRAYS"})," returns parameters set for the ",(0,s.jsx)(t.em,{children:"itemRef"})," item in the ",(0,s.jsx)(t.em,{children:"arrSelectors"})," text array. When the ",(0,s.jsx)(t.em,{children:"arrValues"})," text array is passed, the command uses it to return the values associated with these parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"arrValues"}),' must be a text type array. If you have associated values that are not Text (number or Boolean), they are converted to strings (True="1", False="0").']}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Given the following hierarchical list:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0<>HL:=New list\n\xa0$ID:=30\n\xa0APPEND TO LIST(<>HL;"Martin";$ID)\n\xa0\xa0//5 parameters\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Firstname";"Phil")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Birthday";"01/02/1978")\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Male";True)\xa0//Boolean\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"Age";33)\xa0//number\n\xa0SET LIST ITEM PARAMETER(<>HL;$ID;"City";"Dallas")\n'})}),"\n",(0,s.jsxs)(t.p,{children:['For more simplicity, the list was associated with a list object having the same name ("<>HL").',(0,s.jsx)(t.br,{}),'\nWhen the item "Martin" is selected in the list, you can retrieve its parameters by executing the following code:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames)\n\xa0\xa0// arrParamNames{1} contains "Firstname"\n\xa0\xa0// arrParamNames{2} contains "Birthday"\n\xa0\xa0// arrParamNames{3} contains "Male"\n\xa0\xa0// arrParamNames{4} contains "Age"\n\xa0\xa0// arrParamNames{5} contains "City"\n'})}),"\n",(0,s.jsx)(t.p,{children:"If you want to get the parameter values as well, you write:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrParamNames;0)\n\xa0ARRAY TEXT(arrParamValues;0)\n\xa0GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames;arrParamValues)\n\xa0\xa0// arrParamValues{1} contains "Phil"\n\xa0\xa0// arrParamValues{2} contains "01/02/1978"\n\xa0\xa0// arrParamValues{3} contains "1"\n\xa0\xa0// arrParamValues{4} contains "33"\n\xa0\xa0// arrParamValues{5} contains "Dallas"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(296540);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);