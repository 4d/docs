"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52274"],{643439:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>i,assets:()=>t,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"ServerWindow/real-time-monitor","title":"P\xe1gina de seguimiento en tiempo real","description":"La p\xe1gina Monitor en tiempo real supervisa el progreso de las operaciones \\"largas\\" realizadas por la aplicaci\xf3n en tiempo real. Estas operaciones son, por ejemplo, consultas secuenciales, ejecuci\xf3n de f\xf3rmulas, etc.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/real-time-monitor.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/real-time-monitor","permalink":"/docs/es/ServerWindow/real-time-monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"real-time-monitor","title":"P\xe1gina de seguimiento en tiempo real"},"sidebar":"docs","previous":{"title":"P\xe1gina del servidor HTTP","permalink":"/docs/es/ServerWindow/http-server"},"next":{"title":"Administraci\xf3n desde m\xe1quinas remotas","permalink":"/docs/es/ServerWindow/remote-admin"}}'),s=a("785893"),r=a("250065");let o={id:"real-time-monitor",title:"P\xe1gina de seguimiento en tiempo real"},l=void 0,t={},c=[{value:"Modo avanzado",id:"modo-avanzado",level:2},{value:"Bot\xf3n Instant\xe1nea",id:"bot\xf3n-instant\xe1nea",level:2},{value:"Mostrar operaciones al menos 5 segundos",id:"mostrar-operaciones-al-menos-5-segundos",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'La p\xe1gina Monitor en tiempo real supervisa el progreso de las operaciones "largas" realizadas por la aplicaci\xf3n en tiempo real. Estas operaciones son, por ejemplo, consultas secuenciales, ejecuci\xf3n de f\xf3rmulas, etc.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(262689).Z+"",width:"700",height:"472"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Esta p\xe1gina est\xe1 disponible en la ventana de administraci\xf3n de la m\xe1quina servidor y tambi\xe9n desde una m\xe1quina 4D remota. En el caso de un equipo remoto, esta p\xe1gina muestra los datos de las operaciones realizadas en el equipo servidor."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Se a\xf1ade una l\xednea para cada operaci\xf3n larga realizada en los datos. Esta l\xednea desaparece autom\xe1ticamente cuando finaliza la operaci\xf3n (puede marcar la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Mostrar operaciones al menos 5 segundos"})," para conservar las operaciones r\xe1pidas en pantalla durante 5 segundos, ver abajo)."]}),"\n",(0,s.jsx)(n.p,{children:"La siguiente informaci\xf3n se ofrece para cada l\xednea:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hora de inicio"}),': hora de inicio de la operaci\xf3n en el formato "dd/mm/yyyy - hh:mm:ss"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Duraci\xf3n"})," (ms): duraci\xf3n en milisegundos de la operaci\xf3n en curso"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Informaci\xf3n"}),": t\xedtulo de la operaci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles"}),": esta \xe1rea muestra informaci\xf3n detallada que variar\xe1 en funci\xf3n del tipo de operaci\xf3n seleccionada. En particular:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Creada en"}),': indica si la operaci\xf3n es el resultado de una acci\xf3n del cliente (Creada en cliente) o si se inici\xf3 expl\xedcitamente en el servidor mediante un procedimiento almacenado o la opci\xf3n "Ejecutar en el servidor" (Creada en servidor).']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles de la operaci\xf3n"}),": tipo de operaci\xf3n y (para las operaciones de consulta) plan de b\xfasqueda."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suboperaciones"})," (si las hay): operaciones dependientes de la operaci\xf3n seleccionada (por ejemplo, eliminar registros relacionados antes que un registro padre)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles del proceso"}),": informaci\xf3n adicional relativa a la tabla, campo, proceso o cliente, en funci\xf3n del tipo de operaci\xf3n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Real-time monitoring page uses the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html",children:(0,s.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})})," command internally. Puede encontrar m\xe1s informaci\xf3n en la descripci\xf3n de este comando."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"La p\xe1gina est\xe1 activa y se actualiza permanentemente en cuanto se muestra. Cabe se\xf1alar que su funcionamiento puede ralentizar considerablemente la ejecuci\xf3n de la aplicaci\xf3n. Es posible suspender la actualizaci\xf3n de esta p\xe1gina de una de las siguientes maneras:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["haciendo clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Pausa"}),","]}),"\n",(0,s.jsx)(n.li,{children:"haciendo clic en la lista,"}),"\n",(0,s.jsx)(n.li,{children:"presionando la barra espaciadora."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['Al pausar la p\xe1gina, aparece el mensaje "PAUSED" y la etiqueta del bot\xf3n cambia a ',(0,s.jsx)(n.strong,{children:"Reanudar"}),".\nPuede reanudar el seguimiento de las operaciones realizando la misma acci\xf3n que para la pausa."]}),"\n",(0,s.jsx)(n.h2,{id:"modo-avanzado",children:"Modo avanzado"}),"\n",(0,s.jsx)(n.p,{children:"La p\xe1gina MTR puede mostrar informaci\xf3n adicional, si es necesario, para cada operaci\xf3n listada."}),"\n",(0,s.jsxs)(n.p,{children:["Para acceder al modo avanzado de una operaci\xf3n, presione ",(0,s.jsx)(n.strong,{children:"May\xfas"}),' y seleccione la operaci\xf3n deseada. All available information is then displayed in the "Process Details" area without any filtering (as returned by the ',(0,s.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})," command). La informaci\xf3n disponible depende de la operaci\xf3n seleccionada."]}),"\n",(0,s.jsx)(n.p,{children:"Este es un ejemplo de la informaci\xf3n que se muestra en el modo est\xe1ndar:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(607931).Z+"",width:"998",height:"293"})}),"\n",(0,s.jsxs)(n.p,{children:["En el modo avanzado (",(0,s.jsx)(n.strong,{children:"May\xfas+Clic"})," en la operaci\xf3n), se muestra informaci\xf3n adicional:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(2999).Z+"",width:"999",height:"288"})}),"\n",(0,s.jsx)(n.h2,{id:"bot\xf3n-instant\xe1nea",children:"Bot\xf3n Instant\xe1nea"}),"\n",(0,s.jsxs)(n.p,{children:["El bot\xf3n ",(0,s.jsx)(n.strong,{children:"Instant\xe1nea"})," permite copiar en el portapapeles todas las operaciones que se muestran en el panel RTM, as\xed como sus detalles relacionados (informaci\xf3n de procesos y suboperaciones):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(943498).Z+"",width:"140",height:"40"})}),"\n",(0,s.jsx)(n.h2,{id:"mostrar-operaciones-al-menos-5-segundos",children:"Mostrar operaciones al menos 5 segundos"}),"\n",(0,s.jsxs)(n.p,{children:["Si marca la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Mostrar operaciones al menos 5 segundos"}),", todas las operaciones listadas se mostrar\xe1n en la p\xe1gina durante al menos cinco segundos, incluso despu\xe9s de que finalice su ejecuci\xf3n. Las operaciones retenidas aparecen atenuadas en la lista de operaciones. Esta funci\xf3n es \xfatil para obtener informaci\xf3n sobre las operaciones que se ejecutan muy r\xe1pidamente."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},607931:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},2999:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},262689:function(e,n,a){a.d(n,{Z:function(){return i}});let i=a.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},943498:function(e,n,a){a.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return o}});var i=a(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);