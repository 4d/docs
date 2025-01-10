"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68268"],{79378:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-picture-metadata","title":"GET PICTURE METADATA","description":"GET PICTURE METADATA ( imagen ; nomMeta ; ContenidoMeta {; nomMeta2 ; ContenidoMeta2 ; ... ; nomMetaN ; ContenidoMetaN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-picture-metadata.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-metadata","permalink":"/docs/es/commands/get-picture-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-metadata.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-metadata","title":"GET PICTURE METADATA","slug":"/commands/get-picture-metadata","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/es/commands/get-picture-keywords"},"next":{"title":"Is picture file","permalink":"/docs/es/commands/is-picture-file"}}'),t=a("785893"),d=a("250065");let r={id:"get-picture-metadata",title:"GET PICTURE METADATA",slug:"/commands/get-picture-metadata",displayed_sidebar:"docs"},l=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET PICTURE METADATA"})," ( ",(0,t.jsx)(n.em,{children:"imagen"})," ; ",(0,t.jsx)(n.em,{children:"nomMeta"})," ; ",(0,t.jsx)(n.em,{children:"ContenidoMeta"})," {; ",(0,t.jsx)(n.em,{children:"nomMeta2"})," ; ",(0,t.jsx)(n.em,{children:"ContenidoMeta2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"nomMetaN"})," ; ",(0,t.jsx)(n.em,{children:"ContenidoMetaN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"imagen"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Imagen de la cual obtener los metadatos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomMeta"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre o ruta de acceso del bloque a leer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ContenidoMeta"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contenido del metadato"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"GET PICTURE METADATA"})," permite leer el contenido de los metadatos (o meta-tags) presentes en ",(0,t.jsx)(n.em,{children:"imagen"})," (campo o variable imagen 4D). Para mayor informaci\xf3n sobre metadatos, consulte la descripci\xf3n del comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-picture-metadata",children:"SET PICTURE METADATA"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"nomMeta"}),", pase una cadena especificando el tipo de metadato a recuperar. Puede pasar:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["una constante del tema ",(0,t.jsx)(n.em,{children:"Nombres de metadatos im\xe1genes"})," con una ruta de etiqueta,"]}),"\n",(0,t.jsx)(n.li,{children:'el nombre de un bloque completo de metadatos ("TIFF", "EXIF", "GPS" o "IPTC"),'}),"\n",(0,t.jsx)(n.li,{children:'una cadena vac\xeda ("").'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,t.jsx)(n.em,{children:"ContenidoMeta"})," la variable destinada a recibir los metadatos."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si pasa una ruta de etiqueta en ",(0,t.jsx)(n.em,{children:"nomMeta"}),", el par\xe1metro ",(0,t.jsx)(n.em,{children:"ContenidoMeta"})," contiene directamente el valor a leer. El valor se convertir\xe1 en el tipo de la variable (si el tipo de variable no se ha definido, se utilizar\xe1 el tipo texto por defecto. Las variables de tipo texto ser\xe1n formateadas en XML (est\xe1ndar XMP). Puede pasar un array cuando el metadato contiene m\xe1s de un valor (este es el caso, particularmente, para las etiquetas IPTC Keywords)."]}),"\n",(0,t.jsxs)(n.li,{children:["Si pasa un nombre de bloque o una cadena vac\xeda en ",(0,t.jsx)(n.em,{children:"nomMeta"}),", el par\xe1metro ",(0,t.jsx)(n.em,{children:"ContenidoMeta"})," debe ser una referencia valida del elemento DOM XML. En este caso, el contenido del bloque designado (o de todos los bloques si pas\xf3 una cadena vac\xeda en ",(0,t.jsx)(n.em,{children:"nomMeta"}),") se copia nuevamente en el elemento de referencia."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Uso de estructuras de \xe1rbol DOM"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$xml:=DOM Create XML Ref("Root")\xa0//Creaci\xf3n de un \xe1rbol XML DOM\n\xa0\n\xa0\xa0//Recepci\xf3n de los metadatos TIFF\n\xa0$_Xml_TIFF:=DOM Create XML element($xml;"/Root/TIFF")\n\xa0GET PICTURE METADATA(vImagen;"TIFF";$_Xml_TIFF)\n\xa0\n\xa0\xa0//Recepci\xf3n de los metadatos GPS\n\xa0$_Xml_GPS:=DOM Create XML element($xml;"/Root/GPS")\n\xa0GET PICTURE METADATA(vImagen;"GPS";$_Xml_GPS)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Uso de variables"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $fechaComoFecha : Date\n\xa0GET PICTURE METADATA(vImagen;TIFF DateTime;$fechaComoFecha)\n\xa0\xa0//devuelve \xfanicamente la fecha ya que $fechaComoFecha es de tipo Fecha\n\xa0\n\xa0var $fechaComoTexto : Text\n\xa0GET PICTURE METADATA(vImagen;TIFF/DateTime;$fechaComoTexto)\n\xa0\xa0//devuelve \xfanicamente la fecha en formato XML\n\xa0\n\xa0C_INTEGER($urgency)\n\xa0GET PICTURE METADATA(vImagen;IPTC urgency;$urgencia)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Recepci\xf3n de etiquetas con valores m\xfaltiples en arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tTkeywords;0)\n\xa0GET PICTURE METADATA(vImagen;IPTC keywords;$tTkeywords)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Despu\xe9s de la ejecuci\xf3n del comando, arrTkeywords contiene por ejemplo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$arrTkeywords{1}="Francia"\n\xa0$arrTkeywords{2}="Europa"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,t.jsx)(n.p,{children:"Recepci\xf3n de etiquetas con valores m\xfaltiples en una variable Texto"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $vTwords;0 : Text\n\xa0GET PICTURE METADATA(vImagen;IPTC keywords;$vTwords)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Despu\xe9s de la ejecuci\xf3n del comando, ",(0,t.jsx)(n.em,{children:"vTwords"}),' contiene por ejemplo "Francia;Europa".']}),"\n",(0,t.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsxs)(n.p,{children:["La variable sistema ",(0,t.jsx)(n.em,{children:"OK"})," devuelve 1 si la recuperaci\xf3n de los metadatos es correcta y 0 si se produce un error o si no se encuentra al menos una de las etiquetas. En todos los casos, se devuelven los valores legibles."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/get-picture-keywords",children:"GET PICTURE KEYWORDS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Nombres de metadatos im\xe1genes"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Picture Metadata Values"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-picture-metadata",children:"SET PICTURE METADATA"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1122"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return r}});var s=a(667294);let t={},d=s.createContext(t);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);