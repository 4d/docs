"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86017"],{850397:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/select-document","title":"Select document","description":"Select document ( directory ; fileTypes ; title ; options {; selected} ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/select-document.md","sourceDirName":"commands-legacy","slug":"/commands/select-document","permalink":"/docs/20-R8/commands/select-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-document.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"select-document","title":"Select document","slug":"/commands/select-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOLVE ALIAS","permalink":"/docs/20-R8/commands/resolve-alias"},"next":{"title":"Select folder","permalink":"/docs/20-R8/commands/select-folder"}}'),i=n("785893"),l=n("250065");let d={id:"select-document",title:"Select document",slug:"/commands/select-document",displayed_sidebar:"docs"},o=void 0,r={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Select document"})," ( ",(0,i.jsx)(t.em,{children:"directory"})," ; ",(0,i.jsx)(t.em,{children:"fileTypes"})," ; ",(0,i.jsx)(t.em,{children:"title"})," ; ",(0,i.jsx)(t.em,{children:"options"})," {; ",(0,i.jsx)(t.em,{children:"selected"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"directory"}),(0,i.jsx)(t.td,{children:"Text, Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"\u2022 Directory access path to display by default in the document selection dialog box, or\u2022 Empty string to display default user folder (\u201CMy documents\u201D under Windows, \u201CDocuments\u201D under Mac OS), or\u2022 Number of the memorized access path"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fileTypes"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:'List of types of documents to filter, or "*" to not filter documents'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"title"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Title of the selection dialog box"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"options"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Selection option(s)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"selected"}),(0,i.jsx)(t.td,{children:"Text array"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Array containing the list of access paths + names of selected files"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Name of selected file (first file of the list in case of multiple selection)"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Select document"})," command displays a standard open document dialog box which allows the user to set one or more files and returns the name and/or full access path of the selected file(s)."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"directory"})," parameter indicates the folder whose contents are initially displayed in the open document dialog box. You can pass three types of values:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a text containing the full access path of the folder to display."}),"\n",(0,i.jsx)(t.li,{children:'an empty string ("") to display the default user folder for the current opeerating system (\u201CMy documents\u201D under Windows, \u201CDocuments\u201D under Mac OS).'}),"\n",(0,i.jsxs)(t.li,{children:["a number of the memorized access path (from 1 to 32000) to display the associated folder.",(0,i.jsx)(t.br,{}),"\nAs such, you can store in memory the access path of the folder opened when the user clicked the selection button, in other words, the folder selected by the user. During the first call of an arbitrary number (for example, 5) the command displays the default user folder of the operating system (equivalent of passing an empty string). The user could also browse folders on the hard disk. When the user clicks on the selection button, the access path is memorized and associated with number 5. During future calls to number 5, the memorized access path will be used by default. If a new location is selected, path number 5 is updated.",(0,i.jsx)(t.br,{}),"\nThis mechanism lets you memorize up to 32,000 access paths. Under Windows, each path is kept for the session only. Under Mac OS, the paths are kept by the system and remain stored from one session to the next."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," This mechanism is the same as the one used by the ",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/select-folder",children:"Select folder"})," command. The numbers of the memorized pathnames are shared by both commands."]}),"\n",(0,i.jsxs)(t.p,{children:["Pass the type(s) of file(s) that can be selected in the open file dialog box in the ",(0,i.jsx)(t.em,{children:"fileTypes"})," parameter. You can pass a list of several types separated by a ; (semi-colon). For each type defined, a row will be added in the type choice menu of the dialog box."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTI types have been defined by Apple in order to meet requirements concerning the standardization of file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, please refer to the ',(0,i.jsx)(t.a,{href:"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html",children:"Uniform Type Identifier Concepts page"})," on the ",(0,i.jsx)(t.em,{children:"developer.apple.com"})," web site."]}),"\n",(0,i.jsx)(t.li,{children:"Under Windows, you can also pass a standard Mac OS type file \u2014 4D performs the conversion internally \u2014 or the file extensions (.txt, .exe, etc.). Please note that under Windows, the user can \u201Cforce\u201D the display of all document types by entering *.* in the dialog box. However, in this case, 4D will perform an additional verification of the types of files selected: if the user selects an unauthorized file type, the command returns an error."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['If you do not want to restrict the files displayed to one or more types, pass the "*" (star) or ".*" string in ',(0,i.jsx)(t.em,{children:"fileTypes"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Pass the label that must appear in the dialog box in the ",(0,i.jsx)(t.em,{children:"title"})," parameter. By default, if you pass an empty string, the label \u201COpen\u201D is displayed."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"options"})," parameter allows you to specify advanced functions that are allowed in an open file dialog box. 4D provides the following pre-defined constants in the ",(0,i.jsx)(t.em,{children:"System Documents"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Allow alias files"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"8"}),(0,i.jsxs)(t.td,{children:["Authorizes the selection of shortcuts (Windows) or aliases (macOS) as document. ",(0,i.jsx)(t.br,{}),"By default, if this constant is not used, when an alias or shortcut is selected, the command will return the access path of the targeted element. When you pass the constant, the command returns the path of the alias or shortcut itself."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"File name entry"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"32"}),(0,i.jsxs)(t.td,{children:["Allows user to enter a file name in a 'Save as' dialog box. No file is saved and it is up to the developer to create a file in response to this action (the Document system variable is updated). In this context, the ",(0,i.jsx)(t.em,{children:"directory"})," parameter may contain the path to a file instead of a directory. The file name will be used as the suggested file name in the Save as text field. The parent directory will be used as default path."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Multiple files"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsxs)(t.td,{children:["Authorizes the simultaneous selection of several files using the key combinations ",(0,i.jsx)(t.strong,{children:"Shift+click"})," (adjacent selection) and ",(0,i.jsx)(t.strong,{children:"Ctrl+click"})," (Windows) or ",(0,i.jsx)(t.strong,{children:"Command+click"})," (macOS). In this case, the ",(0,i.jsx)(t.em,{children:"selected"})," parameter, if passed, contains the list of all selected files. By default, if this constant is not used, the command will not allow the selection of multiple files."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Package open"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"(macOS only): Authorizes the opening of packages as folders and thus the viewing /selection of their contents. By default, if this constant is not used, the command will not allow the opening of packages."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Package selection"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"(macOS only): Authorizes the selection of packages as entities (default if omitted). Use Package open if you want to allow users to view/select package contents."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Use sheet window"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"16"}),(0,i.jsxs)(t.td,{children:["(Mac OS only): Displays the selection dialog box in the form of a sheet window (this option is ignored under Windows). ",(0,i.jsx)(t.br,{}),"Sheet windows are specific to the macOS interface which have graphic animation (for more information, refer to the ",(0,i.jsx)(t.em,{children:"Window Types (compatibility)"})," section). By default, if this constant is not used, the command will display a standard dialog box."]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["If you do not want to use an option, pass 0 in the ",(0,i.jsx)(t.em,{children:"options"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["The optional ",(0,i.jsx)(t.em,{children:"selected"})," parameter allows you to get the full access path (access path + name) of every file selected by the user. The command creates, sizes and fills the array according to the user selection. This parameter is useful when the Multiple files option is used or when you want to find out the access path of the selected file (simply take the name of the file returned by the command from the value of the array). If no file is selected, the array is returned empty."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," Under Mac OS, a selected package is considered as a folder. The pathname returned in the ",(0,i.jsx)(t.em,{children:"selected"}),' array includes a final ":" character. For example: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:']}),"\n",(0,i.jsxs)(t.p,{children:["The command returns the name (name + extension under Windows) of the selected file. If several files are selected, the command returns the name of the first file in the list of selected files. The list of files can be obtained in the ",(0,i.jsx)(t.em,{children:"selected"})," parameter. If no file is selected, the command returns an empty string."]}),"\n",(0,i.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(t.p,{children:"This example is used to specify a 4D data file:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' var $platform : Integer\n PLATFORM PROPERTIES($platform)\n If($platform=Windows)\n    $DocType:=".4DD"\n Else\n    $DocType:="com.4d.4d.data-file" //UTI type\n End if\n $Options:=Allow alias files+Package open+Use sheet window\n $Doc:=Select document("";$DocType;"Select the data file";$Options)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(t.p,{children:"Creation of a custom document by user:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)\n If(OK=1)\n    BLOB TO DOCUMENT(Document;$blob) // $blob contains document to record\n End if\n'})}),"\n",(0,i.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,i.jsxs)(t.p,{children:["If the command has been correctly executed and a valid document was selected, the system variable OK is set to 1 and the system variable Document will contain the full access path of the selected file.",(0,i.jsx)(t.br,{}),"\nIf no file was selected (for example, if the user clicked on the ",(0,i.jsx)(t.strong,{children:"Cancel"})," button in the open file dialog box), the system variable OK is set to 0 and the system variable Document will be empty."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/open-document",children:"Open document"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R8/commands/select-folder",children:"Select folder"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"905"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2713"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Modifies variables"}),(0,i.jsx)(t.td,{children:"OK, Document, error"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return d}});var s=n(667294);let i={},l=s.createContext(i);function d(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);