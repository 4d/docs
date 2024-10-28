"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57127],{661742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(474848),s=t(28453);const i={id:"array-to-list",title:"ARRAY TO LIST",slug:"/commands/array-to-list",displayed_sidebar:"docs"},a=void 0,l={id:"commands-legacy/array-to-list",title:"ARRAY TO LIST",description:"ARRAY TO LIST ( array ; list {; itemRefs} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/array-to-list.md",sourceDirName:"commands-legacy",slug:"/commands/array-to-list",permalink:"/docs/commands/array-to-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"array-to-list",title:"ARRAY TO LIST",slug:"/commands/array-to-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ARRAY TIME",permalink:"/docs/commands/array-time"},next:{title:"ARRAY TO SELECTION",permalink:"/docs/commands/array-to-selection"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Example",id:"example-1",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ARRAY TO LIST"})," ( ",(0,r.jsx)(n.em,{children:"array"})," ; ",(0,r.jsx)(n.em,{children:"list"})," {; ",(0,r.jsx)(n.em,{children:"itemRefs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Array from which to copy array elements"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"list"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name or reference of list into which to copy array elements"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"itemRefs"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Numeric array of item reference numbers"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ARRAY TO LIST command creates or replaces the hierarchical list or the choice list (created in the List editor) that is specified in ",(0,r.jsx)(n.em,{children:"list"})," using the elements of the array ",(0,r.jsx)(n.em,{children:"array."})]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"list"})," parameter, you can either pass a choice list (string) or a hierarchical list reference (",(0,r.jsx)(n.a,{href:"#",title:"A Longint reference to a hierachical list",children:"ListRef"}),"). In the latter case, this list must have already been created previously (for example using the ",(0,r.jsx)(n.a,{href:"/docs/commands/new-list",children:"New list"})," command) in order for this command to work."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"itemRefs"})," parameter, if specified, must be a numeric array synchronized with the array ",(0,r.jsx)(n.em,{children:"array"}),". Each element, then, indicates the list item reference number for the corresponding element in ",(0,r.jsx)(n.em,{children:"array"}),". If you omit this parameter, 4D automatically sets the list item reference numbers to 1, 2... N."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibility Note:"})," The ",(0,r.jsx)(n.strong,{children:"ARRAY TO LIST"})," command must be used with caution because of the following limitations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This command only lets you set first-level items of the list."}),"\n",(0,r.jsx)(n.li,{children:"When you use this command with a choice list, it modifies the structure of the application (lists are saved in the structure file), so any modifications made locally are lost when the structure file is updated in production."}),"\n",(0,r.jsxs)(n.li,{children:["This command cannot be used with a choice list in a structure loaded in ",(0,r.jsx)(n.strong,{children:"read only"}),", such as a .4dz project or a component."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can use ARRAY TO LIST to build a list based on the elements of an array. However, to free yourself from these restrictions and make full use of the lists of values, we recommend using the commands of the ",(0,r.jsx)(n.em,{children:"Hierarchical Lists"})," theme."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example copies the array ",(0,r.jsx)(n.em,{children:"atRegions"})," to the list called \u201cRegions:\u201d"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TO LIST(atRegions;"Regions")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to put the distinct values of a field into a list, for example to create a hierarchical pop-up menu. You can write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ALL RECORDS([Company])\n\xa0DISTINCT VALUES([Company]country;$arrCountries)\n\xa0CountryList:=New list\n\xa0ARRAY TO LIST($arrCountries;CountryList)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(n.p,{children:["An error ",(0,r.jsx)(n.em,{children:"-9957"})," is generated when ARRAY TO LIST is applied to a list that is currently being edited in the Design environment List Editor. You can catch this error using an ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"})," project method."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/list-to-array",children:"LIST TO ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/load-list",children:"Load list"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/save-list",children:"SAVE LIST"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(296540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);