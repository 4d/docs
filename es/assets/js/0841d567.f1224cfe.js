"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29457"],{946181:function(e,n,a){a.r(n),a.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>i,assets:()=>u,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"Concepts/plug-ins","title":"Plug-ins","description":"A medida que desarrolle una aplicaci\xf3n 4D, descubrir\xe1 muchas funcionalidades de las que no se percat\xf3 cuando empez\xf3. Incluso puede extender la versi\xf3n est\xe1ndar de 4D a\xf1adiendo plug-ins a su entorno de desarrollo 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/plug-ins.md","sourceDirName":"Concepts","slug":"/Concepts/plug-ins","permalink":"/docs/es/19/Concepts/plug-ins","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"plug-ins","title":"Plug-ins"},"sidebar":"docs","previous":{"title":"Componentes","permalink":"/docs/es/19/Concepts/components"},"next":{"title":"Identificadores","permalink":"/docs/es/19/Concepts/identifiers"}}'),s=a("785893"),r=a("250065");let o={id:"plug-ins",title:"Plug-ins"},l=void 0,u={},c=[{value:"\xbfPor qu\xe9 es necesario un plug-in?",id:"por-qu\xe9-es-necesario-un-plug-in",level:2},{value:"\xbfQu\xe9 es un plug-in y qu\xe9 puede hacer?",id:"qu\xe9-es-un-plug-in-y-qu\xe9-puede-hacer",level:2},{value:"Nota importante",id:"nota-importante",level:3},{value:"\xbfC\xf3mo crear un plug-in?",id:"c\xf3mo-crear-un-plug-in",level:2},{value:"\xbfC\xf3mo instalar un plug-in?",id:"c\xf3mo-instalar-un-plug-in",level:2}];function t(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A medida que desarrolle una aplicaci\xf3n 4D, descubrir\xe1 muchas funcionalidades de las que no se percat\xf3 cuando empez\xf3. Incluso puede extender la versi\xf3n est\xe1ndar de 4D a\xf1adiendo ",(0,s.jsx)(n.strong,{children:"plug-ins"})," a su entorno de desarrollo 4D."]}),"\n",(0,s.jsx)(n.h2,{id:"por-qu\xe9-es-necesario-un-plug-in",children:"\xbfPor qu\xe9 es necesario un plug-in?"}),"\n",(0,s.jsx)(n.p,{children:"Aunque 4D ofrece cientos de m\xe9todos integrados para manipular objetos, registros e implementar la interfaz de usuario, es posible que se necesite alg\xfan uso o caracter\xedstica especial (que a veces depende de la plataforma): uno puede necesitar ODBC en Windows, otro puede necesitar los servicios de Apple en macOS, mientras que otro puede querer implementar herramientas estad\xedsticas espec\xedficas, inicio de sesi\xf3n en redes sociales, plataforma de pago, acceso a archivos a trav\xe9s de la red, una interfaz de usuario especial o una estructura de imagen privada."}),"\n",(0,s.jsx)(n.p,{children:"Es evidente que cubrir todas las \xe1reas de los sistemas operativos macOS y Windows por medio de los comandos de 4D sin duda conducir\xeda a un producto con miles de comandos, y al mismo tiempo, la mayor\xeda de los usuarios no tendr\xedan necesidad de un conjunto tan grande de funcionalidades. Adem\xe1s, la creaci\xf3n de una herramienta tan completa har\xeda que el entorno 4D fuera incre\xedblemente complejo y llevar\xeda a la mayor\xeda de los usuarios meses de estudio antes de poder esperar resultados \xfatiles."}),"\n",(0,s.jsx)(n.p,{children:"La naturaleza modular del entorno 4D permite la creaci\xf3n de aplicaciones b\xe1sicas, pero no impide el desarrollo de sistemas muy complejos. La arquitectura del plug-in 4D abre el entorno 4D a todo tipo de aplicaciones o de usuario. Los plug-ins 4D multiplican la potencia y la productividad de la aplicaci\xf3n o del usuario."}),"\n",(0,s.jsx)(n.h2,{id:"qu\xe9-es-un-plug-in-y-qu\xe9-puede-hacer",children:"\xbfQu\xe9 es un plug-in y qu\xe9 puede hacer?"}),"\n",(0,s.jsx)(n.p,{children:"Un plug-in es una pieza de c\xf3digo que 4D lanza al inicio. A\xf1ade funcionalidad a 4D y aumenta as\xed su capacidad."}),"\n",(0,s.jsx)(n.p,{children:"Normalmente, un plug-in hace cosas que:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4D no puede efectuar (es decir, una tecnolog\xeda de plataforma espec\xedfica),"}),"\n",(0,s.jsx)(n.li,{children:"ser\xe1 muy dif\xedcil de escribir s\xf3lo con 4D,"}),"\n",(0,s.jsx)(n.li,{children:"s\xf3lo est\xe1n disponibles como punto de entrada del plug-in"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Un plug-in suele contener un conjunto de rutinas entregadas al desarrollador 4D. Puede manejar un \xc1rea Externa y ejecutar un proceso externo."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una ",(0,s.jsx)(n.strong,{children:"rutina de conexi\xf3n"})," es una rutina escrita en lenguaje nativo (normalmente C o C++) que provoca una acci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:["Un ",(0,s.jsx)(n.strong,{children:"\xe1rea externa"})," es una parte de un formulario que puede mostrar casi todo e interactuar con el usuario cuando sea necesario."]}),"\n",(0,s.jsxs)(n.li,{children:["Un ",(0,s.jsx)(n.strong,{children:"proceso externo"})," es un proceso que se ejecuta solo, normalmente en un bucle, haciendo casi todo lo que quiere. Todo el c\xf3digo del proceso pertenece al plug-in, 4D simplemente est\xe1 presente para recibir/enviar eventos al proceso."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nota-importante",children:"Nota importante"}),"\n",(0,s.jsxs)(n.p,{children:['Un plug-in puede ser muy sencillo, con una sola rutina que realice una tarea muy peque\xf1a, o puede ser muy complejo, con cientos de rutinas y \xe1reas. Pr\xe1cticamente no hay l\xedmite para lo que puede hacer un plug-in, sin embargo todo desarrollador de plug-ins debe recordar que un plug-in es una parte de c\xf3digo "de muestra". Es el plug-in que se ejecuta dentro de 4D, no lo contrario. Como parte de c\xf3digo, es el anfitri\xf3n de 4D; no es una aplicaci\xf3n independiente. Comparte el tiempo de la CPU y la memoria con 4D y otros plug-ins, por lo tanto, deber\xeda ser un c\xf3digo conciso, utilizando s\xf3lo lo necesario para funcionar. Por ejemplo, en los bucles largos, un plug-in debe llamar a ',(0,s.jsx)(n.code,{children:"PA_Yield()"})," para dar tiempo al planificador 4D a menos que su tarea sea cr\xedtica tanto para \xe9l como para la aplicaci\xf3n."]}),"\n",(0,s.jsx)(n.h2,{id:"c\xf3mo-crear-un-plug-in",children:"\xbfC\xf3mo crear un plug-in?"}),"\n",(0,s.jsxs)(n.p,{children:["4D ofrece en GitHub un c\xf3digo abierto ",(0,s.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,s.jsx)(n.strong,{children:"plug-in SDK"})}),", que contiene el plug-in API 4D y el asistente de plugins 4D:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["el ",(0,s.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:"**Plugin API de 4D **"}),", escrito en C, a\xf1ade m\xe1s de 400 funciones que le ayudan a crear f\xe1cilmente sus propios plug-ins para a\xf1adir nuevas funcionalidades a su aplicaci\xf3n 4D. Las funciones del plug-in de API de 4D gestionan todas las interacciones entre la aplicaci\xf3n 4D y su plug-in."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,s.jsx)(n.strong,{children:"El Asistente de plug-in 4D"})})," es una herramienta esencial que simplifica la tarea de desarrollar plugins 4D. Escribe el c\xf3digo que 4D necesita para cargar e interactuar correctamente con un plug-in, permiti\xe9ndole concentrarse en su propio c\xf3digo."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"c\xf3mo-instalar-un-plug-in",children:"\xbfC\xf3mo instalar un plug-in?"}),"\n",(0,s.jsx)(n.p,{children:"Los plug-ins se instalan en el entorno 4D copiando sus archivos en la carpeta correspondiente."}),"\n",(0,s.jsxs)(n.p,{children:['Las carpetas "PluginName.bundle" contienen las versiones para Windows y macOS de los plug-ins 4D. Su arquitectura interna espec\xedfica permite a 4D Server cargar la versi\xf3n adecuada seg\xfan la plataforma en la que se ejecutar\xe1 la m\xe1quina cliente. Para instalar un plug-in en su entorno, s\xf3lo tiene que poner la carpeta "PluginName.bundle" o el paquete correspondiente en la carpeta ',(0,s.jsx)(n.strong,{children:"Plugins"})," deseada."]}),"\n",(0,s.jsx)(n.p,{children:"Puede colocar la carpeta Plugins en dos lugares diferentes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A nivel de la aplicaci\xf3n 4D ejecutable, es decir:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"En Windows: junto al archivo .exe"}),"\n",(0,s.jsx)(n.li,{children:"En macOS: en el primer nivel de la carpeta Contents dentro del paquete de la aplicaci\xf3n. En este caso, los plug-ins est\xe1n disponibles en cada proyecto abierto por esta aplicaci\xf3n."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"En el mismo nivel que la carpeta Project. En este caso, los plug-ins s\xf3lo est\xe1n disponibles en esta aplicaci\xf3n en particular."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"La elecci\xf3n de la ubicaci\xf3n depende de c\xf3mo quiera utilizar el plug-in."}),"\n",(0,s.jsx)(n.p,{children:"Si se coloca el mismo plug-in en ambas ubicaciones, 4D s\xf3lo cargar\xe1 el que est\xe9 situado junto a la estructura. En una aplicaci\xf3n compilada y fusionada con 4D Volume Desktop, si hay varias instancias del mismo plug-in presentes, esto impedir\xe1 que la aplicaci\xf3n se abra."}),"\n",(0,s.jsx)(n.p,{children:"Los plug-ins son cargados por 4D cuando se lanza la aplicaci\xf3n, por lo que tendr\xe1 que salir de su aplicaci\xf3n 4D antes de instalarlos. Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Si alg\xfan plug-in requiere una licencia espec\xedfica, se cargar\xe1 pero no estar\xe1 disponible para su uso."})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return o}});var i=a(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);