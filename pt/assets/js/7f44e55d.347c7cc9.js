"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7609],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||A[d]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},475529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"bars",title:"Barras de menus"},i=void 0,c={unversionedId:"Menus/bars",id:"version-20-R3/Menus/bars",title:"Barras de menus",description:"As barras de menu constituem a principal interface das aplica\xe7\xf5es personalizadas. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. You can change which menu bar is displayed using the SET MENU BAR command.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Menus/bars.md",sourceDirName:"Menus",slug:"/Menus/bars",permalink:"/docs/pt/Menus/bars",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Menus%2Fbars.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"bars",title:"Barras de menus"},sidebar:"docs",previous:{title:"Propriedades dos menus",permalink:"/docs/pt/Menus/properties"},next:{title:"Modo SDI em Windows",permalink:"/docs/pt/Menus/sdi"}},u={},p=[{value:"Splash screen",id:"splash-screen",level:2},{value:"Pr\xe9-visualiza\xe7\xe3o de barras de menu",id:"pr\xe9-visualiza\xe7\xe3o-de-barras-de-menu",level:2}],A={toc:p};function l(e){var{components:t}=e,s=o(e,["components"]);return(0,a.kt)("wrapper",r({},A,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As barras de menu constituem a principal interface das aplica\xe7\xf5es personalizadas. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. You can change which menu bar is displayed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"SET MENU BAR")," command."),(0,a.kt)("p",null,"4D lets you associate a custom splash screen picture with each menu bar and to preview this menu bar at any time."),(0,a.kt)("h2",r({},{id:"splash-screen"}),"Splash screen"),(0,a.kt)("p",null,"You can enhance the appearance of each menu bar by associating a custom splash screen with it. The window containing the splash screen is displayed below the menu bar when it appears. Pode conter um log\xf3tipo ou qualquer tipo de imagem. Por padr\xe3o, 4D mostra o logo 4D na tela inicial:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(126358).Z,width:"682",height:"533"})),(0,a.kt)("p",null,"A custom splash screen picture can come from any graphic application. 4D lets you paste a clipboard picture or use any picture present on your hard disk. Qualquer formato de imagem padr\xe3o suportado por 4D pode ser usado."),(0,a.kt)("p",null,'The splash screen picture can be set only in the Menu editor: select the menu bar with which you want to associate the custom splash screen. Note the "Background Image" area in the right-hand part of the window. To open a picture stored on your disk directly, click on the ',(0,a.kt)("strong",{parentName:"p"},"Open"),' button or click in the "Background Image" area. \xc9 apresentado um menu de contexto:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To paste a picture from the clipboard, choose ",(0,a.kt)("strong",{parentName:"li"},"Paste"),"."),(0,a.kt)("li",{parentName:"ul"},"To open a picture stored in a disk file, choose ",(0,a.kt)("strong",{parentName:"li"},"Open"),". If you choose Open, a standard Open file dialog box will appear so that you can select the picture file to be used. Uma vez definida, a imagem \xe9 apresentada em miniatura na \xe1rea. \xc9 ent\xe3o associado \xe0 barra de menus.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(526065).Z,width:"208",height:"188"})),(0,a.kt)("p",null,'You can view the final result by testing the menu bar (see the following section). In Application mode, the picture is displayed in the splash screen with the "Truncated (Centered)" type format.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pode escolher se quer exibir ou esconder a janela usando a op\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"Mostrar a barra de ferramentas")," nas Propriedades do Banco de Dados.")),(0,a.kt)("p",null,"To remove the custom picture and display the default one instead, click on the ",(0,a.kt)("strong",{parentName:"p"},"Clear")," button or select ",(0,a.kt)("strong",{parentName:"p"},"Clear")," in the area pop-up menu."),(0,a.kt)("h2",r({},{id:"pr\xe9-visualiza\xe7\xe3o-de-barras-de-menu"}),"Pr\xe9-visualiza\xe7\xe3o de barras de menu"),(0,a.kt)("p",null,"The Menu Bar editor lets you view the custom menus and splash screen at any time, without closing the toolbox window."),(0,a.kt)("p",null,"To do so, simply select the menu bar and choose ",(0,a.kt)("strong",{parentName:"p"},'Test the menu bar "Menu Bar #X"')," in the context menu or the options menu of the editor."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(116258).Z,width:"360",height:"175"})),(0,a.kt)("p",null,"4D mostra uma pr\xe9-visualiza\xe7\xe3o da barra de menu assim como o ecr\xe3 inicial. You can scroll down the menus and sub-menus to preview their contents. No entanto, estes menus n\xe3o est\xe3o activos. To test the functioning of menus and the toolbar, you must use the ",(0,a.kt)("strong",{parentName:"p"},"Test Application")," command from the ",(0,a.kt)("strong",{parentName:"p"},"Run")," menu."),(0,a.kt)("admonition",r({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("strong",{parentName:"p"},"Use SDI mode on Windows")," option is selected in the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/settings/interface#display-windows"}),'"Interface" page of the Settings dialog box'),", the ",(0,a.kt)("strong",{parentName:"p"},"Test Application")," menu allows you to test your application in ",(0,a.kt)("a",r({parentName:"p"},{href:"sdi/md"}),"SDI or MDI mode")," on Windows:"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{src:n(661564).Z,width:"342",height:"123"}))))}l.isMDXComponent=!0},126358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/splash1-f8af26d9ec7a3f25a766cb3e22b04cc5.png"},526065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/splash2-a427b8fe9c79067763540d1ce0d83994.png"},116258:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},661564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdi-mdi-d790257e5a0f85655a7787c7b6bafd08.png"}}]);