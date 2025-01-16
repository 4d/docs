"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34967"],{262453:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/sql-load-record","title":"SQL LOAD RECORD","description":"SQL LOAD RECORD {( nombreEnr )}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-load-record.md","sourceDirName":"commands-legacy","slug":"/commands/sql-load-record","permalink":"/docs/fr/20-R7/commands/sql-load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-load-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-load-record","title":"SQL LOAD RECORD","slug":"/commands/sql-load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL GET OPTION","permalink":"/docs/fr/20-R7/commands/sql-get-option"},"next":{"title":"SQL LOGIN","permalink":"/docs/fr/20-R7/commands/sql-login"}}'),t=s("785893"),d=s("250065");let l={id:"sql-load-record",title:"SQL LOAD RECORD",slug:"/commands/sql-load-record",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SQL LOAD RECORD"})," {( ",(0,t.jsx)(n.em,{children:"nombreEnr"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombreEnr"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre d\u2019enregistrements \xe0 charger"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SQL LOAD RECORD"})," r\xe9cup\xe8re dans 4D un ou plusieurs enregistrement(s) provenant de la source de donn\xe9es ouverte dans la connexion courante."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"nombreEnr"})," permet de d\xe9finir le nombre d\u2019enregistrements \xe0 r\xe9cup\xe9rer :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous omettez ce param\xe8tre, la commande r\xe9cup\xe8rera l\u2019enregistrement courant dans la source de donn\xe9es. Ce principe correspond \xe0 la r\xe9cup\xe9ration des donn\xe9es dans une boucle o\xf9 un enregistrement est re\xe7u \xe0 la fois."}),"\n",(0,t.jsxs)(n.li,{children:["Si vous passez une valeur enti\xe8re dans ",(0,t.jsx)(n.em,{children:"nombreEnr"}),", la commande r\xe9cup\xe9rera ",(0,t.jsx)(n.em,{children:"nombreEnr"})," enregistrements."]}),"\n",(0,t.jsx)(n.li,{children:"Si vous passez la constante SQL all records (ou la valeur -1), la commande r\xe9cup\xe8rera tous les enregistrements de la table."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Ces deux derniers param\xe9trages n\u2019ont de sens que si les donn\xe9es r\xe9cup\xe9r\xe9es sont associ\xe9es \xe0 des tableaux ou des champs 4D."]}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK retourne 1, sinon elle retourne 0."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sql-cancel-load",children:"SQL CANCEL LOAD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/sql-execute",children:"SQL EXECUTE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"822"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var r=s(667294);let t={},d=r.createContext(t);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);