"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4351],{707568:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var l=o(474848),c=o(28453);const t={id:"collection",title:"Collection"},s=void 0,i={id:"Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).",source:"@site/versioned_docs/version-20-R7/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Boolean",permalink:"/docs/Concepts/boolean"},next:{title:"Date",permalink:"/docs/Concepts/date"}},r={},a=[{value:"Instantiation",id:"instantiation",level:2},{value:"<code>New collection</code> command",id:"new-collection-command",level:3},{value:"<code>[]</code> operator",id:"-operator",level:3},{value:"Regular or shared collection",id:"regular-or-shared-collection",level:3},{value:"Collection functions",id:"collection-functions",level:2},{value:"propertyPath parameter",id:"propertypath-parameter",level:3},{value:"Collection operators",id:"collection-operators",level:2},{value:"Undefined",id:"undefined",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null)."}),"\n",(0,l.jsxs)(n.p,{children:["Collection type variables are managed using ",(0,l.jsx)(n.a,{href:"/docs/Concepts/object#properties",children:"object notation"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"To access a collection element, you need to pass the element number inside square brackets:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can pass any valid 4D expression which returns a positive integer in ",(0,l.jsx)(n.em,{children:"expression"}),". Examples:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" myCollection[5]  //access to 6th element of the collection\n myCollection[$var]\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Warning:"})," Collection elements are numbered from 0."]}),"\n",(0,l.jsx)(n.p,{children:"You can assign a value to a collection element or get a collection element value:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,l.jsx)(n.p,{children:"If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var myCol : Collection\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,l.jsx)(n.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,l.jsx)(n.p,{children:"Collections must have been instantiated, otherwise trying to read or modify their elements will generate a syntax error."}),"\n",(0,l.jsx)(n.p,{children:"Collection instantiation can be done in one of the following ways:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["using the ",(0,l.jsx)(n.a,{href:"/docs/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," command,"]}),"\n",(0,l.jsxs)(n.li,{children:["using the ",(0,l.jsx)(n.code,{children:"[]"})," operator."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Several 4D commands and functions return collections, for example ",(0,l.jsx)(n.a,{href:"/docs/commands/monitored-activity",children:(0,l.jsx)(n.code,{children:"Monitored activity"})})," or ",(0,l.jsx)(n.a,{href:"/docs/API/CollectionClass#copy",children:(0,l.jsx)(n.code,{children:"collection.copy"})}),". In this case, it is not necessary to instantiate explicitely the collection, the 4D language does it for you."]})}),"\n",(0,l.jsxs)(n.h3,{id:"new-collection-command",children:[(0,l.jsx)(n.code,{children:"New collection"})," command"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," command creates a new empty or prefilled collection and returns its reference."]}),"\n",(0,l.jsx)(n.p,{children:"Examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' var $colVar : Collection //declaration of a collection type 4D variable\n $colVar:=New collection //instantiation of the collection and assignment to the 4D variable\n \n var $colFilled : Collection\n $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"-operator",children:[(0,l.jsx)(n.code,{children:"[]"})," operator"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"[]"})," operator allows you to create a ",(0,l.jsx)(n.strong,{children:"collection literal"}),". A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (",(0,l.jsx)(n.code,{children:"[]"}),"). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified."]}),"\n",(0,l.jsxs)(n.p,{children:["Since any element is considered an expression, you can create sub-collections using ",(0,l.jsx)(n.code,{children:"[]"})," in elements.  You can also create and reference ",(0,l.jsx)(n.strong,{children:"object literals"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"If an element is undefined, it will appear as Null in the collection."}),"\n",(0,l.jsx)(n.p,{children:"Examples:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $col1; $col2; $users : Collection\n$col1:=[] //empty collection\n$col2:=[1;2;3;4;5;6] //collection of numbers\n//collection of objects\n$users:=[{name: "Alice"; \\\n\theight: 183; \\\n\teyecolor: "hazel"; \\\n\tid: $col2[5]\\\n\t}; \\\n\t{name: "Bob"; \\\n\theight: 172; \\\n\teyecolor: "blue"\\\n\t}]\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax ",(0,l.jsx)(n.code,{children:"[tableName]"})," will take priority."]})}),"\n",(0,l.jsx)(n.h3,{id:"regular-or-shared-collection",children:"Regular or shared collection"}),"\n",(0,l.jsx)(n.p,{children:"You can create two types of collections:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["regular (non-shared) collections, using the ",(0,l.jsx)(n.a,{href:"/docs/commands/new-collection",children:(0,l.jsx)(n.code,{children:"New collection"})})," command or collection literal syntax (",(0,l.jsx)(n.code,{children:"[]"}),"). These collections can be edited without any specific access control but cannot be shared between processes."]}),"\n",(0,l.jsxs)(n.li,{children:["shared collections, using the ",(0,l.jsx)(n.a,{href:"/docs/commands/new-shared-collection",children:(0,l.jsx)(n.code,{children:"New shared collection"})})," command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by ",(0,l.jsx)(n.a,{href:"/docs/Concepts/shared#useend-use",children:(0,l.jsx)(n.code,{children:"Use...End use"})})," structures."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["For more information, refer to the ",(0,l.jsx)(n.a,{href:"/docs/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n",(0,l.jsx)(n.h2,{id:"collection-functions",children:"Collection functions"}),"\n",(0,l.jsxs)(n.p,{children:["4D collection references benefit from special class functions (sometimes named ",(0,l.jsx)(n.em,{children:"member functions"}),"). Collection functions are listed in the ",(0,l.jsx)(n.a,{href:"/docs/API/CollectionClass",children:"Class API Reference"})," section."]}),"\n",(0,l.jsx)(n.p,{children:"For example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$newCol:=$col.copy() //deep copy of $col to $newCol\n$col.push(10;100) //add 10 and 100 to the collection\n"})}),"\n",(0,l.jsx)(n.p,{children:"Some functions return the original collection after modification, so that you can run the calls in a sequence:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"propertypath-parameter",children:"propertyPath parameter"}),"\n",(0,l.jsxs)(n.p,{children:["Several functions accept a ",(0,l.jsx)(n.em,{children:"propertyPath"})," as parameter. This parameter stands for:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'either an object property name, for example "lastName"'}),"\n",(0,l.jsx)(n.li,{children:'or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".'}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Warning:"})," When using functions and ",(0,l.jsx)(n.em,{children:"propertyPath"}),' parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:']}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //undefined\n $vmin:=$col.min(["My.special.property"]) //error\n'})}),"\n",(0,l.jsx)(n.h2,{id:"collection-operators",children:"Collection operators"}),"\n",(0,l.jsxs)(n.p,{children:["You can use comparison operators with ",(0,l.jsx)(n.strong,{children:"collection references"}),", which means that you can evaluate if two or more references point to the same instance of a collection."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'var $c1:=["a";42] //reference to an instance\nvar $c2:=["a";42] //reference to a different instance\nvar $c3:=$c1 //reference to the same instance\n'})}),"\n",(0,l.jsx)(n.p,{children:"Based upon the code above, the comparison table is:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Operation"}),(0,l.jsx)(n.th,{children:"Syntax"}),(0,l.jsx)(n.th,{children:"Returns"}),(0,l.jsx)(n.th,{children:"Expression"}),(0,l.jsx)(n.th,{children:"Value"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Equality"}),(0,l.jsx)(n.td,{children:"collectionRef = collectionRef"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"$c1 = $c3"}),(0,l.jsx)(n.td,{children:"True"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"$c1 = $c2"}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Inequality"}),(0,l.jsx)(n.td,{children:"collectionRef # collectionRef"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"$c1 # $c3"}),(0,l.jsx)(n.td,{children:"False"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"$c1 # $c2"}),(0,l.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,l.jsxs)(n.p,{children:["Reading the ",(0,l.jsx)(n.strong,{children:"length"})," property of an undefined collection produces 0:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"     var $c : Collection //variable created but no collection is defined\n     $size:=$c.length //$size = 0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var l=o(296540);const c={},t=l.createContext(c);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);