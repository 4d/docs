"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54586],{867447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=t(474848),r=t(28453);const d={id:"document-to-text",title:"Document to text",slug:"/commands/document-to-text",displayed_sidebar:"docs"},i=void 0,o={id:"commands-legacy/document-to-text",title:"Document to text",description:"Document to text ( fileName {; charSet {; breakMode}} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/document-to-text.md",sourceDirName:"commands-legacy",slug:"/commands/document-to-text",permalink:"/docs/commands/document-to-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"document-to-text",title:"Document to text",slug:"/commands/document-to-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"DOCUMENT LIST",permalink:"/docs/commands/document-list"},next:{title:"FOLDER LIST",permalink:"/docs/commands/folder-list"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Document to text"})," ( ",(0,s.jsx)(n.em,{children:"fileName"})," {; ",(0,s.jsx)(n.em,{children:"charSet"})," {; ",(0,s.jsx)(n.em,{children:"breakMode"}),"}} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fileName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Document name or Pathname to document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"charSet"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name or Number of character set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"breakMode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Processing mode for line breaks"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Text from the document"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Document to text"})," command lets you retrieve the contents of a file directly on disk in a 4D text variable or text field."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"fileName"}),", pass the name or pathname of the file to be read. The file must exist on the disk, otherwise an error is generated. You can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'just the file name, for example "myFile.txt": in this case, the file must be located next to the structure file of the application.'}),"\n",(0,s.jsx)(n.li,{children:'a pathname relative to the structure file of the application, for example "\\\\docs\\\\myFile.txt" under Windows or "/docs/myFile.txt" under macOS.'}),"\n",(0,s.jsx)(n.li,{children:'an absolute pathname, for example "c:\\\\app\\\\docs\\\\myFile.txt" under Windows or "MacHD/docs/myFile.txt" under macOS.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"charSet"}),", you pass the character set to be used for reading the contents. You can pass a string containing the standard set name (for example \u201cISO-8859-1\u201d or \u201cUTF-8\u201d) or its MIBEnum ID (longint). For more information about the list of character sets supported by 4D, refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/convert-from-text",children:"CONVERT FROM TEXT"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["If the document contains a Byte Order Mark (BOM), 4D uses the character set that it has set instead of the one specified in ",(0,s.jsx)(n.em,{children:"charSet"})," (this parameter is then ignored)."]}),"\n",(0,s.jsxs)(n.p,{children:["If the document does not contain a BOM and if the ",(0,s.jsx)(n.em,{children:"charSet"})," parameter is omitted, by default 4D uses the following character sets:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"under Windows: ANSI"}),"\n",(0,s.jsx)(n.li,{children:"under OS X: MacRoman"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"breakMode"}),', you can pass a longint indicating the processing to apply to end-of-line characters in the document. You can pass one of the following constants, found in the "',(0,s.jsx)(n.em,{children:"System Documents"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Document unchanged"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"No processing"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Document with CR"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Line breaks are converted to CR (carriage return), the default Classic Mac OS format."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Document with CRLF"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Line breaks are converted to CRLF (carriage return + line feed), the default Windows format."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Document with LF"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Line breaks are converted to LF (line feed), the default Unix and macOS format."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Document with native format"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"(Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, when you omit the ",(0,s.jsx)(n.em,{children:"breakMode"})," parameter, line breaks are processed in native mode (1)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility Note"}),": compatibility options are available for EOL and BOM management. See ",(0,s.jsx)(n.em,{children:"Compatibility page"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command does not modify the OK variable. In case of failure, an error is generated that you can intercept using a method installed by the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given the following text document (fields are separated by tabs):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-RAW",children:"id\xa0\xa0\xa0 name\xa0\xa0\xa0 price\xa0\xa0\xa0 vat3\xa0\xa0\xa0 4D Tags\xa0\xa0\xa0 99\xa0\xa0\xa0 19.6\n"})}),"\n",(0,s.jsx)(n.p,{children:"When you execute this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$Text:=Document to text("products.txt")\n'})}),"\n",(0,s.jsx)(n.p,{children:"... you get:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Text = "id\\tname\\tprice\\tvat\\r\\n3\\t4D Tags\\t99 \\t19.6"\n\xa0\xa0// \\t = tab\n\xa0\xa0// \\r = CR\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"System Documents"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/text-to-document",children:"TEXT TO DOCUMENT"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);