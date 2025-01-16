"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4906"],{694672:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/sql-set-parameter","title":"SQL SET PARAMETER","description":"SQL SET PARAMETER ( objeto ; tipoParam )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-set-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/sql-set-parameter","permalink":"/docs/es/commands/sql-set-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-set-parameter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-set-parameter","title":"SQL SET PARAMETER","slug":"/commands/sql-set-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL SET OPTION","permalink":"/docs/es/commands/sql-set-option"},"next":{"title":"START SQL SERVER","permalink":"/docs/es/commands/start-sql-server"}}'),a=r("785893"),s=r("250065");let i={id:"sql-set-parameter",title:"SQL SET PARAMETER",slug:"/commands/sql-set-parameter",displayed_sidebar:"docs"},l=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SQL SET PARAMETER"})," ( ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"tipoParam"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Objeto 4D a utilizar (variable, array o campo)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tipoParam"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tipo de par\xe1metro"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando SQL SET PARAMETER permite el uso del valor de una variable, array o campo 4D en las peticiones SQL."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," igualmente es posible insertar directamente el nombre de un objeto 4D a utilizar (variable, array o campo) entre los caracteres ",(0,a.jsx)(n.em,{children:"<<"})," y ",(0,a.jsx)(n.em,{children:">>"})," en el texto de la petici\xf3n (ver ejemplo 1). Para mayor informaci\xf3n, consulte la secci\xf3n ",(0,a.jsx)(n.em,{children:"Presentaci\xf3n de los comandos del tema SQL"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"}),", pase el objeto 4D (variable, array o campo) a utilizar en la petici\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"tipoParam"}),", pase el tipo SQL del par\xe1metro. Puede pasar un valor o utilizar una de las siguientes constantes, ubicadas en el tema \u201C",(0,a.jsx)(n.em,{children:"SQL"}),"\u201D:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SQL param in"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SQL param in out"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"Utilizable \xfanicamente en el contexto de un procedimiento almacenado SQL (entrada-salida par\xe1metro definido en el procedimiento almacenado)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"SQL param out"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"4"}),(0,a.jsx)(n.td,{children:"Utilizable \xfanicamente en el contexto de un procedimiento almacenado SQL (par\xe1meto salida definido en el procedimiento almacenado)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["El valor del objeto 4D reemplaza al car\xe1cter ",(0,a.jsx)(n.em,{children:"?"})," en la petici\xf3n SQL (sintaxis est\xe1ndar). Si la petici\xf3n contiene m\xe1s de un car\xe1cter ",(0,a.jsx)(n.em,{children:"?"}),", ser\xe1n necesarias varias llamadas a SQL SET PARAMETER. Los valores de los objetos 4D ser\xe1n asignados secuencialmente en la petici\xf3n, en el orden de ejecuci\xf3n de los comandos."]}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Atenci\xf3n:"})," este comando se utiliza para manejar los ",(0,a.jsx)(n.em,{children:"par\xe1metros"})," pasados a la petici\xf3n SQL. No es posible utilizar el tipo SQL param out para asociar un objeto 4D al resultado de una petici\xf3n SQL. El resultado de una petici\xf3n SQL se recupera, por ejemplo, utilizando el par\xe1metro ",(0,a.jsx)(n.em,{children:"objAsoc"})," del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/sql-execute",children:"SQL EXECUTE"})," (ver ",(0,a.jsx)(n.em,{children:"Presentaci\xf3n de los comandos del tema SQL"}),"). El comando ",(0,a.jsx)(n.strong,{children:"SQL SET PARAMETER"})," se utiliza por lo general para definir los par\xe1metros pasados a la petici\xf3n (SQL param in); los tipos SQL param out y SQL param in out est\xe1n reservados para ser utilizados en el contexto de los procedimientos almacenados SQL que pueden devolver par\xe1metros."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo se utiliza para ejecutar una petici\xf3n SQL la cual llama directamente a las variables 4D asociadas:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var MiTexto : Text\n\xa0var MiEnteroLargo : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"\n\xa0For(vContador;1;10)\n\xa0\xa0\xa0\xa0MiTexto:="Text"+String(vContador)\n\xa0\xa0\xa0\xa0MiEnteroLargo:=vContador\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"El mismo ejemplo anterior, pero utilizando el comando SQL SET PARAMETER:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var MiTexto : Text\n\xa0var MiEnteroLargo : Integer\n\xa0\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"\n\xa0For(vCounter;1;10)\n\xa0\xa0\xa0\xa0MiTexto:="Text"+String(vContador)\n\xa0\xa0\xa0\xa0MiEnteroLargo:=vCounter\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyText;SQL param in)\n\xa0\xa0\xa0\xa0SQL SET PARAMETER(MyLongint;SQL param in)\n\xa0\xa0\xa0\xa0SQL EXECUTE(SQLStmt)\n\xa0\xa0\xa0\xa0SQL CANCEL LOAD\n\xa0End for\n\xa0SQL LOGOUT\n'})}),"\n",(0,a.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1. De lo contrario, devuelve 0."}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"823"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let a={},s=t.createContext(a);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);