"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11108],{935862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=t(474848),s=t(28453);const o={id:"blob-to-real",title:"BLOB to real",slug:"/commands/blob-to-real",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/blob-to-real",title:"BLOB to real",description:"BLOB to real ( blob ; realFormat {; offset} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/blob-to-real.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-real",permalink:"/docs/commands/blob-to-real",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-real.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-real",title:"BLOB to real",slug:"/commands/blob-to-real",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BLOB to longint",permalink:"/docs/commands/blob-to-longint"},next:{title:"BLOB to text",permalink:"/docs/commands/blob-to-text"}},a={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB to real"})," ( ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"realFormat"})," {; ",(0,r.jsx)(n.em,{children:"offset"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB from which to get the Real value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"realFormat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0=Native real format, 1=Extended real format, 2=Macintosh Double real format, 3=Windows Double real format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset within the BLOB (expressed in bytes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"New offset after reading"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Real value"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The BLOB to real command returns a Real value read from the BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"realFormat"})," parameter fixes the internal format and byte ordering of the Real value to be read. You pass one of the following predefined constants provided by 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Extended real format"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Macintosh double real format"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Native real format"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PC double real format"}),(0,r.jsx)(n.td,{children:"Longint"}),(0,r.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note regarding Platform Independence:"})," If you exchange BLOBs between Macintosh and PC platforms, it is up to you to manage real formats and byte swapping issues while using this command."]}),"\n",(0,r.jsxs)(n.p,{children:["If you specify the optional ",(0,r.jsx)(n.em,{children:"offset"})," variable parameter, the Read value is read at the offset (starting from zero) within the BLOB. If you do not specify the optional ",(0,r.jsx)(n.em,{children:"offset"})," variable parameter, the first 8 or 10 bytes of the BLOB are read."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," You should pass an offset value between ",(0,r.jsx)(n.em,{children:"0"})," (zero) and the size of the BLOB minus 8 or 10. If you do not do so, an error -111 is generated."]}),"\n",(0,r.jsx)(n.p,{children:"After the call, the variable is incremented by the number of bytes read. Therefore, you can reuse that same variable with another BLOB reading command to read another value."}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example reads 20 Real values from a BLOB, starting at the offset 0x200:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viLoop;0;19)\n\xa0\xa0\xa0\xa0$vrValue:=BLOB to real(vxSomeBlob;PC byte ordering;$vlOffset)\n\xa0\xa0// Do something with $vrValue\n\xa0End for\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/real-to-blob",children:"REAL TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/text-to-blob",children:"TEXT TO BLOB"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(296540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);