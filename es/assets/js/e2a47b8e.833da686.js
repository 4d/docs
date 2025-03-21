"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48225"],{964641:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>o,assets:()=>l,toc:()=>d,contentTitle:()=>i});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-link","title":"WP SET LINK","description":"WP SET LINK ( objRango ; objEnlace )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-link.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-link","permalink":"/docs/es/20-R7/WritePro/commands/wp-set-link","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-link.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-link","title":"WP SET LINK","slug":"/WritePro/commands/wp-set-link","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SET FRAME","permalink":"/docs/es/20-R7/WritePro/commands/wp-set-frame"},"next":{"title":"WP SET TEXT","permalink":"/docs/es/20-R7/WritePro/commands/wp-set-text"}}'),a=r("785893"),s=r("250065");let t={id:"wp-set-link",title:"WP SET LINK",slug:"/WritePro/commands/wp-set-link",displayed_sidebar:"docs"},i=void 0,l={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP SET LINK"})," ( ",(0,a.jsx)(n.em,{children:"objRango"})," ; ",(0,a.jsx)(n.em,{children:"objEnlace"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objRango"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objEnlace"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valor enlace"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP SET LINK"})," aplica una referencia de hiperv\xednculo al ",(0,a.jsx)(n.em,{children:"objRango"}),". Se soportan enlaces a URL, m\xe9todos 4D y marcadores. El enlace activa una acci\xf3n cuando el usuario hace clic en \xe9l (o utiliza ",(0,a.jsx)(n.strong,{children:"Ctrl+clic"})," en Windows o ",(0,a.jsx)(n.strong,{children:"Cmd+clic"})," en macOS si el texto no es de solo lectura para abrir URL)."]}),"\n",(0,a.jsxs)(n.p,{children:["En ",(0,a.jsx)(n.em,{children:"objRango"}),", pase el objeto 4D Write Pro donde se aplicar\xe1 el enlace. Puedes pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (tabla / fila / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,a.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Por ejemplo, si pasa un encabezado, el contenido completo del encabezado se mostrar\xe1 como un hiperv\xednculo. Al insertar enlaces en sus documentos, 4D Write Pro aplica las siguientes reglas:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si define un enlace a un ",(0,a.jsx)(n.em,{children:"objRango"})," que contiene varios p\xe1rrafos, se definir\xe1n varios enlaces separados."]}),"\n",(0,a.jsxs)(n.li,{children:["Si define un enlace a un ",(0,a.jsx)(n.em,{children:"objRango"})," que ya contiene enlace(s):\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["todos los enlaces existentes que est\xe1n completamente incluidos en el ",(0,a.jsx)(n.em,{children:"objRango"})," se eliminan y el nuevo enlace se aplica a ",(0,a.jsx)(n.em,{children:"objRango"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Si un enlace se selecciona parcialmente (se cruza con ",(0,a.jsx)(n.em,{children:"objRango"}),"), se reduce para que la parte externa mantenga el enlace anterior y el nuevo enlace se aplique a ",(0,a.jsx)(n.em,{children:"objRango"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"objEnlace"}),", pase un objeto que describa el hiperv\xednculo. Debe contener solo una de las siguientes propiedades (excepto la propiedad del par\xe1metro que se puede utilizar junto con la propiedad del m\xe9todo):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Propiedad"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Tipo"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Acci\xf3n de hiperv\xednculo"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"url"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Destino para un hiperv\xednculo de tipo URL (url codificado)."}),(0,a.jsxs)(n.td,{children:["Hace referencia a una direcci\xf3n web est\xe1ndar (http o https://",(0,a.jsx)(n.em,{children:"website"}),", mailto:",(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.a,{href:"mailto:abc@xyz.com",children:"abc@xyz.com"}),","]})," etc.): abre la URL en la aplicaci\xf3n predeterminada (generalmente un navegador)Hace referencia a una ruta de archivo (absoluta o relativa al archivo de estructura 4D). Al hacer referencia a un archivo .4wp o .4w7 (file://",(0,a.jsx)(n.em,{children:"filepath"})," o ",(0,a.jsx)(n.em,{children:"filepath/file.4wp"}),"): carga y reemplaza el documento actual. Al hacer referencia a otros tipos de archivos, abre el archivo en la aplicaci\xf3n predeterminada del sistema para el tipo de archivo"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bookmark"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Nombre del marcador"}),(0,a.jsxs)(n.td,{children:["Accede al marcador especificado en el documento actual. (Consulte ",(0,a.jsx)(n.em,{children:"Comandos Marcadores"}),")"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"method"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsxs)(n.td,{children:["Nombre del m\xe9todo del proyecto: el m\xe9todo debe existir y se debe permitir con el comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-allowed-methods",children:"SET ALLOWED METHODS"}),"."]}),(0,a.jsxs)(n.td,{children:["Ejecuta el m\xe9todo 4D cuando se hace clic. El m\xe9todo recibe autom\xe1ticamente dos par\xe1metros en $1 y $2:",(0,a.jsx)(n.br,{}),(0,a.jsx)(n.table,{children:(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Par\xe1metro"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Propiedad"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Tipo"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"Descripci\xf3n"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$1"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Nombre del \xe1rea 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"$2"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"Objeto"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"m\xe9todo"}),(0,a.jsx)(n.td,{children:"Texto"}),(0,a.jsx)(n.td,{children:"Nombre del m\xe9todo 4D"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"par\xe1metro"}),(0,a.jsx)(n.td,{children:"Texto | N\xfamero"}),(0,a.jsx)(n.td,{children:"Par\xe1metro del usuario enviado al m\xe9todo a trav\xe9s de la propiedad del par\xe1metro (opcional, ver abajo)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:"rango"}),(0,a.jsx)(n.td,{children:"Objeto"}),(0,a.jsxs)(n.td,{children:["Rango de ",(0,a.jsx)(n.em,{children:"objRango"})]})]})]})})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"par\xe1metro"}),(0,a.jsx)(n.td,{children:"Texto | N\xfamero"}),(0,a.jsxs)(n.td,{children:["Solo se utiliza con un enlace de tipo ",(0,a.jsx)(n.em,{children:"m\xe9todo"}),", no es obligatorio si el m\xe9todo no requiere un par\xe1metro. Contiene un par\xe1metro adicional para enviar al m\xe9todo."]}),(0,a.jsx)(n.td,{children:"Recibido en el par\xe1metro $2. dentro del m\xe9todo"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"4D Write Pro solo acepta URL v\xe1lidas (codificadas). Los caracteres especiales en los enlaces no est\xe1n traducidos. Si los caracteres especiales (es decir,% 20 para espacios) son necesarios, debe codificarlos expresamente. Si el enlace no es v\xe1lido, se genera un error."}),"\n",(0,a.jsx)(n.li,{children:"Los enlaces a los m\xe9todos 4D se eliminan de los documentos 4D Write Pro cuando se exportan en formato HTML, MIME HTML o .docx."}),"\n",(0,a.jsxs)(n.li,{children:["Si desea eliminar un enlace de ",(0,a.jsx)(n.em,{children:"objRango"}),", consulte el p\xe1rrafo ",(0,a.jsx)(n.em,{children:"Gesti\xf3n de URLs"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Desea agregar un enlace a su sitio web en el \xe1rea del pie de p\xe1gina de su documento:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $footer : Object\n\xa0$footer:=WP Get footer(WPArea;1)\n\xa0WP SET TEXT($footer;"Please visit our website";wk replace)\n\xa0WP SET LINK($footer;New object("url";"http://www.4d.com"))\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Desea crear una tabla de contenido con enlaces utilizando todos los marcadores en su documento:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $i;$n;$p;$memoStart : Integer\n\xa0var $range;$link;$toc;$tocRange;$positionInfo;$target : Object\n\xa0var $text : Text\n\xa0\n\xa0ARRAY TEXT($_bookmarks;0)\n\xa0WP GET BOOKMARKS(WParea1;$_bookmarks)\xa0//encuentra todos los marcadores\n\xa0\n\xa0$n:=Size of array($_bookmarks)\n\xa0If($n>0)\n\xa0\xa0\xa0\xa0$tocRange:=WP Text range(WParea1;wk start text;wk start text)\xa0//encuentra el comienzo del texto\n\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk page break;wk append;wk exclude from range)\xa0//agrega un salto de p\xe1gina antes del texto\n\xa0\n\xa0\xa0\xa0\xa0For($i;1;$n)\xa0// Inserta la tabla de contenidos y enlaces\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$range:=WP Bookmark range(WParea1;$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$positionInfo:=WP Get position($range)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$memoStart:=$tocRange.end\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET TEXT($tocRange;Char(Tab)+$_bookmarks{$i}+Char(Tab)+String($positionInfo.page);wk append;wk include in range)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$target:=WP Text range($tocRange;$memoStart+1;$memoStart+1+Length($_bookmarks{$i}))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$link:=New object("bookmark";$_bookmarks{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET LINK($target;$link)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($tocRange;wk line break;wk append;wk include in range)\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:'Desea definir un enlace a un m\xe9todo 4D en cada cadena "4D" en el documento:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $text,$find : Text\n\xa0var $p : Integer\n\xa0var $range;$link : Object\n\xa0\n\xa0$text:=WP Get text(wpArea;wk expressions as value)\xa0//recupera todo el texto del documento\n\xa0\n\xa0$find:="4D"\xa0//destino para el enlace\n\n\n\xa0$p:=Position($find;$text)\xa0//recorre el texto para encontrar todas las instancias del objetivo\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$range:=WP Text range(wpArea;$p;$p+Length($find))\xa0//define la longitud del objetivo\n\xa0\xa0//create the link object\n\xa0\xa0\xa0\xa0$link:=New object("method";"myAlert";"parameter";"4D rocks!")\xa0//No se olvide de autorizar con SET ALLOWED METHODS \xa0\n\xa0\n\xa0\xa0\xa0\xa0WP SET LINK($range;$link)\n\xa0End if\n\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/20-R7/WritePro/commands/wp-get-links",children:"WP Get links"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var o=r(667294);let a={},s=o.createContext(a);function t(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);