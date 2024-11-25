"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88825"],{824271:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/path-to-object","title":"Path to object","description":"Path to object  ( Ruta {; tipoRuta} ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/path-to-object.md","sourceDirName":"commands-legacy","slug":"/commands/path-to-object","permalink":"/docs/es/commands/path-to-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpath-to-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"path-to-object","title":"Path to object","slug":"/commands/path-to-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Open document","permalink":"/docs/es/commands/open-document"},"next":{"title":"RESOLVE ALIAS","permalink":"/docs/es/commands/resolve-alias"}}'),o=t("785893"),r=t("250065");let a={id:"path-to-object",title:"Path to object",slug:"/commands/path-to-object",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Path to object"}),"  ( ",(0,o.jsx)(n.em,{children:"Ruta"})," {; ",(0,o.jsx)(n.em,{children:"tipoRuta"}),"} ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Ruta"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de la ruta"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tipoRuta"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tipo de sintaxis de ruta: Sistema (por defecto) o Posix"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Objeto que describe los contenidos de la ruta"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"Path to object"}),"  devuelve un objeto que contiene las propiedades espec\xedficas de la ",(0,o.jsx)(n.em,{children:"ruta"})," que pas\xf3 en el par\xe1metro."]}),"\n",(0,o.jsxs)(n.p,{children:["De forma predeterminada, si omite el par\xe1metro ",(0,o.jsx)(n.em,{children:"tipoRuta"}),", se asumir\xe1 que pas\xf3 una ",(0,o.jsx)(n.em,{children:"ruta"}),' del sistema que contiene separadores del sistema ("\\" en Windows, ":" en macOS). Si pas\xf3 una ',(0,o.jsx)(n.em,{children:"ruta"}),' Posix que contiene separadores de Posix ("/") o desea expresar el tipo de ruta, pase una de las siguientes constantes en el par\xe1metro ',(0,o.jsx)(n.em,{children:"tipoRuta"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Comentario"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path is POSIX"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"La ruta se expresa utilizando la sintaxis de Posix"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Path is system"}),(0,o.jsx)(n.td,{children:"Entero largo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"(Por defecto) La ruta se expresa utilizando la sintaxis actual del sistema (Windows o macOS)"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["El comando devuelve un objeto resultante de analizar la ",(0,o.jsx)(n.em,{children:"ruta"}),". Las siguientes propiedades est\xe1n disponibles:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Propiedad"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Tipo"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"parentFolder"}),(0,o.jsx)(n.td,{children:"Texto"}),(0,o.jsx)(n.td,{children:"Informaci\xf3n del directorio para la ruta. El \xfaltimo caracter es siempre un separador de carpetas."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"Texto"}),(0,o.jsx)(n.td,{children:"Nombre del archivo o carpeta final de la ruta especificada, sin extensi\xf3n."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"extension"}),(0,o.jsx)(n.td,{children:"Texto"}),(0,o.jsx)(n.td,{children:'Extensi\xf3n del nombre final de archivo o carpeta. Siempre comienza por ".". Cadena vac\xeda "" si no hay extensi\xf3n.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"isFolder"}),(0,o.jsx)(n.td,{children:"Booleano"}),(0,o.jsx)(n.td,{children:"True si el nombre es un nombre de carpeta, de lo contrario, de lo contrario (el valor predeterminado es false)"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Se supondr\xe1 que pas\xf3 una ruta de carpeta si el \xfaltimo car\xe1cter de la ",(0,o.jsx)(n.em,{children:"ruta"}),' es un separador correspondiente al tipo de ruta (por ejemplo, "\\" en Windows). De lo contrario, se supondr\xe1 que pas\xf3 un nombre de archivo.',(0,o.jsx)(n.br,{}),"\nLa extensi\xf3n, si no est\xe1 vac\xeda, se devuelve independientemente de si la ruta representa un archivo o una carpeta. En este caso, debe concatenar el nombre y la extensi\xf3n para recuperar el nombre completo."]}),"\n",(0,o.jsxs)(n.p,{children:["Tenga en cuenta que ",(0,o.jsx)(n.strong,{children:"Path to object"}),"  solo maneja cadenas. Tampoco comprueba si la ruta es v\xe1lida con respecto al tipo de ruta, ni a la existencia real de ning\xfan archivo o carpeta."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Los siguientes ejemplos muestran varios resultados con rutas de archivos:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("C:\\\\first\\\\second\\\\fileZ")\xa0//en Windows\n\xa0\xa0//$o.parentFolder="C:\\\\first\\\\second\\\\"\n\xa0\xa0//$o.name="fileZ"\n\xa0\xa0//$o.extension=""\n\xa0\xa0//$o.isFolder=false\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("osx:Users:john:Documents:Comments.text) \xa0//en macOS\n\xa0\xa0//$o.parentFolder="osx:Users:john:Documents:"\n\xa0\xa0//$o.name="Comments"\n\xa0\xa0//$o.extension=".text"\n\xa0\xa0//$o.isFolder=false\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("\\\\images\\\\jan\\\\pict1.png";Path is system)\xa0//en Windows\n\xa0\xa0//$o.parentFolder="\\\\images\\\\jan\\\\"\n\xa0\xa0//$o.name="pict1"\n\xa0\xa0//$o.extension=".png"\n\xa0\xa0//$o.isFolder=false\n'})}),"\n",(0,o.jsx)(n.p,{children:"Definiendo una ruta a una carpeta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:")\xa0//macOS\n\xa0\xa0//$o.parentFolder="osx:Users:oscargoldman:Desktop:"\n\xa0\xa0//$o.name="Databases"\n\xa0\xa0//$o.extension=""\n\xa0\xa0//$o.isFolder=True\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("C:\\\\4D\\\\Main\\\\216410\\\\64\\\\4D\\\\4D.user\\\\") \xa0//windows\n\xa0\xa0//$o.parentFolder="C:\\\\4D\\\\Main\\\\216410\\\\64\\\\4D\\\\"\n\xa0\xa0//$o.name="4D"\n\xa0\xa0//$o.extension=".user"\n\xa0\xa0//$o.isFolder=true\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("/first/second.bundle/";Path is POSIX)\n\xa0\xa0//$o.parentFolder="/first/"\n\xa0\xa0//$o.name="second"\n\xa0\xa0//$o.extension=".bundle"\n\xa0\xa0//$o.isFolder=true\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Si la ruta es un directorio ra\xedz, ",(0,o.jsx)(n.em,{children:"parentFolder"})," est\xe1 vac\xedo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("C:\\\\") \xa0//en windows\n\xa0\xa0//$o.parentFolder=""\n\xa0\xa0//$o.name="c:"\n\xa0\xa0//$o.extension=""\n\xa0\xa0//$o.isFolder=true\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("osx:")\xa0//en macOS\n\xa0\xa0//$o.parentFolder=""\n\xa0\xa0//$o.name="osx"\n\xa0\xa0//$o.extension=""\n\xa0\xa0//$o.isFolder=true\n'})}),"\n",(0,o.jsx)(n.p,{children:'Si la \xfaltima parte de la ruta es ".something", se considera como un nombre de archivo:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=Path to object("/folder/.invisible";Path is POSIX)\n\xa0\xa0//$o.parentFolder="/folder/"\n\xa0\xa0//$o.name=".invisible"\n\xa0\xa0//$o.extension=""\n\xa0\xa0//$o.isFolder=false\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(n.p,{children:["Puede combinar este comando con ",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-to-path",children:"Object to path"})," para cambiar el nombre de un archivo en una ruta:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $path : Text\n\xa0$o:=Path to object("C:\\\\4D\\\\resources\\\\images\\\\4D.jpg")\n\xa0\xa0//$o.parentFolder="C:\\\\4D\\\\resources\\\\images\\\\"\n\xa0\xa0//$o.name="4D"\n\xa0\xa0//$o.extension=".jpg"\n\xa0\xa0//$o.isFolder=false\n\xa0\n\xa0$o.name:="4DOld"\n\xa0$path:=Object to path($o)\n\xa0\xa0//$path="C:\\4D\\resources\\images\\4DOld.jpg"\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.p,{children:"Desea saber la cantidad de subcarpetas en una ruta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $path : Text\n\xa0var $vCount : Integer\n\xa0$path:=Select folder\xa0//let the user select a folder\n\xa0$o:=Path to object($path)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$o:=Path to object($o.parentFolder)\n\xa0\xa0\xa0\xa0$vCount:=$vCount+1\n\xa0Until($o.parentFolder="")\n\xa0ALERT("The path depth is: "+String($count))\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/convert-path-posix-to-system",children:"Convert path POSIX to system"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/convert-path-system-to-posix",children:"Convert path system to POSIX"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"file.md",children:"File"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"folder.md",children:"Folder "}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-to-path",children:"Object to path"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/test-path-name",children:"Test path name"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let o={},r=s.createContext(o);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);