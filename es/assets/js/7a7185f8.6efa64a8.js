"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83648"],{264891:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/http-get-option","title":"HTTP GET OPTION","description":"HTTP GET OPTION ( opci\xf3n ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-get-option.md","sourceDirName":"commands-legacy","slug":"/commands/http-get-option","permalink":"/docs/es/commands/http-get-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-get-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-get-option","title":"HTTP GET OPTION","slug":"/commands/http-get-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Get certificates folder","permalink":"/docs/es/commands/http-get-certificates-folder"},"next":{"title":"HTTP Parse message","permalink":"/docs/es/commands/http-parse-message"}}'),r=t("785893"),i=t("250065");let a={id:"http-get-option",title:"HTTP GET OPTION",slug:"/commands/http-get-option",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HTTP GET OPTION"})," ( ",(0,r.jsx)(n.em,{children:"opci\xf3n"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"opci\xf3n"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"C\xf3digo de la opci\xf3n a leer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor actual de la opci\xf3n"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilidad",type:"info",children:(0,r.jsxs)(n.p,{children:["Este comando se mantiene s\xf3lo por razones de compatibilidad. Ahora se recomienda utilizar ",(0,r.jsx)(n.a,{href:"/docs/es/API/HTTPRequestClass",children:(0,r.jsx)(n.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"HTTP GET OPTION"})," devuelve el valor actual de las opciones HTTP (opciones utilizadas por el cliente para la pr\xf3xima petici\xf3n provocada por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-get",children:"HTTP Get"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-request",children:"HTTP Request"}),"). El valor actual de una opci\xf3n puede ser el valor por defecto o puede haber sido modificado utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-set-option",children:"HTTP SET OPTION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," las opciones son locales al proceso actual. En un componente, son locales al componente en ejecuci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,r.jsx)(n.em,{children:"opcion"})," el n\xfamero de la opci\xf3n cuyo valor quiere leer. Puede utilizar una de las siguientes constantes predefinidas, disponibles en el tema ",(0,r.jsx)(n.em,{children:"HTTP Client"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP client log"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"}),' = una de las siguientes constantes: HTTP disable log: el registro de depuraci\xf3n del cliente HTTP est\xe1 deshabilitado (por defecto) HTTP enable log with all body parts: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con las partes del cuerpo de la respuesta y de la petici\xf3n HTTP enable log with request body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con la parte del cuerpo de la petici\xf3n solamente HTTP enable log with response body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con la parte del cuerpo en la respuesta solamente HTTP enable log without body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado sin partes del cuerpo (en este caso se suministra el tama\xf1o del cuerpo) Permite obtener o definir el estado del archivo de registro de peticiones del cliente HTTP. Cuando est\xe1 habilitado, este archivo, llamado "4DHTTPClientLog_nn.txt", se almacena en la carpeta "Logs" de la aplicaci\xf3n (nn es el n\xfamero de archivo). Es \xfatil para depurar problemas relacionados con las peticiones del cliente HTTP. Registra cada petici\xf3n y cada respuesta en modo raw. Se registran las peticiones completas, incluyendo los encabezados; opcionalmente, tambi\xe9n se pueden registrar las partes del cuerpo. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,r.jsx)(n.em,{children:"Descripci\xf3n de los archivos de registro"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP compression"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = 0 (no comprimir) \xf3 1 (comprimir). Por defecto: 0",(0,r.jsx)(n.br,{}),"Esta opci\xf3n activa o desactiva el mecanismo de compresi\xf3n de las peticiones entre el cliente y el servidor, para acelerar los intercambios. Cuando este mecanismo est\xe1 activo, el cliente HTTP utiliza la compresi\xf3n deflate o GZIP en funci\xf3n de la respuesta del servidor."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP display auth dial"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = 0 (no mostrar el di\xe1logo) o 1 (mostrar el di\xe1logo). Por defecto: 0",(0,r.jsx)(n.br,{}),"Esta opci\xf3n controla la visualizaci\xf3n de la caja de di\xe1logo de autenticaci\xf3n al ejecutar el comando HTTP Get o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-request",title:"HTTP Request",children:"HTTP Request"}),". Por defecto, este comando no provoca la visualizaci\xf3n de la caja de di\xe1logo, normalmente debe utilizar el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-authenticate",title:"HTTP AUTHENTICATE",children:"HTTP AUTHENTICATE"}),". Sin embargo, si desea que aparezca una caja de di\xe1logo de autenticaci\xf3n del usuario para que introduzca su nombre de usuario y contrase\xf1a, pase 1 en ",(0,r.jsx)(n.em,{children:"valor"}),". La caja de di\xe1logo aparece s\xf3lo si la solicitud requiere autenticaci\xf3n."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP follow redirect"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = 0 (no acepta redirecciones) o 1 (acepta redirecciones).",(0,r.jsx)(n.br,{}),"Valor por defecto = 2"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP max redirect"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = n\xfamero m\xe1ximo de redirecciones aceptadas",(0,r.jsx)(n.br,{}),"Valor por defecto = 2"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP reset auth settings"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = 0 (no borrar la informaci\xf3n) \xf3 1 (borrar). Por defecto: 0",(0,r.jsx)(n.br,{}),"Esta opci\xf3n permite indicar a 4D memorizar la informaci\xf3n de autenticaci\xf3n del usuario (nombre de usuario, contrase\xf1a, m\xe9todo, etc.) Con el fin de volver a usarlos m\xe1s adelante. Por defecto, esta informaci\xf3n se borra despu\xe9s de cada ejecuci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-get",title:"HTTP Get",children:"HTTP Get"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/http-request",title:"HTTP Request",children:"HTTP Request"}),". Pase 0 en ",(0,r.jsx)(n.em,{children:"valor"})," para memorizarlos y para borrarlos. Tenga en cuenta que cuando se pasa 0, la informaci\xf3n se conserva durante la sesi\xf3n, pero no se guarda."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP timeout"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valor"})," = timeout de la petici\xf3n del cliente, expresada en segundos. El time out es el tiempo de espera del cliente HTTP en caso de no respuesta por parte del servidor. Al final de este per\xedodo, el cliente cierra la sesi\xf3n, la petici\xf3n se pierde.",(0,r.jsx)(n.br,{}),"Por defecto, este tiempo es de 120 segundos. Puede cambiarse en funci\xf3n de caracter\xedsticas espec\xedficas (estado de la red, caracter\xedsticas de la aplicaci\xf3n, etc)."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"valor"}),", pase una variable para recibir el valor actual de la ",(0,r.jsx)(n.em,{children:"opcion"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/http-set-option",children:"HTTP SET OPTION"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1159"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);