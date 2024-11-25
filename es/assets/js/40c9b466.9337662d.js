"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88328"],{228630:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>a,frontMatter:()=>c});var o=JSON.parse('{"id":"commands-legacy/document-to-text","title":"Document to text","description":"Document to text ( nomArchivo {; conjCaracteres {; modoRetorno}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/document-to-text.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-text","permalink":"/docs/es/commands/document-to-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"document-to-text","title":"Document to text","slug":"/commands/document-to-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT LIST","permalink":"/docs/es/commands/document-list"},"next":{"title":"FOLDER LIST","permalink":"/docs/es/commands/folder-list"}}'),r=t("785893"),s=t("250065");let c={id:"document-to-text",title:"Document to text",slug:"/commands/document-to-text",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Document to text"})," ( ",(0,r.jsx)(n.em,{children:"nomArchivo"})," {; ",(0,r.jsx)(n.em,{children:"conjCaracteres"})," {; ",(0,r.jsx)(n.em,{children:"modoRetorno"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomArchivo"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del documento o ruta al documento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjCaracteres"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre o n\xfamero del conjunto de caracteres"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modoRetorno"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Modo de procesamiento para las l\xedneas de ruptura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Texto del documento"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"Document to text"})," le permite recuperar el contenido de un archivo directamente en el disco en una variable texto 4D o campo texto."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"nomArchivo"}),", pase el nombre o ruta de acceso del archivo a leer. El archivo debe existir en el disco, de lo contrario se genera un error. Puede pasar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'s\xf3lo el nombre del archivo, por ejemplo "miArchivo.txt": en este caso, el archivo debe estar ubicado junto al archivo de estructura de la aplicaci\xf3n.'}),"\n",(0,r.jsx)(n.li,{children:'una ruta de acceso relativa al archivo de estructura de la aplicaci\xf3n, por ejemplo, "\\\\docs\\\\miArchivo.txt" en Windows o "/docs/miArchivo.txt" en macOS.'}),"\n",(0,r.jsx)(n.li,{children:'una ruta de acceso absoluta, por ejemplo, "c:\\\\app\\\\docs\\\\miArchivo.txt" en Windows o "MacHD/docs/miArchivo.txt" en macOS.'}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"conjCaracteres"}),', se pasa el conjunto de caracteres a utilizar para la lectura de los contenidos. Puede pasar una cadena con el nombre est\xe1ndar del conjunto (por ejemplo, "ISO-8859-1" o "UTF-8") o su ID MIBEnum (entero largo). Para m\xe1s informaci\xf3n sobre la lista de conjuntos de caracteres soportados por 4D, consulte la descripci\xf3n del comando ',(0,r.jsx)(n.a,{href:"/docs/es/commands/convert-from-text",children:"CONVERT FROM TEXT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el documento contiene un Byte Order Mark (BOM), 4D utiliza el conjunto de caracteres que se ha definido en ",(0,r.jsx)(n.em,{children:"conjCaracteres"})," (este par\xe1metro entonces se ignora)."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el documento no contiene un BOM y si se omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"conjCaracteres,"})," 4D utiliza por defecto los siguientes conjuntos de caracteres:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"bajo Windows: ANSI"}),"\n",(0,r.jsx)(n.li,{children:"bajo OS X: MacRoman"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['En breakMode, puede pasar un entero largo que indica el proceso a efectuar en los caracteres de fin de l\xednea presentes en el documento. Puede pasar una de las siguientes constantes, del tema "',(0,r.jsx)(n.em,{children:"Documentos sistema"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document unchanged"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Ning\xfan proceso"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CR"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xedneas se convierten en CR (",(0,r.jsx)(n.em,{children:"retorno de carro"}),"), el formato Classic Mac OS por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with CRLF"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xednea se convierten en CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),"), al formato Windows por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with LF"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:["Los saltos de l\xednea se convierten en LF(",(0,r.jsx)(n.em,{children:"line feed"}),"), al formato Unix y macOS por defecto."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Document with native format"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["(Por defecto) los saltos de l\xednea se convierten al formato nativo de la plataforma de ejecuci\xf3n: LF ",(0,r.jsx)(n.em,{children:"(line feed)"})," en macOS, CRLF (",(0,r.jsx)(n.em,{children:"carriage return + line feed"}),") en Windows"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto, cuando se omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"modoRetorno"}),", los saltos de l\xednea se procesan en modo nativo (1)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidad:"})," hay opciones de compatibilidad disponibles para la gesti\xf3n de EOL y BOM. Ver ",(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este comando no modifica la variable OK. En caso de fallo, se genera un error que puede interceptar utilizando un m\xe9todo instalado por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Dado el documento texto siguiente (los campos est\xe1n separados por tabulaciones):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-RAW",children:"id\xa0\xa0\xa0 name\xa0\xa0\xa0 price\xa0\xa0\xa0 vat3\xa0\xa0\xa0 4D Tags\xa0\xa0\xa0 99\xa0\xa0\xa0 19.6\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cuando ejecuta este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$Text:=Document to text("products.txt")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... obtiene:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// $Text = "id\\tname\\tprice\\tvat\\r\\n3\\t4D Tags\\t99 \\t19.6"\n\xa0\xa0// \\t = tab\n\xa0\xa0// \\r = CR\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Documentos sistema"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/text-to-document",children:"TEXT TO DOCUMENT"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var o=t(667294);let r={},s=o.createContext(r);function c(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);