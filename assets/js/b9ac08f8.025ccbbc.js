"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15270],{636241:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=n(474848),a=n(28453);const r={id:"open-settings-window",title:"OPEN SETTINGS WINDOW",slug:"/commands/open-settings-window",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/open-settings-window",title:"OPEN SETTINGS WINDOW",description:"OPEN SETTINGS WINDOW ( selector {; access {; settingsType}} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/open-settings-window.md",sourceDirName:"commands-legacy",slug:"/commands/open-settings-window",permalink:"/docs/commands/open-settings-window",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-settings-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"open-settings-window",title:"OPEN SETTINGS WINDOW",slug:"/commands/open-settings-window",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OPEN SECURITY CENTER",permalink:"/docs/commands/open-security-center"},next:{title:"PLUGIN LIST",permalink:"/docs/commands/plugin-list"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Path keys (standard mode)",id:"path-keys-standard-mode",level:5},{value:"Path keys (User settings mode)",id:"path-keys-user-settings-mode",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4}];function o(e){const s={br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"OPEN SETTINGS WINDOW"})," ( ",(0,t.jsx)(s.em,{children:"selector"})," {; ",(0,t.jsx)(s.em,{children:"access"})," {; ",(0,t.jsx)(s.em,{children:"settingsType"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"selector"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Key designating a theme or a page or a group of parameters in the Preferences or Settings dialog box"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"access"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsxs)(s.td,{children:["True=Lock the other pages of the dialog box",(0,t.jsx)(s.br,{}),"False or omitted=Leave the other pages of the dialog box active"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"settingsType"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"0 or omitted = Structure settings, 1 = User settings, 2 = User settings for data"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"OPEN SETTINGS WINDOW"})," command opens the Preferences dialog box of 4D or the Database Settings of the current 4D application and displays the parameters or the page corresponding to the key passed in ",(0,t.jsx)(s.em,{children:"selector"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"selector"})," parameter must contain a \u201ckey\u201d indicating the dialog box and the page to opened. This key is constructed as follows: ",(0,t.jsx)(s.em,{children:"/Dialog{/Page{/Parameters}}"}),". ",(0,t.jsx)(s.em,{children:"Dialog"}),' indicates the dialog box to be displayed: you can pass "4D" (for the Preferences) or "Database" (for Database Settings). For example, to indicate the Compiler page of the Database Settings, ',(0,t.jsx)(s.em,{children:"selector"}),' should contain "',(0,t.jsx)(s.em,{children:"/Database/Compiler"}),'". The list of keys that can be used is provided below. If you just pass a slash ("/") in ',(0,t.jsx)(s.em,{children:"selector"}),", the command displays the first page of the Database Settings dialog box."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"access"})," parameter lets you control user actions in the Preferences or Database Settings dialog box by locking the other pages. Typically, you may want for the user to be able to customize certain parameters while preventing others from being modified. In this case, passing True in the ",(0,t.jsx)(s.em,{children:"access"})," parameter means that only the page specified by the ",(0,t.jsx)(s.em,{children:"selector"})," parameter will be active and modifiable, while access to all other pages will be locked (clicking on the buttons in the navigation bar will have no effect). If you pass False or omit the ",(0,t.jsx)(s.em,{children:"access"})," parameter, all the pages of the dialog box will be accessible with no restriction."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"settingsType"}),' parameter is taken into account in databases configured in "User settings" mode only (in this mode, custom "User settings" or "User settings for data file" are generated in an external file and used instead of the standard settings, see the ',(0,t.jsx)(s.em,{children:"Using user settings"})," section in the ",(0,t.jsx)(s.em,{children:"Design Reference"}),' manual). In this context, this parameter lets you indicate whether you want to access the "Structure settings", the "User settings", or the "User settings for data file" dialog box. You pass one of the following constants, found in the "',(0,t.jsx)(s.em,{children:"4D Environment"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Structure settings"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsxs)(s.td,{children:['Access to "Structure settings" (default value if parameter omitted). In this mode, values used for ',(0,t.jsx)(s.em,{children:"selector"})," are identical to those in standard mode."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"User settings"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsxs)(s.td,{children:['Access to "User settings". In this mode, only certain keys can be used in the ',(0,t.jsx)(s.em,{children:"selector"})," parameter"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"User settings for data"}),(0,t.jsx)(s.td,{children:"Longint"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsxs)(s.td,{children:['Access to "User settings for data file", that is, user settings stored at the same level as the data file. In this mode, only certain keys can be used with the ',(0,t.jsx)(s.em,{children:"selector"})," parameter."]})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"If you pass an invalid key, the first page of the Database Settings dialog box is displayed."}),"\n",(0,t.jsx)(s.h5,{id:"path-keys-standard-mode",children:"Path keys (standard mode)"}),"\n",(0,t.jsxs)(s.p,{children:["Here are the keys that can be used in the ",(0,t.jsx)(s.em,{children:"selector"}),' parameter in standard mode, in other words with the "Structure settings":']}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"/4D"}),"\n",(0,t.jsx)(s.em,{children:"/4D/General"}),"\n",(0,t.jsx)(s.em,{children:"/4D/Structure"}),"\n",(0,t.jsx)(s.em,{children:"/4D/Form editor"}),"\n",(0,t.jsx)(s.em,{children:"/4D/Method editor"}),"\n",(0,t.jsx)(s.em,{children:"/4D/Shortcuts"}),"\n",(0,t.jsx)(s.em,{children:"/Database"}),"\n",(0,t.jsx)(s.em,{children:"/Database/General"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Mover"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Interface"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Interface/Developper"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Interface/User"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Interface/Shortcuts"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Compiler"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Database"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Database/Data storage"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Database/Memory and cpu"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Database/International"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup/Scheduler"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup/Configuration"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup/Backup and restore"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Client-Server"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Client-Server/Network"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Config"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Options 1"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Options 2"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Log format"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Webservices"}),"\n",(0,t.jsx)(s.em,{children:"/Database/SQL"}),"\n",(0,t.jsx)(s.em,{children:"/Database/php"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Compatibility"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Security"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Compatibility note:"})," You can still use keys defined for 4D versions 11.x or previous using this command; 4D automatically establishes the correspondence. However, we recommend that you replace the former calls with the keys listed above."]}),"\n",(0,t.jsx)(s.h5,{id:"path-keys-user-settings-mode",children:"Path keys (User settings mode)"}),"\n",(0,t.jsxs)(s.p,{children:["Here are the keys that can be used in the ",(0,t.jsx)(s.em,{children:"selector"}),' parameter in "User settings" and "User settings for data" modes:']}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"/Database"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Interface"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Database/Memory and cpu"}),"\n*",(0,t.jsx)(s.em,{children:"/Database/Client-Server"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Client-Server/Network"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Client-Server/IP configuration"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Config"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Options 1"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Options 2"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Log format"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Log scheduler"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Web/Webservices"}),"\n",(0,t.jsx)(s.em,{children:"/Database/SQL"}),"\n",(0,t.jsx)(s.em,{children:"/Database/php"})]}),"\n",(0,t.jsx)(s.p,{children:'Addtional keys in "User settings for data" mode:'}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"/Database/Backup"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup/Scheduler"})," ",(0,t.jsx)(s.em,{children:"/Database/Backup/Configuration"}),"\n",(0,t.jsx)(s.em,{children:"/Database/Backup/Backup and restore"})]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(s.p,{children:"Open the \u201cMethods\u201d page of the 4D Preferences:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/4D/Method editor")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"Open the \u201cShortcuts\u201d parameters in the Database Settings while locking the other settings:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface/Shortcuts";True)\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(s.p,{children:"Open Database Settings on the first page:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/")\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsx)(s.p,{children:'Access to the Interface page of the Database settings in "User settings" mode:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0OPEN SETTINGS WINDOW("/Database/Interface";False;1)\n'})}),"\n",(0,t.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(s.p,{children:"If the Preferences/Settings dialog box is validated, the system variable OK returns 1. Otherwise, it returns 0."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var t=n(296540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);