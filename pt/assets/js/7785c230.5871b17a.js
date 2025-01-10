"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1122"],{84427:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>n});var s=JSON.parse('{"id":"commands-legacy/export-text","title":"EXPORT TEXT","description":"EXPORT TEXT ( {tabela ;} documento )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/export-text.md","sourceDirName":"commands-legacy","slug":"/commands/export-text","permalink":"/docs/pt/commands/export-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexport-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"export-text","title":"EXPORT TEXT","slug":"/commands/export-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT SYLK","permalink":"/docs/pt/commands/export-sylk"},"next":{"title":"IMPORT DATA","permalink":"/docs/pt/commands/import-data"}}'),a=r("785893"),t=r("250065");let d={id:"export-text",title:"EXPORT TEXT",slug:"/commands/export-text",displayed_sidebar:"docs"},n=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"EXPORT TEXT"})," ( {",(0,a.jsx)(o.em,{children:"tabela"})," ;} ",(0,a.jsx)(o.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela da qual vai exportar dados, ou tabela Padr\xe3o, se omitida"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"documento"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Documento texto que recebe os dados"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando EXPORT TEXT escreve os dados dos registros da sele\xe7\xe3o atual de ",(0,a.jsx)(o.em,{children:"tabela"})," no processo atual. Os dados s\xe3o escritos em ",(0,a.jsx)(o.em,{children:"documento"}),", um documento de texto Windows ou Macintosh, no disco."]}),"\n",(0,a.jsx)(o.p,{children:"A opera\xe7\xe3o de exporta\xe7\xe3o \xe9 realizada pelo formul\xe1rio de sa\xedda atual. A opera\xe7\xe3o de exporta\xe7\xe3o escreve os campos e as vari\xe1veis baseado na ordem de entrada do formul\xe1rio de sa\xedda. Por essa raz\xe3o, utilize um formul\xe1rio de sa\xedda que s\xf3 contenha os campos ou objetos edit\xe1veis que queira exportar. N\xe3o localize bot\xf5es ou outros objetos no formul\xe1rio de exporta\xe7\xe3o. Os objetos de sub-formul\xe1rio s\xe3o ignorados."}),"\n",(0,a.jsx)(o.p,{children:"Um evento On Load \xe9 enviado ao m\xe9todo do formul\xe1rio por cada registro exportado. Utilize este evento para definir as vari\xe1veis que poderia utilizar no formul\xe1rio de exporta\xe7\xe3o."}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"documento"})," pode dar nome a um documento novo ou existente. Se ",(0,a.jsx)(o.em,{children:"documento"})," tem o mesmo nome que um documento existente, o documento existente \xe9 sobrescrito. O ",(0,a.jsx)(o.em,{children:"documento"})," pode incluir uma rota de acesso que contenha os nomes dos volumes e as pastas. Se passa uma cadeia vazia, aparece a caixa de di\xe1logo comum de salvar arquivos. Se o usu\xe1rio cancela este di\xe1logo, \xe9 cancelada a opera\xe7\xe3o de exporta\xe7\xe3o, e a vari\xe1vel sistema OK toma o valor 0."]}),"\n",(0,a.jsxs)(o.p,{children:["Um term\xf4metro de progresso aparece durante a exporta\xe7\xe3o. O usu\xe1rio pode cancelar a opera\xe7\xe3o clicando no bot\xe3o Parar. Se a exporta\xe7\xe3o termina com sucesso, a vari\xe1vel sistema OK toma o valor 1. Em caso de erro ou se a opera\xe7\xe3o seja interrompida, a vari\xe1vel OK toma o valor 0. O term\xf4metro pode ser ocultado com o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Em modo Unicode (modo padr\xe3o), o comando utiliza por padr\xe3o o conjunto de caracteres UTF-8. Pode utilizar o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"})," para modificar este conjunto de caracteres."]}),"\n",(0,a.jsxs)(o.p,{children:["Durante a utiliza\xe7\xe3o de EXPORT TEXT, o delimitador de campos padr\xe3o \xe9 o caractere de tabula\xe7\xe3o (c\xf3digo 9). O delimitador do registro por padr\xe3o \xe9 o retorno de carro (c\xf3digo 13). Pode modificar estes valores atribuindo novos valores \xe0s ",(0,a.jsx)(o.em,{children:"Vari\xe1veis sistema"})," ",(0,a.jsx)(o.strong,{children:"FldDelimit"})," e ",(0,a.jsx)(o.strong,{children:"RecDelimit"}),". O usu\xe1rio pode mudar estes valores na caixa de di\xe1logo de exporta\xe7\xe3o do ambiente Aplica\xe7\xe3o. Note que os campos exportados cont\xeam caracteres definidos como campo ou delimitadores de registros, estes caracteres s\xe3o automaticamente substituidos com espa\xe7o no arquivo exportado, de modo a evitar problemas ocm o processo de importa\xe7\xe3o."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(o.p,{children:"Este exemplo exporta dados a um documento texto. O m\xe9todo primeiro come\xe7a por definir o formul\xe1rio de sa\xedda de maneira que os dados sejam exportados pelo formul\xe1rio correto, modifica os delimitadores, depois realiza a exporta\xe7\xe3o:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Pessoas];"Exportar")\n\xa0FldDelimit:=27\xa0// Definir caractere delimitador de campos: Escape\n\xa0RecDelimit:=10\xa0// Definir caractere delimitador de registros: Line Feed\n\xa0EXPORT TEXT([Pessoas];"Novas_Pessoas.txt")\xa0// Exporta\xe7\xe3o do documento "Novas_Pessoas.txt"\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"OK toma o valor 1 se a exporta\xe7\xe3o termina com sucesso; do contr\xe1rio, toma o valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/export-dif",children:"EXPORT DIF"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/export-sylk",children:"EXPORT SYLK"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/import-text",children:"IMPORT TEXT"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"167"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return n},a:function(){return d}});var s=r(667294);let a={},t=s.createContext(a);function d(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);