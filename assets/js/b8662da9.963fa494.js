"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49553"],{424814:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/array-to-list","title":"ARRAY TO LIST","description":"ARRAY TO LIST ( array ; list {; itemRefs} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/array-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/array-to-list","permalink":"/docs/commands/array-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"array-to-list","title":"ARRAY TO LIST","slug":"/commands/array-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TIME","permalink":"/docs/commands/array-time"},"next":{"title":"ARRAY TO SELECTION","permalink":"/docs/commands/array-to-selection"}}'),s=r("785893"),i=r("250065");let a={id:"array-to-list",title:"ARRAY TO LIST",slug:"/commands/array-to-list",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY TO LIST"})," ( ",(0,s.jsx)(n.em,{children:"array"})," ; ",(0,s.jsx)(n.em,{children:"list"})," {; ",(0,s.jsx)(n.em,{children:"itemRefs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array from which to copy array elements"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"list"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name or reference of list into which to copy array elements"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"itemRefs"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Numeric array of item reference numbers"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ARRAY TO LIST command creates or replaces the hierarchical list or the choice list (created in the List editor) that is specified in ",(0,s.jsx)(n.em,{children:"list"})," using the elements of the array ",(0,s.jsx)(n.em,{children:"array."})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"list"})," parameter, you can either pass a choice list (string) or a hierarchical list reference (",(0,s.jsx)(n.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). In the latter case, this list must have already been created previously (for example using the ",(0,s.jsx)(n.a,{href:"/docs/commands/new-list",children:"New list"})," command) in order for this command to work."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"itemRefs"})," parameter, if specified, must be a numeric array synchronized with the array ",(0,s.jsx)(n.em,{children:"array"}),". Each element, then, indicates the list item reference number for the corresponding element in ",(0,s.jsx)(n.em,{children:"array"}),". If you omit this parameter, 4D automatically sets the list item reference numbers to 1, 2... N."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility Note:"})," The ",(0,s.jsx)(n.strong,{children:"ARRAY TO LIST"})," command must be used with caution because of the following limitations:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This command only lets you set first-level items of the list."}),"\n",(0,s.jsx)(n.li,{children:"When you use this command with a choice list, it modifies the structure of the application (lists are saved in the structure file), so any modifications made locally are lost when the structure file is updated in production."}),"\n",(0,s.jsxs)(n.li,{children:["This command cannot be used with a choice list in a structure loaded in ",(0,s.jsx)(n.strong,{children:"read only"}),", such as a .4dz project or a component."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ARRAY TO LIST to build a list based on the elements of an array. However, to free yourself from these restrictions and make full use of the lists of values, we recommend using the commands of the ",(0,s.jsx)(n.em,{children:"Hierarchical Lists"})," theme."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example copies the array ",(0,s.jsx)(n.em,{children:"atRegions"})," to the list called \u201CRegions:\u201D"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TO LIST(atRegions;"Regions")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to put the distinct values of a field into a list, for example to create a hierarchical pop-up menu. You can write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Company])\n\xa0DISTINCT VALUES([Company]country;$arrCountries)\n\xa0CountryList:=New list\n\xa0ARRAY TO LIST($arrCountries;CountryList)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(n.p,{children:["An error ",(0,s.jsx)(n.em,{children:"-9957"})," is generated when ARRAY TO LIST is applied to a list that is currently being edited in the Design environment List Editor. You can catch this error using an ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," project method."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/list-to-array",children:"LIST TO ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/load-list",children:"Load list"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"287"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);