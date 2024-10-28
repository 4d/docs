"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32713],{514050:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=s(474848),t=s(28453);const a={id:"sql-get-data-source-list",title:"SQL GET DATA SOURCE LIST",slug:"/commands/sql-get-data-source-list",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/sql-get-data-source-list",title:"SQL GET DATA SOURCE LIST",description:"SQL GET DATA SOURCE LIST ( tipoFuente ; arrayNomsFuentes ; arraydrivers )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-get-data-source-list.md",sourceDirName:"commands-legacy",slug:"/commands/sql-get-data-source-list",permalink:"/docs/es/commands/sql-get-data-source-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-get-data-source-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-get-data-source-list",title:"SQL GET DATA SOURCE LIST",slug:"/commands/sql-get-data-source-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SQL Get current data source",permalink:"/docs/es/commands/sql-get-current-data-source"},next:{title:"SQL GET LAST ERROR",permalink:"/docs/es/commands/sql-get-last-error"}},o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SQL GET DATA SOURCE LIST"})," ( ",(0,r.jsx)(n.em,{children:"tipoFuente"})," ; ",(0,r.jsx)(n.em,{children:"arrayNomsFuentes"})," ; ",(0,r.jsx)(n.em,{children:"arraydrivers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipoFuente"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de fuente: usuario o sistema"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrayNomsFuentes"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array de nombres de fuentes de datos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arraydrivers"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Array de drivers de las fuentes"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.em,{children:"GET DATA SOURCE LIST"})," devuelve en los arrays ",(0,r.jsx)(n.em,{children:"arrayNomsFuentes"})," y ",(0,r.jsx)(n.em,{children:"arrayDrivers"}),", los nombres y drivers de las fuentes de datos de tipo ",(0,r.jsx)(n.em,{children:"tipoFuente"})," definidas en el administrador ODBC del sistema operativo."]}),"\n",(0,r.jsxs)(n.p,{children:["4D le permite conectarse directamente v\xeda el lenguaje a una fuente de datos ODBC externa y ejecutar b\xfasquedas SQL dentro de una estructura ",(0,r.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,r.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"}),". Este principio funciona de esta forma: el comando ",(0,r.jsx)(n.em,{children:"GET DATA SOURCE LIST"})," permite obtener la lista de fuentes de datos presentes en el equipo. El comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"})," permite designar la fuente a utilizar. Luego puede ejecutar las b\xfasquedas SQL utilizando una estructura ",(0,r.jsx)(n.a,{href:"/docs/es/commands/begin-sql",title:"Begin SQL",children:"Begin SQL"}),"/",(0,r.jsx)(n.a,{href:"/docs/es/commands/end-sql",title:"End SQL",children:"End SQL"})," en la fuente \u201cactual\u201d. Para llevar a cabo nuevas b\xfasquedas utilizando nuevamente el motor interno de 4D, simplemente pase el comando ",(0,r.jsx)(n.em,{children:"USE INTERNAL DATABASE"}),". Para mayor informaci\xf3n sobre los comandos SQL en el editor de m\xe9todos, consulte el manual 4D SQL."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"tipoFuente"}),", pase el tipo de fuente de datos que quiere obtener. Puede utilizar una de las siguientes constantes del tema \u201c",(0,r.jsx)(n.em,{children:"SQL"}),"\u201d:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User data source"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System data source"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando tiene en cuenta las fuentes de datos de tipo archivo."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando llena y dimensiona los arrays ",(0,r.jsx)(n.em,{children:"arrayNomsFuentes"})," y ",(0,r.jsx)(n.em,{children:"arrayDrivers"})," con los valores correspondientes."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," si quiere conectarse a una fuente de datos 4D externa v\xeda ODBC, necesitar\xe1 tener instalado 4D ODBC Driver en su equipo. Para mayor informaci\xf3n, consulte el manual de instalaci\xf3n del driver 4D ODBC."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo utiliza una fuente de datos usuario:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrDSN;0)\n\xa0ARRAY TEXT(arrDSNDrivers;0)\n\xa0GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/sql-get-current-data-source",children:"SQL Get current data source"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/sql-login",children:"SQL LOGIN"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/sql-logout",children:"SQL LOGOUT"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var r=s(296540);const t={},a=r.createContext(t);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);