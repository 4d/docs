"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81802"],{27259:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/select-folder","title":"Select folder","description":"Select folder ( {message }{;}{ defaultPath {; options}} ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/select-folder.md","sourceDirName":"commands-legacy","slug":"/commands/select-folder","permalink":"/docs/commands/select-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-folder.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"select-folder","title":"Select folder","slug":"/commands/select-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Select document","permalink":"/docs/commands/select-document"},"next":{"title":"SET DOCUMENT POSITION","permalink":"/docs/commands/set-document-position"}}'),o=t("785893"),r=t("250065");let d={id:"select-folder",title:"Select folder",slug:"/commands/select-folder",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Select folder"})," ( {",(0,o.jsx)(n.em,{children:"message"})," }{;}{ ",(0,o.jsx)(n.em,{children:"defaultPath"})," {; ",(0,o.jsx)(n.em,{children:"options"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"message"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Title of the window"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"defaultPath"}),(0,o.jsx)(n.td,{children:"Text, Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"\u2022 Default pathname or \u2022 Empty string to display the default user folder (\u201CMy documents\u201D under Windows, \u201CDocuments\u201D under Mac OS), or \u2022 Number of memorized pathname"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"options"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Selection option(s)under Mac OS"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Access path to the selected folder"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Select folder"})," command displays a dialog box that allows you to manually select a folder and then retrieve the complete access path to that folder. The optional ",(0,o.jsx)(n.em,{children:"defaultPath"})," parameter can be used to designate the location of a folder that will be initially displayed in the folder selection dialog box."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This command does not modify 4D\u2019s current folder."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Select folder"})," command displays a standard dialog box to browse through the workstation\u2019s volumes and folders.",(0,o.jsx)(n.br,{}),"\nThe optional parameter ",(0,o.jsx)(n.em,{children:"message"}),' allows you to display a message in the dialog box. In the following examples, the message is "Destination folder?":']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Windows"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{src:t(803478).Z+"",width:"502",height:"420"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"macOS"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(887009).Z+"",width:"758",height:"492"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.em,{children:"defaultPath"})," parameter to provide a default folder location in the folder selection dialog box. You can pass three types of values in this parameter:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The pathname of a valid folder using the syntax of the current platform."}),"\n",(0,o.jsx)(n.li,{children:"An empty string (\u201C\u201D) to display the default user folder of the system (\u201CMy documents\u201D under Windows, \u201CDocuments\u201D under macOS)."}),"\n",(0,o.jsxs)(n.li,{children:["The number of a memorized pathname (from 1 to 32,000) to display the associated folder. This means that you can store in memory the pathname of the folder that is open when the user clicks on the selection button; in other words, the folder chosen by the user. When calling a random number (for instance, 5) the command displays the default user folder of the system (equivalent to passing an empty string). The user may then browse among the folders on their harddisk. When the user clicks on the selection button, the pathname is memorized and associated with the number 5. When the number 5 is called subsequently, the memorized pathnname will be used by default. If a new location is selected, the path number 5 will be updated, and so on.",(0,o.jsx)(n.br,{}),"\nThis mechanism can be used to memorize up to 32,000 pathnames. Under Windows, each path is only kept during the session. Under macOS, the paths remain memorized from one session to the next. If the pathname is incorrect, the ",(0,o.jsx)(n.em,{children:"defaultPath"})," parameter is ignored."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This mechanism is identical to the one used by the ",(0,o.jsx)(n.a,{href:"/docs/commands/select-document",children:"Select document"})," command. The numbers of memorized pathnames are shared between both these commands."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.em,{children:"options"})," parameter lets you benefit from additional functions under macOS. In this parameter, you can pass one of the following constants, found in the ",(0,o.jsx)(n.em,{children:"System Documents"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constant"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Value"}),(0,o.jsx)(n.th,{children:"Comment"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Package open"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"(Mac OS only): Authorizes the opening of packages as folders and thus the viewing /selection of their contents. By default, if this constant is not used, the command will not allow the opening of packages."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Use sheet window"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"16"}),(0,o.jsxs)(n.td,{children:["(Mac OS only): Displays the selection dialog box in the form of a sheet window (this option is ignored under Windows). ",(0,o.jsx)(n.br,{}),"Sheet windows are specific to the Mac OS X interface which have graphic animation (for more information, refer to the ",(0,o.jsx)(n.a,{href:"/docs/commands/display-selection",children:"DISPLAY SELECTION"})," section). By default, if this constant is not used, the command will display a standard dialog box."]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["You can pass a single constant or a combination of both. These options are only taken into account under macOS. Under Windows, the ",(0,o.jsx)(n.em,{children:"options"})," parameter is ignored if it is passed."]}),"\n",(0,o.jsxs)(n.p,{children:["The user selects a folder and then clicks the ",(0,o.jsx)(n.strong,{children:"Select Folder"})," button (on Windows) or the ",(0,o.jsx)(n.strong,{children:"Open"})," button (on macOS). The access path to the folder is then returned by the function."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On Windows, the access path is returned in the following format:",(0,o.jsx)(n.br,{}),"\n\u201CC:\\Folder1\\Folder2\\SelectedFolder\\\u201D"]}),"\n",(0,o.jsxs)(n.li,{children:["On macOS, the access path is returned in the following format:",(0,o.jsx)(n.br,{}),"\n\u201CHard Disk:Folder1:Folder2:SelectedFolder:\u201D"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," On macOS, depending on whether or not the name of the folder is selected in the dialog box, the access path that is returned to you may be different."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(46083).Z+"",width:"587",height:"183"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D Server:"})," This function allows you to view the volumes connected to the client workstations. It is not possible to call this function from a stored procedure."]}),"\n",(0,o.jsxs)(n.p,{children:["If the user validates the dialog box, the ",(0,o.jsx)(n.strong,{children:"OK"})," system variable is set to 1. If the user clicks the ",(0,o.jsx)(n.strong,{children:"Cancel"})," button, the ",(0,o.jsx)(n.strong,{children:"OK"})," system variable is set to 0 and the function returns an empty string."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," On Windows, if the user selected some incorrect elements, such as \u201CWorkstation\u201D, \u201CTrash can\u201D, and so on, the ",(0,o.jsx)(n.strong,{children:"OK"})," system variable is set to 0, even if the user validates the dialog box."]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"The following example allows you to select the folder in which the pictures in the picture library will be stored:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$PictFolder:=Select folder("Select a folder for your pictures.")\n\xa0PICTURE LIBRARY LIST(pictRefs;pictNames)\n\xa0For($n;1;Size of array(pictNames))\n\xa0\xa0\xa0\xa0GET PICTURE FROM LIBRARY(pictRefs{$n};$vStoredPict)\n\xa0\xa0\xa0\xa0WRITE PICTURE FILE($PictFolder+pictNames{$n};$vStoredPict)\n\xa0End for\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/create-folder",children:"CREATE FOLDER"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/folder-list",children:"FOLDER LIST"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/select-document",children:"Select document"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"670"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifies variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},46083:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict34878.en-8cebfddc4025e3e90fbe59c6bd333e0d.png"},803478:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict3881936.en-f7ad218df9275caade9f5928d0aafe2a.png"},887009:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict3881985.en-dd24a3439cdb04dcca328ff9abb64a6c.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let o={},r=s.createContext(o);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);