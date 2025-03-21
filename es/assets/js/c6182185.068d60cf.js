"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57682"],{994:function(e,a,r){r.r(a),r.d(a,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/encrypt-data-file","title":"Encrypt data file","description":"Encrypt data file ( rutaEstruct ; rutaDatos {; newPassPhrase | newDataKey {; carpetaArchivo {; curPassPhrase | curDataKey {; nomMetod}}}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/encrypt-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-file","permalink":"/docs/es/commands/encrypt-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"encrypt-data-file","title":"Encrypt data file","slug":"/commands/encrypt-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data BLOB","permalink":"/docs/es/commands/encrypt-data-blob"},"next":{"title":"New data key","permalink":"/docs/es/commands/new-data-key"}}'),s=r("785893"),d=r("250065");let o={id:"encrypt-data-file",title:"Encrypt data file",slug:"/commands/encrypt-data-file",displayed_sidebar:"docs"},t=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Encrypt data file"})," ( ",(0,s.jsx)(a.em,{children:"rutaEstruct"})," ; ",(0,s.jsx)(a.em,{children:"rutaDatos"})," {; newPassPhrase | newDataKey {; ",(0,s.jsx)(a.em,{children:"carpetaArchivo"})," {; curPassPhrase | curDataKey {; ",(0,s.jsx)(a.em,{children:"nomMetod"}),"}}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"rutaEstruct"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Nombre de ruta del archivo de estructura"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"rutaDatos"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Nombre de ruta del archivo de datos a cifrar"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"newPassPhrase | newDataKey"}),(0,s.jsx)(a.td,{children:"Texto, Objeto"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"En caso de reemplazo: nueva passPhrase (texto) o nueva llave de cifrado (objeto)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"carpetaArchivo"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Nombre de ruta de la carpeta donde se guardar\xe1n los archivos originales"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"curPassPhrase | curDataKey"}),(0,s.jsx)(a.td,{children:"Texto, Objeto"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"passPhrase actual (texto) o llave de encripci\xf3n actual(objeto)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"nomMetod"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Nombre del m\xe9todo de retrollamada 4D"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"Nombre completo de la carpeta donde se guardaron los archivos originales"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["El comando ",(0,s.jsx)(a.strong,{children:"Encrypt data file"})," se utiliza para cifrar o volver a cifrar el archivo de datos designado por el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaDatos"})," asociado al par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaEstructura"}),". Tambi\xe9n se puede utilizar para eliminar el cifrado de la base de datos. El comando no modifica los archivos originales, devuelve el nombre de ruta completo de la carpeta creada para respaldar el archivo de datos original."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Este comando no se puede utilizar con el archivo de datos abierto actualmente."}),"\n",(0,s.jsxs)(a.li,{children:["Este comando solo puede ejecutarse desde 4D (modo local) o 4D Server (procedimiento almacenado). El archivo de datos que se va a cifrar debe corresponder al archivo de estructura designado por ",(0,s.jsx)(a.em,{children:"rutaEstructura"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:['La ejecuci\xf3n de este comando cifrar\xe1 o modificar\xe1 el cifrado de todas las tablas de la base de datos que se han definiido como "encriptable". Para m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,s.jsx)(a.em,{children:"Encriptable"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Atenci\xf3n:"})," el cifrado de una base de datos es una operaci\xf3n prolongada. Muestra un indicador de progreso (que podr\xeda ser interrumpido por el usuario). Tenga en cuenta tambi\xe9n que la secuencia de cifrado de la base de datos incluye un paso de compactaci\xf3n."]}),"\n",(0,s.jsxs)(a.p,{children:["En el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaEstructura"}),", puede pasar una cadena vac\xeda o la ruta de acceso completa del archivo de estructura asociado con el archivo de datos que desea cifrar. Esta informaci\xf3n es necesaria para el procedimiento de cifrado. Si pasa una cadena vac\xeda, aparecer\xe1 un cuadro de di\xe1logo ",(0,s.jsx)(a.strong,{children:"Abrir archivo"})," est\xe1ndar para que el usuario pueda designar el archivo de estructura que se utilizar\xe1. De lo contrario, puede pasar una ruta de acceso completa, expresada en la sintaxis del sistema operativo."]}),"\n",(0,s.jsxs)(a.p,{children:["En el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaDatos"}),", puede pasar una cadena vac\xeda, un nombre de archivo o una ruta completa (debe expresarse en la sintaxis del sistema operativo). Si pasa una cadena vac\xeda, aparecer\xe1 un cuadro de di\xe1logo ",(0,s.jsx)(a.strong,{children:"Abrir archivo"})," est\xe1ndar para que el usuario pueda designar el archivo de datos que se va a cifrar. Este archivo debe corresponder al archivo de estructura definido en el par\xe1metro ",(0,s.jsx)(a.em,{children:"rutaEstructura"}),". Si solo pasa el nombre del archivo de datos, 4D lo buscar\xe1 en el mismo nivel que el archivo de estructura."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Para cifrar la base de datos por primera vez"}),", solo necesita pasar el par\xe1metro ",(0,s.jsx)(a.em,{children:"newPassPhrase"})," o ",(0,s.jsx)(a.em,{children:"newDataKey"})," (los par\xe1metros ",(0,s.jsx)(a.em,{children:"curPassPhrase"})," o ",(0,s.jsx)(a.em,{children:"curDataKey"})," no deben proporcionarse):\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.em,{children:"newPassPhrase"}),": cadena utilizada para generar la llave de cifrado (SHA de 256 bits)"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.em,{children:"newDataKey"}),": objeto (con propiedad ",(0,s.jsx)(a.em,{children:"encodedKey"}),") que contiene una nueva llave de cifrado de datos. Esta llave deber\xeda haberse generado con el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/new-data-key",children:"New data key"}),".",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.strong,{children:"Nota:"})," ",(0,s.jsx)(a.em,{children:"newPassPhrase"})," (o ",(0,s.jsx)(a.em,{children:"newDataKey"}),") no se agrega al llavero 4D."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Para volver a cifrar una base de datos"})," (es decir, la base de datos ya se ha cifrado), debe pasar tanto el par\xe1metro ",(0,s.jsx)(a.em,{children:"newPassPhrase"})," (o ",(0,s.jsx)(a.em,{children:"newDataKey"}),"), como la frase de contrase\xf1a actual (o la llave de datos actual). Esto es necesario para descifrar la base de datos antes de volver a cifrarla. Esta informaci\xf3n se puede proporcionar de las siguientes maneras:\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["pasando par\xe1metros v\xe1lidos de ",(0,s.jsx)(a.em,{children:"curPassPhrase"})," (o ",(0,s.jsx)(a.em,{children:"curDataKey"}),") al comando,"]}),"\n",(0,s.jsx)(a.li,{children:"en el llavero 4D."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Para eliminar el cifrado de todas las tablas"}),", pase una frase de contrase\xf1a vac\xeda o una llave de datos nula como ",(0,s.jsx)(a.em,{children:"newPassPhrase"})," (o ",(0,s.jsx)(a.em,{children:"newDataKey"}),'). La contrase\xf1a o llave de datos actual ya debe haber sido proporcionada. Los archivos descifrados se generar\xe1n/copiar\xe1n en carpetas denominadas "Archivos sustituidos (Descifrado) YYYY-MM-DD HH-MM-SS\u201D/"Decrypted files YYYY-MM-DD HH-MM-SS".']}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["El comando no modifica los archivos originales. Se mueven en la carpeta ",(0,s.jsx)(a.em,{children:"carpetaArchivo"})," (si se pasa) a una carpeta especial denominada ",(0,s.jsx)(a.em,{children:"Archivos reemplazados (Encriptaci\xf3n) YYYY-MM-DD HH-MM-SS"})," o ",(0,s.jsx)(a.em,{children:"Archivos reemplazados (Descifrado) YYYY-MM-DD HH-MM-SS"}),' donde YYYY-MM-DD HH-MM-SS representa la fecha y la hora de la operaci\xf3n. Por ejemplo: "Archivos reemplazados (cifrado) 2018-09-29 13-00-35". El nuevo archivo de datos cifrados o descifrados reemplaza autom\xe1ticamente el archivo original.',(0,s.jsx)(a.br,{}),'\nSi pas\xf3 "" en ',(0,s.jsx)(a.em,{children:"carpetaArchivo"}),", aparecer\xe1 un di\xe1logo ",(0,s.jsx)(a.strong,{children:"Abrir carpeta"})," est\xe1ndar para que el usuario pueda especificar la ubicaci\xf3n de la carpeta que se crear\xe1. Si ",(0,s.jsx)(a.em,{children:"carpetaArchivo"})," se omite, los archivos originales se almacenan autom\xe1ticamente en una carpeta con marca de tiempo creada junto al archivo de estructura."]}),"\n",(0,s.jsxs)(a.p,{children:["El par\xe1metro ",(0,s.jsx)(a.em,{children:"m\xe9todo"})," se utiliza para establecer un m\xe9todo de retro llamada que se llamar\xe1 regularmente durante el proceso de cifrado. Si pasa una cadena vac\xeda o un nombre de m\xe9todo no v\xe1lido, este par\xe1metro se ignora (no se llama a ning\xfan m\xe9todo). Cuando se llama, este m\xe9todo recibe hasta 5 par\xe1metros seg\xfan el tipo de evento que origina la llamada (ver m\xe1s abajo). Es imperativo declarar estos par\xe1metros en el m\xe9todo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Evento"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"$1 (Entero largo)"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"$2 (Entero largo)"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"$3 (Texto)"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"$4 (Entero largo)"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"$5 (Entero largo)"})})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Message"}),(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:'Mensaje de progreso (por ejemplo, "Cifrado de BLOBs en la tabla Documents")'}),(0,s.jsx)(a.td,{children:"Porcentaje realizado (por ejemplo, 50)"}),(0,s.jsx)(a.td,{children:"Reservado"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Encryption finished"}),(0,s.jsx)(a.td,{children:"2"}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:'Mensaje de OK (por ejemplo, "Hecho")'}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:"Reservado"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Error"}),(0,s.jsx)(a.td,{children:"3"}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:'Mensaje de error (por ejemplo, "Problema en la tabla de datos XX: No se proporcion\xf3 la llave de cifrado")'}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:"Reservado"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"End of execution"}),(0,s.jsx)(a.td,{children:"4"}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:'"Hecho"'}),(0,s.jsx)(a.td,{children:"0"}),(0,s.jsx)(a.td,{children:"Reservado"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Warning(*)"}),(0,s.jsx)(a.td,{children:"5"}),(0,s.jsx)(a.td,{children:"Tipo de objeto"}),(0,s.jsx)(a.td,{children:"Texto de error"}),(0,s.jsx)(a.td,{children:"Tabla o n\xfamero de \xedndice"}),(0,s.jsx)(a.td,{children:"Reservado"})]})]})]}),"\n",(0,s.jsxs)(a.p,{children:["(*) Advertencia devuelta en el paso de verificaci\xf3n (consulte el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/verify-data-file",children:"VERIFY DATA FILE"}),")."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Valor devuelto"})}),"\n",(0,s.jsx)(a.p,{children:"Ruta real de la carpeta de destino de los archivos originales."}),"\n",(0,s.jsx)(a.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(a.p,{children:"Cifrar un archivo de datos por primera vez:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$passphrase : Text\n\xa0$passphrase:=Request("Enter the passphrase")\n\xa0If(OK=1)\n\xa0\xa0//Como el archivo de datos no est\xe1 cifrado, no se ofrece ninguna llave de cifrado actual\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$passphrase)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(a.p,{children:"Vuelva a cifrar un archivo de datos cifrado (cambie la frase secreta):"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase;$newPassphrase : Text\n\xa0$passphrase:=Request("Enter the current passphrase")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$newPassphrase:=Request("Enter the new passphrase")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"Save"+Folder separator\n\xa0\xa0//Como el archivo de datos est\xe1 cifrado, se debe proporcionar la llave de cifrado actual\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";$newPassphrase;$targetFolder;$passphrase)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(a.p,{children:"Eliminar el cifrado de un archivo de datos cifrados:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$targetFolder;$passphrase : Text\n\xa0$passphrase:=Request("Introduzca la frase de contrase\xf1a")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$targetFolder:=Get 4D folder(Database folder)+"DecryptedData"+Folder separator\n\xa0\xa0//La nueva frase secreta se define en una cadena vac\xeda para descifrar todos los datos\n\xa0\xa0//Se debe proporcionar la frase de contrase\xf1a actual\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD";"";$targetFolder;$passphrase)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(a.p,{children:"Vuelva a cifrar un archivo de datos encriptados con la llave actual (por ejemplo, cuando se ha cambiado el estado encriptable para algunas tablas)."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0var $folder;$passPhrase : Text\n\xa0var $added : Boolean\n\xa0\n\xa0$passphrase:=Request("Ingrese la frase secreta")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$added:=Register data key($passphrase)\xa0//La llave de datos ahora est\xe1 en el llavero 4D\n\xa0\xa0\xa0\xa0$folder:=Encrypt data file(Structure file;"myData.4DD")\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/data-file-encryption-status",children:"Data file encryption status"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/new-data-key",children:"New data key"})]}),"\n",(0,s.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero de comando"}),(0,s.jsx)(a.td,{children:"1610"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Hilo seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return t},a:function(){return o}});var n=r(667294);let s={},d=n.createContext(s);function o(e){let a=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);