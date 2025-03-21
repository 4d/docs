"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31404"],{970025:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/regenerate-missing-table","title":"REGENERATE MISSING TABLE","description":"REGENERATE MISSING TABLE ( nomTable )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/regenerate-missing-table.md","sourceDirName":"commands-legacy","slug":"/commands/regenerate-missing-table","permalink":"/docs/fr/commands/regenerate-missing-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregenerate-missing-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"regenerate-missing-table","title":"REGENERATE MISSING TABLE","slug":"/commands/regenerate-missing-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PAUSE INDEXES","permalink":"/docs/fr/commands/pause-indexes"},"next":{"title":"RELOAD EXTERNAL DATA","permalink":"/docs/fr/commands/reload-external-data"}}'),a=s("785893"),r=s("250065");let i={id:"regenerate-missing-table",title:"REGENERATE MISSING TABLE",slug:"/commands/regenerate-missing-table",displayed_sidebar:"docs"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"REGENERATE MISSING TABLE"})," ( ",(0,a.jsx)(n.em,{children:"nomTable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"nomTable"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nom de table manquante \xe0 reg\xe9n\xe9rer"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"REGENERATE MISSING TABLE"})," reconstruit la table manquante dont vous avez pass\xe9 le nom dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"nomTable"}),". Lorsqu\u2019une table manquante est reconstruite, elle devient visible dans l\u2019\xe9diteur de Structure et ses donn\xe9es sont de nouveau accessibles."]}),"\n",(0,a.jsxs)(n.p,{children:["Les tables manquantes sont des tables dont les donn\xe9es sont pr\xe9sentes dans le fichier de donn\xe9es mais qui n\u2019existent pas au niveau de la structure. Vous pouvez identifier les tables manquantes \xe9ventuellement pr\xe9sentes dans l\u2019application \xe0 l\u2019aide de la commande ",(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si la table d\xe9sign\xe9e par le param\xe8tre ",(0,a.jsx)(n.em,{children:"nomTable"})," n\u2019est pas une table manquante de la base, la commande ne fait rien."]}),"\n",(0,a.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(n.p,{children:"Cette m\xe9thode reg\xe9n\xe8re toutes les tables manquantes \xe9ventuellement pr\xe9sentes dans la base :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($tMissingTables;0)\n\xa0GET MISSING TABLE NAMES($tMissingTables)\n\xa0$SizeArray:=Size of array($tMissingTables)\n\xa0If($SizeArray#0)\n\xa0\xa0// Remplir le tableau avec les noms de toutes les tables de la base\n\xa0\xa0\xa0\xa0ARRAY TEXT(tabTables;Lire numero derniere table)\n\xa0\xa0\xa0\xa0If(Last table number>0)\xa0\xa0\xa0\xa0//S\u2019il y a bien des tables\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlTables;Size of array(tabTables);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTables))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0tabTables{$vlTables}:=Table name($vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(tabTables;$vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0For($i;1;$SizeArray)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Find in array(tabTables;$tMissingTables{$i})=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Reg\xe9n\xe9rer la table"+$tMissingTables{$i}+" ?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REGENERATE MISSING TABLE($tMissingTables{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Impossible de r\xe9g\xe9n\xe9rer la table "+$tMissingTables{$i}+" car il y a d\xe9j\xe0 une table de ce nom dans la base.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Pas de tables \xe0 reg\xe9n\xe9rer.")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/fr/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"})}),"\n",(0,a.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"1126"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let a={},r=t.createContext(a);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);