"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34807],{855071:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var s=o(474848),t=o(28453);const a={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},c=void 0,l={id:"commands-legacy/sql-cancel-load",title:"SQL CANCEL LOAD",description:"SQL CANCEL LOAD",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-cancel-load.md",sourceDirName:"commands-legacy",slug:"/commands/sql-cancel-load",permalink:"/docs/pt/commands/sql-cancel-load",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET FIELD VALUE NULL",permalink:"/docs/pt/commands/set-field-value-null"},next:{title:"SQL End selection",permalink:"/docs/pt/commands/sql-end-selection"}},d={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando SQL CANCEL LOAD finaliza a solicita\xe7\xe3o ",(0,s.jsx)(n.em,{children:"SELECT"})," atual e inicializa os par\xe2metros."]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando se utiliza para executar varias pedidos ",(0,s.jsx)(n.em,{children:"SELECT"})," dentro da mesma conex\xe3o (ou seja o mesmo cursor) iniciada pelo comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/sql-login",children:"SQL LOGIN"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Neste exemplo, duas peti\xe7\xf5es s\xe3o executadas na mesma conex\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var Meublob : Blob\n\xa0var MeuTexto : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Myblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//Reinicializa\xe7\xe3o do cursor\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Nome FROM Empregado"\n\xa0SQL EXECUTE(SQLStmt;MyText)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,s.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(n.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK retorna 1. Do contr\xe1rio, devolve 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/sql-login",children:"SQL LOGIN"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var s=o(296540);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);