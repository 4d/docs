"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79247"],{471164:function(e,t,s){s.r(t),s.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","description":"WP IMPORT STYLE SHEETS ( docCible ; docSource )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-import-style-sheets.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-import-style-sheets","permalink":"/docs/fr/WritePro/commands/wp-import-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-import-style-sheets.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","slug":"/WritePro/commands/wp-import-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Import document","permalink":"/docs/fr/WritePro/commands/wp-import-document"},"next":{"title":"WP INSERT BREAK","permalink":"/docs/fr/WritePro/commands/wp-insert-break"}}'),n=s("785893"),l=s("250065");let i={id:"wp-import-style-sheets",title:"WP IMPORT STYLE SHEETS",slug:"/WritePro/commands/wp-import-style-sheets",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," ( ",(0,n.jsx)(t.em,{children:"docCible"})," ; ",(0,n.jsx)(t.em,{children:"docSource"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param\xe8tre"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"docCible"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Document 4D Write Pro qui re\xe7oit les feuilles de style"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"docSource"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Document 4D Write Pro contenant les feuilles de style \xe0 lire"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["La commande ",(0,n.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," importe toutes les feuilles de style du ",(0,n.jsx)(t.em,{children:"docSource"})," vers ",(0,n.jsx)(t.em,{children:"docCible"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Dans le param\xe8tre docCible, passez le document 4D Write Pro qui recevra les feuilles de style import\xe9es."}),"\n",(0,n.jsxs)(t.p,{children:["Dans le param\xe8tre ",(0,n.jsx)(t.em,{children:"docSource"}),", passez le document 4D Write Pro contenant les feuilles de style \xe0 importer."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," : Si une feuille de style provenant de ",(0,n.jsx)(t.em,{children:"docSource"})," poss\xe8de le m\xeame nom qu'une feuille de style de docCible, la feuille de style import\xe9e \xe9crasera (remplacera) la feuille de style dans docCible."]}),"\n",(0,n.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(t.p,{children:"Vous souhaitez importer une feuille de style nomm\xe9e template et recevoir une notification avec le num\xe9ro de chaque type de feuille de style import\xe9e :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0wpArea:=WP New\n\xa0$template:=WP Import document("Template.4wp")\n\xa0\n\xa0WP IMPORT STYLE SHEETS(wpArea;$template)\n\xa0\n\xa0$nb1:=WP Get style sheets(wpArea;wk type paragraph).length\n\xa0$nb2:=WP Get style sheets(wpArea;wk type character).length\n\xa0ALERT(String($nb1)+" feuille(s) de style de paragraphe "+chaine($nb2)+"feuille(s) de style de caract\xe8re import\xe9e(s)))\n'})}),"\n",(0,n.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function m(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return i}});var r=s(667294);let n={},l=r.createContext(n);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);