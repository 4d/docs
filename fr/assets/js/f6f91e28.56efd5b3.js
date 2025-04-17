"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93797"],{101722:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/sql-cancel-load","title":"SQL CANCEL LOAD","description":"SQL CANCEL LOAD","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-cancel-load.md","sourceDirName":"commands-legacy","slug":"/commands/sql-cancel-load","permalink":"/docs/fr/20-R8/commands/sql-cancel-load","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-cancel-load.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-cancel-load","title":"SQL CANCEL LOAD","slug":"/commands/sql-cancel-load","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FIELD VALUE NULL","permalink":"/docs/fr/20-R8/commands/set-field-value-null"},"next":{"title":"SQL End selection","permalink":"/docs/fr/20-R8/commands/sql-end-selection"}}'),l=s("785893"),r=s("250065");let i={id:"sql-cancel-load",title:"SQL CANCEL LOAD",slug:"/commands/sql-cancel-load",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"SQL CANCEL LOAD"})}),"\n\n\n\n\n\n\n\n",(0,l.jsx)(n.table,{children:(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,l.jsx)(n.th,{})]})})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"SQL CANCEL LOAD"})," met fin \xe0 la requ\xeate SELECT courante et initialise les param\xe8tres du curseur."]}),"\n",(0,l.jsxs)(n.p,{children:["Cette commande permet d\u2019ex\xe9cuter plusieurs requ\xeates SELECT au sein d\u2019une m\xeame connexion (c\u2019est-\xe0-dire un m\xeame curseur) initi\xe9e par la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sql-login",children:"SQL LOGIN"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Dans cet exemple, deux requ\xeates sont ex\xe9cut\xe9es dans la m\xeame connexion :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0var Monblob : Blob\n\xa0var MonTexte : Text\n\xa0SQL LOGIN("mysql";"root";"")\n\xa0\n\xa0SQLStmt:="SELECT blob_field FROM app_testTable"\n\xa0SQL EXECUTE(SQLStmt;Monblob)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n\xa0\n\xa0\xa0//R\xe9initialisation du curseur\n\xa0SQL CANCEL LOAD\n\xa0\n\xa0SQLStmt:="SELECT Name FROM Employee"\n\xa0SQL EXECUTE(SQLStmt;MonTexte)\n\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0End while\n'})}),"\n",(0,l.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK retourne 1, sinon elle retourne 0."}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sql-load-record",children:"SQL LOAD RECORD"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R8/commands/sql-login",children:"SQL LOGIN"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"824"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifie les variables"}),(0,l.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);