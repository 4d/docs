"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26251"],{492217:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>o});var l=JSON.parse('{"id":"commands-legacy/sql-cancel-load","title":"SQL CANCEL LOAD","description":"SQL CANCEL LOAD","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-cancel-load.md","sourceDirName":"commands-legacy","slug":"/commands/sql-cancel-load","permalink":"/docs/es/commands/sql-cancel-load","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-cancel-load","title":"SQL CANCEL LOAD","slug":"/commands/sql-cancel-load","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD VALUE NULL","permalink":"/docs/es/commands/set-field-value-null"},"next":{"title":"SQL End selection","permalink":"/docs/es/commands/sql-end-selection"}}'),t=s("785893"),i=s("250065");let d={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function r(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando SQL CANCEL LOAD finaliza la solicitud SELECT actual e inicializa los par\xe1metros."}),"\n",(0,t.jsxs)(n.p,{children:["Este comando se utiliza para ejecutar varias peticiones SELECT dentro de la misma conexi\xf3n (es decir el mismo cursor) iniciada por el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/sql-login",title:"SQL LOGIN",children:"SQL LOGIN"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"En este ejemplo, se ejecutan dos peticiones en la misma conexi\xf3n:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var Miblob : Blob\n\xa0var MiTexto : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Myblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//Reinicializaci\xf3n del cursor\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Nombre FROM Empleado"\n\xa0SQL EXECUTE(SQLStmt;MyText)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,t.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK devuelve 1. De lo contrario, devuelve 0."}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"824"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var l=s(667294);let t={},i=l.createContext(t);function d(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);