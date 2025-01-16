"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77112"],{481121:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>t,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/send-packet","title":"SEND PACKET","description":"SEND PACKET ( {docRef ;} paquete )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/send-packet.md","sourceDirName":"commands-legacy","slug":"/commands/send-packet","permalink":"/docs/es/commands/send-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-packet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-packet","title":"SEND PACKET","slug":"/commands/send-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE VARIABLE","permalink":"/docs/es/commands/receive-variable"},"next":{"title":"SEND RECORD","permalink":"/docs/es/commands/send-record"}}'),c=o("785893"),a=o("250065");let d={id:"send-packet",title:"SEND PACKET",slug:"/commands/send-packet",displayed_sidebar:"docs"},r=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"SEND PACKET"})," ( {",(0,c.jsx)(n.em,{children:"docRef"})," ;} ",(0,c.jsx)(n.em,{children:"paquete"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"docRef"}),(0,c.jsx)(n.td,{children:"Time"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"N\xfamero de referencia del documento o canal actual (puerto serial o documento)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"paquete"}),(0,c.jsx)(n.td,{children:"Text, Blob"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Cadena o BLOB a enviar"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando SEND PACKET env\xeda un paquete a un puerto serial o a un documento. Si ",(0,c.jsx)(n.em,{children:"docRef"})," se especifica, el paquete se escribe en el documento referenciado por ",(0,c.jsx)(n.em,{children:"docRef"}),". Si ",(0,c.jsx)(n.em,{children:"docRef"})," no se especifica, el paquete se escribe para el puerto serial o documento previamente abierto por el comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Un ",(0,c.jsx)(n.em,{children:"paquete"})," es s\xf3lo una serie simple de datos, generalmente una cadena de caracteres."]}),"\n",(0,c.jsxs)(n.p,{children:["Tambi\xe9n puede pasar un BLOB en ",(0,c.jsx)(n.em,{children:"paquete"}),". Esto le permite evitar las restricciones relacionadas con la codificaci\xf3n de los caracteres enviados en modo texto (ver ejemplo 2)."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"})," cuando pasa un BLOB en ",(0,c.jsx)(n.em,{children:"paquete"}),", el comando no tiene en cuenta ning\xfan conjunto de caracteres definido por el comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"}),". El BLOB se env\xeda sin ninguna modificaci\xf3n."]}),"\n",(0,c.jsxs)(n.p,{children:["Antes de utilizar SEND PACKET, debe abrir un puerto serial o un documento con ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"}),", o abrir un documento con uno de los comandos de gesti\xf3n de documentos."]}),"\n",(0,c.jsxs)(n.p,{children:["Cuando escribe un documento, el primer SEND PACKET comienza a escribir al comienzo del documento a menos que el documento hubiera sido abierto con ",(0,c.jsx)(n.a,{href:"/docs/es/commands/use-character-set",children:"USE CHARACTER SET"}),". Hasta el momento en que el documento se cierra, cada paquete subsiguiente se a\xf1ade a los paquetes enviados anteriormente."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"})," este comando es \xfatil para un documento abierto con ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-channel",children:"SET CHANNEL"}),". Por otra parte, para un documento abierto con ",(0,c.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"}),", ",(0,c.jsx)(n.a,{href:"/docs/es/commands/create-document",children:"Create document"})," o ",(0,c.jsx)(n.a,{href:"/docs/es/commands/append-document",children:"Append document"}),", usted puede utilizar los comandos ",(0,c.jsx)(n.a,{href:"/docs/es/commands/get-document-position",children:"Get document position"})," y ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para obtener y cambiar la ubicaci\xf3n en el documento donde ocurrir\xe1 la pr\xf3xima escritura (SEND PACKET) o lectura (",(0,c.jsx)(n.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"}),")."]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,c.jsx)(n.p,{children:"El siguiente ejemplo escribe datos de campos en un documento. Escribe los campos como campos de longitud fija. Si un campo es de longitud menor a la especificada, el campo se llena con espacios. (es decir, se a\xf1aden espacios para alcanzar la longitud especificada.) Aunque el uso de campos de longitud fija es un m\xe9todo ineficiente de almacenamiento de datos, algunos sistemas inform\xe1ticos y ciertas aplicaciones todav\xeda lo utilizan:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Create document("")\xa0// Creaci\xf3n de un documento\n\xa0If(OK=1)\xa0// \xbfSe cre\xf3 el documento?\n\xa0\xa0\xa0\xa0For($vlRegistro;1;Records in selection([Personas]))\xa0// Bucle para cada registro\n\xa0\xa0// Env\xedo de un paquete creado a partir de una cadena de 15 espacios que contiene el campo Nombre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Personas]Nombre;1))\n\xa0\xa0// Env\xedo de un segundo paquete creado a partir de una cadena de 15 espacios que contiene el campo Apellido\n\xa0\xa0// Este podr\xeda estar en el primer SEND PACKET, pero se separa por claridad\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Personas]Apellido;1))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Personas])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Env\xedo de Char(26), utilizado como marcador de fin de registro por algunos ordenadores\n\xa0\xa0\xa0\xa0SEND PACKET($vhDocRef;Char(SUB ASCII code))\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Cierre del documento\n\xa0End if\n'})}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,c.jsx)(n.p,{children:"Este ejemplo ilustra el env\xedo y recuperaci\xf3n de caracteres extendidos v\xeda un BLOB en un documento:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var $enviar_blob : Blob\n\xa0var $recibir_blob : Blob\n\xa0TEXT TO BLOB("\xe2z\xe9rt\xff";$enviar_blob;UTF8 text without length)\n\xa0SET BLOB SIZE($enviar_blob;16;255)\n\xa0$enviar_blob{6}:=0\n\xa0$enviar_blob{7}:=1\n\xa0$enviar_blob{8}:=2\n\xa0$enviar_blob{9}:=3\n\xa0$enviar_blob{10}:=0\n\xa0$vlDocRef:=Create document("blob.test")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET($vlDocRef;$enviar_blob)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n\xa0$vlDocRef=Open document(document)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE PACKET($vlDocRef;$recibir_blob;65536)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vlDocRef)\n\xa0End if\n'})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/get-document-position",children:"Get document position"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-document-position",children:"SET DOCUMENT POSITION"})]}),"\n",(0,c.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"103"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return d}});var s=o(667294);let c={},a=s.createContext(c);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);