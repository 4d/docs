"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71276],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},372754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});a(667294);var n=a(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const r={id:"webAdmin",title:"Web Administration"},s=void 0,l={unversionedId:"Admin/webAdmin",id:"version-20-R5/Admin/webAdmin",title:"Web Administration",description:"An embedded web server component, named WebAdmin, is used by 4D and 4D Server to provide a secured web access to specific management features such as the Data Explorer. Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Admin/webAdmin.md",sourceDirName:"Admin",slug:"/Admin/webAdmin",permalink:"/docs/pt/Admin/webAdmin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FwebAdmin.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"webAdmin",title:"Web Administration"},sidebar:"docs",previous:{title:"Web Administration",permalink:"/docs/pt/category/web-administration"},next:{title:"Web Data Explorer",permalink:"/docs/pt/Admin/dataExplorer"}},d={},c=[{value:"Iniciar o web server WebAdmin",id:"iniciar-o-web-server-webadmin",level:2},{value:"Lan\xe7ar ao in\xedcio",id:"lan\xe7ar-ao-in\xedcio",level:3},{value:"Iniciar e parar",id:"iniciar-e-parar",level:3},{value:"Propriedades WebAdmin",id:"propriedades-webadmin",level:2},{value:"Caixa de di\xe1logos de configura\xe7\xf5es",id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es",level:3},{value:"Iniciar o servidor WebAdmin na inicializa\xe7\xe3o",id:"iniciar-o-servidor-webadmin-na-inicializa\xe7\xe3o",level:4},{value:"Conex\xf5es HTTP em localhost aceitas",id:"conex\xf5es-http-em-localhost-aceitas",level:4},{value:"Porta HTTP",id:"porta-http",level:4},{value:"Aceitar HTTPS",id:"aceitar-https",level:4},{value:"Porta HTTPS",id:"porta-https",level:4},{value:"Rota da pasta de certificados",id:"rota-da-pasta-de-certificados",level:4},{value:"Modo de registro de depura\xe7\xe3o/debug",id:"modo-de-registro-de-depura\xe7\xe3odebug",level:4},{value:"Chave de acesso",id:"chave-de-acesso",level:4},{value:"Ativar o acesso a Qodly Studio",id:"ativar-o-acesso-a-qodly-studio",level:4},{value:"Configura\xe7\xe3o de WebAdmin sem interface",id:"configura\xe7\xe3o-de-webadmin-sem-interface",level:2},{value:"Autentica\xe7\xe3o e sess\xe3o",id:"autentica\xe7\xe3o-e-sess\xe3o",level:2}],p={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An embedded web server component, named ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin"),", is used by 4D and 4D Server to provide a secured web access to specific management features such as the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/Admin/dataExplorer"}),"Data Explorer"),". Pode conectar localmente ou remotamente ao servidor web de um navegador ou uma aplica\xe7\xe3o web e acessar a aplica\xe7\xe3o 4D associada."),(0,n.kt)("p",null,'O webAdmin maneja a autentica\xe7\xe3o de usu\xe1rios com privil\xe9gios "WebAdmin" de forma que possa abrir sess\xf5es administrativas e acessar interfaces dedicadas.'),(0,n.kt)("p",null,"Essa funcionalidade pode ser usada em aplica\xe7\xf5es 4D rodando headless (sem monitor e perif\xe9ricos) assim como aplica\xe7\xf5es 4D rodando sem interfaces."),(0,n.kt)("h2",i({},{id:"iniciar-o-web-server-webadmin"}),"Iniciar o web server WebAdmin"),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server is not launched. Precisa configurar o lan\xe7amento ao in\xedcio ou (em vers\xf5es com interface) lan\xe7ar manualmente usando um item de menu."),(0,n.kt)("h3",i({},{id:"lan\xe7ar-ao-in\xedcio"}),"Lan\xe7ar ao in\xedcio"),(0,n.kt)("p",null,"You can configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be launched at 4D or 4D Server application startup (before any project is loaded)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you use a 4D application with interface, select the ",(0,n.kt)("strong",{parentName:"li"},"File > Web Administration > Settings...")," menu item.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(223501).Z,width:"470",height:"294"})),(0,n.kt)("p",null,"Check the ",(0,n.kt)("strong",{parentName:"p"},"Launch WebAdmin server at startup")," option in the settings dialog box:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(183928).Z,width:"702",height:"205"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following ",(0,n.kt)("em",{parentName:"li"},"Command Line Interface")," argument:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"open ~/Desktop/4D.app --webadmin-auto-start true\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the TCP port used by the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server (",(0,n.kt)("a",i({parentName:"p"},{href:"#https-port"}),"HTTPS")," or ",(0,n.kt)("a",i({parentName:"p"},{href:"#http-port"}),"HTTP"),", depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first one that is available. Se nenhum porto estiver dispon\xedvel, o servidor web n\xe3o \xe9 lan\xe7ado e um erro \xe9 exibido (ou em aplica\xe7\xe3o headless, aparece no console)")),(0,n.kt)("h3",i({},{id:"iniciar-e-parar"}),"Iniciar e parar"),(0,n.kt)("p",null,"If you use a 4D application with interface, you can start or stop the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server for your project at any moment:"),(0,n.kt)("p",null,"Select the ",(0,n.kt)("strong",{parentName:"p"},"File > Web Administration > Start Server")," menu item."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(64399).Z,width:"473",height:"354"})),(0,n.kt)("p",null,"The menu item becomes ",(0,n.kt)("strong",{parentName:"p"},"Stop Server")," when the server is launched; select ",(0,n.kt)("strong",{parentName:"p"},"Stop Server")," to stop the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server."),(0,n.kt)("h2",i({},{id:"propriedades-webadmin"}),"Propriedades WebAdmin"),(0,n.kt)("p",null,"Configuring the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component is mandatory in particular to define the ",(0,n.kt)("a",i({parentName:"p"},{href:"#access-key"}),(0,n.kt)("strong",{parentName:"a"},"access key")),". Como padr\xe3o, quando a chave de acesso n\xe3o for estabelecida, o acesso via uma url n\xe3o \xe9 permitido."),(0,n.kt)("p",null,"You can configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component using the ",(0,n.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"Web Administration settings dialog box")," (see below)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you use a headless 4D application, you can use ",(0,n.kt)("a",i({parentName:"p"},{href:"#webadmin-headless-configuration"}),(0,n.kt)("em",{parentName:"a"},"Command Line Interface")," arguments")," to define basic settings. Se quiser personalizar o arquivo de configura\xe7\xf5es para definir os par\xe2metros avan\xe7ados.")),(0,n.kt)("h3",i({},{id:"caixa-de-di\xe1logos-de-configura\xe7\xf5es"}),"Caixa de di\xe1logos de configura\xe7\xf5es"),(0,n.kt)("p",null,"To open the Web Administration settings dialog box, select the ",(0,n.kt)("strong",{parentName:"p"},"File > Web Administration > Settings...")," menu item."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(223501).Z,width:"470",height:"294"})),(0,n.kt)("p",null,"A caixa de di\xe1logo abaixo \xe9 mostrada:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(9102).Z,width:"702",height:"462"})),(0,n.kt)("h4",i({},{id:"iniciar-o-servidor-webadmin-na-inicializa\xe7\xe3o"}),"Iniciar o servidor WebAdmin na inicializa\xe7\xe3o"),(0,n.kt)("p",null,"Check this option if you want the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server to be automatically launched when the 4D or 4D Server application starts (",(0,n.kt)("a",i({parentName:"p"},{href:"#launching-at-startup"}),"see above"),"). Como padr\xe3o essa op\xe7\xe3o n\xe3o \xe9 marcada."),(0,n.kt)("h4",i({},{id:"conex\xf5es-http-em-localhost-aceitas"}),"Conex\xf5es HTTP em localhost aceitas"),(0,n.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTP on the same machine as the 4D application. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notas:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conex\xf5es com HTTP outras que localhost nunca s\xe3o aceitas."),(0,n.kt)("li",{parentName:"ul"},"Even if this option is checked, when ",(0,n.kt)("a",i({parentName:"li"},{href:"#accept-https"}),"Accept HTTPS")," is checked and the TLS configuration is valid, localhost connections use HTTPS.")),(0,n.kt)("h4",i({},{id:"porta-http"}),"Porta HTTP"),(0,n.kt)("p",null,"Port number to use for connections through HTTP to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,n.kt)("strong",{parentName:"p"},"Accept HTTP connections on localhost")," option is checked. Valor normal padr\xe3o \xe9 7080"),(0,n.kt)("h4",i({},{id:"aceitar-https"}),"Aceitar HTTPS"),(0,n.kt)("p",null,"When this option is checked, you will be able to connect to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through HTTPS. Como padr\xe3o, essa op\xe7\xe3o \xe9 marcada."),(0,n.kt)("h4",i({},{id:"porta-https"}),"Porta HTTPS"),(0,n.kt)("p",null,"Port number to use for connections through HTTPS to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server when the ",(0,n.kt)("strong",{parentName:"p"},"Accept HTTPS")," option is checked. Valor normal padr\xe3o \xe9 7443"),(0,n.kt)("h4",i({},{id:"rota-da-pasta-de-certificados"}),"Rota da pasta de certificados"),(0,n.kt)("p",null,"Rota da pasta onde o certificado TLS est\xe1 localizado. Como padr\xe3o, a rota da pasta de certificados est\xe1 vazia e 4D ou Servidor 4D usa os arquivos de certificados contidos na apica\xe7\xe3o 4D (certificados personalizados devem ser armazenados do lado da pasta projeto)."),(0,n.kt)("h4",i({},{id:"modo-de-registro-de-depura\xe7\xe3odebug"}),"Modo de registro de depura\xe7\xe3o/debug"),(0,n.kt)("p",null,"Status or format of the HTTP request log file (HTTPDebugLog_",(0,n.kt)("em",{parentName:"p"},"nn"),'.txt, stored in the "Logs" folder of the application -- ',(0,n.kt)("em",{parentName:"p"},"nn")," is the file number). As op\xe7\xf5es abaixo est\xe3o dispon\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disable")," (default)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"With all body parts")," - enabled with body parts in response and request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Without body parts")," - enabled without body parts (body size is provided)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"With request body")," - enabled with body part in request only"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"With response body")," - enabled with body part in response only")),(0,n.kt)("h4",i({},{id:"chave-de-acesso"}),"Chave de acesso"),(0,n.kt)("p",null,"Defining an access key is mandatory to unlock access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/Admin/dataExplorer"}),"Data Explorer page"),". Uma p\xe1gina de erro \xe9 retornada no caso uma solicita\xe7\xe3o de conex\xe3o:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(393760).Z,width:"193",height:"126"})),(0,n.kt)("p",null,"Uma chave de acesso \xe9 parecida a uma senha, mas n\xe3o est\xe1 associada com um login."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To define a new access key: click the ",(0,n.kt)("strong",{parentName:"li"},"Define")," button, enter the access key string in the dialog box and click ",(0,n.kt)("strong",{parentName:"li"},"OK"),". The button label becomes ",(0,n.kt)("strong",{parentName:"li"},"Modify"),"."),(0,n.kt)("li",{parentName:"ul"},"To modify the access key: click the ",(0,n.kt)("strong",{parentName:"li"},"Modify")," button, enter the new access key string in the dialog box and click ",(0,n.kt)("strong",{parentName:"li"},"OK"),"."),(0,n.kt)("li",{parentName:"ul"},"To delete the access key: click the ",(0,n.kt)("strong",{parentName:"li"},"Modify")," button, let the access key area empty and click ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("h4",i({},{id:"ativar-o-acesso-a-qodly-studio"}),"Ativar o acesso a Qodly Studio"),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Essa op\xe7\xe3o s\xf3 aparece se a licen\xe7a do Qodly Studio estiver ativada.")),(0,n.kt)("p",null,"This option enables user access to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/WebServer/qodly-studio"}),"Qodly Studio")," at the 4D application level. Note that you also need to ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/settings/web#enable-access-to-qodly-studio"}),"enable the access at every project level"),"."),(0,n.kt)("h2",i({},{id:"configura\xe7\xe3o-de-webadmin-sem-interface"}),"Configura\xe7\xe3o de WebAdmin sem interface"),(0,n.kt)("p",null,"All ",(0,n.kt)("a",i({parentName:"p"},{href:"#webadmin-settings"}),"WebAdmin settings")," are stored in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file. There is one default ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine."),(0,n.kt)("p",null,"When running a 4D or 4D Server application headless, you can set and use the default ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file, or designate a custom ",(0,n.kt)("inlineCode",{parentName:"p"},".4DSettings")," file."),(0,n.kt)("p",null,"To set the file contents, you can use the ",(0,n.kt)("a",i({parentName:"p"},{href:"#settings-dialog-box"}),"WebAdmin settings dialog")," of the 4D application with interface and run it headless afterwards. The default ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin.4DSettings")," file is then used."),(0,n.kt)("p",null,"Or, you can set a custom ",(0,n.kt)("inlineCode",{parentName:"p"},".4DSettings")," file (xml format) and use it instead of the default file. Several dedicated arguments are available in the ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/Admin/cli"}),"Command line interface")," to support this feature."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The access key is not stored in clear in the ",(0,n.kt)("inlineCode",{parentName:"p"},".4DSettings")," file.")),(0,n.kt)("p",null,"Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),'"%HOMEPATH%\\Desktop\\4D Server.exe" MyApp.4DLink --webadmin-access-key \n    "my Fabulous AccessKey" --webadmin-auto-start true   \n    --webadmin-store-settings\n\n')),(0,n.kt)("h2",i({},{id:"autentica\xe7\xe3o-e-sess\xe3o"}),"Autentica\xe7\xe3o e sess\xe3o"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quando acessar uma p\xe1gina de gest\xe3o entrando uma URL e sem identifica\xe7\xe3o pr\xe9via, uma autentica\xe7\xe3o \xe9 exigida. The user must enter the ",(0,n.kt)("a",i({parentName:"p"},{href:"#access-key"}),"access key")," in an authentication dialog box. If the access key was not defined in the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," settings, no access via URL is possible.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When a web management page is accessed directly from a 4D or 4D Server menu item (such as ",(0,n.kt)("strong",{parentName:"p"},"Records > Data Explorer")," or ",(0,n.kt)("strong",{parentName:"p"},"Window > Data Explorer")," (4D Server)), access is granted without authentication, the user is automatically authenticated."))),(0,n.kt)("p",null,"Once the access is granted, a web ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/pt/WebServer/sessions"}),"session"),' with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the ',(0,n.kt)("inlineCode",{parentName:"p"},"WebAdmin")," component delivers requested pages."))}m.isMDXComponent=!0},393760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/accessKey-30f179ff95de611714487b2467b3bed6.png"},223501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waMenu1-8cc55577b6eb6a9cbe4ddd02b766d0c8.png"},64399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waMenu2-972bfa6edeb61987599802e7665b50e9.png"},183928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waSettings-061bfd4438352b9f6e272f496fe01ac4.png"},9102:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waSettings2-ec384a33ca25a5cd6198e8da121bbc75.png"}}]);