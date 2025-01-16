"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29482"],{462396:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>d,metadata:()=>a,assets:()=>n,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/import-text","title":"IMPORT TEXT","description":"IMPORT TEXT ( {tabela ;} documento )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/import-text.md","sourceDirName":"commands-legacy","slug":"/commands/import-text","permalink":"/docs/pt/commands/import-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-text.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"import-text","title":"IMPORT TEXT","slug":"/commands/import-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT SYLK","permalink":"/docs/pt/commands/import-sylk"},"next":{"title":"Interruptions","permalink":"/docs/pt/category/interruptions"}}'),s=r("785893"),t=r("250065");let d={id:"import-text",title:"IMPORT TEXT",slug:"/commands/import-text",displayed_sidebar:"docs"},i=void 0,n={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"IMPORT TEXT"})," ( {",(0,s.jsx)(o.em,{children:"tabela"})," ;} ",(0,s.jsx)(o.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tabela"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela para a qual se importar\xe1 os dados, ou tabela Padr\xe3o, se omitido"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"documento"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Documento texto do qual se importar\xe1 os dados"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando IMPORT TEXT l\xea dados de ",(0,s.jsx)(o.em,{children:"documento"}),", um documento texto Windows ou Macintosh e os escreve em ",(0,s.jsx)(o.em,{children:"tabela"})," criando novos registros para essa tabela."]}),"\n",(0,s.jsx)(o.p,{children:"A opera\xe7\xe3o de importa\xe7\xe3o \xe9 realizada atrav\xe9s do formul\xe1rio de entrada atual. A opera\xe7\xe3o de importa\xe7\xe3o l\xea os campos e as vari\xe1veis em fun\xe7\xe3o do plano dos objetos no formul\xe1rio de entrada. Por esta raz\xe3o, deve ter muito cuidado em rela\xe7\xe3o \xe0 ordem dos objetos texto (campos e vari\xe1veis) no formul\xe1rio. O primeiro objeto no qual os dados ser\xe3o importados deve estar ao fundo do formul\xe1rio, etc. Se o n\xfamero de campos ou vari\xe1veis no formul\xe1rio n\xe3o corresponde ao n\xfamero de campos a importar, os campos extras s\xe3o ignorados. Um formul\xe1rio de entrada utilizado para importar n\xe3o pode conter bot\xf5es. Os objetos de sub-formul\xe1rio s\xe3o ignorados."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Uma maneira de ter certeza que os dados sejam importados nos objetos corretos \xe9 selecionar o objeto no qual deve ser importado o primeiro campo e mov\xea-lo ao primeiro plano. Continue movendo os campos e vari\xe1veis ao primeiro plano, em ordem, tendo certeza de que tenha um campo ou vari\xe1vel para cada campo a importar."]}),"\n",(0,s.jsx)(o.p,{children:"Um evento On Validate \xe9 enviado ao m\xe9todo de formul\xe1rio para cada registro que seja importado. Utilize este evento para copiar os dados das vari\xe1veis aos campos, se utiliza as vari\xe1veis no formul\xe1rio de importa\xe7\xe3o."}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"documento"})," pode incluir uma rota de acesso que contenha os nomes de volumes e pastas. Se passa uma cadeia vazia, aparece a caixa de di\xe1logo padr\xe3o de abertura de arquivos. Se usu\xe1rio cancela este di\xe1logo, se cancela a opera\xe7\xe3o de importa\xe7\xe3o, e a vari\xe1vel sistema OK toma o valor 0."]}),"\n",(0,s.jsxs)(o.p,{children:["Um term\xf4metro de progresso aparece durante a importa\xe7\xe3o. O usu\xe1rio pode cancelar a opera\xe7\xe3o clicando no bot\xe3o Parar. Os registros que tenham sido importados n\xe3o ser\xe3o removidos se usu\xe1rio pressiona o bot\xe3o Parar. Se a importa\xe7\xe3o termina com sucesso, a vari\xe1vel sistema OK toma o valor 1. Se ocorre um erro ou se a opera\xe7\xe3o \xe9 interrompida, a vari\xe1vel sistema toma o valor 0. O term\xf4metro pode ser ocultado com o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/messages-off",children:"MESSAGES OFF"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["O comando utiliza por padr\xe3o o conjunto de caracteres UTF-8. Pode utilizar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"})," para modificar esse conjunto de caracteres."]}),"\n",(0,s.jsxs)(o.p,{children:["Durante a utiliza\xe7\xe3o de IMPORT TEXT, o delimitador de campos automaticamente \xe9 o caractere de tabula\xe7\xe3o (c\xf3digo 9). O delimitador do registro por padr\xe3o \xe9 o retorno de carro (c\xf3digo 13). Pode modificar estes valores atribuindo novos valores \xe0s ",(0,s.jsx)(o.em,{children:"Vari\xe1veis sistema"}),": ",(0,s.jsx)(o.em,{children:"FldDelimit"})," e ",(0,s.jsx)(o.em,{children:"RecDelimit"}),". O usu\xe1rio pode mudar estes valores na caixa de di\xe1logo de importa\xe7\xe3o do ambiente Desenho. Como os campos Texto podem conter retorno de carro, seja cuidadoso se utilizar o retorno de carro como delimitador se est\xe1 importando campos texto."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo a seguir importa dados de um documento texto. O m\xe9todo define em primeiro lugar o formul\xe1rio de entrada de modo a que os dados sejam importados ao formul\xe1rio correto, muda o delimitador de vari\xe1veis 4D, depois realiza a importa\xe7\xe3o:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Pessoas];"Importar")\n\xa0FldDelimit:=27\xa0// Definir caractere delimitador de campos: Escape\n\xa0RecDelimit:=10\xa0// Definir caractere delimitador de registros: Line Feed\n\xa0IMPORT TEXT([Pessoas];"Novas_Pessoas.txt")\xa0// Importa\xe7\xe3o do documento \u201CNovas_Pessoas.txt\u201D\n'})}),"\n",(0,s.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(o.p,{children:"OK toma o valor 1 se a importa\xe7\xe3o termina com sucesso; do contr\xe1rio, toma o valor 0."}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/export-text",children:"EXPORT TEXT"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/import-dif",children:"IMPORT DIF"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/import-sylk",children:"IMPORT SYLK"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"168"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var a=r(667294);let s={},t=a.createContext(s);function d(e){let o=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);