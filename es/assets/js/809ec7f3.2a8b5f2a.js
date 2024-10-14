"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9962],{326606:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=a(474848),s=a(28453);const r={id:"analysis",title:"P\xe1gina An\xe1lisis de actividades",sidebar_label:"P\xe1gina An\xe1lisis de actividades"},o=void 0,c={id:"MSC/analysis",title:"P\xe1gina An\xe1lisis de actividades",description:"La p\xe1gina An\xe1lisis de actividades permite ver el contenido del archivo de registro actual. Esta funci\xf3n es \xfatil para analizar el uso de una aplicaci\xf3n o detectar la(s) operaci\xf3n(es) que ha(n) causado errores o mal funcionamiento. En el caso de una aplicaci\xf3n en modo cliente-servidor, permite verificar las operaciones realizadas por cada m\xe1quina cliente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/MSC/analysis.md",sourceDirName:"MSC",slug:"/MSC/analysis",permalink:"/docs/es/20-R5/MSC/analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fanalysis.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"analysis",title:"P\xe1gina An\xe1lisis de actividades",sidebar_label:"P\xe1gina An\xe1lisis de actividades"},sidebar:"docs",previous:{title:"P\xe1gina de informaci\xf3n",permalink:"/docs/es/20-R5/MSC/information"},next:{title:"P\xe1gina Verificaci\xf3n",permalink:"/docs/es/20-R5/MSC/verify"}},l={},d=[];function t(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"La p\xe1gina An\xe1lisis de actividades permite ver el contenido del archivo de registro actual. Esta funci\xf3n es \xfatil para analizar el uso de una aplicaci\xf3n o detectar la(s) operaci\xf3n(es) que ha(n) causado errores o mal funcionamiento. En el caso de una aplicaci\xf3n en modo cliente-servidor, permite verificar las operaciones realizadas por cada m\xe1quina cliente."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n es posible revertir las operaciones realizadas sobre los datos de la base. Para m\xe1s informaci\xf3n, consulte ",(0,i.jsx)(n.a,{href:"/docs/es/20-R5/MSC/rollback",children:"P\xe1gina de retroceso"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(615873).A+"",width:"882",height:"666"})}),"\n",(0,i.jsx)(n.p,{children:"Cada operaci\xf3n registrada en el archivo de registro aparece como una l\xednea. Las columnas ofrecen informaci\xf3n variada sobre la operaci\xf3n. Puede reorganizar las columnas como desee haciendo clic en sus encabezados."}),"\n",(0,i.jsx)(n.p,{children:"Esta informaci\xf3n permite identificar la fuente y el contexto de cada operaci\xf3n:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Operaci\xf3n"}),": n\xfamero de secuencia de la operaci\xf3n en el archivo de historial."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Acci\xf3n"}),": tipo de operaci\xf3n realizada sobre los datos. Esta columna puede contener una de las siguientes operaciones:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apertura del archivo de datos: apertura de un archivo de datos."}),"\n",(0,i.jsx)(n.li,{children:"Cierre del archivo de datos: cierre de un archivo de datos abierto."}),"\n",(0,i.jsx)(n.li,{children:"Creaci\xf3n de un contexto: creaci\xf3n de un proceso que especifica un contexto de ejecuci\xf3n."}),"\n",(0,i.jsx)(n.li,{children:"Cierre de un contexto: cierre de un proceso."}),"\n",(0,i.jsx)(n.li,{children:"Adici\xf3n: creaci\xf3n y almacenamiento de un registro."}),"\n",(0,i.jsx)(n.li,{children:"A\xf1adir un BLOB: almacenamiento de un BLOB en un campo BLOB."}),"\n",(0,i.jsx)(n.li,{children:"Eliminaci\xf3n: eliminaci\xf3n de un registro."}),"\n",(0,i.jsx)(n.li,{children:"Modificaci\xf3n: modificaci\xf3n de un registro."}),"\n",(0,i.jsx)(n.li,{children:"Inicio de la transacci\xf3n: transacci\xf3n iniciada."}),"\n",(0,i.jsx)(n.li,{children:"Validaci\xf3n de transacci\xf3n: transacci\xf3n validada."}),"\n",(0,i.jsx)(n.li,{children:"Cancelaci\xf3n de transacci\xf3n: transacci\xf3n cancelada."}),"\n",(0,i.jsxs)(n.li,{children:["Contexto de actualizaci\xf3n: cambio de datos adicionales (por ejemplo, una llamada a ",(0,i.jsx)(n.code,{children:"CHANGE CURRENT USER"})," o ",(0,i.jsx)(n.code,{children:"SET USER ALIAS"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tabla"}),": tabla a la que pertenece el registro a\xf1adido/borrado/modificado o el BLOB."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Llave primaria/BLOB"}),": contenido de la llave primaria de cada registro (cuando la llave primaria se compone de varios campos, los valores se separan con punto y coma) o n\xfamero de secuencia del BLOB implicado en la operaci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Proceso"}),": n\xfamero interno del proceso en el que se realiz\xf3 la operaci\xf3n. Este n\xfamero interno corresponde al contexto de la operaci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tama\xf1o"}),": tama\xf1o (en bytes) de los datos procesados por la operaci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fecha y hora"}),": fecha y hora en que se realiz\xf3 la operaci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usuario sistema"}),": nombre del sistema del usuario que realiz\xf3 la operaci\xf3n. En modo cliente-servidor, se muestra el nombre de la m\xe1quina del lado del cliente; en el modo monopuesto, se muestra el nombre del usuario de la sesi\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usuario 4D"}),": nombre de usuario 4D del usuario que ha realizado la operaci\xf3n. Si se define un alias para el usuario, el alias se muestra en lugar del nombre de usuario 4D."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Valores"}),': valores de los campos del registro en caso de adici\xf3n o de modificaci\xf3n. Los valores est\xe1n separados por ";". Solo se muestran los valores representados en forma alfanum\xe9rica.',(0,i.jsx)(n.br,{}),"\n",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si la base de datos est\xe1 encriptada y no se ha proporcionado una llave de datos v\xe1lida correspondiente al archivo de historial abierto, los valores encriptados no se muestran en esta columna."]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Registros"}),": n\xfamero del registro."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Haga clic en ",(0,i.jsx)(n.strong,{children:"Analizar"})," para actualizar el contenido del archivo de historial actual de la aplicaci\xf3n seleccionada (llamado por defecto nomdatos.journal). El bot\xf3n Navegar puede utilizarse para seleccionar y abrir otro archivo de historial para la aplicaci\xf3n. El bot\xf3n ",(0,i.jsx)(n.strong,{children:"Exportar..."})," puede utilizarse para exportar el contenido del archivo como texto."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},615873:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/MSC_analysis-a64034303099f14f6f52603e672cecae.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var i=a(296540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);