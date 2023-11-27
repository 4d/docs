"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95874],{3905:(e,n,a)=>{a.d(n,{Zo:()=>l,kt:()=>p});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),d=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=t,v=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return a?r.createElement(v,o(o({ref:n},l),{},{components:a})):r.createElement(v,o({ref:n},l))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21903:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});a(67294);var r=a(3905);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const o={id:"remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas"},s=void 0,c={unversionedId:"ServerWindow/remote-admin",id:"version-20-R3/ServerWindow/remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas",description:"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/ServerWindow/remote-admin.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/remote-admin",permalink:"/docs/es/ServerWindow/remote-admin",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas"},sidebar:"docs",previous:{title:"P\xe1gina de seguimiento en tiempo real",permalink:"/docs/es/ServerWindow/real-time-monitor"},next:{title:"Web Administration",permalink:"/docs/es/category/web-administration"}},d={},l=[{value:"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota",id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota",level:2},{value:"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota",id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota",level:2}],m={toc:l};function u(e){var{components:n}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",t({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente."),(0,r.kt)("h2",t({},{id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota"}),"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota"),(0,r.kt)("p",null,"Para abrir una ventana de administraci\xf3n del servidor desde un equipo cliente, debe estar conectado a la base de datos remota como Dise\xf1ador o Administrador. De lo contrario, cuando intente abrir la ventana de administraci\xf3n, se generar\xe1 un error de privilegio (-9991)."),(0,r.kt)("p",null,"Se puede acceder a esta ventana de dos maneras:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seleccione el comando ",(0,r.kt)("strong",{parentName:"li"},"Ventana de administraci\xf3n")," del men\xfa ",(0,r.kt)("strong",{parentName:"li"},"Ayuda")," o haga clic en el bot\xf3n correspondiente de la barra de herramientas de 4D."),(0,r.kt)("li",{parentName:"ul"},"Ejecute el comando ",(0,r.kt)("inlineCode",{parentName:"li"},"OPEN ADMINISTRATION WINDOW"),".")),(0,r.kt)("p",null,"A continuaci\xf3n, aparecer\xe1 una ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/es/ServerWindow/monitor"}),"ventana de administraci\xf3n del servidor")," en el equipo cliente."),(0,r.kt)("h2",t({},{id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota"}),"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota"),(0,r.kt)("p",null,"Una m\xe1quina cliente que muestre la ventana de administraci\xf3n del servidor tiene acceso a toda la informaci\xf3n disponible y puede actuar sobre los procesos y el arranque/detenci\xf3n de los servidores. Cuando la ventana de administraci\xf3n del servidor se muestra en una m\xe1quina remota, existen no obstante ciertas restricciones y caracter\xedsticas espec\xedficas relativas a su funcionamiento:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"En la p\xe1gina ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/ServerWindow/processes"}),"Proceso"),", no es posible depurar un proceso de usuario (ya que la ventana de depuraci\xf3n aparece en la m\xe1quina del servidor)."),(0,r.kt)("li",{parentName:"ul"},"En la p\xe1gina de mantenimiento ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/ServerWindow/maintenance"})),", es posible ejecutar acciones que provocan la desconexi\xf3n de todos los clientes y el reinicio del servidor (operaciones de compactaci\xf3n y reinicio). En este caso, la m\xe1quina cliente que solicita la operaci\xf3n se reconecta autom\xe1ticamente al reiniciarse."),(0,r.kt)("li",{parentName:"ul"},"En la ",(0,r.kt)("a",t({parentName:"li"},{href:"/docs/es/ServerWindow/maintenance"}),"p\xe1gina Mantenimiento"),", los botones ",(0,r.kt)("strong",{parentName:"li"},"Ver informe")," pasan a llamarse ",(0,r.kt)("strong",{parentName:"li"},"Descargar informe")," tras la ejecuci\xf3n de una operaci\xf3n de mantenimiento. Estos archivos se descargan en la carpeta local de la base de datos en la m\xe1quina cliente antes de ser visualizados.")))}u.isMDXComponent=!0}}]);