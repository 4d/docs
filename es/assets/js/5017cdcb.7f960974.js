/*! For license information please see 5017cdcb.7f960974.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43930],{781235:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(474848),i=s(28453);const r={id:"preemptiveWeb",title:"Uso de procesos web apropiativos"},d=void 0,l={id:"WebServer/preemptiveWeb",title:"Uso de procesos web apropiativos",description:"El servidor web de 4D le permite aprovechar al m\xe1ximo los ordenadores multin\xfacleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su c\xf3digo relacionado con la web, incluyendo las etiquetas 4D, los m\xe9todos base Web o las funciones de clase REST de ORDA para que se ejecuten simult\xe1neamente en tantos n\xfacleos como sea posible.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/es/20/WebServer/preemptiveWeb",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"preemptiveWeb",title:"Uso de procesos web apropiativos"},sidebar:"docs",previous:{title:"Sesiones usuario",permalink:"/docs/es/20/WebServer/sessions"},next:{title:"REST Server",permalink:"/docs/es/20/category/rest-server"}},c={},a=[{value:"Disponibilidad del modo apropiativo para los procesos web",id:"disponibilidad-del-modo-apropiativo-para-los-procesos-web",level:2},{value:"Escribir c\xf3digo servidor web hilo seguro",id:"escribir-c\xf3digo-servidor-web-hilo-seguro",level:2},{value:"C\xf3digo web 4D hilo seguro",id:"c\xf3digo-web-4d-hilo-seguro",level:2},{value:"Comandos 4D y m\xe9todos base",id:"comandos-4d-y-m\xe9todos-base",level:3},{value:"URLs del servidor web",id:"urls-del-servidor-web",level:3},{value:"Icono de proceso web apropiativo",id:"icono-de-proceso-web-apropiativo",level:3}];function t(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"El servidor web de 4D le permite aprovechar al m\xe1ximo los ordenadores multin\xfacleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su c\xf3digo relacionado con la web, incluyendo las etiquetas 4D, los m\xe9todos base Web o las funciones de clase REST de ORDA para que se ejecuten simult\xe1neamente en tantos n\xfacleos como sea posible."}),"\n",(0,n.jsxs)(o.p,{children:["Para obtener informaci\xf3n detallada sobre los procesos apropiativos en 4D, consulte la secci\xf3n ",(0,n.jsx)(o.em,{children:"Procesos 4D apropiativos"})," del ",(0,n.jsx)(o.a,{href:"https://doc.4d.com",children:(0,n.jsx)(o.em,{children:"manual de lenguaje"})}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"disponibilidad-del-modo-apropiativo-para-los-procesos-web",children:"Disponibilidad del modo apropiativo para los procesos web"}),"\n",(0,n.jsx)(o.p,{children:"La siguiente tabla indica si el modo apropiativo se utiliza o est\xe1 disponible, dependiendo del contexto de ejecuci\xf3n:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"4D Server"}),(0,n.jsxs)(o.th,{children:["Interpretado (",(0,n.jsx)(o.a,{href:"/docs/es/20/Debugging/debugging-remote",children:"asociado al depurador"}),")"]}),(0,n.jsx)(o.th,{children:"Interpretado (no asociado al depurador)"}),(0,n.jsx)(o.th,{children:"Compilado"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor REST"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:"apropiativo"}),(0,n.jsx)(o.td,{children:"apropiativo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor Web"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.em,{children:"par\xe1metro web"})})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor Web Services"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.em,{children:"par\xe1metro web"})})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"4D remoto/monopuesto"}),(0,n.jsx)(o.th,{children:"Interpretado"}),(0,n.jsx)(o.th,{children:"Compilado"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor REST"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:"apropiativo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor Web"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.em,{children:"par\xe1metro web"})})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Servidor Web Services"}),(0,n.jsx)(o.td,{children:"cooperativo"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.em,{children:"par\xe1metro web"})})]})]})]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Servidor REST: gestiona las ",(0,n.jsx)(o.a,{href:"/docs/es/20/REST/classFunctions",children:"funciones de clase del modelo de datos ORDA"})]}),"\n",(0,n.jsxs)(o.li,{children:["Servidor web: maneja las ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/templates",children:"plantillas web"}),", ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/httpRequests",children:"4DACTION y los m\xe9todos base"})]}),"\n",(0,n.jsx)(o.li,{children:"Servidor de servicios web: gestiona las peticiones SOAP"}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:(0,n.jsx)(o.strong,{children:"web setting"})})," significa que el modo apropiativo depende de un valor de configuraci\xf3n:\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["cuando la opci\xf3n ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/sessions#enabling-sessions",children:(0,n.jsx)(o.strong,{children:"sesiones escalables"})})," est\xe1 seleccionada, el ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/sessions#preemptive-mode",children:"modo apropiativo se utiliza autom\xe1ticamente"})," para los procesos web."]}),"\n",(0,n.jsxs)(o.li,{children:["de lo contrario, la opci\xf3n ",(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/webServerConfig#use-preemptive-processes",children:(0,n.jsx)(o.strong,{children:"Utilizar procesos apropiativos"})})," se tiene en cuenta."]}),"\n",(0,n.jsxs)(o.li,{children:['en lo que respecta a los procesos de servicios web (servidor o cliente), se soporta el modo apropiativo a nivel del m\xe9todo. S\xf3lo tiene que seleccionar la propiedad " Puede ejecutarse en procesos apropiativos " para los m\xe9todos del servidor SOAP publicados (ver ',(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html",children:"Publicaci\xf3n de un servicio web con 4D"}),") o los m\xe9todos del cliente proxy (ver ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html",children:"Suscripci\xf3n a un servicio web en 4D"}),") y asegurarse de que el compilador confirme que son hilo seguro."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"escribir-c\xf3digo-servidor-web-hilo-seguro",children:"Escribir c\xf3digo servidor web hilo seguro"}),"\n",(0,n.jsxs)(o.p,{children:["Todo el c\xf3digo 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. Cuando el ",(0,n.jsx)(o.a,{href:"#availability-of-preemptive-mode-for-web-processes",children:"modo apropiativo est\xe1 activo"}),", las siguientes partes de la aplicaci\xf3n ser\xe1n evaluadas autom\xe1ticamente por el compilador 4D:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Todos los m\xe9todos base relacionados con la web:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/authentication#on-web-authentication",children:(0,n.jsx)(o.code,{children:"On Web Authentication"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/es/20/WebServer/httpRequests#on-web-connection",children:(0,n.jsx)(o.code,{children:"On Web Connection"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"/docs/es/20/REST/configuration#using-the-on-rest-authentication-database-method",children:(0,n.jsx)(o.code,{children:"On REST Authentication"})})}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication",children:(0,n.jsx)(o.code,{children:"On Mobile App Authentication"})})," y ",(0,n.jsx)(o.a,{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action",children:(0,n.jsx)(o.code,{children:"On Mobile App Action"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["El m\xe9todo proyecto ",(0,n.jsx)(o.code,{children:"compilador_web"}),' (independientemente de su propiedad real "Modo de ejecuci\xf3n");']}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["B\xe1sicamente cualquier c\xf3digo procesado por el comando ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html",children:(0,n.jsx)(o.code,{children:"PROCESS 4D TAGS"})})," en el contexto web, por ejemplo a trav\xe9s de p\xe1ginas .shtml"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:['Todo m\xe9todo proyecto con el atributo "Disponible a trav\xe9s de etiquetas 4D y URLs (',(0,n.jsx)(o.code,{children:"4DACTION"}),", etc.)"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'Triggers para tablas con el atributo "Exponer como recurso REST"'}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/es/20/REST/classFunctions",children:"funciones de clase del modelo de datos ORDA"})," llamadas v\xeda REST"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Para cada uno de estos m\xe9todos y partes de c\xf3digo, el compilador comprobar\xe1 si se respetan las reglas de seguridad de hilos, y devolver\xe1 errores en caso de que haya problemas. Para m\xe1s informaci\xf3n sobre las reglas hilo seguro, consulte el p\xe1rrafo ",(0,n.jsx)(o.em,{children:"Escribir un m\xe9todo hilo seguro"})," en el cap\xedtulo ",(0,n.jsx)(o.em,{children:"Procesos"})," del manual de ",(0,n.jsx)(o.a,{href:"https://doc.4d.com",children:"Lenguaje 4D"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"c\xf3digo-web-4d-hilo-seguro",children:"C\xf3digo web 4D hilo seguro"}),"\n",(0,n.jsx)(o.p,{children:"La mayor\xeda de los comandos y funciones 4D relacionados con la web, los m\xe9todos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo."}),"\n",(0,n.jsx)(o.h3,{id:"comandos-4d-y-m\xe9todos-base",children:"Comandos 4D y m\xe9todos base"}),"\n",(0,n.jsxs)(o.p,{children:["Todos los comandos 4D relativos a la web son hilo seguro, ",(0,n.jsx)(o.em,{children:"es decir"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["todos los comandos del tema ",(0,n.jsx)(o.em,{children:"Servidor Web"}),","]}),"\n",(0,n.jsxs)(o.li,{children:["todos los comandos del tema ",(0,n.jsx)(o.em,{children:"Cliente HTTP"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Los m\xe9todos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): ",(0,n.jsx)(o.code,{children:"On Web Authentication"}),", ",(0,n.jsx)(o.code,{children:"On Web Connection"}),", ",(0,n.jsx)(o.code,{children:"On REST Authentication"}),"...)."]}),"\n",(0,n.jsx)(o.p,{children:"Por supuesto, el c\xf3digo ejecutado por estos m\xe9todos tambi\xe9n debe ser hilo seguro."}),"\n",(0,n.jsx)(o.h3,{id:"urls-del-servidor-web",children:"URLs del servidor web"}),"\n",(0,n.jsx)(o.p,{children:"Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"4daction/"})," (el m\xe9todo proyecto llamado tambi\xe9n debe ser hilo seguro)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"4dcgi/"})," (los m\xe9todos base llamados tambi\xe9n deben ser hilo seguro)"]}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"4dwebtest/"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"4dblank/"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"4dstats/"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"4dhtmlstats/"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"4dcacheclear/"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.em,{children:"rest/"})}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"4dimgfield/"})," (generado por ",(0,n.jsx)(o.code,{children:"PROCESS 4D TAGS"})," para la petici\xf3n web en los campos imagen)"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"4dimg/"})," (generado por ",(0,n.jsx)(o.code,{children:"PROCESS 4D TAGS"})," para la petici\xf3n web en las variables imagen)"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"icono-de-proceso-web-apropiativo",children:"Icono de proceso web apropiativo"}),"\n",(0,n.jsx)(o.p,{children:"Tanto el Explorador de ejecuci\xf3n como la ventana de administraci\xf3n de 4D Server muestran un icono espec\xedfico para los procesos web apropiativos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Tipo de proceso"}),(0,n.jsx)(o.th,{children:"Icono"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"M\xe9todo Web (proceso apropiativo)"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.img,{src:s(595545).A+"",width:"40",height:"32"})})]})})]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},221020:(e,o,s)=>{var n=s(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,s){var n,r={},a=null,t=null;for(n in void 0!==s&&(a=""+s),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(t=o.ref),o)d.call(o,n)&&!c.hasOwnProperty(n)&&(r[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===r[n]&&(r[n]=o[n]);return{$$typeof:i,type:e,key:a,ref:t,props:r,_owner:l.current}}o.Fragment=r,o.jsx=a,o.jsxs=a},474848:(e,o,s)=>{e.exports=s(221020)},595545:(e,o,s)=>{s.d(o,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,o,s)=>{s.d(o,{R:()=>d,x:()=>l});var n=s(296540);const i={},r=n.createContext(i);function d(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);