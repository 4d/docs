"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88121"],{309021:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-export-variable","title":"WP EXPORT VARIABLE","description":"WP EXPORT VARIABLE ( docWP ; destino ; formato {; opcion} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-export-variable.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-export-variable","permalink":"/docs/es/20-R8/WritePro/commands/wp-export-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-export-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-export-variable","title":"WP EXPORT VARIABLE","slug":"/WritePro/commands/wp-export-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP EXPORT DOCUMENT","permalink":"/docs/es/20-R8/WritePro/commands/wp-export-document"},"next":{"title":"WP Find all","permalink":"/docs/es/20-R8/WritePro/commands/wp-find-all"}}'),s=r("785893"),i=r("250065");let a={id:"wp-export-variable",title:"WP EXPORT VARIABLE",slug:"/WritePro/commands/wp-export-variable",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Par\xe1metro opcion",id:"par\xe1metro-opcion",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP EXPORT VARIABLE"})," ( ",(0,s.jsx)(n.em,{children:"docWP"})," ; ",(0,s.jsx)(n.em,{children:"destino"})," ; ",(0,s.jsx)(n.em,{children:"formato"})," {; ",(0,s.jsx)(n.em,{children:"opcion"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docWP"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"destino"}),(0,s.jsx)(n.td,{children:"Variable texto, BLOB variable"}),(0,s.jsx)(n.td,{children:"\uD83E\uDC58"}),(0,s.jsx)(n.td,{children:"Variable a recibir contenidos exportados"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formato"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Formato de salida de la variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"opcion"}),(0,s.jsx)(n.td,{children:"Object, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Opciones de exportaci\xf3n"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"WP EXPORT VARIABLE"})," exporta el objeto 4D Write Pro ",(0,s.jsx)(n.em,{children:"docWP"})," en la variable 4D ",(0,s.jsx)(n.em,{children:"destino"})," con el ",(0,s.jsx)(n.em,{children:"format"})," ",(0,s.jsx)(n.em,{children:"o"})," especificado."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"docWP"}),", pase el objeto 4D Write Pro que desea exportar."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"destino"}),", pase la variable texto que desea llenar con el objeto 4D Write Pro exportado. El tipo de esta variable depende del formato de exportaci\xf3n especificado en el par\xe1metro de ",(0,s.jsx)(n.em,{children:"formato"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si pasa el formato .4wp nativo o el formato .docx, la variable ser\xe1 de tipo Blob,"}),"\n",(0,s.jsx)(n.li,{children:"Si pasa un formato HTML o SVG, la variable ser\xe1 de tipo Texto."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"format"})," ",(0,s.jsx)(n.em,{children:"o"}),", pase una constante del tema ",(0,s.jsx)(n.em,{children:"Constantes 4D Write Pro"})," definiendo el formato de exportaci\xf3n que desea utilizar. Cada formato se relaciona con un uso espec\xedfico. Los siguientes formatos son soportados:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk 4wp"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:["El documento 4D Write Pro se guarda en un formato de archivo nativo (HTML comprimido con im\xe1genes almacenadas en una carpeta separada). Las expresiones 4D no se calculan y las etiquetas 4D especificas se incluyen. ",(0,s.jsx)(n.br,{}),"Este formato es especialmente adecuado para guardar y archivar documentos 4D Write Pro en el disco sin ninguna p\xe9rdida."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk docx"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsxs)(n.td,{children:["Extensi\xf3n .docx. El documento 4D Write Pro se guarda en formato Microsoft Word (certificado para Microsoft Word 2010 y posteriores). ",(0,s.jsx)(n.br,{})," ",(0,s.jsx)(n.br,{}),"Las partes del documento exportadas son: Cuerpo / encabezados / pies de p\xe1gina / secciones Configuraci\xf3n de p\xe1gina / impresi\xf3n (m\xe1rgenes, color / imagen de fondo, bordes, relleno, tama\xf1o / orientaci\xf3n del papel) Im\xe1genes: patr\xf3n en l\xednea, anclado y de fondo (definido con wk background image) Variables y expresiones compatibles (n\xfamero de p\xe1gina, n\xfamero de p\xe1ginas, fecha, hora, metadatos). Las variables y expresiones no compatibles se evaluar\xe1n y congelar\xe1n antes de la exportaci\xf3n. Marcadores Tenga en cuenta que algunas configuraciones de 4D Write Pro pueden no estar disponibles o pueden comportarse de manera diferente en Microsoft Word."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk mime html"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"El documento 4D Write Pro se guarda como MIME HTML con documentos los documentos html y las im\xe1genes embebidas como partes MIME (codificado en base 64). Las expresiones se calculan ylas etiquetas  4D espec\xedficas se eliminan. Este formato es especialmente adecuado para el env\xedo de mensajes de correo electr\xf3nico HTML con el comando ."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk pdf"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:["Extensi\xf3n .pdf. El documento 4D Write Pro se guarda en formato PDF, en funci\xf3n del modo de vista P\xe1gina. Los siguientes metadatos se exportan en un documento PDF: T\xedtulo Autor Asunto Creador de contenido ",(0,s.jsx)(n.strong,{children:"Notas"}),": Las expresiones se congelan autom\xe1ticamente cuando se exporta el documento Los enlaces a los m\xe9todos NO se exportan"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk svg"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsxs)(n.td,{children:["La p\xe1gina del documento 4D Write Pro se guarda en formato SVG, seg\xfan el modo de vista P\xe1gina. ",(0,s.jsx)(n.strong,{children:"Nota"}),": al exportar a SVG, s\xf3lo puede exportar una p\xe1gina a la vez. Utilice el bot\xf3n wk page index para especificar la p\xe1gina a exportar."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk web page html 4D"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"El documento 4D Write Pro se guarda como HTML e incluye las etiquetas 4D espec\xedficas; cada expresi\xf3n se inserta como un espacio de no separaci\xf3n. Dado que este formato es sin p\xe9rdidas, es apropiado para el almacenamiento en un campo texto."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"Etiquetas 4D espec\xedficas" designa el XHTML 4D con un namespace y estilos CSS 4D.'}),"\n",(0,s.jsxs)(n.li,{children:["Para m\xe1s informaci\xf3n sobre el formato de documento 4D Write Pro, consulte ",(0,s.jsx)(n.em,{children:"Formato del documento .4wp"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Para ver una lista de diferencias conocidas o incompatibilidad al usar el formato .docx, consulte ",(0,s.jsx)(n.em,{children:"Importar y Exportar al formato .docx"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Al exportar al formato SVG con este comando, las im\xe1genes se anidan en formato base64."}),"\n",(0,s.jsxs)(n.li,{children:["Para m\xe1s informaci\xf3n sobre la exportaci\xf3n al formato SVG, consulte ",(0,s.jsx)(n.em,{children:"Exportar a formato SVG"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"par\xe1metro-opcion",children:"Par\xe1metro opcion"}),"\n",(0,s.jsxs)(n.p,{children:["Pase un ",(0,s.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"objeto"})," en la ",(0,s.jsx)(n.em,{children:"opcion"})," que contiene los valores para definir las propiedades del documento exportado. Las siguientes propiedades est\xe1n disponibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk CID host domain name"}),(0,s.jsx)(n.td,{children:"cidHostDomain"}),(0,s.jsx)(n.td,{children:"Nombre de dominio host CID: dominio de host que se agregar\xe1 a las URLs CID generadas, incluida una '@' como separador. Disponible solo cuando se utiliza el formato wk mime html."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk embedded pictures"}),(0,s.jsx)(n.td,{children:"embeddedPictures"}),(0,s.jsxs)(n.td,{children:["S\xf3lo para la exportaci\xf3n SVG. Define si las im\xe1genes se anidan en el archivo .svg exportado cuando se llama a ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-export-document",children:"WP EXPORT DOCUMENT"}),'. Valores disponibles: true (por defecto): las im\xe1genes se anidan en el archivo .svg exportado false: las im\xe1genes se exportan en una carpeta llamada "filename_images" al nivel del archivo .svg exportado, siendo "filename" el nombre pasado al comando para el archivo, sin la extensi\xf3n. Las im\xe1genes no est\xe1n anidadas, sino referenciadas en el archivo .svg. Tenga en cuenta que: Si la carpeta ya existe, se vac\xeda antes de exportar el archivo Si no hay ninguna imagen en la p\xe1gina exportada, la carpeta se borra']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk google fonts tag"}),(0,s.jsx)(n.td,{children:"googleFontsTag"}),(0,s.jsxs)(n.td,{children:["S\xf3lo para la exportaci\xf3n SVG. Define la regla de importaci\xf3n para las fuentes de Google en el SVG exportado. Valores posibles: false (por defecto): no se a\xf1ade ninguna regla de importaci\xf3n de Google fonts. true: a\xf1ade la regla de @importaci\xf3n al archivo exportado. Es \xfatil si quiere utilizar fuentes que no est\xe1n disponibles por defecto en Windows o macOS. ",(0,s.jsx)(n.strong,{children:"Nota:"})," esta propiedad est\xe1 definida como falsa por defecto porque cuando est\xe1 activa, las fuentes de Google anulan las fuentes nativas, y las fuentes nativas generalmente se renderizan mejor en el navegador."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk HTML pretty print"}),(0,s.jsx)(n.td,{children:"htmlPrettyPrint"}),(0,s.jsx)(n.td,{children:"El c\xf3digo HTML est\xe1 formateado para facilitar su lectura."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk max picture DPI"}),(0,s.jsx)(n.td,{children:"maxPictureDPI"}),(0,s.jsx)(n.td,{children:"Se utiliza para volver reajustar (reducir) las im\xe1genes a la resoluci\xf3n preferida. Para im\xe1genes SVG en Windows, utilizadas para rasterizaci\xf3n. Valores predeterminados: 300 (for wk optimized for = wk print) 192 (for wk optimized for = wk screen) Valor m\xe1ximo posible: 1440"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk optimized for"}),(0,s.jsx)(n.td,{children:"optimizedFor"}),(0,s.jsx)(n.td,{children:"Define c\xf3mo se optimiza un documento exportado seg\xfan su soporte. Valores posibles: wk print (valor predeterminado para wk pdf y wk svg) Las im\xe1genes mapa de bits pueden reducirse utilizando el DPI definido por wk max picture DPI o 300 (valor predeterminado) y pueden convertirse a PNG si el c\xf3dec no es compatible con el tipo de exportaci\xf3n. Las im\xe1genes vectoriales se convierten a PNG utilizando el DPI definido por wk max picture DPI o 300 (Windows \xfanicamente) Si una imagen contiene m\xe1s de un formato, se utiliza el mejor formato para imprimir (por ejemplo, .tiff o .jpg) wk screen (valor predeterminado para wk web page complete y wk mime html) Las im\xe1genes mapa de bits pueden reducirse utilizando el DPI definido por wk max picture DPI o 192 (valor predeterminado) y pueden convertirse a JPEG (im\xe1genes opacas) o PNG (im\xe1genes transparentes) si el c\xf3dec no es soportado por el tipo de exportaci\xf3n. Las im\xe1genes vectoriales se convierten a PNG utilizando el DPI definido por wk max picture DPI o 192 (Windows \xfanicamente) Si una imagen contiene m\xe1s de un formato, se utilizar\xe1 el mejor formato para la representaci\xf3n en pantalla Nota: los documentos exportados en formato wk docx siempre se optimizan para wk print (se ignora la opci\xf3n wk optimized for)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk page index"}),(0,s.jsx)(n.td,{children:"pageIndex"}),(0,s.jsxs)(n.td,{children:["S\xf3lo para la exportaci\xf3n SVG. \xcdndice de la p\xe1gina a exportar a formato svg (por defecto es 1). El \xedndice de la p\xe1gina comienza en 1 para la primera p\xe1gina del documento. ",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Nota"}),": el \xedndice de p\xe1ginas es independiente de la numeraci\xf3n de p\xe1ginas."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk pdfa version"}),(0,s.jsx)(n.td,{children:"pdfaVersion"}),(0,s.jsxs)(n.td,{children:["Exporta PDF conforme a una versi\xf3n PDF/A. Para m\xe1s informaci\xf3n sobre las propiedades y versiones de PDF/A, consulte la ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/PDF/A",children:"p\xe1gina PDF/A en Wikipedia"}),'. Valores posibles: wk pdfa2: exporta a la versi\xf3n "PDF/A-2" wk pdfa3: exporta a la versi\xf3n "PDF/A-3" ',(0,s.jsx)(n.strong,{children:"Nota:"}),' en macOS, wk pdfa2 puede exportar a PDF/A-2 o PDF/A-3 o superior, dependiendo de la implementaci\xf3n de la plataforma. Adem\xe1s, wk pdfa3 significa "exporta al menos a PDF/A-3". En Windows, el archivo PDF de salida siempre ser\xe1 igual a la conformidad deseada.']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk recompute formulas"}),(0,s.jsx)(n.td,{children:"recomputeFormulas"}),(0,s.jsx)(n.td,{children:"Define si las f\xf3rmulas deben recalcularse cuando se exportan. Valores posibles: true - Valor por defecto. Todas las f\xf3rmulas son recalculadas false- No recalcula las f\xf3rmulas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk visible background and anchored elements"}),(0,s.jsx)(n.td,{children:"visibleBackground"}),(0,s.jsx)(n.td,{children:"Muestra o exporta im\xe1genes/color de fondo, im\xe1genes ancladas y cajas de texto (para visualizaci\xf3n, efecto visible solo en el modo de vista de p\xe1gina o anidado). Valores posibles: True/False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk visible empty images"}),(0,s.jsx)(n.td,{children:"visibleEmptyImages"}),(0,s.jsx)(n.td,{children:"Muestra o exporta un rect\xe1ngulo negro por defecto para las im\xe1genes que no pueden ser cargadas o calculadas (im\xe1genes vac\xedas o en un formato no soportado). Valores posibles: True/False. Valor por defecto: True Si el valor es False, los elementos imagen que falten no se mostrar\xe1n en absoluto aunque tengan bordes, ancho, alto o fondo; esto puede afectar al dise\xf1o de la p\xe1gina para las im\xe1genes en l\xednea."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk visible footers"}),(0,s.jsx)(n.td,{children:"visibleFooters"}),(0,s.jsx)(n.td,{children:"Muestra los pies de p\xe1gina (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk visible headers"}),(0,s.jsx)(n.td,{children:"visibleHeaders"}),(0,s.jsx)(n.td,{children:"Muestra los encabezados (efecto visible solo en el modo de visualizaci\xf3n de p\xe1gina). Valores posibles: Verdadero/Falso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk visible references"}),(0,s.jsx)(n.td,{children:"visibleReferences"}),(0,s.jsx)(n.td,{children:"Muestra todas las expresiones 4D insertadas en el documento como referencias. Valores posibles: Verdadero/Falso"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["La siguiente tabla indica la ",(0,s.jsx)(n.em,{children:"opcion"})," disponible por ",(0,s.jsx)(n.em,{children:"formato"})," de exportaci\xf3n:"]}),"\n",(0,s.jsxs)(n.p,{children:["| |  ",(0,s.jsx)(n.strong,{children:"wk 4wp"}),"                                            | ",(0,s.jsx)(n.strong,{children:"wk docx"}),"                                                                    | ",(0,s.jsx)(n.strong,{children:"wk mime html"}),"                                                              | ",(0,s.jsx)(n.strong,{children:"wk pdf"}),"                                                                                      | ",(0,s.jsx)(n.strong,{children:"wk web page html 4D"}),"                                                        | ",(0,s.jsx)(n.strong,{children:"wk svg"}),"                                                                     |                                                                                                |---|\n| -------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |\n| wk CID host domain name",(0,s.jsx)(n.br,{}),"                     | -                                                                             | -                                                                            | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"}),"                                       | -                                                                             | -                                                                             |                                                                                                |\n| wk HTML pretty print",(0,s.jsx)(n.br,{}),"                        | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: false) | -                                                                            | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: False)                  | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: False) | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: False) | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: False)                 |\n| wk max picture DPI",(0,s.jsx)(n.br,{}),"                          | -                                                                             | siempre 300                                                                   | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"}),"                                       | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: 300)   | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: 300)                   |\n| wk optimized for",(0,s.jsx)(n.br,{}),"                            | -                                                                             | siempre wk print                                                              | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto:wk screen) ",(0,s.jsx)(n.br,{})," | siempre wk print                                                               | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto:wk print) ",(0,s.jsx)(n.br,{})," |\n| wk recompute formulas",(0,s.jsx)(n.br,{}),"                       | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true) | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                   | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)  | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                  |\n| wk visible background and anchored elements",(0,s.jsx)(n.br,{})," | -                                                                             | siempre true                                                                  | siempre true                                                                                    | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)  | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                  |\n| wk visible footers",(0,s.jsx)(n.br,{}),"                          | -                                                                             | siempre true                                                                  | siempre false                                                                                   | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)  | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                  |\n| wk visible headers",(0,s.jsx)(n.br,{}),"                          | -                                                                             | siempre true                                                                  | siempre false                                                                                   | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)  | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                  |\n| wk visible empty images",(0,s.jsx)(n.br,{}),"                     | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true) | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                   | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)  | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: true)                  |\n| wk visible references",(0,s.jsx)(n.br,{}),"                       | -                                                                             | -                                                                            | -                                                                                              | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: false) | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: false)                 |\n| wk pdfa version",(0,s.jsx)(n.br,{}),"                             | -                                                                             | -                                                                            | -                                                                                              | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"}),"                      | -                                                                             | -                                                                                             |\n| wk page index",(0,s.jsx)(n.br,{}),"                               | -                                                                             | -                                                                            | -                                                                                              | -                                                                             | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: 1)                     |\n| wk factur x",(0,s.jsx)(n.br,{}),"                                 | -                                                                             | -                                                                            | -                                                                                              | ",(0,s.jsx)(n.img,{src:r(173055).Z+"",width:"512",height:"512"}),"                      | -                                                                             | -                                                                                             |\n| wk files",(0,s.jsx)(n.br,{}),"                                    | -                                                                             | -                                                                            | -                                                                                              | ",(0,s.jsx)(n.img,{src:r(173055).Z+"",width:"512",height:"512"}),"                      | -                                                                             | -                                                                                             |\n| wk embedded pictures",(0,s.jsx)(n.br,{}),"                        | -                                                                             | -                                                                            | -                                                                                              | -                                                                             | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"}),"(por defecto: true)                   |\n| wk google fonts tag",(0,s.jsx)(n.br,{}),"                         | -                                                                             | -                                                                            | -                                                                                              | -                                                                             | -                                                                             | ",(0,s.jsx)(n.img,{src:r(834022).Z+"",width:"25",height:"25"})," (por defecto: false)                 |"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota de compatibilidad"}),": pasar un valor de tipo ",(0,s.jsx)(n.em,{children:"entero largo"})," en ",(0,s.jsx)(n.em,{children:"opcion"})," es soportado por razones de compatibilidad, pero se recomienda utilizar un par\xe1metro ",(0,s.jsx)(n.a,{href:"#",title:"Datos estructurados como forma de objeto nativo 4D",children:"objeto"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Desea exportar el contenido del objeto 4D Write Pro ",(0,s.jsx)(n.em,{children:"myArea"}),' al formato MIME y agregar "gmail.com" como dominio host:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $option : Object\n \n $option[wk CID host domain name]:="gmail.com"\n \n WP EXPORT VARIABLE(myArea;$export;wk mime html;$option)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Usted quiere enviar un correo electr\xf3nico con texto con estilo, referencias 4D e im\xe1genes. Puede utilizar un \xe1rea 4D Write Pro exportada al formato MIME y enviarla utilizando SMTP:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'  // create the transporter\n $server:=New object\n $server.host:="smtp.gmail.com"\n $server.port:=465\n $server.user:="4D@gmail.com"\n $server.password:="XXXX"\n \n $transporter:=SMTP New transporter($server)\n \n WP EXPORT VARIABLE(WParea;$mime;wk mime html)\n \n $mailTmp:=MAIL Convert from MIME($mime)\n \n  // a\xf1adir im\xe1genes (si las hay)\n If($mailTmp.attachments#Null)\n    $email.attachments:=$mailTmp.attachments\n End if\n \n $email.bodyStructure:=$mailTmp.bodyStructure\n $email.bodyValues:=$mailTmp.bodyValues\n \n $status:=$transporter.send($email)\n If(Not($status.success))\n    ALERT("An error occurred: "+$status.statusText)\n End if\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Para exportar la primera p\xe1gina de un 4D Write Pro como SVG en una variable de texto y ocultar los encabezados:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" var $options : Object\n var $destination : Text\n \n $options:=New object\n $options[wk optimized for]:=wk screen\n $options[wk visible headers]:=False\n WP EXPORT VARIABLE(WPArea;$destination;wk svg;$options)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Exportaci\xf3n a formatos HTML y MIME HTML"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Importar y Exportar al formato .docx"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-export-document",children:"WP EXPORT DOCUMENT"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},834022:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},173055:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/pict5058606.es-1329aa3f2e263a17b6b35ee315d23136.png"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var o=r(667294);let s={},i=o.createContext(s);function a(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);