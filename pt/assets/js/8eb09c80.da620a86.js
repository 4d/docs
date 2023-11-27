"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"sql-server",title:"P\xe1gina servidor SQL"},s=void 0,l={unversionedId:"ServerWindow/sql-server",id:"version-20-R3/ServerWindow/sql-server",title:"P\xe1gina servidor SQL",description:"The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/ServerWindow/sql-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/sql-server",permalink:"/docs/pt/ServerWindow/sql-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fsql-server.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"sql-server",title:"P\xe1gina servidor SQL"},sidebar:"docs",previous:{title:"P\xe1gina Servidor de aplica\xe7\xf5es",permalink:"/docs/pt/ServerWindow/application-server"},next:{title:"P\xe1gina Servidor HTTP",permalink:"/docs/pt/ServerWindow/http-server"}},p={},c=[{value:"Iniciar / Parar o SQL Server",id:"iniciar--parar-o-sql-server",level:2},{value:"Informa\xe7\xe3o",id:"informa\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:3},{value:"Conex\xf5es",id:"conex\xf5es",level:3},{value:"Liga\xe7\xf5es m\xe1ximas",id:"liga\xe7\xf5es-m\xe1ximas",level:3}],u={toc:c};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"SQL Server")," page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(94282).Z,width:"1036",height:"498"})),(0,n.kt)("p",null,"The upper part of the page provides information about the current status of the SQL server of 4D Server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estado"),": Iniciado ou Parado"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starting time"),": Date and time the SQL server was last launched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Uptime"),": Time elapsed since last startup of the SQL server.")),(0,n.kt)("h2",o({},{id:"iniciar--parar-o-sql-server"}),"Iniciar / Parar o SQL Server"),(0,n.kt)("p",null,"Este bot\xe3o alterna e pode ser usado para controlar a ativa\xe7\xe3o do servidor SQL de 4D Server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'When the SQL server state is "Started," the button is titled ',(0,n.kt)("strong",{parentName:"li"},"Stop SQL Server"),". If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port."),(0,n.kt)("li",{parentName:"ul"},'When the SQL server state is "Stopped," the button is titled ',(0,n.kt)("strong",{parentName:"li"},"Start SQL Server"),". If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.")),(0,n.kt)("h2",o({},{id:"informa\xe7\xe3o"}),"Informa\xe7\xe3o"),(0,n.kt)("h3",o({},{id:"configura\xe7\xe3o"}),"Configura\xe7\xe3o"),(0,n.kt)("p",null,"This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections)."),(0,n.kt)("p",null,"Estes par\xe2metros podem ser modificados atrav\xe9s das Prefer\xeancias 4D."),(0,n.kt)("h3",o({},{id:"conex\xf5es"}),"Conex\xf5es"),(0,n.kt)("p",null,"N\xfamero de liga\xe7\xf5es SQL atualmente abertas no 4D Server."),(0,n.kt)("h3",o({},{id:"liga\xe7\xf5es-m\xe1ximas"}),"Liga\xe7\xf5es m\xe1ximas"),(0,n.kt)("p",null,"N\xfamero m\xe1ximo de liga\xe7\xf5es SQL simult\xe2neas permitidas. Este valor depende da licen\xe7a instalada na m\xe1quina do servidor."))}d.isMDXComponent=!0},94282:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-admin-sql-page-073207509ee5a53f2e3e69c2d106d4ab.png"}}]);