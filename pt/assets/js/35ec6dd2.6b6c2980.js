"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46038"],{652550:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>i,assets:()=>s,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"ServerWindow/remote-admin","title":"Administra\xe7\xe3o a partir de m\xe1quinas remotas","description":"Pode administrar a aplica\xe7\xe3o 4D Server a partir de um 4D remoto (m\xe1quina cliente) abrindo a janela de administra\xe7\xe3o do 4D Server na m\xe1quina cliente.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ServerWindow/remote-admin.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/remote-admin","permalink":"/docs/pt/20-R7/ServerWindow/remote-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"remote-admin","title":"Administra\xe7\xe3o a partir de m\xe1quinas remotas"},"sidebar":"docs","previous":{"title":"P\xe1gina do monitor em tempo real","permalink":"/docs/pt/20-R7/ServerWindow/real-time-monitor"},"next":{"title":"Web Administration","permalink":"/docs/pt/20-R7/category/web-administration"}}'),r=a("785893"),t=a("250065");let o={id:"remote-admin",title:"Administra\xe7\xe3o a partir de m\xe1quinas remotas"},d=void 0,s={},c=[{value:"Abrir a janela de administra\xe7\xe3o numa m\xe1quina 4D remota",id:"abrir-a-janela-de-administra\xe7\xe3o-numa-m\xe1quina-4d-remota",level:2},{value:"Especificidades da administra\xe7\xe3o via uma m\xe1quina 4D remota",id:"especificidades-da-administra\xe7\xe3o-via-uma-m\xe1quina-4d-remota",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Pode administrar a aplica\xe7\xe3o 4D Server a partir de um 4D remoto (m\xe1quina cliente) abrindo a janela de administra\xe7\xe3o do 4D Server na m\xe1quina cliente."}),"\n",(0,r.jsx)(n.h2,{id:"abrir-a-janela-de-administra\xe7\xe3o-numa-m\xe1quina-4d-remota",children:"Abrir a janela de administra\xe7\xe3o numa m\xe1quina 4D remota"}),"\n",(0,r.jsx)(n.p,{children:"Para abrir uma janela de administra\xe7\xe3o do servidor a partir de uma m\xe1quina cliente, \xe9 necess\xe1rio estar ligado \xe0 banco de dados remoto como Desenhador ou Administrador. Caso contr\xe1rio, quando tentar abrir a janela de administra\xe7\xe3o, \xe9 gerado um erro de privil\xe9gio (-9991)."}),"\n",(0,r.jsx)(n.p,{children:"Esta janela pode ser acedida de duas maneiras:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Seleccione el comando ",(0,r.jsx)(n.strong,{children:"Ventana de administraci\xf3n"})," del men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," o haga clic en el bot\xf3n correspondiente de la barra de herramientas de 4D."]}),"\n",(0,r.jsxs)(n.li,{children:["Ejecute el comando ",(0,r.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n, aparecer\xe1 una ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/ServerWindow/monitor",children:"ventana de administraci\xf3n del servidor"})," en el equipo cliente."]}),"\n",(0,r.jsx)(n.h2,{id:"especificidades-da-administra\xe7\xe3o-via-uma-m\xe1quina-4d-remota",children:"Especificidades da administra\xe7\xe3o via uma m\xe1quina 4D remota"}),"\n",(0,r.jsx)(n.p,{children:"A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En la p\xe1gina ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/ServerWindow/processes",children:"Proceso"}),", no es posible depurar un proceso de usuario (ya que la ventana de depuraci\xf3n aparece en la m\xe1quina del servidor)."]}),"\n",(0,r.jsxs)(n.li,{children:["En la p\xe1gina de mantenimiento ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/ServerWindow/maintenance"}),", es posible ejecutar acciones que provocan la desconexi\xf3n de todos los clientes y el reinicio del servidor (operaciones de compactaci\xf3n y reinicio). In this case, the client machine requesting the operation is automatically reconnected on restarting."]}),"\n",(0,r.jsxs)(n.li,{children:["En la ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/ServerWindow/maintenance",children:"p\xe1gina Mantenimiento"}),", los botones ",(0,r.jsx)(n.strong,{children:"Ver informe"})," pasan a llamarse ",(0,r.jsx)(n.strong,{children:"Descargar informe"})," tras la ejecuci\xf3n de una operaci\xf3n de mantenimiento. These files are downloaded into the local database folder on the client machine before being displayed."]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return o}});var i=a(667294);let r={},t=i.createContext(r);function o(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);