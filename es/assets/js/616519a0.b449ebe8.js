"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92412"],{669845:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"settings/compatibility","title":"P\xe1gina de compatibilidad","description":"La p\xe1gina Compatibilidad agrupa los par\xe1metros relacionados con el mantenimiento de la compatibilidad con versiones anteriores de 4D.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/settings/compatibility.md","sourceDirName":"settings","slug":"/settings/compatibility","permalink":"/docs/es/settings/compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fcompatibility.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"compatibility","title":"P\xe1gina de compatibilidad"},"sidebar":"docs","previous":{"title":"P\xe1gina seguridad","permalink":"/docs/es/settings/security"},"next":{"title":"Componentes","permalink":"/docs/es/Project/components"}}'),o=n("785893"),i=n("250065");let r={id:"compatibility",title:"P\xe1gina de compatibilidad"},c=void 0,t={},d=[];function l(e){let a={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"La p\xe1gina Compatibilidad agrupa los par\xe1metros relacionados con el mantenimiento de la compatibilidad con versiones anteriores de 4D."}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsxs)(a.p,{children:["El n\xfamero de opciones mostradas depende de la versi\xf3n de 4D con la que se cre\xf3 la base de datos/proyecto original, as\xed como de los ajustes modificados en esta base de datos/proyecto.",(0,o.jsx)(a.br,{}),"\nEsta p\xe1gina enumera las opciones de compatibilidad disponibles para las bases de datos/proyectos convertidos a partir de 4D v18. Para las opciones de compatibilidad m\xe1s antiguas, consulte la ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/4D/20.2/Compatibility-page.300-6750362.en.html",children:"p\xe1gina Compatibilidad"})," en ",(0,o.jsx)(a.strong,{children:"doc.4d.com"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Utilizar la capa de red heredada"}),": a partir de 4D v15, las aplicaciones 4D proponen una nueva capa red, llamada ",(0,o.jsx)(a.em,{children:"ServerNet"}),", para manejar las comunicaciones entre 4D Server y las m\xe1quinas 4D remotas (clientes). La antigua capa de red ha quedado obsoleta, pero se mantiene para garantizar la compatibilidad con las bases existentes. Utilizando esta opci\xf3n, puede activar la antigua capa de red en cualquier momento en sus aplicaciones 4D Server dependiendo de sus necesidades. ",(0,o.jsx)(a.em,{children:"ServerNet"})," se utiliza autom\xe1ticamente para las nuevas bases y las bases convertidas a partir de una versi\xf3n v15 o posterior. Tenga en cuenta que, en caso de modificaci\xf3n, deber\xe1 reiniciar la aplicaci\xf3n para que se tenga en cuenta el cambio. Toda aplicaci\xf3n cliente que estuviera conectada tambi\xe9n debe reiniciarse para poder conectarse con la nueva capa de red.\n",(0,o.jsx)(a.strong,{children:"Nota"}),": esta opci\xf3n tambi\xe9n puede gestionarse por programaci\xf3n utilizando el comando ",(0,o.jsx)(a.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Utilizar XPath est\xe1ndar"}),": por defecto, esta opci\xf3n est\xe1 desmarcada para las bases convertidas desde una versi\xf3n 4D anterior a la v18 R3, y marcada para las bases creadas con 4D v18 R3 y superiores. A partir de la v18 R3, la implementaci\xf3n de XPath en 4D ha sido modificada para ser m\xe1s compatible y soportar m\xe1s predicados. Como consecuencia, las funcionalidades no est\xe1ndar de la implementaci\xf3n anterior ya no funcionan. Incluyen:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:'el caracter inicial "/" no es s\xf3lo el nodo ra\xedz - la utilizaci\xf3n del caracter / como primer caracter en una expresi\xf3n XPath no declara una ruta absoluta desde el nodo ra\xedz'}),"\n",(0,o.jsx)(a.li,{children:"no hay nodo actual impl\xedcito - el nodo actual debe incluirse en la expresi\xf3n XPath"}),"\n",(0,o.jsx)(a.li,{children:"no hay b\xfasquedas recursivas en las estructuras repetidas: s\xf3lo se analiza el primer elemento. \\"}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Aunque no es est\xe1ndar, es posible que desee seguir utilizando estas funcionalidades para que su c\xf3digo siga funcionando como antes -- en este caso, basta con establecer la opci\xf3n ",(0,o.jsx)(a.em,{children:"desmarcarcada"}),". Por otra parte, si su c\xf3digo no se basa en la implementaci\xf3n no est\xe1ndar y si desea beneficiarse de las funcionalidades extendidas de XPath en sus bases de datos (como se describe en el comando ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page864.html",children:(0,o.jsx)(a.code,{children:"DOM Find XML element"})}),"), aseg\xfarese de que la opci\xf3n *",(0,o.jsx)(a.em,{children:"Utilizar XPath est\xe1ndar"})," est\xe9 ",(0,o.jsx)(a.em,{children:"marcada"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Utilizar LF como caracter de fin de l\xednea en macOS"}),": a partir de 4D v19 R2 (y 4D v19 R3 para archivos XML), 4D escribe archivos texto con salto de l\xednea (LF) como caracter de fin de l\xednea (EOL) por defecto en lugar de CR (CRLF para xml SAX) en macOS en nuevos proyectos. Si desea beneficiarse de este nuevo comportamiento en proyectos convertidos a partir de versiones anteriores de 4D, marque esta opci\xf3n. Ver ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1237.html",children:(0,o.jsx)(a.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1236.html",children:(0,o.jsx)(a.code,{children:"Document to text"})}),", y ",(0,o.jsx)(a.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:['**No a\xf1adir un BOM al escribir un archivo de texto unicode por defecto:**a partir de 4D v19 R2 (y 4D v19 R3 para archivos XML), 4D escribe archivos de texto sin BOM ("Byte order mark") por defecto. En las versiones anteriores, los archivos texto se escrib\xedan con un BOM por defecto. Seleccione esta opci\xf3n si desea activar el nuevo comportamiento en los proyectos convertidos. Ver ',(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1237.html",children:(0,o.jsx)(a.code,{children:"TEXT TO DOCUMENT"})}),", ",(0,o.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1236.html",children:(0,o.jsx)(a.code,{children:"Document to text"})}),", y ",(0,o.jsx)(a.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Mapear valores NULL a valores en blanco sin marcar por defecto una creaci\xf3n de campo"}),": para un mejor cumplimiento con las especificaciones ORDA, en bases de datos creadas con 4D v19 R4 y superiores, la propiedad de campo ",(0,o.jsx)(a.strong,{children:"Mapear valores NULL a valores en blanco"})," no est\xe1 marcada por defecto cuando creas campos. Puede aplicar este comportamiento por defecto a sus bases de datos convertidas marcando esta opci\xf3n (se recomienda trabajar con valores Null, ya que est\xe1n totalmente soportados por ",(0,o.jsx)(a.a,{href:"/docs/es/ORDA/overview",children:"ORDA"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Impresi\xf3n sin bloqueo"}),": a partir de 4D v20 R4, cada proceso tiene sus propias configuraciones de impresi\xf3n (opciones de impresi\xf3n, impresora actual, etc.), lo que le permite ejecutar m\xfaltiples trabajos de impresi\xf3n simult\xe1neamente. Marque esta opci\xf3n si desea beneficiarse de esta nueva implementaci\xf3n en sus proyectos 4D convertidos o bases de datos convertidas de modo binario a modo proyecto. ",(0,o.jsx)(a.strong,{children:"Si se deja sin marcar"}),', se aplica la implementaci\xf3n anterior: la configuraci\xf3n actual de impresi\xf3n 4D se aplica globalmente, la impresora se pone en modo "ocupado" cuando hay un trabajo de impresi\xf3n en marcha, se debe llamar a ',(0,o.jsx)(a.code,{children:"CLOSE PRINTING JOB"})," para que la impresora est\xe9 disponible para el siguiente trabajo de impresi\xf3n (consulte la documentaci\xf3n anterior de 4D para m\xe1s informaci\xf3n)."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Guardar el color y las coordenadas de la estructura en un archivo catalog_editor.json separado"}),": a partir de 4D v20 R5, cambios realizados en el editor de estructura en relaci\xf3n a la apariencia gr\xe1fica de tablas y campos (color, posici\xf3n, orden...) se guardan en un archivo independiente llamado ",(0,o.jsx)(a.code,{children:"catalog_editor.json"}),", almacenado en la carpeta [Sources] del proyecto(../Project/architecture.md#sources). Esta nueva arquitectura de archivos facilita la gesti\xf3n de conflictos en aplicaciones VCS, ya que el archivo ",(0,o.jsx)(a.code,{children:"catalog.4DCatalog"})," ahora contiene s\xf3lo cambios cruciales en la estructura de la base de datos. Por razones de compatibilidad, esta funcionalidad no est\xe1 habilitada por defecto en proyectos convertidos de versiones anteriores de 4D, necesita marcar esta opci\xf3n. Cuando la funci\xf3n est\xe1 habilitada, el archivo ",(0,o.jsx)(a.code,{children:"catalog_editor.json"})," se crea en la primera modificaci\xf3n en el editor de estructuras."]}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return c},a:function(){return r}});var s=n(667294);let o={},i=s.createContext(o);function r(e){let a=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);