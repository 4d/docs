"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53010"],{705638:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/load-set","title":"LOAD SET","description":"LOAD SET ( {tabla ;} conjunto ; doc )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-set.md","sourceDirName":"commands-legacy","slug":"/commands/load-set","permalink":"/docs/es/commands/load-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-set","title":"LOAD SET","slug":"/commands/load-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in set","permalink":"/docs/es/commands/is-in-set"},"next":{"title":"Records in set","permalink":"/docs/es/commands/records-in-set"}}'),r=s("785893"),d=s("250065");let t={id:"load-set",title:"LOAD SET",slug:"/commands/load-set",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOAD SET"})," ( {",(0,r.jsx)(n.em,{children:"tabla"})," ;} ",(0,r.jsx)(n.em,{children:"conjunto"})," ; ",(0,r.jsx)(n.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla a la cual pertenece el conjunto o Tabla por defecto si se omite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del conjunto a crear en memoria"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"doc"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Documento que contiene el conjunto"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["LOAD SET carga un conjunto desde el archivo ",(0,r.jsx)(n.em,{children:"documento,"})," creado con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/save-set",title:"SAVE SET",children:"SAVE SET"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El conjunto guardado en ",(0,r.jsx)(n.em,{children:"documento"})," debe aplicar a ",(0,r.jsx)(n.em,{children:"tabla"}),". El conjunto creado en memoria se sobrescribe si ya existe."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"documento"})," es el nombre del documento disco que contiene el conjunto. El documento no necesita tener el mismo nombre del conjunto. Si pasa una cadena vac\xeda en ",(0,r.jsx)(n.em,{children:"documento"}),", se muestra una caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario elegir el conjunto a cargar."]}),"\n",(0,r.jsx)(n.p,{children:"Recuerde que un conjunto es una representaci\xf3n de una selecci\xf3n de registros en el momento en que el conjunto se crea. Si los registros representados por el conjunto cambian, el conjunto podr\xeda volverse inv\xe1lido. Por lo tanto, un conjunto cargado desde un disco debe representar a un grupo de registros que no cambia con frecuencia. M\xfaltiples eventos pueden volver un conjunto inv\xe1lido: modificaci\xf3n o eliminaci\xf3n de un registro del conjunto, o modificaci\xf3n de los criterios que determinan la creaci\xf3n del conjunto."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo utiliza LOAD SET para cargar un conjunto de sedes de la empresa Acme en Nueva York:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOAD SET([Empresas];"NY Acme";"NYAcmeSt")\xa0// Cargar el conjunto en memoria\n\xa0USE SET("NY Acme")\xa0// Cambiar la selecci\xf3n actual a NY Acme\n\xa0CLEAR SET("NY Acme")\xa0// Borrar el conjunto de la memoria\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el usuario hace clic en Cancelar en la caja de di\xe1logo de abrir archivos, o si se produce un error durante la carga, la variable sistema OK toma el valor 0. De lo contrario, toma el valor 1."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/save-set",children:"SAVE SET"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"185"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var o=s(667294);let r={},d=o.createContext(r);function t(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);