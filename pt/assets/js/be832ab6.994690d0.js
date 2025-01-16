"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53275"],{91898:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>t,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/qr-report","title":"QR REPORT","description":"QR REPORT ( {tabela ;} documento {; nomeMetodo}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-report","permalink":"/docs/pt/commands/qr-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-report.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-report","title":"QR REPORT","slug":"/commands/qr-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR ON COMMAND","permalink":"/docs/pt/commands/qr-on-command"},"next":{"title":"QR REPORT TO BLOB","permalink":"/docs/pt/commands/qr-report-to-blob"}}'),a=r("785893"),s=r("250065");let d={id:"qr-report",title:"QR REPORT",slug:"/commands/qr-report",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"QR REPORT"})," ( {",(0,a.jsx)(o.em,{children:"tabela"})," ;} ",(0,a.jsx)(o.em,{children:"documento"})," {; ",(0,a.jsx)(o.em,{children:"nomeMetodo"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela a utilizar para o relat\xf3rio ou tabela por padr\xe3o se for omitido"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"documento"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Documento de Relat\xf3rio R\xe1pido a carregar"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"nomeMetodo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome do m\xe8todo a chamar"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Elimina\xe7\xe3o das caixas de di\xe1logo de impress\xe3o"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["QR REPORT imprime um relat\xf3rio para ",(0,a.jsx)(o.em,{children:"tabela"}),", criado com o editor de relat\xf3rios r\xe1pidos . O editor de relat\xf3rios r\xe1pidos permite aos usu\xe1rios criar seus pr\xf3prios relat\xf3rios. Para maior informa\xe7\xe3o sobre a cria\xe7\xe3o de relat\xf3rios r\xe1pidos com a ajuda do editor de relat\xf3rios r\xe1pidos, consulte ",(0,a.jsx)(o.em,{children:"Relat\xf3rios r\xe1pidos"})," ou ",(0,a.jsx)(o.em,{children:"Relat\xf3rios r\xe1pidos"})," no Manual de Desenho de 4D."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["O editor n\xe3o aparece se a ",(0,a.jsx)(o.em,{children:"tabela"})," tiver sido declarada \u201CInvis\xedvel.\u201D"]}),"\n",(0,a.jsxs)(o.li,{children:["Quando o editor se chama utilizando o comando QR REPORT, a op\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"Todas as rela\xe7\xf5es autom\xe1ticas"}),", que permite modificar o estado autom\xe1tico/manual das rela\xe7\xf5es \xe9 ocultada. Isso permite ao desenvolvedor administrar ele mesmo esse estado utilizando os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-field-relation",children:"SET FIELD RELATION"}),". Entretanto, lembre que as funcionalidades autom\xe1ticas s\xe3o desativadas quando as tabelas relacionadas s\xe3o visualizadas em um formul\xe1rio listado mostrado utilizando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"})," ou um subformul\xe1rio. Ver ",(0,a.jsx)(o.em,{children:"Rela\xe7\xf5es manuais e autom\xe1ticas"})]}),"\n",(0,a.jsxs)(o.li,{children:["O editor \xe9 chamado em uma janela externa e n\xe3o \xe9 poss\xedvel utilizar o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/qr-on-command",children:"QR ON COMMAND"})," neste contexto. No entanto, pode utilizar o par\xe2metro ",(0,a.jsx)(o.em,{children:"nomMetodo"})," para executar c\xf3digo personalizado quando um comando de interface se ativa (ver abaixo)."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"documento"}),' \xe9 um documento de relat\xf3rio que foi criado com o editor de relat\xf3rios r\xe1pidos e guardado em disco. O documento guarda as especifica\xe7\xf5es do relat\xf3rio, n\xe3o os registros a imprimir. Se uma cadeia vazia ("") se passa em ',(0,a.jsx)(o.em,{children:"documento"}),", QR REPORT mostra uma caixa de di\xe1logo de abertura de arquivos, na qual o usu\xe1rio pode selecionar o relat\xf3rio a imprimir."]}),"\n",(0,a.jsxs)(o.p,{children:['Se uma string vazia ("") for especificada para documento ',(0,a.jsx)(o.strong,{children:"QR REPORT"})," exibe uma caixa de di\xe1logo Abrir Arquivo e o usu\xe1rio pode selecionar o relat\xf3rio a imprimir"]}),"\n",(0,a.jsxs)(o.p,{children:["Se o par\xe2metro ",(0,a.jsx)(o.em,{children:"documento"})," especifica um documento que n\xe3o existe (por exemplo, se passa ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/char",children:"Char"}),(0,a.jsx)(o.strong,{children:"(1)"})," em ",(0,a.jsx)(o.em,{children:"documento"}),"), se mostra o editor de relat\xf3rios r\xe1pidos."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"methodName"})," atribui um m\xe9todo 4D project que ser\xe1 executado cada vez que o comando de gerenciamento de documento do editor Quick Report for chamado por um usu\xe1rio clicando no bot\xe3o. Usar este par\xe2metro \xe9 equivalente a usar ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/qr-on-command",children:"QR ON COMMAND"})," no contexto da janela editor de Quick Report (",(0,a.jsx)(o.a,{href:"/docs/pt/commands/qr-on-command",children:"QR ON COMMAND"})," s\xf3 que funciona dentro do contexto de uma \xe1rea inclu\xedda). Por exemplo pode usar este par\xe2metro para mudar o conjunto de caracteres usado pelo relat\xf3rio r\xe1pido. O m\xe9todo methodName r4ecebe dois par\xe2metros:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Parameter"}),(0,a.jsx)(o.th,{children:"Type"}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"$1"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"Refer\xeancia \xe1rea"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"$2"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsxs)(o.td,{children:["N\xfamero do comando selecionado. Para comparar com as constantes abaixo do tema ",(0,a.jsx)(o.em,{children:"QR Comandos"})," (apenas eventos listados s\xe3o compat\xedveis):                                    ",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Constante"}),(0,a.jsx)(o.td,{children:"Valor"}),(0,a.jsx)(o.td,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd generate"}),(0,a.jsx)(o.td,{children:"2008"}),(0,a.jsxs)(o.td,{children:["uso do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/qr-run",children:"QR RUN"})," recomendado"]})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd open"}),(0,a.jsx)(o.td,{children:"2001"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd page setup"}),(0,a.jsx)(o.td,{children:"2006"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd print preview"}),(0,a.jsx)(o.td,{children:"2007"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd save"}),(0,a.jsx)(o.td,{children:"2002"}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"qr cmd save as"}),(0,a.jsx)(o.td,{children:"2003"}),(0,a.jsx)(o.td,{})]})]})]})]})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"Nota: Se quiser compilar seu banco de dados, deve declarar os par\xe2metros $1 e $2 explicitamente como inteiros longos, mesmo se n\xe3o os usar."}),"\n",(0,a.jsxs)(o.p,{children:["Se quiser executar o comando inicial escolhido pelo usu\xe1rio, utilise a declara\xe7\xe3o abaixo no m\xe9todo ",(0,a.jsx)(o.em,{children:"nomeMetodo"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0QR EXECUTE COMMAND($1;$2)\n"})}),"\n",(0,a.jsx)(o.p,{children:'Se o par\xe2metro nomeMetodo for uma string vazia ("") ou se for omitido, nenhum m\xe9todo \xe9 chamado e a opera\xe7\xe3o normal de QR REPORT \xe9 aplicada.'}),"\n",(0,a.jsx)(o.p,{children:"Depois de um relat\xf3rio ter sido selecionado, as caixas de di\xe1logo para impress\xe3o s\xe3o exibidas, a n\xe3o ser que o par\xe2metro * for especificado. Se o par\xe2metro for especificado, estas caixas de di\xe1logo n\xe3o s\xe3o exibidas. O relat\xf3rio \xe9 ent\xe3o impresso."}),"\n",(0,a.jsx)(o.p,{children:"Se o editor de Relat\xf3rio R\xe1pido n\xe3o estiver envolvido, a vari\xe1vel OK \xe9 estabelecida para 1 se um relat\xf3rio for impresso, sen\xe3o \xe9 estabelecido para 0 (zerl) (ou seja, se o usu\xe1rio clicou Cancelar nas caixas de di\xe1logo de impress\xe3o)."}),"\n",(0,a.jsx)(o.p,{children:"4D Server: este comando pdoe ser executado em 4D Server sem o framework de um procedimento armazenado. Neste contexto:"}),"\n",(0,a.jsxs)(o.p,{children:["TEnha certeza que nenhuma caixa de di\xe1logo apare\xe7a na m\xe1quina servidor (exceto por um pedido espec\xedfico). Para fazer isso, \xe9 necess\xe1rio chamar o comando com o par\xe2metro *.",(0,a.jsx)(o.br,{}),"\nA sintaxe que faz com que o editor de Relat\xf3rio R\xe1pido apare\xe7a n\xe3o funciona com 4D Server; neste caso, a vari\xe1vel sistema OK \xe9 estabelecida como 0.",(0,a.jsx)(o.br,{}),"\nNo caso de um problema relativo \xe0 impress\xe3o (falta de papel, impressora desconectada, etc) nenhuma mensagem de erro \xe9 gerada."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.p,{children:"O exemplo a seguir permite ao usu\xe1rio realizar uma pesquisa na tabela [Pessoas], e depois imprime automaticamente o relat\xf3rio \u201CLista detalhada\u201D:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"Detailed Listing";*)\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:"O exemplo a seguir permite ao usu\xe1rio realizar uma pesquisa na tabela [Pessoas], e depos selecionar o relat\xf3rio a imprimir:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];"")\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(o.p,{children:"O exemplo a seguir permite ao usu\xe1rio realizar uma pesquisa na tabela [Pessoas], e depois mostra o editor de relat\xf3rios r\xe1pidos de maneira que o usu\xe1rio possa desenhar, salvar, carregar e imprimir relat\xf3rios com ou sem o assistente:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0QUERY([People])\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QR REPORT([People];Char(1))\n\xa0End if\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsxs)(o.p,{children:["Consulte o exemplo do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-field-relation",title:"SET FIELD RELATION",children:"SET FIELD RELATION"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea deseja converter o conjunto de caracteres utilizado em um relat\xf3rio r\xe1pido chamado utilizando ",(0,a.jsx)(o.strong,{children:"QR REPORT"})," em Mac Roman:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0QR REPORT([MyTable];Char(1);"myCallbackMeth")\n'})}),"\n",(0,a.jsx)(o.p,{children:"O m\xe9todo myCallbackMeth converte o relat\xf3rio quando \xe9 gerado:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var $1;$2 : Integer\n\xa0If($2=qr cmd generate)\xa0//Se geramos um relat\xf3rio\n\xa0\xa0\xa0\xa0var $myblob : Blob\n\xa0\xa0\xa0\xa0var $path;$text : Text\n\xa0\xa0\xa0\xa0var $type : Integer\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\xa0//execu\xe7\xe3o do comando\n\xa0\xa0\xa0\xa0QR GET DESTINATION($1;$type;$path)\xa0//recupera\xe7\xe3o do destino\n\xa0\xa0\xa0\xa0If(($type=qr HTML file)|($type=qr text file))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB($path;$myblob)&NBSP;\xa0//convers\xe3o do texto utilizando UTF-8\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$text:=Convert to text($myblob;"UTF-8")\n\xa0\xa0//uso do conjunto MacRoman\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONVERT FROM TEXT($text;"MacRoman";$myblob)\n\xa0\xa0//Reenvio do relat\xf3rio convertido\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT($path;$myblob)\n\xa0\xa0\xa0\xa0End if\n\xa0Else\xa0//caso contr\xe1rio, execu\xe7\xe3o do comando\n\xa0\xa0\xa0\xa0QR EXECUTE COMMAND($1;$2)\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-label",children:"PRINT LABEL"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"197"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var n=r(667294);let a={},s=n.createContext(a);function d(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);