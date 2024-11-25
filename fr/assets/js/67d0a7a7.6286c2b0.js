"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95297"],{899130:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"ViewPro/commands/vp-remove-table-rows","title":"VP REMOVE TABLE ROWS","description":"Historique","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-remove-table-rows.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-remove-table-rows","permalink":"/docs/fr/ViewPro/commands/vp-remove-table-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-rows.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-remove-table-rows","title":"VP REMOVE TABLE ROWS"},"sidebar":"docs","previous":{"title":"VP REMOVE TABLE COLUMNS","permalink":"/docs/fr/ViewPro/commands/vp-remove-table-columns"},"next":{"title":"VP RESET SELECTION","permalink":"/docs/fr/ViewPro/commands/vp-reset-selection"}}'),s=t("785893"),d=t("250065");let o={id:"vp-remove-table-rows",title:"VP REMOVE TABLE ROWS"},i=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R7"}),(0,s.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE TABLE ROWS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"row"})," : Integer {; ",(0,s.jsx)(n.em,{children:"count"})," : Integer {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom de table"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Index in the table of the starting row to remove"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Number of rows to remove (must be >0)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP REMOVE TABLE ROWS"})," command removes one or ",(0,s.jsx)(n.em,{children:"count"})," row(s) from the specified ",(0,s.jsx)(n.em,{children:"tableName"})," at the specified ",(0,s.jsx)(n.em,{children:"row"})," index. The command removes values and styles."]}),"\n",(0,s.jsxs)(n.p,{children:["This command removes rows from the ",(0,s.jsx)(n.em,{children:"tableName"})," table, NOT from the sheet. The total number of rows of the sheet is not impacted by the command. The total number of rows of the sheet is not impacted by the command."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"tableName"})," table is bound to a ",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-data-context",children:"data context"}),", the command removes element(s) from the collection."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"tableName"})," does not exist, nothing happens."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:'To remove two rows from 3rd row of the "dataTable" table:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE ROWS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-insert-table-rows",children:"VP INSERT TABLE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-remove-table-columns",children:"VP REMOVE TABLE COLUMNS"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);