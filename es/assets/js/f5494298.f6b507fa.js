"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40675"],{706419:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"ServerWindow/remote-admin","title":"Administraci\xf3n desde m\xe1quinas remotas","description":"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ServerWindow/remote-admin.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/remote-admin","permalink":"/docs/es/ServerWindow/remote-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"remote-admin","title":"Administraci\xf3n desde m\xe1quinas remotas"},"sidebar":"docs","previous":{"title":"P\xe1gina de seguimiento en tiempo real","permalink":"/docs/es/ServerWindow/real-time-monitor"},"next":{"title":"Web Administration","permalink":"/docs/es/category/web-administration"}}'),r=a("785893"),t=a("250065");let s={id:"remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas"},d=void 0,o={},c=[{value:"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota",id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota",level:2},{value:"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota",id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente."}),"\n",(0,r.jsx)(n.h2,{id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota",children:"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota"}),"\n",(0,r.jsx)(n.p,{children:"Para abrir una ventana de administraci\xf3n del servidor desde un equipo cliente, debe estar conectado a la base de datos remota como Dise\xf1ador o Administrador. De lo contrario, cuando intente abrir la ventana de administraci\xf3n, se generar\xe1 un error de privilegio (-9991)."}),"\n",(0,r.jsx)(n.p,{children:"Se puede acceder a esta ventana de dos maneras:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Seleccione el comando ",(0,r.jsx)(n.strong,{children:"Ventana de administraci\xf3n"})," del men\xfa ",(0,r.jsx)(n.strong,{children:"Ayuda"})," o haga clic en el bot\xf3n correspondiente de la barra de herramientas de 4D."]}),"\n",(0,r.jsxs)(n.li,{children:["Ejecute el comando ",(0,r.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A continuaci\xf3n, aparecer\xe1 una ",(0,r.jsx)(n.a,{href:"/docs/es/ServerWindow/monitor",children:"ventana de administraci\xf3n del servidor"})," en el equipo cliente."]}),"\n",(0,r.jsx)(n.h2,{id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota",children:"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota"}),"\n",(0,r.jsx)(n.p,{children:"Una m\xe1quina cliente que muestre la ventana de administraci\xf3n del servidor tiene acceso a toda la informaci\xf3n disponible y puede actuar sobre los procesos y el arranque/detenci\xf3n de los servidores. Cuando la ventana de administraci\xf3n del servidor se muestra en una m\xe1quina remota, existen no obstante ciertas restricciones y caracter\xedsticas espec\xedficas relativas a su funcionamiento:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["En la p\xe1gina ",(0,r.jsx)(n.a,{href:"/docs/es/ServerWindow/processes",children:"Proceso"}),", no es posible depurar un proceso de usuario (ya que la ventana de depuraci\xf3n aparece en la m\xe1quina del servidor)."]}),"\n",(0,r.jsxs)(n.li,{children:["En la p\xe1gina de mantenimiento ",(0,r.jsx)(n.a,{href:"/docs/es/ServerWindow/maintenance"}),", es posible ejecutar acciones que provocan la desconexi\xf3n de todos los clientes y el reinicio del servidor (operaciones de compactaci\xf3n y reinicio). En este caso, la m\xe1quina cliente que solicita la operaci\xf3n se reconecta autom\xe1ticamente al reiniciarse."]}),"\n",(0,r.jsxs)(n.li,{children:["En la ",(0,r.jsx)(n.a,{href:"/docs/es/ServerWindow/maintenance",children:"p\xe1gina Mantenimiento"}),", los botones ",(0,r.jsx)(n.strong,{children:"Ver informe"})," pasan a llamarse ",(0,r.jsx)(n.strong,{children:"Descargar informe"})," tras la ejecuci\xf3n de una operaci\xf3n de mantenimiento. Estos archivos se descargan en la carpeta local de la base de datos en la m\xe1quina cliente antes de ser visualizados."]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return s}});var i=a(667294);let r={},t=i.createContext(r);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);