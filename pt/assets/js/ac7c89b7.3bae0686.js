"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99315"],{688875:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","description":"WP IMPORT STYLE SHEETS ( targetDoc ; sourceDoc )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-import-style-sheets.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-import-style-sheets","permalink":"/docs/pt/20-R8/WritePro/commands/wp-import-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-import-style-sheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","slug":"/WritePro/commands/wp-import-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Import document","permalink":"/docs/pt/20-R8/WritePro/commands/wp-import-document"},"next":{"title":"WP Insert break","permalink":"/docs/pt/20-R8/WritePro/commands/wp-insert-break"}}'),o=s("785893"),n=s("250065");let i={id:"wp-import-style-sheets",title:"WP IMPORT STYLE SHEETS",slug:"/WritePro/commands/wp-import-style-sheets",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," ( ",(0,o.jsx)(t.em,{children:"targetDoc"})," ; ",(0,o.jsx)(t.em,{children:"sourceDoc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe2metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"targetDoc"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Documento 4D Write Pro que vai receber as folhas de estilo"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sourceDoc"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Documento 4D Write Pro do qual vai receber as folhas de estilo"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["O comando ",(0,o.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," importa todas as folhas de estilo de ",(0,o.jsx)(t.em,{children:"sourceDoc"})," em ",(0,o.jsx)(t.em,{children:"targetDoc"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["No par\xe2metro ",(0,o.jsx)(t.em,{children:"targetDoc"}),", passe o documento 4D Write Pro que receber\xe1 as folhas de estilo importadas."]}),"\n",(0,o.jsxs)(t.p,{children:["No par\xe2metro ",(0,o.jsx)(t.em,{children:"sourceDoc"}),", passe o documento 4D Write Pro que contenha as folhas de estilo a importar."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Nota"}),": se uma folha de estilo de ",(0,o.jsx)(t.em,{children:"sourceDoc"})," tiver o mesmo nome que uma folha de estilo em ",(0,o.jsx)(t.em,{children:"targetDoc"}),", a folha de estilo importada sobre-escrever\xe1 (substituir\xe1) a folha de estilo em ",(0,o.jsx)(t.em,{children:"targetDoc"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(t.p,{children:"Se quiser importar uma folha de estilo de modelo e receber uma notifica\xe7\xe3o com o n\xfamero de cada tipo de folha de estilo importada:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:'\xa0wpArea:=WP New\n\xa0$template:=WP Import document("Template.4wp")\n\xa0\n\xa0WP IMPORT STYLE SHEETS(wpArea;$template)\n\xa0\n\xa0$nb1:=WP Get style sheets(wpArea;wk type paragraph).length\n\xa0$nb2:=WP Get style sheets(wpArea;wk type character).length\n\xa0ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))\n'})}),"\n",(0,o.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function m(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return i}});var r=s(667294);let o={},n=r.createContext(o);function i(e){let t=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);