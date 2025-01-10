"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39746"],{630785:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-print-option","title":"GET PRINT OPTION","description":"GET PRINT OPTION ( op\xe7\xe3o ; valor1 {; valor2} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-print-option.md","sourceDirName":"commands-legacy","slug":"/commands/get-print-option","permalink":"/docs/pt/commands/get-print-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-print-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-print-option","title":"GET PRINT OPTION","slug":"/commands/get-print-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get print marker","permalink":"/docs/pt/commands/get-print-marker"},"next":{"title":"Get print preview","permalink":"/docs/pt/commands/get-print-preview"}}'),r=n("785893"),i=n("250065");let a={id:"get-print-option",title:"GET PRINT OPTION",slug:"/commands/get-print-option",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"GET PRINT OPTION"})," ( ",(0,r.jsx)(o.em,{children:"op\xe7\xe3o"})," ; ",(0,r.jsx)(o.em,{children:"valor1"})," {; ",(0,r.jsx)(o.em,{children:"valor2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"op\xe7\xe3o"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"N\xfamero de op\xe7\xe3o ou c\xf3digo de op\xe7\xe3o PDF"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"valor1"}),(0,r.jsx)(o.td,{children:"Integer, Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Valor 1 da op\xe7\xe3o"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"valor2"}),(0,r.jsx)(o.td,{children:"Integer, Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Valor 2 da op\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"GET PRINT OPTION"})," devolve os valores atuais de uma op\xe7\xe3o de impress\xe3o."]}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro ",(0,r.jsx)(o.em,{children:"op\xe7\xe3o"})," lhe permite especificar a op\xe7\xe3o a obter. Pode obter uma op\xe7\xe3o padr\xe3o (inteiro longo), ou um c\xf3digo de op\xe7\xe3o PDF (string). O comando devolve, nos par\xe2metros ",(0,r.jsx)(o.em,{children:"valor1"})," e (opcionalmente) ",(0,r.jsx)(o.em,{children:"valor2"}),", o valor atual da ",(0,r.jsx)(o.em,{children:"op\xe7\xe3o"})," especificada."]}),"\n",(0,r.jsxs)(o.p,{children:["Para especificar uma op\xe7\xe3o de impres\xe3o padr\xe3o, pode utilizar uma das seguintes constantes predefinidas, que est\xe3o no tema \u201C",(0,r.jsx)(o.em,{children:"Op\xe7\xf5es de Impress\xe3o"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Constante"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Valor"}),(0,r.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Paper option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"1"}),(0,r.jsxs)(o.td,{children:["Se usar apenas ",(0,r.jsx)(o.em,{children:"valor1"}),", cont\xe9m o nome do papel. SE usar ambos par\xe2metros, ",(0,r.jsx)(o.em,{children:"value1"})," cont\xe9m a largura do papel e ",(0,r.jsx)(o.em,{children:"valor2"})," cont\xe9m a altura do papel. A largura e altura s\xe3o expressas em p\xedxels. Use o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/print-option-values",children:"PRINT OPTION VALUES"})," para obter o nome, altura e largura de todos os formatos de papel oferecidos pela impressora."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Orientation option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"2"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valor1"})," apenas: 1=Retrato, 2=Paisagem. Se uma op\xe7\xe3o de orienta\xe7\xe3o diferente for usada, ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/get-print-option",children:"GET PRINT OPTION"})," retorna 0 em ",(0,r.jsx)(o.em,{children:"valor1"}),".",(0,r.jsx)(o.br,{}),(0,r.jsx)(o.strong,{children:"Vers\xf5es 64-bit"}),": Esta op\xe7\xe3o pode ser chamada dentro de um trabalho de impress\xe3o, que significa que pode trocar de retrato a paisagem, ou vice versa, durante o mesmo trabalho de impress\xe3o."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Scale option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"3"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valor1"})," apenas: valor escalar em porcentagem. Tome cuidado, algumas impressoras n\xe3o permitem que essa escala seja modificada. Se passar um valor inv\xe1lido, a propriedade \xe9 resetada para 100% ao come\xe7ar a impress\xe3o."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Number of copies option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"4"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valor1"})," apenas: n\xfamero de c\xf3pias a imprimir."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Paper source option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"5"}),(0,r.jsxs)(o.td,{children:["(Windows apenas) ",(0,r.jsx)(o.em,{children:"valor1"})," unicamente: n\xfamero correspondente ao \xedndice, no array de bandejas devolvido pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/print-option-values",children:"PRINT OPTION VALUES"}),", da bandeja de papel a utilizar. Esta op\xe7\xe3o s\xf3 se pode utilizar em Windows.",(0,r.jsx)(o.br,{}),(0,r.jsx)(o.br,{})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Destination option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"9"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valo1"}),": c\xf3digo especificando o tipo de destino de impress\xe3o: 1=Printer, 2=(PC)/PS File (Mac), 3=PDF file, 5=Screen (op\xe7\xe3o OS X driver).",(0,r.jsx)(o.br,{}),"Se ",(0,r.jsx)(o.em,{children:"valor1"})," for diferente de 1 ou 5, ",(0,r.jsx)(o.em,{children:"valor2"})," cont\xe9m rota de caminho para o documento resultante. Esta rota ser\xe1 usada at\xe9 que outra rota seja especificada. Se um arquivo com o mesmo nome j\xe1 existir no local destino, ser\xe1 substitu\xeddo. Com ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/get-print-option",children:"GET PRINT OPTION"}),", se o valor atual n\xe3o estiver na lista pr\xe9-definida, ",(0,r.jsx)(o.em,{children:"valor1"})," cont\xe9m -1 e a vari\xe1vel de sistema OK \xe9 marcada como 1. Se um erro ocorrer, ",(0,r.jsx)(o.em,{children:"valor1"})," eda vari\xe1vel sistema OK \xe9 estabelecida como 0. ",(0,r.jsxs)(o.strong,{children:[(0,r.jsx)(o.br,{}),"Nota"]}),": Em Windows, pode estabelecer o destino de impress\xe3o para 3 (PDF File) quando o driver PDF Creator tiver sido instalado. Quando os valores ",(0,r.jsx)(o.em,{children:"(9;3;path)"}),' s\xe3o passados, 4D automaticamente inicia uma impress\xe3o PDF "silenciosa" que leva em considera\xe7\xe3o qualquer op\xe7\xe3o de c\xf3digo que s\xe3o passadas (note que se passar uma string vazia em ',(0,r.jsx)(o.em,{children:"valor2"})," ou omitir este par\xe2metro, um di\xe1logo de salvar arquivo aparece quando imprimir. Depois da impress\xe3o, as configura\xe7\xf5es atuais s\xe3o restauradas. Isso simplifica controle de impress\xe3o de PDF para 4D e permite que crie c\xf3digo multiplataforma. Quando os valores ",(0,r.jsx)(o.em,{children:"(9;3;path)"})," n\xe3o s\xe3o passados, impress\xe3o n\xe3o \xe9 controlada por 4D e qualquer c\xf3digo de op\xe7\xe3o PDF Creator que forem passados s\xe3o ignorados."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Double sided option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"11"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"value1"}),": 0=Single-sided or standard, 1=Double-sided. Se ",(0,r.jsx)(o.em,{children:"value1"}),"=1, ",(0,r.jsx)(o.em,{children:"value2"})," cont\xe9m a binding: 0=Left binding (padr\xe3o), 1=Top binding.",(0,r.jsx)(o.br,{}),(0,r.jsx)(o.strong,{children:"Nota:"})," Esta op\xe7\xe3o pode somente ser usada em Windows."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Spooler document name option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"12"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valor1"})," unicamente: nome do documento de impress\xe3o atual, que aparece na lista de documentos da fila de impress\xe3o. O nome definido para esta instru\xe7\xe3o ser\xe1 utilizada para todos os documentos de impress\xe3o da sess\xe3o at\xe9 que um novo nome ou uma string vazia n\xe3o seja passada. Para utilizar ou reestabelecer o funcionamento normal (usando o nome de m\xe9todo no caso de um m\xe9todo, o nome da tabela para um registro, etc.), passe uma string vazia em ",(0,r.jsx)(o.em,{children:"valor1"}),"."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Page range option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"15"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.em,{children:"valor1"}),"=primeira p\xe1gina a imprimir (valor padr\xe3o \xe9 1) e (opcional) ",(0,r.jsx)(o.em,{children:"valor2"}),"=n\xfamero da \xfaltima p\xe1gina a imprimir (valor padr\xe3o -1 = fim do documento)."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Legacy printing layer option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"16"}),(0,r.jsxs)(o.td,{children:["(4D vers\xf5es 64-bit em Windows apenas) ",(0,r.jsx)(o.em,{children:"value1"})," apenas: 1=seleciona a capa de impress\xe3o legado baseada em GDI para os trabalhos de impress\xe3o subsequente. 0=seleciona a capa de impress\xe3o D2D (padr\xe3o). ",(0,r.jsx)(o.br,{}),(0,r.jsx)(o.strong,{children:"Vers\xf5es 64-bit"})," Este seletor \xe9 suportado apenas em aplica\xe7\xf5es 4D 64-bit monousu\xe1rio em Windows; \xe9 ignorada em outras plataformas. Sua inten\xe7\xe3o \xe9 permitir a plugins legado que imprimam dentro de trabalhos 4D em aplica\xe7\xf5es4D 64-bit"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Print preview option"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"18"}),(0,r.jsxs)(o.td,{children:["(s\xf3lo Windows) ",(0,r.jsx)(o.em,{children:"valor1"}),": formato a utilizar para as vistas previas de impress\xe3o em Windows. Valores dispon\xedveis: kp preview automatic (por padr\xe3o): utiliza a impressora e o visor XPS se estiverem dispon\xedveis, em caso contr\xe1rio utiliza a impressora e o visor PDF se dispon\xedveis, caso contr\xe1rio gera um erro. kp preview XPS: utiliza a impressora e o visor XPS se dispon\xedveis, caso contr\xe1rio gera um erro. kp preview PDF: utiliza a impressora e o visor PDF se dispon\xedveis, do contr\xe1rio se gera um erro ",(0,r.jsx)(o.em,{children:"valor2"})," (s\xf3 pode ser utilizado com ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/get-print-option",children:"GET PRINT OPTION"}),"): formato de vista pr\xe9via de impress\xe3o utilizado realmente em Windows (pode diferir do ",(0,r.jsx)(o.em,{children:"valor1"})," dependendo da configura\xe7\xe3o). Valores dispon\xedveis: kp preview none: nenhum formato dispon\xedvel. kp preview XPS: impressora e visor XPS utilizados. kp preview PDF: impressora e visor PDF utilizados."]})]})]})]}),"\n",(0,r.jsxs)(o.p,{children:["Um c\xf3digo de op\xe7\xe3o PDF consta de duas partes, ",(0,r.jsx)(o.em,{children:"TipoOp\xe7\xe3o e"})," ",(0,r.jsx)(o.em,{children:"NomreOp\xe7\xe3o"}),', combinadas como "',(0,r.jsx)(o.em,{children:"TipoOp\xe7\xe3o:NomeOp\xe7\xe3o"}),'". Para maior informa\xe7\xe3o sobre c\xf3digos de op\xe7\xe3o PDF e valores poss\xedveis, consulte a descri\xe7\xe3o do comando ',(0,r.jsx)(o.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," o comando ",(0,r.jsx)(o.strong,{children:"GET PRINT OPTION"})," principalmente \xe9 compat\xedvel com impressoras PostScript. Pode utilizar este comando com outros tipos de impressoras, como PCL ou tinta, mas neste caso, \xe9 poss\xedvel que algumas op\xe7\xf5es n\xe3o estejam dispon\xedveis."]}),"\n",(0,r.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(o.p,{children:"A vari\xe1vel sistema OK toma o valor 1 se o comando tiver sido executado corretamente; do contr\xe1rio, toma o valor 0"}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/print-option-values",children:"PRINT OPTION VALUES"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})]}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"734"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var s=n(667294);let r={},i=s.createContext(r);function a(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);