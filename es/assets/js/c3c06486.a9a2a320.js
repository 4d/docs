"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22497"],{116178:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/receive-packet","title":"RECEIVE PACKET","description":"RECEIVE PACKET ( {docRef ;} varRecep ; stopCar | numBytes )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-packet.md","sourceDirName":"commands-legacy","slug":"/commands/receive-packet","permalink":"/docs/es/20-R7/commands/receive-packet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-packet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-packet","title":"RECEIVE PACKET","slug":"/commands/receive-packet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE BUFFER","permalink":"/docs/es/20-R7/commands/receive-buffer"},"next":{"title":"RECEIVE RECORD","permalink":"/docs/es/20-R7/commands/receive-record"}}'),s=a("785893"),o=a("250065");let c={id:"receive-packet",title:"RECEIVE PACKET",slug:"/commands/receive-packet",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RECEIVE PACKET"})," ( {",(0,s.jsx)(n.em,{children:"docRef"})," ;} ",(0,s.jsx)(n.em,{children:"varRecep"})," ; stopCar | numBytes )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docRef"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia del documento o canal actual (puerto serial o documento)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"varRecep"}),(0,s.jsx)(n.td,{children:"Text, Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Variable para recibir datos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"stopCar | numBytes"}),(0,s.jsx)(n.td,{children:"Cadena, Entero largo"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Car\xe1cter(es) en el(los) cual(es) detener la recepci\xf3n de datos o n\xfamero de bytes a recibir"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"RECEIVE PACKET lee los caracteres desde un puerto serial o desde un documento."}),"\n",(0,s.jsxs)(n.p,{children:["Si se especifica ",(0,s.jsx)(n.em,{children:"docRef"}),", el comando recupera los caracteres desde un documento abierto por la funci\xf3n ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",children:"Create document"})," o ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-document",children:"Append document"}),". Si se omite ",(0,s.jsx)(n.em,{children:"docRef"}),", este comando recupera los caracteres de un puerto serial o de un documento abierto utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Sin importar la fuente, los caracteres le\xeddos se devuelven en la variable ",(0,s.jsx)(n.em,{children:"varRecep"}),", la cual debe ser una variable de tipo Texto, Alfa o BLOB. Si los caracteres han sido enviados por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"}),", el tipo debe corresponder al del paquete enviado."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cuando el paquete recibido es de tipo BLOB, el comando no tiene en cuenta ning\xfan conjunto de caracteres definido por el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/use-character-set",children:"USE CHARACTER SET"}),". Se devuelve el BLOB sin ninguna modificaci\xf3n."]}),"\n",(0,s.jsxs)(n.li,{children:["Cuando el paquete recibido es de tipo texto, el comando RECEIVE PACKET soporta Byte Order Marks (BOMs). En este caso, si el conjunto de caracteres actual es de tipo Unicode (UTF-8, UTF-16 o UTF-32), 4D intenta identificar un BOM entre los primeros bytes recibidos. Si detecta uno, lo filtra de la variable ",(0,s.jsx)(n.em,{children:"recepVar"})," y 4D utiliza el conjunto de caracteres definido en lugar del conjunto de caracteres actual."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Para leer un n\xfamero particular de caracteres, pase este n\xfamero en el par\xe1metro ",(0,s.jsx)(n.em,{children:"numBytes."})," Si la variable ",(0,s.jsx)(n.em,{children:"recepVar"})," es de tipo Texto, en una sola llamada puede leer hasta 2 GB de texto (valor te\xf3rico)."]}),"\n",(0,s.jsxs)(n.p,{children:["Para recibir datos hasta una cadena particular (compuesta por uno o m\xe1s caracteres) pase esta cadena en ",(0,s.jsx)(n.em,{children:"stopCar"})," (la cadena no se devuelve en ",(0,s.jsx)(n.em,{children:"varRecep"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["En este caso, si no se encuentra el car\xe1cter cadena especificado por ",(0,s.jsx)(n.em,{children:"stopCar"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cuando RECEIVE PACKET lee datos en un documento, se detendr\xe1 la lectura al final del documento."}),"\n",(0,s.jsxs)(n.li,{children:["Cuando RECEIVE PACKET lee datos de un puerto serial, el comando se ejecutar\xe1 indefinidamente hasta que el timeout (si hay) haya pasado (ver ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-timeout",children:"SET TIMEOUT"}),") o hasta que el usuario interrumpa la recepci\xf3n (ver a continuaci\xf3n)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Durante la ejecuci\xf3n de RECEIVE PACKET, el usuario puede interrumpir la recepci\xf3n presionando Ctrl-Alt-May\xfas (Windows) o Comando-Opci\xf3n-May\xfas (Macintosh). Esta interrupci\xf3n genera un error -9994 que puede interceptar con un m\xe9todo instalado utilizando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",children:"ON ERR CALL"}),". Generalmente, s\xf3lo tendr\xe1 que administrar la interrupci\xf3n de una recepci\xf3n en el momento de una comunicaci\xf3n sobre un puerto serial."]}),"\n",(0,s.jsx)(n.p,{children:"Durante la lectura de un documento, el primer RECEIVE PACKET comienza por leer el principio del documento. La lectura de cada paquete subsiguiente comienza con el car\xe1cter despu\xe9s del \xfaltimo car\xe1cter le\xeddo."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando es \xfatil con un documento abierto con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-channel",children:"SET CHANNEL"}),". Por el contrario, para un documento abierto con ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",children:"Open document"}),", ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",children:"Create document"})," o ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-document",children:"Append document"})," puede utilizar los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-document-position",children:"Get document position"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para obtener y cambiar la ubicaci\xf3n en el documento donde ocurrir\xe1 la pr\xf3xima escritura (",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"}),") o lectura (RECEIVE PACKET)."]}),"\n",(0,s.jsx)(n.p,{children:"Cuando intente leer despu\xe9s del final de un archivo RECEIVE PACKET devuelve los datos le\xeddos hasta ese punto y la variable OK tomar\xe1 el valor 1. Luego, el siguiente RECEIVE PACKET devolver\xe1 una cadena vac\xeda y la variable OK tomar\xe1 el valor cero."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," en modo no Unicode (compatibilidad) cuando utiliza el comando RECEIVE PACKET para leer caracteres de un documento Windows y no quiere utilizar mapas ASCII para convertir los caracteres Windows en caracteres Mac OS, puede utilizar la funci\xf3n ",(0,s.jsx)(n.em,{children:"Win to Mac"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo lee 20 caracteres de un puerto serial en la variable ",(0,s.jsx)(n.em,{children:"recupVeinte"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(recupVeinte;20)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo lee datos del documento referenciado por la variable ",(0,s.jsx)(n.em,{children:"miDoc"})," en la variable ",(0,s.jsx)(n.em,{children:"vData"}),". El comando lee hasta que encuentra un retorno de carro:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0RECEIVE PACKET(miDoc;vData;Char(Carriage return))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo lee datos desde el documento referenciado por la variable ",(0,s.jsx)(n.em,{children:"miDoc"})," en la variable ",(0,s.jsx)(n.em,{children:"vData"}),". El comando lee hasta que encuentra una etiqueta HTML de fin de tabla ",(0,s.jsx)(n.em,{}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0RECEIVE PACKET(miDoc;vData;"")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo lee datos de un documento y los pone en campos. Los datos se almacenan como campos de longitud fija. El m\xe9todo llama a una subrutina para eliminar espacios (espacios al final de la cadena). La subrutina sigue el m\xe9todo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhDocRef :=Open document("";"TEXT")\xa0// Apertura de un documento de tipo TEXTO\n\xa0If(OK=1)\xa0// Si el documento est\xe1 abierto\n\xa0\xa0\xa0\xa0Repeat\xa0// Bucle hasta que no haya m\xe1s datos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var1;15)\xa0// Lectura de 15 caracteres\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE PACKET($vhDocRef;$Var2;15)\xa0// Hace lo mismo para el segundo campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($Var1#"")|($Var2#""))\xa0// Si por lo menos uno de los campos no est\xe1 vac\xedo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Personas])\xa0// Crear un nuevo registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Personas]Nombre:=Strip($Var1)\xa0// Guardar el nombre\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Personas]Apellido:=Strip($Var2)\xa0// Guardar el apellido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Personas])\xa0// Guardar el registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Until(OK=0)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// Cierre del documento\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.p,{children:"Los espacios al final de los datos son eliminados por el siguiente m\xe9todo, llamado Elimina:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0For($i;Length($1);1;-1)\xa0// Bucle desde el final de la cadena al inicio\n\xa0\xa0\xa0\xa0If($1[[$i]]#" ")\xa0// Si no es un espacio\u2026\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$i :=-$i \xa0// Forzar el bucle a detenerse\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0$0:=Delete string($1;-$i;Length($1))\xa0// Borrar los espacios\n'})}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de un llamado a RECEIVE PACKET, la variable sistema OK toma el valor 1 si el paquete se recibe sin errores. De lo contrario, la variable sistema OK toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-document-position",children:"Get document position"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-document-position",children:"SET DOCUMENT POSITION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-timeout",children:"SET TIMEOUT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"104"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return c}});var r=a(667294);let s={},o=r.createContext(s);function c(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);