/*! For license information please see ff9bcd85.9ee22531.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61690],{877176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(474848),i=t(28453);const r={id:"webAdmin",title:"WebAdmin"},a=void 0,o={id:"Admin/webAdmin",title:"WebAdmin",description:"An embedded web server component, named WebAdmin, is used by 4D and 4D Server to provide a secured web access to specific management features such as the Data Explorer. You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application.",source:"@site/versioned_docs/version-20/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/20/Admin/webAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/20/category/web-administration"},next:{title:"Data Explorer",permalink:"/docs/20/Admin/dataExplorer"}},c={},d=[{value:"Starting the WebAdmin web server",id:"starting-the-webadmin-web-server",level:2},{value:"Launch at startup",id:"launch-at-startup",level:3},{value:"Start and stop",id:"start-and-stop",level:3},{value:"WebAdmin Settings",id:"webadmin-settings",level:2},{value:"Settings dialog box",id:"settings-dialog-box",level:3},{value:"Web server administration automatic startup",id:"web-server-administration-automatic-startup",level:4},{value:"Accept HTTP connections on localhost",id:"accept-http-connections-on-localhost",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"Accept HTTPS",id:"accept-https",level:4},{value:"HTTPS Port",id:"https-port",level:4},{value:"Certificate folder path",id:"certificate-folder-path",level:4},{value:"Debug log mode",id:"debug-log-mode",level:4},{value:"Access Key",id:"access-key",level:4},{value:"WebAdmin Headless Configuration",id:"webadmin-headless-configuration",level:2},{value:"Authentication and Session",id:"authentication-and-session",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["An embedded web server component, named ",(0,s.jsx)(n.code,{children:"WebAdmin"}),", is used by 4D and 4D Server to provide a secured web access to specific management features such as the ",(0,s.jsx)(n.a,{href:"/docs/20/Admin/dataExplorer",children:"Data Explorer"}),". You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application."]}),"\n",(0,s.jsx)(n.p,{children:'The WebAdmin handles the authentication of users with "WebAdmin" privileges, so that they can open administration sessions and access dedicated interfaces.'}),"\n",(0,s.jsx)(n.p,{children:"This feature can be used in 4D applications running headless as well as 4D applications running with interfaces."}),"\n",(0,s.jsx)(n.h2,{id:"starting-the-webadmin-web-server",children:"Starting the WebAdmin web server"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server is not launched. You need to configure the launch at startup, or (in versions with interface) launch it manually using a menu item."]}),"\n",(0,s.jsx)(n.h3,{id:"launch-at-startup",children:"Launch at startup"}),"\n",(0,s.jsxs)(n.p,{children:["You can configure the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server to be launched at 4D or 4D Server application startup (before any project is loaded)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you use a 4D application with interface, select the ",(0,s.jsx)(n.strong,{children:"File > Web Administration > Settings..."})," menu item."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(87792).A+"",width:"470",height:"294"})}),"\n",(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.strong,{children:"Web server administration automatic startup"})," option in the settings dialog box:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(5419).A+"",width:"702",height:"205"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following ",(0,s.jsx)(n.em,{children:"Command Line Interface"})," argument:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"open ~/Desktop/4D.app --webadmin-auto-start true\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If the TCP port used by the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server (",(0,s.jsx)(n.a,{href:"#https-port",children:"HTTPS"})," or ",(0,s.jsx)(n.a,{href:"#http-port",children:"HTTP"}),", depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start-and-stop",children:"Start and stop"}),"\n",(0,s.jsxs)(n.p,{children:["If you use a 4D application with interface, you can start or stop the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server for your project at any moment:"]}),"\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"File > Web Administration > Start Server"})," menu item."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(357643).A+"",width:"473",height:"354"})}),"\n",(0,s.jsxs)(n.p,{children:["The menu item becomes ",(0,s.jsx)(n.strong,{children:"Stop Server"})," when the server is launched; select ",(0,s.jsx)(n.strong,{children:"Stop Server"})," to stop the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server."]}),"\n",(0,s.jsx)(n.h2,{id:"webadmin-settings",children:"WebAdmin Settings"}),"\n",(0,s.jsxs)(n.p,{children:["Configuring the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," component is mandatory in particular to define the ",(0,s.jsx)(n.a,{href:"#access-key",children:(0,s.jsx)(n.strong,{children:"access key"})}),". By default when the access key is not set, access via a URL is not allowed."]}),"\n",(0,s.jsxs)(n.p,{children:["You can configure the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," component using the ",(0,s.jsx)(n.a,{href:"#settings-dialog-box",children:"Web Administration settings dialog box"})," (see below)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you use a headless 4D application, you can use ",(0,s.jsxs)(n.a,{href:"#webadmin-headless-configuration",children:[(0,s.jsx)(n.em,{children:"Command Line Interface"})," arguments"]})," to define basic settings. You will have to customize the settings file to define advanced parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"settings-dialog-box",children:"Settings dialog box"}),"\n",(0,s.jsxs)(n.p,{children:["To open the Web Administration settings dialog box, select the ",(0,s.jsx)(n.strong,{children:"File > Web Administration > Settings..."})," menu item."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(87792).A+"",width:"470",height:"294"})}),"\n",(0,s.jsx)(n.p,{children:"The following dialog box is displayed:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(292721).A+"",width:"702",height:"462"})}),"\n",(0,s.jsx)(n.h4,{id:"web-server-administration-automatic-startup",children:"Web server administration automatic startup"}),"\n",(0,s.jsxs)(n.p,{children:["Check this option if you want the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server to be automatically launched when the 4D or 4D Server application starts (",(0,s.jsx)(n.a,{href:"#launching-at-startup",children:"see above"}),"). By default, this option is not checked."]}),"\n",(0,s.jsx)(n.h4,{id:"accept-http-connections-on-localhost",children:"Accept HTTP connections on localhost"}),"\n",(0,s.jsxs)(n.p,{children:["When this option is checked, you will be able to connect to the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server through HTTP on the same machine as the 4D application. By default, this option is checked."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connections with HTTP other than localhost are never accepted."}),"\n",(0,s.jsxs)(n.li,{children:["Even if this option is checked, when ",(0,s.jsx)(n.a,{href:"#accept-https",children:"Accept HTTPS"})," is checked and the TLS configuration is valid, localhost connections use HTTPS."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"http-port",children:"HTTP Port"}),"\n",(0,s.jsxs)(n.p,{children:["Port number to use for connections through HTTP to the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server when the ",(0,s.jsx)(n.strong,{children:"Accept HTTP connections on localhost"})," option is checked. Default value is 7080."]}),"\n",(0,s.jsx)(n.h4,{id:"accept-https",children:"Accept HTTPS"}),"\n",(0,s.jsxs)(n.p,{children:["When this option is checked, you will be able to connect to the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server through HTTPS. By default, this option is checked."]}),"\n",(0,s.jsx)(n.h4,{id:"https-port",children:"HTTPS Port"}),"\n",(0,s.jsxs)(n.p,{children:["Port number to use for connections through HTTPS to the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server when the ",(0,s.jsx)(n.strong,{children:"Accept HTTPS"})," option is checked. Default value is 7443."]}),"\n",(0,s.jsx)(n.h4,{id:"certificate-folder-path",children:"Certificate folder path"}),"\n",(0,s.jsx)(n.p,{children:"Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder)."}),"\n",(0,s.jsx)(n.h4,{id:"debug-log-mode",children:"Debug log mode"}),"\n",(0,s.jsxs)(n.p,{children:["Status or format of the HTTP request log file (HTTPDebugLog_",(0,s.jsx)(n.em,{children:"nn"}),'.txt, stored in the "Logs" folder of the application -- ',(0,s.jsx)(n.em,{children:"nn"})," is the file number). The following options are available:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Disable"})," (default)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"With all body parts"})," - enabled with body parts in response and request"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Without body parts"})," - enabled without body parts (body size is provided)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"With request body"})," - enabled with body part in request only"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"With response body"})," - enabled with body part in response only"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"access-key",children:"Access Key"}),"\n",(0,s.jsxs)(n.p,{children:["Defining an access key is mandatory to unlock access to the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the ",(0,s.jsx)(n.a,{href:"/docs/20/Admin/dataExplorer",children:"Data Explorer page"}),". An error page is returned in case of connection request:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt-text",src:t(700661).A+"",width:"193",height:"126"})}),"\n",(0,s.jsx)(n.p,{children:"An access key is similar to a password but not associated to a login."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To define a new access key: click the ",(0,s.jsx)(n.strong,{children:"Define"})," button, enter the access key string in the dialog box and click ",(0,s.jsx)(n.strong,{children:"OK"}),". The button label becomes ",(0,s.jsx)(n.strong,{children:"Modify"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["To modify the access key: click the ",(0,s.jsx)(n.strong,{children:"Modify"})," button, enter the new access key string in the dialog box and click ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["To delete the access key: click the ",(0,s.jsx)(n.strong,{children:"Modify"})," button, let the access key area empty and click ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"webadmin-headless-configuration",children:"WebAdmin Headless Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["All ",(0,s.jsx)(n.a,{href:"#webadmin-settings",children:"WebAdmin settings"})," are stored in the ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," file. There is one default ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine."]}),"\n",(0,s.jsxs)(n.p,{children:["When running a 4D or 4D Server application headless, you can set and use the default ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," file, or designate a custom ",(0,s.jsx)(n.code,{children:".4DSettings"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["To set the file contents, you can use the ",(0,s.jsx)(n.a,{href:"#settings-dialog-box",children:"WebAdmin settings dialog"})," of the 4D application with interface and run it headless afterwards. The default ",(0,s.jsx)(n.code,{children:"WebAdmin.4DSettings"})," file is then used."]}),"\n",(0,s.jsxs)(n.p,{children:["Or, you can set a custom ",(0,s.jsx)(n.code,{children:".4DSettings"})," file (xml format) and use it instead of the default file. Several dedicated arguments are available in the ",(0,s.jsx)(n.a,{href:"/docs/20/Admin/cli",children:"Command line interface"})," to support this feature."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The access key is not stored in clear in the ",(0,s.jsx)(n.code,{children:".4DSettings"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n\t"my Fabulous AccessKey" --webadmin-auto-start true   \n\t--webadmin-store-settings\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"authentication-and-session",children:"Authentication and Session"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When a web management page is accessed by entering a URL and without prior identification, an authentication is required. The user must enter the ",(0,s.jsx)(n.a,{href:"#access-key",children:"access key"})," in an authentication dialog box. If the access key was not defined in the ",(0,s.jsx)(n.code,{children:"WebAdmin"})," settings, no access via URL is possible."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When a web management page is accessed directly from a 4D or 4D Server menu item (such as ",(0,s.jsx)(n.strong,{children:"Records > Data Explorer"})," or ",(0,s.jsx)(n.strong,{children:"Window > Data Explorer"})," (4D Server)), access is granted without authentication, the user is automatically authenticated."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once the access is granted, a web ",(0,s.jsx)(n.a,{href:"/docs/20/WebServer/sessions",children:"session"}),' with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the ',(0,s.jsx)(n.code,{children:"WebAdmin"})," component delivers requested pages."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var s=t(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,r={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!c.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},700661:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},87792:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},357643:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},5419:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},292721:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(296540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);