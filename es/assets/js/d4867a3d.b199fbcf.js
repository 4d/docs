"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55226"],{826985:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/quit-4d","title":"QUIT 4D","description":"QUIT 4D {( tiempo )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/quit-4d.md","sourceDirName":"commands-legacy","slug":"/commands/quit-4d","permalink":"/docs/es/commands/quit-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquit-4d.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"quit-4d","title":"QUIT 4D","slug":"/commands/quit-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLUGIN LIST","permalink":"/docs/es/commands/plugin-list"},"next":{"title":"REJECT NEW REMOTE CONNECTIONS","permalink":"/docs/es/commands/reject-new-remote-connections"}}'),s=o("785893"),r=o("250065");let i={id:"quit-4d",title:"QUIT 4D",slug:"/commands/quit-4d",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Con 4D modo local y 4D modo remoto",id:"con-4d-modo-local-y-4d-modo-remoto",level:5},{value:"Con 4D Server (procedimiento almacenado)",id:"con-4d-server-procedimiento-almacenado",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUIT 4D"})," {( ",(0,s.jsx)(n.em,{children:"tiempo"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tiempo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tiempo en segundos antes de salir del servidor"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando QUIT 4D sale de la aplicaci\xf3n 4D y regresa al escritorio."}),"\n",(0,s.jsx)(n.p,{children:"El proceso del comando es diferente si se ejecuta en 4D (modo local o remoto) o en 4D Server."}),"\n",(0,s.jsx)(n.h5,{id:"con-4d-modo-local-y-4d-modo-remoto",children:"Con 4D modo local y 4D modo remoto"}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de llamar QUIT 4D, se detiene la ejecuci\xf3n del proceso actual, luego 4D efect\xfaa las siguientes operaciones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si hay un ",(0,s.jsx)(n.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"}),", 4D comienza a ejecutar este m\xe9todo dentro de un nuevo proceso local. Por ejemplo, puede utilizar este m\xe9todo base para informar a otros procesos, v\xeda comunicaci\xf3n interproceso, que deben cerrar (entrada de datos) o detener la ejecuci\xf3n de operaciones iniciadas por el ",(0,s.jsx)(n.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"})," (conexi\xf3n de 4D a otro servidor de bases de datos). Tenga en cuenta que 4D se cerrar\xe1 en todo caso; el ",(0,s.jsx)(n.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"})," puede realizar la limpieza y cierre de todas las operaciones, pero el cierre de la base es ineludible."]}),"\n",(0,s.jsxs)(n.li,{children:["Si no hay ",(0,s.jsx)(n.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"}),", 4D cierra cada proceso en curso, uno por uno, sin distinci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Si el usuario est\xe1 introduciendo datos, los registros se cancelar\xe1n y no se guardar\xe1n.",(0,s.jsx)(n.br,{}),"\nSi quiere permitirle al usuario guardar las modificaciones efectuadas en las ventanas del proceso actual, puede utilizar la comunicaci\xf3n interproceso para indicar a todos los otros procesos de usuario que la base est\xe1 a punto de cerrarse. Para hacer esto, puede adoptar dos estrategias:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Efectuar estas operaciones desde el proceso actual antes de llamar QUIT 4D."}),"\n",(0,s.jsxs)(n.li,{children:["Manejar estas operaciones desde el ",(0,s.jsx)(n.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Tambi\xe9n es posible una tercera estrategia. Antes de llamar QUIT 4D, pruebe si una ventana necesita validaci\xf3n; si ese es el caso, pida al usuario validar o cancelar esta ventana y luego seleccionar nuevamente Salir. Sin embargo, desde el punto de vista de la interfaz del usuario, las primeras dos estrategias son preferibles."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro ",(0,s.jsx)(n.em,{children:"tiempo"})," no puede utilizarse con 4D en modo local o remoto."]}),"\n",(0,s.jsx)(n.h5,{id:"con-4d-server-procedimiento-almacenado",children:"Con 4D Server (procedimiento almacenado)"}),"\n",(0,s.jsxs)(n.p,{children:["El comando QUIT 4D puede ejecutarse en el equipo servidor, en un proceso almacenado. En este caso, acepta el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"tiempo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro ",(0,s.jsx)(n.em,{children:"tiempo"})," le da un tiempo de espera a 4D Server antes de que la aplicaci\xf3n se cierre realmente, permitiendo a los equipos cliente desconectarse. Debe pasar un valor en segundos en ",(0,s.jsx)(n.em,{children:"tiempo"}),". Este par\xe1metro s\xf3lo se tiene en cuenta durante una ejecuci\xf3n en el equipo servidor. Se ignora en 4D en modo local o remoto."]}),"\n",(0,s.jsxs)(n.p,{children:["Si no pasa un par\xe1metro para ",(0,s.jsx)(n.em,{children:"tiempo"}),", 4D Server esperar\xe1 hasta que todos los equipos cliente est\xe9n desconectados antes de salir."]}),"\n",(0,s.jsx)(n.p,{children:"A diferencia de 4D, el proceso de QUIT 4D por 4D Server es asincr\xf3nico: el m\xe9todo desde donde se llama el comando no se interrumpe despu\xe9s de su ejecuci\xf3n."}),"\n",(0,s.jsxs)(n.p,{children:["Si hay un ",(0,s.jsx)(n.em,{children:"M\xe9todo base On Server Shutdown"}),", se ejecuta despu\xe9s del tiempo definido por el par\xe1metro ",(0,s.jsx)(n.em,{children:"tiempo"}),", o despu\xe9s de que todos los clientes se hayan desconectado, dependiendo de sus par\xe1metros."]}),"\n",(0,s.jsx)(n.p,{children:"La acci\xf3n del comando QUIT 4D utilizada en un procedimiento almacenado es la misma del comando Salir del men\xfa Archivo de 4D Server: provoca la aparici\xf3n de una caja de di\xe1logo en cada equipo cliente indicando que el servidor est\xe1 a punto de cerrar."}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de proyecto siguiente est\xe1 asociado al elemento de men\xfa Salir en el men\xfa Archivo."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto M_SALIR\n\xa0\n\xa0CONFIRM("\xbfEst\xe1 seguro de que quiere salir?")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"metodo-base-on-exit.md",children:"M\xe9todo base On Exit"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return i}});var a=o(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);