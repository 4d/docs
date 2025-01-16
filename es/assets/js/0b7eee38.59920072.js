"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69310"],{896210:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/sql-export-selection","title":"SQL EXPORT SELECTION","description":"SQL EXPORT SELECTION ( tabla ; rutaCarpeta {; numArchivos {; tamLimiteArchivos {; tamLimiteCampos}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-export-selection.md","sourceDirName":"commands-legacy","slug":"/commands/sql-export-selection","permalink":"/docs/es/20-R7/commands/sql-export-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-export-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-export-selection","title":"SQL EXPORT SELECTION","slug":"/commands/sql-export-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL EXPORT DATABASE","permalink":"/docs/es/20-R7/commands/sql-export-database"},"next":{"title":"SQL Get current data source","permalink":"/docs/es/20-R7/commands/sql-get-current-data-source"}}'),a=s("785893"),r=s("250065");let d={id:"sql-export-selection",title:"SQL EXPORT SELECTION",slug:"/commands/sql-export-selection",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",h5:"h5",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SQL EXPORT SELECTION"})," ( ",(0,a.jsx)(n.em,{children:"tabla"})," ; ",(0,a.jsx)(n.em,{children:"rutaCarpeta"})," {; ",(0,a.jsx)(n.em,{children:"numArchivos"})," {; ",(0,a.jsx)(n.em,{children:"tamLimiteArchivos"})," {; ",(0,a.jsx)(n.em,{children:"tamLimiteCampos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tabla"}),(0,a.jsx)(n.td,{children:"Table"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tabla de la cual exportar la selecci\xf3n"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rutaCarpeta"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:'Ruta de acceso de la carpeta de exportaci\xf3n o "" para mostrar una caja de di\xe1logo de selecci\xf3n de carpeta'})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"numArchivos"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero m\xe1ximo de archivos por carpeta"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tamLimiteArchivos"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tama\xf1o m\xe1ximo del archivo Export.sql (en KB)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tamLimiteCampos"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"L\xedmite de tama\xf1o debajo del cual el contenido de un campo Texto, BLOB o imagen se integrar\xe1 al archivo principal (en bytes)"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando SQL EXPORT SELECTION exporta al formato SQL los registros de la selecci\xf3n actual de la tabla 4D designada por el par\xe1metro ",(0,a.jsx)(n.em,{children:"Tabla"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando es casi id\xe9ntico al comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/sql-export-database",children:"SQL EXPORT DATABASE"}),'. El archivo generado puede ser utilizado directamente por el comando [#cmd id="1089"/] con el fin de importar datos en otra base 4D. La \xfanica diferencia entre estos dos comandos es que SQL EXPORT SELECTION s\xf3lo exporta la selecci\xf3n actual de ',(0,a.jsx)(n.em,{children:"Tabla"})," mientras ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," exporta la totalidad de datos de la base. Igualmente, a diferencia del comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/sql-export-database",children:"SQL EXPORT DATABASE"}),", este comando no funciona con las bases SQL externas. S\xf3lo puede utilizarse con la base principal"]}),"\n",(0,a.jsxs)(n.p,{children:["Consulte la descripci\xf3n del comando ",(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/sql-export-database",children:"SQL EXPORT DATABASE"})," para una descripci\xf3n detallada del funcionamiento y par\xe1metros de estos comandos."]}),"\n",(0,a.jsx)(n.p,{children:"Si la selecci\xf3n actual est\xe1 vac\xeda, el comando no hace nada. Note que en este caso, la carpeta de destino no se vac\xeda."}),"\n",(0,a.jsxs)(n.p,{children:["Si la exportaci\xf3n se lleva a cabo correctamente, la variable ",(0,a.jsx)(n.em,{children:"OK"})," toma el valor 1. De lo contrario, toma el valor 0."]}),"\n",(0,a.jsx)(n.h5,{id:""}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/20-R7/commands/sql-export-database",children:"SQL EXPORT DATABASE"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1064"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let a={},r=t.createContext(a);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);