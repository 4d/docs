"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87828"],{626079:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-find-next","title":"WP Find next","description":"WP Find next ( objAlvo ; pesquisarDepois ; valorPesquisa ; condi\xe7\xe3oPesquisa {; valorSubstituir} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-find-next.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-find-next","permalink":"/docs/pt/20-R7/WritePro/commands/wp-find-next","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-find-next.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-find-next","title":"WP Find next","slug":"/WritePro/commands/wp-find-next","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Find all","permalink":"/docs/pt/20-R7/WritePro/commands/wp-find-all"},"next":{"title":"WP Find previous","permalink":"/docs/pt/20-R7/WritePro/commands/wp-find-previous"}}'),o=s("785893"),a=s("250065");let i={id:"wp-find-next",title:"WP Find next",slug:"/WritePro/commands/wp-find-next",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Find next"})," ( ",(0,o.jsx)(n.em,{children:"objAlvo"})," ; ",(0,o.jsx)(n.em,{children:"pesquisarDepois"})," ; ",(0,o.jsx)(n.em,{children:"valorPesquisa"})," ; ",(0,o.jsx)(n.em,{children:"condi\xe7\xe3oPesquisa"})," {; ",(0,o.jsx)(n.em,{children:"valorSubstituir"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objAlvo"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Range ou elemento ou documento 4D Write Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"pesquisarDepois"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Range depois da qual vai come\xe7ar a pesquisa"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valorPesquisa"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"valor a ser pesquisado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"condi\xe7\xe3oPesquisa"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Regras da pesquisa"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"valorSubstituir"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"String que vai opcionalmente substituir o valor encontrado"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Range/sele\xe7\xe3o dos valores encontrados/substitu\xeddos"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"WP Find next"})," pesquisa ",(0,o.jsx)(n.em,{children:"objAlvo"}),", depois da range/faixa de sele\xe7\xe3o ",(0,o.jsx)(n.em,{children:"pesquisarDepois"}),", pesquisando por ",(0,o.jsx)(n.em,{children:"valorPesquisa"})," baseado na ",(0,o.jsx)(n.em,{children:"condi\xe7\xe3oPesquisa"}),". Um par\xe2metro opcional pode ser usado para substituir os resultados encontrados."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": ",(0,o.jsx)(n.strong,{children:"WP Find next"})," n\xe3o pesquisa ou substitui texto em f\xf3rmulas. Use o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})," neste caso."]}),"\n",(0,o.jsxs)(n.p,{children:["No par\xe2metro ",(0,o.jsx)(n.em,{children:"objAlvo"}),", passe um objeto contendo:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"uma range/sele\xe7\xe3o ou"}),"\n",(0,o.jsx)(n.li,{children:"um elemento (tabela / linha / c\xe9lula / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / se\xe7\xe3o / subse\xe7\xe3o / caixas de texto), ou"}),"\n",(0,o.jsx)(n.li,{children:"um documento 4D Write Pro."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Passe uma range no par\xe2metro ",(0,o.jsx)(n.em,{children:"pesquisarDepois"}),". A pesquisa vai come\xe7ar imediatamente depois da range definida ou passar NULL ao primeiro valor de ",(0,o.jsx)(n.em,{children:"objAlvo"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"valorPesquisa"})," permite que passe o texto a pesquisar dentro de ",(0,o.jsx)(n.em,{children:"objAlvo"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Pode especificar como a pesquisa ser\xe1 realizada com o par\xe2metro ",(0,o.jsx)(n.em,{children:"condi\xe7\xe3oPesquisa"}),". Pode usar uma ou mais das constantes abaixo:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk case insensitive"}),(0,o.jsx)(n.td,{children:'Strings s\xe3o comparadas sem levar em conta diferen\xe7as de mai\xfasculas. Note que marcas diacr\xedticas s\xe3o levadas em considera\xe7\xe3o. Por exemplo, "A" \xe9 considerado como sendo a mesma coisa que "a". Entretanto, "a" \xe9 diferente que "\xe0".'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk diacritic insensitive"}),(0,o.jsx)(n.td,{children:'As strings s\xe3o comparadas, mas as marcas diacr\xedticas (acentos) das letras s\xe3o ignorados. Por exemplo, "a" se considera igual que "\xe0".'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk find reverse"}),(0,o.jsx)(n.td,{children:"Pesquisa \xe9 realizada na ordem inversa."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk kana insensitive"}),(0,o.jsx)(n.td,{children:'Para linguagem japonesa. Strings s\xe3o comparadas de acordo com o sentido (n\xe3o com o estilo de escrita). Por exemplo, "\u3042" (a em hiragana) \xe9 considerado como a mesma coisa que "\u30A2" (a em katakana). Quando essa op\xe7\xe3o estiver estabelecida, wk width insensitive  est\xe1 implicito (considerado como estabelecido), entretanto o oposto n\xe3o \xe9 verdade.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk keep character style"}),(0,o.jsx)(n.td,{children:"Quando substituir texto, o estilo de caractere existente \xe9 mantido (se poss\xedvel)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk override protected"}),(0,o.jsx)(n.td,{children:"Prote\xe7\xe3o de leitura e escrita \xe9 ignorada e as strings em \xe1reas protegidas podem ser substituidas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk use keyboard language"}),(0,o.jsxs)(n.td,{children:["Para compara\xe7\xf5es de strings, use a propriedade linguagem de teclado do objeto formul\xe1rio sendo editado ao inv\xe9s da linguagem de dados atual (padr\xe3o). ",(0,o.jsx)(n.strong,{children:"Nota"}),": Ignoredo se o documento for offscreen."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk whole word"}),(0,o.jsx)(n.td,{children:'S\xf3 strings que s\xe3o palavras completas s\xe3o consideradas. Procurar strings dentro de outras palavras n\xe3o \xe9 considerado. Por exemplo, "where" n\xe3o \xe9 procurado se estiver dentro de "somewhere".'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk width insensitive"}),(0,o.jsx)(n.td,{children:'Para a linguagem japonesa. STrings s\xe3o comparadas por largura de caractere, "\uFF71" \xe9 considerado como o mesmo s\xedmbolo que "\u30A2".'})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": Strings s\xe3o comparadas com a linguagem de dados atual a n\xe3o ser que wk use keyboard language seja usado."]}),"\n",(0,o.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"substituirValor"}),", pode passar texto para substituir qualquer inst^ncia de texto em ",(0,o.jsx)(n.em,{children:"valorPesquisa"})," encontrado em ",(0,o.jsx)(n.em,{children:"objAlvo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Range/sele\xe7\xe3o retornada"})}),"\n",(0,o.jsx)(n.p,{children:"A fun\xe7\xe3o retorna uma range/faixa de sele\xe7\xe3o de objetos do valor que foi encontrado ou substitu\xeddo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"opera\xe7\xf5es de pesquisa - as ranges correspondem com as posi\xe7\xf5es das strings encontradas"}),"\n",(0,o.jsx)(n.li,{children:"opera\xe7\xf5es de substitui\xe7\xe3o - as ranges correspondem com as posi\xe7\xf5es de strings substituidas"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Se ",(0,o.jsx)(n.em,{children:"objAlvo"})," for uma range ou elemento, valores encontrados s\xe3o retornados na ordem em que forem achados. Se ",(0,o.jsx)(n.em,{children:"objAlvo"})," for um documento 4D Write Pro, valores encontrados s\xe3o retornados na ordem abaixo:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"corpo"}),"\n",(0,o.jsx)(n.li,{children:"cabe\xe7alho da primeira p\xe1gina para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"rodap\xe9 da primeira p\xe1gina para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"cabe\xe7alho da p\xe1gina esquerda para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"rodap\xe9 da p\xe1gina esquerda para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"cabe\xe7alho da p\xe1gina direita para se\xe7\xe3o (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"rodap\xe9 da p\xe1gina direita para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"cabe\xe7alho principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"rodap\xe9 principal para se\xe7\xe3o 1 (se houver)"}),"\n",(0,o.jsx)(n.li,{children:"repete com se\xe7\xe3o 2, se\xe7\xe3o 3 e assim por diante."}),"\n",(0,o.jsx)(n.li,{children:"caixas de texto"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Uma range/intervalo vazia \xe9 retornada se nenhum resultado for encontrado."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $userSel ;$target ;$alphaRanges ;$nextRange : object\n\xa0var $options : Integer\n\xa0\n\xa0\xa0// define op\xe7\xf5es de pesquisa\n\xa0$options:=wk case insensitive+wk diacritic insensitive\n\xa0\n\xa0\xa0// obt\xe9m posi\xe7\xe3o atual do usu\xe1rio\n\xa0$userSel:=WP Selection range(*;"WParea")\n\xa0\n\xa0\xa0// define alvo\n\xa0$target:=WP Get body(WParea)\xa0// pesquisa apenas no corpo\n\xa0\n\xa0\xa0// pesquisa\xa0 SEARCH of NEXT ocorr\xeancia da string "alpha"\xa0 (baseada na sele\xe7\xe3o atual)\n\xa0$nextRange:=WP Find next($target;$userSel;"alpha";$options)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-find-all",children:"WP Find all"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-find-previous",children:"WP Find previous "})]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let o={},a=r.createContext(o);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);