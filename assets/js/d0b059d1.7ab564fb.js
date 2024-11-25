"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88558"],{189723:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/open-document","title":"Open document","description":"Open document ( document {; fileType}{; mode} ) : DocRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-document.md","sourceDirName":"commands-legacy","slug":"/commands/open-document","permalink":"/docs/commands/open-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-document","title":"Open document","slug":"/commands/open-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Object to path","permalink":"/docs/commands/object-to-path"},"next":{"title":"Path to object","permalink":"/docs/commands/path-to-object"}}'),o=t("785893"),d=t("250065");let i={id:"open-document",title:"Open document",slug:"/commands/open-document",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Open document"})," ( ",(0,o.jsx)(n.em,{children:"document"})," {; ",(0,o.jsx)(n.em,{children:"fileType"}),"}{; ",(0,o.jsx)(n.em,{children:"mode"}),"} ) : DocRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"document"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Document name or Full document pathname or Empty string for standard file dialog box"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fileType"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:'List of types of documents to be screened, or "*" to not screen the documents'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"mode"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Document\u2019s opening mode"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"DocRef"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Document reference number"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Open document"})," command opens the document whose name or pathname you pass in ",(0,o.jsx)(n.em,{children:"document"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass an empty string in ",(0,o.jsx)(n.em,{children:"document"}),", the Open File dialog box is presented, and you then select the document to be open. If you cancel the dialog, no document is opened; ",(0,o.jsx)(n.strong,{children:"Open document"})," returns a null DocRef and sets the OK variable to 0."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the document is correctly opened, ",(0,o.jsx)(n.strong,{children:"Open document"})," returns its document reference number and sets the OK variable to 1."]}),"\n",(0,o.jsxs)(n.li,{children:["If the document is already open in Read mode and the ",(0,o.jsx)(n.em,{children:"mode"})," parameter is omitted, ",(0,o.jsx)(n.strong,{children:"Open document"})," opens the document in Read/Write mode by default and sets the OK variable to 1."]}),"\n",(0,o.jsx)(n.li,{children:"If the document is already open in Read/Write mode and you try to open it in Write mode, an error (-43) is generated. However, you can open it in Read only mode, then the OK variable is set to 1."}),"\n",(0,o.jsx)(n.li,{children:"If the document does not exist, an error is generated."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.em,{children:"fileType"})," parameter, pass the type(s) of file(s) that can be selected in the opening dialog box. You can pass a list of several types separated by a ; (semi-colon). For each type set, an item will be added to the menu used for choosing the type in the dialog box."]}),"\n",(0,o.jsxs)(n.p,{children:['Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTIs are defined by Apple in order to meet standardization needs for file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, refer to the ',(0,o.jsx)(n.em,{children:"Introduction to Uniform Type Identifiers Overview page"})," in the ",(0,o.jsx)(n.em,{children:"developer.apple.com"})," web site."]}),"\n",(0,o.jsx)(n.p,{children:"Under Windows, you can also pass a standard Mac OS file type \u2014 4D makes the correspondence internally \u2014 or file extensions (.txt, .exe, etc.). Note that under Windows, the user can \u201Cforce\u201D the display of all file types by entering *.* in the dialog box. However, in this case, 4D will carry out an additional check of the selected file types: if the user selects an unauthorized file type, the command returns an error."}),"\n",(0,o.jsxs)(n.p,{children:['If you do not want to restrict the displayed files to one or more types, pass the "*" (star) string or ".*" in ',(0,o.jsx)(n.em,{children:"fileType"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The optional ",(0,o.jsx)(n.em,{children:"mode"})," parameter allows you to define how ",(0,o.jsx)(n.em,{children:"document"}),' is to be opened. Four different open file modes are possible. 4D offers the following predefined constants, located in the "',(0,o.jsx)(n.em,{children:"System Documents"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constant"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Get Pathname"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"3"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Read and Write"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"0"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Read Mode"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Write Mode"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["If a document is open, ",(0,o.jsx)(n.strong,{children:"Open document"})," initially sets the file position at the beginning of the document while ",(0,o.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"})," sets it at the end of the document."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you have opened a document, you can read and write in the document using the ",(0,o.jsx)(n.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," and ",(0,o.jsx)(n.a,{href:"/docs/commands/send-packet",children:"SEND PACKET"})," commands that you can combine with the ",(0,o.jsx)(n.a,{href:"/docs/commands/get-document-position",children:"Get document position"})," and ",(0,o.jsx)(n.a,{href:"/docs/commands/set-document-position",children:"SET DOCUMENT POSITION"})," commands in order to directly access any part of the document."]}),"\n",(0,o.jsxs)(n.p,{children:["Do not forget to eventually call ",(0,o.jsx)(n.a,{href:"/docs/commands/close-document",children:"CLOSE DOCUMENT"})," for the document."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.p,{children:'The following example opens an existing document called Note, writes the string "Good-bye" into it, and closes the document. Any existing content in the document will be overwritten:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDoc : Time\n\xa0vhDoc:=Open document("Note.txt";Read and Write)\xa0//Open a document called Note\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDoc;"Good-bye")\xa0//Write one word into the document\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDoc)\xa0//Close the document\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"You can read a document even if it is already open in write mode:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0vDoc:=Open document("PassFile";"TEXT")\xa0// The file is open\n\xa0\xa0// Before the file is closed, it is possible to consult it in read-only mode:\n\xa0vRef:=Open document("PassFile";"TEXT";Read Mode)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,o.jsxs)(n.p,{children:["If the document is correctly opened, the OK system variable is set to 1; otherwise, it is set to 0. After the call, the Document system variable contains the full name of the document.",(0,o.jsx)(n.br,{}),"\nIf you call ",(0,o.jsx)(n.strong,{children:"Open document"})," with a mode of 3, the function returns ?00:00:00? (no document reference). The document is not opened but the Document and OK system variables are updated:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"OK is equal to 1."}),"\n",(0,o.jsxs)(n.li,{children:["Document contains the full pathname and the name of ",(0,o.jsx)(n.em,{children:"document"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," If you pass an empty string in ",(0,o.jsx)(n.em,{children:"document"}),", an open file dialog box appears. If the user chooses a document and clicks the OK button, ",(0,o.jsx)(n.em,{children:"document"})," is set to the path of the document the user selected and OK is set to 1. If the user clicked the Cancel button, OK is set to 0."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let o={},d=s.createContext(o);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);