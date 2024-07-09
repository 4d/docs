/*! For license information please see 687f203f.1e6c8f61.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71635],{166147:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=i(474848),t=i(28453);const o={id:"sdi",title:"SDI mode on Windows"},d=void 0,r={id:"Menus/sdi",title:"SDI mode on Windows",description:"On Windows, 4D developers can test and configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar. SDI applications are opposed to MDI (Multiple Documents Interface) applications, where all windows are contained in and depend on the main window.",source:"@site/versioned_docs/version-20-R4/Menus/sdi.md",sourceDirName:"Menus",slug:"/Menus/sdi",permalink:"/docs/20-R4/Menus/sdi",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Menus%2Fsdi.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"sdi",title:"SDI mode on Windows"},sidebar:"docs",previous:{title:"Menu bar features",permalink:"/docs/20-R4/Menus/bars"},next:{title:"User Settings",permalink:"/docs/20-R4/Desktop/user-settings"}},a={},l=[{value:"SDI mode availability",id:"SDI-mode-availability",level:2},{value:"Enabling the SDI mode",id:"Enabling-the-SDI-mode",level:2},{value:"Managing applications in SDI mode",id:"Managing-applications-in-SDI-mode",level:2},{value:"Menus in Windows",id:"Menus-in-Windows",level:3},{value:"Splash screen",id:"Splash-screen",level:4},{value:"Debugger",id:"Debugger",level:3},{value:"Automatic quit",id:"Automatic-quit",level:3},{value:"Language",id:"Language",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"On Windows, 4D developers can test and configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar. SDI applications are opposed to MDI (Multiple Documents Interface) applications, where all windows are contained in and depend on the main window."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The concept of SDI/MDI does not exist on macOS. This feature concerns Windows applications only and related options are ignored on macOS."})}),"\n",(0,s.jsx)(n.h2,{id:"SDI-mode-availability",children:"SDI mode availability"}),"\n",(0,s.jsx)(n.p,{children:"The SDI mode is available in the following execution environments only:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows"}),"\n",(0,s.jsxs)(n.li,{children:["Merged ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Desktop/building#build-stand-alone-application",children:"stand-alone"})," or ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Desktop/building#build-client-application",children:"client"})," 4D application"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"/docs/20-R4/Menus/bars#previewing-menu-bars",children:[(0,s.jsx)(n.strong,{children:"Test application"})," feature"]})," available from the ",(0,s.jsx)(n.strong,{children:"Run"})," menu."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Enabling-the-SDI-mode",children:"Enabling the SDI mode"}),"\n",(0,s.jsxs)(n.p,{children:["To enable the SDI mode in your application, just check the ",(0,s.jsx)(n.strong,{children:"Use SDI mode on Windows"})," option in the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/settings/interface#display-windows",children:'"Interface" page of the Settings dialog box'}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Once enabled, to actually run your application in SDI mode, you can either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"build a merged application (standalone and/or client application) and execute it on Windows, or"}),"\n",(0,s.jsxs)(n.li,{children:["select ",(0,s.jsx)(n.strong,{children:"Test Application in SDI Mode"})," from the ",(0,s.jsx)(n.strong,{children:"Run"})," menu on Windows to test the development."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Because the development environment is executed in MDI, switching from development mode to runtime mode using the ",(0,s.jsx)(n.strong,{children:"Test Application in SDI Mode"})," menu item is equivalent to restarting your application."]})}),"\n",(0,s.jsx)(n.h2,{id:"Managing-applications-in-SDI-mode",children:"Managing applications in SDI mode"}),"\n",(0,s.jsx)(n.p,{children:"Executing a 4D application in SDI mode does not require any specific implementation: existing menu bars are automatically moved in SDI windows themselves. However, you need to pay attention to specific principles that are listed below."}),"\n",(0,s.jsx)(n.h3,{id:"Menus-in-Windows",children:"Menus in Windows"}),"\n",(0,s.jsx)(n.p,{children:"In SDI mode, the process menu bar is automatically displayed in every document type window opened during the process life (this excludes, for example, floating palettes). When the process menu bar is not visible, menu item shortcuts remain active however."}),"\n",(0,s.jsx)(n.p,{children:"Menus are added above windows without modifiying their contents size:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(729757).A+"",width:"600",height:"238"})}),"\n",(0,s.jsx)(n.p,{children:"Windows can therefore be used in MDI or SDI modes without having to recalculate the position of objects."}),"\n",(0,s.jsx)(n.h4,{id:"Splash-screen",children:"Splash screen"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.strong,{children:"Splash screen"})," interface option was ",(0,s.jsx)(n.a,{href:"/docs/20-R4/settings/interface#display-windows",children:"selected in the Settings"}),", the splash window will contain any menus that would have been displayed in the MDI window. Note also that closing the splash screen window will result in exiting the application, just like in MDI mode."]}),"\n",(0,s.jsx)(n.li,{children:"If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"Debugger",children:"Debugger"}),"\n",(0,s.jsxs)(n.p,{children:["When displayed in SDI mode, the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Debugging/debugger",children:"debugger window"})," does not contain ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Debugging/debugger#tool-bar-buttons",children:"editing buttons"}),", because switching to development environment requires to abort execution and restart the application in MDI mode."]}),"\n",(0,s.jsx)(n.h3,{id:"Automatic-quit",children:"Automatic quit"}),"\n",(0,s.jsx)(n.p,{children:"When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want."}),"\n",(0,s.jsxs)(n.p,{children:["To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the ",(0,s.jsx)(n.code,{children:"QUIT 4D"})," command) when the following conditions are met:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the user cannot interact anymore with the application"}),"\n",(0,s.jsx)(n.li,{children:"there are no live user processes"}),"\n",(0,s.jsx)(n.li,{children:"4D processes or worker processes are waiting for an event"}),"\n",(0,s.jsx)(n.li,{children:"the Web server is not started"}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.a,{href:"/docs/20-R4/Admin/webAdmin",children:"WebAdmin server"})," is not started."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["When a menu with an associated ",(0,s.jsx)(n.em,{children:"quit"})," standard action is called, the application quits and all windows are closed, wherever the menu was called from."]})}),"\n",(0,s.jsx)(n.h2,{id:"Language",children:"Language"}),"\n",(0,s.jsx)(n.p,{children:"Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Command/feature"}),(0,s.jsx)(n.th,{children:"Specificity in SDI mode on Windows"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Open form window"})}),(0,s.jsxs)(n.td,{children:["Options to support floating windows in SDI (",(0,s.jsx)(n.code,{children:"Controller form window"}),") and to remove the menu bar (",(0,s.jsx)(n.code,{children:"Form has no menu bar"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Menu bar height"})}),(0,s.jsx)(n.td,{children:"Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"SHOW MENU BAR"})," / ",(0,s.jsx)(n.code,{children:"HIDE MENU BAR"})]}),(0,s.jsx)(n.td,{children:"Applied to the current form window only (from where the code is executed)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MAXIMIZE WINDOW"})}),(0,s.jsx)(n.td,{children:"The window is maximized to the screen size"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CONVERT COORDINATES"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"XY Screen"})," is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by ",(0,s.jsx)(n.code,{children:"Screen height"})," or ",(0,s.jsx)(n.code,{children:"Screen width"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET MOUSE"})}),(0,s.jsx)(n.td,{children:"Global coordinates are relative to the screen"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GET WINDOW RECT"})}),(0,s.jsx)(n.td,{children:"When -1 is passed in window parameter, the command returns 0;0;0;0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"On Drop database method"})}),(0,s.jsx)(n.td,{children:"Not supported"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1599.html",children:(0,s.jsx)(n.strong,{children:"Get application info"})})," command to know the current running mode on Windows."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,i)=>{var s=i(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,i){var s,o={},l=null,c=null;for(s in void 0!==i&&(l=""+i),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:c,props:o,_owner:r.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,i)=>{e.exports=i(221020)},729757:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(296540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);