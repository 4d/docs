"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59380],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>p});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=t,A=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(A,s(s({ref:a},d),{},{components:n})):r.createElement(A,s({ref:a},d))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30188:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function t(){return t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}const s={id:"users",title:"P\xe1gina Usuarios"},i=void 0,l={unversionedId:"ServerWindow/users",id:"version-20-R2/ServerWindow/users",title:"P\xe1gina Usuarios",description:"La p\xe1gina Usuarios lista los usuarios 4D conectados al servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/ServerWindow/users.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/users",permalink:"/docs/es/20-R2/ServerWindow/users",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fusers.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"users",title:"P\xe1gina Usuarios"},sidebar:"docs",previous:{title:"P\xe1gina Monitor",permalink:"/docs/es/20-R2/ServerWindow/monitor"},next:{title:"P\xe1gina Procesos",permalink:"/docs/es/20-R2/ServerWindow/processes"}},c={},d=[{value:"Lista de usuarios",id:"lista-de-usuarios",level:2},{value:"Gesti\xf3n de usuarios dormidos",id:"gesti\xf3n-de-usuarios-dormidos",level:3},{value:"\xc1rea de b\xfasqueda/filtrado",id:"\xe1rea-de-b\xfasquedafiltrado",level:2},{value:"Botones de administraci\xf3n",id:"botones-de-administraci\xf3n",level:2},{value:"Enviar mensaje",id:"enviar-mensaje",level:3},{value:"Visualizar procesos",id:"visualizar-procesos",level:3},{value:"Desconectar",id:"desconectar",level:3}],u={toc:d};function m(e){var{components:a}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",t({},u,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"La p\xe1gina ",(0,r.kt)("strong",{parentName:"p"},"Usuarios")," lista los usuarios 4D conectados al servidor."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70062).Z,width:"1034",height:"163"})),(0,r.kt)("p",null,'El bot\xf3n "Usuarios" indica, entre par\xe9ntesis, el n\xfamero total de usuarios conectados al servidor (este n\xfamero no tiene en cuenta los filtros de visualizaci\xf3n aplicados a la ventana). La p\xe1gina tambi\xe9n contiene un \xe1rea de b\xfasqueda din\xe1mica y botones de control. Puede modificar el orden de las columnas arrastrando y soltando sus \xe1reas de encabezados.'),(0,r.kt)("p",null,"Tambi\xe9n puede ordenar la lista de los valores de las columnas haciendo clic en su encabezado. Haga clic varias veces para especificar a su vez un orden ascendente/descendente."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32353).Z,width:"116",height:"20"})),(0,r.kt)("h2",t({},{id:"lista-de-usuarios"}),"Lista de usuarios"),(0,r.kt)("p",null,"Para cada usuario conectado al servidor, la lista ofrece la siguiente informaci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sistema de la m\xe1quina cliente (macOS o Windows) como un icono."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usuario 4D"),": nombre del usuario 4D, o alias si se ha definido con el comando ",(0,r.kt)("a",t({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1666.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS")),' en la m\xe1quina del usuario. Si las contrase\xf1as no est\xe1n activadas y no se ha definido ning\xfan alias, todos los usuarios se denominan "Dise\xf1ador".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nombre de m\xe1quina"),": Nombre de la m\xe1quina remota."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nombre de sesi\xf3n"),": nombre de la sesi\xf3n abierta en la m\xe1quina remota."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Direcci\xf3n IP"),": direcci\xf3n IP de la m\xe1quina remota."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fecha de conexi\xf3n"),": fecha y hora de la conexi\xf3n de la m\xe1quina remota."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tiempos CPU"),": tiempos procesador consumidos por este usuario desde la conexi\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Actividad"),': ratio de tiempo que 4D Server dedica a este usuario (visualizaci\xf3n din\xe1mica). "En reposo" si la m\xe1quina remota ha pasado al modo reposo (ver abajo).')),(0,r.kt)("h3",t({},{id:"gesti\xf3n-de-usuarios-dormidos"}),"Gesti\xf3n de usuarios dormidos"),(0,r.kt)("p",null,"4D Server gestiona espec\xedficamente los casos en los que una m\xe1quina que ejecuta una aplicaci\xf3n remota 4D pasa al modo de reposo mientras su conexi\xf3n con la m\xe1quina servidor sigue activa. En este caso, la aplicaci\xf3n remota 4D conectada notifica autom\xe1ticamente a 4D Server su desconexi\xf3n inminente. En el servidor, el usuario conectado pasa a un estado de actividad ",(0,r.kt)("strong",{parentName:"p"},"Dormido"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46166).Z,width:"1139",height:"202"})),(0,r.kt)("p",null,"Este estado libera recursos en el servidor. Adem\xe1s, la aplicaci\xf3n 4D remota se reconecta autom\xe1ticamente a 4D Server despu\xe9s de despertar del modo de suspensi\xf3n."),(0,r.kt)("p",null,"Se soporta el siguiente escenario: un usuario remoto deja de trabajar durante un tiempo, por ejemplo durante una pausa para comer, pero mantiene abierta la conexi\xf3n con el servidor. La m\xe1quina pasa al modo reposo. Cuando el usuario regresa, despierta la m\xe1quina y la aplicaci\xf3n 4D remota recupera autom\xe1ticamente su conexi\xf3n con el servidor, as\xed como el contexto de la sesi\xf3n."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Una sesi\xf3n remota durmiente es abandonada autom\xe1ticamente por el servidor tras 48 horas de inactividad. Puede modificar este tiempo de espera por defecto utilizando el comando ",(0,r.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page642.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SET DATABASE PARAMETER"))," con el selector ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote connection sleep timeout"),".")),(0,r.kt)("h2",t({},{id:"\xe1rea-de-b\xfasquedafiltrado"}),"\xc1rea de b\xfasqueda/filtrado"),(0,r.kt)("p",null,"Esta funci\xf3n permite reducir el n\xfamero de l\xedneas que aparecen en la lista a las que corresponden al texto introducido en el \xe1rea de b\xfasqueda. El \xe1rea indica las columnas en las que se realizar\xe1 la b\xfasqueda/filtrado. En la p\xe1gina Usuarios, ser\xe1n las columnas Usuario 4D, Nombre de m\xe1quina y Nombre de sesi\xf3n."),(0,r.kt)("p",null,"La lista se actualiza en tiempo real a medida que se introduce texto en el \xe1rea. Es posible introducir m\xe1s de un valor a buscar: separe los valores con punto y coma. En este caso se utiliza el operador de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"OR"),'. Por ejemplo, si introduce "Juan;Mar\xeda;Pedro", s\xf3lo se conservar\xe1n las l\xedneas con Juan O Mar\xeda O Pedro en las columnas objetivo.'),(0,r.kt)("h2",t({},{id:"botones-de-administraci\xf3n"}),"Botones de administraci\xf3n"),(0,r.kt)("p",null,"Esta p\xe1gina incluye tres botones de control. Estos botones est\xe1n activos si se selecciona al menos una l\xednea. Puede seleccionar varias l\xedneas manteniendo presionada la tecla ",(0,r.kt)("strong",{parentName:"p"},"May\xfas")," para una selecci\xf3n adyacente o ",(0,r.kt)("strong",{parentName:"p"},"Ctrl")," (Windows) / ",(0,r.kt)("strong",{parentName:"p"},"Comando")," (macOS) llave para una selecci\xf3n no adyacente."),(0,r.kt)("h3",t({},{id:"enviar-mensaje"}),"Enviar mensaje"),(0,r.kt)("p",null,"Este bot\xf3n permite enviar un mensaje a los usuarios 4D seleccionados en la ventana. Si no se selecciona ning\xfan usuario, el bot\xf3n no est\xe1 activo. Al hacer clic en este bot\xf3n, aparece un di\xe1logo que le permite introducir el mensaje. El di\xe1logo indica el n\xfamero de usuarios que recibir\xe1n este mensaje:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66155).Z,width:"460",height:"229"})),(0,r.kt)("p",null,"El mensaje se mostrar\xe1 como una alerta en las m\xe1quinas remotas."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puede realizar la misma acci\xf3n para usuarios remotos con el comando ",(0,r.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1632.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SEND MESSAGE TO REMOTE USER")),".")),(0,r.kt)("h3",t({},{id:"visualizar-procesos"}),"Visualizar procesos"),(0,r.kt)("p",null,"Este bot\xf3n permite mostrar directamente los procesos de los usuarios seleccionados en la p\xe1gina ",(0,r.kt)("a",t({parentName:"p"},{href:"/docs/es/20-R2/ServerWindow/processes"}),(0,r.kt)("strong",{parentName:"a"},"Procesos"))," de la ventana. Al hacer clic en este bot\xf3n, 4D Server cambia a la p\xe1gina Procesos e introduce los nombres de usuario seleccionados en el \xe1rea de b\xfasqueda/filtrado."),(0,r.kt)("h3",t({},{id:"desconectar"}),"Desconectar"),(0,r.kt)("p",null,"Este bot\xf3n puede utilizarse para forzar al usuario(s) seleccionado a desconectarse. Al hacer clic en este bot\xf3n, aparece un di\xe1logo de alerta para que pueda confirmar o cancelar esta operaci\xf3n (mantenga presionada la tecla ",(0,r.kt)("strong",{parentName:"p"},"Alt")," mientras hace clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Desconectar")," para desconectar directamente a los usuarios seleccionados sin que aparezca el di\xe1logo de confirmaci\xf3n)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puede efectuar la misma acci\xf3n para los usuarios remotos con el comando ",(0,r.kt)("a",t({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1633.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"DROP REMOTE USER")),".")))}m.isMDXComponent=!0},66155:(e,a,n)=>{n.d(a,{Z:()=>r});const r="data:image/png;base64,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"},46166:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/server-sleeping-215c7c2ed0334b24d86018ba014b2788.png"},32353:(e,a,n)=>{n.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAUCAIAAADTDI4qAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kJAg41DhHrjwYAAAImSURBVHic7VjNSgMxEJ6sdavSWg/+YBFEEG8efASPehA9CXrwMQTPXvUt9CZKH0EfQLCgoJ4U/KkHW/u3m+4mRqIxzWZb6W5dLfuxDDOTyST5mAxL0EvhBr6QyUxCjDBQKj0yaUS9jV5GosmiNKJt9BAQEupn5d7eXI2OzUa0nZ5F3Ba6iL9IrjmQbuv5F0i0D/kxBAXYKst0MNMvWDvUMwiTXM6p4EsosvNfI3dy6De0srrhdUbTFjjdSoEznX9+Hq7IZtt4JSAgtAy28P+VnivoVupd9oB0CeRRQbocr50eHF4e/ZiFrpIrCifE4ylEeytX2UBY68qQ2WzBLKg9V/oB7hxfSbBd0Y6byRQ03+7PSHl1rrf0KPm5yZMzXTEDnEeDlbXN3PEBk63DomkL/PCCgoDgDIrMykLB82vRllkI+VeMl2Qy1cGR2BSZI63Hb1QuUj8zEoT5tvDdECn90H2yKUPCbGrNOo9mojZYZ/4evG8LMboBFL/ndgP8PTdRr7wJ1/DdHhqcNobGaTFPSxeGdU+q90AsQoDVOrtdsVQk6wHYBcI+AAsDdsBxwFzYJRNLjE90eXEqyJ0aLg9e76C5bZJIgVUw8LNbPO9zytjImKQUS690ccV2aOP1smEV6xYQCgNDI9mt16v82UflVqs1QW56frnI5hSOTPuO1h+o/YScGkHIQEmXYMMwY6nIhtPANtRrVYzBTWb7Z9azi/uMSc7qOw86iLS/1FGTAAAAAElFTkSuQmCC"},70062:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/server-users-a5fbe263f9a5f955ad40cf79716ba37b.png"}}]);