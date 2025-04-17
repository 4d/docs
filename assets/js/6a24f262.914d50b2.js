"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66330"],{550979:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>r,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"Admin/cli","title":"Command Line Interface","description":"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and tool4d) using command lines. More particularly, this functionality allows you to:","source":"@site/versioned_docs/version-20-R8/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/20-R8/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cli","title":"Command Line Interface"},"sidebar":"docs","previous":{"title":"Data Explorer","permalink":"/docs/20-R8/Admin/dataExplorer"},"next":{"title":"TLS Protocol","permalink":"/docs/20-R8/Admin/tls"}}'),i=t("785893"),d=t("250065");let a={id:"cli",title:"Command Line Interface"},l=void 0,r={},o=[{value:"Basic information",id:"basic-information",level:2},{value:"Launch a 4D application",id:"launch-a-4d-application",level:2},{value:"Examples",id:"examples",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Using tool4d",id:"using-tool4d",level:3},{value:"Disabled 4D features",id:"disabled-4d-features",level:3},{value:"4D Server in utility mode",id:"4d-server-in-utility-mode",level:2}];function c(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),") using command lines. More particularly, this functionality allows you to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"launch a database remotely, which can be especially useful for administering Web servers."}),"\n",(0,i.jsx)(n.li,{children:"run automatic tests for your applications."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-information",children:"Basic information"}),"\n",(0,i.jsx)(n.p,{children:"You can execute command lines for 4D applications using the macOS Terminal or the Windows Console."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Under macOS, you should use the ",(0,i.jsx)(n.code,{children:"open"})," command."]}),"\n",(0,i.jsx)(n.li,{children:"Under Windows, you can just pass the arguments directly."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Under macOS, you can pass the arguments directly by going to the folder where the application is found inside the package (Contents/MacOS path), which allows to address the stderr stream. For example, if the 4D package is located in the ",(0,i.jsx)(n.code,{children:"MyFolder"})," folder, you must write the command line as follows: ",(0,i.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". However, we recommend that you use the ",(0,i.jsx)(n.code,{children:"open"})," command whenever you do not need to access the stderr stream."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"launch-a-4d-application",children:"Launch a 4D application"}),"\n",(0,i.jsx)(n.p,{children:"Here is a description of command lines and arguments supported to launch 4D applications."}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Argument"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"applicationPath"})}),(0,i.jsx)(n.td,{children:"Path of 4D, 4D Server, merged application, or tool4d"}),(0,i.jsxs)(n.td,{children:["Launches the application.",(0,i.jsx)(n.br,{}),"If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--version"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Displays application version and exits"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--help"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Displays help and exits. Alternate arguments: -?, -h"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--project"})}),(0,i.jsx)(n.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,i.jsx)(n.td,{children:"Project file to open with the current data file. No dialog box appears."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--data"})}),(0,i.jsx)(n.td,{children:"dataPath"}),(0,i.jsx)(n.td,{children:"Data file to open with the designated project file. If not specified, the last opened data file is used."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--opening-mode"})}),(0,i.jsx)(n.td,{children:"interpreted | compiled"}),(0,i.jsx)(n.td,{children:"Requests database to open in interpreted or compiled mode. No error is thrown if the requested mode is unavailable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--create-data"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:'Automatically creates a new data file if no valid data file is found. No dialog box appears. 4D uses the file name passed in the "--data" argument if any (generates an error if a file with the same name already exists).'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--user-param"})}),(0,i.jsx)(n.td,{children:"Custom user string"}),(0,i.jsxs)(n.td,{children:["A string that will be available within the application through the ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html",children:(0,i.jsx)(n.code,{children:"Get database parameter"})}),' command (the string must not start with a "-" character, which is reserved).']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--headless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Launches the 4D, 4D Server or merged application without interface (headless mode). In this mode:",(0,i.jsx)(n.li,{children:" The Design mode is not available, database starts in Application mode"}),(0,i.jsx)(n.li,{children:" No toolbar, menu bar, MDI window or splash screen is displayed"}),(0,i.jsx)(n.li,{children:"No icon is displayed in the dock or task bar"}),(0,i.jsx)(n.li,{children:'The opened database is not registered in the "Recent databases" menu'}),(0,i.jsxs)(n.li,{children:["The diagnostic log is automatically started (see ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),", selector 79)"]}),(0,i.jsxs)(n.li,{children:["Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/alert",children:"ALERT"})," command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log."]}),(0,i.jsx)(n.br,{}),"For maintenance needs, you can send any text to standard output streams using the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/log-event",children:"LOG EVENT"})," command. Note that headless 4D applications can only be closed by a call to ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/quit-4d",children:"QUIT 4D"})," or using the OS task manager."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--dataless"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Launches 4D, 4D Server, merged application or tool4d in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). In this mode: ",(0,i.jsxs)(n.li,{children:["No file containing data is opened, even if specified in the command line or the ",(0,i.jsx)(n.code,{children:".4DLink"})," file, or when using the ",(0,i.jsx)(n.code,{children:"CREATE DATA FILE"})," and ",(0,i.jsx)(n.code,{children:"OPEN DATA FILE"})," commands."]}),(0,i.jsxs)(n.li,{children:["Commands that manipulate data will throw an error. For example, ",(0,i.jsx)(n.code,{children:"CREATE RECORD"})," throws \u201Cno table to apply the command to\u201D."]}),(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"Note"}),":",(0,i.jsx)(n.li,{children:"If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed."}),(0,i.jsxs)(n.li,{children:["If passed using the ",(0,i.jsx)(n.code,{children:".4DLink"})," file, dataless mode only applies to the database specified in the ",(0,i.jsx)(n.code,{children:".4DLink"})," file. For more information on ",(0,i.jsx)(n.code,{children:".4DLink"})," files, see ",(0,i.jsx)(n.a,{href:"/docs/20-R8/GettingStarted/creating#project-opening-shortcuts",children:"Project opening shortcuts"}),"."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-settings-file"})}),(0,i.jsx)(n.td,{children:"File path"}),(0,i.jsxs)(n.td,{children:["Path of the custom WebAdmin ",(0,i.jsx)(n.code,{children:".4DSettings"})," file for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Admin/webAdmin",children:"WebAdmin web server"}),". Not available with ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-access-key"})}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["Access key for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Admin/webAdmin",children:"WebAdmin web server"}),". Not available with ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-auto-start"})}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["Status of the automatic startup for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Admin/webAdmin",children:"WebAdmin web server"}),". Not available with ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--webadmin-store-settings"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Store the access key and automatic starting parameters in the currently used settings file (i.e. the default ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Admin/webAdmin#webadmin-settings",children:(0,i.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," file or a custom file designated with the ",(0,i.jsx)(n.code,{children:"--webadmin-settings-path"})," parameter). Use the ",(0,i.jsx)(n.code,{children:"--webadmin-store-settings"})," argument to save these settings if necessary. Not available with ",(0,i.jsx)(n.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--utility"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:["Only available with 4D Server. Launches ",(0,i.jsx)(n.a,{href:"#4d-server-in-utility-mode",children:"4D Server in utility mode"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--skip-onstartup"})}),(0,i.jsx)(n.td,{}),(0,i.jsxs)(n.td,{children:['Launches the project without executing any "automatic" methods, including the ',(0,i.jsx)(n.code,{children:"On Startup"})," and ",(0,i.jsx)(n.code,{children:"On Exit"})," database methods"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"--startup-method"})}),(0,i.jsx)(n.td,{children:"Project method name (string)"}),(0,i.jsxs)(n.td,{children:["Project method to execute immediately after the ",(0,i.jsx)(n.code,{children:"On Startup"})," database method (if not skipped with ",(0,i.jsx)(n.code,{children:"--skip-onstartup"}),")."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["(*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"Diagnostic log file"})," (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Launch a 4D application stored on the desktop:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Open a package file on macOS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open a project file:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open a project file and a data file:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nor:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open a .4DLink file:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open compiled mode and create a data file if not available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open a project file and a data file and pass a string as a user parameter:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Open without interface (headless mode):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tool4d",children:"tool4d"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"tool4d"})," is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI."]}),"\n",(0,i.jsx)(n.p,{children:"tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization."}),"\n",(0,i.jsx)(n.p,{children:"tool4d is a perfect tool if you want to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"implement a CI/CD chain for your 4D application,"}),"\n",(0,i.jsx)(n.li,{children:"use a light 4D executable to run 4D scripts, for example to execute automatic unit tests."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-tool4d",children:"Using tool4d"}),"\n",(0,i.jsxs)(n.p,{children:["You can get tool4d from the 4D ",(0,i.jsx)(n.a,{href:"https://product-download.4d.com/",children:"Product download page"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You use tool4d by executing a ",(0,i.jsx)(n.a,{href:"#launch-a-4d-application",children:"command line"})," with a standard 4D project. You can use all arguments described in the above table, except --",(0,i.jsx)(n.code,{children:"webadmin"})," since this component is ",(0,i.jsx)(n.a,{href:"#disabled-4d-features",children:"disabled in tool4d"}),". With tool4d, the following specific sequence is launched:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["tool4d executes the ",(0,i.jsx)(n.code,{children:"On Startup"}),' database method (and all "automatic" methods such as ',(0,i.jsx)(n.a,{href:"/docs/20-R8/Users/editing#user-properties",children:"user method"}),"), except if the ",(0,i.jsx)(n.code,{children:"--skip-onstartup"})," argument is passed."]}),"\n",(0,i.jsxs)(n.li,{children:["tool4d executes the method designated by the ",(0,i.jsx)(n.code,{children:"--startup-method"})," argument, if any."]}),"\n",(0,i.jsxs)(n.li,{children:["tool4d executes the ",(0,i.jsx)(n.code,{children:"On Exit"})," database method, except if the ",(0,i.jsx)(n.code,{children:"--skip-onstartup"})," argument is passed."]}),"\n",(0,i.jsx)(n.li,{children:"tool4d quits."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On Windows, tool4d is a console application so that the ",(0,i.jsx)(n.code,{children:"stdout"})," stream is displayed in the terminal (cmd, powershell...)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["tool4d is always executed headless (the ",(0,i.jsx)(n.code,{children:"headless"})," command line option is useless)."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html",children:(0,i.jsx)(n.code,{children:"Application type"})}),' command returns the value 6 ("tool4d") when called from the tool4d application.']}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"diagnostic log file"}),' is prefixed with "4DDiagnosticLogTool".']}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"disabled-4d-features",children:"Disabled 4D features"}),"\n",(0,i.jsxs)(n.p,{children:["Keep in mind that tool4d runs automatically in ",(0,i.jsx)(n.strong,{children:"headless mode"})," (see ",(0,i.jsx)(n.code,{children:"--headless"})," in ",(0,i.jsx)(n.a,{href:"#launch-a-4d-application",children:"this table"}),"), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"application server, Web server, SQL server,"}),"\n",(0,i.jsx)(n.li,{children:"backup scheduler,"}),"\n",(0,i.jsx)(n.li,{children:"ODBC and SQL pass-through,"}),"\n",(0,i.jsx)(n.li,{children:"all components such as 4D View Pro, 4D SVG, 4D NetKit...,"}),"\n",(0,i.jsx)(n.li,{children:"hunspell spell checker,"}),"\n",(0,i.jsxs)(n.li,{children:["japanese spellchecker (",(0,i.jsx)(n.em,{children:"mecab"})," library),"]}),"\n",(0,i.jsx)(n.li,{children:"WebAdmin,"}),"\n",(0,i.jsx)(n.li,{children:"CEF,"}),"\n",(0,i.jsx)(n.li,{children:"PHP,"}),"\n",(0,i.jsxs)(n.li,{children:["remote debugger (local debugger, ",(0,i.jsx)(n.code,{children:"TRACE"})," command and breakpoints are ignored in headless applications)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4d-server-in-utility-mode",children:"4D Server in utility mode"}),"\n",(0,i.jsxs)(n.p,{children:["You can launch a 4D Server instance in a utility mode (headless) by using the ",(0,i.jsx)(n.code,{children:"--utility"})," CLI option. In this case, the following workflow is triggered:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["4D Server executes the ",(0,i.jsx)(n.code,{children:"On Startup"}),' database method (and all "automatic" methods such as ',(0,i.jsx)(n.a,{href:"/docs/20-R8/Users/editing#user-properties",children:"user method"}),"), except if the ",(0,i.jsx)(n.code,{children:"--skip-onstartup"})," parameter is passed."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Server executes the method designated by the ",(0,i.jsx)(n.code,{children:"--startup-method"}),", if any."]}),"\n",(0,i.jsxs)(n.li,{children:["4D Server executes the ",(0,i.jsx)(n.code,{children:"On Exit"})," database method, except if the ",(0,i.jsx)(n.code,{children:"--skip-onstartup"})," parameter is passed."]}),"\n",(0,i.jsx)(n.li,{children:"4D Server quits."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started."})}),"\n",(0,i.jsx)(n.admonition,{title:"See also",type:"tip",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/",children:"this blog post"})," for examples of how to use tool4d and 4D Server in utility mode."]})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);