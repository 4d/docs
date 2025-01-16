"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19685"],{726548:function(e,a,r){r.r(a),r.d(a,{default:()=>m,frontMatter:()=>s,metadata:()=>n,assets:()=>t,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/compact-data-file","title":"Compact data file","description":"Compact data file ( rutaEstructura ; rutaDatos {; carpetaArchivo {; opcion {; metodo}}} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/compact-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/compact-data-file","permalink":"/docs/es/20-R7/commands/compact-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcompact-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"compact-data-file","title":"Compact data file","slug":"/commands/compact-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BUILD APPLICATION","permalink":"/docs/es/20-R7/commands/build-application"},"next":{"title":"COMPONENT LIST","permalink":"/docs/es/20-R7/commands/component-list"}}'),o=r("785893"),c=r("250065");let s={id:"compact-data-file",title:"Compact data file",slug:"/commands/compact-data-file",displayed_sidebar:"docs"},i=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Compact data file"})," ( ",(0,o.jsx)(a.em,{children:"rutaEstructura"})," ; ",(0,o.jsx)(a.em,{children:"rutaDatos"})," {; ",(0,o.jsx)(a.em,{children:"carpetaArchivo"})," {; ",(0,o.jsx)(a.em,{children:"opcion"})," {; ",(0,o.jsx)(a.em,{children:"metodo"}),"}}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe1metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rutaEstructura"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Ruta de acceso al archivo de estructura"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"rutaDatos"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Ruta de acceso al archivo de datos"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"carpetaArchivo"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Ruta de acceso a la carpeta donde se colocar\xe1 el archivo de datos original"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"opcion"}),(0,o.jsx)(a.td,{children:"Integer"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Opciones de compactaci\xf3n"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"metodo"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Nombre del m\xe9todo 4D de retrollamada"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Resultado"}),(0,o.jsx)(a.td,{children:"Text"}),(0,o.jsx)(a.td,{children:"\u2190"}),(0,o.jsx)(a.td,{children:"Ruta de acceso completa de la carpeta que contiene el archivo de datos original"})]})]})]}),"\n",(0,o.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(a.p,{children:["El comando ",(0,o.jsx)(a.strong,{children:"Compact data file"})," compacta el archivo de datos designado por el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaDatos"})," asociado al archivo de estructura ",(0,o.jsx)(a.em,{children:"rutaEstructura"}),". Para mayor informaci\xf3n sobre la compactaci\xf3n, consulte el Manual de Dise\xf1o."]}),"\n",(0,o.jsx)(a.p,{children:"Para asegurar la continuidad del funcionamiento de la base, el nuevo archivo de datos compactado reemplaza autom\xe1ticamente al archivo original. Por seguridad, el archivo original no se modifica y se mueve a una carpeta especial llamada \u201CReplaced files (compacting) YYYYMM-DD HH-MM-SS\u201D donde YYYY-MM-DD HH-MM-SS representa la fecha y hora del backup. Por ejemplo: \u201CReplaced files (compacting) 2007-09-27 15-20-35\u201D."}),"\n",(0,o.jsxs)(a.p,{children:["El comando devuelve la ruta de acceso completa de la carpeta efectivamente creada para almacenar el archivo de datos original. Este comando s\xf3lo puede ser ejecutado desde 4D (modo local) o 4D Server (procedimiento almacenado). El archivo de datos a compactar debe corresponder al archivo de estructura designado por ",(0,o.jsx)(a.em,{children:"rutaEstructura"}),". Adem\xe1s, el archivo de datos no debe abrirse durante la ejecuci\xf3n del comando; de lo contrario se genera un error."]}),"\n",(0,o.jsx)(a.p,{children:"Si se produce un error durante el proceso de compactaci\xf3n, los archivos originales se conservan en su ubicaci\xf3n inicial. Si un archivo de \xedndice (.4DIndx file) est\xe1 asociado con el archivo de datos, tambi\xe9n se compacta. Como para el archivo de datos, el archivo original se guarda y la nueva versi\xf3n reemplaza la anterior."}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["En el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaEstructura"}),", pase el nombre de la ruta completa del archivo de estructura asociado con el archivo de datos que quiere compactar. Esta informaci\xf3n es necesaria para el proceso de compactaci\xf3n. La ruta de acceso debe expresarse en la sintaxis del sistema operativo. Igualmente puede pasar una cadena vac\xeda; en este caso, aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos de manera que pueda designar el archivo de estructura a utilizar."]}),"\n",(0,o.jsxs)(a.li,{children:["En el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaDatos"}),", puede pasar una cadena vac\xeda, un nombre de archivo o una ruta completa de acceso, expresada en la sintaxis del sistema operativo. Si pasa una cadena vac\xeda, aparece la caja de di\xe1logo de apertura de archivos est\xe1ndar de manera que el usuario pueda designar el archivo de datos a compactar. Este archivo debe corresponder al archivo de estructura definido en el par\xe1metro ",(0,o.jsx)(a.em,{children:"rutaEstructura"}),". Si pasa \xfanicamente un nombre de archivo de datos, 4D lo buscar\xe1 al mismo nivel que el archivo de estructura."]}),"\n",(0,o.jsxs)(a.li,{children:["El par\xe1metro opcional ",(0,o.jsx)(a.em,{children:"carpetaArchivo"})," puede ser utilizado para especificar la ubicaci\xf3n de la carpeta \u201CReplaced files (compacting) FechaHora\u201D destinada a recibir las versiones originales de los archivos de datos as\xed como los eventuales archivos del \xedndice.",(0,o.jsx)(a.br,{}),"\nEl comando devuelve la ruta de acceso completa de la carpeta creada efectivamente.",(0,o.jsx)(a.br,{}),"\n- Si omite este par\xe1metro, los archivos originales son colocados autom\xe1ticamente en una carpeta \u201CReplaced files (compacting) FechaHora\u201D que se crea junto al archivo de estructura.",(0,o.jsx)(a.br,{}),"\n- Si pasa una cadena vac\xeda, aparece una caja de di\xe1logo est\xe1ndar de apertura de archivos permiti\xe9ndole al usuario designar la ubicaci\xf3n de la carpeta a crear.",(0,o.jsx)(a.br,{}),"\n- Si pasa una ruta de acceso (expresada en la sintaxis del sistema operativo), el comando crear\xe1 la carpeta \u201CReplaced files (compacting) FechaHora\u201D a esta ubicaci\xf3n."]}),"\n",(0,o.jsxs)(a.li,{children:["El par\xe1metro opcional ",(0,o.jsx)(a.em,{children:"opciones"})," se utiliza para definir diferentes opciones de compactaci\xf3n. Para hacerlo, utilice las siguientes constantes, del tema \u201C",(0,o.jsx)(a.em,{children:"Mantenimiento archivo de datos"}),"\u201D. Puede pasar varias opciones combin\xe1ndolas:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Constante"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{children:"Valor"}),(0,o.jsx)(a.th,{children:"Comentario"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Compact address table"}),(0,o.jsx)(a.td,{children:"Entero largo"}),(0,o.jsx)(a.td,{children:"131072"}),(0,o.jsx)(a.td,{children:'Fuerza la reescritura de la tabla de direcciones de los registros (ralentiza la compactaci\xf3n). Note que en este caso, los n\xfameros de registro se reescriben. Si s\xf3lo pasa esta opci\xf3n, 4D activa autom\xe1ticamente la opci\xf3n "Actualizar registros".'})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Create process"}),(0,o.jsx)(a.td,{children:"Entero largo"}),(0,o.jsx)(a.td,{children:"32768"}),(0,o.jsx)(a.td,{children:"Cuando se pasa esta opci\xf3n, la compactaci\xf3n ser\xe1 asincr\xf3nica y deber\xe1 administrar los resultados utilizando el m\xe9todo de retrollamada (ver a continuaci\xf3n). 4D no mostrar\xe1 la barra de progreso (es posible hacerlo v\xeda el m\xe9todo de retrollamada). La variable sistema OK toma el valor 1 si el proceso se ha lanzado correctamente y 0 en todos los otros casos. Cuando no se pasa esta opci\xf3n, la variable OK toma el valor 1 si la compactaci\xf3n se realiza correctamente, de lo contrario 0."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Do not create log file"}),(0,o.jsx)(a.td,{children:"Entero largo"}),(0,o.jsx)(a.td,{children:"16384"}),(0,o.jsx)(a.td,{children:"Por lo general, este comando crea un archivo de historial en formato XML (consulte el final de la descripci\xf3n del comando). Con esta opci\xf3n, no se crear\xe1 un archivo de historial."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Timestamp log file name"}),(0,o.jsx)(a.td,{children:"Entero largo"}),(0,o.jsx)(a.td,{children:"262144"}),(0,o.jsx)(a.td,{children:"Cuando esta opci\xf3n se pasa, el nombre del archivo de historial generado contendr\xe1 la fecha y hora de su creaci\xf3n; como resultado, no reemplazar\xe1 cualquier archivo de historial generado anteriormente. Por defecto, si no se pasa esta opci\xf3n, los nombres de archivos de historial no son marcados con la fecha y hora y cada nuevo archivo generado sustituye al anterior."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Update records"}),(0,o.jsx)(a.td,{children:"Entero largo"}),(0,o.jsx)(a.td,{children:"65536"}),(0,o.jsx)(a.td,{children:"Fuerza la rescritura de todos los registros en funci\xf3n de la definici\xf3n actual de los campos en la estructura"})]})]})]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["El par\xe1metro ",(0,o.jsx)(a.em,{children:"metodo"})," se utiliza para designar un m\xe9todo de retrollamada que ser\xe1 llamado regularmente durante la compactaci\xf3n si se pasa la opci\xf3n Create process. De lo contrario, el m\xe9todo de retrollamada nunca ser\xe1 llamado. Para mayor informaci\xf3n sobre este m\xe9todo, por favor consulte la descripci\xf3n del comando ",(0,o.jsx)(a.a,{href:"/docs/es/20-R7/commands/verify-data-file",children:"VERIFY DATA FILE"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Por defecto, el comando ",(0,o.jsx)(a.strong,{children:"Compact data file"})," crea un archivo de historial en formato XML (si no ha pasado la opci\xf3n Do not create log file, ver el par\xe1metro ",(0,o.jsx)(a.em,{children:"opciones"}),"). Su nombre est\xe1 basado en el archivo de estructura de la base actual y est\xe1 ubicado en la carpeta ",(0,o.jsx)(a.strong,{children:"Logs"})," de esta base. Por ejemplo, para un archivo de estructura llamado \u201CmyDB.4db,\u201D el archivo de historial ser\xe1 llamado \u201CmyDB_Compact_Log.xml.\u201D"]}),"\n",(0,o.jsxs)(a.p,{children:['Si ha pasado la opci\xf3n Timestamp log file name, el nombre del archivo de historial incluye la fecha y la hora de su creaci\xf3n en la forma "AAAA-MM-DD HH-MM-SS", lo que nos da, por ejemplo:',(0,o.jsx)(a.br,{}),"\n\u201CmyDB_Compact_Log_2015-09-27 15-20-35.xml\u201D. Este principio permite evitar que cada nuevo archivo de historial reemplace al anterior, pero podr\xeda requerir una acci\xf3n manual posterior para eliminar archivos innecesarios. Independientemente de la opci\xf3n seleccionada, tan pronto como se genera un archivo de historial, su trayectoria se devuelve en la variable sistema ",(0,o.jsx)(a.em,{children:"Document"})," despu\xe9s de la ejecuci\xf3n del comando."]}),"\n",(0,o.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(a.p,{children:"El siguiente ejemplo (Windows) efect\xfaa la compactaci\xf3n de un archivo de datos:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:'\xa0$structFile:=Structure file\n\xa0$dataFile:="C:\\\\Databases\\\\Invoices\\\\January\\\\Invoices.4dd"\n\xa0$origFile:="C:\\\\Databases\\\\Invoices\\\\Archives\\\\January\\\\"\n\xa0$archFolder:=Compact data file($structFile;$dataFile;$origFile)\n'})}),"\n",(0,o.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(a.p,{children:"Si la operaci\xf3n de compactaci\xf3n se lleva a cabo correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0. Sin un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema Document."}),"\n",(0,o.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/docs/es/20-R7/commands/table-fragmentation",children:"Table fragmentation"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/es/20-R7/commands/verify-data-file",children:"VERIFY DATA FILE"})]}),"\n",(0,o.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero de comando"}),(0,o.jsx)(a.td,{children:"937"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Hilo seguro"}),(0,o.jsx)(a.td,{children:"\u2713"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Modifica variables"}),(0,o.jsx)(a.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return s}});var n=r(667294);let o={},c=n.createContext(o);function s(e){let a=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);