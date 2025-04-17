"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47205"],{473121:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/sql-load-record","title":"SQL LOAD RECORD","description":"SQL LOAD RECORD {( numReg )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/sql-load-record.md","sourceDirName":"commands-legacy","slug":"/commands/sql-load-record","permalink":"/docs/es/commands/sql-load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-load-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"sql-load-record","title":"SQL LOAD RECORD","slug":"/commands/sql-load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET OPTION","permalink":"/docs/es/commands/sql-get-option"},"next":{"title":"SQL LOGIN","permalink":"/docs/es/commands/sql-login"}}'),d=s("785893"),t=s("250065");let o={id:"sql-load-record",title:"SQL LOAD RECORD",slug:"/commands/sql-load-record",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL LOAD RECORD"})," {( ",(0,d.jsx)(n.em,{children:"numReg"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numReg"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de registros a cargar"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando SQL LOAD RECORD recupera en 4D uno o m\xe1s registros de la fuente de datos abierta en la conexi\xf3n actual."}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"numReg"})," se utiliza para definir el n\xfamero de registros a recuperar:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Si omite este par\xe1metro, el comando recuperar\xe1 el registro actual de la fuente de datos. Este principio corresponde a la recuperaci\xf3n de datos en un bucle donde se recibe un registro a la vez."}),"\n",(0,d.jsxs)(n.li,{children:["Si pasa un valor entero en ",(0,d.jsx)(n.em,{children:"numReg"}),", el comando recupera ",(0,d.jsx)(n.em,{children:"numReg"})," registros."]}),"\n",(0,d.jsx)(n.li,{children:"Si pasa la constante SQL All Records  (valor -1), el comando recuperar\xe1 todos los registros de la tabla."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," estos dos \xfaltimos par\xe1metros s\xf3lo tienen sentido si los datos recuperados est\xe1n asociados con arrays o campos 4D."]}),"\n",(0,d.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1. De lo contrario, devuelve 0."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/sql-cancel-load",children:"SQL CANCEL LOAD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/sql-execute",children:"SQL EXECUTE"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"822"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let d={},t=r.createContext(d);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);