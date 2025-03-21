"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33265"],{924051:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/create-index","title":"CREATE INDEX","description":"CREATE INDEX ( aTable ; fieldsArray ; indexType ; indexName {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/create-index.md","sourceDirName":"commands-legacy","slug":"/commands/create-index","permalink":"/docs/20-R7/commands/create-index","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-index","title":"CREATE INDEX","slug":"/commands/create-index","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Structure Access","permalink":"/docs/20-R7/commands/theme/Structure-Access"},"next":{"title":"DELETE INDEX","permalink":"/docs/20-R7/commands/delete-index"}}'),r=d("785893"),s=d("250065");let i={id:"create-index",title:"CREATE INDEX",slug:"/commands/create-index",displayed_sidebar:"docs"},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Note for deployment",id:"note-for-deployment",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CREATE INDEX"})," ( ",(0,r.jsx)(n.em,{children:"aTable"})," ; ",(0,r.jsx)(n.em,{children:"fieldsArray"})," ; ",(0,r.jsx)(n.em,{children:"indexType"})," ; ",(0,r.jsx)(n.em,{children:"indexName"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"aTable"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table for which to create an index"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fieldsArray"}),(0,r.jsx)(n.td,{children:"Pointer array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Pointer(s) to field(s) to be indexed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"indexType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type of index to create: -1 = Keywords, 0 = default, 1 = Standard B-Tree, 3 = Cluster B-Tree"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"indexName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Name of index to create"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If passed = asynchronous indexing"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"CREATE INDEX"})," command creates:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A standard index on one or more fields (composite index) or"}),"\n",(0,r.jsx)(n.li,{children:"A keyword index on a field."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The index is created for the ",(0,r.jsx)(n.em,{children:"aTable"})," table by using one or more fields designated by the ",(0,r.jsx)(n.em,{children:"fieldsArray"})," pointer array. This array contains a single row when you want to create a simple index and two or more rows when you want to create a composite index (except in the case of a keyword index). In the case of composite indexes, the order of the fields in the array is important when the index is being built."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"indexType"})," parameter sets the type of index to be created. You can pass one of the following constants, found in the ",(0,r.jsx)(n.em,{children:"Index Type"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cluster BTree index"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"B-Tree type index using clusters. This type of index is optimized when the index contains few keywords, i.e. when the same values occur frequently in the data."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Default index type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"4D specifies the index type (excluding keywords indexes) that is the most optimized according to the contents of the field."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Keywords index"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"Permits word-by-word indexing of field contents. This type of index can only be used with fields of the Text, Alpha or Picture type. Warning: Keywords indexes cannot be composite."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Standard BTree index"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Standard B-Tree type index. This multi-purpose index type is used in previous versions of 4D"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," A B-Tree index associated with a Text type field stores the first 1024 characters of the field (maximum). Therefore in this context, searches for strings containing more than 1024 characters will fail."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"indexName"})," parameter, you pass the name of the index to be created. Naming the index is necessary if several different types of indexes can be associated with the same field and if you want to be able to delete them individually using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/delete-index",children:"DELETE INDEX"})," command. If the ",(0,r.jsx)(n.em,{children:"indexName"})," index already exists, the command does nothing."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, when it is passed, performs indexing in asynchronous mode. In this mode, the original method continues its execution after the call from the command, regardless of whether or not the indexing is finished."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.strong,{children:"CREATE INDEX"})," command encounters any locked records, they will not be indexed and the command will wait for them to be unlocked."]}),"\n",(0,r.jsx)(n.p,{children:"If a problem occurs during command execution (non-indexed field, attempt to create a keyword index on more than one field, etc.), an error is generated. This error can be intercepted using an error-handling method."}),"\n",(0,r.jsx)(n.h2,{id:"note-for-deployment",children:"Note for deployment"}),"\n",(0,r.jsxs)(n.p,{children:["Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the ",(0,r.jsx)(n.em,{children:"Program Files"})," folder or .4dz file)."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Creation of two standard indexes on the \u201CLast Name\u201D and \u201CTelephone\u201Dfields of the [Customers] table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(fieldPtrArr;1)\n\xa0fieldPtrArr{1}:=->[Customers]LastName\n\xa0CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustLNameIdx")\n\xa0fieldPtrArr{1}:=->[Customers]Telephone\n\xa0CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustTelIdx")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Creation of a keywords index on the \u201CObservations\u201D field of the [Customers] table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(fieldPtrArr;1)\n\xa0fieldPtrArr{1}:=->[Customers]Observations\n\xa0CREATE INDEX([Customers];fieldPtrArr;Keywords Index;"CustObsIdx")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:"Creation of a composite index on the \u201CCity\u201D and \u201CZipcode\u201D fields of the [Customers] table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY POINTER(fieldPtrArr;2)\n\xa0fieldPtrArr{1}:=->[Customers]City\n\xa0fieldPtrArr{2}:=->[Customers]Zipcode\n\xa0CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CityZip")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/delete-index",children:"DELETE INDEX"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/resume-indexes",children:"RESUME INDEXES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-index",children:"SET INDEX"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"966"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return i}});var t=d(667294);let r={},s=t.createContext(r);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);