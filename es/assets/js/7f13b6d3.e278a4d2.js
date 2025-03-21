"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89105"],{76340:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/users-to-blob","title":"USERS TO BLOB","description":"USERS TO BLOB ( usuarios )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/users-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/users-to-blob","permalink":"/docs/es/20-R7/commands/users-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fusers-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"users-to-blob","title":"USERS TO BLOB","slug":"/commands/users-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"User in group","permalink":"/docs/es/20-R7/commands/user-in-group"},"next":{"title":"Validate password","permalink":"/docs/es/20-R7/commands/validate-password"}}'),a=s("785893"),o=s("250065");let d={id:"users-to-blob",title:"USERS TO BLOB",slug:"/commands/users-to-blob",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"USERS TO BLOB"})," ( ",(0,a.jsx)(n.em,{children:"usuarios"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"usuarios"}),(0,a.jsx)(n.td,{children:"Blob"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"BLOB que debe contener los usuarios"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Cuentas de usuarios (encriptado)"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.em,{children:"Nota de compatibilidad"}),": este comando solo funciona en bases de datos binarias. Siempre devuelve un BLOB vac\xedo en proyectos."]})}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"USERS TO BLOB"})," guarda en el BLOB ",(0,a.jsx)(n.em,{children:"usuarios"})," la lista de todas las cuentas de usuarios y los grupos de la base creados por el Administrador."]}),"\n",(0,a.jsx)(n.p,{children:"S\xf3lo el Administrador y el Dise\xf1ador de la base pueden ejecutar este comando. Si otro usuario intenta ejecutarlo, el comando no hace nada y se genera un error de privilegio (-9949)."}),"\n",(0,a.jsxs)(n.p,{children:["El BLOB generado se encripta autom\xe1ticamente y s\xf3lo puede ser le\xeddo utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-to-users",children:"BLOB TO USERS"}),". Puede almacenar este BLOB en un archivo en su disco duro o en un campo."]}),"\n",(0,a.jsx)(n.p,{children:"Este comando es el equivalente al registro de los grupos y usuarios desde la ventana de gesti\xf3n de los grupos de la Caja de herramientas. La \xfanica diferencia es que permite almacenar cuentas de usuarios en un campo BLOB y no \xfanicamente en un archivo."}),"\n",(0,a.jsx)(n.p,{children:"Este concepto permite conservar un backup de usuarios en la base e implementar un mecanismo de backup como tambi\xe9n un sistema para cargar autom\xe1ticamente a los usuarios en caso de una actualizaci\xf3n de la estructura de la base (la informaci\xf3n relacionada con las cuentas de usuario se son guardadas por 4D en el archivo de estructura de la base)."}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/blob-to-users",children:"BLOB TO USERS"})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"849"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var r=s(667294);let a={},o=r.createContext(a);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);