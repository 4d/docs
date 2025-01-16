"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37908"],{115912:function(e,a,n){n.r(a),n.d(a,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>t,toc:()=>d,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/sql-execute","title":"SQL EXECUTE","description":"SQL EXECUTE ( instruccionSQL {; objAsoc}{; objAsoc2 ; ... ; objAsocN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-execute.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute","permalink":"/docs/es/commands/sql-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-execute","title":"SQL EXECUTE","slug":"/commands/sql-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL End selection","permalink":"/docs/es/commands/sql-end-selection"},"next":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/es/commands/sql-execute-script"}}'),l=n("785893"),o=n("250065");let r={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},i=void 0,t={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ejemplo 5",id:"ejemplo-5",level:4},{value:"Ejemplo 6",id:"ejemplo-6",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let a={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"SQL EXECUTE"})," ( ",(0,l.jsx)(a.em,{children:"instruccionSQL"})," {; ",(0,l.jsx)(a.em,{children:"objAsoc"}),"}{; ",(0,l.jsx)(a.em,{children:"objAsoc2"})," ; ... ; ",(0,l.jsx)(a.em,{children:"objAsocN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Par\xe1metro"}),(0,l.jsx)(a.th,{children:"Tipo"}),(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"instruccionSQL"}),(0,l.jsx)(a.td,{children:"Text"}),(0,l.jsx)(a.td,{children:"\u2192"}),(0,l.jsx)(a.td,{children:"Comando SQL a ejecutar"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"objAsoc"}),(0,l.jsx)(a.td,{children:"Variable, Field"}),(0,l.jsx)(a.td,{children:"\u2190"}),(0,l.jsx)(a.td,{children:"Recibe el resultado (si es necesario)"})]})]})]}),"\n",(0,l.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(a.p,{children:"El comando SQL EXECUTE se utiliza para ejecutar un comando SQL y asociar el resultado a objetos 4D (arrays, variables o campos)."}),"\n",(0,l.jsx)(a.p,{children:"Para que el comando pueda ejecutarse, se requiere una conexi\xf3n v\xe1lida en el proceso actual."}),"\n",(0,l.jsxs)(a.p,{children:["El par\xe1metro ",(0,l.jsx)(a.em,{children:"instruccionSQL"})," contiene el comando SQL a ejecutar. ",(0,l.jsx)(a.em,{children:"objAsoc"})," recibe los resultados. Las variables est\xe1n asociadas en el orden de secuencia de la columna, lo que significa que las columnas restantes se ignoren."]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsxs)(a.p,{children:["El comando admite hasta 127 par\xe1metros ",(0,l.jsx)(a.em,{children:"objAsoc"}),"."]})}),"\n",(0,l.jsxs)(a.p,{children:["Si los campos 4D se pasan como par\xe1metros en ",(0,l.jsx)(a.em,{children:"objAsoc"}),", el comando crear\xe1 registros y los guardar\xe1 autom\xe1ticamente. Los campos 4D deben venir de la misma tabla (no es posible pasar un campo de la tabla 1 y un campo de la tabla 2 en la misma llamada). Si se pasan campos de diferentes tablas, se genera un error."]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Atenci\xf3n:"})," cuando pase los campos 4D en los par\xe1metros ",(0,l.jsx)(a.em,{children:"objAsoc"})," y ejecute el comando ",(0,l.jsx)(a.em,{children:"SELECT"}),", siempre son los datos de la fuente 4D remota los que se modifican. Si quiere recuperar datos de una fuente remota localmente, debe utilizar arrays locales intermediarios y llamar al comando ",(0,l.jsx)(a.em,{children:"INSERT"})," (ver el ejemplo 6)."]}),"\n",(0,l.jsxs)(a.p,{children:["Si pasa arrays 4D en el par\xe1metro ",(0,l.jsx)(a.em,{children:"objAsoc"}),", se recomienda declararlos antes de llamar el comando para verificar el tipo de datos procesados. Los arrays se redimensionan autom\xe1ticamente cuando es necesario."]}),"\n",(0,l.jsx)(a.p,{children:"En el caso de una variable 4D, se recupera un s\xf3lo registro a la vez. Los otros resultados se ignoran."}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre el referenciamiento de expresiones 4D en b\xfasquedas SQL, consulte la secci\xf3n ",(0,l.jsx)(a.em,{children:"Presentaci\xf3n de los comandos del tema SQL"}),"."]}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsx)(a.p,{children:"En este ejemplo, obtendremos la columna ename de la tabla emp de la fuente de datos externos. El resultado se almacena en el campo 4D [Empleados]Nombre. Los registros 4D se crean autom\xe1ticamente:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Empleados]Nombre)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsx)(a.p,{children:"Para controlar la creaci\xf3n de registros, es posible incluir el c\xf3digo en una transacci\xf3n y validarla \xfanicamente si la operaci\xf3n prueba ser satisfactoria:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT campo _alfa FROM ap_Tabla_Prueba"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Tabla 2]Campo1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //Escribir el c\xf3digo de validaci\xf3n de datos aqu\xed\n End while\n VALIDATE TRANSACTION //Validaci\xf3n de la transacci\xf3n\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsxs)(a.p,{children:["En este ejemplo, queremos obtener la columna ename de la tabla emp de la fuente de datos externos. El resultado se almacenar\xe1 en un array ",(0,l.jsx)(a.em,{children:"aNombre"}),". Obtenemos los registros de 10 en 10."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:' ARRAY STRING(30;aNombre;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;aNombre)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,l.jsxs)(a.p,{children:["En este ejemplo, queremos obtener las columnas ename y job de la tabla emp para un ID especifico ID (cl\xe1usula WHERE) de la fuente de datos externa. El resultado se almacena en las variables 4D ",(0,l.jsx)(a.em,{children:"vNombre"})," y ",(0,l.jsx)(a.em,{children:"vJob"}),". S\xf3lo se recupera el primer registro."]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vNombre;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,l.jsx)(a.p,{children:"En este ejemplo, queremos obtener la columna Campo_Blob de la tabla Test en la fuente de datos. El resultado se almacena en una variable BLOB cuyo valor se actualiza cada vez que se carga un registro."}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:' var MiBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Campo_Blob FROM Test";MiBlob)\n While(Not(SQL End selection))\n  //Buscamos en los resultados\n    SQL LOAD RECORD\n  //El valor de MiBlob se actualiza en cada llamada\n'})}),"\n",(0,l.jsx)(a.h4,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,l.jsx)(a.p,{children:"Usted quiere recuperar localmente los datos almacenados en una base 4D Server remota. Para hacerlo, deber utilizar arrays intermediarios:"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-4d",children:'  // Conexi\xf3n a la base remota\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n  // A partir de este punto las peticiones se direccionan a la base remota\n    var $LastName_value : Text // variable 4D utilizada en la cadena de b\xfasqueda\n    ARRAY TEXT($a_LastName;0) // Almacenamiento temporal de los valores remotos de LastName\n    ARRAY TEXT($a_FirstName;0) // Almacenamiento temporal de los valores remotos de FirstName\n    var $UseSQL : Boolean //Elecci\xf3n del medio de almacenamiento de datos en local de la base remota\n  // (demo only)\n \n    $LastName_value:="Smith" // Inicializaci\xf3n de una variable 4D\n \n  // Asociar la variable 4D $LastName_value variable con el primer "?" en la petici\xf3n SQL\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n  // De la tabla remota PERSONS, recuperar los valores de los campos LastName y FirstName\n  // donde "LastName = Smith" y almacenarlos en los arrays $a_LastName y $a_FirstName\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection)) // Si al menos se encuentra un registro\n \n       SQL LOAD RECORD(SQL all records) // Cargar todos los registros\n \n       $UseSQL:=True // Elija la forma de integrar los datos (demo \xfanicamente)\n \n       If($UseSQL) // Uso de las peticiones SQL\n          SQL LOGOUT // Desconexi\xf3n de la base remota\n          SQL LOGIN(SQL_INTERNAL;"user";"password") // Conexi\xf3n a la base local\n  // A partir de este punto las peticiones SQL se direccionan a la base local \n  // Guarde los arrays $a_LastName y $a_FirstName en la tabla local PERSONS\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n \n       Else // Uso de comandos 4D\n          For($i;1;Size of array($a_LastName))\n             CREATE RECORD([PERSONS])\n             [PERSONS]LastName:=$a_LastName{$i}\n             [PERSONS]FirstName:=$a_FirstName{$i}\n             SAVE RECORD([PERSONS])\n          End for\n       End if\n    End if\n    SQL LOGOUT // Cierre de la conexi\xf3n\n End if\n'})}),"\n",(0,l.jsx)(a.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,l.jsx)(a.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK devuelve 1, de lo contrario devuelve 0."}),"\n",(0,l.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"/docs/es/commands/sql-load-record",children:"SQL LOAD RECORD"})}),"\n",(0,l.jsx)(a.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{}),(0,l.jsx)(a.th,{})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"N\xfamero de comando"}),(0,l.jsx)(a.td,{children:"820"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Hilo seguro"}),(0,l.jsx)(a.td,{children:"\u2717"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Modifica variables"}),(0,l.jsx)(a.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return r}});var s=n(667294);let l={},o=s.createContext(l);function r(e){let a=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);