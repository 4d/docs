"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50618],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=a.createContext({}),p=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(A.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(A,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},177794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>A,toc:()=>s});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"creating",title:"Working with a project"},l=void 0,A={unversionedId:"GettingStarted/creating",id:"version-20/GettingStarted/creating",title:"Working with a project",description:"4D projects are created and developed using the 4D application, which provides a comprehensive Integrated Development Environment (IDE). 4D Server can also create new, empty projects.",source:"@site/versioned_docs/version-20/GettingStarted/creating.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/creating",permalink:"/docs/20/GettingStarted/creating",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20GettingStarted%2Fcreating.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"creating",title:"Working with a project"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/20/GettingStarted/installation"},next:{title:"Release Notes",permalink:"/docs/20/Notes/updates"}},p={},s=[{value:"Creating a project",id:"creating-a-project",level:2},{value:"Opening a project",id:"opening-a-project",level:2},{value:"Options",id:"options",level:3},{value:"Project opening shortcuts",id:"project-opening-shortcuts",level:2},{value:"Opening a Project with a 4DLink file",id:"opening-a-project-with-a-4dlink-file",level:3},{value:"About 4DLink Files",id:"about-4dlink-files",level:2},{value:"File saving",id:"file-saving",level:2}],c={toc:s};function g(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",r({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"4D projects are created and developed using the ",(0,a.kt)("strong",{parentName:"p"},"4D")," application, which provides a comprehensive Integrated Development Environment (IDE). ",(0,a.kt)("strong",{parentName:"p"},"4D Server")," can also create new, empty projects."),(0,a.kt)("p",null,"Multi-user development is managed via standard ",(0,a.kt)("strong",{parentName:"p"},"source control")," repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications."),(0,a.kt)("h2",r({},{id:"creating-a-project"}),"Creating a project"),(0,a.kt)("p",null,"New 4D application projects can be created from ",(0,a.kt)("strong",{parentName:"p"},"4D")," or ",(0,a.kt)("strong",{parentName:"p"},"4D Server"),". In any case, project files are stored on the local machine."),(0,a.kt)("p",null,"To create a new project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch 4D or 4D Server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do one of the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"New > Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"File")," menu: ",(0,a.kt)("img",{src:n(217216).Z,width:"558",height:"199"})),(0,a.kt)("li",{parentName:"ul"},"(4D only) Select ",(0,a.kt)("strong",{parentName:"li"},"Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"New")," toolbar button:",(0,a.kt)("p",null,(0,a.kt)("img",{src:n(293672).Z,width:"176",height:"230"})),"A standard ",(0,a.kt)("strong",{parentName:"li"},"Save")," dialog appears so you can choose the name and location of the 4D project's main folder."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the name of your project folder and click ",(0,a.kt)("strong",{parentName:"p"},"Save"),". This name will be used:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"as the name of the entire project folder,"),(0,a.kt)("li",{parentName:"ul"},"as the name of the .4DProject file at the first level of the ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/20/Project/architecture#project-folder"}),'"Project" folder'),".")),(0,a.kt)("p",{parentName:"li"},"You can choose any name allowed by your operating system. However, if your project is intended to work on other systems or to be saved via a source control tool, you must take their specific naming recommendations into account."))),(0,a.kt)("p",null,"When you validate the ",(0,a.kt)("strong",{parentName:"p"},"Save")," dialog, 4D closes the current project (if any), creates a project folder at the indicated location, and puts all files needed for the project into it. For more information, refer to ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/20/Project/architecture"}),"Architecture of a 4D Project"),"."),(0,a.kt)("p",null,"You can then start developing your project."),(0,a.kt)("h2",r({},{id:"opening-a-project"}),"Opening a project"),(0,a.kt)("p",null,"To open an existing project from 4D:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do one of the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Open/Local Project...")," from the ",(0,a.kt)("strong",{parentName:"li"},"File")," menu or the ",(0,a.kt)("strong",{parentName:"li"},"Open")," toolbar button."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Open a local application project")," in the Welcome Wizard dialog")))),(0,a.kt)("p",null,"The standard Open dialog appears."),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the project's ",(0,a.kt)("inlineCode",{parentName:"p"},".4dproject")," file (located inside the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/20/Project/architecture#project-folder"}),'"Project" folder of the project'),") and click ",(0,a.kt)("strong",{parentName:"p"},"Open"),". "),(0,a.kt)("p",{parentName:"li"},"By default, the project is opened with its current data file. Other file types are suggested:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Packed project files"),": ",(0,a.kt)("inlineCode",{parentName:"li"},".4dz")," extension  - deployment projects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Shortcut files"),": ",(0,a.kt)("inlineCode",{parentName:"li"},".4DLink")," extension - store additional parameters needed for opening projects or applications (addresses, identifiers, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Binary files"),": ",(0,a.kt)("inlineCode",{parentName:"li"},".4db")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".4dc")," extension - legacy 4D database formats")))),(0,a.kt)("h3",r({},{id:"options"}),"Options"),(0,a.kt)("p",null,"In addition to standard system options, the ",(0,a.kt)("em",{parentName:"p"},"Open")," dialog in 4D provides two menus with specific options that are available using the ",(0,a.kt)("strong",{parentName:"p"},"Open")," button and the ",(0,a.kt)("strong",{parentName:"p"},"Data file")," menu."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open")," - opening mode of the project:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interpreted")," or ",(0,a.kt)("strong",{parentName:"li"},"Compiled"),": These options are available when the selected project contains both ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/20/Concepts/interpreted-compiled"}),"interpreted and compiled code"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",r({parentName:"strong"},{href:"/docs/20/MSC/overview"}),"Maintenance Security Center")),": Opening in secure mode allowing access to damaged projects in order to perform any necessary repairs."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Data file")," - specifies the data file to be used with the project. By default, the ",(0,a.kt)("strong",{parentName:"p"},"Current data file")," option is selected."))),(0,a.kt)("h2",r({},{id:"project-opening-shortcuts"}),"Project opening shortcuts"),(0,a.kt)("p",null,"4D offers several ways to open projects directly and bypass the Open dialog:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"via menu options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Menu bar")," - ",(0,a.kt)("strong",{parentName:"li"},"File")," > ",(0,a.kt)("strong",{parentName:"li"},"Open Recent Projects / {project name}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4D Tool bar")," -  Select the project from the menu associated with the ",(0,a.kt)("strong",{parentName:"li"},"Open")," button"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"via preferences:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"At startup")," general preference to ",(0,a.kt)("strong",{parentName:"li"},"Open last used project"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"using a ",(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," file."))),(0,a.kt)("h3",r({},{id:"opening-a-project-with-a-4dlink-file"}),"Opening a Project with a 4DLink file"),(0,a.kt)("p",null,"You can use a ",(0,a.kt)("a",r({parentName:"p"},{href:"#about-4DLink-files"}),(0,a.kt)("inlineCode",{parentName:"a"},".4DLink")," file")," to launch the 4D application and open the target 4D project. There are two ways to do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"double-click or drag and drop the ",(0,a.kt)("inlineCode",{parentName:"li"},".4DLink")," file onto the 4D application"),(0,a.kt)("li",{parentName:"ul"},"go to ",(0,a.kt)("strong",{parentName:"li"},"File")," > ",(0,a.kt)("strong",{parentName:"li"},"Open Recent Projects")," and select a project")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"open-recent-projects",src:n(777629).Z,width:"500",height:"225"})),(0,a.kt)("p",null,'A .4DLink file of "remote project" type can be copied and used on several machines.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's also possible to select a 4DLink file in the 4D and 4D Server opening dialog box (opening local project only).")),(0,a.kt)("h2",r({},{id:"about-4dlink-files"}),"About 4DLink Files"),(0,a.kt)("p",null,"Files with the ",(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," extension are XML files that contain parameters intended to automate and simplify opening local or remote 4D projects."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," files can save the address of a 4D project as well as its connection identifiers and opening mode, saving you time when opening projects."),(0,a.kt)("p",null,"4D automatically generates a ",(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," file when a local project is opened for the first time or when connecting to a server for the first time. The file is stored in the local preferences folder at the following location:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows 7 and higher: C:\\Users\\UserName\\AppData\\Roaming\\4D\\Favorites vXX\\"),(0,a.kt)("li",{parentName:"ul"},"OS X: Users/UserName/Library/Application Support/4D/Favorites vXX/")),(0,a.kt)("p",null,'XX represents the version number of the application. For example, "Favorites v19" for 4D v19.'),(0,a.kt)("p",null,"That folder is divided into two subfolders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("strong",{parentName:"li"},"Local")," folder contains the ",(0,a.kt)("inlineCode",{parentName:"li"},".4DLink")," files that can be used to open local projects"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("strong",{parentName:"li"},"Remote")," folder contains the ",(0,a.kt)("inlineCode",{parentName:"li"},".4DLink")," files of recent remote projects")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," files can also be created with an XML editor."),(0,a.kt)("p",null,"4D provides a DTD describing the XML keys that can be used to build a ",(0,a.kt)("inlineCode",{parentName:"p"},".4DLink")," file. This DTD is named database_link.dtd and is found in the \\Resources\\DTD\\ subfolder of the 4D application."),(0,a.kt)("h2",r({},{id:"file-saving"}),"File saving"),(0,a.kt)("p",null,"When working on a project in 4D, you can use built-in 4D editors to create, modify, or save structure items, methods, forms, etc. Modifications are saved to disk when you select a ",(0,a.kt)("strong",{parentName:"p"},"Save")," menu item, or when the editor's window loses or gets the focus."),(0,a.kt)("p",null,"Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a Code Editor window ",(0,a.kt)("em",{parentName:"p"},"and")," in a text editor, saving both modifications will result in a conflict."),(0,a.kt)("p",null,"The 4D development framework includes a file access manager to control concurrent access:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if an open file is read-only at the OS level, a locked icon is displayed in the editor:\n",(0,a.kt)("img",{src:n(214344).Z,width:"22",height:"31"})),(0,a.kt)("li",{parentName:"ul"},"if an open file is edited concurrently from different locations, 4D displays an alert dialog when trying to save the changes:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(588054).Z,width:"352",height:"185"}),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Yes"),": discard editor changes and reload the modified version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No"),": save changes and overwrite the other version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cancel"),": do not save")),(0,a.kt)("p",null,"This feature is enabled for all built-in 4D editors (Structure, Form, Method, Settings, and Toolbox)."))}g.isMDXComponent=!0},777629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4Dlinkfiles-96f51627e9276395742d3cb918b30a6b.png"},214344:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAfCAIAAABs2aqkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAE1SURBVEhL7ZQ9DoMwDEZ7ScaOPQMTDEhcgw1xAK7BIcoBUNmRaF9iKwk/EVLbAVV9U2x//uJEkMv4Mae1aNs2TdOrhQWhFiIsLPq+z/M8y7Ku6x4WFoQkKalow8ICadM08zw/AwhJUlLRBm/BwGxIwzRNdV3fLCwISVKKnchbcGzGZlvaiqK4W1gQkqSEQKVLvAWXx+FRsznNkmRBSJISAkmu8BZJkiAFFpqyxPKOv4XnSxbDMFRVheIQZIil02EsKJRlSU12i4EAGWLpdBgLPp7DfgEZYul0GAsmVEmATK5BAEnpdJzHwv1gIbsWuz+bsXC/+SG7v7yxcI+NCiPEHh5jAdS2T14IJQTIRB+iFryulIFRV/dCSFKqu4+wWggMyVG5MLlLgZBk7OGEhcV7/IjFOL4AhB3iYxYMqdEAAAAASUVORK5CYII="},588054:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},217216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/projectCreate1-2b4b8620d716caed56f0b5edbc72d0e9.png"},293672:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);