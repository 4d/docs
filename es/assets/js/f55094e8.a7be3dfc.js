"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,P=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(P,i(i({ref:t},l),{},{components:n})):r.createElement(P,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"php",title:"P\xe1gin PHP"},s=void 0,p={unversionedId:"settings/php",id:"version-19-R8/settings/php",title:"P\xe1gin PHP",description:"En 4D, puede ejecutar scripts PHP configurando directamente la p\xe1gina PHP de las Propiedades de la base de datos (ver Ejecuci\xf3n de scripts PHP en 4D en el manual Lenguaje de 4D).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/settings/php.md",sourceDirName:"settings",slug:"/settings/php",permalink:"/docs/es/settings/php",draft:!1,editUrl:"https://github.com/4D/docs/edit/main/versioned_docs/version-19-R8/settings/php.md",tags:[],version:"19-R8",frontMatter:{id:"php",title:"P\xe1gin PHP"},sidebar:"docs",previous:{title:"P\xe1gina SQL",permalink:"/docs/es/settings/sql"},next:{title:"P\xe1gina seguridad",permalink:"/docs/es/settings/security"}},c={},l=[{value:"Int\xe9rprete",id:"int\xe9rprete",level:2},{value:"Opciones",id:"opciones",level:2}],u={toc:l};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En 4D, puede ejecutar scripts PHP configurando directamente la p\xe1gina PHP de las Propiedades de la base de datos (ver ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html"}),"Ejecuci\xf3n de scripts PHP en 4D")," en el manual ",(0,r.kt)("em",{parentName:"p"},"Lenguaje")," de 4D)."),(0,r.kt)("h2",a({},{id:"int\xe9rprete"}),"Int\xe9rprete"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direcci\xf3n IP")," y n\xfamero de puerto Por defecto, 4D ofrece un int\xe9rprete PHP, compilado en FastCGI. Por razones relacionadas con la arquitectura interna, las peticiones de ejecuci\xf3n van al int\xe9rprete PHP en una direcci\xf3n HTTP espec\xedfica. Por defecto, 4D utiliza la direcci\xf3n 127.0.0.1 y el puerto 8002. Puede cambiar esta direcci\xf3n y/o puerto si ya est\xe1n siendo utilizados por otro servicio o si tiene varios int\xe9rpretes en la misma m\xe1quina. Para esto, modifique los par\xe1metros ",(0,r.kt)("strong",{parentName:"p"},"Direcci\xf3n IP")," y ",(0,r.kt)("strong",{parentName:"p"},"N\xfamero de puerto"),".\\\nTenga en cuenta que la direcci\xf3n HTTP debe estar en la misma m\xe1quina que 4D.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Int\xe9rprete externo"),' Si utiliza un int\xe9rprete PHP externo, debe estar compilado en FastCGI y estar en la misma m\xe1quina que 4D (ver "Utilizando otro int\xe9rprete PHP u otro archivo php.ini" en ',(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Ejecutando scripts PHP en 4D"),"). Seleccione esta opci\xf3n para que 4D no intente una conexi\xf3n con el int\xe9rprete interno durante la ejecuci\xf3n de una petici\xf3n PHP. Tenga en cuenta que esta configuraci\xf3n requiere su ejecuci\xf3n manual y el control del int\xe9rprete externo."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4D Server:")," estos par\xe1metros son compartidos entre 4D Server y las m\xe1quinas remotas 4D, por lo que no es posible utilizar un int\xe9rprete externo en la m\xe1quina servidor y utilizar simult\xe1neamente el int\xe9rprete interno en las m\xe1quinas clientes (y viceversa). Adem\xe1s, si el servidor utiliza un int\xe9rprete externo en el puerto 9002, las m\xe1quinas cliente tambi\xe9n deben utilizar un int\xe9rprete en este puerto."),(0,r.kt)("h2",a({},{id:"opciones"}),"Opciones"),(0,r.kt)("p",null,"Estas opciones est\xe1n relacionadas con la gesti\xf3n autom\xe1tica del int\xe9rprete PHP 4D y se desactivan cuando se selecciona la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Int\xe9rprete externo"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"N\xfamero de procesos"),': el int\xe9rprete PHP 4D maneja un conjunto de procesos de ejecuci\xf3n sistema llamados "procesos hijos". Para su optimizaci\xf3n, puede ejecutar y mantener hasta cinco procesos hijo simult\xe1neamente por defecto. Puede modificar el n\xfamero de procesos hijos seg\xfan sus necesidades. Por ejemplo, puede que desee aumentar este valor si utiliza el int\xe9rprete PHP de forma intensiva. Para m\xe1s informaci\xf3n, consulte la secci\xf3n "Arquitectura" en ',(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html"}),"Ejecuci\xf3n de scripts PHP en 4D"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Nota:")," en Mac OS, todos los procesos hijo comparten el mismo puerto. En Windows, cada proceso hijo utiliza un n\xfamero de puerto espec\xedfico. El primer n\xfamero es el definido para el int\xe9rprete PHP; los otros procesos hijo incrementan este n\xfamero. Por ejemplo, si el puerto por defecto es 8002 y lanza 5 procesos hijo, \xe9stos utilizar\xe1n los puertos 8002 a 8006."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reiniciar el int\xe9rprete despu\xe9s de X peticiones"),": define el n\xfamero m\xe1ximo de peticiones que acepta el int\xe9rprete PHP de 4D. Cuando se alcanza este n\xfamero, el int\xe9rprete se reinicia. Para m\xe1s informaci\xf3n sobre este par\xe1metro, consulte la documentaci\xf3n FastCGI-PHP."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Nota:")," en esta caja de di\xe1logo, los par\xe1metros se especifican por defecto para todas las m\xe1quinas conectadas y todas las sesiones. Tambi\xe9n puede modificarlos y leerlos por separado para cada m\xe1quina y cada sesi\xf3n utilizando los comandos ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," y ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page643.html"}),"Get database parameter"),". Los par\xe1metros modificados por el comando ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html"}),"SET DATABASE PARAMETER")," tienen prioridad para la sesi\xf3n actual.")))))}d.isMDXComponent=!0}}]);