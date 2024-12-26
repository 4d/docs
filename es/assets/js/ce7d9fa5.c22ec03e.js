"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18414"],{142720:function(e,n,o){o.r(n),o.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>m,assets:()=>t,toc:()=>i,frontMatter:()=>r});var a=JSON.parse('{"id":"commands-legacy/create-document","title":"Create document","description":"Create document ( doc {; tipo} ) : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-document.md","sourceDirName":"commands-legacy","slug":"/commands/create-document","permalink":"/docs/es/commands/create-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-document","title":"Create document","slug":"/commands/create-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CREATE ALIAS","permalink":"/docs/es/commands/create-alias"},"next":{"title":"CREATE FOLDER","permalink":"/docs/es/commands/create-folder"}}'),c=o("785893"),d=o("250065");let r={id:"create-document",title:"Create document",slug:"/commands/create-document",displayed_sidebar:"docs"},s=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Create document"})," ( ",(0,c.jsx)(n.em,{children:"doc"})," {; ",(0,c.jsx)(n.em,{children:"tipo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"doc"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Nombre del documento o Ruta de acceso completa del documento o Cadena vac\xeda para mostrar caja de di\xe1logo est\xe1ndar de guardar archivos"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"tipo"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:'Lista de los tipos de documentos a filtrar o "*" para no filtrar los documentos'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Resultado"}),(0,c.jsx)(n.td,{children:"Time"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"N\xfamero de referencia del documento"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"El comando Create document crea un nuevo documento y devuelve su n\xfamero de referencia."}),"\n",(0,c.jsxs)(n.p,{children:["Pase el nombre o ruta completa del nuevo documento ",(0,c.jsx)(n.em,{children:"documento"}),". Si ",(0,c.jsx)(n.em,{children:"documento"})," ya existe en el disco, se sobrescribe. Sin embargo, si ",(0,c.jsx)(n.em,{children:"documento"})," est\xe1 bloqueado o abierto, se genera un error."]}),"\n",(0,c.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,c.jsx)(n.em,{children:"documento"}),", aparece una caja de di\xe1logo est\xe1ndar de registro de archivos y el usuario puede especifica el nombre del documento que quiere crear. Si cancela el di\xe1logo, no se crea el documento; Create document devuelve una referencia de documento nula y la variable OK toma el valor 0."]}),"\n",(0,c.jsx)(n.p,{children:"Si el documento se crea correctamente y se abre, Create document devuelve su n\xfamero de referencia y la variable OK toma el valor 1. El documento de la variable sistema Document se actualiza y devuelve la ruta de acceso completa del documento creado."}),"\n",(0,c.jsxs)(n.p,{children:["Create document crea por defecto un documento de tipo .TXT (Windows) o TEXT (Macintosh). Para crear otro tipo de documento, pase el par\xe1metro ",(0,c.jsx)(n.em,{children:"elTipo"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["En el par\xe1metro ",(0,c.jsx)(n.em,{children:"elTipo"}),", puede pasar uno o varios tipos de archivo con el fin de configurar la lista de tipos autorizados en la caja de di\xe1logo. Puede pasar una lista de varios tipos separados por un ; (punto y coma). Para cada tipo definido, se a\xf1adir\xe1 una l\xednea al men\xfa de elecci\xf3n del tipo de caja de di\xe1logo."]}),"\n",(0,c.jsxs)(n.p,{children:['Bajo Mac OS, puede pasar un tipo Mac OS cl\xe1sico (TEXT, APPL, etc.), o un tipo UTI (Uniform Tipo Identifier). Los tipos UTIs son definidos por Apple para cumplir con las necesidades de estandarizaci\xf3n de tipos de archivos. Por ejemplo, "public.text" es el tipo UTI de los archivos de tipo texto. Para mayor informaci\xf3n sobre UTIs, consulte la siguiente direcci\xf3n: ',(0,c.jsx)(n.em,{children:(0,c.jsx)(n.a,{href:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html",children:"https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html"})})," (documentaci\xf3n en ingl\xe9s)."]}),"\n",(0,c.jsx)(n.p,{children:"Bajo Windows, puede pasar igualmente un tipo de archivo cl\xe1sico Mac OS, 4D efect\xfaa la correspondencia internamente, o la extensi\xf3n de archivos (.txt, .exe, etc.). Note que bajo Windows, el usuario puede \u201Cforzar\u201D la visualizaci\xf3n de todos los tipos de archivos introduciendo *.* en la caja de di\xe1logo. Sin embargo, en este caso, 4D efectuar\xe1 una verificaci\xf3n suplementaria de los tipos de archivos seleccionados: si el usuario selecciona un tipo de archivo no autorizado, el comando devuelve un error."}),"\n",(0,c.jsxs)(n.p,{children:['Si no quiere restringir los archivos mostrados a uno o a m\xe1s tipos, pase "*" (asterisco) o ".*" en ',(0,c.jsx)(n.em,{children:"elTipo"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["En Windows pase una extensi\xf3n de archivo Windows o un tipo de archivo Mac OS asociado con la ayuda del comando ",(0,c.jsx)(n.em,{children:"_o_MAP FILE TYPES"}),". Si quiere crear un documento sin extensi\xf3n, un documento con varias extensiones, o un documento con una extensi\xf3n de m\xe1s de tres caracteres, no utilice el par\xe1metro ",(0,c.jsx)(n.em,{children:"elTipo"})," y pase el nombre completo en ",(0,c.jsx)(n.em,{children:"documento"})," (ver ejemplo 2)."]}),"\n",(0,c.jsxs)(n.p,{children:["Una vez haya creado y abierto un documento, puede escribir o leer los valores del documento utilizando los comandos ",(0,c.jsx)(n.a,{href:"/docs/es/commands/receive-packet",children:"RECEIVE PACKET"})," y ",(0,c.jsx)(n.a,{href:"/docs/es/commands/send-packet",children:"SEND PACKET"})," que puede combinar con los comandos ",(0,c.jsx)(n.a,{href:"/docs/es/commands/get-document-position",children:"Get document position"})," y ",(0,c.jsx)(n.a,{href:"/docs/es/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para acceder directamente a ciertas partes del documento."]}),"\n",(0,c.jsxs)(n.p,{children:["No olvide llamar finalmente a ",(0,c.jsx)(n.a,{href:"/docs/es/commands/close-document",children:"CLOSE DOCUMENT"})," para el documento."]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,c.jsx)(n.p,{children:"El siguiente ejemplo crea y abre un nuevo documento llamado Nota, escribe la cadena \u201CHola\u201D y cierra el documento:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDoc : Time\n\xa0vhDoc:=Create document("Nota.txt")\xa0// Crear un nuevo documento llamado Nota\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDoc;"Hola")\xa0// Escribir una palabra en el documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDoc)\xa0// Cerrar el documento\n\xa0End if\n'})}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,c.jsx)(n.p,{children:"El siguiente ejemplo crea documentos con extensiones que no son est\xe1ndar en Windows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0$vtMiDoc:=Create document("Doc.ext1.ext2")\xa0//Varias extensiones\n\xa0$vtMiDoc:=Create document("Doc.shtml")\xa0//Extensi\xf3n larga\n\xa0$vtMiDoc:=Create document("Doc.")\xa0//Sin extensi\xf3n (el punto "." es obligatorio)\n'})}),"\n",(0,c.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,c.jsxs)(n.p,{children:["Si el documento se crea correctamente, la variable sistema OK toma el valor 1 y la variable sistema Document contiene la ruta completa y el nombre del archivo ",(0,c.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/append-document",children:"Append document"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/open-document",children:"Open document"})]}),"\n",(0,c.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"266"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Modifica variables"}),(0,c.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return r}});var a=o(667294);let c={},d=a.createContext(c);function r(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);