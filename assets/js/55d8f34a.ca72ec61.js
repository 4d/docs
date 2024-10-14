"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10289],{737175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=n(474848),s=n(28453);const r={id:"creating-using-macros",title:"Creating and using macros"},i=void 0,d={id:"code-editor/creating-using-macros",title:"Creating and using macros",description:"You can use macro-commands in your methods. Using macro-commands saves a lot of time during code entry.",source:"@site/versioned_docs/version-20/code-editor/creating-using-macros.md",sourceDirName:"code-editor",slug:"/code-editor/creating-using-macros",permalink:"/docs/20/code-editor/creating-using-macros",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Fcreating-using-macros.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"creating-using-macros",title:"Creating and using macros"},sidebar:"docs",previous:{title:"Code Editor",permalink:"/docs/20/code-editor/write-class-method"},next:{title:"Transformation tags",permalink:"/docs/20/Tags/tags"}},a={},c=[{value:"What is a macro?",id:"what-is-a-macro",level:2},{value:"Location of macros",id:"location-of-macros",level:2},{value:"Default macros",id:"default-macros",level:2},{value:"Adding customized macros",id:"adding-customized-macros",level:2},{value:"Checking the syntax of customized macros",id:"checking-the-syntax-of-customized-macros",level:3},{value:"Syntax of 4D macros",id:"syntax-of-4d-macros",level:2},{value:"About the <code>&lt;method&gt;</code> tag",id:"about-the-method-tag",level:2},{value:"Calling macros",id:"calling-macros",level:2},{value:"Context menu and toolbar",id:"context-menu-and-toolbar",level:3},{value:"Autocomplete",id:"autocomplete",level:3},{value:"Code Editor list",id:"code-editor-list",level:3},{value:"Compatibility notes",id:"compatibility-notes",level:2},{value:"Text selection variables for methods",id:"text-selection-variables-for-methods",level:3},{value:"Incompatibilities related to the XML standard",id:"incompatibilities-related-to-the-xml-standard",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"You can use macro-commands in your methods. Using macro-commands saves a lot of time during code entry."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-a-macro",children:"What is a macro?"}),"\n",(0,o.jsxs)(t.p,{children:["A macro-command is a section of 4D code that is permanently accessible and that can be inserted anywhere in your methods, whatever the type of database open. Macros can contain all types of 4D text, commands and constants, as well as special tags which are replaced at the time of macro insertion by values derived from the method context. For instance, a macro may contain the tag ",(0,o.jsx)(t.code,{children:"<method_name/>;"})," at the time of macro insertion, this tag will be replaced by the name of the current project method."]}),"\n",(0,o.jsx)(t.p,{children:"Macros are stored in one or more XML format (text) file(s). They can be placed in a Code Editor list; they can also be called using the context menu of the editor or using the autocomplete function."}),"\n",(0,o.jsx)(t.p,{children:"4D macros are written in XML format. You can use the 4D default macro file as is or modify it."}),"\n",(0,o.jsx)(t.h2,{id:"location-of-macros",children:"Location of macros"}),"\n",(0,o.jsxs)(t.p,{children:["4D loads the macros from a folder named ",(0,o.jsx)(t.strong,{children:"Macros v2"}),". Macros must be in the form of one or more XML files that are placed in this folder."]}),"\n",(0,o.jsx)(t.p,{children:'The "Macros v2" folder can be located:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["In the active 4D folder of the machine. Macros are then shared for all the databases.\n",(0,o.jsx)(t.strong,{children:"Note:"})," The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html",children:"Get 4D folder"})," command in the 4D ",(0,o.jsx)(t.em,{children:"Language Reference"})," manual."]}),"\n",(0,o.jsx)(t.li,{children:"Next to the database structure file. Macros are only loaded for this structure."}),"\n",(0,o.jsxs)(t.li,{children:["For components: in the ",(0,o.jsx)(t.strong,{children:"Components"})," folder of the database. Macros are then only loaded if the component is installed."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'These three locations can be used simultaneously: it is possible to install a "Macros v2" folder in each location. The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.'}),"\n",(0,o.jsx)(t.h2,{id:"default-macros",children:"Default macros"}),"\n",(0,o.jsxs)(t.p,{children:['4D offers a set of default macros containing, for example, control flow keywords. These macros are included in the default "',(0,o.jsx)(t.em,{children:"Macros.xml"}),'" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.']}),"\n",(0,o.jsx)(t.p,{children:"You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup."}),"\n",(0,o.jsx)(t.h2,{id:"adding-customized-macros",children:"Adding customized macros"}),"\n",(0,o.jsx)(t.p,{children:'You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. You can also add XML files of customized macros in this folder.'}),"\n",(0,o.jsx)(t.p,{children:"In local mode, the macros file can be open while using 4D. The list of available macros is updated on each event activating 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor."}),"\n",(0,o.jsx)(t.p,{children:"Empty or erroneous macros are not displayed."}),"\n",(0,o.jsx)(t.h3,{id:"checking-the-syntax-of-customized-macros",children:"Checking the syntax of customized macros"}),"\n",(0,o.jsxs)(t.p,{children:["The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration ",(0,o.jsx)(t.code,{children:'<?xml version="1.0" ...?>'})," and document declaration ",(0,o.jsx)(t.code,{children:'<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">'})," statements are mandatory at the beginning of a macro file in order for it to be loaded. The different types of XML encoding are supported. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D provides a DTD that can be used to validate the macro files. This file is found in the following location:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Windows: \\Resources\\DTD\\macros.dtd"}),"\n",(0,o.jsx)(t.li,{children:"Mac OS: :Contents:Resources:DTD:macros.dtd"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If a macros file does not contain the declaration statements or cannot be validated, it is not loaded."}),"\n",(0,o.jsx)(t.h2,{id:"syntax-of-4d-macros",children:"Syntax of 4D macros"}),"\n",(0,o.jsx)(t.p,{children:'4D macros are built using customized XML tags called "elements."'}),"\n",(0,o.jsxs)(t.p,{children:["Some tags indicate the start and end of the definition (double tags of the type ",(0,o.jsx)(t.code,{children:"<tag> </tag>"}),"), others are replaced by insertion context values (",(0,o.jsx)(t.code,{children:"<tag/>"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. The syntax of elements with attributes is as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Double tags: ",(0,o.jsx)(t.code,{children:'<tag attribute="value"> </macro>'})]}),"\n",(0,o.jsxs)(t.li,{children:["Single tags: ",(0,o.jsx)(t.code,{children:'<tag attribute="value"/>'})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If the element accepts several attributes, you can group them in the same line of command, separated by a space:\n",(0,o.jsx)(t.code,{children:'\\<tag attribute1="value" attribute2="value" attribute3="value"... >'})]}),"\n",(0,o.jsx)(t.p,{children:"Here is the list of tags and their mode of use:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Element tags"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Description"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<macros> </macros>"})}),(0,o.jsx)(t.td,{children:"Start and end of macro file (mandatory tag)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<macro> </macro>"})}),(0,o.jsx)(t.td,{children:"Start and end of the definition of a macro and its attributes."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"Attributes"}),":"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"- name: Name**of macro as it appears in menus and Code Editor lists (mandatory attribute)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"- type_ahead_text: Character string** to be entered to call the macro using the type-ahead (aka autocomplete) function*."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:'- in_menu: Boolean indicating whether the macro can be called using the context menu*. Values = "true" (default) or "false."'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:'- type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Values = "true" (default) or "false."'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:'- method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed.'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:'"on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:['- version: Used to activate the new mode of supporting text selections for the macro (see the "About the ',(0,o.jsx)(t.code,{children:"<method>"}),' Tag" section below). To activate this new mode, pass the value "2". If you omit this attribute or pass version="1", the former mode is kept.']})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:'- in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Values= "true" (default) or "false".'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<selection/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the selected text when the macro is inserted. The selection may be empty."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<text> </text>"})}),(0,o.jsx)(t.td,{children:"Start and end of code that must be inserted in the method. A carriage return will be added before and after the code."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<method> </method>"})}),(0,o.jsxs)(t.td,{children:['Start and end of the name of the project method and its (optional) parameter. The method is executed when the macro is called. You can pass a parameter in the form ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the ',(0,o.jsx)(t.code,{children:"<method>"}),' Tag" section below.']})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<caret/>"})}),(0,o.jsx)(t.td,{children:"Location of the insertion point in the code after the macro has been inserted."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<user_4D/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the name of the current 4D user."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<user_os/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the current system user name."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<method_name/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the current method name."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<method_path/>"})}),(0,o.jsxs)(t.td,{children:["Tag replaced by path syntax (as returned by ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1164.html",children:(0,o.jsx)(t.code,{children:"METHOD Get path"})})," of the current method."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<date/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the current date."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"Attribute"}),":"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"- format: 4D format used to display the date. If no format is set, the default format is used. Values = number of 4D format (0 to 8)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<time/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the current time."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"Attribute"}),":"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"- format: 4D format used to display the time. If no format is set, the default format is used. Values = number of 4D format (0 to 6)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<clipboard/>"})}),(0,o.jsx)(t.td,{children:"Tag replaced by the contents of the clipboard."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"Attribute"}),":"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{}),(0,o.jsx)(t.td,{children:"- index: Clipboard to be pasted. Values = number of the clipboard (0 to 9)."})]})]})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section)."}),"\n",(0,o.jsx)(t.li,{children:"If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.)."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Here is an example of a macro definition:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Content of macro"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Comments"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:'<?xml version="1.0"...?>'})}),(0,o.jsx)(t.td,{children:"XML declaration"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<!DOCTYPE macros SYSTEM>"})}),(0,o.jsx)(t.td,{children:"Document declaration"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<macros>"})}),(0,o.jsx)(t.td,{children:"Start of macros XML file"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:'<macro name="RecordLoop">'})}),(0,o.jsx)(t.td,{children:"Start of macro definition and name"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"<text>"})}),(0,o.jsx)(t.td,{children:"Start of macro code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["For($i;1;Records in selection(",(0,o.jsx)(t.code,{children:"<Selection/>"}),"))"]}),(0,o.jsxs)(t.td,{children:["The ",(0,o.jsx)(t.code,{children:"<Selection/>"})," tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name)"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["SAVE RECORD(",(0,o.jsx)(t.code,{children:"<Selection/>"}),")"]}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["NEXT RECORD(",(0,o.jsx)(t.code,{children:"<Selection/>"}),")"]}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"End for"}),(0,o.jsx)(t.td,{})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"</text>"})}),(0,o.jsx)(t.td,{children:"End of macro code"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"</macro>"})}),(0,o.jsx)(t.td,{children:"End of macro definition"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"</macros>"})}),(0,o.jsx)(t.td,{children:"End of macros XML file"})]})]})]}),"\n",(0,o.jsxs)(t.h2,{id:"about-the-method-tag",children:["About the ",(0,o.jsx)(t.code,{children:"<method>"})," tag"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"<method>"})," tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the ",(0,o.jsx)(t.em,{children:"MyMethod"})," method to be executed with the name of the current method as parameter:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:'<method>MyMethod("<method_name/>")</method>'})}),"\n",(0,o.jsx)(t.p,{children:"The code of a called method is executed in a new process. This process is killed once the method is executed."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the ",(0,o.jsx)(t.strong,{children:"Ctrl+F8"})," (Windows) or ",(0,o.jsx)(t.strong,{children:"Command+F8"}),' (Mac OS) command to "kill" the process.']}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"calling-macros",children:"Calling macros"}),"\n",(0,o.jsx)(t.p,{children:"By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window."}),"\n",(0,o.jsx)(t.p,{children:"Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function."}),"\n",(0,o.jsx)(t.h3,{id:"context-menu-and-toolbar",children:"Context menu and toolbar"}),"\n",(0,o.jsxs)(t.p,{children:["By default, all macros can be called via the context menu of the Code Editor (using the ",(0,o.jsx)(t.strong,{children:"Insert macro"})," hierarchical command) or the ",(0,o.jsx)(t.strong,{children:"Macros"})," button of the toolbar."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"in_menu"})," attribute of the ",(0,o.jsx)(t.code,{children:"<macro>"})," tag is used to set whether or not the macro appears in this menu."]}),"\n",(0,o.jsx)(t.p,{children:'In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. It is thus possible to change the order by modifying these files.'}),"\n",(0,o.jsx)(t.h3,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,o.jsxs)(t.p,{children:["By default, all macros are accessible using the autocomplete (aka type-ahead) function (see ",(0,o.jsx)(t.a,{href:"/docs/20/code-editor/write-class-method",children:"Writing a method"}),"). The ",(0,o.jsx)(t.em,{children:"type_ahead"})," attribute of the ",(0,o.jsx)(t.code,{children:"<macro>"})," tag can be used to exclude a macro from this type of operation."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," If the macro contains the ",(0,o.jsx)(t.code,{children:"<selection/>"})," tag, it will not appear in the autocomplete pop-up window."]}),"\n",(0,o.jsx)(t.h3,{id:"code-editor-list",children:"Code Editor list"}),"\n",(0,o.jsxs)(t.p,{children:["You can display your macros in a list of the Code Editor (see ",(0,o.jsx)(t.a,{href:"/docs/20/code-editor/write-class-method",children:"Writing a method"}),"). Simply double-click on the name of a macro in the list in order to call it. It is not possible to exclude a specific macro from this list."]}),"\n",(0,o.jsx)(t.h2,{id:"compatibility-notes",children:"Compatibility notes"}),"\n",(0,o.jsx)(t.p,{children:"Macro support can change from one version of 4D to another. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly."}),"\n",(0,o.jsx)(t.h3,{id:"text-selection-variables-for-methods",children:"Text selection variables for methods"}),"\n",(0,o.jsxs)(t.p,{children:["It is recommended to manage text selections using the ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19/help/command/en/page997.html",children:"GET MACRO PARAMETER"})," and ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19/help/command/en/page998.html",children:"SET MACRO PARAMETER"})," commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19/help/command/en/page997.html",children:"GET MACRO PARAMETER"})," and ",(0,o.jsx)(t.a,{href:"https://doc.4d.com/4dv19/help/command/en/page998.html",children:"SET MACRO PARAMETER"})," commands are used. This attribute must be declared as follows:"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:'<macro name="MyMacro" version="2">'}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"--- Text of the macro ---"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.code,{children:"</macro>"})]}),"\n",(0,o.jsx)(t.p,{children:"If you do not pass this attribute, the previous mode is kept."}),"\n",(0,o.jsx)(t.h3,{id:"incompatibilities-related-to-the-xml-standard",children:"Incompatibilities related to the XML standard"}),"\n",(0,o.jsx)(t.p,{children:"Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. The following are the main sources of malfunctioning:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:['Comments of the "// my comment" type, allowed inside ',(0,o.jsx)(t.code,{children:"<macro>"})," elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard ",(0,o.jsx)(t.code,{children:'"\x3c!-- my comment --\x3e"'})," form."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"<>"})," symbols used more particularly for interprocess object names must be encoded. For example, the ",(0,o.jsx)(t.code,{children:"<>params"})," variable must be written ",(0,o.jsx)(t.code,{children:"&lt;>params"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The initial ",(0,o.jsx)(t.code,{children:"<macros>"})," declaration tag could be omitted in previous versions of 4D. It is now mandatory; otherwise, the file will not be loaded."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);