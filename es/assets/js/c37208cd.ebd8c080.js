"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79743"],{320660:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/http-set-option","title":"HTTP SET OPTION","description":"HTTP SET OPTION ( opcion ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/http-set-option.md","sourceDirName":"commands-legacy","slug":"/commands/http-set-option","permalink":"/docs/es/20-R8/commands/http-set-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-option.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"http-set-option","title":"HTTP SET OPTION","slug":"/commands/http-set-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP SET CERTIFICATES FOLDER","permalink":"/docs/es/20-R8/commands/http-set-certificates-folder"},"next":{"title":"Listas jer\xe1rquicas","permalink":"/docs/es/20-R8/commands/theme/Hierarchical-Lists"}}'),i=s("785893"),r=s("250065");let a={id:"http-set-option",title:"HTTP SET OPTION",slug:"/commands/http-set-option",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HTTP SET OPTION"})," ( ",(0,i.jsx)(n.em,{children:"opcion"})," ; ",(0,i.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"opcion"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"C\xf3digo de la opci\xf3n a definir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valor"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor de la opci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Compatibilidad",type:"info",children:(0,i.jsxs)(n.p,{children:["Este comando se mantiene s\xf3lo por razones de compatibilidad. Ahora se recomienda utilizar ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/API/HTTPRequestClass",children:(0,i.jsx)(n.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"HTTP SET OPTION"})," permite definir diferentes opciones utilizadas durante la pr\xf3xima petici\xf3n disparada por los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-get",children:"HTTP Get"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-request",children:"HTTP Request"}),". Puede llamar este comando tantas veces como opciones a definir."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": las opciones definidas son locales al proceso actual. Para componentes, son locales al componente en ejecuci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcion"})," el n\xfamero de la opci\xf3n a definir y en el par\xe1metro ",(0,i.jsx)(n.em,{children:"valor"})," el nuevo valor de esta opci\xf3n. Puede utilizar para el par\xe1metro ",(0,i.jsx)(n.em,{children:"opcion"})," una de las siguientes constantes, que se encuentran en el tema ",(0,i.jsx)(n.em,{children:"HTTP Client"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP client log"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"7"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"}),' = una de las siguientes constantes: HTTP disable log: el registro de depuraci\xf3n del cliente HTTP est\xe1 deshabilitado (por defecto) HTTP enable log with all body parts: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con las partes del cuerpo de la respuesta y de la petici\xf3n HTTP enable log with request body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con la parte del cuerpo de la petici\xf3n solamente HTTP enable log with response body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado con la parte del cuerpo en la respuesta solamente HTTP enable log without body: el registro de depuraci\xf3n del cliente HTTP est\xe1 habilitado sin partes del cuerpo (en este caso se suministra el tama\xf1o del cuerpo) Permite obtener o definir el estado del archivo de registro de peticiones del cliente HTTP. Cuando est\xe1 habilitado, este archivo, llamado "4DHTTPClientLog_nn.txt", se almacena en la carpeta "Logs" de la aplicaci\xf3n (nn es el n\xfamero de archivo). Es \xfatil para depurar problemas relacionados con las peticiones del cliente HTTP. Registra cada petici\xf3n y cada respuesta en modo raw. Se registran las peticiones completas, incluyendo los encabezados; opcionalmente, tambi\xe9n se pueden registrar las partes del cuerpo. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,i.jsx)(n.em,{children:"Descripci\xf3n de los archivos de registro"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP compression"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = 0 (no comprimir) \xf3 1 (comprimir). Por defecto: 0",(0,i.jsx)(n.br,{}),"Esta opci\xf3n activa o desactiva el mecanismo de compresi\xf3n de las peticiones entre el cliente y el servidor, para acelerar los intercambios. Cuando este mecanismo est\xe1 activo, el cliente HTTP utiliza la compresi\xf3n deflate o GZIP en funci\xf3n de la respuesta del servidor."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP display auth dial"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = 0 (no mostrar el di\xe1logo) o 1 (mostrar el di\xe1logo). Por defecto: 0",(0,i.jsx)(n.br,{}),"Esta opci\xf3n controla la visualizaci\xf3n de la caja de di\xe1logo de autenticaci\xf3n al ejecutar el comando HTTP Get o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-request",title:"HTTP Request",children:"HTTP Request"}),". Por defecto, este comando no provoca la visualizaci\xf3n de la caja de di\xe1logo, normalmente debe utilizar el comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-authenticate",title:"HTTP AUTHENTICATE",children:"HTTP AUTHENTICATE"}),". Sin embargo, si desea que aparezca una caja de di\xe1logo de autenticaci\xf3n del usuario para que introduzca su nombre de usuario y contrase\xf1a, pase 1 en ",(0,i.jsx)(n.em,{children:"valor"}),". La caja de di\xe1logo aparece s\xf3lo si la solicitud requiere autenticaci\xf3n."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP follow redirect"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = 0 (no acepta redirecciones) o 1 (acepta redirecciones).",(0,i.jsx)(n.br,{}),"Valor por defecto = 2"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP max redirect"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = n\xfamero m\xe1ximo de redirecciones aceptadas",(0,i.jsx)(n.br,{}),"Valor por defecto = 2"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP reset auth settings"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = 0 (no borrar la informaci\xf3n) \xf3 1 (borrar). Por defecto: 0",(0,i.jsx)(n.br,{}),"Esta opci\xf3n permite indicar a 4D memorizar la informaci\xf3n de autenticaci\xf3n del usuario (nombre de usuario, contrase\xf1a, m\xe9todo, etc.) Con el fin de volver a usarlos m\xe1s adelante. Por defecto, esta informaci\xf3n se borra despu\xe9s de cada ejecuci\xf3n del comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-get",title:"HTTP Get",children:"HTTP Get"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-request",title:"HTTP Request",children:"HTTP Request"}),". Pase 0 en ",(0,i.jsx)(n.em,{children:"valor"})," para memorizarlos y para borrarlos. Tenga en cuenta que cuando se pasa 0, la informaci\xf3n se conserva durante la sesi\xf3n, pero no se guarda."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTP timeout"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"valor"})," = timeout de la petici\xf3n del cliente, expresada en segundos. El time out es el tiempo de espera del cliente HTTP en caso de no respuesta por parte del servidor. Al final de este per\xedodo, el cliente cierra la sesi\xf3n, la petici\xf3n se pierde.",(0,i.jsx)(n.br,{}),"Por defecto, este tiempo es de 120 segundos. Puede cambiarse en funci\xf3n de caracter\xedsticas espec\xedficas (estado de la red, caracter\xedsticas de la aplicaci\xf3n, etc)."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"El orden de llamada de las opciones no tiene importancia. Si la misma opci\xf3n se define m\xe1s de una vez, s\xf3lo se tiene en cuenta el valor de la \xfaltima llamada."}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/http-get-option",children:"HTTP GET OPTION"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1160"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);