"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10414"],{547523:function(e,a,n){n.r(a),n.d(a,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-external-data-path","title":"SET EXTERNAL DATA PATH","description":"SET EXTERNAL DATA PATH ( aCampo ; ruta )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-external-data-path.md","sourceDirName":"commands-legacy","slug":"/commands/set-external-data-path","permalink":"/docs/es/commands/set-external-data-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-external-data-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-external-data-path","title":"SET EXTERNAL DATA PATH","slug":"/commands/set-external-data-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESUME INDEXES","permalink":"/docs/es/commands/resume-indexes"},"next":{"title":"SET INDEX","permalink":"/docs/es/commands/set-index"}}'),r=n("785893"),t=n("250065");let o={id:"set-external-data-path",title:"SET EXTERNAL DATA PATH",slug:"/commands/set-external-data-path",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"SET EXTERNAL DATA PATH"})," ( ",(0,r.jsx)(a.em,{children:"aCampo"})," ; ",(0,r.jsx)(a.em,{children:"ruta"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"aCampo"}),(0,r.jsx)(a.td,{children:"Text, Blob, Picture"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Campo para el cual definir el lugar de almacenamiento"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"ruta"}),(0,r.jsx)(a.td,{children:"Text, Integer"}),(0,r.jsx)(a.td,{children:"\u2192"}),(0,r.jsx)(a.td,{children:"Ruta de acceso y nombre del archivo de almacenamiento externo o0 = utilizar la definici\xf3n en estructura 1 = utilizar la carpeta por defecto"})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(a.p,{children:["El comando ",(0,r.jsx)(a.strong,{children:"SET EXTERNAL DATA PATH"})," define o modifica, para el registro actual, la ubicaci\xf3n de almacenamiento externo del campo ",(0,r.jsx)(a.em,{children:"aCampo"})," pasado como par\xe1metro."]}),"\n",(0,r.jsxs)(a.p,{children:["4D autoriza almacenar datos de campos de tipo texto, BLOB e Imagen ",(0,r.jsx)(a.em,{children:"fuera"})," del archivo de datos. Para una descripci\xf3n completa de esta funcionalidad, consulte el ",(0,r.jsx)(a.em,{children:"Manual de Dise\xf1o"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"La configuraci\xf3n definida por este comando s\xf3lo se aplica cuando el registro actual se guarda en el disco. Los par\xe1metros de almacenamiento definidos en la estructura de la aplicaci\xf3n no cambian. Si el registro actual se cancela, el comando no hace nada. Los par\xe1metros de almacenamiento definidos en la estructura de la aplicaci\xf3n no se modifican."}),"\n",(0,r.jsxs)(a.p,{children:["En ",(0,r.jsx)(a.em,{children:"ruta"}),", puede pasar una ruta de acceso personalizada o una constante designando un lugar autom\xe1tico:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"ruta de acceso personalizada al archivo"}),(0,r.jsx)(a.br,{}),'\nEn este caso, utilice el almacenamiento externo en "modo personalizado". En este modo ciertas funciones de base de datos 4D no est\xe1n disponibles autom\xe1ticamente (ver el Manual de Dise\xf1o). En particular, debe administrar usted mismo la creaci\xf3n o modificaci\xf3n de los archivos.',(0,r.jsx)(a.br,{}),'\nPuede pasar una ruta relativa al archivo de datos o un ruta absoluta, que debe incluir el nombre y la extensi\xf3n del archivo de almacenamiento. Debe utilizar la sintaxis del sistema. Para definir una ruta relativa, pase "../" (en Windows) o "..:" (macOS) al inicio de la cadena. Puede designar toda carpeta, incluyendo la carpeta por defecto de los archivos externos de la base (',(0,r.jsx)(a.em,{children:"nomBase"}),".ExternalData), en este caso, estos archivos se incluyen en el backup de la base. El archivo designado por el par\xe1metro ",(0,r.jsx)(a.em,{children:"ruta"})," debe existir y ser accesible en el momento de la ejecuci\xf3n del comando. Tenga en cuenta que si la ruta no es v\xe1lida (archivo o carpeta inexistentes), se devuelve un error s\xf3lo en los casos en que se defini\xf3 la ",(0,r.jsx)(a.em,{children:"ruta"})," como absoluta. Cuando se especifica una ",(0,r.jsx)(a.em,{children:"ruta"})," relativa, debe asegurar su validez ya que no se genera un error si no se encuentra el archivo.",(0,r.jsx)(a.br,{}),"\nSi guarda el archivo externo en la misma carpeta que el archivo de datos o una de sus subcarpetas, 4D considera que la ruta especificada es relativa al archivo de datos y mantiene la relaci\xf3n, incluso cuando se mueve o se cambia el nombre de la carpeta de archivos de datos.",(0,r.jsx)(a.br,{}),'\nTenga en cuenta que esto significa que es posible "compartir" el mismo archivo externo entre varios registros. Todo cambio realizado en este archivo externo est\xe1 disponibles en todos los registros. En este caso, si varios procesos pueden escribir los mismos campos al mismo tiempo, hay que tener cuidado para evitar accesos concurrentes a trav\xe9s de sem\xe1foros, con el fin de no afectar los archivos externos.']}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"ubicaci\xf3n autom\xe1tica"}),(0,r.jsx)(a.br,{}),"\nPuede designar dos lugares autom\xe1ticamente con las siguientes constantes, que se encuentra en el tema ",(0,r.jsx)(a.em,{children:"Mantenimiento archivo de datos"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Constante"}),(0,r.jsx)(a.th,{children:"Tipo"}),(0,r.jsx)(a.th,{children:"Valor"}),(0,r.jsx)(a.th,{children:"Comentario"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Use default folder"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"1"}),(0,r.jsxs)(a.td,{children:["Los datos pasado en par\xe1metro se almacenar\xe1n en la carpeta por defecto, llamada ",(0,r.jsx)(a.em,{children:"nomBase.ExternalData"})," y ubicada al lado del archivo de datos. En este modo, los datos externos son generados por 4D como si estuvieran al interior del archivo de datos."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Use structure definition"}),(0,r.jsx)(a.td,{children:"Entero largo"}),(0,r.jsx)(a.td,{children:"0"}),(0,r.jsxs)(a.td,{children:["4D utilizar\xe1 los par\xe1metros definidos en la estructura para el almacenamiento del campo (ver manual ",(0,r.jsx)(a.em,{children:"Modo Dise\xf1o"}),"). Si pasa de un almacenamiento externo a un almacenamiento interno, el archivo externo no se elimina."]})]})]})]}),"\n",(0,r.jsx)(a.p,{children:"Una vez que se ejecuta este comando, 4D mantiene autom\xe1ticamente el enlace entre el campo del registro y el archivo en el disco. No es necesario para ejecutar el comando de nuevo (excepto si necesita cambiar la ruta). Si 4D ya no puede acceder a los datos del campo (archivo de almacenamiento renombrado o eliminado, ruta modificada, etc.), el campo est\xe1 vac\xedo, pero no se genera ning\xfan error."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota:"})," el comando ",(0,r.jsx)(a.strong,{children:"SET EXTERNAL DATA PATH"})," s\xf3lo se puede ejecutar en 4D local o 4D Server. No hace nada cuando se ejecuta en un 4D remoto."]}),"\n",(0,r.jsx)(a.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(a.p,{children:"Usted desea guardar el contenido de un archivo existente en el campo imagen, almacenado fura de los datos, en la carpeta de la base:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-4d",children:'\xa0CREATE RECORD([Photos])\n\xa0[Photos]Name:="Paris.png"\n\xa0SET EXTERNAL DATA PATH([Photos]Thumbnail;Get 4D folder(Database folder)+"custom"+Folder separator+[Photos]Name)\n\xa0\xa0//"/custom/Paris.png" debe existir junto al archivo de estructura\n\xa0SAVE RECORD([Photos])\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/es/commands/get-external-data-path",children:"Get external data path"}),(0,r.jsx)(a.br,{}),"\n",(0,r.jsx)(a.a,{href:"/docs/es/commands/reload-external-data",children:"RELOAD EXTERNAL DATA"})]}),"\n",(0,r.jsx)(a.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{}),(0,r.jsx)(a.th,{})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"N\xfamero de comando"}),(0,r.jsx)(a.td,{children:"1134"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Hilo seguro"}),(0,r.jsx)(a.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return o}});var s=n(667294);let r={},t=s.createContext(r);function o(e){let a=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);