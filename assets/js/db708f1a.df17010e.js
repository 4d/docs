"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99454"],{18090:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>l,contentTitle:()=>r});var i=JSON.parse('{"id":"Preferences/general","title":"General Page","description":"This page contains various options to configure the general operation of your 4D application.","source":"@site/versioned_docs/version-20-R9/Preferences/general.md","sourceDirName":"Preferences","slug":"/Preferences/general","permalink":"/docs/Preferences/general","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Preferences%2Fgeneral.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"general","title":"General Page"},"sidebar":"docs","previous":{"title":"Preferences","permalink":"/docs/Preferences/overview"},"next":{"title":"Structure Page","permalink":"/docs/Preferences/structure"}}'),o=t("785893"),s=t("250065");let a={id:"general",title:"General Page"},r=void 0,c={},l=[{value:"Options",id:"options",level:2},{value:"At startup",id:"at-startup",level:3},{value:"Automatic form creation",id:"automatic-form-creation",level:3},{value:"Window tabbing (macOS only)",id:"window-tabbing-macos-only",level:3},{value:"Appearance (macOS only)",id:"appearance-macos-only",level:3},{value:"Exit Design when going to Application Environment",id:"exit-design-when-going-to-application-environment",level:3},{value:"Enable binary database creation",id:"enable-binary-database-creation",level:3},{value:"When creating a new project",id:"when-creating-a-new-project",level:2},{value:"Use Log File",id:"use-log-file",level:3},{value:"Create package",id:"create-package",level:3},{value:"Include tokens in project source files",id:"include-tokens-in-project-source-files",level:3},{value:"Excluding tokens in existing projects",id:"excluding-tokens-in-existing-projects",level:4},{value:"Create <code>.gitignore</code> file",id:"create-gitignore-file",level:3},{value:"Language of text comparison",id:"language-of-text-comparison",level:3},{value:"Documentation Location",id:"documentation-location",level:2},{value:"Documentation language",id:"documentation-language",level:3},{value:"Look in the local folder first",id:"look-in-the-local-folder-first",level:3},{value:"Local folder",id:"local-folder",level:3}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This page contains various options to configure the general operation of your 4D application."}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.h3,{id:"at-startup",children:"At startup"}),"\n",(0,o.jsx)(n.p,{children:"This option allows you to configure the default 4D display at startup, when the user launches only the application."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Do nothing"}),": Only the application window appears, empty."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open Local Project dialog"}),": 4D displays a standard open document dialog box, allowing you to select a local project."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open last used project"}),": 4D directly opens the last project used; no opening dialog box appears.\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["To force the display of the opening dialog box when this option is selected, hold down the ",(0,o.jsx)(n.strong,{children:"Alt"})," (Windows) or ",(0,o.jsx)(n.strong,{children:"Option"})," (macOS) key while launching the project."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open Remote Project dialog"}),": 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open Welcome Wizard dialog"})," (factory setting): 4D displays the Welcome Wizard dialog box."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4D Server"}),": The 4D Server application ignores this option. In this environment, the ",(0,o.jsx)(n.strong,{children:"Do nothing"})," mode is always used."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"automatic-form-creation",children:"Automatic form creation"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This option is only used in binary databases; it is ignored in project architecture. See doc.4d.com."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"window-tabbing-macos-only",children:"Window tabbing (macOS only)"}),"\n",(0,o.jsx)(n.p,{children:"Starting with macOS Sierra, Mac applications can benefit from the Automatic Window Tabbing feature that helps organizing multiple windows: document windows are stacked into a single parent window and can be browsed through tabs. This feature is useful on small screens and/or when using a trackpad."}),"\n",(0,o.jsx)(n.p,{children:"You can benefit from this feature in the following environments (with 4D 64-bit versions only):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Code Editor windows"}),"\n",(0,o.jsx)(n.li,{children:"Form Editor windows"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"All windows from these editors can be put in tab form:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(735055).Z+"",width:"1094",height:"316"})}),"\n",(0,o.jsxs)(n.p,{children:["A set of commands in the ",(0,o.jsx)(n.strong,{children:"Window"})," menu allows managing the tabs:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(51944).Z+"",width:"352",height:"173"})}),"\n",(0,o.jsxs)(n.p,{children:["In the 4D's Preferences dialog box, the ",(0,o.jsx)(n.strong,{children:"Window tabbing"})," option allows you to control this feature:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(871357).Z+"",width:"864",height:"296"})}),"\n",(0,o.jsx)(n.p,{children:"Three options are available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"According to System Preferences"})," (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Never"}),": Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Always"}),": Opening a new document in 4D form editor or method editors will always result in creating a new tab."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"appearance-macos-only",children:"Appearance (macOS only)"}),"\n",(0,o.jsxs)(n.p,{children:["This menu lets you select the color scheme to use for the ",(0,o.jsx)(n.strong,{children:"4D development"})," environment. The specified scheme will be applied to all editors and windows of the Design mode."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["You can also set the color scheme to use in your ",(0,o.jsx)(n.strong,{children:"desktop applications"}),' in the "Interface" page of the Settings dialog box.']}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Three options are available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"According to System Color Scheme Preferences"})," (default): Use the color scheme defined in the macOS System Preferences."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Light"}),": Use the Light Theme"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Dark"}),": Use the Dark Theme"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'This preference is only supported on macOS. On Windows, the "Light" scheme is always used.'}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"exit-design-when-going-to-application-environment",children:"Exit Design when going to Application Environment"}),"\n",(0,o.jsxs)(n.p,{children:["If this option is checked, when the user switches to the Application environment using the ",(0,o.jsx)(n.strong,{children:"Test Application"})," menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment."]}),"\n",(0,o.jsx)(n.h3,{id:"enable-binary-database-creation",children:"Enable binary database creation"}),"\n",(0,o.jsxs)(n.p,{children:["If you check this option, two items are added in the ",(0,o.jsx)(n.strong,{children:"File > New"})," menu and the ",(0,o.jsx)(n.strong,{children:"New"})," toolbar button:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Database..."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Database from Structure Definition..."})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(263352).Z+"",width:"599",height:"239"})}),"\n",(0,o.jsxs)(n.p,{children:["These items allow you to create binary databases (see ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Creating-a-new-database.300-6750129.en.html",children:"Creating a new database"})," section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments."]}),"\n",(0,o.jsx)(n.h2,{id:"when-creating-a-new-project",children:"When creating a new project"}),"\n",(0,o.jsx)(n.h3,{id:"use-log-file",children:"Use Log File"}),"\n",(0,o.jsxs)(n.p,{children:["When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to ",(0,o.jsx)(n.a,{href:"/docs/Backup/log",children:"Log file (.journal)"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"create-package",children:"Create package"}),"\n",(0,o.jsx)(n.p,{children:"When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase."}),"\n",(0,o.jsx)(n.p,{children:"Thanks to this principle, under macOS the database folders appear as packages having specific properties. Under Windows, this has no particular impact."}),"\n",(0,o.jsx)(n.h3,{id:"include-tokens-in-project-source-files",children:"Include tokens in project source files"}),"\n",(0,o.jsxs)(n.p,{children:["When this option is checked, saved ",(0,o.jsx)(n.a,{href:"/docs/Project/architecture#sources",children:"method source files"})," in new 4D projects will contain ",(0,o.jsx)(n.strong,{children:"tokens"})," for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as ",(0,o.jsx)(n.code,{children:":C10"})," or ",(0,o.jsx)(n.code,{children:":5"})," inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv20/4D/20.6/Using-tokens-in-formulas.300-7487422.en.html",children:"Using tokens in formulas"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"If you intend to use VCS or external code editors with your new projects, you might want to uncheck this option for a better readability of the code with these tools."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This option can only be applied to projects (binary databases always include tokens)."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["You can always get the code with tokens by calling ",(0,o.jsx)(n.a,{href:"/docs/commands/method-get-code",children:(0,o.jsx)(n.code,{children:"METHOD GET CODE"})})," with 1 in the ",(0,o.jsx)(n.em,{children:"option"})," parameter."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"excluding-tokens-in-existing-projects",children:"Excluding tokens in existing projects"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure your existing projects to save code ",(0,o.jsx)(n.strong,{children:"without tokens"})," by inserting the following key in the ",(0,o.jsx)(n.a,{href:"/docs/Project/architecture#applicationname4dproject-file",children:(0,o.jsx)(n.code,{children:"<applicationName>.4DProject"})})," file using a text editor:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'"tokenizedText": false\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This setting is only taken into account when methods are saved. Existing methods in your projects are left untouched, unless you resave them."}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"create-gitignore-file",children:["Create ",(0,o.jsx)(n.code,{children:".gitignore"})," file"]}),"\n",(0,o.jsx)(n.p,{children:"You might need or want git to ignore some files in your new projects."}),"\n",(0,o.jsxs)(n.p,{children:["You can set this preference by checking the ",(0,o.jsx)(n.strong,{children:"Create .gitignore file"}),"  option."]}),"\n",(0,o.jsxs)(n.p,{children:["When a project is created in 4D and that box is checked, 4D creates a ",(0,o.jsx)(n.code,{children:".gitignore"})," file at the same level as the ",(0,o.jsx)(n.code,{children:"Project"})," folder (see ",(0,o.jsx)(n.a,{href:"/docs/Project/architecture#gitignore-file-optional",children:"Architecture of a Project"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["You can define the default contents of the ",(0,o.jsx)(n.code,{children:".gitignore"})," file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the ",(0,o.jsx)(n.code,{children:".gitignore"})," files in your new projects."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://git-scm.com/docs/gitignore",children:"official git documentation"})," is a great resource to understand how ",(0,o.jsx)(n.code,{children:".gitignore"})," files work."]}),"\n",(0,o.jsx)(n.h3,{id:"language-of-text-comparison",children:"Language of text comparison"}),"\n",(0,o.jsx)(n.p,{children:"This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system."}),"\n",(0,o.jsx)(n.p,{children:"A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language."}),"\n",(0,o.jsx)(n.p,{children:"When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["You can modify this parameter for the open database using the Database Settings (see ",(0,o.jsx)(n.a,{href:"/docs/settings/database#text-comparison",children:"Text comparison"}),")."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"documentation-location",children:"Documentation Location"}),"\n",(0,o.jsx)(n.p,{children:"This area configures access to the 4D HTML documentation displayed in your current browser:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When you hit the ",(0,o.jsx)(n.strong,{children:"F1"})," key while the cursor is inserted in a 4D class function or command name in the Code Editor;"]}),"\n",(0,o.jsxs)(n.li,{children:["When you double-click on a 4D command in the ",(0,o.jsx)(n.strong,{children:"Commands Page"})," of the Explorer."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"documentation-language",children:"Documentation language"}),"\n",(0,o.jsx)(n.p,{children:"Language of the HTML documentation to display. You can select a documentation in a different language from the application language."}),"\n",(0,o.jsx)(n.h3,{id:"look-in-the-local-folder-first",children:"Look in the local folder first"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This option is only taken into account for command documentation access (excluding class functions)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Sets where 4D will look for documentation pages."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When checked (default), 4D first looks for the page in the local folder (see below). If it is found, 4D displays the page in the current browser. If not, 4D automatically looks for it in the on-line documentation Web site. This makes it possible to access the documentation even when you are offline."}),"\n",(0,o.jsx)(n.li,{children:"When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser. If it is not found, 4D displays an error message in the browser."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"local-folder",children:"Local folder"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"This option is only taken into account for command documentation access (excluding class functions)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Indicates the location of the static HTML documentation. By default, this is the \\Help\\Command\\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red."}),"\n",(0,o.jsxs)(n.p,{children:["You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. To designate a different location, click on the ",(0,o.jsx)(n.strong,{children:"[...]"})," button next to the entry area and choose a documentation root folder (folder corresponding to the language: ",(0,o.jsx)(n.code,{children:"fr"}),", ",(0,o.jsx)(n.code,{children:"en"}),", ",(0,o.jsx)(n.code,{children:"es"}),", ",(0,o.jsx)(n.code,{children:"de"})," or ",(0,o.jsx)(n.code,{children:"ja"}),")."]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},735055:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/general2-948c70c01e7b5824ffd053658a50ffeb.png"},51944:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/general3-3b8bdcccc3a3e646ae1a9e1cdaf1c9f2.png"},871357:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/general4-273b030d0b728e88f5c7343ebc2d00ce.png"},263352:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/general5-d52f6fe46e4e88a688517bb2ecde6908.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let o={},s=i.createContext(o);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);