/*! For license information please see 6d4ed5df.89520e66.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45679],{996303:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=s(474848),a=s(28453);const i={id:"cli",title:"Command Line Interface"},r=void 0,d={id:"Admin/cli",title:"Command Line Interface",description:"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D and 4D Server) using command lines. More particularly, this functionality allows you to:",source:"@site/versioned_docs/version-19/Admin/cli.md",sourceDirName:"Admin",slug:"/Admin/cli",permalink:"/docs/19/Admin/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"docs",previous:{title:"TLS Protocol (HTTPS)",permalink:"/docs/19/Admin/tls"},next:{title:"Description of log files",permalink:"/docs/19/Admin/debugLogFiles"}},c={},o=[{value:"Basic information",id:"Basic-information",level:2},{value:"Launch a 4D application",id:"Launch-a-4D-application",level:2},{value:"Examples",id:"Examples",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can use the macOS Terminal or the Windows console to drive your 4D applications (4D and 4D Server) using command lines. More particularly, this functionality allows you to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"launch a database remotely, which can be especially useful for administering Web servers."}),"\n",(0,t.jsx)(n.li,{children:"run automatic tests for your applications."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Basic-information",children:"Basic information"}),"\n",(0,t.jsx)(n.p,{children:"You can execute command lines for 4D applications using the macOS Terminal or the Windows Console."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Under macOS, you should use the ",(0,t.jsx)(n.code,{children:"open"})," command."]}),"\n",(0,t.jsx)(n.li,{children:"Under Windows, you can just pass the arguments directly."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Under macOS, you can pass the arguments directly by going to the folder where the application is found inside the package (Contents/MacOS path), which allows to address the stderr stream. For example, if the 4D package is located in the ",(0,t.jsx)(n.code,{children:"MyFolder"})," folder, you must write the command line as follows: ",(0,t.jsx)(n.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". However, we recommend that you use the ",(0,t.jsx)(n.code,{children:"open"})," command whenever you do not need to access the stderr stream."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Launch-a-4D-application",children:"Launch a 4D application"}),"\n",(0,t.jsx)(n.p,{children:"Here is a description of command lines and the arguments supported to launch 4D applications."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]\n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"applicationPath"})}),(0,t.jsx)(n.td,{children:"Path of the 4D, 4D Server or merged application"}),(0,t.jsx)(n.td,{children:"Launches the application. Identical to double-clicking the 4D application. When called without structure file argument, the application is executed and the 'select database' dialog box appears."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--version"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Displays application version and exits"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--help"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Displays help and exits. Alternate arguments: -?, -h"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--project"})}),(0,t.jsx)(n.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,t.jsx)(n.td,{children:"Project file to open with the current data file. No dialog box appears."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--data"})}),(0,t.jsx)(n.td,{children:"dataPath"}),(0,t.jsx)(n.td,{children:"Data file to open with the designated project file. If not specified, 4D uses the last opened data file."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--opening-mode"})}),(0,t.jsx)(n.td,{children:"interpreted | compiled"}),(0,t.jsx)(n.td,{children:"Requests database to open in interpreted or compiled mode. No error is thrown if the requested mode is unavailable."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--create-data"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:'Automatically creates a new data file if no valid data file is found. No dialog box appears. 4D uses the file name passed in the "--data" argument if any (generates an error if a file with the same name already exists).'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--user-param"})}),(0,t.jsx)(n.td,{children:"Custom user string"}),(0,t.jsx)(n.td,{children:'A string that will be available within the 4D application through the Get database parameter command (the string must not start with a "-" character, which is reserved).'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--headless"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Launches the 4D, 4D Server or merged application without interface (headless mode). In this mode:",(0,t.jsx)(n.li,{children:" The Design mode is not available, database starts in Application mode"}),(0,t.jsx)(n.li,{children:" No toolbar, menu bar, MDI window or splash screen is displayed"}),(0,t.jsx)(n.li,{children:"No icon is displayed in the dock or task bar"}),(0,t.jsx)(n.li,{children:'The opened database is not registered in the "Recent databases" menu'}),(0,t.jsxs)(n.li,{children:["The diagnostic log is automatically started (see ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),", selector 79)"]}),(0,t.jsxs)(n.li,{children:["Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page41.html",children:"ALERT"})," command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log."]}),(0,t.jsx)(n.br,{}),"For maintenance needs, you can send any text to standard output streams using the ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"})," command. Note that headless 4D applications can only be closed by a call to ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page291.html",children:"QUIT 4D"})," or using the OS task manager."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--dataless"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Launches 4D, 4D Server or merged application in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). In this mode: ",(0,t.jsxs)(n.li,{children:["No file containing data is opened, even if specified in the command line or the ",(0,t.jsx)(n.code,{children:".4DLink"})," file, or when using the ",(0,t.jsx)(n.code,{children:"CREATE DATA FILE"})," and ",(0,t.jsx)(n.code,{children:"OPEN DATA FILE"})," commands."]}),(0,t.jsxs)(n.li,{children:["Commands that manipulate data will throw an error. For example, ",(0,t.jsx)(n.code,{children:"CREATE RECORD"})," throws \u201cno table to apply the command to\u201d."]}),(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Note"}),":",(0,t.jsx)(n.li,{children:"If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed."}),(0,t.jsxs)(n.li,{children:["If passed using the ",(0,t.jsx)(n.code,{children:".4DLink"})," file, dataless mode only applies to the database specified in the ",(0,t.jsx)(n.code,{children:".4DLink"})," file. For more information on ",(0,t.jsx)(n.code,{children:".4DLink"})," files, see ",(0,t.jsx)(n.a,{href:"/docs/19/Project/creating#project-opening-shortcuts",children:"Project opening shortcuts"}),"."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--webadmin-settings-file"})}),(0,t.jsx)(n.td,{children:"File path"}),(0,t.jsxs)(n.td,{children:["Path of the custom WebAdmin ",(0,t.jsx)(n.code,{children:".4DSettings"})," file for the ",(0,t.jsx)(n.a,{href:"/docs/19/Admin/webAdmin",children:"WebAdmin web server"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--webadmin-access-key"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsxs)(n.td,{children:["Access key for the ",(0,t.jsx)(n.a,{href:"/docs/19/Admin/webAdmin",children:"WebAdmin web server"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--webadmin-auto-start"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsxs)(n.td,{children:["Status of the automatic startup for the ",(0,t.jsx)(n.a,{href:"/docs/19/Admin/webAdmin",children:"WebAdmin web server"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--webadmin-store-settings"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Store the access key and automatic starting parameters in the currently used settings file (i.e. the default ",(0,t.jsx)(n.a,{href:"/docs/19/Admin/webAdmin#webadmin-settings",children:(0,t.jsx)(n.code,{children:"WebAdmin.4DSettings"})})," file or a custom file designated with the ",(0,t.jsx)(n.code,{children:"--webadmin-settings-path"})," parameter). Use the ",(0,t.jsx)(n.code,{children:"--webadmin-store-settings"})," argument to save these settings if necessary"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["(*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the ",(0,t.jsx)(n.a,{href:"/docs/19/Admin/debugLogFiles#4ddiagnosticlogtxt",children:"Diagnostic log file"})," (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits."]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"Examples",children:"Examples"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Launch a 4D application stored on the desktop:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Open a package file on macOS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a project file:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args ~/Documents/myProj/Project/myProj.4DProject\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a project file and a data file:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nor:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a .4DLink file:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open compiled mode and create a data file if not available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open a project file and a data file and pass a string as a user parameter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Open without interface (headless mode):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Windows:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,s)=>{var t=s(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,i={},o=null,l=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(296540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);