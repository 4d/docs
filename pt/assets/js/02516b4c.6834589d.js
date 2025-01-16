"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29024"],{89191:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-breaks","title":"WP Get breaks","description":"WP Get breaks ( objAlvo {; tipoQuebra} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-breaks.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-breaks","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-breaks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-breaks.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-breaks","title":"WP Get breaks","slug":"/WritePro/commands/wp-get-breaks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP GET BOOKMARKS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-bookmarks"},"next":{"title":"WP Get data context","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-data-context"}}'),a=n("785893"),o=n("250065");let d={id:"wp-get-breaks",title:"WP Get breaks",slug:"/WritePro/commands/wp-get-breaks",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"WP Get breaks"})," ( ",(0,a.jsx)(r.em,{children:"objAlvo"})," {; ",(0,a.jsx)(r.em,{children:"tipoQuebra"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"objAlvo"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Range/faixa de sele\xe7\xe3o ou elemento ou documento 4D write Pro"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"tipoQuebra"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Tipo de quebra a retornar"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Collection"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Cole\xe7\xe3o de ranges/faixas de sele\xe7\xe3o"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando ",(0,a.jsx)(r.strong,{children:"WP Get breaks"})," retorna a cole\xe7\xe3o de todas as quebras inseridas em ",(0,a.jsx)(r.em,{children:"objAlvo"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Esse comando s\xf3 retorna quebras digitadas pelo usu\xe1rio ou pelo c\xf3digo, e n\xe3o as quebras geradas automaticamente por 4D Write Pro em processos de layout."}),"\n",(0,a.jsxs)(r.p,{children:["No par\xe2metro ",(0,a.jsx)(r.em,{children:"objAlvo"}),", pode passar:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"uma range/faixa, ou"}),"\n",(0,a.jsx)(r.li,{children:"um elemento (tabela / linha / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / se\xe7\xe3o / subse\xe7\xe3o), ou"}),"\n",(0,a.jsx)(r.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Como padr\xe3o, quebras de qualquer tipo s\xe3o retornadas. Pode selecionar um tipo de quebra espec\xedfico para retornar passando uma das constantes abaixo no par\xe2metro opcional ",(0,a.jsx)(r.em,{children:"tipoQuebra"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Constante"}),(0,a.jsx)(r.th,{children:"Valor"}),(0,a.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk column break"}),(0,a.jsx)(r.td,{children:"3"}),(0,a.jsxs)(r.td,{children:["Quebra de coluna: insere uma quebra de coluna",(0,a.jsx)(r.br,{})]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk continuous section break"}),(0,a.jsx)(r.td,{children:"5"}),(0,a.jsx)(r.td,{children:"Define uma quebra de se\xe7\xe3o cont\xednua (frequentemente usada para mudar o n\xfamero de colunas sem come\xe7ar uma nova p\xe1gina)."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk line break"}),(0,a.jsx)(r.td,{children:"0"}),(0,a.jsx)(r.td,{children:"Quebra de linha (no mesmo par\xe1grafo)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk page break"}),(0,a.jsx)(r.td,{children:"2"}),(0,a.jsx)(r.td,{children:"Quebra de p\xe1gina: define uma nova p\xe1gina"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk paragraph break"}),(0,a.jsx)(r.td,{children:"4"}),(0,a.jsx)(r.td,{children:"Quebra de par\xe1grafo: define um novo par\xe1grafo"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"wk section break"}),(0,a.jsx)(r.td,{children:"1"}),(0,a.jsxs)(r.td,{children:["Quebra de se\xe7\xe3o: define uma nova se\xe7\xe3o",(0,a.jsx)(r.br,{})]})]})]})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Valor retornado"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"WP Get breaks"})," retornar uma cole\xe7\xe3o de objetos range, cada um deles descrevendo uma quebra dentro do objAlvo. Uma propriedade espec\xedfica apenas leitura est\xe1 dispon\xedvel em cada objeto range, oferecendo o tipo de quebra:"]}),"\n",(0,a.jsxs)(r.p,{children:["[#table]",(0,a.jsx)(r.strong,{children:"Propriedade"})," ",(0,a.jsx)(r.strong,{children:"Tipo"})," ",(0,a.jsx)(r.strong,{children:"Constante"})," ",(0,a.jsx)(r.strong,{children:"Descri\xe7\xe3o"}),(0,a.jsx)(r.br,{}),"\n[ ].breakTypeNumberwk break typeApenas leitura: tipo de quebra#/table]"]}),"\n",(0,a.jsxs)(r.p,{children:["Se ",(0,a.jsx)(r.em,{children:"objAlvo"})," for uma range ou elemento, quebras s\xe3o retornadas na ordem em que s\xe3o encontrados. Se ",(0,a.jsx)(r.em,{children:"objAlvo"})," for um documento 4D Write Pro, quebras s\xe3o retornadas na ordem abaixo:"]}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"corpo"}),"\n",(0,a.jsx)(r.li,{children:"cabe\xe7alho da primeira p\xe1gina para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"cabe\xe7alho da primeira p\xe1gina para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"cabe\xe7alho da p\xe1gina esquerda da se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"rodap\xe9 da p\xe1gina esquerda da se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"cabe\xe7alho da p\xe1gina direita para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"rodap\xe9 da p\xe1gina direita para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"cabe\xe7alho principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"rodap\xe9 principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,a.jsx)(r.li,{children:"repetir com se\xe7\xe3o 2, se\xe7\xe3o 3, e assim por diante."}),"\n",(0,a.jsx)(r.li,{children:"text boxes"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Uma cole\xe7\xe3o vazia \xe9 retornada se ",(0,a.jsx)(r.em,{children:"objAlvo"})," n\xe3o conter qualquer quebra (ou qualquer quebra da peti\xe7\xe3o de ",(0,a.jsx)(r.em,{children:"tipoQuebra"}),")."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(r.p,{children:"Se quiser substituir todas as quebras de linha por quebras de par\xe1grafo no documento:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0var $_filteredBreaks : Collection\n\xa0var $break : Object\n\xa0$_filteredBreaks:=WP Get breaks(WParea;wk line break)\n\xa0For each($break;$_filteredBreaks)\n\xa0\xa0\xa0\xa0WP INSERT BREAK($break;wk paragraph break;wk replace)\n\xa0End for each\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-elements",children:"WP Get elements"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-insert-break",children:"WP INSERT BREAK"})]})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return d}});var s=n(667294);let a={},o=s.createContext(a);function d(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);