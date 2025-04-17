"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72197"],{714452:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheets","title":"WP Get style sheets","description":"WP Get style sheets ( wpDoc ; tipo ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-get-style-sheets.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheets","permalink":"/docs/pt/20-R8/WritePro/commands/wp-get-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheets.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-style-sheets","title":"WP Get style sheets","slug":"/WritePro/commands/wp-get-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get style sheet","permalink":"/docs/pt/20-R8/WritePro/commands/wp-get-style-sheet"},"next":{"title":"WP Get subsection","permalink":"/docs/pt/20-R8/WritePro/commands/wp-get-subsection"}}'),r=s("785893"),o=s("250065");let l={id:"wp-get-style-sheets",title:"WP Get style sheets",slug:"/WritePro/commands/wp-get-style-sheets",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheets"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"tipo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Documento 4D Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tipo"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Tipo de folha de estilo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Cole\xe7\xe3o de objetos folha de estilo"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.strong,{children:"WP Get style sheets"})," devolve uma cole\xe7\xe3o de todos os objetos de folha de estilo de ",(0,r.jsx)(t.em,{children:"tipo"})," definido em ",(0,r.jsx)(t.em,{children:"wpDoc"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["No par\xe2metro ",(0,r.jsx)(t.em,{children:"wpDoc"}),", passe o documento 4D Write Pro com as folhas de estilo que quiser obter."]}),"\n",(0,r.jsxs)(t.p,{children:["O par\xe2metro ",(0,r.jsx)(t.em,{children:"tipo"})," especifica o tipo de folha a devolver. Os tipos dispon\xedveis s\xe3o:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"wk type character para folhas de estilo de caracteres"}),"\n",(0,r.jsx)(t.li,{children:"wk type paragraph para folhas de estilo de par\xe1grafo"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"Se quiser recuperar uma cole\xe7\xe3o de todas as folhas de estilo de caracteres:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $styleSheets : Collection\n\xa0$styleSheets:=WP Get style sheets(myDoc;wk type character)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Accessar texto e atributos de imagem por programa\xe7\xe3o"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/20-R8/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return l}});var n=s(667294);let r={},o=n.createContext(r);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);