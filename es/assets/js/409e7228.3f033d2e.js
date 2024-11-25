"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24480"],{795229:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>o,toc:()=>t,frontMatter:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-add-picture","title":"WP Add picture","description":"WP Add picture ( wpDoc {; imagen} ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-add-picture.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-add-picture","permalink":"/docs/es/WritePro/commands/wp-add-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-add-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-add-picture","title":"WP Add picture","slug":"/WritePro/commands/wp-add-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Comandos 4D Write Pro","permalink":"/docs/es/WritePro/commands/command-index"},"next":{"title":"WP Bookmark range","permalink":"/docs/es/WritePro/commands/wp-bookmark-range"}}'),i=a("785893"),s=a("250065");let d={id:"wp-add-picture",title:"WP Add picture",slug:"/WritePro/commands/wp-add-picture",displayed_sidebar:"docs"},c=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Add picture"})," ( ",(0,i.jsx)(n.em,{children:"wpDoc"})," {; ",(0,i.jsx)(n.em,{children:"imagen"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpDoc"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"imagen"}),(0,i.jsx)(n.td,{children:"Picture, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Imagen (campo o variable) o Ruta de la imagen (texto)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Objeto que hace referencia a la imagen"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP Add picture"})," ancla la ",(0,i.jsx)(n.em,{children:"imagen"})," en una ubicaci\xf3n fija dentro de ",(0,i.jsx)(n.em,{children:"wpDoc"})," y devuelve su referencia. La referencia devuelta se puede pasar al comando ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," para mover la ",(0,i.jsx)(n.em,{children:"imagen"})," a cualquier ubicaci\xf3n en ",(0,i.jsx)(n.em,{children:"wpDoc"})," (p\xe1gina, secci\xf3n, encabezado, pie de p\xe1gina, etc.) con una capa, tama\xf1o, etc. definidos."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"wpDoc"}),", pase el nombre de un objeto de documento 4D Write Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["En le par\xe1metro ",(0,i.jsx)(n.em,{children:"imagen"})," opcional, puede pasar:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ya sea una imagen 4D,"}),"\n",(0,i.jsxs)(n.li,{children:["o una cadena que contiene una ruta a un archivo de imagen almacenado en el disco, expresada usando la sintaxis del sistema.",(0,i.jsx)(n.br,{}),"\nPuede pasar una ruta de acceso completa o una ruta relativa al archivo de estructura de la base. Tambi\xe9n puede pasar un nombre de archivo, en cuyo caso el archivo debe estar ubicado al lado del archivo de estructura de la base. Si pasa un nombre de archivo, debe indicar la extensi\xf3n del archivo."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": se puede usar cualquier formato de imagen soportado por 4D (vea la secci\xf3n ",(0,i.jsx)(n.em,{children:"Im\xe1genes"}),"). Puede obtener la lista de formatos de imagen disponibles con el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),'. Si la imagen encapsula varios formatos (codecs), 4D Write Pro solo conserva un formato para mostrar y un formato para imprimir (si es diferente) en el documento; los "mejores" formatos se seleccionan autom\xe1ticamente.']}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si se omite ",(0,i.jsx)(n.em,{children:"imagen"}),", obtendr\xe1 una referencia de imagen v\xe1lida y se agregar\xe1 una imagen vac\xeda. Esto le permite llamar al comando ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," con el selector wk image expression para usar una expresi\xf3n 4D para llenar la imagen. Si la expresi\xf3n no se puede evaluar o no devuelve una imagen 4D v\xe1lida, se mostrar\xe1 una imagen vac\xeda (imagen de marco negro por defecto)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Por defecto, la imagen agregada es:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"anidada detr\xe1s del texto,"}),"\n",(0,i.jsx)(n.li,{children:"se muestra en la esquina superior izquierda del recuadro del papel,"}),"\n",(0,i.jsx)(n.li,{children:"mostrada en todas las p\xe1ginas."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La ubicaci\xf3n, la capa (en l\xednea, delante/detr\xe1s del texto), la visibilidad y las propiedades de la ",(0,i.jsx)(n.em,{children:"imagen"})," se pueden modificar con el comando ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"}),", o mediante acciones est\xe1ndar (consulte ",(0,i.jsx)(n.em,{children:"Utilizar las acciones est\xe1ndar 4D Write Pro"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-selection-range",children:"WP Selection range"})," devuelve un objeto ",(0,i.jsx)(n.em,{children:"referencia de imagen"})," si se selecciona una imagen anclada y un objeto de rango si se selecciona una imagen en l\xednea. Puede verificar si un objeto seleccionado es un objeto de imagen con el atributo wk type. Si el valor = 2, entonces es un objeto imagen; de lo contrario, es un objeto rango (valor = 0)."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Desea agregar una imagen con la configuraci\xf3n predeterminada utilizando un archivo de ruta."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $obPict : Object\n\xa0$obPict:=WP Add picture(myDoc;"C:\\\\Users\\\\John.Doe\\\\Pictures\\\\Sunrise.jpg")\n'})}),"\n",(0,i.jsx)(n.p,{children:"El resultado es:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(565322).Z+"",width:"913",height:"379"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Desea agregar una imagen redimensionada, centrada y anclada al encabezado:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $obImage : Object\n\xa0$obImage:=WP Add picture(myDoc;"C:\\\\Users\\\\John.Doe\\\\Pictures\\\\Saved Pictures\\\\Sunrise.jpg")\n\xa0WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)\n\xa0WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)\n\xa0WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)\n\xa0WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")\n'})}),"\n",(0,i.jsx)(n.p,{children:"El resultado es:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(794879).Z+"",width:"920",height:"381"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea utilizar una expresi\xf3n campo para agregar una imagen anclada a un documento que muestre texto de la base:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Flowers];[Flowers]Common_Name="tulip")\n\xa0WP SET TEXT(myDoc;[Flowers]Description;wk append)\xa0//insert text\n\xa0var $obImage : Object\n\xa0$obImage:=WP Add picture(myDoc)\n\xa0WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(876101).Z+"",width:"683",height:"249"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Gesti\xf3n de im\xe1genes"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-delete-picture",children:"WP DELETE PICTURE "}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},565322:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict3617325.en-271cc136ed83c0878d079d3ac862783c.png"},794879:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict3617351.en-0a827201644b2395e4d18eae13c2e2f8.png"},876101:function(e,n,a){a.d(n,{Z:function(){return r}});let r=a.p+"assets/images/pict3841719.en-31adce57bbdfc0d229b675581d891804.png"},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return d}});var r=a(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);