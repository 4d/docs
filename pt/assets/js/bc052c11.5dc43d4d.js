"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93541"],{693989:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"ServerWindow/real-time-monitor","title":"P\xe1gina do monitor em tempo real","description":"A p\xe1gina do Monitor em Tempo Real monitora o progresso de opera\xe7\xf5es \\"longas\\" realizadas pela aplica\xe7\xe3o em tempo real. Estas opera\xe7\xf5es s\xe3o, por exemplo, consultas sequenciais, execu\xe7\xe3o de f\xf3rmulas, etc.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ServerWindow/real-time-monitor.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/real-time-monitor","permalink":"/docs/pt/20-R8/ServerWindow/real-time-monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"real-time-monitor","title":"P\xe1gina do monitor em tempo real"},"sidebar":"docs","previous":{"title":"P\xe1gina Servidor HTTP","permalink":"/docs/pt/20-R8/ServerWindow/http-server"},"next":{"title":"Administra\xe7\xe3o a partir de m\xe1quinas remotas","permalink":"/docs/pt/20-R8/ServerWindow/remote-admin"}}'),s=a("785893"),r=a("250065");let i={id:"real-time-monitor",title:"P\xe1gina do monitor em tempo real"},t=void 0,d={},l=[{value:"Modo avan\xe7ado",id:"modo-avan\xe7ado",level:2},{value:"Bot\xe3o instant\xe2nea",id:"bot\xe3o-instant\xe2nea",level:2},{value:"Mostrar opera\xe7\xf5es durante pelo menos 5 segundos",id:"mostrar-opera\xe7\xf5es-durante-pelo-menos-5-segundos",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'A p\xe1gina do Monitor em Tempo Real monitora o progresso de opera\xe7\xf5es "longas" realizadas pela aplica\xe7\xe3o em tempo real. Estas opera\xe7\xf5es s\xe3o, por exemplo, consultas sequenciais, execu\xe7\xe3o de f\xf3rmulas, etc.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(21948).Z+"",width:"700",height:"472"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Esta p\xe1gina est\xe1 dispon\xedvel na janela de administra\xe7\xe3o da m\xe1quina do servidor e tamb\xe9m de uma m\xe1quina 4D remota. No caso de uma m\xe1quina remota, esta p\xe1gina exibe dados de opera\xe7\xf5es realizadas na m\xe1quina do servidor."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\xc9 acrescentada uma linha para cada opera\xe7\xe3o longa efetuada nos dados. Esta l\xednea desaparece autom\xe1ticamente cuando finaliza la operaci\xf3n (puede marcar la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Mostrar operaciones al menos 5 segundos"})," para conservar las operaciones r\xe1pidas en pantalla durante 5 segundos, ver abajo)."]}),"\n",(0,s.jsx)(n.p,{children:"As informa\xe7\xf5es seguintes s\xe3o fornecidas para cada linha:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hora de inicio"}),': hora de inicio de la operaci\xf3n en el formato "dd/mm/yyyy - hh:mm:ss"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Duraci\xf3n"})," (ms): duraci\xf3n en milisegundos de la operaci\xf3n en curso"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Informaci\xf3n"}),": t\xedtulo de la operaci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles"}),": esta \xe1rea muestra informaci\xf3n detallada que variar\xe1 en funci\xf3n del tipo de operaci\xf3n seleccionada. Mais especificamente:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Creada en"}),': indica si la operaci\xf3n es el resultado de una acci\xf3n del cliente (Creada en cliente) o si se inici\xf3 expl\xedcitamente en el servidor mediante un procedimiento almacenado o la opci\xf3n "Ejecutar en el servidor" (Creada en servidor).']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles de la operaci\xf3n"}),": tipo de operaci\xf3n y (para las operaciones de consulta) plan de b\xfasqueda."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suboperaciones"})," (si las hay): operaciones dependientes de la operaci\xf3n seleccionada (por ejemplo, eliminar registros relacionados antes que un registro padre)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detalles del proceso"}),": informaci\xf3n adicional relativa a la tabla, campo, proceso o cliente, en funci\xf3n del tipo de operaci\xf3n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Real-time monitoring page uses the ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html",children:(0,s.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})})," command internally. Para mais informa\xe7\xf5es, consultar a descri\xe7\xe3o deste comando."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A p\xe1gina est\xe1 ativa e \xe9 atualizada permanentemente assim que \xe9 exibida. Note-se que o seu funcionamento pode atrasar significativamente a execu\xe7\xe3o da aplica\xe7\xe3o. \xc9 poss\xedvel suspender a atualiza\xe7\xe3o desta p\xe1gina de uma das seguintes maneiras:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["haciendo clic en el bot\xf3n ",(0,s.jsx)(n.strong,{children:"Pausa"}),","]}),"\n",(0,s.jsx)(n.li,{children:"clicando na lista,"}),"\n",(0,s.jsx)(n.li,{children:"premindo a barra de espa\xe7os."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['Al pausar la p\xe1gina, aparece el mensaje "PAUSED" y la etiqueta del bot\xf3n cambia a ',(0,s.jsx)(n.strong,{children:"Reanudar"}),".\nVoc\xea pode retomar o monitoramento das opera\xe7\xf5es realizando a mesma a\xe7\xe3o que realizar a pausa."]}),"\n",(0,s.jsx)(n.h2,{id:"modo-avan\xe7ado",children:"Modo avan\xe7ado"}),"\n",(0,s.jsx)(n.p,{children:"A p\xe1gina RTM pode exibir informa\xe7\xf5es adicionais, se necess\xe1rio, para cada opera\xe7\xe3o listada."}),"\n",(0,s.jsxs)(n.p,{children:["Para acceder al modo avanzado de una operaci\xf3n, presione ",(0,s.jsx)(n.strong,{children:"May\xfas"}),' y seleccione la operaci\xf3n deseada. All available information is then displayed in the "Process Details" area without any filtering (as returned by the ',(0,s.jsx)(n.code,{children:"ACTIVITY SNAPSHOT"})," command). A informa\xe7\xe3o dispon\xedvel depende da opera\xe7\xe3o selecionada."]}),"\n",(0,s.jsx)(n.p,{children:"Eis um exemplo de informa\xe7\xf5es apresentadas no modo padr\xe3o:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(798180).Z+"",width:"998",height:"293"})}),"\n",(0,s.jsxs)(n.p,{children:["En el modo avanzado (",(0,s.jsx)(n.strong,{children:"May\xfas+Clic"})," en la operaci\xf3n), se muestra informaci\xf3n adicional:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(871672).Z+"",width:"999",height:"288"})}),"\n",(0,s.jsx)(n.h2,{id:"bot\xe3o-instant\xe2nea",children:"Bot\xe3o instant\xe2nea"}),"\n",(0,s.jsxs)(n.p,{children:["El bot\xf3n ",(0,s.jsx)(n.strong,{children:"Instant\xe1nea"})," permite copiar en el portapapeles todas las operaciones que se muestran en el panel RTM, as\xed como sus detalles relacionados (informaci\xf3n de procesos y suboperaciones):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:a(881069).Z+"",width:"140",height:"40"})}),"\n",(0,s.jsx)(n.h2,{id:"mostrar-opera\xe7\xf5es-durante-pelo-menos-5-segundos",children:"Mostrar opera\xe7\xf5es durante pelo menos 5 segundos"}),"\n",(0,s.jsxs)(n.p,{children:["Si marca la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Mostrar operaciones al menos 5 segundos"}),", todas las operaciones listadas se mostrar\xe1n en la p\xe1gina durante al menos cinco segundos, incluso despu\xe9s de que finalice su ejecuci\xf3n. As opera\xe7\xf5es retidas aparecem esbatidas na lista de opera\xe7\xf5es. Esta funcionalidade \xe9 \xfatil para obter informa\xe7\xf5es sobre opera\xe7\xf5es que s\xe3o executadas muito rapidamente."]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},798180:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},871672:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},21948:function(e,n,a){a.d(n,{Z:function(){return o}});let o=a.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},881069:function(e,n,a){a.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return i}});var o=a(667294);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);