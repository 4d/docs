"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95572"],{498514:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-insert-document","title":"WP INSERT DOCUMENT","description":"WP INSERT DOCUMENT ( objFaixa ; docWP ; modo {; atualizFaixa} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-insert-document.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-insert-document","permalink":"/docs/pt/WritePro/commands/wp-insert-document","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-insert-document","title":"WP INSERT DOCUMENT","slug":"/WritePro/commands/wp-insert-document","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP INSERT BREAK","permalink":"/docs/pt/WritePro/commands/wp-insert-break"},"next":{"title":"WP INSERT FORMULA","permalink":"/docs/pt/WritePro/commands/wp-insert-formula"}}'),s=o("785893"),d=o("250065");let i={id:"wp-insert-document",title:"WP INSERT DOCUMENT",slug:"/WritePro/commands/wp-insert-document",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP INSERT DOCUMENT"})," ( ",(0,s.jsx)(n.em,{children:"objFaixa"})," ; ",(0,s.jsx)(n.em,{children:"docWP"})," ; ",(0,s.jsx)(n.em,{children:"modo"})," {; ",(0,s.jsx)(n.em,{children:"atualizFaixa"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objFaixa"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Faixa 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docWP"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Modo inser\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"atualizFaixa"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Modo atualiza\xe7\xe3o Faixa"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"WP INSERT DOCUMENT"})," insee o documento ",(0,s.jsx)(n.em,{children:"docWP"})," na faixa ",(0,s.jsx)(n.em,{children:"objFaixa"})," de acordo com o modo de inser\xe7\xe3o especificado e o par\xe2metro ",(0,s.jsx)(n.em,{children:"atualizFaixa"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"objRange"}),","]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uma range, ou"}),"\n",(0,s.jsx)(n.li,{children:"um elemento (tabela / fila / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / imagem inline / se\xe7\xe3o / subse\xe7\xe3o / caixa de texto), ou"}),"\n",(0,s.jsx)(n.li,{children:"um documento 4D Write Pro."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["O documento inserido ",(0,s.jsx)(n.em,{children:"docWP"}),"  pode ser qualquer documento 4D Write Pro criado com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-new",children:"WP New"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-import-document",children:"WP Import document"}),". S\xf3 s\xe3o inseridos os elementos de corpo de texto (se\xe7\xf5es e marcadores na faixa de destino s\xe3o conservadas). Al\xe9m disso, os elementos s\xe3o copiados, por isso ",(0,s.jsx)(n.em,{children:"docWP"}),"  podem ser utilizados v\xe1rias vezes."]}),"\n",(0,s.jsxs)(n.p,{children:["No par\xe2metro ",(0,s.jsx)(n.em,{children:"modo"}),", passe uma ou uma combina\xe7\xe3o das seguintes constantes do tema ",(0,s.jsx)(n.em,{children:"Constantes 4D Write Pro"})," para indicar o modo de inser\xe7\xe3o a ser utilizado para o documento na faixa ",(0,s.jsx)(n.em,{children:"objFaixa"})," do documento de destino:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk append"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Insere conte\xfados ao final da faixa e atualiza a faixa para conter tanto os conte\xfados anteriores quanto os inseridos."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk prepend"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Conte\xfados inseridos no in\xedcio da faixa e atualiza a faixa para conter os conte\xfados anteriores e os inseridos"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk replace"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Substituir e atualizar conte\xfados da faixa; a nova faixa cont\xe8m os conte\xfados inseridos."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Po0de combinar uma das constantes anteriores com as seguintes op\xe7\xf5es de inser\xe7\xe3o:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk freeze expressions"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"64"}),(0,s.jsxs)(n.td,{children:["Congela expressoes no momento em que s\xe3o inseridas",(0,s.jsx)(n.br,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk keep paragraph styles"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"128"}),(0,s.jsxs)(n.td,{children:["Mant\xe9m o estilo dos par\xe1grafos destino",(0,s.jsx)(n.br,{})]})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se ",(0,s.jsx)(n.em,{children:"alvoObj"})," for uma range, pode usar o par\xe2metro opcional ",(0,s.jsx)(n.em,{children:"rangeAtulaliz"})," para passar uma das constantes abaixo para especificar se os conte\xfados inseridos s\xe3o incluidos na range resultante:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk exclude from range"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Insere conte\xf9dos ao fim da faixa e atualiza a faixa para menter apenas conte\xfados anteriores."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk include in range"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Insere conte\xfados ao in\xedcio da faixa e atualiza a faixa para manter apenas conte\xfados anteriores"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Se n\xe3o passar um par\xe2metro ",(0,s.jsx)(n.em,{children:"atualizFaixa"}),", como padr\xe3o os conte\xfados inseridos est\xe3o inclu\xeddos na faixa resultante."]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"alvoObj"})," n\xe3o for uma range, ",(0,s.jsx)(n.em,{children:"rangeAtualiz"})," for ignorado."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Se desejar substituir os conte\xfados de um documento pelo texto selecionado de outro documento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$tempRange:=WP Get selection(WPTemplate)\xa0//recuperamos a sele\xe7\xe3o de usu\xe1rio no documento WPTemplate\n\xa0$doctoCopy:=WP New($tempRange)\xa0//criamos um novo documento baseado em WPTemplate\n\xa0WP INSERT DOCUMENT(WPDoc;$doctoCopy;wk replace)\xa0//substituimos o conte\xfado de WPDoc pelo conte\xfado do novo documento\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Se definir um documento modelo com partes pr\xe9-formatadas diferentemente, cada uma das quais sendo armazenadas como uma bookmark. Quando produzir um documento final do modelo, pode extrair qualquer bookmark como um novo documento e inserir a bookmark no documento final."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_BookmarkNames;0)\n\xa0WP GET BOOKMARKS([TEMPLATES]WP;$_BookmarkNames)\xa0//obt\xe9m as bookmarks do modelo\n\xa0$targetRange:=WP New\xa0//criar um documento vazio (ser\xe1 o documento final)\n\xa0\n\xa0$p:=Find in array($_BookmarkNames;"Main_Header")\xa0//gerencia a parte principal cabe\xe7alho\xa0\n\xa0If($p>0)\n\xa0\xa0\xa0\xa0$Range:=WP Get bookmark range(WParea;$_BookmarkNames{$p})\xa0//seleciona a faixa\n\xa0\xa0\xa0\xa0$RangeDoc:=WP New($Range)\xa0//cria um novo documento da faixa\n\xa0\xa0\xa0\xa0WP INSERT DOCUMENT($buildRange;$RangeDoc;wk prepend+wk freeze expressions)\xa0//wk prepend=after replacement, $buildRange \xe9 igual ao fim do texto substitu\xeddo\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-insert-break",children:"WP INSERT BREAK"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-insert-picture",children:"WP INSERT PICTURE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-new",children:"WP New"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return i}});var r=o(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);