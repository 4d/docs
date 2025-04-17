"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67728"],{719490:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheet","title":"WP Get style sheet","description":"WP Get style sheet ( wpDoc ; nomeFolhaEstilo ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/WritePro/commands-legacy/wp-get-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheet","permalink":"/docs/pt/WritePro/commands/wp-get-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheet.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-style-sheet","title":"WP Get style sheet","slug":"/WritePro/commands/wp-get-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get sections","permalink":"/docs/pt/WritePro/commands/wp-get-sections"},"next":{"title":"WP Get style sheets","permalink":"/docs/pt/WritePro/commands/wp-get-style-sheets"}}'),r=s("785893"),o=s("250065");let l={id:"wp-get-style-sheet",title:"WP Get style sheet",slug:"/WritePro/commands/wp-get-style-sheet",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"nomeFolhaEstilo"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Documento 4d Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nomeFolhaEstilo"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nome da folha de estilo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Objeto estiloFolha"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," devolve o objeto de folha de estilo designado por ",(0,r.jsx)(t.em,{children:"nomeFolhaEstilo"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Em ",(0,r.jsx)(t.em,{children:"wpDoc"}),", passe o documento 4D Write Pro que cont\xe9m a folha de estilo."]}),"\n",(0,r.jsxs)(t.p,{children:["O par\xe2metro ",(0,r.jsx)(t.em,{children:"nomeFolhaEstilo"})," lhe permite especificar o nome da folha de estilo a devolver. Se o nome da folha de estilo n\xe3o existir em ",(0,r.jsx)(t.em,{children:"wpDoc"}),", um objeto nulo \xe9 devolvido."]}),"\n",(0,r.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:'Para recuperar a folha de estilo "Main title":'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0\n\xa0$styleSheet:=WP Get style sheet(wpArea;"Main title")\n\xa0If($styleSheet=Null)\xa0// verifica se a folha de estilo existe//se n\xe3o existir, vai cri\xe1-la\n\xa0\xa0\xa0\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Accessar texto e atributos de imagem por programa\xe7\xe3o"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return l}});var n=s(667294);let r={},o=n.createContext(r);function l(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);