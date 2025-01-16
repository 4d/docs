"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67159"],{175998:function(e,a,n){n.r(a),n.d(a,{default:()=>m,frontMatter:()=>t,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/sql-export-database","title":"SQL EXPORT DATABASE","description":"SQL EXPORT DATABASE ( rutaCarpeta {; numArchivos {; tamLimiteArchivos {; tamLimiteCampos}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-export-database.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-database","permalink":"/docs/es/commands/sql-export-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-database.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-export-database","title":"SQL EXPORT DATABASE","slug":"/commands/sql-export-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/es/commands/sql-execute-script"},"next":{"title":"SQL EXPORT SELECTION","permalink":"/docs/es/commands/sql-export-selection"}}'),s=n("785893"),r=n("250065");let t={id:"sql-export-database",title:"SQL EXPORT DATABASE",slug:"/commands/sql-export-database",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let a={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"SQL EXPORT DATABASE"})," ( ",(0,s.jsx)(a.em,{children:"rutaCarpeta"})," {; ",(0,s.jsx)(a.em,{children:"numArchivos"})," {; ",(0,s.jsx)(a.em,{children:"tamLimiteArchivos"})," {; ",(0,s.jsx)(a.em,{children:"tamLimiteCampos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"rutaCarpeta"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:'Ruta de acceso de la carpeta de exportaci\xf3n o "" para mostrar una caja de di\xe1logo de selecci\xf3n de carpeta'})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"numArchivos"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"N\xfamero m\xe1ximo de archivos por carpeta"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tamLimiteArchivos"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Valor l\xedmite de tama\xf1o de los archivos de exportaci\xf3n (en KB)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"tamLimiteCampos"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Limite de tama\xf1o (en bytes) debajo del cual el contenido de un campo Texto, BLOB o Imagen se integrar\xe1 al archivo principal"})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:'El comando SQL EXPORT DATABASE exporta al formato SQL todos los registros de todas las tablas de la base. En SQL, esta operaci\xf3n de exportaci\xf3n global se llama "Dump".'}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," este comando no puede utilizarse con una conexi\xf3n externa abierta directamente o v\xeda ODBC."]}),"\n",(0,s.jsxs)(a.p,{children:["Para cada tabla, el comando genera un archivo de texto con las instrucciones SQL necesarias para la importaci\xf3n de los datos en otra base. Este archivo puede ser utilizado directamente por el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/sql-execute-script",children:"SQL EXECUTE SCRIPT"})," para importar los datos en otra base 4D."]}),"\n",(0,s.jsxs)(a.p,{children:['Los archivos de exportaci\xf3n se crear\xe1n en una carpeta llamada "SQLExport" ubicada en la carpeta de destino designada por el par\xe1metro rutaCarpeta. Por favor tenga en cuenta que si la carpeta "SQLExport" ya existe en la ubicaci\xf3n especificada, el comando se reemplazar\xe1 sin que se muestre ning\xfan mensaje de advertencia.',(0,s.jsx)(a.br,{}),'\nSi pasa una cadena vac\xeda en este par\xe1metro, 4D muestra una caja de di\xe1logo est\xe1ndar permiti\xe9ndole al usuario designar la carpeta de destino. Por defecto, la caja de di\xe1logo muestra la carpeta actual del usuario que abri\xf3 la sesi\xf3n ("Mis Documentos" bajo Windows o "Documents" bajo Mac OS).']}),"\n",(0,s.jsx)(a.p,{children:"Para cada tabla exportada, el comando efect\xfaa las siguientes acciones:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"se crea una subcarpeta con el nombre de la tabla en la carpeta de destino."}),"\n",(0,s.jsxs)(a.li,{children:['un archivo texto llamado "Export.sql" se crea en la subcarpeta. Este archivo est\xe1 codificado en UTF-8 con BOM (marca de orden de bytes). Contiene las \xf3rdenes SQL ',(0,s.jsx)(a.em,{children:"INSERT"})," correspondientes a los datos exportados. Los valores de los campos est\xe1n separados por dos puntos. Puede tener menos valores que campos en la tabla. En este caso, los campos restantes se consideran NULOS."]}),"\n",(0,s.jsx)(a.li,{children:'si la tabla contiene campos BLOB, imagen o texto (textos guardados externamente, en otras palabras, fuera de los registros), por defecto el comando crea una subcarpeta adicional llamada "BLOBS" junto al archivo "Export.sql" y crea tantas subcarpetas "BlobsX\u201D como sea necesario. Estas subcarpetas guardar\xe1n como archivos separados el contenido de todos los campos BLOB, imagen o campos de texto externos de los registros de la tabla. Los archivos BLOB se llaman "BlobXXXXX.BLOB", los archivos texto se llaman "TEXTXXXXXX.TXT (donde XXXXX es un n\xfamero \xfanico generado por la aplicaci\xf3n). Los archivos imagen se llaman PICTXXXXX.ZZZZ (donde XXXXX es un n\xfamero \xfanico generado por la aplicaci\xf3n y ZZZZ es la extensi\xf3n). Cuando es posible, las im\xe1genes se exportan a su formato nativo de origen con la extensi\xf3n correspondiente al tipo de imagen (.jpg, .png, etc.). Si la exportaci\xf3n no es posible en el formato nativo, las im\xe1genes se exportan en el formato 4D interno con la extensi\xf3n .4PCT.'}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," este funcionamiento difiere al ejecutar ",(0,s.jsx)(a.strong,{children:"SQL EXPORT DATABASE"}),' desde un 4D en modo remoto. En este contexto, los datos a almacenar externamente se incluyen autom\xe1ticamente en el archivo "Export.sql".']}),"\n",(0,s.jsxs)(a.p,{children:["Si pasa el par\xe1metro ",(0,s.jsx)(a.em,{children:"numArchivos"}),', el comando crear\xe1 tantas subcarpetas "BlobsX" como sea necesario de manera que cada una de ellas no contenga m\xe1s de ',(0,s.jsx)(a.em,{children:"numArchivos"})," BLOB, imagen o textos externos. Por defecto, si se omite el par\xe1metro ",(0,s.jsx)(a.em,{children:"numArchivos"}),", el comando limita el n\xfamero de archivos a 200. Si pasa 0, cada subcarpeta contendr\xe1 al menos un archivo."]}),"\n",(0,s.jsxs)(a.p,{children:["El par\xe1metro ",(0,s.jsx)(a.em,{children:"tamMaxArchivo"}),' permite definir un l\xedmite de tama\xf1o (en KB) para cada archivo "Export.sql" creado en el disco. Cuando el tama\xf1o del archivo de exportaci\xf3n alcanza el valor definido en ',(0,s.jsx)(a.em,{children:"tamMaxArchivo"}),', 4D detiene la escritura de registros, cierra el archivo y crea un nuevo archivo llamado "ExportX.sql" (donde X representa el n\xfamero de secuencia) junto al anterior. Note que este es un l\xedmite te\xf3rico: el tama\xf1o actual de los archivos "ExportX.sql" supera el valor definido por ',(0,s.jsx)(a.em,{children:"tamMaxArchivo"})," porque el archivo s\xf3lo se cierra despu\xe9s de que el registro que se estaba exportando cuando se alcanz\xf3 el l\xedmite se haya escrito completamente (los contenidos de los registros no se dividen). El tama\xf1o m\xednimo aceptado es 100 KB y el valor m\xe1ximo (valor por defecto) es 100 000 (10MB)."]}),"\n",(0,s.jsxs)(a.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(a.em,{children:"tamLimiteCampos"}),' permite definir una tama\xf1o l\xedmite debajo del cual el contenido de un campo BLOB, Imagen, o texto externo se integrar\xe1 al archivo principal "Export.sql" en lugar de guardarse como un archivo separado. El prop\xf3sito de este par\xe1metro es optimizar las operaciones de exportaci\xf3n limitando el n\xfamero de subcarpetas y de archivos creados en el disco.',(0,s.jsx)(a.br,{}),"\nEste par\xe1metro debe expresarse en bytes. Por ejemplo, si pasa 1000, todos los campos BLOB, imagen o texto externo que contienen los datos de un tama\xf1o inferior o igual a 1000 bytes se integrar\xe1n al archivo de exportaci\xf3n principal.",(0,s.jsx)(a.br,{}),"\nNote que los datos de los campos binarios (BLOB e Imagen) integrados al archivo de exportaci\xf3n se escriben en formato hexadecimal, de la forma X'0f20' (notaci\xf3n hexadecimal SQL est\xe1ndar, ver ",(0,s.jsx)(a.em,{children:"literal"}),"). Este formato es soportado autom\xe1ticamente por el motor SQL de 4D.",(0,s.jsx)(a.br,{}),"\nPor defecto, si se omite el par\xe1metro ",(0,s.jsx)(a.em,{children:"tamLimiteCampos"}),", los campos BLOB, Imagen y texto externos siempre se exportan en forma de archivos externos, sin importar su tama\xf1o."]}),"\n",(0,s.jsx)(a.p,{children:"En el archivo de exportaci\xf3n, puede haber menos valores que campos en la tabla. En este caso, los campos vac\xedos se considerar\xe1n como NULL. Tambi\xe9n puede pasar el valor NULL en un campo."}),"\n",(0,s.jsx)(a.p,{children:"Si la exportaci\xf3n se realiza correctamente, la variable OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,s.jsx)(a.h5,{id:""}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"/docs/es/commands/sql-export-selection",children:"SQL EXPORT SELECTION"})}),"\n",(0,s.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"N\xfamero de comando"}),(0,s.jsx)(a.td,{children:"1065"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Hilo seguro"}),(0,s.jsx)(a.td,{children:"\u2717"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Modifica variables"}),(0,s.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return t}});var o=n(667294);let s={},r=o.createContext(s);function t(e){let a=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);