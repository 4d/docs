"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70540"],{506128:function(e,n,s){s.r(n),s.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"Project/architecture","title":"Architecture of a project","description":"A 4D project is made of several folders and files, stored within a project root folder (package folder). For example:","source":"@site/versioned_docs/version-20-R8/Project/architecture.md","sourceDirName":"Project","slug":"/Project/architecture","permalink":"/docs/Project/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Project%2Farchitecture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"architecture","title":"Architecture of a project"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/Project/overview"},"next":{"title":"Settings","permalink":"/docs/settings/overview"}}'),r=s("785893"),i=s("250065");let d={id:"architecture",title:"Architecture of a project"},c=void 0,l={},o=[{value:"<code>Project</code> folder",id:"project-folder",level:2},{value:"<code>&lt;applicationName&gt;.4DProject</code> file",id:"applicationname4dproject-file",level:3},{value:"<code>Sources</code>",id:"sources",level:3},{value:"<code>DatabaseMethods</code>",id:"databasemethods",level:4},{value:"<code>Methods</code>",id:"methods",level:4},{value:"<code>Classes</code>",id:"classes",level:4},{value:"<code>Forms</code>",id:"forms",level:4},{value:"<code>TableForms</code>",id:"tableforms",level:4},{value:"<code>Triggers</code>",id:"triggers",level:4},{value:"<code>Trash</code>",id:"trash",level:3},{value:"<code>DerivedData</code>",id:"deriveddata",level:3},{value:"<code>Libraries</code>",id:"libraries",level:2},{value:"<code>Resources</code>",id:"resources",level:2},{value:"<code>Data</code>",id:"data",level:2},{value:"<code>Settings</code> (user data)",id:"settings-user-data",level:3},{value:"<code>Logs</code>",id:"logs",level:3},{value:"<code>Settings</code> (user)",id:"settings-user",level:2},{value:"<code>userPreferences.&lt;userName&gt;</code>",id:"userpreferencesusername",level:2},{value:"<code>Components</code>",id:"components",level:2},{value:"<code>Plugins</code>",id:"plugins",level:2},{value:"<code>Documentation</code>",id:"documentation",level:2},{value:"<code>WebFolder</code>",id:"webfolder",level:2},{value:"<code>.gitignore</code> file (optional)",id:"gitignore-file-optional",level:2}];function h(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A 4D project is made of several folders and files, stored within a project root folder (package folder). For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MyPackage (",(0,r.jsx)(n.em,{children:"project root folder"}),")\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Components"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Settings"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Plugins"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Project"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Sources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Trash"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Resources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Settings"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"userPreferences.jSmith"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"WebFolder"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:['If your project has been converted from a binary database, additional folders may be present. See "Converting databases to projects" on ',(0,r.jsx)(n.a,{href:"https://doc.4d.com",children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"project-folder",children:[(0,r.jsx)(n.code,{children:"Project"})," folder"]}),"\n",(0,r.jsx)(n.p,{children:"The Project folder typically contains the following hierarchy:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<applicationName>.4DProject"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Sources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Classes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DatabaseMethods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Forms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Triggers"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Trash"})," (if any)"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"applicationname4dproject-file",children:[(0,r.jsx)(n.code,{children:"<applicationName>.4DProject"})," file"]}),"\n",(0,r.jsx)(n.p,{children:"Project development file, used to designate and launch the project. This file can be opened by:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"4D"}),"\n",(0,r.jsxs)(n.li,{children:["4D Server (read-only, see ",(0,r.jsx)(n.a,{href:"/docs/Desktop/clientServer#opening-a-remote-project",children:"Opening a remote project"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"In 4D projects, development is done with 4D and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This text file can also contain configuration keys, in particular ",(0,r.jsx)(n.a,{href:"/docs/Preferences/general#excluding-tokens-in-existing-projects",children:(0,r.jsx)(n.code,{children:'"tokenizedText": false'})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"sources",children:(0,r.jsx)(n.code,{children:"Sources"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog.4DCatalog"}),(0,r.jsx)(n.td,{children:"Table and field definitions"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog_editor.json"}),(0,r.jsxs)(n.td,{children:["Custom positions and colors of tables, fields, and links in the Structure editor. Depends on a ",(0,r.jsx)(n.a,{href:"/docs/settings/compatibility",children:"Compatibility setting"})," in converted projects"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"folders.json"}),(0,r.jsx)(n.td,{children:"Explorer folder definitions"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menus.json"}),(0,r.jsx)(n.td,{children:"Menu definitions"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"roles.json"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/ORDA/privileges#rolesjson-file",children:"Privileges, permissions"})," and other security settings for the project"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Structure"})," database settings. They are not taken into account if ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-user",children:"user settings"})})," or ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"#settings-user-data",children:"user settings for data"})})," are defined (see also ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#priority-of-settings",children:"Priority of settings"}),". ",(0,r.jsx)(n.strong,{children:"Warning"}),": In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#enabling-user-settings",children:"enable"})," and use ",(0,r.jsx)(n.em,{children:"user settings"})," or ",(0,r.jsx)(n.em,{children:"user settings for data"})," to define custom settings."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tips.json"}),(0,r.jsx)(n.td,{children:"Defined tips"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lists.json"}),(0,r.jsx)(n.td,{children:"Defined lists"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filters.json"}),(0,r.jsx)(n.td,{children:"Defined filters"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dependencies.json"}),(0,r.jsxs)(n.td,{children:["Names of ",(0,r.jsx)(n.a,{href:"/docs/Project/components",children:"components to load"})," in the project"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTPHandlers.json"}),(0,r.jsxs)(n.td,{children:["Custom ",(0,r.jsx)(n.a,{href:"/docs/WebServer/http-request-handler",children:"HTTP request handlers"})," defined for the web server"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets.css"}),(0,r.jsx)(n.td,{children:"CSS style sheets"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_mac.css"}),(0,r.jsx)(n.td,{children:"Mac css style sheets (from converted binary database)"}),(0,r.jsx)(n.td,{children:"CSS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"styleSheets_windows.css"}),(0,r.jsx)(n.td,{children:"Windows css style sheets (from converted binary database)"}),(0,r.jsx)(n.td,{children:"CSS"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"databasemethods",children:(0,r.jsx)(n.code,{children:"DatabaseMethods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"databaseMethodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Database methods defined in the project. One file per database method"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"methods",children:(0,r.jsx)(n.code,{children:"Methods"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"methodName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Project methods defined in the project. One file per method"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"classes",children:(0,r.jsx)(n.code,{children:"Classes"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"className"}),".4dm"]}),(0,r.jsx)(n.td,{children:"User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"forms",children:(0,r.jsx)(n.code,{children:"Forms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Project form description"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"Project form method"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Project form static picture"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Object methods. One file per object method"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"tableforms",children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Input table form description (n is the table number)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Input table form static pictures"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"Input table form method"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Input/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Input form object methods. One file per object method"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/form.4DForm"]}),(0,r.jsx)(n.td,{children:"Output table form description (n is the table number)"}),(0,r.jsx)(n.td,{children:"json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/Images/",(0,r.jsx)(n.em,{children:"pictureName"})]}),(0,r.jsx)(n.td,{children:"Output table form static pictures"}),(0,r.jsx)(n.td,{children:"picture"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/method.4dm"]}),(0,r.jsx)(n.td,{children:"Output table form method"}),(0,r.jsx)(n.td,{children:"text"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"n"}),"/Output/",(0,r.jsx)(n.em,{children:"formName"}),"/ObjectMethods/",(0,r.jsx)(n.em,{children:"objectName"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Output form object methods. One file per object method"}),(0,r.jsx)(n.td,{children:"text"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"triggers",children:(0,r.jsx)(n.code,{children:"Triggers"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["table_",(0,r.jsx)(n.em,{children:"n"}),".4dm"]}),(0,r.jsx)(n.td,{children:"Trigger methods defined in the project. One trigger file per table (n is the table number)"}),(0,r.jsx)(n.td,{children:"text"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),"\nThe .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools."]}),"\n",(0,r.jsx)(n.h3,{id:"trash",children:(0,r.jsx)(n.code,{children:"Trash"})}),"\n",(0,r.jsx)(n.p,{children:"The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Forms"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"TableForms"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the ',(0,r.jsx)(n.a,{href:"#sources-folder",children:"Sources"})," folder."]}),"\n",(0,r.jsx)(n.h3,{id:"deriveddata",children:(0,r.jsx)(n.code,{children:"DerivedData"})}),"\n",(0,r.jsx)(n.p,{children:"The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder."}),"\n",(0,r.jsx)(n.h2,{id:"libraries",children:(0,r.jsx)(n.code,{children:"Libraries"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This folder is used on macOS only."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The Librairies folder contains the file resulting from a compilation with the ",(0,r.jsx)(n.a,{href:"/docs/Project/compiler#silicon-compiler",children:"Silicon compiler"})," on macOS."]}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:(0,r.jsx)(n.code,{children:"Resources"})}),"\n",(0,r.jsxs)(n.p,{children:["The Resources folder contains any custom project resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the ",(0,r.jsx)(n.em,{children:"4D Server Reference Manual"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"item"})}),(0,r.jsx)(n.td,{children:"Project resource files and folders"}),(0,r.jsx)(n.td,{children:"various"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Images/Library/",(0,r.jsx)(n.em,{children:"item"})]}),(0,r.jsx)(n.td,{children:"Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name."}),(0,r.jsx)(n.td,{children:"picture"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) only if the project was exported from a .4db binary database."}),"\n",(0,r.jsx)(n.h2,{id:"data",children:(0,r.jsx)(n.code,{children:"Data"})}),"\n",(0,r.jsx)(n.p,{children:"The data folder contains the data file and all files and folders relating to the data."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.4dd(*)"}),(0,r.jsxs)(n.td,{children:["Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the ",(0,r.jsx)(n.em,{children:"Open data file"})," dialog box will then appear so that you can select the data file to use or create a new one"]}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.journal"}),(0,r.jsx)(n.td,{children:"Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user\u2019s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created."}),(0,r.jsx)(n.td,{children:"binary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data.match"}),(0,r.jsx)(n.td,{children:"(internal) UUID matching table number"}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) When the project is created from a .4db binary database, the data file is left untouched. Thus, it can be named differently and placed in another location."}),"\n",(0,r.jsxs)(n.h3,{id:"settings-user-data",children:[(0,r.jsx)(n.code,{children:"Settings"})," (user data)"]}),"\n",(0,r.jsxs)(n.p,{children:["This folder contains ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#user-settings-for-data-file",children:(0,r.jsx)(n.strong,{children:"user settings for data"})})," used for application administration."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["These settings take priority over ",(0,r.jsx)(n.a,{href:"#settings-user",children:"user settings"})," and ",(0,r.jsx)(n.a,{href:"#sources",children:"structure settings"}),". See also ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#priority-of-settings",children:"Priority of settings"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Description of 4D groups, users, and their access rights when the application is run with this data file."}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Database backup settings, used to set the ",(0,r.jsx)(n.a,{href:"/docs/Backup/settings",children:"backup options"})," when the database is run with this data file. Keys concerning backup configuration are described in the ",(0,r.jsx)(n.em,{children:"4D XML Keys Backup"})," manual."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsx)(n.td,{children:"Custom database settings for this data file."}),(0,r.jsx)(n.td,{children:"XML"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"logs",children:(0,r.jsx)(n.code,{children:"Logs"})}),"\n",(0,r.jsx)(n.p,{children:"The Logs folder contains all log files used by the project. Log files include, in particular:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"database conversion,"}),"\n",(0,r.jsx)(n.li,{children:"web server requests,"}),"\n",(0,r.jsxs)(n.li,{children:["backup/restore activities journal (",(0,r.jsx)(n.em,{children:"Backup Journal[xxx].txt"}),", see ",(0,r.jsx)(n.a,{href:"/docs/Backup/backup#backup-journal",children:"Backup journal"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"command debugging,"}),"\n",(0,r.jsx)(n.li,{children:"4D Server requests (generated on client machines and on the server)."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["An additional Logs folder is available in the system user preferences folder (active 4D folder, see ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page485.html",children:"Get 4D folder"})," command) for maintenance log files and in cases where data folder is read-only."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"settings-user",children:[(0,r.jsx)(n.code,{children:"Settings"})," (user)"]}),"\n",(0,r.jsxs)(n.p,{children:["This folder contains ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#user-settings",children:(0,r.jsx)(n.strong,{children:"user settings"})})," used for application administration."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["These settings take priority over ",(0,r.jsx)(n.a,{href:"#sources",children:"structure settings"})," file. However, if ",(0,r.jsx)(n.a,{href:"#settings-user-data",children:"user settings for data"})," exist, they take priority over the user settings. See also ",(0,r.jsx)(n.a,{href:"/docs/Desktop/user-settings#priority-of-settings",children:"Priority of settings"}),"."]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"directory.json"}),(0,r.jsx)(n.td,{children:"Description of 4D groups and users for the application, as well as their access rights"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backup.4DSettings"}),(0,r.jsxs)(n.td,{children:["Database backup settings, used to set the ",(0,r.jsx)(n.a,{href:"/docs/Backup/settings",children:"backup options"}),") when each backup is launched. This file can also be used to read or set additional options, such as the amount of information stored in the ",(0,r.jsx)(n.em,{children:"backup journal"}),". Keys concerning backup configuration are described in the ",(0,r.jsx)(n.em,{children:"4D XML Keys Backup"})," manual."]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BuildApp.4DSettings"}),(0,r.jsxs)(n.td,{children:["Build settings file, created automatically when using the application builder dialog box or the ",(0,r.jsx)(n.code,{children:"BUILD APPLICATION"})," command"]}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings.4DSettings"}),(0,r.jsx)(n.td,{children:"Custom settings for this project (all data files)"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"logConfig.json"}),(0,r.jsxs)(n.td,{children:["Custom ",(0,r.jsx)(n.a,{href:"/docs/Debugging/debugLogFiles#using-a-log-configuration-file",children:"log configuration file"})]}),(0,r.jsx)(n.td,{children:"json"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"userpreferencesusername",children:(0,r.jsx)(n.code,{children:"userPreferences.<userName>"})}),"\n",(0,r.jsx)(n.p,{children:"This folder contains files that memorize user configurations, e.g. break point or window positions. You can just ignore this folder. It contains for example:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Contents"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Format"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodPreferences.json"}),(0,r.jsx)(n.td,{children:"Current user Code Editor preferences"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methodWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Current user window positions for methods"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formWindowPositions.json"}),(0,r.jsx)(n.td,{children:"Current user window positions for forms"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"workspace.json"}),(0,r.jsx)(n.td,{children:"List of opened windows; on macOS, order of tab windows"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"debuggerCatches.json"}),(0,r.jsx)(n.td,{children:"Caught calls to commands"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"recentTables.json"}),(0,r.jsx)(n.td,{children:"Ordered list of tables"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preferences.4DPreferences"}),(0,r.jsx)(n.td,{children:"Current data path and main window positions"}),(0,r.jsx)(n.td,{children:"XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerIntermediateFiles"}),(0,r.jsx)(n.td,{children:"Intermediate files resulting from Apple Silicon compilation"}),(0,r.jsx)(n.td,{children:"Folder"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:(0,r.jsx)(n.code,{children:"Components"})}),"\n",(0,r.jsx)(n.p,{children:"Folder containing components that are embedded in the project (must be stored at the same level as the Project folder). These components have priority over any other locations."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["You can also use the ",(0,r.jsxs)(n.a,{href:"/docs/Project/components",children:[(0,r.jsx)(n.strong,{children:"dependencies.json"})," and (optionnally) ",(0,r.jsx)(n.strong,{children:"environment4d.json"})," files"]})," to declare components."]})}),"\n",(0,r.jsx)(n.h2,{id:"plugins",children:(0,r.jsx)(n.code,{children:"Plugins"})}),"\n",(0,r.jsx)(n.p,{children:"This folder contains the plug-ins to be available in the application project. It must be stored at the same level as the Project folder."}),"\n",(0,r.jsx)(n.h2,{id:"documentation",children:(0,r.jsx)(n.code,{children:"Documentation"})}),"\n",(0,r.jsx)(n.p,{children:"This folder contains all documentation files (.md) created for the project elements such as classes, methods, or forms. Documentation files are managed and displayed in the 4D Explorer."}),"\n",(0,r.jsxs)(n.p,{children:["For more information, refer to ",(0,r.jsx)(n.a,{href:"/docs/Project/documentation",children:"Documenting a project"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"webfolder",children:(0,r.jsx)(n.code,{children:"WebFolder"})}),"\n",(0,r.jsx)(n.p,{children:"Defaut root folder of the 4D Web server for pages, pictures, etc. It is automatically created when the Web server is launched for the first time."}),"\n",(0,r.jsxs)(n.h2,{id:"gitignore-file-optional",children:[(0,r.jsx)(n.code,{children:".gitignore"})," file (optional)"]}),"\n",(0,r.jsxs)(n.p,{children:["File that specifies which files will be ignored by git. You can include a gitignore file in your projects using the ",(0,r.jsx)(n.strong,{children:"Create .gitignore file"})," option on the ",(0,r.jsx)(n.strong,{children:"General"})," page of the preferences. To configure the contents of that file, see ",(0,r.jsxs)(n.a,{href:"/docs/Preferences/general#create-gitignore-file",children:["Create ",(0,r.jsx)(n.code,{children:".gitignore"})," file"]}),"."]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);