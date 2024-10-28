"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11650],{796604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=n(474848),i=n(28453);const o={id:"select-document",title:"Select document",slug:"/commands/select-document",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/select-document",title:"Select document",description:"Select document ( directory ; fileTypes ; title ; options {; selected} ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/select-document.md",sourceDirName:"commands-legacy",slug:"/commands/select-document",permalink:"/docs/commands/select-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"select-document",title:"Select document",slug:"/commands/select-document",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"RESOLVE ALIAS",permalink:"/docs/commands/resolve-alias"},next:{title:"Select folder",permalink:"/docs/commands/select-folder"}},r={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Select document"})," ( ",(0,s.jsx)(t.em,{children:"directory"})," ; ",(0,s.jsx)(t.em,{children:"fileTypes"})," ; ",(0,s.jsx)(t.em,{children:"title"})," ; ",(0,s.jsx)(t.em,{children:"options"})," {; ",(0,s.jsx)(t.em,{children:"selected"}),"} ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"directory"}),(0,s.jsx)(t.td,{children:"Text, Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"\u2022 Directory access path to display by default in the document selection dialog box, or\u2022 Empty string to display default user folder (\u201cMy documents\u201d under Windows, \u201cDocuments\u201d under Mac OS), or\u2022 Number of the memorized access path"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fileTypes"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:'List of types of documents to filter, or "*" to not filter documents'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"title"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Title of the selection dialog box"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"options"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Selection option(s)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"selected"}),(0,s.jsx)(t.td,{children:"Text array"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Array containing the list of access paths + names of selected files"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Name of selected file (first file of the list in case of multiple selection)"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Select document"})," command displays a standard open document dialog box which allows the user to set one or more files and returns the name and/or full access path of the selected file(s)."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"directory"})," parameter indicates the folder whose contents are initially displayed in the open document dialog box. You can pass three types of values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a text containing the full access path of the folder to display."}),"\n",(0,s.jsx)(t.li,{children:'an empty string ("") to display the default user folder for the current opeerating system (\u201cMy documents\u201d under Windows, \u201cDocuments\u201d under Mac OS).'}),"\n",(0,s.jsxs)(t.li,{children:["a number of the memorized access path (from 1 to 32000) to display the associated folder.",(0,s.jsx)(t.br,{}),"\nAs such, you can store in memory the access path of the folder opened when the user clicked the selection button, in other words, the folder selected by the user. During the first call of an arbitrary number (for example, 5) the command displays the default user folder of the operating system (equivalent of passing an empty string). The user could also browse folders on the hard disk. When the user clicks on the selection button, the access path is memorized and associated with number 5. During future calls to number 5, the memorized access path will be used by default. If a new location is selected, path number 5 is updated.",(0,s.jsx)(t.br,{}),"\nThis mechanism lets you memorize up to 32,000 access paths. Under Windows, each path is kept for the session only. Under Mac OS, the paths are kept by the system and remain stored from one session to the next."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This mechanism is the same as the one used by the ",(0,s.jsx)(t.a,{href:"/docs/commands/select-folder",children:"Select folder"})," command. The numbers of the memorized pathnames are shared by both commands."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the type(s) of file(s) that can be selected in the open file dialog box in the ",(0,s.jsx)(t.em,{children:"fileTypes"})," parameter. You can pass a list of several types separated by a ; (semi-colon). For each type defined, a row will be added in the type choice menu of the dialog box."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['Under Mac OS, you can pass either a standard Mac OS type (TEXT, APPL, etc.), or a UTI (Uniform Type Identifier) type. UTI types have been defined by Apple in order to meet requirements concerning the standardization of file types. For example, "public.text" is the UTI type of text type files. For more information about UTIs, please refer to the ',(0,s.jsx)(t.em,{children:"Uniform Type Identifier Concepts page"})," on the ",(0,s.jsx)(t.em,{children:"developer.apple.com"})," web site."]}),"\n",(0,s.jsx)(t.li,{children:"Under Windows, you can also pass a standard Mac OS type file \u2014 4D performs the conversion internally \u2014 or the file extensions (.txt, .exe, etc.). Please note that under Windows, the user can \u201cforce\u201d the display of all document types by entering *.* in the dialog box. However, in this case, 4D will perform an additional verification of the types of files selected: if the user selects an unauthorized file type, the command returns an error."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['If you do not want to restrict the files displayed to one or more types, pass the "*" (star) or ".*" string in ',(0,s.jsx)(t.em,{children:"fileTypes"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the label that must appear in the dialog box in the ",(0,s.jsx)(t.em,{children:"title"})," parameter. By default, if you pass an empty string, the label \u201cOpen\u201d is displayed."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"options"})," parameter allows you to specify advanced functions that are allowed in an open file dialog box. 4D provides the following pre-defined constants in the ",(0,s.jsx)(t.em,{children:"System Documents"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Allow alias files"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsxs)(t.td,{children:["Authorizes the selection of shortcuts (Windows) or aliases (macOS) as document. ",(0,s.jsx)(t.br,{}),"By default, if this constant is not used, when an alias or shortcut is selected, the command will return the access path of the targeted element. When you pass the constant, the command returns the path of the alias or shortcut itself."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"File name entry"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"32"}),(0,s.jsxs)(t.td,{children:["Allows user to enter a file name in a 'Save as' dialog box. No file is saved and it is up to the developer to create a file in response to this action (the Document system variable is updated). In this context, the ",(0,s.jsx)(t.em,{children:"directory"})," parameter may contain the path to a file instead of a directory. The file name will be used as the suggested file name in the Save as text field. The parent directory will be used as default path."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Multiple files"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:["Authorizes the simultaneous selection of several files using the key combinations ",(0,s.jsx)(t.strong,{children:"Shift+click"})," (adjacent selection) and ",(0,s.jsx)(t.strong,{children:"Ctrl+click"})," (Windows) or ",(0,s.jsx)(t.strong,{children:"Command+click"})," (Mac OS). In this case, the ",(0,s.jsx)(t.em,{children:"selected"})," parameter, if passed, contains the list of all selected files. By default, if this constant is not used, the command will not allow the selection of multiple files."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Package open"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsx)(t.td,{children:"(macOS only): Authorizes the opening of packages as folders and thus the viewing /selection of their contents. By default, if this constant is not used, the command will not allow the opening of packages."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Package selection"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsx)(t.td,{children:"(macOS only): Authorizes the selection of packages as entities (default if omitted). Use Package open if you want to allow users to view/select package contents."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Use sheet window"}),(0,s.jsx)(t.td,{children:"Longint"}),(0,s.jsx)(t.td,{children:"16"}),(0,s.jsxs)(t.td,{children:["(Mac OS only): Displays the selection dialog box in the form of a sheet window (this option is ignored under Windows). ",(0,s.jsx)(t.br,{}),"Sheet windows are specific to the Mac OS X interface which have graphic animation (for more information, refer to the ",(0,s.jsx)(t.em,{children:"Window Types (compatibility)"})," section). By default, if this constant is not used, the command will display a standard dialog box."]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["If you do not want to use an option, pass 0 in the ",(0,s.jsx)(t.em,{children:"options"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"selected"})," parameter allows you to get the full access path (access path + name) of every file selected by the user. The command creates, sizes and fills the array according to the user selection. This parameter is useful when the Multiple files option is used or when you want to find out the access path of the selected file (simply take the name of the file returned by the command from the value of the array). If no file is selected, the array is returned empty."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Under Mac OS, a selected package is considered as a folder. The pathname returned in the ",(0,s.jsx)(t.em,{children:"selected"}),' array includes a final ":" character. For example: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:']}),"\n",(0,s.jsxs)(t.p,{children:["The command returns the name (name + extension under Windows) of the selected file. If several files are selected, the command returns the name of the first file in the list of selected files. The list of files can be obtained in the ",(0,s.jsx)(t.em,{children:"selected"})," parameter. If no file is selected, the command returns an empty string."]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:"This example is used to specify a 4D data file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $platform : Integer\n\xa0PLATFORM PROPERTIES($platform)\n\xa0If($platform=Windows)\n\xa0\xa0\xa0\xa0$DocType:=".4DD"\n\xa0Else\n\xa0\xa0\xa0\xa0$DocType:="com.4d.4d.data-file"\xa0//UTI type\n\xa0End if\n\xa0$Options:=Allow alias files+Package open+Use sheet window\n\xa0$Doc:=Select document("";$DocType;"Select the data file";$Options)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.p,{children:"Creation of a custom document by user:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0$doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;$blob)\xa0// $blob contains document to record\n\xa0End if\n'})}),"\n",(0,s.jsx)(t.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(t.p,{children:["If the command has been correctly executed and a valid document was selected, the system variable OK is set to 1 and the system variable Document will contain the full access path of the selected file.",(0,s.jsx)(t.br,{}),"\nIf no file was selected (for example, if the user clicked on the ",(0,s.jsx)(t.strong,{children:"Cancel"})," button in the open file dialog box), the system variable OK is set to 0 and the system variable Document will be empty."]}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/open-document",children:"Open document"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/select-folder",children:"Select folder"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(296540);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);