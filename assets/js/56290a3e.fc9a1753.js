"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["849"],{923642:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>i,toc:()=>h,frontMatter:()=>c});var s=JSON.parse('{"id":"Concepts/data-types","title":"Data types overview","description":"In 4D, data are handled according to their type in two places: database fields and the 4D language.","source":"@site/versioned_docs/version-20/Concepts/data-types.md","sourceDirName":"Concepts","slug":"/Concepts/data-types","permalink":"/docs/20/Concepts/data-types","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"data-types","title":"Data types overview"},"sidebar":"docs","previous":{"title":"Operators","permalink":"/docs/20/Concepts/operators"},"next":{"title":"BLOB","permalink":"/docs/20/Concepts/blob"}}'),t=d("785893"),r=d("250065");let c={id:"data-types",title:"Data types overview"},l=void 0,i={},h=[{value:"Default values",id:"default-values",level:2},{value:"Null as default value",id:"null-as-default-value",level:3},{value:"Converting data types",id:"converting-data-types",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In 4D, data are handled according to their type in two places: database fields and the 4D language."}),"\n",(0,t.jsx)(n.p,{children:"Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data Types"}),(0,t.jsx)(n.th,{children:"Database support(1)"}),(0,t.jsx)(n.th,{children:"Language support"}),(0,t.jsx)(n.th,{children:(0,t.jsxs)(n.a,{href:"/docs/20/Concepts/variables#using-the-var-keyword",children:[(0,t.jsx)(n.code,{children:"var"})," declaration"]})}),(0,t.jsx)(n.th,{children:(0,t.jsxs)(n.a,{href:"/docs/20/Concepts/variables#using-a-c_-directive",children:[(0,t.jsx)(n.code,{children:"C_"})," or ",(0,t.jsx)(n.code,{children:"ARRAY"})," declaration"]})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/string",children:"Alphanumeric"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Converted to text"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/string",children:"Text"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Text"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_TEXT"}),", ",(0,t.jsx)(n.code,{children:"ARRAY TEXT"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/date",children:"Date"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_DATE"}),", ",(0,t.jsx)(n.code,{children:"ARRAY DATE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/time",children:"Time"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_TIME"}),", ",(0,t.jsx)(n.code,{children:"ARRAY TIME"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/boolean",children:"Boolean"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_BOOLEAN"}),", ",(0,t.jsx)(n.code,{children:"ARRAY BOOLEAN"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/number",children:"Integer"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Converted to longint"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/number",children:"Longint"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_LONGINT"}),", ",(0,t.jsx)(n.code,{children:"ARRAY LONGINT"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/number",children:"Longint 64 bits"})}),(0,t.jsx)(n.td,{children:"Yes (SQL)"}),(0,t.jsx)(n.td,{children:"Converted to real"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/number",children:"Real"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Real"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_REAL"}),", ",(0,t.jsx)(n.code,{children:"ARRAY REAL"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/null-undefined",children:"Undefined"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/null-undefined",children:"Null"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/pointer",children:"Pointer"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Pointer"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_POINTER"}),", ",(0,t.jsx)(n.code,{children:"ARRAY POINTER"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/picture",children:"Picture"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Picture"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_PICTURE"}),", ",(0,t.jsx)(n.code,{children:"ARRAY PICTURE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/blob",children:"BLOB"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Blob"}),", ",(0,t.jsx)(n.code,{children:"4D.Blob"})]}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_BLOB"}),", ",(0,t.jsx)(n.code,{children:"ARRAY BLOB"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/object",children:"Object"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Object"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"C_OBJECT"}),", ",(0,t.jsx)(n.code,{children:"ARRAY OBJECT"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/20/Concepts/collection",children:"Collection"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Collection"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"C_COLLECTION"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/20/Concepts/variant",children:"Variant"}),"(2)"]}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Variant"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the ",(0,t.jsx)(n.a,{href:"/docs/20/Concepts/object",children:"Object"})," data type description."]}),"\n",(0,t.jsxs)(n.p,{children:["(2) Variant is actually not a ",(0,t.jsx)(n.em,{children:"data"})," type but a ",(0,t.jsx)(n.em,{children:"variable"})," type that can contain a value of any other data type."]}),"\n",(0,t.jsx)(n.h2,{id:"default-values",children:"Default values"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.a,{href:"/docs/20/Concepts/variables",children:"variables"})," or ",(0,t.jsx)(n.a,{href:"/docs/20/Concepts/parameters",children:"parameters"})," are typed by means of an ",(0,t.jsx)(n.a,{href:"/docs/20/Concepts/variables#declaring-variables",children:"explicit declaration"}),", they receive a default value, which they will keep during the session as long as they have not been assigned."]}),"\n",(0,t.jsx)(n.p,{children:"The default value depends on the variable type:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Booleen"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:"00-00-00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"00:00:00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"picture size=0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pointer"}),(0,t.jsx)(n.td,{children:"Nil=true"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'""'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob size=0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Variant"}),(0,t.jsx)(n.td,{children:"undefined"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"null-as-default-value",children:"Null as default value"}),"\n",(0,t.jsxs)(n.p,{children:["Variables of type Object, Collection, Pointer, and Picture have ",(0,t.jsx)(n.strong,{children:"null"})," as default value, but actually get an intermediary status when declared and not assigned. They ",(0,t.jsx)(n.em,{children:"behave like"})," ",(0,t.jsx)(n.strong,{children:"null"})," values, but with some differences, generating less errors when the code tries do access them."]}),"\n",(0,t.jsx)(n.h2,{id:"converting-data-types",children:"Converting data types"}),"\n",(0,t.jsx)(n.p,{children:'The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.'}),"\n",(0,t.jsx)(n.p,{children:"The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Data Type to Convert"}),(0,t.jsx)(n.th,{children:"to String"}),(0,t.jsx)(n.th,{children:"to Number"}),(0,t.jsx)(n.th,{children:"to Date"}),(0,t.jsx)(n.th,{children:"to Time"}),(0,t.jsx)(n.th,{children:"to Boolean"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"String (1)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Num"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bool"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Number (2)"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bool"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bool"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Bool"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Num"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the ",(0,t.jsx)(n.code,{children:"JSON Parse"})," command."]}),"\n",(0,t.jsx)(n.p,{children:"(2) Time values can be treated as numbers."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands."]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return c}});var s=d(667294);let t={},r=s.createContext(t);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);