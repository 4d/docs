/*! For license information please see 74ec1aea.3e697cf1.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16914],{953003:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(474848),n=r(28453);const s={id:"repair",title:"P\xe1gina Reparaci\xf3n",sidebar_label:"P\xe1gina Reparaci\xf3n"},o=void 0,d={id:"MSC/repair",title:"P\xe1gina Reparaci\xf3n",description:"Esta p\xe1gina se utiliza para reparar el archivo de datos cuando se ha da\xf1ado. Generalmente, s\xf3lo utilizar\xe1 estas funciones bajo la supervisi\xf3n de los equipos t\xe9cnicos de 4D, cuando se hayan detectado anomal\xedas al abrir la aplicaci\xf3n o tras una verificaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/MSC/repair.md",sourceDirName:"MSC",slug:"/MSC/repair",permalink:"/docs/es/20/MSC/repair",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Frepair.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"repair",title:"P\xe1gina Reparaci\xf3n",sidebar_label:"P\xe1gina Reparaci\xf3n"},sidebar:"docs",previous:{title:"P\xe1gina Restauraci\xf3n",permalink:"/docs/es/20/MSC/restore"},next:{title:"P\xe1gina de cifrado",permalink:"/docs/es/20/MSC/encrypt"}},c={},l=[{value:"Archivos",id:"archivos",level:2},{value:"Archivo de datos a reparar",id:"archivo-de-datos-a-reparar",level:3},{value:"Carpeta de copia de seguridad de los archivos originales",id:"carpeta-de-copia-de-seguridad-de-los-archivos-originales",level:3},{value:"Archivos reparados",id:"archivos-reparados",level:3},{value:"Reparaci\xf3n est\xe1ndar",id:"reparaci\xf3n-est\xe1ndar",level:2},{value:"Reparaci\xf3n por encabezados de registros",id:"reparaci\xf3n-por-encabezados-de-registros",level:2},{value:"Asignaci\xf3n manual",id:"asignaci\xf3n-manual",level:3},{value:"Abrir archivo de historial",id:"abrir-archivo-de-historial",level:2}];function t(e){const a={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["Esta p\xe1gina se utiliza para reparar el archivo de datos cuando se ha da\xf1ado. Generalmente, s\xf3lo utilizar\xe1 estas funciones bajo la supervisi\xf3n de los equipos t\xe9cnicos de 4D, cuando se hayan detectado anomal\xedas al abrir la aplicaci\xf3n o tras una ",(0,i.jsx)(a.a,{href:"/docs/es/20/MSC/verify",children:"verificaci\xf3n"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Atenci\xf3n:"})," cada operaci\xf3n de reparaci\xf3n implica la duplicaci\xf3n del archivo original, lo que aumenta el tama\xf1o de la carpeta de la aplicaci\xf3n. Es importante tener esto en cuenta (especialmente en macOS, donde las aplicaciones 4D aparecen como paquetes) para que el tama\xf1o de la aplicaci\xf3n no aumente excesivamente. Eliminar manualmente las copias del archivo original dentro del paquete puede ser \xfatil para minimizar el tama\xf1o del paquete."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"La reparaci\xf3n s\xf3lo est\xe1 disponible en modo mantenimiento. Si intenta realizar esta operaci\xf3n en modo est\xe1ndar, un di\xe1logo de advertencia le informar\xe1 de que la aplicaci\xf3n se cerrar\xe1 y se reiniciar\xe1 en modo de mantenimiento.\nCuando la base est\xe1 encriptada, la reparaci\xf3n de datos incluye pasos de encriptaci\xf3n y desencriptaci\xf3n y, por tanto, requiere la llave de encriptaci\xf3n de datos actual. Si no se ha suministrado ya una llave de cifrado v\xe1lida, aparecer\xe1 un cuadro de di\xe1logo solicitando la frase de paso o la llave de cifrado (ver p\xe1gina Cifrado)."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"archivos",children:"Archivos"}),"\n",(0,i.jsx)(a.h3,{id:"archivo-de-datos-a-reparar",children:"Archivo de datos a reparar"}),"\n",(0,i.jsxs)(a.p,{children:["Nombre de la ruta del archivo de datos actual. El bot\xf3n ",(0,i.jsx)(a.strong,{children:"[...]"})," puede utilizarse para especificar otro archivo de datos. Al hacer clic en este bot\xf3n, se muestra un di\xe1logo est\xe1ndar de \xe1pertura de documentos para que pueda designar el archivo de datos a reparar. Si realiza una ",(0,i.jsx)(a.a,{href:"#standard-repair",children:"reparaci\xf3n est\xe1ndar"}),", debe seleccionar un archivo de datos que sea compatible con el archivo proyecto abierto. Si realiza una reparaci\xf3n ",(0,i.jsx)(a.a,{href:"#recover-by-record-headers",children:"reparaci\xf3n por encabezados de registros"}),", puede seleccionar todo archivo de datos. Una vez validado este di\xe1logo, se indica en la ventana el nombre de la ruta del archivo a reparar."]}),"\n",(0,i.jsx)(a.h3,{id:"carpeta-de-copia-de-seguridad-de-los-archivos-originales",children:"Carpeta de copia de seguridad de los archivos originales"}),"\n",(0,i.jsxs)(a.p,{children:["Por defecto, el archivo de datos original se duplicar\xe1 antes de la operaci\xf3n de reparaci\xf3n. Por defecto, el archivo de datos original se duplicar\xe1 antes de la operaci\xf3n de reparaci\xf3n. El segundo bot\xf3n ",(0,i.jsx)(a.strong,{children:"[...]"})," se puede utilizar para especificar otra ubicaci\xf3n para guardar los archivos originales antes de iniciar la reparaci\xf3n. Esta opci\xf3n se puede utilizar m\xe1s particularmente cuando se reparan archivos voluminosos mientras se utilizan diferentes discos."]}),"\n",(0,i.jsx)(a.h3,{id:"archivos-reparados",children:"Archivos reparados"}),"\n",(0,i.jsx)(a.p,{children:"4D crea un nuevo archivo de datos vac\xedo en la ubicaci\xf3n del archivo original. 4D crea un nuevo archivo de datos vac\xedo en la ubicaci\xf3n del archivo original. El archivo vac\xedo se llena con los datos recuperados."}),"\n",(0,i.jsx)(a.h2,{id:"reparaci\xf3n-est\xe1ndar",children:"Reparaci\xf3n est\xe1ndar"}),"\n",(0,i.jsx)(a.p,{children:"Se debe elegir la reparaci\xf3n est\xe1ndar cuando s\xf3lo est\xe1n da\xf1ados unos pocos registros o \xedndices (las tablas de direcciones est\xe1n intactas). Los datos se compactan y se reparan. Este tipo de reparaci\xf3n s\xf3lo puede realizarse cuando los datos y el archivo de estructura coinciden."}),"\n",(0,i.jsxs)(a.p,{children:['Una vez finalizado el procedimiento de reparaci\xf3n, aparece la p\xe1gina "Reparaci\xf3n" del CSM. Un mensaje indica si la reparaci\xf3n fue exitosa. Si es as\xed, puede abrir la aplicaci\xf3n inmediatamente. ',(0,i.jsx)(a.img,{src:r(145094).A+"",width:"225",height:"45"})]}),"\n",(0,i.jsx)(a.h2,{id:"reparaci\xf3n-por-encabezados-de-registros",children:"Reparaci\xf3n por encabezados de registros"}),"\n",(0,i.jsx)(a.p,{children:"Utilice esta opci\xf3n de reparaci\xf3n de bajo nivel s\xf3lo cuando el archivo de datos est\xe9 gravemente da\xf1ado y despu\xe9s de que todas las dem\xe1s soluciones (restituci\xf3n desde una copia de seguridad, reparaci\xf3n est\xe1ndar) hayan resultado ineficaces."}),"\n",(0,i.jsx)(a.p,{children:"Los registros 4D var\xedan en tama\xf1o, por lo que es necesario mantener la ubicaci\xf3n donde se almacenan en el disco en una tabla espec\xedfica, llamada tabla de direcciones, para poder encontrarlos de nuevo. Por lo tanto, el programa accede a la direcci\xf3n del registro por medio de un \xedndice y de la tabla de direcciones. Si s\xf3lo est\xe1n da\xf1ados los registros o los \xedndices, la opci\xf3n de reparaci\xf3n est\xe1ndar suele ser suficiente para resolver el problema. Sin embargo, cuando la propia tabla de direcciones se ve afectada, requiere una recuperaci\xf3n m\xe1s sofisticada, ya que ser\xe1 necesario reconstituirla. Para ello, el CSM utiliza el marcador situado en el encabezado de cada registro. Los marcadores se comparan con un resumen del registro, que incluye la mayor parte de su informaci\xf3n, y a partir del cual es posible reconstruir la tabla de direcciones."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Si ha desmarcado la opci\xf3n ",(0,i.jsx)(a.strong,{children:"Registros eliminados definitivamente"})," en las propiedades de una tabla en la estructura, la reparaci\xf3n por marcadores de encabezados puede hacer que vuelvan a aparecer los registros que se eliminaron anteriormente."]}),"\n",(0,i.jsxs)(a.p,{children:["La recuperaci\xf3n por encabezados no tiene en cuenta las restricciones de integridad. M\xe1s concretamente, tras esta operaci\xf3n puede obtener valores duplicados con campos \xfanicos o valores NULL con campos declarados ",(0,i.jsx)(a.strong,{children:"Nunca Null"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Al hacer clic en ",(0,i.jsx)(a.strong,{children:"Escanear y reparar..."}),", 4D realiza un an\xe1lisis completo del archivo de datos. Una vez finalizado el an\xe1lisis, los resultados aparecen en la siguiente ventana:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:r(945247).A+"",width:"906",height:"683"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Si todos los registros y todas las tablas han sido asignados, s\xf3lo se muestra el \xe1rea principal."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:'El \xe1rea "Registros encontrados en el archivo de datos" incluye dos tablas que resumen la informaci\xf3n del an\xe1lisis del archivo de datos.'}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"La primera tabla lista la informaci\xf3n del an\xe1lisis del archivo de datos. Cada l\xednea muestra un grupo de registros recuperables en el archivo de datos:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["La columna ",(0,i.jsx)(a.strong,{children:"Orden"})," indica el orden de recuperaci\xf3n del grupo de registros."]}),"\n",(0,i.jsxs)(a.li,{children:["La columna ",(0,i.jsx)(a.strong,{children:"N\xfamero"})," indica el n\xfamero de los registros de la tabla."]}),"\n",(0,i.jsxs)(a.li,{children:["La columna ",(0,i.jsx)(a.strong,{children:"Tabla de destino"})," indica los nombres de las tablas que se asignaron autom\xe1ticamente a los grupos de registros identificados. Los nombres de las tablas asignadas autom\xe1ticamente aparecen en verde. Los grupos no asignados, es decir, las tablas a las que no se ha podido asociar ning\xfan registro, aparecen en rojo."]}),"\n",(0,i.jsxs)(a.li,{children:["La columna ",(0,i.jsx)(a.strong,{children:"Recuperar"})," le permite indicar, para cada grupo, si quiere recuperar los registros. Por defecto, esta opci\xf3n est\xe1 marcada para todos los grupos con registros que pueden asociarse a una tabla."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"La segunda tabla lista las tablas del archivo del proyecto."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"asignaci\xf3n-manual",children:"Asignaci\xf3n manual"}),"\n",(0,i.jsx)(a.p,{children:'Si varios grupos de registros no han podido ser asignados a las tablas debido a una tabla de direcciones da\xf1ada, puede asignarlos manualmente. Para ello, seleccione primero un grupo de registros sin asignar en la primera tabla. El \xe1rea "Contenido de los registros" muestra entonces una vista previa del contenido de los primeros registros del grupo para facilitar su asignaci\xf3n:'}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:r(891446).A+"",width:"903",height:"682"})}),"\n",(0,i.jsxs)(a.p,{children:['A continuaci\xf3n, seleccione la tabla que desea asignar al grupo en la tabla "Tablas no asignadas" y haga clic en el bot\xf3n ',(0,i.jsx)(a.strong,{children:"Identificar tabla"}),". Tambi\xe9n puede asignar una tabla utilizando arrastrar y soltar. El grupo de registros se asocia entonces a la tabla y se recupera en esta tabla. Los nombres de las tablas que se asignan manualmente aparecen en negro. Utilice el bot\xf3n ",(0,i.jsx)(a.strong,{children:"Ignorar registros"})," para eliminar la asociaci\xf3n realizada manualmente entre la tabla y el grupo de registros."]}),"\n",(0,i.jsx)(a.h2,{id:"abrir-archivo-de-historial",children:"Abrir archivo de historial"}),"\n",(0,i.jsxs)(a.p,{children:["Una vez finalizada la reparaci\xf3n, 4D genera un archivo de registro en la carpeta Logs del proyecto. Este archivo permite ver todas las operaciones realizadas. Se crea en formato XML y se llama: ",(0,i.jsx)(a.em,{children:"ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml"}),'" donde:']}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"ApplicationName"}),' es el nombre del archivo del proyecto sin ninguna extensi\xf3n, por ejemplo "Facturas",']}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.em,{children:"yyyy-mm-dd hh-mm-ss"}),' es la marca de tiempo del archivo, basada en la hora del sistema local cuando se inici\xf3 la operaci\xf3n de mantenimiento, por ejemplo "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Al presionar el bot\xf3n ",(0,i.jsx)(a.strong,{children:"Abrir archivo de historial"}),", 4D muestra el archivo de historial m\xe1s reciente en el navegador por defecto de la m\xe1quina."]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},221020:(e,a,r)=>{var i=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,r){var i,s={},l=null,t=null;for(i in void 0!==r&&(l=""+r),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(t=a.ref),a)o.call(a,i)&&!c.hasOwnProperty(i)&&(s[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===s[i]&&(s[i]=a[i]);return{$$typeof:n,type:e,key:l,ref:t,props:s,_owner:d.current}}a.Fragment=s,a.jsx=l,a.jsxs=l},474848:(e,a,r)=>{e.exports=r(221020)},145094:(e,a,r)=>{r.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAtCAIAAADX+5viAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAPcSURBVHhe7ZdBaxNBFMf7qXISD/Ugiih48KAIEYXeRDz3HlD8JLlJta0IIhZpEBLtxZNCL4k2mkZqhXpydt7M7JuZt5vdJGYH/f8ouvvmzZv3Jj9CuzYFIG3gKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOApSB46C1GnY0U5rLaTV6fd1uN01STVZbLdHt21b0k/qfwplD+Us2ETFUxpn3j5rXU8S36PUcT7qX3VUX2uV2l5XcFQEjprXmpTv1rdaw9EwE44ug1rXszRHD4bH5qk+1HHoaKuV/csXKE5EHyBfVGTzR/kkqEFlFBf0qqlMJw23p6QfWgpGEPJZR/wTo1PabW+7QjwxDlLV+AIJnk+nFlQIGyhKU49VagYn+xOXsBxHH/fH554Otz99N+81odbtIN47Peph9H3QWCxqoE8lz/Pnd1cpripYgsM7xCXkmfqJluN+5BEstoh0rEYv8O3FJ0rBaLt3OoXycytVcNkZejWLuIfqNXWQPc5mCY4+6o8v73y52zu98Hw0n6bhLbipFP51eLAR+cx8t727DKof3k6U4PDq+G3M7EcewcU1KuLegqOFLaqUeGJJUJ9Ou736Qai4QtiAe9Zkqy6tQk3WlFdyJos6SoLeH5w9/PB7492v+TQNBvQmsLcQ5viI81Mw22KLBJligsO7R5dgH8r7EUeQj6No/q7hCbaUeKLcBtXUpwsJfqikgglShpUsC7pV91ChJmvKldQLs1jIUS4o/dx4Pb26O/pW81fTcCQ+QXALbq5uh98Aq+Dy8hhb5bXlBAfLZG1U68fbbLZ0i49zRS06QJG8kniiGKTtOhadFYVKKngN5NvyJ9d4hZosJV8O9onM72gs6O23J5e2Rx9Htf94ChuldxqQf3xmNCKci27Vke22IfrjwW6wUZUhJxh4F3kb7sFlGPzd4gjRcTag8LezhQzTRMGJcZC261206FWPQ0UVHGwQRX5dOpI9VKkpVRXai5AdfXM4ufly9Pmo0LYlCgpSxMmXAIKje4eT9WfD66+Or+3Kmqq/4iHoP07KjqpvUCXovd6pMu/W3o9YU3yD/hck6+jBcHJ+a3Rn/6fzL9AUgoLVE36PbvaOrrw4esAsNJqOIShoBuH3UVHT9a0hBAWNIDiqiDXd6J1AUNAIsqOKzX2t6XsjJf+BoGCVFDqqEDWFoGDFlDmqCDSFoGD1zHBUYTQdnEFQ0AizHVUoTS/ufIWgoBEqOap4MhhDUNAIVR0FoCngKEgdOApSB46C1IGjIHXgKEgdOApSB46C1IGjIHXgKEgdOArSZjr9Az4Tm0/7xRlRAAAAAElFTkSuQmCC"},945247:(e,a,r)=>{r.d(a,{A:()=>i});const i=r.p+"assets/images/mscrepair2-70f7dc0be1529255122f9c117f88d8a0.png"},891446:(e,a,r)=>{r.d(a,{A:()=>i});const i=r.p+"assets/images/mscrepair3-fca9ba66ac4c95138c0a5560adae3d30.png"},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>d});var i=r(296540);const n={},s=i.createContext(n);function o(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);