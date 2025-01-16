"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7934"],{467071:function(e,a,s){s.r(a),s.d(a,{default:()=>m,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/relate-one","title":"RELATE ONE","description":"RELATE ONE ( tabelasN | campoN {; discriminante } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/relate-one.md","sourceDirName":"commands-legacy","slug":"/commands/relate-one","permalink":"/docs/pt/commands/relate-one","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-one.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"relate-one","title":"RELATE ONE","slug":"/commands/relate-one","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE MANY SELECTION","permalink":"/docs/pt/commands/relate-many-selection"},"next":{"title":"RELATE ONE SELECTION","permalink":"/docs/pt/commands/relate-one-selection"}}'),o=s("785893"),r=s("250065");let i={id:"relate-one",title:"RELATE ONE",slug:"/commands/relate-one",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"RELATE ONE"})," ( tabelasN | campoN {; ",(0,o.jsx)(a.em,{children:"discriminante"})," } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Par\xe2metro"}),(0,o.jsx)(a.th,{children:"Tipo"}),(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"tabelasN | campoN"}),(0,o.jsx)(a.td,{children:"Tabela, Campo"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Tabela para a qual estabelecer todas as rela\xe7\xf5es autom\xe1ticas, ou  Campo com as rela\xe7\xf5es manuais para tabela Um"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"discriminante"}),(0,o.jsx)(a.td,{children:"Field"}),(0,o.jsx)(a.td,{children:"\u2192"}),(0,o.jsx)(a.td,{children:"Campo discriminante da tabela 1"})]})]})]}),"\n",(0,o.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(a.p,{children:"RELATE ONE aceita duas sintaxes."}),"\n",(0,o.jsxs)(a.p,{children:["A primeira sintaxe do comando, RELATE ONE(tabelaN), ativa todas as rela\xe7\xf5es Muitos a Um autom\xe1ticas para a tabela ",(0,o.jsx)(a.em,{children:"tabelaN"})," no processo atual. Isso significa que para cada campo da tabela ",(0,o.jsx)(a.em,{children:"tabelaN"})," que tenha uma rela\xe7\xe3o Muitos a Um autom\xe1tica, o comando selecionar\xe1 o registro relacionado em cada tabela relacionada. Isso muda o registro atual na(s) tabela(s) relacionadas para o processo."]}),"\n",(0,o.jsxs)(a.p,{children:["A segunda sintaxe, RELATE ONE(campoN{;discriminante}), busca o registro relacionado com ",(0,o.jsx)(a.em,{children:"campoN"}),". N\xe3o \xe9 necess\xe1rio que a rela\xe7\xe3o seja autom\xe1tica. Se existir, RELATE ONE carrega em mem\xf3ria o registro relacionado, dolo o registro e a sele\xe7\xe3o atual da tabela."]}),"\n",(0,o.jsxs)(a.p,{children:["O par\xe2metro opcional ",(0,o.jsx)(a.em,{children:"discriminante"})," deve ser um campo da tabela relacionada. Pode ser unicamente de tipo Alfa, Texto, num\xe9rico, Data, Hora ou Booleano. Em particular, n\xe3o pode ser tipo Imagem ou BLOB."]}),"\n",(0,o.jsxs)(a.p,{children:["Se ",(0,o.jsx)(a.em,{children:"campoN"})," \xe9 especificado e se mais de um registro \xe9 encontrado na tabela relacionada, RELATE ONE mostra uma lista de registros que correspondem ao valor de ",(0,o.jsx)(a.em,{children:"campoN"}),", permitindo ao usu\xe1rio selecionar um registro. Nessa lista, a coluna da esquerda mostra os valores dos campos relacionados, e a coluna da direita os valores de ",(0,o.jsx)(a.em,{children:"discriminante"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Seria poss\xedvel encontrar mais de um registro se ",(0,o.jsx)(a.em,{children:"campoN"})," termina com o caractere arroba (@). Se s\xf3 houver uma coincid\xeancia, n\xe3o aparece a lista. Especificar um campo em ",(0,o.jsx)(a.em,{children:"discriminante"})," \xe9 o mesmo que definir um campo discriminante na caixa de di\xe1logo de defini\xe7\xe3o das propriedades de uma rela\xe7\xe3o no ambiente Desenho. Para maior informa\xe7\xe3o sobre a defini\xe7\xe3o de um campo discriminante, consulte o Manual de Desenho de 4D."]}),"\n",(0,o.jsx)(a.p,{children:"Na tela abaixo, um registro \xe9 digitado e uma lista de sele\xe7\xe3o \xe9 exibida."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(293606).Z+"",width:"917",height:"463"})}),"\n",(0,o.jsx)(a.p,{children:"O comando abaixo \xe9 usado para fazer a lista sele\xe7\xe3o aparecer:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0RELATE ONE([Personnel]Company;[Companies]Region)\n"})}),"\n",(0,o.jsx)(a.p,{children:"Um usu\xe1rio pode digitar LLC@ para ver uma lista de empresas cujos nomes come\xe7am com LLC, assim como suas regi\xf5es."}),"\n",(0,o.jsxs)(a.p,{children:["Especificar ",(0,o.jsx)(a.em,{children:"choiceField"})," \xe9 o mesmo que especificar uma escolha coringa quando estabele\xe7a uma rela\xe7\xe3o tabela. Para mais informa\xe7\xe3o sobre especificar uma escolha coringa, veja o manual de Design 4D."]}),"\n",(0,o.jsx)(a.h5,{id:""}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"Nota:"})," Este comando n\xe3o \xe9 compat\xedvel com campos tipo Objeto"]}),"\n",(0,o.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(a.p,{children:["No exemplo a seguir, a tabela ",(0,o.jsx)(a.em,{children:"[Faturas]"})," est\xe1 relacionada a tabela ",(0,o.jsx)(a.em,{children:"[Clientes]"})," por duas rela\xe7\xf5es manuais. Uma rela\xe7\xe3o parte do campo ",(0,o.jsx)(a.em,{children:"[Faturas]Cobrar de"})," ao campo ",(0,o.jsx)(a.em,{children:"[Clientes]ID"}),", e a outra rela\xe7\xe3o vai de ",(0,o.jsx)(a.em,{children:"[Faturas]Enviar"})," a [",(0,o.jsx)(a.em,{children:"Clientes]ID"}),". #note] \\\\srv-ftp-private.private.4d.fr\\FTP-PRIVATE\\International\\Filiales\\For_All\\4Dv15DatabasesForDoc[#/note]"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(461052).Z+"",width:"340",height:"211"})}),"\n",(0,o.jsx)(a.p,{children:'Aqui \xe9 o formul\xe1rio para a tabela [Faturas] exibindo a informa\xe7\xe3o "Bill to" e "Send to" :'}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:s(511233).Z+"",width:"595",height:"499"})}),"\n",(0,o.jsxs)(a.p,{children:["Como as duas rela\xe7\xf5es apontam a mesma tabela, ",(0,o.jsx)(a.em,{children:"[Clientes]"}),", n\xe3o \xe9 poss\xedvel obter a informa\xe7\xe3o de fatura\xe7\xe3o e envio ao mesmo tempo. Portanto, a informa\xe7\xe3o deve ser mostrada utilizando vari\xe1veis e chamadas a ",(0,o.jsx)(a.strong,{children:"RELATE ONE"}),". Se o formul\xe1rio contiver os campos ",(0,o.jsx)(a.em,{children:"[Clientes]"}),", s\xf3 se mostrar\xe3o os valores resultantes da segunda rela\xe7\xe3o."]}),"\n",(0,o.jsxs)(a.p,{children:["Os seguintes m\xe9todos s\xe3o os m\xe9todos de objeto dos campos ",(0,o.jsx)(a.em,{children:"[Faturas]Cobrar de"})," e ",(0,o.jsx)(a.em,{children:"[Faturas]Enviar a"}),". Estes m\xe9todos s\xe3o executados quando s\xe3o introduzidos campos."]}),"\n",(0,o.jsxs)(a.p,{children:["Este \xe9 o m\xe9todo de objeto para o campo ",(0,o.jsx)(a.em,{children:"[Faturas]Cobrar de:"})]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0RELATE ONE([Faturas]Cobrar de\n\xa0vDireccion1:=[Clientes]Dire\xe7\xe3o\n\xa0vCiudad1:=[Clientes]Cidade\n\xa0vEstado1:=[Clientes]Estado\n\xa0vCodigo1:=[Clientes]CodigoPostal\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Este \xe9 o m\xe9todo de objeto para o campo ",(0,o.jsx)(a.em,{children:"[Faturas]Enviar a:"})]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-4d",children:"\xa0RELATE ONE([Faturas]Enviar a)\n\xa0vDireccion2:=[Clientes]Dire\xe7\xe3o\n\xa0vCiudad2:=[Clientes]Cidade\n\xa0vEstado2:=[Clientes]Estado\n\xa0vCodigo2:=[Clientes]CodigoPostal\n"})}),"\n",(0,o.jsx)(a.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsxs)(a.p,{children:["Se o comando for executado corretamente e se os registros relacionados forem carregados, a vari\xe1vel sistema OK toma o valor 1. Se o usu\xe1rio clicar em ",(0,o.jsx)(a.strong,{children:"Cancelar"})," na caixa de di\xe1logo de selec\xe7\xe3o do registro (que aparece quando o registro relacionado tiver sido modificado), a vari\xe1vel ",(0,o.jsx)(a.em,{children:(0,o.jsx)(a.strong,{children:"OK"})})," toma o valor 0."]}),"\n",(0,o.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/docs/pt/commands/old-related-one",children:"OLD RELATED ONE"}),(0,o.jsx)(a.br,{}),"\n",(0,o.jsx)(a.a,{href:"/docs/pt/commands/relate-many",children:"RELATE MANY"})]}),"\n",(0,o.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"N\xfamero do comando"}),(0,o.jsx)(a.td,{children:"42"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Thread-seguro"}),(0,o.jsx)(a.td,{children:"\u2717"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(a.td,{children:"OK"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Modificar o registro atual"}),(0,o.jsx)(a.td,{})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,o.jsx)(a.td,{})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},293606:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict2287719.pt-c278a2177b4e02fcaa1c2f37efa0a8d7.png"},461052:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict2287721.pt-1fdc5888165d9d2ccd23beffb2d03619.png"},511233:function(e,a,s){s.d(a,{Z:function(){return n}});let n=s.p+"assets/images/pict2287723.pt-fa17c745fd9e42f8ab57ec5295dd5110.png"},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return i}});var n=s(667294);let o={},r=n.createContext(o);function i(e){let a=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);