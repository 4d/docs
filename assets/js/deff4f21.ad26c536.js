"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44103],{346459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const l={id:"longint-to-blob",title:"LONGINT TO BLOB",slug:"/commands/longint-to-blob",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/longint-to-blob",title:"LONGINT TO BLOB",description:"LONGINT TO BLOB ( longInt ; blob ; byteOrder {; offset | *} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/longint-to-blob.md",sourceDirName:"commands-legacy",slug:"/commands/longint-to-blob",permalink:"/docs/commands/longint-to-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flongint-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"longint-to-blob",title:"LONGINT TO BLOB",slug:"/commands/longint-to-blob",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LIST TO BLOB",permalink:"/docs/commands/list-to-blob"},next:{title:"REAL TO BLOB",permalink:"/docs/commands/real-to-blob"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Note",id:"note",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LONGINT TO BLOB"})," ( ",(0,s.jsx)(n.em,{children:"longInt"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," ; ",(0,s.jsx)(n.em,{children:"byteOrder"})," {; offset | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"longInt"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Long Integer value to write into the BLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB to receive the Long Integer value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"byteOrder"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset | *"}),(0,s.jsx)(n.td,{children:"Variable, Operator"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Offset within the BLOB (expressed in bytes) or * to append the value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"New offset after writing if not *"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The LONGINT TO BLOB command writes the 4-byte Long Integer value ",(0,s.jsx)(n.em,{children:"integer"})," into the BLOB ",(0,s.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"byteOrder"})," parameter fixes the byte ordering of the 4-byte Long Integer value to be written. You pass one of the following predefined constants provided by 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Native byte ordering"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PC byte ordering"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note regarding Platform Independence:"})," If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage byte swapping issues while using this command."]}),"\n",(0,s.jsx)(n.p,{children:"If you specify the * optional parameter, the 4-byte Long Integer value is appended to the BLOB and the size of the BLOB is extended accordingly. Using the * optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory."}),"\n",(0,s.jsxs)(n.p,{children:["If you do not specify the * optional parameter nor the ",(0,s.jsx)(n.em,{children:"offset"})," variable parameter, the 4-byte Long Integer value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the ",(0,s.jsx)(n.em,{children:"offset"})," variable parameter, the 4-byte Long Integer value is written at the offset (starting from zero) within the BLOB. No matter where you write the 4-byte Long Integer value, the size of the BLOB is increased according to the location you passed (plus up to 4 bytes, if necessary). New allocated bytes, other than the ones you are writing, are initialized to zero."]}),"\n",(0,s.jsxs)(n.p,{children:["After the call, the ",(0,s.jsx)(n.em,{children:"offset"})," variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another value."]}),"\n",(0,s.jsx)(n.h5,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,s.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;Native byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The size of ",(0,s.jsx)(n.em,{children:"vxBlob"})," is 4 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["On PowerPC platform: ",(0,s.jsx)(n.em,{children:"vxBLOB{0}=$01"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{1}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{2}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{3}=$04"})]}),"\n",(0,s.jsxs)(n.li,{children:["On Intel platform: ",(0,s.jsx)(n.em,{children:"vxBLOB{0}=$04"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{1}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{2}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{3}=$01"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The size of ",(0,s.jsx)(n.em,{children:"vxBlob"})," is 4 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["On all platforms ",(0,s.jsx)(n.em,{children:"vxBLOB{0}=$01"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{1}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{2}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{3}=$04"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The size of ",(0,s.jsx)(n.em,{children:"vxBlob"})," is 4 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["On all platforms ",(0,s.jsx)(n.em,{children:"vxBLOB{0}=$04"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{1}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{2}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{3}=$01"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering;*)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The size of ",(0,s.jsx)(n.em,{children:"vxBlob"})," is 104 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["On all platforms ",(0,s.jsx)(n.em,{children:"vxBLOB{100}=$04"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{101}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{102}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{103}=$01"})]}),"\n",(0,s.jsx)(n.li,{children:"The other bytes of the BLOB are left unchanged"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,s.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0vlOffset:=50\n\xa0LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering;vlOffset)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The size of ",(0,s.jsx)(n.em,{children:"vxBlob"})," is 100 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["On all platforms ",(0,s.jsx)(n.em,{children:"vxBLOB{50}=$01"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{51}=$02"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{52}=$03"}),", ",(0,s.jsx)(n.em,{children:"vxBLOB{53}=$04"})]}),"\n",(0,s.jsx)(n.li,{children:"The other bytes of the BLOB are left unchanged"}),"\n",(0,s.jsxs)(n.li,{children:["The variable ",(0,s.jsx)(n.em,{children:"vlOffset"})," has been incremented by 4 (and is now equal to 54)"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/text-to-blob",children:"TEXT TO BLOB"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);