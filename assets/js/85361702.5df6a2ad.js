"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23499],{53169:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=l(474848),o=l(28453);const c={id:"new-collection",title:"New collection",displayed_sidebar:"docs"},s=void 0,i={id:"commands/new-collection",title:"New collection",description:"New collection {( ...value Collection",source:"@site/versioned_docs/version-20-R7/commands/new-collection.md",sourceDirName:"commands",slug:"/commands/new-collection",permalink:"/docs/commands/new-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"new-collection",title:"New collection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"COLLECTION TO ARRAY",permalink:"/docs/commands/collection-to-array"},next:{title:"New shared collection",permalink:"/docs/commands/new-shared-collection"}},r={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"New collection"})," {( ",(0,t.jsx)(n.em,{children:"...value"})," : any )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Collection's value(s)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"New collection"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"New collection"})," command creates a new empty or prefilled collection and returns its reference. Collections can be handled using properties and functions of the ",(0,t.jsx)(n.a,{href:"/docs/API/CollectionClass",children:"Collection class API"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do not pass any parameters, ",(0,t.jsx)(n.code,{children:"New collection"})," creates an empty collection and returns its reference."]}),"\n",(0,t.jsx)(n.p,{children:"You must assign the returned reference to a 4D variable of the Collection type."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Keep in mind that ",(0,t.jsx)(n.code,{children:"var : Collection"})," statement declares a variable of the ",(0,t.jsx)(n.code,{children:"Collection"})," type but does not create any collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Optionally, you can prefill the new collection by passing one or several ",(0,t.jsx)(n.em,{children:"value"}),"(s) as parameter(s)."]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, you can add or modify elements subsequently through assignment. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a ",(0,t.jsx)(n.strong,{children:"null"})," value."]}),"\n",(0,t.jsx)(n.p,{children:"You can pass any number of values of any supported type (number, text, date, picture, pointer, object, collection...). Unlike arrays, collections can mix data of different types."}),"\n",(0,t.jsx)(n.p,{children:"You must pay attention to the following conversion issues:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['If you pass a pointer, it is kept "as is"; it is evaluated using the ',(0,t.jsx)(n.code,{children:"JSON Stringify"})," command"]}),"\n",(0,t.jsxs)(n.li,{children:['Dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" database setting. When converting 4D dates into text prior to storing them in the collection, by default the program takes the local time zone into account. You can modify this behavior using the ',(0,t.jsx)(n.code,{children:"Dates inside objects"})," selector of the ",(0,t.jsx)(n.code,{children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,t.jsx)(n.li,{children:"If you pass a time, it is stored as a number of milliseconds (Real)."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"You want to create a new empty collection and assign it to a 4D collection variable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" var $myCol : Collection\n $myCol:=New collection\n  //$myCol=[]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"You want to create a prefilled collection:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $filledColl : Collection\n $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)\n  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"You create a new collection and then add a new element:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $coll : Collection\n $coll:=New collection("a";"b";"c")\n  //$coll=["a","b","c"]\n $coll[9]:="z" //add a 10th element with value "z"\n $vcolSize:=$coll.length //10\n  //$coll=["a","b","c",null,null,null,null,null,null,"z"]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/new-shared-collection",children:"New shared collection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/type",children:"Type"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>i});var t=l(296540);const o={},c=t.createContext(o);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);