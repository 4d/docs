"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37750"],{34403:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/text-to-document","title":"TEXT TO DOCUMENT","description":"TEXT TO DOCUMENT ( nomArchivo ; texto {; conjCaract {; ModoRetorno}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/text-to-document.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-document","permalink":"/docs/es/20-R7/commands/text-to-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"text-to-document","title":"TEXT TO DOCUMENT","slug":"/commands/text-to-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Test path name","permalink":"/docs/es/20-R7/commands/test-path-name"},"next":{"title":"VOLUME ATTRIBUTES","permalink":"/docs/es/20-R7/commands/volume-attributes"}}'),r=o("785893"),s=o("250065");let d={id:"text-to-document",title:"TEXT TO DOCUMENT",slug:"/commands/text-to-document",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TEXT TO DOCUMENT"})," ( ",(0,r.jsx)(n.em,{children:"nomArchivo"})," ; ",(0,r.jsx)(n.em,{children:"texto"})," {; ",(0,r.jsx)(n.em,{children:"conjCaract"})," {; ",(0,r.jsx)(n.em,{children:"ModoRetorno"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomArchivo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del documento o ruta de acceso al documento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto a almacenar en el documento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjCaract"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre o n\xfamero del conjunto de caracteres"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ModoRetorno"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Modo de procesamiento para los retornos de l\xednea"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"TEXT TO DOCUMENT"})," le permite escribir el ",(0,r.jsx)(n.em,{children:"texto"})," directamente en el archivo de disco."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"nomArchivo"}),", pase el nombre o ruta de acceso del archivo a escribir. Si el archivo no existe, se crea. Cuando el archivo ya existe en el disco, su contenido anterior se borrar\xe1, excepto si ya est\xe1 abierto, en cuyo caso, su contenido se bloquea y se genera un error. En ",(0,r.jsx)(n.em,{children:"nomArchivo"}),", que puede pasar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'s\xf3lo el nombre del archivo, por ejemplo "miArchivo.txt": en este caso, el archivo se coloca junto al archivo de estructura de la aplicaci\xf3n.'}),"\n",(0,r.jsx)(n.li,{children:'una ruta de acceso relativa al archivo de estructura de la aplicaci\xf3n, por ejemplo, "\\\\docs\\\\miArchivo.txt" en Windows o ""/docs/miArchivo.txt" en macOS.'}),"\n",(0,r.jsx)(n.li,{children:'una ruta de acceso absoluta, por ejemplo, "c:\\\\app\\\\docs\\\\miArchivo.txt" en Windows o "MacHD/docs/miArchivo.txt" en macOS.'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si desea que el usuario sea capaz de indicar el nombre o la ubicaci\xf3n del documento, utilice los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",children:"Open document"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",children:"Create document"})," , as\xed como la variable del sistema ",(0,r.jsx)(n.em,{children:"Document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," por defecto, los documentos generados por este comando no tienen una extensi\xf3n. Debe pasar una extensi\xf3n en ",(0,r.jsx)(n.em,{children:"nomArchivo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"texto"}),', pase el texto a escribir en el disco. Puede ser una constante literal ("mi texto"), o un campo o variable texto 4D.']}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"conjCaract"}),', pase el conjunto de caracteres a utilizar para la escritura del documento. Puede pasar una cadena con el nombre est\xe1ndar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") o su ID MIBEnum (entero largo). Para m\xe1s informaci\xf3n sobre la lista de conjuntos de caracteres soportados por 4D, consulte la descripci\xf3n del comando ',(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"}),'. Si un Byte Order Mark (BOM) existe para el conjunto de caracteres, 4D lo inserta en el documento, a menos que el conjunto de caracteres utilizado contenga el sufijo "-no-bom" (por ejemplo, "UTF-8-no-bom"). Si no se especifica un conjunto de caracteres, por defecto 4D utiliza por defecto el conjunto de caracteres "UTF-8" sin BOM (excepto en modo compatibilidad, ver ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"modoRetorno"}),', puede pasar un entero largo que indica el proceso a aplicar a los caracteres de fin de l\xednea antes de guardarlos en el archivo. Puede pasar una de las siguientes constantes, ubicadas en el tema "',(0,r.jsx)(n.em,{children:"Documentos sistema"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document unchanged"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Ning\xfan proceso"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CR"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xedneas se convierten en CR (",(0,r.jsx)(n.em,{children:"retorno de carro"}),"), el formato Classic Mac OS por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CRLF"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xednea se convierten en CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),"), al formato Windows por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with LF"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xednea se convierten en LF(",(0,r.jsx)(n.em,{children:"line feed"}),"), al formato Unix y macOS por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with native format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["(Por defecto) los saltos de l\xednea se convierten al formato nativo de la plataforma de ejecuci\xf3n: LF ",(0,r.jsx)(n.em,{children:"(line feed)"})," en macOS, CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),") en Windows"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"modoRetorno"}),", los caracteres de fin de l\xednea se procesan en modo nativo (1)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidad:"})," hay opciones de compatibilidad disponibles para la gesti\xf3n de EOL y BOM. Ver ",(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando no modifica la variable OK. En caso de falla, se genera un error que puede interceptar utilizando un m\xe9todo instalado por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Estos son algunos ejemplos t\xedpicos de uso de este comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0TEXT TO DOCUMENT("myTest.txt";"Esta es una prueba")\n\xa0TEXT TO DOCUMENT("myTest.xml";"Esta es una prueba")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo que permite al usuario indicar la ubicaci\xf3n del archivo a crear:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$MyTextVar:="Esta es una prueba"\n\xa0ON ERR CALL("IO ERROR HANDLER")\n\xa0$vhDocRef :=Create document("")\n\xa0\xa0// Guardar documento con la extensi\xf3n ".txt"\n\xa0\xa0// En este caso, la extensi\xf3n .txt siempre se a\xf1ade al nombre; no es posible cambiarla\n\xa0If(OK=1)\xa0// Si el documento se ha creado con \xe9xito\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0//Cerrar el documento\n\xa0\xa0\xa0\xa0TEXT TO DOCUMENT(Document;$MyTextVar )\n\xa0\xa0// Escribimos el documento\n\xa0Else\n\xa0\xa0// Gesti\xf3n de error\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/document-to-text",children:"Document to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Documentos sistema"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1237"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return d}});var t=o(667294);let r={},s=t.createContext(r);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);