"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28694"],{177038:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheet","title":"WP Get style sheet","description":"WP Get style sheet ( wpDoc ; nomHojaEstilo ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheet","permalink":"/docs/es/WritePro/commands/wp-get-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-style-sheet","title":"WP Get style sheet","slug":"/WritePro/commands/wp-get-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get sections","permalink":"/docs/es/WritePro/commands/wp-get-sections"},"next":{"title":"WP Get style sheets","permalink":"/docs/es/WritePro/commands/wp-get-style-sheets"}}'),r=s("785893"),o=s("250065");let l={id:"wp-get-style-sheet",title:"WP Get style sheet",slug:"/WritePro/commands/wp-get-style-sheet",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"nomHojaEstilo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe1metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Documento 4D Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nomHojaEstilo"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nombre de hoja de estilo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Objeto de hoja de estilo"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(t.p,{children:["El comando ",(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," devuelve el objeto de hoja de estilo designado por ",(0,r.jsx)(t.em,{children:"nomHojaEstilo"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["En ",(0,r.jsx)(t.em,{children:"wpDoc"}),", pase el documento 4D Write Pro que contiene la hoja de estilo."]}),"\n",(0,r.jsxs)(t.p,{children:["El par\xe1metro ",(0,r.jsx)(t.em,{children:"nomHojaEstilo"})," le permite especificar el nombre de la hoja de estilo a devolver. Si el nombre de la hoja de estilo no existe en ",(0,r.jsx)(t.em,{children:"wpDoc"}),", se devuelve un objeto nulo."]}),"\n",(0,r.jsx)(t.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(t.p,{children:'Para recuperar la hoja de estilo "Main title":'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0\n\xa0$styleSheet:=WP Get style sheet(wpArea;"Main title")\n\xa0If($styleSheet=Null)\xa0// verifica si la hoja de estilo existe//si no la crea\n\xa0\xa0\xa0\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Acceder a contenidos de documentos por programaci\xf3n"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return l}});var n=s(667294);let r={},o=n.createContext(r);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);