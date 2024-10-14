"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21808],{16358:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=a(474848),r=a(28453);const s={id:"remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas"},t=void 0,d={id:"ServerWindow/remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas",description:"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/ServerWindow/remote-admin.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/remote-admin",permalink:"/docs/es/20/ServerWindow/remote-admin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"remote-admin",title:"Administraci\xf3n desde m\xe1quinas remotas"},sidebar:"docs",previous:{title:"P\xe1gina de seguimiento en tiempo real",permalink:"/docs/es/20/ServerWindow/real-time-monitor"},next:{title:"Web Administration",permalink:"/docs/es/20/category/web-administration"}},o={},c=[{value:"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota",id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota",level:2},{value:"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota",id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Puede administrar la aplicaci\xf3n 4D Server desde un 4D remoto (m\xe1quina cliente) abriendo la ventana de administraci\xf3n de 4D Server en la m\xe1quina cliente."}),"\n",(0,i.jsx)(n.h2,{id:"abrir-la-ventana-de-administraci\xf3n-en-una-m\xe1quina-4d-remota",children:"Abrir la ventana de administraci\xf3n en una m\xe1quina 4D remota"}),"\n",(0,i.jsx)(n.p,{children:"Para abrir una ventana de administraci\xf3n del servidor desde un equipo cliente, debe estar conectado a la base de datos remota como Dise\xf1ador o Administrador. De lo contrario, cuando intente abrir la ventana de administraci\xf3n, se generar\xe1 un error de privilegio (-9991)."}),"\n",(0,i.jsx)(n.p,{children:"Se puede acceder a esta ventana de dos maneras:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Seleccione el comando ",(0,i.jsx)(n.strong,{children:"Ventana de administraci\xf3n"})," del men\xfa ",(0,i.jsx)(n.strong,{children:"Ayuda"})," o haga clic en el bot\xf3n correspondiente de la barra de herramientas de 4D."]}),"\n",(0,i.jsxs)(n.li,{children:["Ejecute el comando ",(0,i.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A continuaci\xf3n, aparecer\xe1 una ",(0,i.jsx)(n.a,{href:"/docs/es/20/ServerWindow/monitor",children:"ventana de administraci\xf3n del servidor"})," en el equipo cliente."]}),"\n",(0,i.jsx)(n.h2,{id:"especificidades-de-la-administraci\xf3n-a-trav\xe9s-de-una-m\xe1quina-4d-remota",children:"Especificidades de la administraci\xf3n a trav\xe9s de una m\xe1quina 4D remota"}),"\n",(0,i.jsx)(n.p,{children:"Una m\xe1quina cliente que muestre la ventana de administraci\xf3n del servidor tiene acceso a toda la informaci\xf3n disponible y puede actuar sobre los procesos y el arranque/detenci\xf3n de los servidores. Cuando la ventana de administraci\xf3n del servidor se muestra en una m\xe1quina remota, existen no obstante ciertas restricciones y caracter\xedsticas espec\xedficas relativas a su funcionamiento:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En la p\xe1gina ",(0,i.jsx)(n.a,{href:"/docs/es/20/ServerWindow/processes",children:"Proceso"}),", no es posible depurar un proceso de usuario (ya que la ventana de depuraci\xf3n aparece en la m\xe1quina del servidor)."]}),"\n",(0,i.jsxs)(n.li,{children:["En la p\xe1gina de mantenimiento ",(0,i.jsx)(n.a,{href:"/docs/es/20/ServerWindow/maintenance"}),", es posible ejecutar acciones que provocan la desconexi\xf3n de todos los clientes y el reinicio del servidor (operaciones de compactaci\xf3n y reinicio). En este caso, la m\xe1quina cliente que solicita la operaci\xf3n se reconecta autom\xe1ticamente al reiniciarse."]}),"\n",(0,i.jsxs)(n.li,{children:["En la ",(0,i.jsx)(n.a,{href:"/docs/es/20/ServerWindow/maintenance",children:"p\xe1gina Mantenimiento"}),", los botones ",(0,i.jsx)(n.strong,{children:"Ver informe"})," pasan a llamarse ",(0,i.jsx)(n.strong,{children:"Descargar informe"})," tras la ejecuci\xf3n de una operaci\xf3n de mantenimiento. Estos archivos se descargan en la carpeta local de la base de datos en la m\xe1quina cliente antes de ser visualizados."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>d});var i=a(296540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);