"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81785"],{735624:function(e,s,n){n.r(s),n.d(s,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/compress-blob","title":"COMPRESS BLOB","description":"COMPRESS BLOB ( blob {; compression} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/compress-blob.md","sourceDirName":"commands-legacy","slug":"/commands/compress-blob","permalink":"/docs/commands/compress-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompress-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compress-blob","title":"COMPRESS BLOB","slug":"/commands/compress-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB TO VARIABLE","permalink":"/docs/commands/blob-to-variable"},"next":{"title":"COPY BLOB","permalink":"/docs/commands/copy-blob"}}'),t=n("785893"),r=n("250065");let d={id:"compress-blob",title:"COMPRESS BLOB",slug:"/commands/compress-blob",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"COMPRESS BLOB"})," ( ",(0,t.jsx)(s.em,{children:"blob"})," {; ",(0,t.jsx)(s.em,{children:"compression"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"blob"}),(0,t.jsx)(s.td,{children:"Blob"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"BLOB to compress"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"compression"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"If not omitted: 1, compress as compact as possible 2, compress as fast as possible"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"COMPRESS BLOB"})," command compresses the BLOB ",(0,t.jsx)(s.em,{children:"blob"})," using a compression algorithm. This command only compresses BLOB whose size is over 255 bytes."]}),"\n",(0,t.jsxs)(s.p,{children:["The optional ",(0,t.jsx)(s.em,{children:"compression"})," parameter allows to set the way the BLOB will be compressed. You can pass one of the following constants, placed in the ",(0,t.jsx)(s.em,{children:"BLOB"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Compact compression mode"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"Compressed as much as possible (at the expense of the speed of compression and decompression operations). Default method."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Fast compression mode"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"Compressed as fast as possible (and will be decompressed as fast as possible), at the expense of the compression ratio (the compressed BLOB will be bigger)."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GZIP best compression mode"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"-1"}),(0,t.jsx)(s.td,{children:"Most compact GZIP compression"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GZIP fast compression mode"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"-2"}),(0,t.jsx)(s.td,{children:"Fastest GZIP compression"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["If you pass another value or if you omit the ",(0,t.jsx)(s.em,{children:"compression"})," parameter, compression mode 1 is used (compact internal compression)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," This command only compresses BLOBs that are greater than or equal to 255 bytes."]}),"\n",(0,t.jsxs)(s.p,{children:["After the call, the OK variable is set to 1 if the BLOB has been successfully compressed. If the compression could not be performed, the OK variable is set to 0. If the compression could not be performed because of a lack of memory or because the actual size of the blob is less than 255 bytes, no error is generated and the method resumes its execution.",(0,t.jsx)(s.br,{}),"\nIn any other cases (i.e. the BLOB is damaged), the error -10600 is generated. This error can be trapped using the ",(0,t.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["After a BLOB has been compressed, you can expand it using the ",(0,t.jsx)(s.a,{href:"/docs/commands/expand-blob",children:"EXPAND BLOB"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["To detect if a BLOB has been compressed, use the ",(0,t.jsx)(s.a,{href:"/docs/commands/blob-properties",children:"BLOB PROPERTIES"})," command*.*"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WARNING:"})," A compressed BLOB is still a BLOB, so there is nothing to stop you from modifying its contents. However, if you do so, the ",(0,t.jsx)(s.a,{href:"/docs/commands/expand-blob",children:"EXPAND BLOB"})," command will not be able to decompress the BLOB properly."]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(s.p,{children:["This example tests if the BLOB ",(0,t.jsx)(s.em,{children:"vxMyBlob"})," is compressed, and, if it is not, compresses it:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)\n\xa0If($vlCompressed=Is not compressed)\n\xa0\xa0\xa0\xa0COMPRESS BLOB(vxMyBlob)\n\xa0End if\n"})}),"\n",(0,t.jsx)(s.p,{children:"Note however, that if you apply COMPRESS BLOB to an already compressed BLOB, the command detects it and does nothing."}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"This example allows you to select a document and then compress it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;vxBlob)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0COMPRESS BLOB(vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;vxBlob)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(s.p,{children:"Sending of raw HTTP data compressed with GZIP:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0COMPRESS BLOB($blob;GZIP Best compression mode)\n\xa0var $vEncoding : Text\n\xa0$vEncoding:="Content-encoding: gzip"\n\xa0WEB SET HTTP HEADER($vEncoding)\n\xa0WEB SEND RAW DATA($blob ;*)\n'})}),"\n",(0,t.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(s.p,{children:"The OK variable is set to 1 if the BLOB has been successfully compressed; otherwise, it is set to 0."}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/blob-properties",children:"BLOB PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/expand-blob",children:"EXPAND BLOB"})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return d}});var o=n(667294);let t={},r=o.createContext(t);function d(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);