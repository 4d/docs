"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92109"],{93492:function(e,a,n){n.r(a),n.d(a,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>t,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"commands-legacy/log-file-to-json","title":"LOG FILE TO JSON","description":"LOG FILE TO JSON ( rutaCarpetaDest {; tamMax {; rutaHist {; atribCampo}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-file-to-json.md","sourceDirName":"commands-legacy","slug":"/commands/log-file-to-json","permalink":"/docs/es/commands/log-file-to-json","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-file-to-json.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-file-to-json","title":"LOG FILE TO JSON","slug":"/commands/log-file-to-json","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Log File","permalink":"/docs/es/commands/log-file"},"next":{"title":"New log file","permalink":"/docs/es/commands/new-log-file"}}'),i=n("785893"),o=n("250065");let s={id:"log-file-to-json",title:"LOG FILE TO JSON",slug:"/commands/log-file-to-json",displayed_sidebar:"docs"},l=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"LOG FILE TO JSON"})," ( ",(0,i.jsx)(a.em,{children:"rutaCarpetaDest"})," {; ",(0,i.jsx)(a.em,{children:"tamMax"})," {; ",(0,i.jsx)(a.em,{children:"rutaHist"})," {; ",(0,i.jsx)(a.em,{children:"atribCampo"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Par\xe1metro"}),(0,i.jsx)(a.th,{children:"Tipo"}),(0,i.jsx)(a.th,{}),(0,i.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"rutaCarpetaDest"}),(0,i.jsx)(a.td,{children:"Text"}),(0,i.jsx)(a.td,{children:"\u2192"}),(0,i.jsx)(a.td,{children:"Ruta de acceso de la carpeta de destino del archivo guardado"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"tamMax"}),(0,i.jsx)(a.td,{children:"Integer"}),(0,i.jsx)(a.td,{children:"\u2192"}),(0,i.jsx)(a.td,{children:"Tama\xf1o m\xe1ximo del archivo JSON a crear (bytes)"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"rutaHist"}),(0,i.jsx)(a.td,{children:"Text"}),(0,i.jsx)(a.td,{children:"\u2192"}),(0,i.jsx)(a.td,{children:"Ruta de acceso del archivo de historial a exportar; utilizar el historial actual si se omite"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"atribCampo"}),(0,i.jsx)(a.td,{children:"Integer"}),(0,i.jsx)(a.td,{children:"\u2192"}),(0,i.jsx)(a.td,{children:"Atributo de descripci\xf3n del campo: 1 = utilizar n\xfamero(por defecto), 2 = utilizar nombre"})]})]})]}),"\n",(0,i.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(a.p,{children:["El comando ",(0,i.jsx)(a.strong,{children:"LOG FILE TO JSON"})," guarda en formato JSON el archivo de historial actual o todo archivo de historial especificado."]}),"\n",(0,i.jsx)(a.p,{children:"Una vez un historial (archivo binario) se guarda en JSON, su contenido puede ser le\xeddo e interpretado por el administrador de la base o por cualquier usuario con el fin de analizar los eventos de la base, por ejemplo."}),"\n",(0,i.jsxs)(a.p,{children:["En ",(0,i.jsx)(a.em,{children:"rutaCarpetaDest"}),", pase la ruta de la carpeta en la que desea almacenar el archivo JSON. Este archivo se llama ",(0,i.jsx)(a.strong,{children:"JournalExport.json"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["De forma predeterminada, el tama\xf1o m\xe1ximo del archivo JSON exportada es de 10 MB. Cuando se alcanza este tama\xf1o, el archivo se cierra y se crea un nuevo archivo. Limitar el tama\xf1o de cada archivo JSON reduce los requerimientoos de memoria para el an\xe1lisis de los archivos. Puede cambiar el tama\xf1o m\xe1ximo para el archivo exportado definiendo un valor (en bytes) en el par\xe1metro ",(0,i.jsx)(a.em,{children:"tamMax"}),". Pasar 0 restaura el tama\xf1o predeterminado. Pasar un valor negativo elimina todo l\xedmite de tama\xf1o."]}),"\n",(0,i.jsxs)(a.p,{children:["Por defecto, si se omite el par\xe1metro ",(0,i.jsx)(a.em,{children:"rutaHist"}),", el comando guarda el archivo de historial actual. Si desea exportar un archivo de historial espec\xedfico, pase su ruta en el par\xe1metro ",(0,i.jsx)(a.em,{children:"rutaHist"}),'. El archivo de historial debe ser un archivo con una extensi\xf3n ".journal". Si desea exportar un archivo de historial archivado (extensi\xf3n ".4bl"), es necesario convertirlo de antemano con el comando ',(0,i.jsx)(a.a,{href:"/docs/es/commands/restore",children:"RESTORE"}),'. Puede pasar una cadena vac\xeda ("") para mostrar el di\xe1logo est\xe1ndar de abrir archivo, lo que permite al usuario seleccionar el archivo de historial a guardar. La ruta del archivo de historial seleccionado se devuelve en la variable sistema ',(0,i.jsx)(a.strong,{children:"Document"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Nota:"})," cuando el comando guarda el archivo de historial actual, la base no est\xe1 bloqueada. Las nuevas operaciones se pueden ejecutar mientras el archivo se escribe en el disco, estas operaciones no se incluir\xe1n en el archivo guardado."]}),"\n",(0,i.jsxs)(a.p,{children:["Cuando exporta el archivo de historial actual, el par\xe1metro ",(0,i.jsx)(a.em,{children:"atribCampo"}),' le permite definir c\xf3mo se describen en el atributo exportado: por n\xfamero (por defecto), o por nombre. Puede pasar una de las siguientes constantes, que se encuentra en el tema "',(0,i.jsx)(a.em,{children:"Backup"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Constante"}),(0,i.jsx)(a.th,{children:"Tipo"}),(0,i.jsx)(a.th,{children:"Valor"}),(0,i.jsx)(a.th,{children:"Comentario"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"Field attribute with name"}),(0,i.jsx)(a.td,{children:"Entero largo"}),(0,i.jsx)(a.td,{children:"2"}),(0,i.jsx)(a.td,{children:'Los campos son identificados por su nombre. Ejemplo: {"Apellido":"G\xf3mez"}'})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"Field attribute with number"}),(0,i.jsx)(a.td,{children:"Entero largo"}),(0,i.jsx)(a.td,{children:"1"}),(0,i.jsx)(a.td,{children:'Los campos se identifican por su n\xfamero (por defecto si se omite). Ejemplo: { "5":"Jones"}.'})]})]})]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Nota:"})," cuando exporta un archivo de historial externo, los campos siempre se identifican por su n\xfamero."]}),"\n",(0,i.jsx)(a.p,{children:"El archivo JSON guardado contiene todas las operaciones registradas en el historial, en forma de un array de objetos JSON. Cada objeto contiene varias propiedades que describen la operaci\xf3n. Ejemplo:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:'[\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":25,\xa0\xa0\xa0\xa0\xa0 "operationName":"Modify record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":45,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:17.138Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":42,\xa0\xa0\xa0\xa0\xa0 "recordNumber":4,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": "primkey5",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": -5,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "5": "data 25"\xa0\xa0\xa0 \xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "8"\xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":23,\xa0\xa0\xa0\xa0\xa0 "operationName":"Save seqnum",\xa0\xa0\xa0\xa0\xa0 "operationNumber":46,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:18.155Z",\xa0\xa0\xa0\xa0\xa0 "sequenceNumber":23,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem" \xa0\xa0 },\xa0\xa0 {\xa0\xa0\xa0\xa0\xa0 "operationType":24,\xa0\xa0\xa0\xa0\xa0 "operationName":"Create record",\xa0\xa0\xa0\xa0\xa0 "operationNumber":47,\xa0\xa0\xa0\xa0\xa0 "contextID":37,\xa0\xa0\xa0\xa0\xa0 "timeStamp":"2019-12-11T09:13:19.228Z",\xa0\xa0\xa0\xa0\xa0 "dataLen":570,\xa0\xa0\xa0\xa0\xa0 "recordNumber":7,\xa0\xa0\xa0\xa0\xa0 "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",\xa0\xa0\xa0\xa0\xa0 "tableName":"elem",\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "1": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "3": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0 "extraData": {\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_id": 1,\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "user_name": "Vanessa Smith",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_alias": "Default 4D User",\xa0 \xa0 \xa0 \xa0 \xa0 "user4d_id": 1,\xa0 \xa0 \xa0 \xa0 \xa0 "host_name": "iMac-VSmith-0833",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "task_name": "Application process",\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 "client_version": -1610541776\xa0\xa0\xa0 \xa0 },\xa0\xa0\xa0\xa0\xa0 "primaryKey": "9"\xa0\xa0 }]\n'})}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Nota:"})," si pas\xf3 Field attribute with ",(0,i.jsx)(a.strong,{children:"name"})," en el par\xe1metro ",(0,i.jsx)(a.em,{children:"atribCampo"}),', el objeto "fields" se ver\xe1 as\xed:']}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-json",children:'...\xa0\xa0\xa0\xa0\xa0 "fields": {\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "ID": 9,\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_2": "test value",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Date_Field": "2003-03-03T00:00:00.000Z",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 "Field_8": "BlobID: 2" \xa0\xa0\xa0\xa0\xa0 },...\n'})}),"\n",(0,i.jsx)(a.h5,{id:""}),"\n",(0,i.jsx)(a.p,{children:"La lista actual de propiedades disponibles depende del tipo de operaci\xf3n (por ejemplo: crear registros, eliminar registros, modificar registros, crear Blob etc.). Estas son las principales propiedades:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"tipoOperacion"}),": c\xf3digo interno para la operaci\xf3n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"nomOperacion"}),': tipo de operaci\xf3n, por ejemplo, "crear registro", "modificar registro"']}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"numOperacion"}),": n\xfamero interno de la operaci\xf3n en el archivo de registro"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"contextID"}),": ID del contexto de ejecuci\xf3n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"timeStamp"}),": timestamp de la operaci\xf3n en el archivo de registro"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"dataLong"}),": tama\xf1o de los datos"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"numRegistro"}),": n\xfamero de registro interno"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"IDtabla"}),": ID interno de la tabla"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"nomTabla"}),": nombre de la tabla"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"campos"}),": de valores de campo"]}),"\n",(0,i.jsxs)(a.li,{children:["En el caso valores de tipo Blob o imagen, se suministra informaci\xf3n diferente seg\xfan su ubicaci\xf3n de almacenamiento:\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:'Si el Blob o la imagen se almacenan dentro del archivo de datos, la propiedad ser\xe1 "BlobID:"+ un n\xfamero Blob interno, por ejemplo: "BlobID:1"'}),"\n",(0,i.jsx)(a.li,{children:'Si el Blob o la imagen se almacenan fuera del archivo de datos, la propiedad ser\xe1 "BlobPath:" + la ruta para los datos, por ejemplo: "BlobPath: Table 1/Field 6/Data_EE12D091535F9748BCE62EDE972A4BA2.jpg"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"extraData"}),": datos de contexto del usuario, incluidos el nombre de usuario y el alias (*), el nombre y la ID de la tarea, el nombre de la m\xe1quina local y la versi\xf3n del cliente."]}),"\n",(0,i.jsx)(a.li,{children:"numSecuencia: n\xfamero de secuencia dentro de la secuencia de auto incrementar."}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"primaryKey"}),": valor de la llave primaria."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:'(*) En las bases de datos proyecto, la propiedad "user4d_id" no se devuelve.'}),"\n",(0,i.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(a.p,{children:"Usted quiere guardar el archivo de historial actual en JSON:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs")\n'})}),"\n",(0,i.jsx)(a.p,{children:"Usted quiere guardar un archivo de historial archivado en JSON:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-4d",children:'\xa0LOG FILE TO JSON("c:\\\\4Dv15\\\\ExportLogs";0;"c:\\\\4Dv15\\\\Backup\\\\old_myDB.journal")\n'})}),"\n",(0,i.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,i.jsxs)(a.p,{children:["El comando ",(0,i.jsx)(a.strong,{children:"LOG FILE TO JSON"}),' modifica el valor de las variables sistema OK y Document: si el archivo JSON se guarda correctamente, OK toma el valor 1 y Document contiene la ruta del archivo de historial. Si ha pasa "" en el par\xe1metro ',(0,i.jsx)(a.em,{children:"rutaLog"})," y el usuario cancela el cuadro de di\xe1logo de selecci\xf3n de archivos, OK toma el valor 0 y el Document contiene una cadena vac\xeda. Si el usuario selecciona un archivo no v\xe1lido, OK toma el valor 0 y Document contiene la ruta del archivo invalido."]}),"\n",(0,i.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"/docs/es/commands/integrate-mirror-log-file",children:"INTEGRATE MIRROR LOG FILE"})}),"\n",(0,i.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{}),(0,i.jsx)(a.th,{})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"N\xfamero de comando"}),(0,i.jsx)(a.td,{children:"1352"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"Hilo seguro"}),(0,i.jsx)(a.td,{children:"\u2713"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"Modifica variables"}),(0,i.jsx)(a.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return l},a:function(){return s}});var r=n(667294);let i={},o=r.createContext(i);function s(e){let a=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);