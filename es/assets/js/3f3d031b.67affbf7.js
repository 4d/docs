"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81969"],{329093:function(e,a,n){n.r(a),n.d(a,{metadata:()=>o,contentTitle:()=>r,default:()=>p,assets:()=>i,toc:()=>l,frontMatter:()=>d});var o=JSON.parse('{"id":"commands-legacy/pasteboard-data-size","title":"Pasteboard data size","description":"Pasteboard data size ( tipoDatos ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pasteboard-data-size.md","sourceDirName":"commands-legacy","slug":"/commands/pasteboard-data-size","permalink":"/docs/es/commands/pasteboard-data-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpasteboard-data-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pasteboard-data-size","title":"Pasteboard data size","slug":"/commands/pasteboard-data-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get text from pasteboard","permalink":"/docs/es/commands/get-text-from-pasteboard"},"next":{"title":"SET FILE TO PASTEBOARD","permalink":"/docs/es/commands/set-file-to-pasteboard"}}'),s=n("785893"),t=n("250065");let d={id:"pasteboard-data-size",title:"Pasteboard data size",slug:"/commands/pasteboard-data-size",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Pasteboard data size"})," ( ",(0,s.jsx)(a.em,{children:"tipoDatos"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tipoDatos"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Tipo de datos (4 caracteres)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Resultado"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"Tama\xf1o (en bytes) de datos almacenados en el portapapeles o c\xf3digo de error"})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(a.p,{children:["El comando Pasteboard data size permite probar si hay datos del tipo ",(0,s.jsx)(a.em,{children:"tipoDatos"})," en el portapapeles."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota"}),": en el caso de las operaciones copiar/pegar, el contenedor de datos corresponde al Portapapeles"]}),"\n",(0,s.jsx)(a.p,{children:"Si el portapapeles est\xe1 vac\xedo o no contiene datos de tipo especifico, el comando devuelve un error -102 (ver la tabla de constantes predefinidas). Si el portapapeles contiene datos del tipo especificado, el comando devuelve el tama\xf1o en bytes de estos datos."}),"\n",(0,s.jsxs)(a.p,{children:["Pase en ",(0,s.jsx)(a.em,{children:"tipodatos"})," un valor que defina el tipo de datos a extraer. Puede pasar una firma 4D, un tipo UTI (Mac OS), un nombre/n\xfamero de formato (Windows), o un tipo de 4 caracteres (compatibilidad). Para mayor informaci\xf3n sobre estos tipos, consulte la secci\xf3n ",(0,s.jsx)(a.em,{children:"Gesti\xf3n de portapapeles"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Despu\xe9s de verificar que el portapapeles contiene datos del tipo que quiere, puede extraer esa informaci\xf3n del portapapeles utilizando uno de los siguientes comandos:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Si el portapapeles contiene datos de tipo TEXT, puede obtener esa informaci\xf3n utilizando el comando Get text from pasteboard, el cual devuelve un valor texto, o el comando GET PASTEBOARD DATA, que devuelve el texto en un BLOB."}),"\n",(0,s.jsx)(a.li,{children:"Si el portapapeles contiene datos de tipo PICT, puede obtener esos datos utilizando el comando GET PICTURE FROM PASTEBOARD, que devuelve la imagen en un campo o una variable o el comando GET PASTEBOARD DATA, que devuelve la imagen en un BLOB."}),"\n",(0,s.jsx)(a.li,{children:"Si el contenedor contiene una ruta de acceso al archivo, puede extraerla utilizando el comando pasteboard, que devuelve la ruta de acceso del archivo."}),"\n",(0,s.jsx)(a.li,{children:"Para cualquier otro tipo de datos, utilice el comando GET PASTEBOARD DATA, el cual devuelve los datos en un BLOB."}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(a.p,{children:"El siguiente c\xf3digo prueba si el portapapeles contiene una imagen y si es as\xed, copia la imagen en una variable 4D:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0If(Pasteboard data size(Picture data)=1)\xa0//\xbfHay una imagen en el portapapeles?\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD($vPicVariable)\xa0//Si es as\xed, extraer la imagen del portapapeles\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("No hay imagen en el portapapeles.")\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(a.p,{children:"Generalmente, las aplicaciones cortan y copian datos de tipo TEXT o PICT en el portapapeles, porque la mayor\xeda de las aplicaciones reconocen estos dos tipos de datos est\xe1ndar. Sin embargo, una aplicaci\xf3n puede colocar en el portapapeles varias instancias de los mismos datos en formatos diferentes. Por ejemplo, cada vez que corta o copia parte de una hoja de c\xe1lculo, la aplicaci\xf3n de la hoja de c\xe1lculo puede colocar los datos en un formato hipot\xe9tico \u2018SPSH\u2019, como tambi\xe9n en los formatos SYLK y TEXT. La instancia \u2018SPSH\u2019 contiene los datos estructurados en el formato utilizado por la aplicaci\xf3n. La copia SYLK contiene los mismos datos, pero en el formato SYLK, reconocido por la mayor\xeda de los otros programas de hojas de c\xe1lculo. Por \xfaltimo, el formato TEXT contiene los mismos datos, sin la informaci\xf3n extra inclu\xedda en el formato SYLK o en el formato hipot\xe9tico \u2018SPSH\u2019. En este punto, cuando escriba rutinas de Cortar/Copiar/Pegar entre 4D y una aplicaci\xf3n de hoja de c\xe1lculo hipot\xe9tica, asumiendo que conoce la descripci\xf3n del formato \u2018SPSH\u2019 y que est\xe1 listo para analizar los datos SYLK, puede escribir el siguiente c\xf3digo:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0// Primero, verificar si el portapapeles contiene los datos de la aplicaci\xf3n de la hoja de c\xe1lculo hipot\xe9tica.\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SPSH')>0)\n\xa0\xa0// ...\n\xa0\xa0// Segundo, verificar si el portapapeles contiene datos en formato Sylk\n\xa0\xa0\xa0\xa0:(Pasteboard data size('SYLK')>0)\n\xa0\xa0// ...\n\xa0\xa0// Por \xfaltimo, verificar si el portapapeles contiene datos en formato Text\n\xa0\xa0\xa0\xa0:(Pasteboard data size('TEXT')>0)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,s.jsx)(a.p,{children:"En otras palabras, usted trata de extraer del portapapeles la instancia de datos que tenga m\xe1s informaci\xf3n original."}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(a.p,{children:"Usted desea arrastrar algunos datos privados de diferentes objetos en su formulario. Puedes escribir:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0//objeto origen\n\xa0If(FORM Event=On Begin Drag Over)\n\xa0\xa0\xa0\xa0APPEND DATA TO PASTEBOARD("some.private.data";$data)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0//objeto destino\n\xa0If(FORM Event=On Drag Over)\n\xa0\xa0\xa0\xa0$0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)\n\xa0End if\n'})}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsxs)(a.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/append-data-to-pasteboard",title:"APPEND DATA TO PASTEBOARD",children:"APPEND DATA TO PASTEBOARD"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.em,{children:"Portapapeles"})]}),"\n",(0,s.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero de comando"}),(0,s.jsx)(a.td,{children:"400"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Hilo seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Modifica variables"}),(0,s.jsx)(a.td,{children:"error"})]})]})]})]})}function p(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return r},a:function(){return d}});var o=n(667294);let s={},t=o.createContext(s);function d(e){let a=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:a},e.children)}}}]);