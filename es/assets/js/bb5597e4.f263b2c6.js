"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60752"],{995407:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/get-document-properties","title":"GET DOCUMENT PROPERTIES","description":"GET DOCUMENT PROPERTIES ( doc ; bloqueado ; invisible ; creado el ; creado a las ; modificado el ; modificado a las )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-document-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-properties","permalink":"/docs/es/commands/get-document-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-document-properties","title":"GET DOCUMENT PROPERTIES","slug":"/commands/get-document-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get document position","permalink":"/docs/es/commands/get-document-position"},"next":{"title":"Get document size","permalink":"/docs/es/commands/get-document-size"}}'),s=o("785893"),r=o("250065");let d={id:"get-document-properties",title:"GET DOCUMENT PROPERTIES",slug:"/commands/get-document-properties",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET DOCUMENT PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"doc"})," ; ",(0,s.jsx)(n.em,{children:"bloqueado"})," ; ",(0,s.jsx)(n.em,{children:"invisible"})," ; creado el ; creado a las ; modificado el ; modificado a las )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"doc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del documento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bloqueado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Bloqueado (True) o no bloqueado (False)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"invisible"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Invisible (True) o visible (False)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"creado el"}),(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Fecha de creaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"creado a las"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Hora de creaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modificado el"}),(0,s.jsx)(n.td,{children:"Fecha"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Fecha de la \xfaltima modificaci\xf3n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modificado a las"}),(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Hora de la \xfaltima modificaci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando GET DOCUMENT PROPERTIES devuelve informaci\xf3n sobre el documento cuyo nombre o ruta se pasa en ",(0,s.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Despu\xe9s de la llamada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"bloqueado"})," devuelve True si el documento est\xe1 bloqueado. Un documento bloqueado no puede modificarse."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"invisible"})," devuelve True si el documento est\xe1 oculto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"creado el"})," y ",(0,s.jsx)(n.em,{children:"creado a las"})," devuelven la fecha y hora de creaci\xf3n del documento."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"modificado el"})," y ",(0,s.jsx)(n.em,{children:"modificado a las"})," devuelven la fecha y hora de la \xfaltima modificaci\xf3n del documento."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Usted ha creado una base de documentaci\xf3n y quiere exportar todos los registros creados en la base a un documento en disco. Como la base se actualiza regularmente, usted quiere escribir un algoritmo de exportaci\xf3n que cree o recree cada documento en el disco si el documento no existe o si el registro correspondiente ha sido modificado despu\xe9s de que el documento fue grabado por \xfaltima vez. Por lo tanto, usted debe comparar la fecha y la hora de la modificaci\xf3n del documento (si la hay) con su registro correspondiente. Para ilustrar este ejemplo, utilizamos la siguiente tabla:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(817966).Z+"",width:"193",height:"172"})}),"\n",(0,s.jsx)(n.p,{children:"En lugar de guardar una fecha y una hora en cada registro, puede guardar un \u201Cmarcador\u201D que exprese el n\xfamero de segundos transcurridos entre una fecha anterior arbitraria (en este ejemplo utilizamos el 1 de enero de 1995 a las 00:00:00) y la fecha y la hora en la que se guard\xf3 el registro."}),"\n",(0,s.jsxs)(n.p,{children:["En nuestro ejemplo, el campo ",(0,s.jsx)(n.em,{children:"[Documentos]Marcador_creacion"})," contiene el marcador de creaci\xf3n del registro y el campo ",(0,s.jsx)(n.em,{children:"[Documentos]Marcador_modificacion"})," contiene el marcador de la \xfaltima modificaci\xf3n del registro."]}),"\n",(0,s.jsx)(n.p,{children:"El m\xe9todo de proyecto TimeStamp calcula el marcador de tiempo para una fecha y horas espec\xedficas o para la fecha y hora actual si no se pasan par\xe1metros:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto TimeStamp\n\xa0\xa0// TimeStamp { ( date ; Time ) } -> Entero largo\n\xa0\xa0// TimeStamp { ( date ; Time ) } -> N\xfamero de segundos desde el 1 de enero de 1995\n\xa0\n\xa0var $1;$vdDate : Date\n\xa0var $2;$vhTime : Time\n\xa0var $0 : Integer\n\xa0\n\xa0If(Count parameters=0)\n\xa0\xa0\xa0\xa0$vdDate:=Current date\n\xa0\xa0\xa0\xa0$vhTime:=Current time\n\xa0Else\n\xa0\xa0\xa0\xa0$vdDate:=$1\n\xa0\xa0\xa0\xa0$vhTime:=$2\n\xa0End if\n\xa0$0:=(($vdDate-!01/01/95!)*86400)+$vhTime\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," utilizando este m\xe9todo, puede codificar todas las fechas y las horas desde ",(0,s.jsx)(n.em,{children:"01/01/95"})," a las ",(0,s.jsx)(n.em,{children:"00:00:00"})," a ",(0,s.jsx)(n.em,{children:"01/19/2063"})," a las ",(0,s.jsx)(n.em,{children:"03:14:07"})," lo que cubre el intervalo de enteros largos de ",(0,s.jsx)(n.em,{children:"0"})," a ",(0,s.jsx)(n.em,{children:"2^31"})," menos uno."]}),"\n",(0,s.jsx)(n.p,{children:"Por el contrario, los m\xe9todos de proyecto Time stamp to date y Time stamp to time permiten extraer la fecha y la hora almacenadas en un marcador:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de proyecto Time stamp to date\n\xa0\xa0// Time stamp to date ( Long ) -> Date\n\xa0\xa0// Time stamp to date ( Time stamp ) -> Extracted date\n\xa0\n\xa0var $0 : Date\n\xa0var $1 : Integer\n\xa0\n\xa0$0:=!01/01/95!+($1\\86400)\n\xa0\n\xa0\xa0// M\xe9todo de proyecto Time stamp to time\n\xa0\xa0// Time stamp to time ( Entero largo) -> Fecha\n\xa0\xa0// Time stamp to time ( Time stamp ) -> Fecha extra\xedda\n\xa0\n\xa0var $0 : Time\n\xa0var $1 : Integer\n\xa0\n\xa0$0:=Time(Time string(\u202000:00:00\u2020+($1%86400)))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Para asegurar que los marcadores de los registros se actualicen correctamente, sin importar la manera en que son creados o modificados, debemos aplicar esta regla utilizando el trigger de la tabla ",(0,s.jsx)(n.em,{children:"[Documentos]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Trigger de la tabla [Documentos]\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=Save New Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Creation Stamp:=Time stamp\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Modification Stamp:=Time stamp\n\xa0\xa0\xa0\xa0:(Trigger event=Save Existing Record Event)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Documents]Modification Stamp:=Time stamp\n\xa0End case\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Una vez implementado en la base, tenemos todo lo que necesitamos para escribir el m\xe9todo de proyecto CREATE DOCUMENTATION. Utilizamos GET DOCUMENT PROPERTIES y ",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})," para administrar la fecha y hora de creaci\xf3n y modificaci\xf3n de los documentos."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto CREATE DOCUMENTATION\n\xa0\n\xa0C_STRING(255;$vsRuta;$vsDocRutaNombre;$vsDocNombre)\n\xa0var $vlDoc : Integer\n\xa0var $vbOnWindows;$vbDoIt;$vbBloqueados;$vbInvisible : Boolean\n\xa0var $vhDocRef;$vhCreadoalas;$vhModificadoalas : Time\n\xa0var $vdCreadoen;$vdModificadoen : Date\n\xa0\n\xa0If(Application type=4D Remote Mode)\n\xa0\xa0// Si se est\xe1 corriendo 4D Client, guarda los documentos\n\xa0\xa0// localmente en el equipo Cliente donde se encuentra 4D Client\n\xa0\xa0\xa0\xa0$vsRuta:=Long name to path name(Application file)\n\xa0Else\n\xa0\xa0// De lo contrario, guardamos los documentos donde se ubica el archivo de datos\n\xa0\xa0\xa0\xa0$vsRuta:=Long name to path name(Data file)\n\xa0End if\n\xa0\xa0// Guardar los documentos en un directorio que llamamos arbitrariamente "Documentaci\xf3n"\n\xa0$vsRuta:=$vsRuta+"Documentaci\xf3n"+Char(Directory symbol)\n\xa0\xa0// Si este directorio no existe, lo crea\n\xa0If(Test path name($vsRuta)#Is a folder)\n\xa0\xa0\xa0\xa0CREATE FOLDER($vsRuta)\n\xa0End if\n\xa0\xa0// Establecer la lista de documentos existentes\n\xa0\xa0// porque tenemos que borrar los obsoletos, en otras palabras\n\xa0\xa0// los documentos cuyos registros correspondientes han sido borrados.\n\xa0ARRAY STRING(255;$asDocumento;0)\n\xa0DOCUMENT LIST($vsRuta;$asDocumento)\n\xa0\xa0// Selecci\xf3n de todos los registros de la tabla [Documentos]\n\xa0ALL RECORDS([Documentos])\n\xa0\xa0// Para cada registro\n\xa0$vlNbRegistros:=Records in selection([Documentos])\n\xa0$vlNbDocs:=0\n\xa0$vbOnWindows:=On Windows\n\xa0For($vlDoc;1;$vlNbRegistros)\n\xa0\xa0// Suponemos que tendremos que recrear el documento en disco\n\xa0\xa0\xa0\xa0$vbDoIt:=True\n\xa0\xa0// Calculo del nombre y ruta de acceso del documento\n\xa0\xa0\xa0\xa0$vsDocNombre:="DOC"+String([Documentos]Numero;"00000")\n\xa0\xa0\xa0\xa0$vsDocRutaNombre:=$vsRuta+$vsDocNombre\n\xa0\xa0// \xbfYa existe este documento?\n\xa0\xa0\xa0\xa0If(Test path name($vsDocRutaNombre+".HTM")=Is a document)\n\xa0\xa0// Si es as\xed, eliminamos el documento de la lista de documentos\n\xa0\xa0// que pueden ser eliminados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlElem:=Find in array($asDocumento;$vsDocNombre+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($asDocumento;$vlElem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// \xbfSe guard\xf3 el documento des\xfaes de la \xfaltima vez que se modific\xf3 el registro?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET DOCUMENT PROPERTIES($vsDocRutaNombre+".HTM";$vbBloq;$vbInvisible;$vdCreadoEn;$vhCreatedAt;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModificadoen;$vhModificadoalas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(marcadorTiempos($vdModificadoen;$vhModificadoalas)>=[Documentos]Marcador_modificacion)\n\xa0\xa0// Si es as\xed, no necesitamos crear nuevamente el documento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vbDoIt:=False\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0// El documento no existe, colocar estas dos variables en cero de manera que\n\xa0\xa0// sepamos que tenemos que computarlos antes de fijar las propiedades finales\n\xa0\xa0// del documento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModificadoen:=!00/00/00!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModificadoalas:=\u202000:00:00\u2020\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0//\xbfNecesitamos crear nuevamente el documento?\n\xa0\xa0\xa0\xa0If($vbDoIt)\n\xa0\xa0// Si es as\xed, incrementar el n\xfamero de documentos actualizados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbDocs:=$vlNbDocs+1\n\xa0\xa0// Eliminar el documento si ya existe\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocRutaNombre+".HTM")\n\xa0\xa0// Y lo crea nuevamente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vbOnWindows)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocRutaNombre;"HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Create document($vsDocRutaNombre+".HTM")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// Escriba ac\xe1 los contenidos del documento\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vdModificadoen=!00/00/00!)\n\xa0\xa0// El documento no exist\xeda, definir los valores correctos para la fecha y hora de modificaci\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModificadoen:=Current date\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhModificadoalas:=Current time\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Cambiar las propiedades del documento de manera que su fecha y hora de creaci\xf3n\n\xa0\xa0// sean iguales a la del registro correspondiente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET DOCUMENT PROPERTIES($vsDocRutaNombre+".HTM";$vbBloq;$vbInvisible;\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Marcador fecha([Documentos]Marcador_creacion);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Marcador hora([Documentos]Marcador_creacion);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vdModificadoen;$vhModificadoalas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0// S\xf3lo para saber que est\xe1 pasando\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Proceso del documento "+String($vlDoc)+" of "+String($vlNbRegistros))\n\xa0\xa0\xa0\xa0NEXT RECORD([Documentos])\n\xa0End for\n\xa0\xa0// Eliminaci\xf3n de documentos obsoletos, en otras palabras\n\xa0\xa0// aquellos que est\xe1n en el array $asDocumento\n\xa0For($vlDoc;1;Size of array($asDocumento))\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsRuta+$asDocumento{$vlDoc})\n\xa0\xa0\xa0\xa0SET WINDOW TITLE("Eliminaci\xf3n de documento obsoleto: "+Char(34)+$asDocumento{$vlDoc}+Char(34))\n\xa0End for\n\xa0\xa0// Listo\n\xa0ALERT("N\xfamero de documentos procesados: "+String($vlNbRegistros)+Char(13)+"N\xfamero de documentos actualizados: "\n\xa0+String($vlNbDocs)+Char(13)+"N\xfamero de documentos borrados: "+String(Size of array($asDocumento)))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"_o_Document creator"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"_o_Document type"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-document-properties",children:"SET DOCUMENT PROPERTIES"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},817966:function(e,n,o){o.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var a=o(667294);let s={},r=a.createContext(s);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);