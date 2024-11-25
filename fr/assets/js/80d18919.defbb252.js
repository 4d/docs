"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62099"],{260541:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>A,assets:()=>l,toc:()=>r,frontMatter:()=>c});var s=JSON.parse('{"id":"commands-legacy/sql-end-selection","title":"SQL End selection","description":"SQL End selection  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sql-end-selection.md","sourceDirName":"commands-legacy","slug":"/commands/sql-end-selection","permalink":"/docs/fr/commands/sql-end-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-end-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sql-end-selection","title":"SQL End selection","slug":"/commands/sql-end-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL CANCEL LOAD","permalink":"/docs/fr/commands/sql-cancel-load"},"next":{"title":"SQL EXECUTE","permalink":"/docs/fr/commands/sql-execute"}}'),d=t("785893"),o=t("250065");let c={id:"sql-end-selection",title:"SQL End selection",slug:"/commands/sql-end-selection",displayed_sidebar:"docs"},i=void 0,l={},r=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SQL End selection"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Limites de l\u2019ensemble de recherche atteintes"})]})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"SQL End selection"})," indique si les limites de l\u2019ensemble r\xe9sultat ont \xe9t\xe9 atteintes."]}),"\n",(0,d.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"Le code ci-dessous se connecte \xe0 une source de donn\xe9es externe (Oracle) \xe0 l\u2019aide des param\xe8tres suivants :"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(53049).Z+"",width:"462",height:"158"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var vName : Text\n\xa0\n\xa0SQL LOGIN("TestOracle";"scott";"tiger")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0SQL EXECUTE("SELECT ename FROM emp";vName)\n\xa0\xa0\xa0\xa0While(Not(SQL End selection))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SQL LOAD RECORD\n\xa0\xa0\xa0\xa0End while\n\xa0\xa0\xa0\xa0SQL LOGOUT\n\xa0End if\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Cet exemple retournera dans la variable 4D ",(0,d.jsx)(n.em,{children:"vName"})," les noms (ename) stock\xe9s dans la table nomm\xe9e emp."]})]})}function A(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},53049:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let d={},o=s.createContext(d);function c(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);