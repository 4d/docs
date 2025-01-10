"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80026"],{801790:function(e,n,d){d.r(n),d.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>i,assets:()=>h,toc:()=>c,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/get-field-properties","title":"GET FIELD PROPERTIES","description":"GET FIELD PROPERTIES ( fieldPtr\xa0|\xa0tableNum {; fieldNum}; fieldType {; fieldLength {; indexed {; unique {; invisible}}}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-field-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-properties","permalink":"/docs/commands/get-field-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-properties","title":"GET FIELD PROPERTIES","slug":"/commands/get-field-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD ENTRY PROPERTIES","permalink":"/docs/commands/get-field-entry-properties"},"next":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/commands/get-missing-table-names"}}'),s=d("785893"),r=d("250065");let l={id:"get-field-properties",title:"GET FIELD PROPERTIES",slug:"/commands/get-field-properties",displayed_sidebar:"docs"},t=void 0,h={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function x(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," ( fieldPtr\xa0|\xa0tableNum {; ",(0,s.jsx)(n.em,{children:"fieldNum"}),"}; ",(0,s.jsx)(n.em,{children:"fieldType"})," {; ",(0,s.jsx)(n.em,{children:"fieldLength"})," {; ",(0,s.jsx)(n.em,{children:"indexed"})," {; ",(0,s.jsx)(n.em,{children:"unique"})," {; ",(0,s.jsx)(n.em,{children:"invisible"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldPtr\xa0|\xa0tableNum"}),(0,s.jsx)(n.td,{children:"Pointer, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table number or Field pointer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Field number if Table number is passed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Type of field"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fieldLength"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Length of field, if Alphanumeric"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indexed"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = Indexed, False = Non indexed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"unique"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = Unique, False = Non unique"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"invisible"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = Invisible, False = Visible"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET FIELD PROPERTIES"})," command returns information about the field specified by ",(0,s.jsx)(n.em,{children:"fieldPtr"})," or by ",(0,s.jsx)(n.em,{children:"tableNum"})," and ",(0,s.jsx)(n.em,{children:"fieldNum"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You either pass:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the table and field numbers in ",(0,s.jsx)(n.em,{children:"tableNum"})," and ",(0,s.jsx)(n.em,{children:"fieldNum"}),", or"]}),"\n",(0,s.jsxs)(n.li,{children:["a pointer to the field in ",(0,s.jsx)(n.em,{children:"fieldPtr"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After the call:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"fieldType"})," returns the type of the field. The ",(0,s.jsx)(n.em,{children:"fieldType"})," variable parameter can take a value provided by the following predefined constants (",(0,s.jsx)(n.em,{children:"Field and Variable Types"})," theme):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is alpha field"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is BLOB"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is Boolean"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is date"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is float"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"35"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is integer"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is integer 64 bits"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"25"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is longint"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is object"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"38"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is picture"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is real"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is subtable"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is text"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Is time"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"fieldLen"})," parameter returns the length of the field, if the field is Alphanumeric (i.e., ",(0,s.jsx)(n.em,{children:"fieldType"}),"=Is alpha field). The value of ",(0,s.jsx)(n.em,{children:"fieldLen"})," is meaningless for the other field types."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"indexed"})," parameter returns True is the field is indexed, and False if not. The value of ",(0,s.jsx)(n.em,{children:"indexed"})," is meaningful only for Alphanumeric, Integer, Long Integer, Real, Date, Time, and Boolean fields."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"unique"})," parameter returns True if the field is set to \u201CUnique\u201D, else False."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"invisible"})," parameter returns True if the field is set to \u201CInvisible\u201D, else False. The Invisible attribute can be used to hide a given field in 4D standard editor (label, charts...)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["This example sets the variables ",(0,s.jsx)(n.em,{children:"vType"}),", ",(0,s.jsx)(n.em,{children:"vLength"}),", ",(0,s.jsx)(n.em,{children:"vIndex"}),", ",(0,s.jsx)(n.em,{children:"vUnique"})," and ",(0,s.jsx)(n.em,{children:"vInvisible"})," to the properties for the third field of the first table:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(1;3;vType;vLength;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["This example sets the variables ",(0,s.jsx)(n.em,{children:"vType"}),", ",(0,s.jsx)(n.em,{children:"vLength"}),", ",(0,s.jsx)(n.em,{children:"vIndex"}),", ",(0,s.jsx)(n.em,{children:"vUnique"})," and ",(0,s.jsx)(n.em,{children:"vInvisible"})," to the properties for the field named [Table3]Field2:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0GET FIELD PROPERTIES(->[Table3]Field2;vType;vLength;vIndex;vUnique;vInvisible)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/field-name",children:"Field name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/set-index",children:"SET INDEX"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"258"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return l}});var i=d(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);