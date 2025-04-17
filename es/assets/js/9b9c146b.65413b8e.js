"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21531"],{376839:function(e,a,r){r.r(a),r.d(a,{default:()=>u,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"MSC/restore","title":"P\xe1gina Restauraci\xf3n","description":"Puede restaurar manualmente un archivo de la aplicaci\xf3n actual utilizando la p\xe1gina Restaurar. Esta p\xe1gina ofrece varias opciones que pueden utilizarse para controlar la restauraci\xf3n:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/MSC/restore.md","sourceDirName":"MSC","slug":"/MSC/restore","permalink":"/docs/es/MSC/restore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frestore.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"restore","title":"P\xe1gina Restauraci\xf3n","sidebar_label":"P\xe1gina Restauraci\xf3n"},"sidebar":"docs","previous":{"title":"P\xe1gina Retroceso","permalink":"/docs/es/MSC/rollback"},"next":{"title":"P\xe1gina Reparaci\xf3n","permalink":"/docs/es/MSC/repair"}}'),s=r("785893"),i=r("250065");let d={id:"restore",title:"P\xe1gina Restauraci\xf3n",sidebar_label:"P\xe1gina Restauraci\xf3n"},t=void 0,o={},c=[{value:"Integraci\xf3n sucesiva de varios archivos de historial de datos",id:"integraci\xf3n-sucesiva-de-varios-archivos-de-historial-de-datos",level:2},{value:"Restauraci\xf3n de una base encriptada",id:"restauraci\xf3n-de-una-base-encriptada",level:2}];function l(e){let a={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Puede restaurar manualmente un archivo de la aplicaci\xf3n actual utilizando la p\xe1gina ",(0,s.jsx)(a.strong,{children:"Restaurar"}),". Esta p\xe1gina ofrece varias opciones que pueden utilizarse para controlar la restauraci\xf3n:"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:r(636895).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Los sistemas de recuperaci\xf3n autom\xe1tica de 4D restauran las aplicaciones e incluyen el archivo de historial de datos cuando es necesario."}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["La lista que se encuentra en la parte izquierda de la ventana muestra las copias de seguridad existentes de la aplicaci\xf3n. Tambi\xe9n puede hacer clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Navegar..."})," que se encuentra justo debajo del \xe1rea para abrir cualquier otro archivo de una ubicaci\xf3n diferente. A continuaci\xf3n, se a\xf1ade a la lista de archivos."]}),"\n",(0,s.jsx)(a.p,{children:"Cuando se selecciona una copia de seguridad en esta lista, la parte derecha de la ventana muestra la informaci\xf3n relativa a esta copia de seguridad en particular:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Ruta"}),": ruta de acceso completa del archivo de copia de seguridad seleccionado. Al hacer clic en el bot\xf3n Mostrar se abre el archivo de copia de seguridad en una ventana del sistema."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Fecha y hora"}),": fecha y hora de la copia de seguridad."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Contenido"}),": contenido del archivo de copia de seguridad. Cada elemento de la lista tiene una casilla de selecci\xf3n al lado que se puede utilizar para indicar si se quiere restaurar o no. Tambi\xe9n puede utilizar los botones ",(0,s.jsx)(a.strong,{children:"Seleccionar todo"})," o ",(0,s.jsx)(a.strong,{children:"Deseleccionar todo"})," para definir la lista de los elementos que deben restaurarse."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Carpeta de destino de los archivos restaurados"}),": carpeta donde se colocar\xe1n los archivos restaurados. ",(0,s.jsx)(a.strong,{"x-id":"1",children:"Carpeta de destino de los archivos restaurados"}),": carpeta donde se colocar\xe1n los archivos restaurados. Para cambiar esta ubicaci\xf3n, haga clic en ",(0,s.jsx)(a.strong,{children:"[...]"})," y designe la carpeta en la que desea colocar los archivos restaurados."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["El bot\xf3n ",(0,s.jsx)(a.strong,{children:"Restaurar"})," lanza la restauraci\xf3n manual del elemento o elementos seleccionados."]}),"\n",(0,s.jsx)(a.h2,{id:"integraci\xf3n-sucesiva-de-varios-archivos-de-historial-de-datos",children:"Integraci\xf3n sucesiva de varios archivos de historial de datos"}),"\n",(0,s.jsxs)(a.p,{children:["La opci\xf3n ",(0,s.jsx)(a.strong,{children:"Integrar uno o varios archivos de historial tras la restauraci\xf3n"})," permite integrar sucesivamente varios archivos de registro de datos en una aplicaci\xf3n. Si, por ejemplo, dispone de 4 archivos historial (.4BL) correspondientes a 4 copias de seguridad, puede restaurar la primera copia de seguridad y luego integrar los archivos historial (data log) uno por uno. Esto significa que puede, por ejemplo, recuperar un archivo de datos incluso cuando faltan los \xfaltimos archivos de copia de seguridad."]}),"\n",(0,s.jsx)(a.p,{children:"Cuando esta opci\xf3n est\xe1 marcada, 4D muestra la caja de di\xe1logo est\xe1ndar Abrir archivo despu\xe9s de la restauraci\xf3n, que puede utilizarse para seleccionar el archivo del diario que se va a integrar. La caja de di\xe1logo Abrir archivo se muestra de nuevo despu\xe9s de cada integraci\xf3n hasta que se cancela."}),"\n",(0,s.jsx)(a.h2,{id:"restauraci\xf3n-de-una-base-encriptada",children:"Restauraci\xf3n de una base encriptada"}),"\n",(0,s.jsx)(a.p,{children:"Tenga en cuenta que la llave de cifrado de los datos (frase secreta) puede haber cambiado a trav\xe9s de varias versiones de los archivos de copia de seguridad (.4BK), de los archivos .journal (.4BL) y de la aplicaci\xf3n actual. Siempre deben proporcionarse claves de encriptaci\xf3n coincidentes."}),"\n",(0,s.jsx)(a.p,{children:"Al restaurar una copia de seguridad e integrar el archivo de historial actual en una base encriptada:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Si restaura una copia de seguridad utilizando una frase secreta antigua, esta \xfaltima ser\xe1 necesaria al iniciar la pr\xf3xima vez la base."}),"\n",(0,s.jsx)(a.li,{children:"Despu\xe9s de una encriptaci\xf3n, al abrir el archivo de datos encriptado, se ejecuta una copia de seguridad y se crea un nuevo archivo de historial. As\xed, no es posible restaurar un archivo .4BK encriptado con una llave e integrar los archivos encriptados .4BL con otra llave."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"La siguiente secuencia ilustra los principios de una operaci\xf3n de llaves m\xfaltiplescopia de copia de seguridad/restauraci\xf3n:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Operaci\xf3n"}),(0,s.jsx)(a.th,{children:"Archivos generados"}),(0,s.jsx)(a.th,{children:"Comentario"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Nuevo archivo de datos"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 1)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"0000.4BL y 0001.4BK"}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 2)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"0001.4BL y 0002.4BK"}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 3)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Cifrar un archivo de datos con key1"}),(0,s.jsx)(a.td,{children:"Archivo 0003.4BK (cifrado con llave1)"}),(0,s.jsx)(a.td,{children:'La encriptaci\xf3n guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial'})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro #4)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"Archivo 0003.4BL y 0004.4BK (cifrado con key1)"}),(0,s.jsx)(a.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 5)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"Archivo 0004.4BL y 0005.4BK (cifrado con key1)"}),(0,s.jsx)(a.td,{children:"Podemos restaurar 0003.4BK e integrar 0003.4BL + 0004.4BL. Podemos restaurar 0004.4BK e integrar 0004.4BL"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 6)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Cifrar un archivo de datos con key2"}),(0,s.jsx)(a.td,{children:"Archivo 0006.4BK (cifrado con key2)"}),(0,s.jsx)(a.td,{children:'La encriptaci\xf3n guarda los archivos originales (incluido el historial) en la carpeta "Archivos reemplazados (encriptados) YYY-DD-MM HH-MM-SS". Al abrir el archivo de datos encriptado, se crea un nuevo historial y se realiza una copia de seguridad para activar este historial'})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 7)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"Archivo 0006.4BL y 0007.4BK (cifrado con key2)"}),(0,s.jsx)(a.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"A\xf1adir datos (registro # 8)"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"Backup de la base de datos"}),(0,s.jsx)(a.td,{children:"Archivo 0007.4BL y 0008.4BK (cifrado con key2)"}),(0,s.jsx)(a.td,{children:"Podemos restaurar 0006.4BK e integrar 0006.4BL + 0007.4BL. Podemos restaurar 0007.4BK e integrar 0007.4BL"})]})]})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Al restaurar una copia de seguridad e integrar uno o varios archivos .4BL, los archivos restaurados .4BK y .4BL deben tener la misma llave de cifrado. Durante el proceso de integraci\xf3n, si no se encuentra una llave de cifrado v\xe1lida en el llavero de 4D durante la integraci\xf3n del archivo .4BL, se genera un error."}),"\n",(0,s.jsx)(a.p,{children:"Si ha almacenado llaves de datos sucesivas en el mismo dispositivo externo, la restauraci\xf3n de una copia de seguridad y la integraci\xf3n de los archivos de historial encontrar\xe1n autom\xe1ticamente la llave correspondiente si el dispositivo est\xe1 conectado."}),"\n"]})]})}function u(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},636895:function(e,a,r){r.d(a,{Z:function(){return n}});let n=r.p+"assets/images/MSC_restore-00b014a1e60aeb46ef70aa25be2c9387.png"},250065:function(e,a,r){r.d(a,{Z:function(){return t},a:function(){return d}});var n=r(667294);let s={},i=n.createContext(s);function d(e){let a=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);