"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15801"],{821974:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/blob-properties","title":"BLOB PROPERTIES","description":"BLOB PROPERTIES ( blob ; compressed {; expandedSize {; currentSize}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/blob-properties.md","sourceDirName":"commands-legacy","slug":"/commands/blob-properties","permalink":"/docs/commands/blob-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-properties","title":"BLOB PROPERTIES","slug":"/commands/blob-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/category/blob"},"next":{"title":"BLOB size","permalink":"/docs/commands/blob-size"}}'),t=s("785893"),d=s("250065");let i={id:"blob-properties",title:"BLOB PROPERTIES",slug:"/commands/blob-properties",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BLOB PROPERTIES"})," ( ",(0,t.jsx)(n.em,{children:"blob"})," ; ",(0,t.jsx)(n.em,{children:"compressed"})," {; ",(0,t.jsx)(n.em,{children:"expandedSize"})," {; ",(0,t.jsx)(n.em,{children:"currentSize"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB for which to get information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"compressed"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"0 = BLOB is not compressed, 1 = Compact compression, 2 = Fast compression, -1 = GZIP Best compression, -2 = GZIP Fast compression"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expandedSize"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Size of BLOB (in bytes) when not compressed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"currentSize"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Current size of BLOB (in bytes)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"BLOB PROPERTIES"})," command returns information about the BLOB ",(0,t.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"compressed"})," parameter returns a value indicating if and how the BLOB is compressed. You can compare this value with the following constants, found in the ",(0,t.jsx)(n.em,{children:"BLOB"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Compact compression mode"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Compressed as much as possible (at the expense of the speed of compression and decompression operations). Default method."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fast compression mode"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Compressed as fast as possible (and will be decompressed as fast as possible), at the expense of the compression ratio (the compressed BLOB will be bigger)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GZIP best compression mode"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"Most compact GZIP compression"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GZIP fast compression mode"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"Fastest GZIP compression"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is not compressed"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"No compression"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Whatever the compression status of the BLOB, the ",(0,t.jsx)(n.em,{children:"expandedSize"})," parameter returns the size of the BLOB when it is not compressed."]}),"\n",(0,t.jsxs)(n.p,{children:["The parameter ",(0,t.jsx)(n.em,{children:"currentSize"})," returns the current size of the BLOB. If the BLOB is compressed, you will usually obtain ",(0,t.jsx)(n.em,{children:"currentSize"})," less than ",(0,t.jsx)(n.em,{children:"expandedSize"}),". If the BLOB is not compressed, you will always obtain ",(0,t.jsx)(n.em,{children:"currentSize"})," equal to ",(0,t.jsx)(n.em,{children:"expandedSize"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["See examples for the commands ",(0,t.jsx)(n.a,{href:"/docs/commands/compress-blob",children:"COMPRESS BLOB"})," and ",(0,t.jsx)(n.a,{href:"/docs/commands/expand-blob",children:"EXPAND BLOB"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"After a BLOB has been compressed, the following project method obtains the percentage of space saved by the compression:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Space saved by compression project method\n\xa0\xa0// Space saved by compression (Pointer {; Pointer } ) -> Long integer\n\xa0\xa0// Space saved by compression ( -> BLOB {; -> savedBytes } ) -> Percentage\n\xa0\n\xa0var $1;$2 : Pointer\n\xa0var $0;$vlCompressed;$vlExpandedSize;$vlCurrentSize : Integer\n\xa0\n\xa0BLOB PROPERTIES($1->;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0If($vlExpandedSize=0)\n\xa0\xa0\xa0\xa0$0:=0\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->:=0\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$0:=100-(($vlCurrentSize/$vlExpandedSize)*100)\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$2->:=$vlExpandedSize-$vlCurrentSize\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"After this method has been added to your application, you can use it this way:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0COMPRESS BLOB(vxBlob)\n\xa0$vlPercent:=Space saved by compression(->vxBlob;->vlBlobSize)\n\xa0ALERT("The compression saved "+String(vlBlobSize)+" bytes, so "+String($vlPercent;"#0%")+\n\xa0" of space.")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/compress-blob",children:"COMPRESS BLOB"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/expand-blob",children:"EXPAND BLOB"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"536"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);