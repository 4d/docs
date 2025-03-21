"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48652"],{701445:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/locked-records-info","title":"Locked records info","description":"Locked records info ( laTabla ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/locked-records-info.md","sourceDirName":"commands-legacy","slug":"/commands/locked-records-info","permalink":"/docs/es/commands/locked-records-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked-records-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"locked-records-info","title":"Locked records info","slug":"/commands/locked-records-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOCKED BY","permalink":"/docs/es/commands/locked-by"},"next":{"title":"READ ONLY","permalink":"/docs/es/commands/read-only"}}'),s=d("785893"),i=d("250065");let o={id:"locked-records-info",title:"Locked records info",slug:"/commands/locked-records-info",displayed_sidebar:"docs"},l=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Locked records info"})," ( ",(0,s.jsx)(n.em,{children:"laTabla"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"laTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla de la cual obtener los registros bloqueados"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Descripci\xf3n de los registros bloqueados (si los hay)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"Locked records info"})," devuelve un objeto que contiene diferente informaci\xf3n sobre los registros bloqueados actualmente en ",(0,s.jsx)(n.em,{children:"laTabla"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),': el comando funciona solo con 4D y 4D Server. Devuelve un objeto no v\xe1lido cuando se llama desde un 4D remoto. Sin embargo, puede llamarse en este contexto si la opci\xf3n "Ejecutar en servidor" est\xe1 activada para el m\xe9todo de llamada. En este caso, el objeto devuelto contendr\xe1 informaci\xf3n sobre el servidor. Cuando se llama desde un componente, siempre se aplica a la base local.']}),"\n",(0,s.jsx)(n.p,{children:'El objeto devuelto contiene una propiedad "registros", que es una colecci\xf3n de objetos:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0 \xa0\xa0\xa0 objeto descripci\xf3n,\xa0\xa0\xa0 \xa0\xa0\xa0 (\u2026)\xa0\xa0\xa0 ]}\n'})}),"\n",(0,s.jsx)(n.p,{children:'Cada elemento de la colecci\xf3n "description object" identifica un registro bloqueado en la tabla especificada. Contiene diferentes propiedades dependiendo del origen del bloqueo (proceso 4D o REST API).'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el registro fue bloqueado por un proceso 4D:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contextID"}),(0,s.jsx)(n.td,{children:"UUID (Cadena)"}),(0,s.jsx)(n.td,{children:"UUID del contexto de la base responsable del bloqueo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contextAttributes"}),(0,s.jsx)(n.td,{children:"Objeto"}),(0,s.jsxs)(n.td,{children:["Objeto que contiene la misma informaci\xf3n que el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/locked-by",children:"LOCKED BY"})," aplicado al registro, la diferencia es que ",(0,s.jsx)(n.strong,{children:"Locked records info"})," devuelve el nombre del usuario definido en el sistema y no el del usuario 4D, as\xed como tambi\xe9n informaci\xf3n adicional (ver m\xe1s adelante)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordNumber"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"N\xfamero de registro del registro bloqueado"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["El objeto ",(0,s.jsx)(n.em,{children:"contextAttributes"})," se compone de las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"task_id"}),(0,s.jsx)(n.td,{children:"N\xfamero"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user_name"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:"Nombre del usuario definido en el sistema operativo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user4d_alias"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:"Alias de usuario definido con SET USER ALIAS, o bien nombre de usuario en el directorio de la base 4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user4d_id"}),(0,s.jsx)(n.td,{children:"N\xfamero"}),(0,s.jsx)(n.td,{children:"N\xfamero del usuario 4D(*)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"host_name"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:"Nombre de la m\xe1quina local"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"task_name"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:"Nombre del proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"client_version"}),(0,s.jsx)(n.td,{children:"N\xfamero"}),(0,s.jsx)(n.td,{children:"Versi\xf3n de la aplicaci\xf3n cliente"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\xdanicamente cuando el comando se ejecuta en 4D Server y si el bloqueo del registro proviene de un 4D remoto:"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"is_remote_context"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsxs)(n.td,{children:["Indica si un el origen del bloqueo es un 4D remoto (siempre ",(0,s.jsx)(n.em,{children:"true"})," ya que de lo contrario no est\xe1 presente)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"client_uid"}),(0,s.jsx)(n.td,{children:"UUID (Cadena)"}),(0,s.jsx)(n.td,{children:"UUID del 4D remoto en el origen del bloqueo"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(*) Solo devuelto en bases binarias. Puede obtener el nombre del usuario 4D a partir del valor de ",(0,s.jsx)(n.em,{children:"user4d_id"})," utilizando el siguiente c\xf3digo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0GET USER LIST($arrNames;$arrIDs)\n\xa0$User4DName:=Find in array($arrIDs;user4d_id)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si el registro fue bloqueado por la ",(0,s.jsx)(n.em,{children:"petici\xf3n $lock REST"})," (a nivel de sesi\xf3n):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"host"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:'URL con la que se ha bloqueado la entidad, p. Ej. "127.0.0.1:8044"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IPAddr"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:'Direcci\xf3n IP utilizada en la URL con la que se ha bloqueado la entidad, p. Ej. "127.0.0.1"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordNumber"}),(0,s.jsx)(n.td,{children:"Entero"}),(0,s.jsx)(n.td,{children:"N\xfamero de registro del registro bloqueado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"userAgent"}),(0,s.jsx)(n.td,{children:"Cadena"}),(0,s.jsx)(n.td,{children:'Agente de usuario del locker, e.g. "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"'})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Ejecute el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vOlocked :=Locked records info([Table])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Si dos registros est\xe1n bloqueados en la tabla [Table], el siguiente objeto se devuelve en $vOlocked:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0 "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 8,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "roland",\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac de roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "P_RandomLock",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1342106592\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber": 1\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextID": "8916338D1B8A4D86B857D92F593CCAC3",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "host_name": "iMac de roland",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "P_RandomLock",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1342106592\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "recordNumber": 2\xa0\xa0\xa0 \xa0\xa0\xa0 }\xa0\xa0\xa0 ]}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Si el c\xf3digo se ejecuta en un 4D Server y el bloqueo es causado por una m\xe1quina cliente remota, el siguiente objeto es devuelto en $vOlocked:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\xa0\xa0\xa0 "records": [\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "contextAttributes": {\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_id": 2,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user_name": "achim",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user4d_id": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "host_name": "achim-pcwin",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_name": "P_RandomLock",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "is_remote_context": true,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_uid": "0696E66F6CD731468E6XXX581A87554A",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_version": -268364752\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "recordNumber": 1\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\xa0\xa0\xa0 ]}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/locked",children:"Locked"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1316"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return o}});var r=d(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);