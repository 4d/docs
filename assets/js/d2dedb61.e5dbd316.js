"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58022"],{37988:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/text-to-blob","title":"TEXT TO BLOB","description":"TEXT TO BLOB ( text ; blob {; textFormat {; offset}} )TEXT TO BLOB ( text ; blob {; textFormat {; *}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/text-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-blob","permalink":"/docs/20-R7/commands/text-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"text-to-blob","title":"TEXT TO BLOB","slug":"/commands/text-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET BLOB SIZE","permalink":"/docs/20-R7/commands/set-blob-size"},"next":{"title":"VARIABLE TO BLOB","permalink":"/docs/20-R7/commands/variable-to-blob"}}'),r=t("785893"),d=t("250065");let i={id:"text-to-blob",title:"TEXT TO BLOB",slug:"/commands/text-to-blob",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TEXT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"text"})," ; ",(0,r.jsx)(n.em,{children:"blob"})," {; ",(0,r.jsx)(n.em,{children:"textFormat"})," {; offset}} )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"TEXT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"text"})," ; ",(0,r.jsx)(n.em,{children:"blob"})," {; ",(0,r.jsx)(n.em,{children:"textFormat"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Text to write into the BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB to receive the text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"textFormat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Format and character set of text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset | *"}),(0,r.jsx)(n.td,{children:"Variable, Operator"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset within the BLOB (expressed in bytes) or * to append the value"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"New offset after writing if not *"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The TEXT TO BLOB command writes the Text value ",(0,r.jsx)(n.em,{children:"text"})," into the BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"textFormat"})," parameter can be used to set the internal format and the character set of the text value to be written. To do this, pass one of the following constants (found in the \u201C",(0,r.jsx)(n.em,{children:"BLOB"}),"\u201D theme) in the ",(0,r.jsx)(n.em,{children:"textFormat"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac C string"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac Pascal string"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text with length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text without length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 C string"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text with length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text without length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"textFormat"})," parameter, by default 4D uses the Mac C string format. In databases created beginning with version 11, 4D works by default with the Unicode character set (UTF8) for managing text, so it is recommended to use this character set."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The \u201CUTF8\u201D constants can only be used when the application runs in Unicode mode."}),"\n",(0,r.jsx)(n.li,{children:"The \u201CMac\u201D constants cannot work with texts greater than 32 KB."}),"\n",(0,r.jsxs)(n.li,{children:["If you want to work with character sets other than UTF8, use the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"})," command."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following table describes each of these formats:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Text format"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description and Examples"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"C string"}),(0,r.jsx)(n.td,{children:"The text is ended by a NULL character (ASCII code $00)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"UTF8"})}),(0,r.jsx)(n.td,{children:'"" --\x3e $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $43 61 66 C3 A9 00'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Mac"})}),(0,r.jsx)(n.td,{children:'"" --\x3e $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $43 61 66 8E 00'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pascal string"}),(0,r.jsx)(n.td,{children:"The text is preceded by a 1-byte length."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"UTF8"})}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Mac"})}),(0,r.jsx)(n.td,{children:'"" --\x3e $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $04 43 61 66 8E'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text with length"}),(0,r.jsx)(n.td,{children:"The text is preceded by a 4-byte (UTF8) or 2-byte (Mac) length."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"UTF8"})}),(0,r.jsx)(n.td,{children:'"" --\x3e $00 00 00 00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $00 00 00 05 43 61 66 C3 A9'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Mac"})}),(0,r.jsx)(n.td,{children:'"" --\x3e $00 00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $00 04 43 61 66 8E'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text without length"}),(0,r.jsx)(n.td,{children:"The text is composed only of its characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"UTF8"})}),(0,r.jsx)(n.td,{children:'"" --\x3e No data'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $43 61 66 C3 A9'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"Mac"})}),(0,r.jsx)(n.td,{children:'"" --\x3e No data'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" --\x3e $43 61 66 8E'}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"If you specify the * optional parameter, the Text value is appended to the BLOB; the size of the BLOB is extended accordingly. Using the * optional parameter, you can sequentially store any number of Integer, Long Integer, Real or Text values (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory."}),"\n",(0,r.jsxs)(n.p,{children:["If you do not specify the * optional parameter nor the ",(0,r.jsx)(n.em,{children:"offset"})," variable parameter, the Text value is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the ",(0,r.jsx)(n.em,{children:"offset"})," variable parameter, the Text value is written at the offset (starting from zero) within the BLOB. No matter where you write the Text value, the size of the BLOB is, increased according to the location you passed (plus up to the size of the text, if necessary). New allocated bytes, other than the ones you are writing, are initialized to zero."]}),"\n",(0,r.jsxs)(n.p,{children:["After the call, the ",(0,r.jsx)(n.em,{children:"offset"})," variable parameter is returned, incremented by the number of bytes that have been written. Therfore, you can reuse that same variable with another BLOB writing command to write another value."]}),"\n",(0,r.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatiblity note:"})," Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," on developer.4d.com."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"After executing this code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET BLOB SIZE(vxBlob;0)\n\xa0var vtValue : Text\n\xa0vtValue:="Caf\xe9"\xa0// Length of vtValue is 4 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac C string)\xa0// Size of BLOB becomes 5 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac Pascal string)\xa0// Size of BLOB becomes 5 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac text with length)\xa0// Size of BLOB becomes 6 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;Mac text without length)\xa0// Size of BLOB becomes 4 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 C string)\xa0// Size of BLOB becomes 6 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 text with length)\xa0// Size of BLOB becomes 9 bytes\n\xa0TEXT TO BLOB(vtValue;vxBlob;UTF8 text without length)\xa0// Size of BLOB becomes 5 bytes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/real-to-blob",children:"REAL TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"554"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);