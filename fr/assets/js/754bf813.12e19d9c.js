"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6646"],{49161:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheet","title":"WP Get style sheet","description":"WP Get style sheet ( docWP ; nomFeuilleStyle ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheet","permalink":"/docs/fr/WritePro/commands/wp-get-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-style-sheet","title":"WP Get style sheet","slug":"/WritePro/commands/wp-get-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get sections","permalink":"/docs/fr/WritePro/commands/wp-get-sections"},"next":{"title":"WP Get style sheets","permalink":"/docs/fr/WritePro/commands/wp-get-style-sheets"}}'),r=s("785893"),l=s("250065");let i={id:"wp-get-style-sheet",title:"WP Get style sheet",slug:"/WritePro/commands/wp-get-style-sheet",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," ( ",(0,r.jsx)(t.em,{children:"docWP"})," ; ",(0,r.jsx)(t.em,{children:"nomFeuilleStyle"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"docWP"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Document 4D Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nomFeuilleStyle"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nom de la feuille de style"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Objet feuille de style"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," retourne l'objet feuille de style d\xe9sign\xe9 par le ",(0,r.jsx)(t.em,{children:"nomFeuilleStyle"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans ",(0,r.jsx)(t.em,{children:"docWP"}),", passez le document 4D Write Pro qui contient la feuille de style."]}),"\n",(0,r.jsx)(t.p,{children:"Le param\xe8tre nomFeuilleStyle vous permet de renseigner le nom de la feuille de style \xe0 retourner. Si le nom de la feuille de style n'existe pas dans docWP, un objet null est retourn\xe9."}),"\n",(0,r.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:'Pour r\xe9cup\xe9rer la feuille de style "Titre principal" :'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0\n\xa0$styleSheet:=WP Get style sheet(wpArea;"Titre principal")\n\xa0If($styleSheet=Null)\xa0// v\xe9rifier si la feuille de style existe //si ce n\'est pas le cas, cr\xe9\xe9z-la\n\xa0\xa0\xa0\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Titre principal")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Acc\xe9der au contenu des documents par programmation"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return i}});var n=s(667294);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);