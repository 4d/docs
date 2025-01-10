"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79799"],{561051:function(e,n,a){a.r(n),a.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>s});var r=JSON.parse('{"id":"commands-legacy/export-data","title":"EXPORT DATA","description":"EXPORT DATA ( nomArchivo {; proyecto {; *}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-data.md","sourceDirName":"commands-legacy","slug":"/commands/export-data","permalink":"/docs/es/commands/export-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-data","title":"EXPORT DATA","slug":"/commands/export-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Import and Export","permalink":"/docs/es/category/import-and-export"},"next":{"title":"EXPORT DIF","permalink":"/docs/es/commands/export-dif"}}'),o=a("785893"),t=a("250065");let i={id:"export-data",title:"EXPORT DATA",slug:"/commands/export-data",displayed_sidebar:"docs"},s=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"EXPORT DATA"})," ( ",(0,o.jsx)(n.em,{children:"nomArchivo"})," {; ",(0,o.jsx)(n.em,{children:"proyecto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"nomArchivo"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Ruta de acceso y nombre del archivo a exportar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"proyecto"}),(0,o.jsx)(n.td,{children:"Text, Blob"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Contenido del proyecto de exportaci\xf3n"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nuevo contenido del proyecto de exportaci\xf3n (si se  pasa el par\xe1metro *)"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Visualizaci\xf3n de la caja de di\xe1logo de exportaci\xf3n y actualizaci\xf3n del proyecto"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando EXPORT DATA exportar datos en el archivo ",(0,o.jsx)(n.em,{children:"nomArchivo"}),". 4D puede exportar datos en los siguientes formatos: Texto, Texto de longitud fija, XML, SYLK, DIF, DBF (dBase) y 4D."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,o.jsx)(n.em,{children:"nomArchivo"}),", EXPORT DATA muestra la caja de di\xe1logo est\xe1ndar de guardar archivos, permitiendo al usuario definir el nombre, tipo y ubicaci\xf3n del archivo de exportaci\xf3n. Una vez aceptada la caja de di\xe1logo, la variable sistema Documento contiene la ruta de acceso y el nombre del archivo. Si el usuario hace clic en ",(0,o.jsx)(n.strong,{children:"Cancelar"}),", se detiene la ejecuci\xf3n del comando y la variable sistema OK toma el valor 0."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"proyecto"})," permite utilizar un proyecto para exportar datos. Cuando pasa este par\xe1metro, se lleva a cabo la exportaci\xf3n directamente, sin ninguna intervenci\xf3n (a menos de que utilice la opci\xf3n *, ver a continuaci\xf3n). Si no pasa este par\xe1metro, aparece la caja de di\xe1logo de exportaci\xf3n. El usuario puede definir sus par\xe1metros de exportaci\xf3n o cargar un proyecto de exportaci\xf3n existente."]}),"\n",(0,o.jsxs)(n.p,{children:["Un proyecto de exportaci\xf3n contiene todos los par\xe1metros de exportaci\xf3n, tales como las tablas y campos a exportar, los delimitadores, etc. En el par\xe1metro ",(0,o.jsx)(n.em,{children:"proyecto"})," puede pasar una variable Texto con XML o una variable Texto con una referencia a un elemento DOM pre existente, o un BLOB. Los proyectos pueden crearse por programaci\xf3n (proyectos de formato XML \xfanicamente) o cargando los par\xe1metros previamente definidos en la caja de di\xe1logo de exportaci\xf3n. En el \xfaltimo caso, hay dos soluciones disponibles:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Usar el comando EXPORT DATA con un par\xe1metro ",(0,o.jsx)(n.em,{children:"proyecto"})," vac\xedo y el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", luego guardar el par\xe1metro ",(0,o.jsx)(n.em,{children:"proyecto"})," en un campo Texto o BLOB (ver a continuaci\xf3n). Esta soluci\xf3n le permite guardar el proyecto con el archivo de datos."]}),"\n",(0,o.jsxs)(n.li,{children:["Guardar el proyecto en el disco, luego cargarlo utilizando el comando DOM Parse XML source y pasando su referencia en el par\xe1metro ",(0,o.jsx)(n.em,{children:"proyecto"}),".\n",(0,o.jsx)(n.strong,{children:"Nota de compatibilidad"}),": a partir de la versi\xf3n 12 de 4D, los proyectos de exportaci\xf3n son codificados en XML. 4D puede abrir los proyectos de exportaci\xf3n generados con las versiones anteriores de 4D (formato BLOB), sin embargo los proyectos creados a partir de la v12 no pueden abrirse con una versi\xf3n 11 o anterior. Adem\xe1s se recomienda utilizar variables Texto para manipular los archivos de exportaci\xf3n."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", si se especifica, hace que aparezca la caja de di\xe1logo de exportaci\xf3n con los par\xe1metros definidos en ",(0,o.jsx)(n.em,{children:"proyecto"}),". Esta caracter\xedstica le permite utilizar un proyecto predefinido, mientras tiene a\xfan la posibilidad de modificar uno o m\xe1s par\xe1metros. Adem\xe1s, el par\xe1metro ",(0,o.jsx)(n.em,{children:"proyecto"})," contiene, despu\xe9s de cerrar la caja de di\xe1logo de exportaci\xf3n, los par\xe1metros del \u201Cnuevo\u201D proyecto. Entonces puede almacenar el nuevo proyecto en un campo BLOB, en disco, etc."]}),"\n",(0,o.jsx)(n.p,{children:"Si la exportaci\xf3n fue exitosa, la variable sistema OK es igual a 1."}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo presenta el uso del comando EXPORT DATA para exportar datos en formato binario."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Este m\xe9todo hace un bucle por todas las tablas de la base y llama al m\xe9todo ExportBinary:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $ExportPath : Text\n\xa0var $i : Integer\n\xa0$ExportPath:=Select folder("Por favor seleccione la carpeta de exportaci\xf3n:")\n\xa0If(Ok=1)\n\xa0\xa0\xa0\xa0For($i;1;Last table number)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ExportBinary(Table($i);$ExportPath+Table name($i);True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0End if\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Este es el c\xf3digo del m\xe9todo ExportBinary:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $1 : Pointer\xa0//tabla\n\xa0var $2 : Text\xa0//ruta del archivo de destino\n\xa0var $3 : Boolean\xa0//exportar todos los registros\n\xa0var $i : Integer\n\xa0var $ref : Text\n\xa0$ref:=DOM Create XML Ref("settings-import-export")\n\xa0\xa0// Exportar la tabla "$1" en formato binario \'4D\', todos los registros o \xfanicamente la selecci\xf3n actual\n\xa0DOM SET XML ATTRIBUTE($ref;"table_no";Table($1);"format";"4D";"all_records";$3)\n\xa0\xa0// Definici\xf3n de los campos a exportar\n\xa0For($i;1;Last field number($1))\n\xa0\xa0\xa0\xa0If(Is field number valid($1;$i))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$elt:=DOM Create XML element($ref;"field";"table_no";Table($1);"field_no";$i)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0EXPORT DATA($2;$ref)\n\xa0If(Ok=0)\n\xa0\xa0\xa0\xa0ALERT("Error durante la exportaci\xf3n de la tabla "+Table name($1))\n\xa0End if\n\xa0DOM CLOSE XML($ref)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo crea un proyecto vac\xedo y guarda los par\xe1metros definidos por el usuario en la caja de di\xe1logo de exportaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $exportParams : Text\n\xa0EXPORT DATA("DocExport.txt";$exportParams;*)\xa0// Visualizaci\xf3n de la caja de di\xe1logo de exportaci\xf3n\n'})}),"\n",(0,o.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsxs)(n.p,{children:["Si el usuario hace clic en ",(0,o.jsx)(n.strong,{children:"Cancelar"})," en la caja de di\xe1logo est\xe1ndar de abrir archivos o de exportaci\xf3n, la variable sistema OK toma el valor 0. Si la exportaci\xf3n fue exitosa, la variable sistema OK toma el valor 1."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/export-dif",children:"EXPORT DIF"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/export-sylk",children:"EXPORT SYLK"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/export-text",children:"EXPORT TEXT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/import-data",children:"IMPORT DATA"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"666"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return i}});var r=a(667294);let o={},t=r.createContext(o);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);