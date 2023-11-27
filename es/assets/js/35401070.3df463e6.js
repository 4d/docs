"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=l,N=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},99855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={id:"data-collect",title:"Recopilaci\xf3n de datos"},o=void 0,d={unversionedId:"Admin/data-collect",id:"version-20/Admin/data-collect",title:"Recopilaci\xf3n de datos",description:"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Admin/data-collect.md",sourceDirName:"Admin",slug:"/Admin/data-collect",permalink:"/docs/es/20/Admin/data-collect",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fdata-collect.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"data-collect",title:"Recopilaci\xf3n de datos"},sidebar:"docs",previous:{title:"Restaurar",permalink:"/docs/es/20/Backup/restore"},next:{title:"Extensiones",permalink:"/docs/es/20/Extensions/overview"}},c={},s=[{value:"Informaci\xf3n recopilada",id:"informaci\xf3n-recopilada",level:2},{value:"Recogidos al iniciar la base de datos",id:"recogidos-al-iniciar-la-base-de-datos",level:3},{value:"Recogidos al inicio del servidor web y en el env\xedo de la recolecci\xf3n de datos",id:"recogidos-al-inicio-del-servidor-web-y-en-el-env\xedo-de-la-recolecci\xf3n-de-datos",level:3},{value:"Recogidas a intervalos regulares",id:"recogidas-a-intervalos-regulares",level:3},{value:"Recogida en el env\xedo de datos",id:"recogida-en-el-env\xedo-de-datos",level:3},{value:"Recolecci\xf3n al cierre de la base y env\xedo de los datos",id:"recolecci\xf3n-al-cierre-de-la-base-y-env\xedo-de-los-datos",level:3},{value:"Recolecci\xf3n cada vez que se llama a PHP execute",id:"recolecci\xf3n-cada-vez-que-se-llama-a-php-execute",level:3},{value:"Recolecci\xf3n en la conexi\xf3n del cliente",id:"recolecci\xf3n-en-la-conexi\xf3n-del-cliente",level:3},{value:"\xbfD\xf3nde se almacena y env\xeda?",id:"d\xf3nde-se-almacena-y-env\xeda",level:2},{value:"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas",id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas",level:2}],m={toc:s};function p(e){var{components:t}=e,i=r(e,["components"]);return(0,n.kt)("wrapper",l({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Para que nuestros productos sean siempre mejores, recogemos autom\xe1ticamente los datos relativos a las estad\xedsticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente an\xf3nimos y se transfieren sin afectar la experiencia del usuario."),(0,n.kt)("p",null,"Esta p\xe1gina explica:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"qu\xe9 informaci\xf3n se recoge,"),(0,n.kt)("li",{parentName:"ul"},"d\xf3nde se almacena la informaci\xf3n y cu\xe1ndo se env\xeda a 4D,"),(0,n.kt)("li",{parentName:"ul"},"c\xf3mo desactivar la recopilaci\xf3n autom\xe1tica de datos en las aplicaciones integradas cliente/servidor.")),(0,n.kt)("h2",l({},{id:"informaci\xf3n-recopilada"}),"Informaci\xf3n recopilada"),(0,n.kt)("p",null,"Los datos se recogen durante los siguientes eventos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"inicio de la base de datos,"),(0,n.kt)("li",{parentName:"ul"},"cierre de base de datos,"),(0,n.kt)("li",{parentName:"ul"},"inicio del servidor web,"),(0,n.kt)("li",{parentName:"ul"},"ejecuci\xf3n php,"),(0,n.kt)("li",{parentName:"ul"},"conexi\xf3n con el cliente,"),(0,n.kt)("li",{parentName:"ul"},"env\xedo de recolecci\xf3n de datos.")),(0,n.kt)("p",null,"Tambi\xe9n se recogen algunos datos a intervalos regulares."),(0,n.kt)("h3",l({},{id:"recogidos-al-iniciar-la-base-de-datos"}),"Recogidos al iniciar la base de datos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"CPU"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre, tipo y velocidad del procesador")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"numberOfCores"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero total de n\xfacleos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"memory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Volumen de almacenamiento de memoria (en bytes) disponible en la m\xe1quina")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"system"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Versi\xf3n del sistema operativo y n\xfamero de build")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"headless"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n se ejecuta en modo sin interfaz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"version"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de versi\xf3n de la aplicaci\xf3n 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"buildNumber"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de build de la aplicaci\xf3n 4D")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"license"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Nombre comercial y descripci\xf3n de las licencias de los productos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isRosetta"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si 4D es emulado a trav\xe9s de Rosetta en macOS, False en caso contrario (no emulado o en Windows).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uniqueID"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"ID \xfanico de 4D Server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Texto (cadena con hash)"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Identificador \xfanico asociado a la base de datos (",(0,n.kt)("em",{parentName:"td"},"Polinomio Rolling hash del nombre de la base"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataFileSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o del archivo de datos en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexesSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o del \xedndice en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheSize"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tama\xf1o de cach\xe9 en bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingLegacyNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si se utiliza la capa de red heredada para el servidor de aplicaciones")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"usingQUICNetworkLayer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la base utiliza la capa de red QUIC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encryptedConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si las conexiones cliente/servidor est\xe1n encriptadas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"encrypted"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si el archivo de datos est\xe1 encriptado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"compiled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n est\xe1 compilada")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"isEngined"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n se fusiona con 4D Volume Desktop")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"projectMode"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si la aplicaci\xf3n es un proyecto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"mobile"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Informaci\xf3n sobre sesiones m\xf3viles")))),(0,n.kt)("h3",l({},{id:"recogidos-al-inicio-del-servidor-web-y-en-el-env\xedo-de-la-recolecci\xf3n-de-datos"}),"Recogidos al inicio del servidor web y en el env\xedo de la recolecci\xf3n de datos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webServer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),'"started":true si el servidor web est\xe1 arrancando o iniciado')))),(0,n.kt)("h3",l({},{id:"recogidas-a-intervalos-regulares"}),"Recogidas a intervalos regulares"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumNumberOfWebProcesses"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero m\xe1ximo de procesos web simult\xe1neos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedPhysicalMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Uso m\xe1ximo de la memoria f\xedsica")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximumUsedVirtualMemory"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Uso m\xe1ximo de la memoria virtual")))),(0,n.kt)("h3",l({},{id:"recogida-en-el-env\xedo-de-datos"}),"Recogida en el env\xedo de datos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"uptime"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Tiempo transcurrido (en segundos) desde que se abri\xf3 la base 4D local")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes le\xeddos de la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes perdidos de la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas en la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"cacheMissCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas perdidas en la cach\xe9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes le\xeddos en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes escritos en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"dataSegment1.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de escrituras en el archivo de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes le\xeddos en el archivo \xedndice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteBytes"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de bytes escritos en el archivo \xedndice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskReadCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de lecturas en el archivo \xedndice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"indexSegment.diskWriteCount"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de escrituras en el archivo \xedndice")))),(0,n.kt)("h3",l({},{id:"recolecci\xf3n-al-cierre-de-la-base-y-env\xedo-de-los-datos"}),"Recolecci\xf3n al cierre de la base y env\xedo de los datos"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de visitas al servidor web durante la recolecci\xf3n de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"restHits"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero de accesos al servidor REST durante la recolecci\xf3n de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesIn"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes recibidos por el servidor web durante la recolecci\xf3n de datos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"webserverBytesOut"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Bytes enviados por el servidor web durante la recolecci\xf3n de datos")))),(0,n.kt)("h3",l({},{id:"recolecci\xf3n-cada-vez-que-se-llama-a-php-execute"}),"Recolecci\xf3n cada vez que se llama a PHP execute"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"phpCall"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xf9mero de llamadas a ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"externalPHP"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True si el cliente realiza una llamada a ",(0,n.kt)("inlineCode",{parentName:"td"},"PHP execute")," y utiliza su propia versi\xf3n de php")))),(0,n.kt)("h3",l({},{id:"recolecci\xf3n-en-la-conexi\xf3n-del-cliente"}),"Recolecci\xf3n en la conexi\xf3n del cliente"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Datos"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Notas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"maximum4DClientConnections"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"N\xfamero m\xe1ximo de conexiones 4D Client al servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"connectionSystems"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Sistema operativo del cliente sin el n\xfamero de compilaci\xf3n (entre par\xe9ntesis) y n\xfamero de clientes que lo utilizan")))),(0,n.kt)("h2",l({},{id:"d\xf3nde-se-almacena-y-env\xeda"}),"\xbfD\xf3nde se almacena y env\xeda?"),(0,n.kt)("p",null,"Los datos recolectados se escriben en un archivo de texto (formato JSON) por base de datos cuando 4D Server cierra. El archivo se almacena dentro de la ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page485.html"}),"carpeta 4D activa"),", es decir.:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"en Windows: ",(0,n.kt)("inlineCode",{parentName:"li"},"Users\\[userName]\\AppData\\Roaming\\4D Server")),(0,n.kt)("li",{parentName:"ul"},"en macOS: ",(0,n.kt)("inlineCode",{parentName:"li"},"/Users/[userName]/Library/ApplicationSupport/4D Server"))),(0,n.kt)("p",null,"Una vez a la semana, el archivo se env\xeda autom\xe1ticamente por la red a 4D. A continuaci\xf3n, el archivo se elimina de la carpeta activa de 4D."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(44175).Z,width:"1261",height:"398"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si el archivo no ha podido ser enviado por alguna raz\xf3n, no obstante se elimina y no se muestra ning\xfan mensaje de error del lado de 4D Server.")),(0,n.kt)("p",null,"El archivo se env\xeda a la siguiente direcci\xf3n del servidor: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://dcollector.4d.com")," (ip: 195.68.52.83)."),(0,n.kt)("h2",l({},{id:"desactivar-la-recopilaci\xf3n-de-datos-en-las-aplicaciones-clienteservidor-integradas"}),"Desactivar la recopilaci\xf3n de datos en las aplicaciones cliente/servidor integradas"),(0,n.kt)("p",null,"Puede desactivar la recolecci\xf3n autom\xe1tica de datos en ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/es/20/Desktop/building#clientserver-page"}),"aplicaciones integradas cliente/servidor"),"."),(0,n.kt)("p",null,"Para desactivar la colecci\xf3n, pasar el valor ",(0,n.kt)("strong",{parentName:"p"},"False")," a la llave ",(0,n.kt)("a",l({parentName:"p"},{href:"https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ServerDataCollection"))," en el archivo ",(0,n.kt)("inlineCode",{parentName:"p"},"buildApp. Archivo Dsettings"),", utilizado para crear la aplicaci\xf3n cliente/servidor."))}p.isMDXComponent=!0},44175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-collect-3bbbbcb5b54d82cae14ce1aa89e842eb.png"}}]);