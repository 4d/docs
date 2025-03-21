"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19648"],{828852:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>t,contentTitle:()=>c});var d=JSON.parse('{"id":"commands-legacy/open-document","title":"Open document","description":"Open document ( doc {; tipo}{; modo} ) : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-document.md","sourceDirName":"commands-legacy","slug":"/commands/open-document","permalink":"/docs/es/20-R7/commands/open-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-document","title":"Open document","slug":"/commands/open-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Object to path","permalink":"/docs/es/20-R7/commands/object-to-path"},"next":{"title":"Path to object","permalink":"/docs/es/20-R7/commands/path-to-object"}}'),s=o("785893"),a=o("250065");let r={id:"open-document",title:"Open document",slug:"/commands/open-document",displayed_sidebar:"docs"},c=void 0,i={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Open document"})," ( ",(0,s.jsx)(n.em,{children:"doc"})," {; ",(0,s.jsx)(n.em,{children:"tipo"}),"}{; ",(0,s.jsx)(n.em,{children:"modo"}),"} ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"doc"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nombre del documento o Ruta de acceso completa al documento o Cadena vac\xeda para mostrar la caja de di\xe1logo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:'Lista de los tipos de documentos a filtrar o "*" para no filtrar los documentos'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Modo de apertura del documento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia del documento"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando Open document abre el documento cuyo nombre o ruta de acceso se pasa en ",(0,s.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,s.jsx)(n.em,{children:"document"}),", aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos y el usuario puede seleccionar el documento a abrir. Si cancela el di\xe1logo, no se abre el documento; Open document devuelve una referencia de documento nula y la variable OK toma el valor 0."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si el documento se abre correctamente, Open document devuelve su n\xfamero de referencia y la variable OK toma el valor 1."}),"\n",(0,s.jsxs)(n.li,{children:["Si el documento est\xe1 abierto en lectura y se omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"modo"}),", Open document abre el documento en modo lectura/escritura y la variable OK toma el valor 1."]}),"\n",(0,s.jsx)(n.li,{children:"Si el documento ya est\xe1 abierto en modo escritura/lectura y usted intenta abrirlo en modo Escritura, se genera el error (-43). Sin embargo puede abrirlo en modo lectura \xfanicamente, luego la variable OK toma el valor 1."}),"\n",(0,s.jsx)(n.li,{children:"Si el documento no existe, se genera un error."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"elTipo"}),", pase el o los tipo(s) de archivo(s) que pueden ser seleccionados en la caja de di\xe1logo de apertura. Puede pasar una lista de varios tipos separados por un ; (punto y coma). Para cada tipo definido, se a\xf1adir\xe1 una l\xednea en el men\xfa de elecci\xf3n del tipo de caja de di\xe1logo."]}),"\n",(0,s.jsxs)(n.p,{children:['Bajo Mac OS, puede pasar el tipo Mac OS cl\xe1sico (TEXT, APPL, etc.), o un tipo UTI (Uniform Tipo Identifier). Los tipos UTIs son definidos por Apple para responder a las necesidades de estandarizaci\xf3n de los tipos de archivos. Por ejemplo, "public.text" es el tipo UTI de los archivos de tipo texto. Para mayor informaci\xf3n sobre los UTIs, consulte ',(0,s.jsx)(n.em,{children:"Introduction to Uniform Type Identifiers Overview page"})," en el sitio web ",(0,s.jsx)(n.em,{children:"developer.apple.com"})," (documentaci\xf3n en ingl\xe8s)."]}),"\n",(0,s.jsxs)(n.p,{children:["Bajo Windows, tambi\xe9n puede pasar un tipo de archivo cl\xe1sico Mac OS, 4D efect\xfaa la correspondencia interna, o la extensi\xf3n de los archivos (.txt, .exe, etc.). Note que bajo Windows, el usuario puede \u201Cforzar\u201D la visualizaci\xf3n de todos los tipos de archivos introduciendo *.* en la caja de di\xe1logo. Sin embargo, en este caso, 4D llevar\xe1 a cabo una verificaci\xf3n adicional de los tipos de archivos seleccionados: si el usuario selecciona un tipo de archivo no autorizado, el comando devuelve un error.",(0,s.jsx)(n.br,{}),'\nSi no quiere restringir los archivos mostrados a uno o varios tipos, pase la cadena "*" (asterisco) o ".*" en ',(0,s.jsx)(n.em,{children:"elTipo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"modo"})," permite definir el modo de apertura del archivo ",(0,s.jsx)(n.em,{children:"documento"}),". Est\xe1n disponibles cuatro modos de apertura. 4D ofrece las siguientes constantes predefinidas, ubicadas en el tema ",(0,s.jsx)(n.em,{children:"Documentos sistema"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Read and Write"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Write Mode"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Read Mode"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Get Pathname"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si un documento est\xe1 abierto, Open document se ubica inicialmente al comienzo del documento, mientras ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-document",children:"Append document"})," se ubica al final del documento."]}),"\n",(0,s.jsxs)(n.p,{children:["Una vez haya abierto un documento, puede leer y escribir en el documento utilizando los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/receive-packet",children:"RECEIVE PACKET"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-packet",children:"SEND PACKET"})," que puede combinar con los comandos ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-document-position",children:"Get document position"})," y ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-document-position",children:"SET DOCUMENT POSITION"})," para acceder directamente a cualquier parte del documento."]}),"\n",(0,s.jsxs)(n.p,{children:["No olvide llamar finalmente a ",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/close-document",children:"CLOSE DOCUMENT"})," para el documento."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo abre un documento existente llamado Note, escribe la cadena \u201CGood-bye\u201D en el documento y lo cierra. Todo contenido existente en el documento se sobrescribir\xe1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var vhDoc : Time\n\xa0vhDoc:=Open document("Note.txt";Read and Write)\xa0//Abrir el documento Note\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SEND PACKET(vhDoc;"Good-bye")\xa0//Escribe una palabra en el documento\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT(vhDoc)\xa0//Cierra el documento\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Puede leer un documento incluso si est\xe1 abierto en modo escritura:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vDoc:=Open document("PassFile";"TEXT")\xa0// El archivo est\xe1 abierto\n\xa0\xa0// Antes de cerrar el archivo, es posible consultarlo en modo de solo lectura:\n\xa0vRef:=Open document("PassFile";"TEXT";Read Mode)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el documento se abre correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0. Despu\xe9s de la llamada, la variable sistema Document contiene el nombre completo del documento."}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el valor 3 en ",(0,s.jsx)(n.em,{children:"modo"}),", la funci\xf3n devuelve ?00:00:00? (sin referencia de documento). El documento no se abre pero las variables sistema Document y OK se actualizan:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OK toma el valor 1."}),"\n",(0,s.jsxs)(n.li,{children:["Document contiene la ruta de acceso y el nombre del archivo ",(0,s.jsx)(n.em,{children:"document"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si no se encuentra el archivo definido en ",(0,s.jsx)(n.em,{children:"documento"})," o si pasa una cadena vac\xeda en ",(0,s.jsx)(n.em,{children:"documento"}),", aparece una caja de di\xe1logo de apertura de archivos. Si el usuario elije un documento y hace clic en el bot\xf3n OK, ",(0,s.jsx)(n.em,{children:"documento"})," define la ruta al documento seleccionado por el usuario y OK toma el valor 1. Si el usuario hace clic en el bot\xf3n Cancelar, OK toma el valor 0."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-document",children:"Append document"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",children:"Create document"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"264"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return r}});var d=o(667294);let s={},a=d.createContext(s);function r(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);