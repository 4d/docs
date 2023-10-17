"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64717],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),A=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=A(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=A(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var A=2;A<r;A++)o[A]=n[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},821934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(667294);var a=n(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"webAdmin",title:"WebAdmin"},s=void 0,l={unversionedId:"Admin/webAdmin",id:"version-20-R3/Admin/webAdmin",title:"WebAdmin",description:"An embedded web server component, named WebAdmin, is used by 4D and 4D Server to provide a secured web access to specific management features such as the Data Explorer. You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application.",source:"@site/versioned_docs/version-20-R3/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"webAdmin",title:"WebAdmin"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/category/web-administration"},next:{title:"Data Explorer",permalink:"/docs/Admin/dataExplorer"}},A={},c=[{value:"Starting the WebAdmin web server",id:"starting-the-webadmin-web-server",level:2},{value:"Launch at startup",id:"launch-at-startup",level:3},{value:"Start and stop",id:"start-and-stop",level:3},{value:"WebAdmin Settings",id:"webadmin-settings",level:2},{value:"Settings dialog box",id:"settings-dialog-box",level:3},{value:"Launch WebAdmin server at startup",id:"launch-webadmin-server-at-startup",level:4},{value:"Accept HTTP connections on localhost",id:"accept-http-connections-on-localhost",level:4},{value:"HTTP Port",id:"http-port",level:4},{value:"Accept HTTPS",id:"accept-https",level:4},{value:"HTTPS Port",id:"https-port",level:4},{value:"Certificate folder path",id:"certificate-folder-path",level:4},{value:"Debug log mode",id:"debug-log-mode",level:4},{value:"Access Key",id:"access-key",level:4},{value:"Enable access to Qodly Studio",id:"enable-access-to-qodly-studio",level:4},{value:"WebAdmin Headless Configuration",id:"webadmin-headless-configuration",level:2},{value:"Authentication and Session",id:"authentication-and-session",level:2}],p={toc:c};function d(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",i({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An embedded web server component, named ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", is used by 4D and 4D Server to provide a secured web access to specific management features such as the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/Admin/dataExplorer"}),"Data Explorer"),". You can connect locally or remotely to this web server from a browser or any web application and access the associated 4D application. "),(0,a.kt)("p",null,'The WebAdmin handles the authentication of users with "WebAdmin" privileges, so that they can open administration sessions and access dedicated interfaces. '),(0,a.kt)("p",null,"This feature can be used in 4D applications running headless as well as 4D applications running with interfaces."),(0,a.kt)("h2",i({},{id:"starting-the-webadmin-web-server"}),"Starting the WebAdmin web server"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server is not launched. You need to configure the launch at startup, or (in versions with interface) launch it manually using a menu item. "),(0,a.kt)("h3",i({},{id:"launch-at-startup"}),"Launch at startup"),(0,a.kt)("p",null,"You can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be launched at 4D or 4D Server application startup (before any project is loaded).  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you use a 4D application with interface, select the ",(0,a.kt)("strong",{parentName:"li"},"File > Web Administration > Settings...")," menu item. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(630936).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"Check the ",(0,a.kt)("strong",{parentName:"p"},"Launch WebAdmin server at startup")," option in the settings dialog box:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(99469).Z,width:"703",height:"201"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following ",(0,a.kt)("em",{parentName:"li"},"Command Line Interface")," argument:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the TCP port used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server (",(0,a.kt)("a",i({parentName:"p"},{href:"#https-port"}),"HTTPS")," or ",(0,a.kt)("a",i({parentName:"p"},{href:"#http-port"}),"HTTP"),", depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console. ")),(0,a.kt)("h3",i({},{id:"start-and-stop"}),"Start and stop"),(0,a.kt)("p",null,"If you use a 4D application with interface, you can start or stop the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server for your project at any moment:"),(0,a.kt)("p",null,"Select the ",(0,a.kt)("strong",{parentName:"p"},"File > Web Administration > Start Server")," menu item."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(221194).Z,width:"473",height:"354"})),(0,a.kt)("p",null,"The menu item becomes ",(0,a.kt)("strong",{parentName:"p"},"Stop Server")," when the server is launched; select ",(0,a.kt)("strong",{parentName:"p"},"Stop Server")," to stop the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server."),(0,a.kt)("h2",i({},{id:"webadmin-settings"}),"WebAdmin Settings"),(0,a.kt)("p",null,"Configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component is mandatory in particular to define the ",(0,a.kt)("a",i({parentName:"p"},{href:"#access-key"}),(0,a.kt)("strong",{parentName:"a"},"access key")),". By default when the access key is not set, access via a URL is not allowed. "),(0,a.kt)("p",null,"You can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component using the ",(0,a.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"Web Administration settings dialog box")," (see below). "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you use a headless 4D application, you can use ",(0,a.kt)("a",i({parentName:"p"},{href:"#webadmin-headless-configuration"}),(0,a.kt)("em",{parentName:"a"},"Command Line Interface")," arguments")," to define basic settings. You will have to customize the settings file to define advanced parameters. ")),(0,a.kt)("h3",i({},{id:"settings-dialog-box"}),"Settings dialog box"),(0,a.kt)("p",null,"To open the Web Administration settings dialog box, select the ",(0,a.kt)("strong",{parentName:"p"},"File > Web Administration > Settings...")," menu item."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(630936).Z,width:"470",height:"294"})),(0,a.kt)("p",null,"The following dialog box is displayed:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(649825).Z,width:"702",height:"522"})),(0,a.kt)("h4",i({},{id:"launch-webadmin-server-at-startup"}),"Launch WebAdmin server at startup"),(0,a.kt)("p",null,"Check this option if you want the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be automatically launched when the 4D or 4D Server application starts (",(0,a.kt)("a",i({parentName:"p"},{href:"#launching-at-startup"}),"see above"),"). By default, this option is not checked."),(0,a.kt)("h4",i({},{id:"accept-http-connections-on-localhost"}),"Accept HTTP connections on localhost"),(0,a.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTP on the same machine as the 4D application. By default, this option is checked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connections with HTTP other than localhost are never accepted."),(0,a.kt)("li",{parentName:"ul"},"Even if this option is checked, when ",(0,a.kt)("a",i({parentName:"li"},{href:"#accept-https"}),"Accept HTTPS")," is checked and the TLS configuration is valid, localhost connections use HTTPS.")),(0,a.kt)("h4",i({},{id:"http-port"}),"HTTP Port"),(0,a.kt)("p",null,"Port number to use for connections through HTTP to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,a.kt)("strong",{parentName:"p"},"Accept HTTP connections on localhost")," option is checked. Default value is 7080. "),(0,a.kt)("h4",i({},{id:"accept-https"}),"Accept HTTPS"),(0,a.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTPS. By default, this option is checked. "),(0,a.kt)("h4",i({},{id:"https-port"}),"HTTPS Port"),(0,a.kt)("p",null,"Port number to use for connections through HTTPS to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,a.kt)("strong",{parentName:"p"},"Accept HTTPS")," option is checked. Default value is 7443."),(0,a.kt)("h4",i({},{id:"certificate-folder-path"}),"Certificate folder path"),(0,a.kt)("p",null,"Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder). "),(0,a.kt)("h4",i({},{id:"debug-log-mode"}),"Debug log mode"),(0,a.kt)("p",null,"Status or format of the HTTP request log file (HTTPDebugLog_",(0,a.kt)("em",{parentName:"p"},"nn"),'.txt, stored in the "Logs" folder of the application -- ',(0,a.kt)("em",{parentName:"p"},"nn")," is the file number). The following options are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disable")," (default)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With all body parts")," - enabled with body parts in response and request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Without body parts")," - enabled without body parts (body size is provided)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With request body")," - enabled with body part in request only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"With response body")," - enabled with body part in response only")),(0,a.kt)("h4",i({},{id:"access-key"}),"Access Key"),(0,a.kt)("p",null,"Defining an access key is mandatory to unlock access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/Admin/dataExplorer"}),"Data Explorer page"),". An error page is returned in case of connection request: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt-text",src:n(390307).Z,width:"193",height:"126"})),(0,a.kt)("p",null,"An access key is similar to a password but not associated to a login. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To define a new access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Define")," button, enter the access key string in the dialog box and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),". The button label becomes ",(0,a.kt)("strong",{parentName:"li"},"Modify"),"."),(0,a.kt)("li",{parentName:"ul"},"To modify the access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Modify")," button, enter the new access key string in the dialog box and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),"."),(0,a.kt)("li",{parentName:"ul"},"To delete the access key: click the ",(0,a.kt)("strong",{parentName:"li"},"Modify")," button, let the access key area empty and click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("h4",i({},{id:"enable-access-to-qodly-studio"}),"Enable access to Qodly Studio"),(0,a.kt)("admonition",i({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This option only appears if the Qodly Studio license is activated.")),(0,a.kt)("p",null,"This option enables user access to ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/WebServer/qodly-studio"}),"Qodly Studio")," at the 4D application level. Note that you also need to ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/settings/web#enable-access-to-qodly-studio"}),"enable the access at every project level"),"."),(0,a.kt)("h2",i({},{id:"webadmin-headless-configuration"}),"WebAdmin Headless Configuration"),(0,a.kt)("p",null,"All ",(0,a.kt)("a",i({parentName:"p"},{href:"#webadmin-settings"}),"WebAdmin settings")," are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file. There is one default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine."),(0,a.kt)("p",null,"When running a 4D or 4D Server application headless, you can set and use the default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file, or designate a custom ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file. "),(0,a.kt)("p",null,"To set the file contents, you can use the ",(0,a.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"WebAdmin settings dialog")," of the 4D application with interface and run it headless afterwards. The default ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file is then used.  "),(0,a.kt)("p",null,"Or, you can set a custom ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file (xml format) and use it instead of the default file. Several dedicated arguments are available in the ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/Admin/cli"}),"Command line interface")," to support this feature.  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The access key is not stored in clear in the ",(0,a.kt)("inlineCode",{parentName:"p"},".4DSettings")," file. ")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n')),(0,a.kt)("h2",i({},{id:"authentication-and-session"}),"Authentication and Session"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a web management page is accessed by entering a URL and without prior identification, an authentication is required. The user must enter the ",(0,a.kt)("a",i({parentName:"p"},{href:"#access-key"}),"access key")," in an authentication dialog box. If the access key was not defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," settings, no access via URL is possible. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a web management page is accessed directly from a 4D or 4D Server menu item (such as ",(0,a.kt)("strong",{parentName:"p"},"Records > Data Explorer")," or ",(0,a.kt)("strong",{parentName:"p"},"Window > Data Explorer")," (4D Server)), access is granted without authentication, the user is automatically authenticated. "))),(0,a.kt)("p",null,"Once the access is granted, a web ",(0,a.kt)("a",i({parentName:"p"},{href:"/docs/WebServer/sessions"}),"session"),' with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the ',(0,a.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component delivers requested pages."))}d.isMDXComponent=!0},390307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},630936:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},221194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},99469:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},649825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/waSettings2-2e556bfef87f90ec5ff7b94755e0ca26.png"}}]);