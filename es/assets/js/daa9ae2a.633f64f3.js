"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90063"],{15309:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/receive-record","title":"RECEIVE RECORD","description":"RECEIVE RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/receive-record.md","sourceDirName":"commands-legacy","slug":"/commands/receive-record","permalink":"/docs/es/20-R7/commands/receive-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"receive-record","title":"RECEIVE RECORD","slug":"/commands/receive-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE PACKET","permalink":"/docs/es/20-R7/commands/receive-packet"},"next":{"title":"RECEIVE VARIABLE","permalink":"/docs/es/20-R7/commands/receive-variable"}}'),o=s("785893"),r=s("250065");let i={id:"receive-record",title:"RECEIVE RECORD",slug:"/commands/receive-record",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"RECEIVE RECORD"})," {( ",(0,o.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla en la cual recibir el registro o Tabla por defecto, si se omite"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["RECEIVE RECORD recibe un registro en ",(0,o.jsx)(n.em,{children:"tabla"})," del puerto serial o de un documento abierto por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". El registro debe haber sido env\xedado con ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"}),". Cuando ejecuta RECEIVE RECORD, se crea autom\xe1ticamente un nuevo registro en ",(0,o.jsx)(n.em,{children:"tabla"}),". Si el registro se recibe correctamente, entonces debe utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/save-record",title:"SAVE RECORD",children:"SAVE RECORD"})," para guardar el nuevo registro."]}),"\n",(0,o.jsx)(n.p,{children:"Se recibe el registro completo. Esto significa que tambi\xe9n se reciben todos los subregistros, im\xe1genes y BLOBs almacenados en el registro."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Importante:"})," cuando los registros se env\xeda y reciben utilizando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," y RECEIVE RECORD, la estructura de la tabla fuente y la estructura de la tabla de destino deben ser compatibles. Si no lo son, 4D convertir\xe1 los valores de acuerdo a las definiciones de las tablas cuando se ejecute RECEIVE RECORD."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Si recibe un registro de un documento utilizando este comando, el documento debe haber sido abierto utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-channel",title:"SET CHANNEL",children:"SET CHANNEL"}),". No puede utilizar RECEIVE RECORD con un documento abierto con ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/append-document",title:"Append document",children:"Append document"})," o ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/create-document",title:"Create document",children:"Create document"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Durante la ejecuci\xf3n de RECEIVE RECORD, el usuario puede interrumpir la recepci\xf3n presionando Ctrl-Alt-May\xfas (Windows) o Comando-Opci\xf3n-May\xfas (Macintosh). Esta interrupci\xf3n genera un error -9994 que puede interceptar con el m\xe9todo instalado por el comando ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),". Generalmente, s\xf3lo debe manejar la interrupci\xf3n de una recepci\xf3n durante una comunicaci\xf3n sobre puerto serial."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["El uso combinado de ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})," y RECEIVE RECORD es ideal para archivar datos o intercambiar datos entre bases monopuesto id\xe9nticas utilizada en diferentes lugares. Puede intercambiar datos entre bases 4D utilizando los comandos de importaci\xf3n/exportaci\xf3n como ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/export-text",title:"EXPORT TEXT",children:"EXPORT TEXT"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/import-text",title:"IMPORT TEXT",children:"IMPORT TEXT"}),". Sin embargo, si sus datos contienen im\xe1genes o tablas relacionadas, utilizar ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," y RECEIVE RECORD es mucho m\xe1s conveniente."]}),"\n",(0,o.jsx)(n.p,{children:"Por ejemplo, la documentaci\xf3n que est\xe1 leyendo ha sido creada utilizando 4D y 4D Write. Como varios escritores en diferentes lugares del mundo estaban trabajando en este proyecto, necesit\xe1bamos una forma simple de intercambiar datos entre las diferentes bases de datos. Esta es una vista simplificada de la estructura de la base:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(999e3).Z+"",width:"434",height:"295"})}),"\n",(0,o.jsxs)(n.p,{children:["La tabla ",(0,o.jsx)(n.em,{children:"[Commands]"})," contiene la descripci\xf3n de cada comando o secci\xf3n. Las tablas ",(0,o.jsx)(n.em,{children:"[CM US Params]"})," y ",(0,o.jsx)(n.em,{children:"[CM FR Params]"})," contienen respectivamente los par\xe1metros de cada comandos en Ingl\xe9s y Franc\xe9s. La tabla ",(0,o.jsx)(n.em,{children:"[CM See also]"})," contiene los comandos indicados como referencias para cada comando o secci\xf3n. El intercambio de la documentaci\xf3n entre las bases consiste en enviar los registros de ",(0,o.jsx)(n.em,{children:"[Commands]"})," as\xed como sus registros relacionados. Para hacerlo, utilizamos ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," y RECEIVE RECORD. Adicionalmente, utilizamos ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"})," y ",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"})," para marcar los documentos de importaci\xf3n/exportaci\xf3n con etiquetas."]}),"\n",(0,o.jsx)(n.p,{children:"Este es el m\xe9todo de proyecto (simplificado) para exportar la documentaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto CM_EXPORT_SEL\n\xa0\xa0// Este m\xe9todo funciona con la selecci\xf3n actual de la tabla [Commands]\n\xa0\n\xa0SET CHANNEL(12;"")\xa0// Permitimos al usuario crear y abrir un documento channel\n\xa0If(OK=1)\n\xa0\xa0// Marcamos el documento con un variable que indique su contenido\n\xa0\xa0// Nota: la variable de proceso BUILD_LANG indica si los datos US (Ingl\xe9s) o FR (Franc\xe9s) son enviados\n\xa0\xa0\xa0\xa0$vsTag:="4DV6COMMAND"+BUILD_LANG\n\xa0\xa0\xa0\xa0SEND VARIABLE($vsTag)\n\xa0\xa0// Enviar una variable indicando cu\xe1ntos [Commands] son enviados\n\xa0\xa0\xa0\xa0$vlNbCmd:=Records in selection([Commands])\n\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbCmd)\n\xa0\xa0\xa0\xa0FIRST RECORD([Commands])\n\xa0\xa0// Para cada comando\n\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\n\xa0\xa0// Enviar el registro [Commands]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([Comands])\n\xa0\xa0// Selecci\xf3n de todos los registros seleccionados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELATE MANY([Commands])\n\xa0\xa0// Dependiendo del lenguaje, enviar una variable indicando\n\xa0\xa0// el n\xfamero de par\xe1metros que sigue\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbParm:=Records in selection([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbParm)\n\xa0\xa0// Enviar los registros de los par\xe1metros (si hay)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlParm;1;$vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM US Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(BUILD_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM FR Params])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Enviar una variable indicando cu\xe1ntos \u201CSee Also\u201D siguen\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNbSee:=Records in selection([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND VARIABLE($vlNbSee)\n\xa0\xa0// Enviar los registros [See Also] (si hay)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlSee;1;$vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SEND RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([CM See Also])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Ir al siguiente registro [Commands] y continuar la exportaci\xf3n\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Commands])\n\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Cerrar el documento\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.p,{children:"Este es el m\xe9todo de proyecto (simplificado) de importaci\xf3n de la documentaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de proyecto CM_IMPORT_SEL\n\xa0\n\xa0SET CHANNEL(10;"")\xa0// Permitimos al usuario abrir un documento existente\n\xa0If(OK=1)\xa0// Si un documento estaba abierto\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\xa0// Tratamos de recibir la variable marcada esperada\n\xa0\xa0\xa0\xa0If($vsTag="4DV6COMMAND@")\xa0// \xbfRecibimos la etiqueta correcta?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$CurLang:=Substring($vsTag;Length($vsTag)-1)\xa0// Extraemos el lenguaje de la etiqueta\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(($CurLang="US")&NBSP;|&NBSP;($CurLang="FR"))\xa0// \xbfRecibimos un lenguaje v\xe1lido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbCmd)\xa0// \xbfCu\xe1ntos comandos hay en este documento?\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbCmd>0)\xa0// Si hay al menos uno\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlCmd;1;$vlNbCmd)\xa0// Para cada registro [Commands] archivado\n\xa0\xa0// Recepci\xf3n del registro\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE RECORD([Commands])\n\xa0\xa0// Llamar una subrutina que guarde el nuevo registro o copie sus valores\n\xa0\xa0// en un registro existente\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_CMD($CurLang)\n\xa0\xa0// Recibir el n\xfamero de par\xe1metros (si hay)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbParm)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbParm>=0)\n\xa0\xa0// Llamar una subrutina que llama RECEIVE RECORD luego guarda los nuevos registros\n\xa0\xa0// o los copia en registros existentes\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_PARM($vlNbParm;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0// Recepci\xf3n dle n\xfamero de \u201CSee Also\u201D (si hay)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbSee)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbSee>0)\n\xa0\xa0// Llamar una subrutina que llame RECEIVE RECORD luego guarde los nuevos registros\n\xa0\xa0// o los copies en registros existentes\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CM_IMP_SEEA($vlNbSee;$CurLang)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El n\xfamero de comandos en este documento de exportaci\xf3n es inv\xe1lido.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El lenguaje de este documento de exportaci\xf3n es desconocido.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Este documento NO es un documento de exportaci\xf3n de comandos.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\xa0// Cerrar documento\n\xa0End if\n'})}),"\n",(0,o.jsx)(n.p,{children:"Note que no probamos la variable OK mientras recibimos los datos ni tratamos de interceptar los eventuales errores. Sin embargo, como almacenamos variables en el documento que describe el documento en s\xed mismo, si estas variables, una vez recibidas, tienen sentido, la probabilidad de error es muy baja. Si por ejemplo un usuario abre mal un documento, la primera prueba detiene la operaci\xf3n de inmediato."}),"\n",(0,o.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si se recibe el registro. De lo contrario, toma el valor 0."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-record",children:"SEND RECORD"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/20-R7/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"79"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},999e3:function(e,n,s){s.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var a=s(667294);let o={},r=a.createContext(o);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);