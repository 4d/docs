"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25872"],{360661:function(e,a,n){n.r(a),n.d(a,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>t,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/discover-data-key","title":"Discover data key","description":"Discover data key  : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/discover-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/discover-data-key","permalink":"/docs/es/commands/discover-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdiscover-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"discover-data-key","title":"Discover data key","slug":"/commands/discover-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Decrypt data BLOB","permalink":"/docs/es/commands/decrypt-data-blob"},"next":{"title":"Encrypt data BLOB","permalink":"/docs/es/commands/encrypt-data-blob"}}'),d=n("785893"),r=n("250065");let o={id:"discover-data-key",title:"Discover data key",slug:"/commands/discover-data-key",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let a={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Discover data key"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Par\xe1metro"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(a.tbody,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Resultado"}),(0,d.jsx)(a.td,{children:"Boolean"}),(0,d.jsx)(a.td,{children:"\u2190"}),(0,d.jsx)(a.td,{children:"True si se ha encontrado una llave de cifrado v\xe1lida para el archivo de datos abierto actualmente, de lo contrario False"})]})})]}),"\n",(0,d.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(a.p,{children:["El comando ",(0,d.jsx)(a.strong,{children:"Discover data key"})," busca una llave de cifrado v\xe1lida correspondiente al archivo de datos abierto actualmente a nivel de la ra\xedz de todos los dispositivos conectados y devuelve ",(0,d.jsx)(a.strong,{children:"True"})," si es exitoso."]}),"\n",(0,d.jsx)(a.p,{children:"Los dispositivos conectados a buscar incluyen llaves USB o discos externos. Es necesaria una llave de cifrado v\xe1lida para permitir el acceso de lectura/escritura a una base de datos cifrada. Se puede llamar a este comando, por ejemplo, al iniciar la base de datos, despu\xe9s de que el usuario haya sido invitado a conectar una llave USB."}),"\n",(0,d.jsxs)(a.p,{children:['Los archivos llave (archivos de extensi\xf3n ".4DKeyChain") deben almacenarse en el nivel superior de los dispositivos conectados (la b\xfasqueda no pasar\xe1 por la jerarqu\xeda de carpetas). Las llaves de cifrado deben guardarse en formato JSON (ver ',(0,d.jsx)(a.em,{children:"Almacenamiento de llaves de cifrado de datos en archivos"})," en la ",(0,d.jsx)(a.em,{children:"Referencia de Dise\xf1o de 4D"}),")."]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.strong,{children:"Valor devuelto"})}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"True"})," si se encuentra una llave de cifrado v\xe1lida para el archivo de datos abierto actual, en cuyo caso:\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsx)(a.li,{children:"la llave de cifrado se aplica si es necesario para que los datos cifrados se puedan utilizar (acceso a las operaciones de lectura/escritura)."}),"\n",(0,d.jsx)(a.li,{children:"la llave de cifrado se agrega a la cadena 4D."}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"False"})," si no se encuentra una llave de cifrado v\xe1lida para el archivo de datos abierto actual, por lo que no es posible acceder a los datos."]}),"\n"]}),"\n",(0,d.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-4d",children:'\xa0var $status : Object\n\xa0var $keyFound : Boolean\n\xa0\n\xa0$status:=ds.encryptionStatus()\n\xa0\n\xa0If(($status.isEncrypted)&(Not($status.keyProvided)))\xa0//ninguna llave est\xe1 disponible\n\xa0\xa0// por lo tanto el acceso a los datos encriptados no est\xe1 permitido\n\xa0\xa0\xa0\xa0$keyFound:=Discover data key\n\xa0\xa0\xa0\xa0If($keyFound=True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Se ha encontrado una llave de encripci\xf3n v\xe1lida.")\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.a,{href:"/docs/es/commands/new-data-key",children:"New data key"})}),"\n",(0,d.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{}),(0,d.jsx)(a.th,{})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"N\xfamero de comando"}),(0,d.jsx)(a.td,{children:"1639"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"Hilo seguro"}),(0,d.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return o}});var s=n(667294);let d={},r=s.createContext(d);function o(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);