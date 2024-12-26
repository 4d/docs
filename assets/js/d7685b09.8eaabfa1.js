"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24474"],{464009:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>i,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/use-character-set","title":"USE CHARACTER SET","description":"USE CHARACTER SET ( map {; mapInOut} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/use-character-set.md","sourceDirName":"commands-legacy","slug":"/commands/use-character-set","permalink":"/docs/commands/use-character-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuse-character-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"use-character-set","title":"USE CHARACTER SET","slug":"/commands/use-character-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TIMEOUT","permalink":"/docs/commands/set-timeout"},"next":{"title":"Compiler","permalink":"/docs/category/compiler"}}'),n=t("785893"),a=t("250065");let d={id:"use-character-set",title:"USE CHARACTER SET",slug:"/commands/use-character-set",displayed_sidebar:"docs"},c=void 0,o={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"USE CHARACTER SET"})," ( ",(0,n.jsx)(s.em,{children:"map"})," {; ",(0,n.jsx)(s.em,{children:"mapInOut"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"map"}),(0,n.jsx)(s.td,{children:"Text, *"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Name of character set  to use, or * to reset to default character set"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mapInOut"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"0 = Output map 1 = Input map, If omitted, output map"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"USE CHARACTER SET"})," modifies the character set used by 4D during data transfer between the database and a document or a serial port for the current process. Transfer operations include the import and export of text, DIF, and SYLK files. A character map also works on data transferred with ",(0,n.jsx)(s.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"}),", ",(0,n.jsx)(s.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," (for text type packets) and ",(0,n.jsx)(s.a,{href:"/docs/commands/receive-buffer",children:"RECEIVE BUFFER"}),". It has no effect on transfers of data done with ",(0,n.jsx)(s.a,{href:"/docs/commands/send-record",children:"SEND RECORD"}),", ",(0,n.jsx)(s.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"}),", ",(0,n.jsx)(s.a,{href:"/docs/commands/receive-record",children:"RECEIVE RECORD"}),", ",(0,n.jsx)(s.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"}),", ",(0,n.jsx)(s.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," (for BLOB type packets) and ",(0,n.jsx)(s.a,{href:"/docs/commands/receive-variable",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.em,{children:"map"})," parameter must correspond to the \u201CIANA\u201D name of the character set to be used, or to one of its aliases. For example, the names \u201Ciso-8859-1\u201D or \u201Cutf-8\u201D are both valid names, as well as the aliases \u201Clatin1\u201D or \u201Cl1\u201D. For more information about these names, please refer to the following address: ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"})}),". Examples if IANA names are also provided in the description of the ",(0,n.jsx)(s.a,{href:"/docs/commands/convert-from-text",children:"CONVERT FROM TEXT"})," command."]}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.em,{children:"mapInOut"})," is 0, the map is set for exporting. If ",(0,n.jsx)(s.em,{children:"mapInOut"})," is 1, the map is set for importing. If you do not pass the ",(0,n.jsx)(s.em,{children:"mapInOut"})," parameter, the export map is used by default."]}),"\n",(0,n.jsxs)(s.p,{children:["When the ",(0,n.jsx)(s.em,{children:"*"})," parameter is passed, the default character set is restored (import or export map depending on the value of ",(0,n.jsx)(s.em,{children:"mapInOut"}),").",(0,n.jsx)(s.br,{}),"\nIn 4D, the default character set is UTF-8."]}),"\n",(0,n.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.p,{children:"The following example (Unicode mode) uses the UTF-16 character set to export a text, then the default character set is restored:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:'\xa0USE CHARACTER SET("UTF-16LE";0)\xa0// Use the UTF-16 \'Little Endian\' character set\n\xa0EXPORT TEXT([MyTable];"MyText")\xa0// Export data through the map\n\xa0USE CHARACTER SET(*;0)\xa0// Restore the default character set\n'})}),"\n",(0,n.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,n.jsx)(s.p,{children:"The OK system variable is set to 1 if the map is loaded correctly. Otherwise, it is set to 0."}),"\n",(0,n.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/commands/export-dif",children:"EXPORT DIF"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/export-sylk",children:"EXPORT SYLK"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/export-text",children:"EXPORT TEXT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/import-dif",children:"IMPORT DIF"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/import-sylk",children:"IMPORT SYLK"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/import-text",children:"IMPORT TEXT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"})]}),"\n",(0,n.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Command number"}),(0,n.jsx)(s.td,{children:"205"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Thread safe"}),(0,n.jsx)(s.td,{children:"\u2713"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modifies variables"}),(0,n.jsx)(s.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return d}});var r=t(667294);let n={},a=r.createContext(n);function d(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);