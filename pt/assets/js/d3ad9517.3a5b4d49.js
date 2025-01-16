"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89377"],{937916:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-find-previous","title":"WP Find previous","description":"WP Find previous  ( objAlvo ; pesquisarAntes ; valorPesquisa ; condi\xe7\xe3oPesquisa {; substituirValor} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-find-previous.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-find-previous","permalink":"/docs/pt/WritePro/commands/wp-find-previous","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-find-previous.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-find-previous","title":"WP Find previous","slug":"/WritePro/commands/wp-find-previous","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Find next","permalink":"/docs/pt/WritePro/commands/wp-find-next"},"next":{"title":"WP FREEZE FORMULAS","permalink":"/docs/pt/WritePro/commands/wp-freeze-formulas"}}'),o=n("785893"),a=n("250065");let i={id:"wp-find-previous",title:"WP Find previous",slug:"/WritePro/commands/wp-find-previous",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"WP Find previous"}),"  ( ",(0,o.jsx)(s.em,{children:"objAlvo"})," ; ",(0,o.jsx)(s.em,{children:"pesquisarAntes"})," ; ",(0,o.jsx)(s.em,{children:"valorPesquisa"})," ; ",(0,o.jsx)(s.em,{children:"condi\xe7\xe3oPesquisa"})," {; ",(0,o.jsx)(s.em,{children:"substituirValor"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"objAlvo"}),(0,o.jsx)(s.td,{children:"Object"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Range ou elemento ou documento 4D Write Pro"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"pesquisarAntes"}),(0,o.jsx)(s.td,{children:"Object"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Range/sele\xe7\xe3o antes da qual vai come\xe7ar a pesquisa"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"valorPesquisa"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Valor a ser pesquisado"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"condi\xe7\xe3oPesquisa"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Regras da pesquisa"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"substituirValor"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"String se quiser substituir o valor"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"Object"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Range/sele\xe7\xe3o do valor encontrado/substitu\xeddo"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"WP Find previous"}),"  pesquisa ",(0,o.jsx)(s.em,{children:"objAlvo"}),", antes da range ",(0,o.jsx)(s.em,{children:"pesquisarAntes"}),", para o ",(0,o.jsx)(s.em,{children:"valorPesquisa"})," baseado em ",(0,o.jsx)(s.em,{children:"condi\xe7\xf5esPesquisa"}),". Um par\xe2metro opcional pode ser usado para substituir qualquer resultado encontrado."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": ",(0,o.jsx)(s.strong,{children:"WP Find previous"})," n\xe3o pesquisa ou substitui o texto em f\xf3rmulas. Use o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})," nesse caso."]}),"\n",(0,o.jsxs)(s.p,{children:["No par\xe2metro ",(0,o.jsx)(s.em,{children:"objAlvo"}),", passe um objeto contendo:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"uma range, ou"}),"\n",(0,o.jsx)(s.li,{children:"um elemento (tabela / linha/ c\xe9lula / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / se\xe7\xe3o / subse\xe7\xe3o), ou"}),"\n",(0,o.jsx)(s.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Passa uma range, faixa de valores, no par\xe2metro ",(0,o.jsx)(s.em,{children:"pesquisarAntes"}),". A pesquisa vai come\xe7ar imediatamente antes da faixa selecionada."]}),"\n",(0,o.jsxs)(s.p,{children:["O par\xe2metro ",(0,o.jsx)(s.em,{children:"valorPesquisa"})," permite passar o texto para pesquisar dentro de ",(0,o.jsx)(s.em,{children:"objAlvo"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Pode especificar como a pesquisa \xe9 realizada com o par\xe2metro ",(0,o.jsx)(s.em,{children:"condi\xe7\xe3oPesquisa"}),". Pode usar uma ou mais das constantes abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk case insensitive"}),(0,o.jsx)(s.td,{children:'Strings s\xe3o comparadas sem levar em conta diferen\xe7as de mai\xfasculas. Note que marcas diacr\xedticas s\xe3o levadas em considera\xe7\xe3o. Por exemplo, "A" \xe9 considerado como sendo a mesma coisa que "a". Entretanto, "a" \xe9 diferente que "\xe0".'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk diacritic insensitive"}),(0,o.jsx)(s.td,{children:'As strings s\xe3o comparadas, mas as marcas diacr\xedticas (acentos) das letras s\xe3o ignorados. Por exemplo, "a" se considera igual que "\xe0".'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk find reverse"}),(0,o.jsx)(s.td,{children:"Pesquisa \xe9 realizada na ordem inversa."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk kana insensitive"}),(0,o.jsx)(s.td,{children:'Para linguagem japonesa. Strings s\xe3o comparadas de acordo com o sentido (n\xe3o com o estilo de escrita). Por exemplo, "\u3042" (a em hiragana) \xe9 considerado como a mesma coisa que "\u30A2" (a em katakana). Quando essa op\xe7\xe3o estiver estabelecida, wk width insensitive  est\xe1 implicito (considerado como estabelecido), entretanto o oposto n\xe3o \xe9 verdade.'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk keep character style"}),(0,o.jsx)(s.td,{children:"Quando substituir texto, o estilo de caractere existente \xe9 mantido (se poss\xedvel)."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk override protected"}),(0,o.jsx)(s.td,{children:"Prote\xe7\xe3o de leitura e escrita \xe9 ignorada e as strings em \xe1reas protegidas podem ser substituidas"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk use keyboard language"}),(0,o.jsxs)(s.td,{children:["Para compara\xe7\xf5es de strings, use a propriedade linguagem de teclado do objeto formul\xe1rio sendo editado ao inv\xe9s da linguagem de dados atual (padr\xe3o). ",(0,o.jsx)(s.strong,{children:"Nota"}),": Ignoredo se o documento for offscreen."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk whole word"}),(0,o.jsx)(s.td,{children:'S\xf3 strings que s\xe3o palavras completas s\xe3o consideradas. Procurar strings dentro de outras palavras n\xe3o \xe9 considerado. Por exemplo, "where" n\xe3o \xe9 procurado se estiver dentro de "somewhere".'})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"wk width insensitive"}),(0,o.jsx)(s.td,{children:'Para a linguagem japonesa. STrings s\xe3o comparadas por largura de caractere, "\uFF71" \xe9 considerado como o mesmo s\xedmbolo que "\u30A2".'})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": Strings s\xe3o comparadas usando a linguagem de dados atual a n\xe3o ser que wk use keyboard language seja usado."]}),"\n",(0,o.jsxs)(s.p,{children:["No par\xe2metro opcional ",(0,o.jsx)(s.em,{children:"substituirVAlor"}),", pode passar texto para tomar o lugar de qualquer ocorr\xeancia do texto em ",(0,o.jsx)(s.em,{children:"valorPesquisar"})," encontrada em ",(0,o.jsx)(s.em,{children:"objAlvo"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Range retornada"})}),"\n",(0,o.jsx)(s.p,{children:"Essa fun\xe7\xe3o retorna uma range, uma faixa de elementos, que foi encontrada ou substituida.:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"opera\xe7\xf5es de pesquisa - as ranges correspondem \xe0s posi\xe7\xf5es das strings encontradas"}),"\n",(0,o.jsx)(s.li,{children:"opera\xe7\xf5es de substitui\xe7\xe3o - as ranges correspondem \xe0s posi\xe7\xf5es das strings substitu\xeddas"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Se ",(0,o.jsx)(s.em,{children:"objAlvo"})," for uma range ou elemento, valores encontrados s\xe3o retornados na ordem em que forem encontrados. Se ",(0,o.jsx)(s.em,{children:"objAlvo"})," for um documento 4D Write Pro, os valores encontrados s\xe3o retornados na ordem seguinte:"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"corpo"}),"\n",(0,o.jsx)(s.li,{children:"cabe\xe7alho de primeira p\xe1gina para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"rodap\xe9 de primeira p\xe1gina para se\xe7\xe3o 1(se houver)"}),"\n",(0,o.jsx)(s.li,{children:"cabe\xe7alho de p\xe1gina esquerda para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"rodap\xe9 de p\xe1gina esquerda para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"cabe\xe7alho de p\xe1gina direita para se\xe7\xe3o (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"rodap\xe9 de p\xe1gina direita para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"cabe\xe7alho principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"rodap\xe9 principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(s.li,{children:"repetido com se\xe7\xe3o 2, se\xe7\xe3o 3, e assim por diante."}),"\n",(0,o.jsx)(s.li,{children:"text boxes"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Uma range ou sele\xe7\xe3o vazia \xe9 retornada se nenhum resultado for encontrado."}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0var $userSel ;$target ;$alphaRanges ;$previousRanges: object\n\xa0var $options : Integer\n\xa0\n\xa0\xa0// defina op\xe7\xf5es de pesquisa\n\xa0$options:=wk case insensitive+wk diacritic insensitive\n\xa0\n\xa0\xa0// obt\xe9m posi\xe7\xf5es de usu\xe1rios atuais\n\xa0$userSel:=WP Selection range(*;"WParea")\n\xa0\n\xa0\xa0// define alvo\n\xa0$target:=WP Get body(WParea)\xa0// pesquisa apenas dentro do corpo\n\xa0\n\xa0\xa0// lan\xe7a SEARCH of PREVIOUS ocorr\xeancias da string\xa0 "alpha"(baseada na sele\xe7\xe3o atual)\n\xa0$previousRanges:=WP Find previous($target;"alpha";$options)\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/WritePro/commands/wp-find-all",children:"WP Find all"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/WritePro/commands/wp-find-next",children:"WP Find next"})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var r=n(667294);let o={},a=r.createContext(o);function i(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);