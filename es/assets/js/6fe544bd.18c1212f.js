"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52183"],{775125:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-new","title":"WP New","description":"WP New {( fuente {; opcion} )} -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-new.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new","permalink":"/docs/es/WritePro/commands/wp-new","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-new","title":"WP New","slug":"/WritePro/commands/wp-new","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Is font style supported","permalink":"/docs/es/WritePro/commands/wp-is-font-style-supported"},"next":{"title":"WP NEW BOOKMARK","permalink":"/docs/es/WritePro/commands/wp-new-bookmark"}}'),a=o("785893"),t=o("250065");let s={id:"wp-new",title:"WP New",slug:"/WritePro/commands/wp-new",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP New"})," {( ",(0,a.jsx)(n.em,{children:"fuente"})," {; ",(0,a.jsx)(n.em,{children:"opcion"}),"} )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"fuente"}),(0,a.jsx)(n.td,{children:"Text, Blob, Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsxs)(n.td,{children:["Cadena: Fuente HTML,",(0,a.jsx)(n.br,{}),"BLOB: documento 4D Write Pro (.4wp) o Blob documento 4D Write(.4w7/.4wt)",(0,a.jsx)(n.br,{}),"Objeto: rango o elemento o documento 4D Write Pro"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"opcion"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Opci\xf3n de importaci\xf3n para expresiones HTML"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Objeto 4D Write Pro"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP New"})," crea y devuelve un objeto 4D Write Pro. El objeto devuelto es un documento completo que se puede pasar al comando ",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-insert-document-body",children:"WP INSERT DOCUMENT"}),", por ejemplo."]}),"\n",(0,a.jsxs)(n.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,a.jsx)(n.em,{children:"fuente"}),", el comando devuelve un objeto 4D Write Pro vac\xedo."]}),"\n",(0,a.jsxs)(n.p,{children:["Si se utiliza el par\xe1metro ",(0,a.jsx)(n.em,{children:"fuente"}),", el nuevo objeto 4D Write Pro se llenar\xe1 con el contenido del la ",(0,a.jsx)(n.em,{children:"fuente"}),". Puede pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un par\xe1metro ",(0,a.jsx)(n.a,{href:"#",title:"A character string",children:"cadena"}),": en este caso, pase una fuente HTML 4D, es decir, un texto exportado por ",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-export-variable",children:"WP EXPORT VARIABLE"})," con la opci\xf3n wk web page html 4D. Este texto puede contener referencias (etiquetas y expresiones 4D e im\xe1genes anidadas)."]}),"\n",(0,a.jsxs)(n.li,{children:["un par\xe1metro ",(0,a.jsx)(n.a,{href:"#",title:"A series of bytes (from 0 to 2 GB in length)",children:"blob"}),": en este caso, pase:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un documento en formato 4D Write Pro (.4wp) almacenado en un BLOB.",(0,a.jsx)(n.br,{}),"\nPara mayor informaci\xf3n sobre el formato del documento 4D Write Pro, consulte ",(0,a.jsx)(n.em,{children:"Formato del documento .4wp"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["una antigua \xe1rea 4D Write cargada en un BLOB (los Blobs que contienen documentos .4w7 o .4wt son soportados). En este contexto, puede utilizar el par\xe1metro ",(0,a.jsx)(n.em,{children:"opcion"})," para incluir expresiones HTML como txt en el documento importado (consulte a continuaci\xf3n).",(0,a.jsx)(n.br,{}),"\nPara una lista detallada de las funcionalidades 4D Write que actualmente son soportadas en objetos 4D Write Pro, consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Importar documentos 4D Write"}),".",(0,a.jsx)(n.br,{}),"\nSi desea importar un documento 4D Write (.4w7 o .4wt) almacenado en el disco, tambi\xe9n puede considerar el uso del comando ",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-import-document",children:"WP Import document"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["un par\xe1metro ",(0,a.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"objeto"})," que puede ser:\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un rango.",(0,a.jsx)(n.br,{}),"\nEn este caso ",(0,a.jsx)(n.strong,{children:"WP New"})," devolver\xe1 un nuevo documento creado desde el rango especificado. Tenga en cuenta que, si el rango no es igual al rango del documento completo, s\xf3lo la primera secci\xf3n se exporta y los marcadores no se exportan, si los hay."]}),"\n",(0,a.jsxs)(n.li,{children:["o un elemento (tabla / l\xednea / p\xe1rrafo / cuerpo / encabezado / pie / imagen en l\xednea / caja de texto / secci\xf3n / subsecci\xf3n / hoja de estilo).",(0,a.jsx)(n.br,{}),"\nEn este caso ",(0,a.jsx)(n.strong,{children:"WP New"})," devolver\xe1 un nuevo documento que contiene el contenido de la referencia del elemento en la parte del cuerpo (para una fila, el nuevo documento contendr\xe1 un elemento de tabla con la fila)."]}),"\n",(0,a.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["De forma predeterminada, las expresiones HTML insertadas en documentos antiguos 4D Write no se importan (no es soportado por 4D Write Pro). Si pasa la constante wk import html expressions as texten el par\xe1metro ",(0,a.jsx)(n.em,{children:"opcion"}),", las expresiones HTML se importar\xe1n como texto sin procesar dentro de las etiquetas ",(0,a.jsx)(n.em,{children:"##htmlBegin##"})," y ",(0,a.jsx)(n.em,{children:"##htmlEnd##"})," tags -- lo que requerir\xe1 acciones de formateo posteriores. Por ejemplo"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-RAW",children:"##htmlBegin##Imported titlebold##htmlEnd##\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.em,{children:"Nota de compatibilidad"}),": las hojas de estilo de caracteres en los documentos 4D Write"]})," ",(0,a.jsx)(n.em,{children:"heredados"}),"   ",(0,a.jsx)(n.em,{children:'utilizan un mecanismo patentado, que no es soportado por 4D Write Pro. Para obtener el mejor resultado para el texto importado, los atributos de la hoja de estilo se convierten en atributos de estilo "codificados". Las hojas de estilo de caracteres heredadas no se importan y ya no se hace referencia a ellas en el documento.'})]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Desea crear un objeto 4D Write Pro vac\xedo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0myWPObject:=WP New\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Desea crear un nuevo objeto 4D Write Pro utilizando un documento 4D Write Pro almacenado en el disco:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $BlobDoc : Blob\n\xa0var myWPArea : Object\n\xa0DOCUMENT TO BLOB("myDoc.4wp";$BlobDoc)\xa0//cargar el documento en un Blob\n\xa0myWPArea:=WP New($BlobDoc)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Desea crear un objeto 4D Write Pro que contiene una referencia de expresi\xf3n 4D simple:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var myText : Text\n\xa0myText:="Today is "\n\xa0ST INSERT EXPRESSION(myText;"string(current date;System date long)";ST End text)\n\xa0myWPA:=WP New(myText)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,a.jsx)(n.p,{children:"Usted desea inicializar su \xe1rea 4D Write Pro con una plantilla creada previamente:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//Exportar plantilla desde un \xe1rea existente\n\xa0var wpTemplate : Text\n\xa0WP EXPORT VARIABLE(myWPArea;wpTemplate;wk web page html 4D)\n\xa0\n\xa0\xa0// Utilizar la plantilla para una nueva \xe1rea\n\xa0var myNewWPA : Object\n\xa0myNewWPA:=WP New(wpTemplate)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,a.jsx)(n.p,{children:"Usted desea importar en una nueva \xe1rea 4D Write Pro un documento del antiguo plug-in 4D Write almacenado en un campo BLOB del registro actual, y conservar las expresiones HTML:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var wpArea : Object\n\xa0wpArea=WP New([Templates]Reference_;wk import html expressions as text)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,a.jsx)(n.p,{children:"Se ha definido un documento de plantilla con diferentes partes con formato previo, cada una de ellas se almacena como un marcador. Al producir un documento final de la plantilla, puede extraer cualquier marcador como un nuevo documento e insertarlo en el documento final."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_BookmarkNames;0)\n\xa0WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames)\xa0//obtener los marcadores de la plantilla\n\xa0$targetRange:=WP New\xa0//crear un documento vacio (ser\xe1 el documento final)\n\xa0\n\xa0$p:=Find in array($_BookmarkNames;"Main_Header")\xa0//manejar la parte principal del encabezado\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p})\xa0//seleccionar el rango\n\xa0\xa0\xa0\xa0$RangeDoc:=WP New($Range)\xa0//crear un nuevo documento del rango\n\xa0\xa0\xa0\xa0WP INSERT DOCUMENT($targetRange;$RangeDoc;wk append+wk freeze expressions)\xa0//wk append=despu\xe9s de la sustituci\xf3n, $targetRange es igual al final del texto reemplazado\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-import-document",children:"WP Import document"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-insert-document-body",children:"WP INSERT DOCUMENT"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return s}});var r=o(667294);let a={},t=r.createContext(a);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);