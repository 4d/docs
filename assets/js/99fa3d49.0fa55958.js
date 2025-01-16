"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64520"],{483790:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/blob-to-text","title":"BLOB to text","description":"BLOB to text ( blob ; textFormat {; offset {; textLength}} )  : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/blob-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-text","permalink":"/docs/commands/blob-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-text","title":"BLOB to text","slug":"/commands/blob-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to real","permalink":"/docs/commands/blob-to-real"},"next":{"title":"BLOB TO VARIABLE","permalink":"/docs/commands/blob-to-variable"}}'),s=n("785893"),d=n("250065");let o={id:"blob-to-text",title:"BLOB to text",slug:"/commands/blob-to-text",displayed_sidebar:"docs"},i=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"BLOB to text"})," ( ",(0,s.jsx)(t.em,{children:"blob"})," ; ",(0,s.jsx)(t.em,{children:"textFormat"})," {; ",(0,s.jsx)(t.em,{children:"offset"})," {; ",(0,s.jsx)(t.em,{children:"textLength"}),"}} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"blob"}),(0,s.jsx)(t.td,{children:"Blob"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"BLOB from which to get the text"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textFormat"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Format and character set of text"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offset"}),(0,s.jsx)(t.td,{children:"Variable"}),(0,s.jsx)(t.td,{children:"\u2194"}),(0,s.jsx)(t.td,{children:"Offset within the BLOB (expressed in bytes)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"New offset after reading"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textLength"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Number of characters to be read"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Text extracted"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The BLOB to text command returns a Text value read from the BLOB ",(0,s.jsx)(t.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"textFormat"})," parameter fixes the internal format and character set of the text value to be read. In databases created beginning with version 11, 4D uses the Unicode character set (UTF8) by default for managing text. For the sake of compatibility, this command can be used to \u201Cforce\u201D conversion using the Mac Roman character set (used in previous versions of 4D). The character set is chosen via the ",(0,s.jsx)(t.em,{children:"textFormat"})," parameter. To do this, pass one of the following constants (found in the ",(0,s.jsx)(t.em,{children:"BLOB"})," theme) in the ",(0,s.jsx)(t.em,{children:"textFormat"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mac C string"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mac Pascal string"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mac text with length"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Mac text without length"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UTF8 C string"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UTF8 text with length"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UTF8 text without length"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The \u201CUTF8\u201D constants can only be used when the application runs in Unicode mode."}),"\n",(0,s.jsx)(t.li,{children:"The \u201CMac\u201D constants cannot work with texts greater than 32 KB."}),"\n",(0,s.jsxs)(t.li,{children:["If you want to work with character sets other than UTF8, use the ",(0,s.jsx)(t.a,{href:"/docs/commands/convert-to-text",children:"Convert to text"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For more information about these constants and the formats they represent, please refer to the description of the ",(0,s.jsx)(t.a,{href:"/docs/commands/text-to-blob",children:"TEXT TO BLOB"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WARNING:"})," The number of characters to be read is determined by the ",(0,s.jsx)(t.em,{children:"textFormat"})," parameter, EXCEPT for the formats Mac Text without length and UTF8 Text without length, for which you need to specify the number of characters to be read in the ",(0,s.jsx)(t.em,{children:"textLength"})," parameter. For the other formats, ",(0,s.jsx)(t.em,{children:"textLength"})," is ignored and you can omit it."]}),"\n",(0,s.jsxs)(t.p,{children:["If you specify the optional ",(0,s.jsx)(t.em,{children:"offset"})," variable parameter, the Text value is read at the offset (starting from zero) within the BLOB. If you do not specify the optional ",(0,s.jsx)(t.em,{children:"offset"})," variable parameter, the beginning of the BLOB is read according to the value you pass in ",(0,s.jsx)(t.em,{children:"textFormat"}),". Note that you must pass the ",(0,s.jsx)(t.em,{children:"offset"})," variable parameter when you are reading text without length."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You should pass an offset value between ",(0,s.jsx)(t.em,{children:"0"})," (zero) and the size of the BLOB minus the size of the text to be read. If you do not do so, the function result is unpredictable."]}),"\n",(0,s.jsx)(t.p,{children:"After the call, the variable is incremented by the number of bytes read. Therefore, you can reuse that same variable with another BLOB reading command to read another value."}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/convert-to-text",children:"Convert to text"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command number"}),(0,s.jsx)(t.td,{children:"555"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread safe"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return o}});var r=n(667294);let s={},d=r.createContext(s);function o(e){let t=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);