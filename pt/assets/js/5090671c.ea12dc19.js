"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74014],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=o,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},515016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});a(667294);var n=a(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={id:"qodly-studio",title:"Qodly Studio"},i=void 0,d={unversionedId:"WebServer/qodly-studio",id:"version-20-R3/WebServer/qodly-studio",title:"Qodly Studio",description:"Qodly Studio in 4D is currently in the Developer Preview phase. N\xe3o deve ser usado na produ\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/WebServer/qodly-studio.md",sourceDirName:"WebServer",slug:"/WebServer/qodly-studio",permalink:"/docs/pt/20-R3/WebServer/qodly-studio",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2Fqodly-studio.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"qodly-studio",title:"Qodly Studio"},sidebar:"docs",previous:{title:"Utilizar processos web preemptivos",permalink:"/docs/pt/20-R3/WebServer/preemptiveWeb"},next:{title:"REST Server",permalink:"/docs/pt/20-R3/category/rest-server"}},s={},p=[{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Requisitos",id:"requisitos",level:3},{value:"Navegador",id:"navegador",level:4},{value:"Aplica\xe7\xe3o 4D",id:"aplica\xe7\xe3o-4d",level:4},{value:"Habilitando o acesso a Qodly Studio",id:"habilitando-o-acesso-a-qodly-studio",level:3},{value:"No n\xedvel 4D",id:"no-n\xedvel-4d",level:4},{value:"A n\xedvel do projeto",id:"a-n\xedvel-do-projeto",level:4},{value:"Ativando autentica\xe7\xe3o",id:"ativando-autentica\xe7\xe3o",level:3},{value:"Ativa\xe7\xe3o da renderiza\xe7\xe3o",id:"ativa\xe7\xe3o-da-renderiza\xe7\xe3o",level:3},{value:"WebAdmin server and deployment",id:"webadmin-server-and-deployment",level:3},{value:"Uso de m\xe9todos projeto",id:"uso-de-m\xe9todos-projeto",level:3},{value:"Abertura do Qodly Studio",id:"abertura-do-qodly-studio",level:2},{value:"Utilizar Qodly Studio",id:"utilizar-qodly-studio",level:2},{value:"Compara\xe7\xe3o de funcionalidades",id:"compara\xe7\xe3o-de-funcionalidades",level:3},{value:"Gerenciamento de projetos",id:"gerenciamento-de-projetos",level:3},{value:"Problema conhecido",id:"problema-conhecido",level:3},{value:"De QodlyScript \xe0 linguagem 4D",id:"de-qodlyscript-\xe0-linguagem-4d",level:3},{value:"Nomes de vari\xe1veis",id:"nomes-de-vari\xe1veis",level:4},{value:"S\xedmbolos e palavras-chave",id:"s\xedmbolos-e-palavras-chave",level:4},{value:"Nomes de comandos",id:"nomes-de-comandos",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Uso fora de linha",id:"uso-fora-de-linha",level:3},{value:"Sobre a licen\xe7a de uso",id:"sobre-a-licen\xe7a-de-uso",level:2},{value:"Esquemas URL",id:"esquemas-url",level:3},{value:"Exemplo",id:"exemplo-1",level:4},{value:"Atributo SameSite",id:"atributo-samesite",level:3},{value:"Recomenda\xe7\xf5es",id:"recomenda\xe7\xf5es",level:3},{value:"Hello, World",id:"hello-world",level:2}],u={toc:p};function m(e){var{components:t}=e,l=r(e,["components"]);return(0,n.kt)("wrapper",o({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",o({},{title:"Developer Preview",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Qodly Studio in 4D is currently in the ",(0,n.kt)("strong",{parentName:"p"},"Developer Preview")," phase. N\xe3o deve ser usado na produ\xe7\xe3o.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Qodly Studio")," is part of the ",(0,n.kt)("strong",{parentName:"p"},"Qodly platform"),", dedicated to the development of web business applications designed, tested and published entirely in the Qodly Cloud."),(0,n.kt)("p",null,"As of 4D v20 R2, you can use Qodly Studio directly from 4D to build modern and sophisticated web interfaces that you can easily integrate to your existing 4D projects and deploy ",(0,n.kt)("strong",{parentName:"p"},"on premise"),"."),(0,n.kt)("p",null,"With Qodly Studio, you will discover a totally new web UI, get familiar with the concept of datasources, and learn how to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"criar formul\xe1rios Web colocando componentes em uma p\xe1gina"),(0,n.kt)("li",{parentName:"ul"},"mapear componentes para dados"),(0,n.kt)("li",{parentName:"ul"},"acionar o c\xf3digo 4D configurando eventos"),(0,n.kt)("li",{parentName:"ul"},"e muito mais.")),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"O uso do Qodly Studio no 4D requer uma licen\xe7a espec\xedfica. Qodly Studio options and menu items won't appear if the license is not activated.")),(0,n.kt)("h2",o({},{id:"configura\xe7\xe3o"}),"Configura\xe7\xe3o"),(0,n.kt)("h3",o({},{id:"requisitos"}),"Requisitos"),(0,n.kt)("h4",o({},{id:"navegador"}),"Navegador"),(0,n.kt)("p",null,"Qodly Studio suporta os seguintes navegadores Web:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chrome"),(0,n.kt)("li",{parentName:"ul"},"Edge"),(0,n.kt)("li",{parentName:"ul"},"FireFox")),(0,n.kt)("p",null,"A resolu\xe7\xe3o recomendada \xe9 1920x1080."),(0,n.kt)("h4",o({},{id:"aplica\xe7\xe3o-4d"}),"Aplica\xe7\xe3o 4D"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Desenvolvimento: 4D v20 R2 ou superior"),(0,n.kt)("li",{parentName:"ul"},"Desenvolvimento: 4D Server v20 R2 ou superior"),(0,n.kt)("li",{parentName:"ul"},"Qodly Studio only works with 4D projects (binary databases are not supported).")),(0,n.kt)("h3",o({},{id:"habilitando-o-acesso-a-qodly-studio"}),"Habilitando o acesso a Qodly Studio"),(0,n.kt)("p",null,"Por padr\xe3o, o acesso a Qodly Studio n\xe3o \xe9 concedido."),(0,n.kt)("p",null,"Qodly Studio is served by the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin"}),"WebAdmin web server")," and displays data from 4D projects handled by the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/WebServer/overview"}),"4D web server"),"."),(0,n.kt)("p",null,"Para permitir o acesso ao Qodly Studio, voc\xea deve permiti-lo explicitamente em dois n\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a n\xedvel 4D (4D ou 4D Server)"),(0,n.kt)("li",{parentName:"ul"},"a n\xedvel do projeto")),(0,n.kt)("p",null,"If one of the two levels (or both) are not enabled, access to Qodly Studio is denied (a 403 page is returned)."),(0,n.kt)("h4",o({},{id:"no-n\xedvel-4d"}),"No n\xedvel 4D"),(0,n.kt)("p",null,"As a first security level, you need to ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#enable-access-to-qodly-studio"}),"allow access to Qodly Studio on the WebAdmin web server"),"."),(0,n.kt)("p",null,"This setting applies to the 4D application (4D or 4D Server) on the host machine. Todos os projetos abertos com essa aplica\xe7\xe3o 4D consideram essa configura\xe7\xe3o."),(0,n.kt)("p",null,"Keep this option unchecked if you want to make sure no access to Qodly Studio is allowed on the application."),(0,n.kt)("p",null,"Marque esta op\xe7\xe3o para ser poss\xedvel acessar a Qodly Studio. No entanto, voc\xea ainda precisa habilit\xe1-lo em todos os n\xedveis do projeto."),(0,n.kt)("p",null,"Al\xe9m disso, voc\xea pode ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#accept-http-connections-on-localhost"}),"configurar a porta HTTP/HTTPS do servidor WebAdmin usada"),"."),(0,n.kt)("admonition",o({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"After any change to these settings, you must ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#start-and-stop"}),"restart the WebAdmin web server")," for the new configuration to be effective.")),(0,n.kt)("h4",o({},{id:"a-n\xedvel-do-projeto"}),"A n\xedvel do projeto"),(0,n.kt)("p",null,"After you have enabled access to Qodly Studio at the 4D level, you need to explicitly designate every project that can be accessed. The ",(0,n.kt)("strong",{parentName:"p"},"Enable access to Qodly Studio")," option must be enabled on the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/settings/web#enable-access-to-qodly-studio"}),"Web Features page of the 4D application's Settings"),"."),(0,n.kt)("p",null,"Keep in mind that ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/settings/overview"}),"user settings")," can be defined at several levels, and that priorities apply."),(0,n.kt)("h3",o({},{id:"ativando-autentica\xe7\xe3o"}),"Ativando autentica\xe7\xe3o"),(0,n.kt)("p",null,"Authentication on the WebAdmin web server is granted using an access key. Para obter mais detalhes, consulte ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#access-key"}),"Chave de acesso"),"."),(0,n.kt)("h3",o({},{id:"ativa\xe7\xe3o-da-renderiza\xe7\xe3o"}),"Ativa\xe7\xe3o da renderiza\xe7\xe3o"),(0,n.kt)("p",null,"To enable the rendering of webforms that are created in Qodly Studio, the following options must be set."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The 4D project's ",(0,n.kt)("strong",{parentName:"li"},"Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Web")," > ",(0,n.kt)("strong",{parentName:"li"},"Web Features")," > ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/pt/20-R3/settings/web#exposed-as-rest-server"}),(0,n.kt)("strong",{parentName:"a"},"Expose as REST server"))," option must be activated"),(0,n.kt)("li",{parentName:"ul"},"O ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/pt/20-R3/WebServer/overview"}),"servidor web 4D")," deve estar em execu\xe7\xe3o")),(0,n.kt)("p",null,"When rendering webforms in the Web Studio, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#accept-http-connections-on-localhost"}),"WebAdmin web server"),"."),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"See ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/rendering"}),"this page")," for information on how to render webforms in Qodly.")),(0,n.kt)("p",null,'Note that when you click on the "Preview in a new tab" button, a tab will open at ',(0,n.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName")," on your machine."),(0,n.kt)("p",null,"Tenha em mente que Qodly Web Studio \xe9 executado pelo servidor web 4D WebAdmin. When you use Qodly Web Studio as a developer, even when you preview a webform in the studio, you're using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out)."),(0,n.kt)("p",null,"However, webform rendering happens outside 4D Web Studio, and is served by the standard 4D web server. In this situation, your web application cannot access assets that are not exposed as REST resources. See ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Exposed vs non-exposed functions")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/REST/configuration#exposing-tables"}),"Exposing tables")," for more information on how to expose assets."),(0,n.kt)("admonition",o({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/rendering#how-to-render-a-webform"}),"Renderer buttons")," are hidden if the configuration options are not activated.")),(0,n.kt)("h3",o({},{id:"webadmin-server-and-deployment"}),"WebAdmin server and deployment"),(0,n.kt)("p",null,"For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application."),(0,n.kt)("h3",o({},{id:"uso-de-m\xe9todos-projeto"}),"Uso de m\xe9todos projeto"),(0,n.kt)("p",null,"Recomendamos o uso de fun\xe7\xf5es classe em vez de m\xe9todos projeto. Apenas as fun\xe7\xf5es de classe podem ser chamadas a partir de componentes. No entanto, voc\xea ainda pode usar seus m\xe9todos projeto no Qodly Studio de duas maneiras:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Voc\xea pode chamar seus m\xe9todos a partir de fun\xe7\xf5es classe."),(0,n.kt)("li",{parentName:"ul"},"Voc\xea pode executar diretamente ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.qodly.com/docs/studio/coding#methods-and-classes"}),"seus m\xe9todos")," a partir de Qodly Explorer.")),(0,n.kt)("h2",o({},{id:"abertura-do-qodly-studio"}),"Abertura do Qodly Studio"),(0,n.kt)("p",null,"The Qodly Studio page is available when the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#start-and-stop"}),"WebAdmin web server is running")," and authentication is activated (see above)."),(0,n.kt)("p",null,"H\xe1 duas maneiras de acessar Qodly Studio:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"from your 4D single-user application, go to ",(0,n.kt)("strong",{parentName:"p"},"Design")," > ",(0,n.kt)("strong",{parentName:"p"},"Qodly Studio..."),". If the WebAdmin web server is already running, depending on its configuration, your default browser opens at ",(0,n.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPPort/studio")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPSPort/studio"),". Otherwise, you will be prompted if you want to start the WebAdmin web server first.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPPort/studio")),(0,n.kt)("p",null,"ou :"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"IPaddress:HTTPSPort/studio")),(0,n.kt)("p",null,"For example, after launching a local web server on port 7080, type this address in your browser:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"localhost:7080/studio")),(0,n.kt)("p",null,"You will then be prompted to enter the ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R3/Admin/webAdmin#access-key"}),"access key")," to access Qodly Studio."),(0,n.kt)("h2",o({},{id:"utilizar-qodly-studio"}),"Utilizar Qodly Studio"),(0,n.kt)("p",null,"A documenta\xe7\xe3o oficial de Qodly Studio est\xe1 dispon\xedvel no site de documenta\xe7\xe3o de Qodly ",(0,n.kt)("a",o({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/overview"})),"."),(0,n.kt)("p",null,"You can rely on this documentation and its associated resources for developing web applications powered by webforms. However, depending on implementation stage, 4D developers will either use Qodly Studio or 4D IDE."),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"There is no direct compatibility between apps implemented with 4D and apps implemented with Qodly.")),(0,n.kt)("h3",o({},{id:"compara\xe7\xe3o-de-funcionalidades"}),"Compara\xe7\xe3o de funcionalidades"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null})),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Qodly Studio para desenvolvedores 4D que usam o IDE 4D"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Qodly Studio para desenvolvedores Qodly"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Visualizar e editar tabelas (classes de dados), atributos e rela\xe7\xf5es"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Editor de estrutura 4D(1)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Qodly Studio Model Editor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Webforms"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Qodly Studio Webform Editor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Qodly Studio Webform Editor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Formul\xe1rios para desktop"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4D IDE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"n\xe3o suportado"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Linguagem de programa\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Linguagem 4D com ORDA"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"QodlyScript com ORDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"IDE de codifica\xe7\xe3o"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"4D IDE code editor/VS Code with ",(0,n.kt)("a",o({parentName:"td"},{href:"https://github.com/4d/4D-Analyzer-VSCode"}),"4D extension"),"(2)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Editor de c\xf3digo Qodly Studio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Depurador"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Depurador 4D IDE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Depurador Qodly Studio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"REST/Web roles and privileges"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"roles.json direct edit/Qodly Studio roles and privileges editor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Qodly Studio role and privileges editor")))),(0,n.kt)("p",null,"(1) If you click on the ",(0,n.kt)("strong",{parentName:"p"},"Model"),' button in Qodly Studio, nothing happens. (2) When you open some 4D code in Qodly Studio, syntax coloring is not available and a "Lsp not loaded" warning is displayed.'),(0,n.kt)("h3",o({},{id:"gerenciamento-de-projetos"}),"Gerenciamento de projetos"),(0,n.kt)("p",null,"In accordance with the management of 4D projects, only the following usages are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"development with Qodly Studio must be done using ",(0,n.kt)("strong",{parentName:"li"},"4D")," (single-user)."),(0,n.kt)("li",{parentName:"ul"},"deployment of 4D applications powered with Qodly webforms must be done using ",(0,n.kt)("strong",{parentName:"li"},"4D Server"),".")),(0,n.kt)("h3",o({},{id:"problema-conhecido"}),"Problema conhecido"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the current implementation, building merged 4D applications (stand-alone and server) that use Qodly webforms requires that the ",(0,n.kt)("em",{parentName:"li"},".4dz")," packed architecture be disabled, otherwise 404 errors are returned. If you build such merged applications, make sure you set the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4Dv20R2/4D/20-R2/PackProject.300-6439954.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"PackProject")," XML key")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"False")," in the buildApp.4DSettings file.")),(0,n.kt)("h3",o({},{id:"de-qodlyscript-\xe0-linguagem-4d"}),"De QodlyScript \xe0 linguagem 4D"),(0,n.kt)("p",null,"4D developers can use the ",(0,n.kt)("a",o({parentName:"p"},{href:"developer.qodly.com/docs/studio"}),"Qodly Studio documentation")," to learn how to design their webforms in Qodly Studio. Code examples are provided in QodlyScript, but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations:"),(0,n.kt)("h4",o({},{id:"nomes-de-vari\xe1veis"}),"Nomes de vari\xe1veis"),(0,n.kt)("p",null,"QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"$"),". In the 4D code, make sure to ",(0,n.kt)("strong",{parentName:"p"},"prefix variable names with ",(0,n.kt)("inlineCode",{parentName:"strong"},"$"))," so that they are identifed as local variables by 4D."),(0,n.kt)("h4",o({},{id:"s\xedmbolos-e-palavras-chave"}),"S\xedmbolos e palavras-chave"),(0,n.kt)("p",null,"Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. Eles est\xe3o listados abaixo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"QodlyScript"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"L\xednguagem 4D"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Coment\xe1rio"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),","),(0,n.kt)("td",o({parentName:"tr"},{align:null}),";"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"separador de argumentos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"="),(0,n.kt)("td",o({parentName:"tr"},{align:null}),":="),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"operador de atribui\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"=="),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"="),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"operador de compara\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"declare"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"#Declare"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"switch"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Case of"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"constructor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Class constructor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"extends"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Class extends"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"end"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"End for, End For each, End if, End case, End use, End while"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"forEach"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"For each"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"var type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"var type")))),(0,n.kt)("p",null,"Some other items have a different case (ex: ",(0,n.kt)("inlineCode",{parentName:"p"},"this")," vs ",(0,n.kt)("inlineCode",{parentName:"p"},"This"),") but can be pasted directly in 4D code."),(0,n.kt)("h4",o({},{id:"nomes-de-comandos"}),"Nomes de comandos"),(0,n.kt)("p",null,"Os nomes dos comandos QodlyScript s\xe3o escritos em letras mai\xfasculas e min\xfasculas, sem espa\xe7os. Talvez voc\xea precise adaptar esses comandos \xe0 linguagem 4D."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Normalmente, voc\xea s\xf3 precisar\xe1 converter os nomes. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"newCollection")," in QodlyScript is ",(0,n.kt)("inlineCode",{parentName:"li"},"New collection")," in 4D Language."),(0,n.kt)("li",{parentName:"ul"},"No entanto, alguns comandos foram renomeados para uma melhor conformidade. Eles est\xe3o listados abaixo:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"QodlyScript"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"L\xednguagem 4D"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"atan")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Arctan"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"highestProcessNumber")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Count tasks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"callChain")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Get call chain"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectClass")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Class"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectCopy")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Copy"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectEntries")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Entries"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"instanceOf")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Instance of"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectIsDefined")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Is defined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectIsEmpty")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Is empty"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectIsShared")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Is shared"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectKeys")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Keys"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectRemove")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB REMOVE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"objectValues")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"OB Values"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"sqrt")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"Square root"))))),(0,n.kt)("h4",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C\xf3digo QodlyScript:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-qs"})," declare(entitySelection : 4D.EntitySelection)  \n var dataClass : 4D.DataClass\n var entity, duplicate : 4D.Entity\n var status : object\n dataClass=entitySelection.getDataClass()\n forEach(entity,entitySelection)\n    duplicate=dataClass.new()\n    duplicate.fromObject(entity.toObject())\n    duplicate[dataClass.getInfo().primaryKey]=null\n    status=duplicate.save()\n end\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C\xf3digo 4D equivalente no linguajem:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-4d"})," #DECLARE ( $entitySelection : 4D.EntitySelection )  \n var $dataClass : 4D.DataClass\n var $entity; $duplicate : 4D.Entity\n var $status : Object\n $dataClass:=$entitySelection.getDataClass()\n For each($entity;$entitySelection)\n    $duplicate:=$dataClass.new()\n    $duplicate.fromObject($entity.toObject())\n    $duplicate[$dataClass.getInfo().primaryKey]:=Null\n    $status:=$duplicate.save()\n End for each\n\n")),(0,n.kt)("h3",o({},{id:"uso-fora-de-linha"}),"Uso fora de linha"),(0,n.kt)("p",null,"You can develop with Qodly Studio while your computer is not connected to the internet. Nesse caso, entretanto, os seguintes recursos n\xe3o est\xe3o dispon\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.qodly.com/docs/studio/design-webforms/templates"}),"Modelos"),": a biblioteca de modelos est\xe1 vazia"),(0,n.kt)("li",{parentName:"ul"},"UI tips: they are not displayed when you click on ",(0,n.kt)("img",{alt:"alt-text",src:a(668286).Z,width:"15",height:"18"})," icons.")),(0,n.kt)("h2",o({},{id:"sobre-a-licen\xe7a-de-uso"}),"Sobre a licen\xe7a de uso"),(0,n.kt)("p",null,"To render webforms, you must have an available license, as rendering a webform opens a session on the project database's main web server."),(0,n.kt)("h3",o({},{id:"esquemas-url"}),"Esquemas URL"),(0,n.kt)("p",null,"A configura\xe7\xe3o do esquema de URL do Qodly Studio (HTTP e HTTPS) determina quantas licen\xe7as s\xe3o retidas ao renderizar formul\xe1rios Web. With the appropriate configuration, you can avoid unnecessary license retaining."),(0,n.kt)("p",null,"As explained in the ",(0,n.kt)("a",o({parentName:"p"},{href:"#configuration"}),"configuration")," section, the WebAdmin web server provides a secured web access to Qodly Studio. On the other hand, the ",(0,n.kt)("a",o({parentName:"p"},{href:"#rendering-webforms"}),"renderer")," communicates with the 4D web server of the database using REST requests. Dessa forma, se comporta como um Cliente 4D convencional."),(0,n.kt)("p",null,"Se voc\xea executar o renderizador a partir do Qodly Studio e esses dois servidores web n\xe3o forem acessados atrav\xe9s do mesmo esquema de URL (HTTP ou HTTPS), isso pode levar a uma contagem incorreta de licen\xe7as."),(0,n.kt)("h4",o({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You run the Qodly Studio on an HTTPS URL scheme (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:7443/studio/"),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"O servidor da Web do seu banco de dados \xe9 iniciado somente em uma porta HTTP."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(697902).Z,width:"1724",height:"872"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"In Qodly Studio, you click on the ",(0,n.kt)("strong",{parentName:"li"},"rendering")," icon. You are warned that the two web servers are started on different schemes, but despite this you click on the ",(0,n.kt)("strong",{parentName:"li"},"Confirm")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(998934).Z,width:"412",height:"237"})),(0,n.kt)("p",null,"Como resultado, duas licen\xe7as s\xe3o mantidas."),(0,n.kt)("admonition",o({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"You can enable/disable the display of the renderer pop over using a Qodly Studio user setting.")),(0,n.kt)("h3",o({},{id:"atributo-samesite"}),"Atributo SameSite"),(0,n.kt)("p",null,"O comportamento descrito anteriormente \xe9 devido ao cookie de sess\xe3o do servidor web 4D. This session cookie has a ",(0,n.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute that determines if the session cookie is sent to the web server."),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"SameSite")," attribute's value is ",(0,n.kt)("inlineCode",{parentName:"p"},"Strict")," (default), the session cookie is not sent to the web server, so a new session is opened each time a page is rendered or refreshed."),(0,n.kt)("p",null,"Para obter mais informa\xe7\xf5es sobre o atributo ",(0,n.kt)("inlineCode",{parentName:"p"},"SameSite"),", consulte ",(0,n.kt)("a",o({parentName:"p"},{href:"https://blog.4d.com/get-ready-for-the-new-SameSite-and-secure-attributes-for-cookies/"}),"esta post do blog"),"."),(0,n.kt)("h3",o({},{id:"recomenda\xe7\xf5es"}),"Recomenda\xe7\xf5es"),(0,n.kt)("p",null,"To avoid using more licenses than necessary, we recommend doing one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run the renderer on another browser tab (by entering the rendered URL of your Web form: ",(0,n.kt)("inlineCode",{parentName:"li"},"IP:port/$lib/renderer/?w=WebFormName"),")."),(0,n.kt)("li",{parentName:"ul"},"Assegure-se de que o Qodly Studio e seu banco de dados sejam acessados no mesmo esquema de URL."),(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"Lax")," value for the ",(0,n.kt)("a",o({parentName:"li"},{href:"/docs/pt/20-R3/WebServer/webServerConfig#session-cookie-samesite"}),"session cookie")," of your project database's web server.")),(0,n.kt)("h2",o({},{id:"hello-world"}),"Hello, World"),(0,n.kt)("p",null,'This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:'),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GwIdic4OhPQ",title:"Leitor de v\xeddeo do YouTube",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}))}m.isMDXComponent=!0},998934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/render-button-2efd7d27640056f8a19e71494f6af415.png"},697902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schemes-75be10c4c974242c227fe302ca126531.png"},668286:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABdaVRYdFNuaXBNZXRhZGF0YQAAAAAAeyJjbGlwUG9pbnRzIjpbeyJ4IjowLCJ5IjowfSx7IngiOjE1LCJ5IjowfSx7IngiOjE1LCJ5IjoxOH0seyJ4IjowLCJ5IjoxOH1dfc9DK+IAAAEqSURBVDhPnZMxS8NAFMf/vcPglWiqIC5CESRfwCXg7iIOLjp1EifFD9Hv0K4Orn4GwUmok86KqDi4NRJNPUmjL31Sn71q6g8S3v+4373wwlWiKMrTNIW1FlmW4Te01vA8D8aYIqs4jkHyXyJBe2gvOVSrMtJPyEmSBIrzxBSduRasrRrsbtewtT7DK24qYRjmXBfsN2o4aMxxAq7vLDb3HjlJRGczrbCzMctpwErdQ7u5yEki5OWlKSzMa05D/Kp7NGL15t7iJe1zGnL78M6VRMhvNsfRScxpQPe5j7POKyfJyPe0jru4uOpxAg6bTzg9d8sj0yZo4l90LnvisO+4J/EJ/S56xomEs3NZxnYuw79lup6KXpNCju/7UEEQFJe7zCG0h/aSo7XGB4VZYQfJbDdFAAAAAElFTkSuQmCC"}}]);