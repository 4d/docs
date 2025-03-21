"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30073"],{576373:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/sql-execute-script","title":"SQL EXECUTE SCRIPT","description":"SQL EXECUTE SCRIPT ( rutaScript ; accionError {; nomAtrib ; valAtrib} {; nomAtrib2 ; valAtrib2 ; ... ; nomAtribN ; valAtribN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-execute-script.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute-script","permalink":"/docs/es/commands/sql-execute-script","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute-script.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-execute-script","title":"SQL EXECUTE SCRIPT","slug":"/commands/sql-execute-script","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXECUTE","permalink":"/docs/es/commands/sql-execute"},"next":{"title":"SQL EXPORT DATABASE","permalink":"/docs/es/commands/sql-export-database"}}'),i=r("785893"),t=r("250065");let c={id:"sql-execute-script",title:"SQL EXECUTE SCRIPT",slug:"/commands/sql-execute-script",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SQL EXECUTE SCRIPT"})," ( ",(0,i.jsx)(n.em,{children:"rutaScript"})," ; ",(0,i.jsx)(n.em,{children:"accionError"})," {; ",(0,i.jsx)(n.em,{children:"nomAtrib"})," ; ",(0,i.jsx)(n.em,{children:"valAtrib"}),"} {; ",(0,i.jsx)(n.em,{children:"nomAtrib2"})," ; ",(0,i.jsx)(n.em,{children:"valAtrib2"})," ; ... ; ",(0,i.jsx)(n.em,{children:"nomAtribN"})," ; ",(0,i.jsx)(n.em,{children:"valAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rutaScript"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Ruta de acceso completa del archivo que contiene el script SQL a ejecutar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accionError"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Acci\xf3n a efectuar en caso de error durante la ejecuci\xf3n del script"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomAtrib"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del atributo a utilizar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valAtrib"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor del atributo"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando SQL EXECUTE SCRIPT permite ejecutar una serie de instrucciones SQL ubicadas en el archivo de script designado por ",(0,i.jsx)(n.em,{children:"rutaScript"}),".",(0,i.jsx)(n.br,{}),"\nEste comando s\xf3lo puede ejecutarse en un equipo local (4D local o procedimiento almacenado en 4D Server). Funciona con la base de datos actual (base interna o externa)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," este comando no puede utilizarse con una conexi\xf3n externa que se abre directamente o v\xeda ODBC."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,i.jsx)(n.em,{children:"rutaScript"}),' la ruta de acceso completa del archivo texto que contiene las instrucciones SQL a ejecutar. La ruta de acceso debe expresarse utilizando la sintaxis del sistema actual. Si pasa una cadena vac\xeda ("") en ',(0,i.jsx)(n.em,{children:"rutaScript"}),", se muestra una caja de di\xe1logo de apertura est\xe1ndar de manera que el usuario pueda seleccionar el archivo de script a ejecutar."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-export-database",title:"SQL EXPORT DATABASE",children:"SQL EXPORT DATABASE"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/commands/sql-export-selection",title:"SQL EXPORT SELECTION",children:"SQL EXPORT SELECTION"})," generan autom\xe1ticamente este archivo de script."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"accionError"}),' se utiliza para configurar el funcionamiento del comando cuando ocurre un error durante la ejecuci\xf3n del script. Puede pasar una de las siguientes tres constantes, ubicadas en el tema "":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SQL On error abort"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"En caso de error, 4D detiene de inmediato la ejecuci\xf3n del script."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SQL On error confirm"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"En caso de error, 4D muestra una caja de di\xe1logo que describe el error y permite al usuario interrumpir o continuar la ejecuci\xf3n del script."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SQL On error continue"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"En caso de error, 4D lo ignoras y continua la ejecuci\xf3n del script."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros ",(0,i.jsx)(n.em,{children:"nomAtrib"})," y ",(0,i.jsx)(n.em,{children:"valAtrib"})," deben pasarse en pares. Estos par\xe1metros permiten definir los atributos espec\xedficos para la ejecuci\xf3n del script. En la versi\xf3n actual de 4D, en ",(0,i.jsx)(n.em,{children:"nomAtrib"}),' s\xf3lo puede pasarse un atributo, disponible v\xeda la constante siguiente, ubicada en el tema "":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SQL use access rights"}),(0,i.jsx)(n.td,{children:"Cadena"}),(0,i.jsx)(n.td,{children:"SQL_Use_Access_Rights"}),(0,i.jsxs)(n.td,{children:["Permite restringir los derechos de acceso a aplicar durante la ejecuci\xf3n de los comandos SQL del script. Cuando utilice este atributo, debe pasar 0 \xf3 1 en ",(0,i.jsx)(n.em,{children:"attribValue"}),": ",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.em,{children:"attribValue"})," = 1: 4D utiliza los derechos de acceso del usuario 4D actual.",(0,i.jsx)(n.em,{children:"attribValue"})," = 0 (o atributo no definido): 4D no restringe el acceso, se utilizan los derechos del Dise\xf1ador."]})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["Si el archivo de registro de peticiones de 4D est\xe1 activo (v\xeda los selectores 28 o 45 del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",title:"SET DATABASE PARAMETER",children:"SET DATABASE PARAMETER"}),"), cada comando SQL ejecutado generar\xe1 una entrada con la siguiente informaci\xf3n:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tipo de comando SQL"}),"\n",(0,i.jsx)(n.li,{children:"N\xfamero de registros afectados por el comando"}),"\n",(0,i.jsx)(n.li,{children:"Duraci\xf3n de ejecuci\xf3n del comando"}),"\n",(0,i.jsxs)(n.li,{children:["Para cada error encontrado:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"el c\xf3digo de error"}),"\n",(0,i.jsx)(n.li,{children:"el texto del error si est\xe1 disponible"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si el script se ejecuta correctamente (no se encuentra ning\xfan error), la variable sistema ",(0,i.jsx)(n.em,{children:"OK"})," toma el valor 1. En el evento de un error, la variable sistema ",(0,i.jsx)(n.em,{children:"OK"})," toma o no el valor 0 en funci\xf3n del par\xe1metro ",(0,i.jsx)(n.em,{children:"accionError"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"errorAction"})," es SQL On error abort (valor 1), ",(0,i.jsx)(n.em,{children:"OK"})," toma el valor 0."]}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"errorAction"})," es SQL On error confirm (valor 2), ",(0,i.jsx)(n.em,{children:"OK"})," toma el valor 0 si el usuario elije detener la operaci\xf3n y 1 si elije continuar."]}),"\n",(0,i.jsxs)(n.li,{children:["Si ",(0,i.jsx)(n.em,{children:"errorAction"})," es SQL On error continue (valor 3), la variable ",(0,i.jsx)(n.em,{children:"OK"})," siempre toma el valor 1."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si utiliza este comando para ejecutar acciones consumidoras de memoria tales como importaci\xf3n masiva de datos, puede considerar llamar al comando SQL ALTER DATABASE para desactivar temporalmente las opciones SQL."]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1089"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return c}});var s=r(667294);let i={},t=s.createContext(i);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);