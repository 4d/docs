"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16325"],{971768:function(e,a,o){o.r(a),o.d(a,{metadata:()=>n,contentTitle:()=>l,default:()=>A,assets:()=>i,toc:()=>p,frontMatter:()=>r});var n=JSON.parse('{"id":"commands-legacy/append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","description":"APPEND DATA TO PASTEBOARD ( tipoDatos ; datos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/append-data-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/append-data-to-pasteboard","permalink":"/docs/es/commands/append-data-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-data-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"append-data-to-pasteboard","title":"APPEND DATA TO PASTEBOARD","slug":"/commands/append-data-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard","permalink":"/docs/es/category/pasteboard"},"next":{"title":"CLEAR PASTEBOARD","permalink":"/docs/es/commands/clear-pasteboard"}}'),t=o("785893"),s=o("250065");let r={id:"append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",slug:"/commands/append-data-to-pasteboard",displayed_sidebar:"docs"},l=void 0,i={},p=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"APPEND DATA TO PASTEBOARD"})," ( ",(0,t.jsx)(a.em,{children:"tipoDatos"})," ; ",(0,t.jsx)(a.em,{children:"datos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Par\xe1metro"}),(0,t.jsx)(a.th,{children:"Tipo"}),(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"tipoDatos"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Tipo de datos (4 caracteres)"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"datos"}),(0,t.jsx)(a.td,{children:"Blob"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Datos a a\xf1adir al portapapeles"})]})]})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(a.p,{children:["El comando APPEND DATA TO PASTEBOARD a\xf1ade en el portapapeles los datos del tipo especificado en ",(0,t.jsx)(a.em,{children:"tipoDatos"})," en el BLOB ",(0,t.jsx)(a.em,{children:"datos"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota:"})," en el caso de operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles."]}),"\n",(0,t.jsxs)(a.p,{children:["Pase en ",(0,t.jsx)(a.em,{children:"tipoDatos"})," un valor definiendo el tipo de datos a a\xf1adir. Puede pasar una firma 4D, un tipo UTI (Mac OS), un nombre/n\xfamero de formato (Windows), o un tipo de 4 caracteres (compatibilidad). Para mayor informaci\xf3n sobre estos tipos, consulte la secci\xf3n ."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Nota para los usuarios Windows"}),": cuando el comando se utiliza con datos de tipo texto (",(0,t.jsx)(a.em,{children:"tipoDatos"})," ",(0,t.jsx)(a.em,{children:"dataType"}),' rs "TEXT", com.4d.private.text.native o com.4d.private.text.utf16), la cadena contenida en el par\xe1metro BLOB ',(0,t.jsx)(a.em,{children:"datos"})," debe terminar con el car\xe1cter NULL en Windows."]}),"\n",(0,t.jsx)(a.p,{children:"Si los datos del BLOB se a\xf1aden correctamente al portapapeles, la variable OK toma el valor 1. De lo contrario la variable OK toma el valor 0 y se puede generar un error."}),"\n",(0,t.jsx)(a.p,{children:"Generalmente, se utiliza el comando APPEND DATA TO PASTEBOARD para agregar m\xfaltiples instancias de los mismos datos al portapapeles o para a\xf1adir datos que no son de tipo TEXT o PICT. Para a\xf1adir nuevos datos al portapapeles, primero debe limpiar el portapapeles utilizando el comando CLEAR PASTEBOARD."}),"\n",(0,t.jsx)(a.p,{children:"Si quiere limpiar y a\xf1adir:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["texto al portapapeles, utilice el comando ",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-text-to-pasteboard",title:"SET TEXT TO PASTEBOARD",children:"SET TEXT TO PASTEBOARD"}),","]}),"\n",(0,t.jsxs)(a.li,{children:["una imagen al portapapeles, utilice el comando ",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-picture-to-pasteboard",title:"SET PICTURE TO PASTEBOARD",children:"SET PICTURE TO PASTEBOARD"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Sin embargo, note que si un BLOB contiene texto o una imagen, usted puede utilizar el comando APPEND DATA TO PASTEBOARD para a\xf1adir un texto o una imagen al portapapeles."}),"\n",(0,t.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(a.p,{children:"Utilizando los comandos del tema portapapeles y de los BLOBs, puede construir esquemas sofisticados de Cortar/Copiar/Pegar para administrar datos estructurados en lugar de una sola pieza de informaci\xf3n. En el siguiente ejemplo, los dos m\xe9todos de proyecto SET RECORD TO CLIPBOARD y GET RECORD FROM CLIPBOARD le permiten tratar un registro de una informaci\xf3n a copiar en o desde el portapapeles."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto ENVIAR REGISTRO AL PORTAPAPELES\n\xa0\xa0// ENVIAR REGISTRO AL PORTAPAPELES ( Num\xe9rico )\n\xa0\xa0// ENVIAR REGISTRO AL PORTAPAPELES ( N\xfamero de tabla )\n\xa0\n\xa0var $1;$vlCampo;$vlTipoCampo : Integer\n\xa0var $vpTabla;$vpCampo : Pointer\n\xa0C_STRING(255;$vsDocNombre)\n\xa0var $vtRegistroDatos;$vtCampoDatos : Text\n\xa0var $vxRegistroDatos : Blob\n\xa0\n\xa0\xa0// Limpiar el portapapeles (estar\xe1 vac\xedo si no hay un registro actual)\n\xa0CLEAR PASTEBOARD\n\xa0\xa0// Obtener un puntero a la tabla cuyo n\xfamero se pasa como par\xe1metro\n\xa0$vpTabla:=Table($1)\n\xa0\xa0// Si hay un registro actual para esa tabla\n\xa0If((Record number($vpTabla->)>=0)|(Is new record($vpTabla->)))\n\xa0\xa0// Inicializar la variable texto que contendr\xe1 la imagen de texto del registro\n\xa0\xa0\xa0\xa0$vtRegistroDatos:=""\n\xa0\xa0// Para cada campo del registro:\n\xa0\xa0\xa0\xa0For($vlCampo;1;Count fields($1))\n\xa0\xa0// Obtener el tipo de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlCamp;$vlCampoTipo)\n\xa0\xa0// Obtener un puntero hacia el campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo:=Field($1;$vlCampo)\n\xa0\xa0// Dependiendo del tipo de campo, copiar (o no) sus datos de manera apropiada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is alpha field)|($vlCampoTipo=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=$vpCampo->\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is real)|($vlCampoTipo=Is integer)|($vlCampoTipo=Is longint)|($vlCampoTipo=Is date)|($vlCampoTipo=Is time))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=String($vpCampo->)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=String(Num($vpCampo->);"S\xed;;No")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Pasar e ignorar los otros tipos de campos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// Acumular los datos del campo en una variable de texto que almacena la imagen de texto del registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtRegistroDatos:=$vtRegistroDatos+Field name($1;$vlCampo)+":"+Char(9)+$vtCampoDatos+CR\n\xa0\xa0// Nota: El m\xe9todo CR devuelve Char(13) en Macintosh y Char(13)+Char(10) en Windows\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Colocar la imagen de texto del registro en el portapapeles\n\xa0\xa0\xa0\xa0SET TEXT TO PASTEBOARD($vtRegistroDatos)\n\xa0\xa0// Nombre del archivo scrap en la carpeta Temporales\n\xa0\xa0\xa0\xa0$vsDocNombre:=Temporary folder+"Scrap"+String(1+(Random%99))\n\xa0\xa0// Borrar el archivo scrap si existe (Se debe hacer una prueba de error aqu\xed)\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNombre)\n\xa0\xa0// Crear archivo scrap\n\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocNombre)\n\xa0\xa0//Enviar el registro completo al archivo scrap\n\xa0\xa0\xa0\xa0SEND RECORD($vpTabla->)\n\xa0\xa0// Cerrar el archivo scrap\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// Cargar el archivo scrap en un BLOB\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($vsDocNombre;$vxRegistroDatos)\n\xa0\xa0// No necesitamos m\xe1s el archivo scrap\n\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNombre)\n\xa0\xa0// A\xf1adir la imagen completa del registro al portapapeles\n\xa0\xa0// Nota: utilizamos arbitrariamente el tipo de datos "4Drc"\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("4Drc";$vxRegistroDatos)\n\xa0\xa0// En este punto, el portapapeles contiene:\n\xa0\xa0// (1) Una imagen de texto del registro (como se muestra en las copias de pantalla a continuaci\xf3n)\n\xa0\xa0// (2) Una imagen completa del registro (incluyendo im\xe1genes, subarchivos y los campos de tipo BLOB)\n\xa0End if\n'})}),"\n",(0,t.jsx)(a.p,{children:"Al introducir el siguiente registro:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:o(606745).Z+"",width:"620",height:"444"})}),"\n",(0,t.jsxs)(a.p,{children:["Si aplica el m\xe9todoENVIAR REGISTRO AL portapapeles a la tabla [Empleados], el portapapeles contendr\xe1 el texto del registro y la imagen completa del registro.",(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.img,{src:o(100325).Z+"",width:"342",height:"314"})]}),"\n",(0,t.jsx)(a.p,{children:"Puede pegar esta imagen del registro en otro registro, utilizando el m\xe9todo GET RECORD FROM CLIPBOARD, como se muestra a continuaci\xf3n:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo OBTENER REGISTRO DESDE PORTAPAPELES\n\xa0\xa0// OBTENER REGISTRO DESDE PORTAPAPELES ( N\xfamero )\n\xa0\xa0// OBTENER REGISTRO DESDE PORTAPAPELES ( N\xfamero de tabla )\n\xa0var $1;$vlCampo;$vlCampoTipo;$vlPosCR;$vlPosColon : Integer\n\xa0var $vpTabla;$vpCampo : Pointer\n\xa0C_STRING(255;$vsDocNombre)\n\xa0var $vxPortapapelesDatos : Blob\n\xa0var $vtPortapapelesDatos;$vtCampoDatos : Text\n\xa0\n\xa0\xa0// Obtener un puntero hacia la tabla cuyo n\xfamero se pasa como par\xe1metro\n\xa0$vpTabla:=Table($1)\n\xa0\xa0// Si hay un registro actual\n\xa0If((Record number($vpTabla->)>=0)|(Is new record($vpTabla->)))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0// \xbfEl portapapeles contiene una imagen completa del registro?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("4Drc")>0)\n\xa0\xa0// Si es as\xed, extraiga el contenido del portapapeles\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET PASTEBOARD DATA("4Drc";$vxPortapapelesDatos)\n\xa0\xa0// Nombre para el archivo scrap en la carpeta temporales\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsDocNombre:=Temporary folder+"Scrap"+String(1+(Random%99))\n\xa0\xa0// Borrar el archivo scrap si existe (Se debe hacer una prueba de error aqu\xed)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNombre)\n\xa0\xa0// Guardar el BLOB en el archivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($vsDocNombre;$vxPortapapelesDatos)\n\xa0\xa0// Abrir el archivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(10;$vsDocNombre)\n\xa0\xa0// Recibir el registro completo del archivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD($vpTable->)\n\xa0\xa0// Cerrar el archivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0\xa0// No necesitamos m\xe1s el archivo scrap\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE DOCUMENT($vsDocNombre)\n\xa0\xa0// \xbfEl portapapeles contiene TEXT?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Pasteboard data size("TEXT")>0)\n\xa0\xa0// Extraer el texto del portapapeles\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPortapapelesDatos:=Get text from pasteboard\n\xa0\xa0// Inicializar el n\xfamero de campos a incrementar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlCampo:=0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0// Buscar la l\xednea de campo siguiente en el texto\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosCR:=Position(CR;$vtPortapapelesDatos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosCR>0)\n\xa0\xa0// Extraer la l\xednea de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=Substring($vtPortapapelesDatos;1;$vlPosCR-1)\n\xa0\xa0// Si hay dos puntos ":"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlPosColon:=Position(":";$vtCampoDatos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlPosColon>0)\n\xa0\xa0// Tomar s\xf3lo los datos de campo (eliminar el nombre de campo)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtCampoDatos:=Substring($vtCampoDatos;$vlPosColon+2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Incrementar el n\xfamero de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlCampo:=$vlCampo+1\n\xa0\xa0// El portapapeles puede contener m\xe1s informaci\xf3n de la que necesitamos...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlCampo<=Count fields($vpTabla))\n\xa0\xa0// Obtener el tipo de campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET FIELD PROPERTIES($1;$vlCampo;$vlCampoTipo)\n\xa0\xa0// Obtener un puntero al campo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo:=Field($1;$vlCampo)\n\xa0\xa0// Dependiendo del tipo de campo, copiar (o no) el texo de una manera apropiada\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is alpha field)|($vlCampoTipo=Is text))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=$vtCampoDatos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(($vlCampoTipo=Is real)|($vlCampoTipo=Is integer)|($vlCampoTipo=Is longint))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Num($vtCampoDatos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is date)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Date($vtCampoDatos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is time)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=Time($vtCampoDatos)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCampoTipo=Is Boolean)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vpCampo->:=($vtCampoDatos="S\xed")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Pasar e ignorar los otros tipos de datos de campos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Todos los campos han sido asignados, salir del bucle\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPortapapelesDatos:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Eliminar el texto que acaba de ser extra\xeddo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPortapapelesDatos:=Substring($vtPortapapelesDatos;$vlPosCR+Length(CR))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// No se encontr\xf3 un delimitador, salir del bucle\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vtPortapapelesDatos:=""\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Repetir mientras tengamos datos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Until(Length($vtPortapapelesDatos)=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El portapapeles no contiene datos que puedan pegarse como un registro.")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})}),"\n",(0,t.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(a.p,{children:"Si los datos en el BLOB se a\xf1aden correctamente al portapapeles, la variable sistema OK toma el valor 1; de lo contrario OK toma el valor 0 y se podr\xeda generar un error."}),"\n",(0,t.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/es/commands/clear-pasteboard",children:"CLEAR PASTEBOARD"}),(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-picture-to-pasteboard",children:"SET PICTURE TO PASTEBOARD"}),(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.a,{href:"/docs/es/commands/set-text-to-pasteboard",children:"SET TEXT TO PASTEBOARD"})]})]})}function A(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},606745:function(e,a,o){o.d(a,{Z:function(){return n}});let n=o.p+"assets/images/pict27501.es-b9ce3b4f96540e802c8f0c9cd74d8484.png"},100325:function(e,a,o){o.d(a,{Z:function(){return n}});let n="data:image/png;base64,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"},250065:function(e,a,o){o.d(a,{Z:function(){return l},a:function(){return r}});var n=o(667294);let t={},s=n.createContext(t);function r(e){let a=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);