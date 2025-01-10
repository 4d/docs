"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45640"],{906865:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-insert-picture","title":"WP INSERT PICTURE","description":"WP INSERT PICTURE ( objFaixa ; imagem ; modo {; atualizarFaixa} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-insert-picture.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-insert-picture","permalink":"/docs/pt/WritePro/commands/wp-insert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-picture.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-insert-picture","title":"WP INSERT PICTURE","slug":"/WritePro/commands/wp-insert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP INSERT FORMULA","permalink":"/docs/pt/WritePro/commands/wp-insert-formula"},"next":{"title":"WP Insert table","permalink":"/docs/pt/WritePro/commands/wp-insert-table"}}'),i=r("785893"),s=r("250065");let o={id:"wp-insert-picture",title:"WP INSERT PICTURE",slug:"/WritePro/commands/wp-insert-picture",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP INSERT PICTURE"})," ( ",(0,i.jsx)(n.em,{children:"objFaixa"})," ; ",(0,i.jsx)(n.em,{children:"imagem"})," ; ",(0,i.jsx)(n.em,{children:"modo"})," {; ",(0,i.jsx)(n.em,{children:"atualizarFaixa"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objFaixa"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"objeto Faixa"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"imagem"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Campo ou vari\xe1vel Imagem, ou rota para o arquivo imagem em disco"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modo"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Modo de inser\xe7\xe3o"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"atualizarFaixa"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Modo de atualiza\xe7\xe3o de Faixa"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando ",(0,i.jsx)(n.strong,{children:"WP INSERT PICTURE"})," insere a ",(0,i.jsx)(n.em,{children:"imagem"})," no ",(0,i.jsx)(n.em,{children:"objFaixa"})," de acordo com o ",(0,i.jsx)(n.em,{children:"modo"})," de inser\xe7\xe3o especificado. A imagem se insertar\xe1 como um car\xe1cter em ",(0,i.jsx)(n.em,{children:"objFaixa"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Em ",(0,i.jsx)(n.em,{children:"objFaixa"}),", passe um objeto faixa padr\xe3o 4D Write Pro."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"uma range, ou"}),"\n",(0,i.jsx)(n.li,{children:"um elemento (tabela / fila / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9 / imagem inline / se\xe7\xe3o/ subse\xe7\xe3o), ou"}),"\n",(0,i.jsx)(n.li,{children:"um documento 4D Write Pro."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Em ",(0,i.jsx)(n.em,{children:"imagem"}),", pode passar:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"seja um campo ou vari\xe1vel imagem 4D,"}),"\n",(0,i.jsxs)(n.li,{children:["ou uma string que contenha uma rota a um arquivo imagem armazenado no disco, expressado utilizando a sintaxe de sistema.",(0,i.jsx)(n.br,{}),"\nSe utilizar uma string, pode passar uma rota de acesso completa, ou uma rota relativa ao arquivo de estrutura do banco de dados. Tamb\xe9m pode passar um nome de arquivo, em cujo caso o arquivo deve estar localizado junto ao arquivo de estrutura do banco de dados. Se passar um nome de arquivo, \xe9 necess\xe1rio indicar a extens\xe3o do arquivo."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Todo formato imagem suportado por 4D pode ser utilizado (ver ",(0,i.jsx)(n.em,{children:"Imagens"}),"). Pode obter a lista de formatos imagem dispon\xedveis utilizando o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),". Se a ",(0,i.jsx)(n.em,{children:"imagem"}),' encapsula v\xe1rios formatos (codecs), 4D Write Pro s\xf3 mant\xe9m um formato para visualizar e um formato para a impress\xe3o (se for diferente) no documento; os "melhores" formatos s\xe3o selecionados automaticamente.']}),"\n",(0,i.jsxs)(n.p,{children:["No par\xe2metro ",(0,i.jsx)(n.em,{children:"modo"}),", passe uma das seguintes constantes para indicar o modo de inser\xe7\xe3o a utilizar na imagem no documento:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk append"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Insere conte\xfados ao final da faixa e atualiza a faixa para conter tanto os conte\xfados anteriores quanto os inseridos."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk prepend"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Conte\xfados inseridos no in\xedcio da faixa e atualiza a faixa para conter os conte\xfados anteriores e os inseridos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk replace"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Substituir e atualizar conte\xfados da faixa; a nova faixa cont\xe8m os conte\xfados inseridos."})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se ",(0,i.jsx)(n.em,{children:"targetObj"})," for uma range, pode usar o par\xe2metro ",(0,i.jsx)(n.em,{children:"rangeUpdate"})," para passar uma das constantes abaixo para especificar se a imagem inserida est\xe1 inclu\xedda na range resultante:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk exclude from range"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Insere conte\xf9dos ao fim da faixa e atualiza a faixa para menter apenas conte\xfados anteriores."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk include in range"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Insere conte\xfados ao in\xedcio da faixa e atualiza a faixa para manter apenas conte\xfados anteriores"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Se n\xe3o passar um par\xe2metro ",(0,i.jsx)(n.em,{children:"rangeUpdate"}),", como padr\xe3o a imagem inserida \xe9 incluida na range resultado."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Se ",(0,i.jsx)(n.em,{children:"targetObj"})," n\xe3o for uma range, ",(0,i.jsx)(n.em,{children:"rangeUpdate"})," \xe9 ignorada."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"No exemplo abaixo, um usu\xe1rio seleciona a imagem que deseja inserir no objeto de faixa e se lhe avisar\xe1 se esta imagem n\xe3o puder ser inserida:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $wpRange : Object\n\xa0$wpRange:=WP Get selection([EXAMPLES]wpDoc)\n\xa0\n\xa0var $fail : Boolean\n\xa0$fail:=False\n\xa0\n\xa0\xa0//pedir ao usu\xe1rio escolher uma imagem no disco que deseje inserir\n\xa0$imgRef:=Open document("")\n\xa0\xa0//se o usu\xe1rio n\xe3o cancelar\n\xa0If(OK=1)\n\xa0\xa0//se o arquivo for um arquivo de imagem suportado\n\xa0\xa0\xa0\xa0If(Is picture file(document))\n\xa0\xa0// insere imagem selecionada pelo usu\xe1rio\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT PICTURE($wpRange;document;wk replace)\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$fail:=True\n\xa0\xa0\xa0\xa0End if\n\xa0Else\n\xa0\xa0\xa0\xa0$fail:=True\n\xa0End if\n\xa0\xa0//se a inser\xe7\xe3o falhar, alerta ao usu\xe1rio\n\xa0If($fail)\n\xa0\xa0\xa0\xa0ALERT("Picture insertion failed")\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-insert-document",children:"WP INSERT DOCUMENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/WritePro/commands/wp-picture-range",children:"WP Picture range"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return o}});var a=r(667294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);