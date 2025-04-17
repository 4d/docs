"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71903"],{221908:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","description":"WP IMPORT STYLE SHEETS ( docTarget ; docSource )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-import-style-sheets.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-import-style-sheets","permalink":"/docs/es/20-R8/WritePro/commands/wp-import-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-import-style-sheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-import-style-sheets","title":"WP IMPORT STYLE SHEETS","slug":"/WritePro/commands/wp-import-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Import document","permalink":"/docs/es/20-R8/WritePro/commands/wp-import-document"},"next":{"title":"WP Insert break","permalink":"/docs/es/20-R8/WritePro/commands/wp-insert-break"}}'),n=s("785893"),o=s("250065");let i={id:"wp-import-style-sheets",title:"WP IMPORT STYLE SHEETS",slug:"/WritePro/commands/wp-import-style-sheets",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," ( ",(0,n.jsx)(t.em,{children:"docTarget"})," ; ",(0,n.jsx)(t.em,{children:"docSource"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Par\xe1metro"}),(0,n.jsx)(t.th,{children:"Tipo"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"docTarget"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Documento 4D Write Pro para recibir hojas de estilo"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"docSource"}),(0,n.jsx)(t.td,{children:"Object"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Documento 4D Write Pro para obtener hojas de estilo"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(t.p,{children:["El comando ",(0,n.jsx)(t.strong,{children:"WP IMPORT STYLE SHEETS"})," importa todas las hojas de estilo de ",(0,n.jsx)(t.em,{children:"docSource"})," en ",(0,n.jsx)(t.em,{children:"docTarget"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["En el par\xe1metro ",(0,n.jsx)(t.em,{children:"docTarget"}),", pase el documento 4D Write Pro que recibir\xe1 las hojas de estilo importadas."]}),"\n",(0,n.jsxs)(t.p,{children:["En el par\xe1metro ",(0,n.jsx)(t.em,{children:"docSource"}),", pase el documento 4D Write Pro que contiene las hojas de estilo a importar."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Nota"}),": si una hoja de estilo de ",(0,n.jsx)(t.em,{children:"docSource"})," tiene el mismo nombre que una hoja de estilo en ",(0,n.jsx)(t.em,{children:"docTarget"}),", la hoja de estilo importada sobrescribir\xe1 (reemplazar\xe1) la hoja de estilo en ",(0,n.jsx)(t.em,{children:"docTarget"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(t.p,{children:"Desea importar una hoja de estilo de plantilla y recibir una notificaci\xf3n con el n\xfamero de cada tipo de hoja de estilo importada:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0wpArea:=WP New\n\xa0$template:=WP Import document("Template.4wp")\n\xa0\n\xa0WP IMPORT STYLE SHEETS(wpArea;$template)\n\xa0\n\xa0$nb1:=WP Get style sheets(wpArea;wk type paragraph).length\n\xa0$nb2:=WP Get style sheets(wpArea;wk type character).length\n\xa0ALERT(String($nb1)+" hoja(s) de estilo de p\xe1rrafo "+string($nb2)+" hojas de estilo de caracter(es) importados))\n'})}),"\n",(0,n.jsx)(t.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/es/20-R8/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/es/20-R8/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return i}});var r=s(667294);let n={},o=r.createContext(n);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);