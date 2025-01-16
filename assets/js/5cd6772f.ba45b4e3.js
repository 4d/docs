"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91732"],{369970:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/create-document","title":"Create document","description":"Create document ( document {; fileType} ) : Time","source":"@site/versioned_docs/version-20-R8/commands-legacy/create-document.md","sourceDirName":"commands-legacy","slug":"/commands/create-document","permalink":"/docs/commands/create-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"create-document","title":"Create document","slug":"/commands/create-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE ALIAS","permalink":"/docs/commands/create-alias"},"next":{"title":"CREATE FOLDER","permalink":"/docs/commands/create-folder"}}'),o=t("785893"),r=t("250065");let d={id:"create-document",title:"Create document",slug:"/commands/create-document",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Create document"})," ( ",(0,o.jsx)(n.em,{children:"document"})," {; ",(0,o.jsx)(n.em,{children:"fileType"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"document"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Document name or Full document pathname or Empty string for standard file dialog box"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fileType"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'List of types of documents to be screened, or "*" to not screen the documents'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Time"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Document reference number"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The",(0,o.jsx)(n.strong,{children:"Create document"})," command creates a new document and returns its document reference number."]}),"\n",(0,o.jsxs)(n.p,{children:["Pass the name or full pathname of the new document in ",(0,o.jsx)(n.em,{children:"document"}),". If ",(0,o.jsx)(n.em,{children:"document"})," already exists on the disk, it is overwritten. However, if ",(0,o.jsx)(n.em,{children:"document"})," is locked or already open, an error is generated."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass an empty string in ",(0,o.jsx)(n.em,{children:"document"}),", the Save As dialog box appears and you can then enter the name of the document you want to create. If you cancel the dialog, no document is created; ",(0,o.jsx)(n.strong,{children:"Create document"})," returns a null DocRef and sets the OK variable to 0."]}),"\n",(0,o.jsxs)(n.p,{children:["If the document is correctly created and opened, ",(0,o.jsx)(n.strong,{children:"Create document"})," returns its document reference number and sets the OK variable to 1. The system variable Document is updated and returns the complete access path of the created document."]}),"\n",(0,o.jsxs)(n.p,{children:["Whether or not you use the Save As dialog box, ",(0,o.jsx)(n.strong,{children:"Create document"})," creates a .TXT (Windows) or TEXT (Macintosh) document by default. If you want to create another type of document, pass the ",(0,o.jsx)(n.em,{children:"fileType"})," parameter."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"fileType"})," parameter, pass the type(s) of file(s) that can be selected in the opening dialog box. You can pass a list of several types separated by a ; (semi-colon). For each type set, an item will be added to the menu used for choosing the type in the dialog box."]}),"\n",(0,o.jsxs)(n.p,{children:['Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTIs are defined by Apple in order to meet standardization needs for file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, refer to the following address: ',(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html",children:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Under Windows, you can also pass a standard Mac OS file type \u2014 4D makes the correspondence internally \u2014 or file extensions (.txt, .exe, etc.). Note that under Windows, the user can \u201Cforce\u201D the display of all file types by entering *.* in the dialog box. However, in this case, 4D will carry out an additional check of the selected file types: if the user selects an unauthorized file type, the command returns an error."}),"\n",(0,o.jsxs)(n.p,{children:['If you do not want to restrict the displayed files to one or more types, pass the "*" (star) string or ".*" in ',(0,o.jsx)(n.em,{children:"fileType"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["On Windows you pass a Windows file extension or Macintosh file type mapped through the ",(0,o.jsx)(n.em,{children:"_o_MAP FILE TYPES"})," mechanism. If you want to create a document without an extension, a document containing several extensions, or a document containing an extension with more than three characters, do not use the ",(0,o.jsx)(n.em,{children:"type"})," parameters and pass the full name in ",(0,o.jsx)(n.em,{children:"document"})," (see example2)."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you have created and opened a document, you can write and read the document using the ",(0,o.jsx)(n.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," and ",(0,o.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"})," commands that you can combine with the ",(0,o.jsx)(n.a,{href:"/docs/commands/get-document-position",children:"Get document position"})," and ",(0,o.jsx)(n.a,{href:"/docs/commands/set-document-position",children:"SET DOCUMENT POSITION"})," commands in order to directly access any part of the document."]}),"\n",(0,o.jsxs)(n.p,{children:["Do not forget to eventually call ",(0,o.jsx)(n.a,{href:"/docs/commands/close-document",children:"CLOSE DOCUMENT"})," for the document."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.p,{children:"The following example creates and opens a new document called Note, writes the string \u201CHello\u201D into it, and closes the document:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDoc : Time\n\xa0vhDoc:=Create document("Note.txt")\xa0// Create new document called Note\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDoc;"Hello")\xa0// Write one word in the document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDoc)\xa0// Close the document\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"The following example creates documents with non-standard extensions under Windows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$vtMyDoc:=Create document("Doc.ext1.ext2")\xa0//Several extensions\n\xa0$vtMyDoc:=Create document("Doc.shtml")\xa0//Long extension\n\xa0$vtMyDoc:=Create document("Doc.")\xa0//No extension (the period "." is mandatory)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,o.jsxs)(n.p,{children:["If the document has been created correctly, the system variable OK is set to 1 and the system variable Document contains the full pathname and the name of ",(0,o.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"266"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifies variables"}),(0,o.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let o={},r=s.createContext(o);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);