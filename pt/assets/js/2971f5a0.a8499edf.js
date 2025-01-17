"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22401"],{715228:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>n,metadata:()=>i,assets:()=>c,toc:()=>t,contentTitle:()=>d});var i=JSON.parse('{"id":"FormObjects/listOverview","title":"Lista hier\xe1rquica","description":"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/FormObjects/list_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/listOverview","permalink":"/docs/pt/FormObjects/listOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Flist_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listOverview","title":"Lista hier\xe1rquica"},"sidebar":"docs","previous":{"title":"Entrada","permalink":"/docs/pt/FormObjects/inputOverview"},"next":{"title":"List Box","permalink":"/docs/pt/FormObjects/listboxOverview"}}'),r=s("785893"),a=s("250065");let n={id:"listOverview",title:"Lista hier\xe1rquica"},d=void 0,c={},t=[{value:"Fonte de dados de lista hier\xe1rquica",id:"fonte-de-dados-de-lista-hier\xe1rquica",level:2},{value:"RefList e nome de objeto",id:"reflist-e-nome-de-objeto",level:2},{value:"Suporte da @",id:"suporte-da-",level:3},{value:"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas",id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas",level:2},{value:"Prioridade dos comandos de propriedade",id:"prioridade-dos-comandos-de-propriedade",level:2},{value:"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia",id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia",level:2},{value:"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)",id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref",level:3},{value:"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?",id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos",level:3},{value:"Elemento modific\xe1vel",id:"elemento-modific\xe1vel",level:2},{value:"Propriedades compat\xedveis",id:"propriedades-compat\xedveis",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"As listas hier\xe1rquicas s\xe3o objetos de formul\xe1rio que podem ser utilizados para apresentar dados como listas com um ou mais n\xedveis que podem ser expandidos ou recolhidos."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:s(578232).Z+"",width:"168",height:"162"})}),"\n",(0,r.jsx)(o.p,{children:"Quando apropriado, o \xedcone de expans\xe3o/colapso \xe9 automaticamente apresentado \xe0 esquerda do item. As listas hier\xe1rquicas suportam um n\xfamero ilimitado de subn\xedveis."}),"\n",(0,r.jsx)(o.h2,{id:"fonte-de-dados-de-lista-hier\xe1rquica",children:"Fonte de dados de lista hier\xe1rquica"}),"\n",(0,r.jsx)(o.p,{children:"O conte\xfado de um objeto formul\xe1rio lista hier\xe1rquica pode ser inicializado de uma das seguintes formas:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Associar uma ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesDataSource#choice-list",children:"lista de op\xe7\xf5es"})," existente ao objeto. A lista de op\xe7\xf5es deve ter sido definida no editor de listas no modo Desenho."]}),"\n",(0,r.jsxs)(o.li,{children:["Atribuir diretamente uma refer\xeancia de lista hier\xe1rquica \xe0 ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"vari\xe1vel ou express\xe3o"})," associada ao objeto formul\xe1rio."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Em ambos os casos, voc\xea gerencia uma lista hier\xe1rquica em tempo de execu\xe7\xe3o atrav\xe9s de sua refer\xeancia ",(0,r.jsx)(o.em,{children:"ListRef"}),", usando os comandos de ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html",children:"lista hier\xe1rquica"})," na linguagem 4D."]}),"\n",(0,r.jsx)(o.h2,{id:"reflist-e-nome-de-objeto",children:"RefList e nome de objeto"}),"\n",(0,r.jsxs)(o.p,{children:["Uma lista hier\xe1rquica \xe9 tanto um ",(0,r.jsx)(o.strong,{children:"objeto de linguagem"})," existente na mem\xf3ria quanto um ",(0,r.jsx)(o.strong,{children:"objeto de formul\xe1rio"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["O ",(0,r.jsx)(o.strong,{children:"objeto de linguagem"})," \xe9 referenciado por um ID interno \xfanico do tipo Longint, designado por ",(0,r.jsx)(o.em,{children:"ListRef"})," na manual da Linguagem 4D. Este ID \xe9 devolvido pelos comandos que podem ser utilizados para criar listas: ",(0,r.jsx)(o.code,{children:"New list"}),", ",(0,r.jsx)(o.code,{children:"Copy list"}),", ",(0,r.jsx)(o.code,{children:"Load list"}),", ",(0,r.jsx)(o.code,{children:"BLOB to list"}),". Existe apenas uma inst\xe2ncia do objeto l\xedngua na mem\xf3ria e qualquer modifica\xe7\xe3o efetuada neste objeto \xe9 imediatamente transferida para todos os locais onde \xe9 utilizado."]}),"\n",(0,r.jsxs)(o.p,{children:["O ",(0,r.jsx)(o.strong,{children:"objeto de formul\xe1rio"}),' n\xe3o \xe9 necessariamente \xfanico: podem existir v\xe1rias representa\xe7\xf5es da mesma lista hier\xe1rquica na mesma forma ou em formas diferentes. Tal como acontece com outros objetos de formul\xe1rio, especifica-se o objeto na linguagem utilizando a sintaxe (*; "ListName", etc.).']}),"\n",(0,r.jsxs)(o.p,{children:['Voc\xea conecta o "objeto de linguagem" lista hier\xe1rquica com o "objeto de formul\xe1rio" lista hier\xe1rquica pelo intermedi\xe1rio da vari\xe1vel que cont\xe9m o valor ListRef. Por exemplo, se voc\xea tiver associado a ',(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," mylist ao objeto de formul\xe1rio, voc\xea pode escrever:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"$mylist:=New list\n"})}),"\n",(0,r.jsx)(o.p,{children:"Cada representa\xe7\xe3o da lista tem suas pr\xf3prias caracter\xedsticas espec\xedficas e compartilha caracter\xedsticas comuns com todas as outras representa\xe7\xf5es. As caracter\xedsticas a seguir s\xe3o espec\xedficas de cada representa\xe7\xe3o da lista:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"A selec\xe7\xe3o,"}),"\n",(0,r.jsx)(o.li,{children:"O estado expandido/recolhido dos seus itens,"}),"\n",(0,r.jsx)(o.li,{children:"A posi\xe7\xe3o do cursor de rolagem."}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["As outras caracter\xedsticas (fonte, tamanho da fonte, estilo, controle de entrada, cor, conte\xfado da lista, \xedcones, etc.) s\xe3o comuns a todas as representa\xe7\xf5es e n\xe3o podem ser modificados separadamente.\nConsequentemente, quando voc\xea usa comandos com base na configura\xe7\xe3o expandida/colapsada ou no item atual, por exemplo, ",(0,r.jsx)(o.code,{children:"Count list items"})," (quando o par\xe2metro final ",(0,r.jsx)(o.code,{children:"*"})," n\xe3o \xe9 passado), \xe9 importante poder especificar a representa\xe7\xe3o a ser usada sem nenhuma ambiguidade."]}),"\n",(0,r.jsxs)(o.p,{children:["Voc\xea deve usar o ID ",(0,r.jsx)(o.code,{children:"ListRef"}),' com comandos de linguagem quando quiser especificar a lista hier\xe1rquica encontrada na mem\xf3ria. Por outro lado, se voc\xea quiser especificar a representa\xe7\xe3o de um objeto lista hier\xe1rquica no n\xedvel do formul\xe1rio, dever\xe1 usar o nome do objeto (tipo string) no comando, por meio da sintaxe padr\xe3o (*; "ListName", etc.).']}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"No caso de comandos que definem propriedades, a sintaxe baseada no nome do objeto n\xe3o significa que somente o objeto de formul\xe1rio especificado ser\xe1 modificado pelo comando, mas sim que a a\xe7\xe3o do comando ser\xe1 baseada no estado desse objeto. As caracter\xedsticas comuns das listas hier\xe1rquicas s\xe3o sempre modificadas em todas as suas representa\xe7\xf5es.\nPor exemplo, se executa:"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'SET LIST ITEM FONT(*;"mylist1";*;thefont)\n'})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["... est\xe1 a indicar que pretende modificar o tipo de letra do item da lista hier\xe1rquica associado ao objeto de formul\xe1rio ",(0,r.jsx)(o.em,{children:"mylist1"}),". O comando considerar\xe1 o item atual do objeto ",(0,r.jsx)(o.em,{children:"mylist1"})," para especificar o item a ser modificado, mas essa modifica\xe7\xe3o ser\xe1 transferida para todas as representa\xe7\xf5es da lista em todos os processos."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"suporte-da-",children:"Suporte da @"}),"\n",(0,r.jsxs)(o.p,{children:['Assim como em outros comandos de gerenciamento de propriedades de objetos, \xe9 poss\xedvel usar o caractere "@" no par\xe2metro ',(0,r.jsx)(o.code,{children:"ListName"}),". Regra geral, esta sintaxe \xe9 utilizada para designar um conjunto de objetos no formul\xe1rio. No entanto, no contexto dos comandos de lista hier\xe1rquica, isso n\xe3o se aplica em todos os casos. Essa sintaxe tem dois efeitos diferentes, dependendo do comando:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'Para comandos que definem propriedades, essa sintaxe designa todos os objetos cujo nome corresponde (comportamento padr\xe3o). Por exemplo, o par\xe2metro "LH@" designa todos os objetos do tipo lista hier\xe1rquica cujo nome come\xe7a com "LH."'}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"DELETE FROM LIST"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"INSERT IN LIST"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SELECT LIST ITEMS BY POSITION"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SET LIST ITEM"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SET LIST ITEM FONT"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SET LIST ITEM ICON"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SET LIST ITEM PARAMETER"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"SET LIST ITEM PROPERTIES"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Para comandos que recuperam propriedades, essa sintaxe designa o primeiro objeto cujo nome corresponde:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"Count list items"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"Find in list"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"GET LIST ITEM"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"Get list item font"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"GET LIST ITEM ICON"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"GET LIST ITEM PARAMETER"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"GET LIST ITEM PROPERTIES"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"List item parent"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"List item position"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"Selected list items"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"comandos-gen\xe9ricos-utiliz\xe1veis-com-listas-hier\xe1rquicas",children:"Comandos gen\xe9ricos utiliz\xe1veis com listas hier\xe1rquicas"}),"\n",(0,r.jsx)(o.p,{children:"\xc9 poss\xedvel modificar a apar\xeancia de uma lista hier\xe1rquica de objetos usando v\xe1rios comandos 4D gen\xe9ricos. Voc\xea pode passar para esses comandos o nome do objeto da lista hier\xe1rquica (usando o par\xe2metro *) ou o nome da vari\xe1vel (contendo o valor ListRef):"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET FONT"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET FONT STYLE"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET FONT SIZE"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET COLOR"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET FILTER"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET ENTERABLE"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET SCROLLBAR"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET SCROLL POSITION"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.code,{children:"OBJECT SET RGB COLORS"})}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Lembrete: exceto ",(0,r.jsx)(o.code,{children:"OBJECT SET SCROLL POSI\xc7\xc3O"}),", esses comandos modificam todas as representa\xe7\xf5es da mesma lista, mesmo que voc\xea especifique apenas uma lista usando seu nome de objeto."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"prioridade-dos-comandos-de-propriedade",children:"Prioridade dos comandos de propriedade"}),"\n",(0,r.jsxs)(o.p,{children:["Certas propriedades das listas hier\xe1rquicas (por exemplo, o atributo ",(0,r.jsx)(o.strong,{children:"Entr\xe1vel"}),' ou a cor) podem ser definidas de diferentes maneiras: nas propriedades do formul\xe1rio, por um comando do tema "Propriedades dos objetos" ou atrav\xe9s de um comando do tema "Listas hier\xe1rquicas". Quando todos esses tr\xeas meios s\xe3o usados para definir as propriedades da lista, a seguinte ordem de prioridade \xe9 aplicada:']}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:'Comandos do tema "Listas hier\xe1rquicas"'}),"\n",(0,r.jsx)(o.li,{children:"Comandos gen\xe9ricos de propriedades de objectos"}),"\n",(0,r.jsx)(o.li,{children:"Propriedade formul\xe1rio"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Esse princ\xedpio \xe9 aplicado independentemente da ordem em que os comandos s\xe3o chamados. Se uma propriedade de item for modificada individualmente atrav\xe9s de um comando de lista hier\xe1rquica, o comando de propriedade de objeto equivalente n\xe3o afetar esse item, mesmo que seja chamado posteriormente. Por exemplo, se a cor de um item for modificada pelo comando ",(0,r.jsx)(o.code,{children:"SET LIST ITEM PROPERTIES"}),", o comando ",(0,r.jsx)(o.code,{children:"OBJECT SET COLOR"})," n\xe3o influenciar\xe1 esse item."]}),"\n",(0,r.jsx)(o.h2,{id:"gerenciamento-dos-itens-por-posi\xe7\xe3o-ou-refer\xeancia",children:"Gerenciamento dos itens por posi\xe7\xe3o ou refer\xeancia"}),"\n",(0,r.jsx)(o.p,{children:"Normalmente, voc\xea pode trabalhar de duas maneiras com o conte\xfado das listas hier\xe1rquicas: por posi\xe7\xe3o ou por refer\xeancia."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Quando se trabalha por posi\xe7\xe3o, 4D se baseia na posi\xe7\xe3o em rela\xe7\xe3o aos itens da lista exibida na tela para identific\xe1-los. O resultado diferir\xe1 conforme o fato de determinados itens hier\xe1rquicos serem expandidos ou recolhidos. Observe que, no caso de v\xe1rias representa\xe7\xf5es, cada objeto de formul\xe1rio tem sua pr\xf3pria configura\xe7\xe3o de itens expandidos/colapsados."}),"\n",(0,r.jsxs)(o.li,{children:["Quando voc\xea trabalha por refer\xeancia, 4D se baseia no n\xfamero de identifica\xe7\xe3o ",(0,r.jsx)(o.em,{children:"itemRef"})," dos itens da lista. Assim, cada item pode ser especificado individualmente, independentemente de sua posi\xe7\xe3o ou de sua exibi\xe7\xe3o na lista hier\xe1rquica."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"utiliza\xe7\xe3o-de-n\xfameros-de-refer\xeancia-dos-items-itemref",children:"Utiliza\xe7\xe3o de n\xfameros de refer\xeancia dos items (itemRef)"}),"\n",(0,r.jsxs)(o.p,{children:["Cada item de uma lista hier\xe1rquica tem um n\xfamero de refer\xeancia (",(0,r.jsx)(o.em,{children:"itemRef"}),") do tipo Longint. Este valor \xe9 apenas destinado ao seu pr\xf3prio uso: 4D simplesmente o mant\xe9m."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Aviso: voc\xea pode usar qualquer tipo de valor Longint como n\xfamero de refer\xeancia, exceto 0. De fato, na maioria dos comandos desse tema, o valor 0 \xe9 usado para especificar o \xfaltimo item adicionado \xe0 lista."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Seguem-se algumas sugest\xf5es para a utiliza\xe7\xe3o de n\xfameros de refer\xeancia:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"N\xe3o \xe9 necess\xe1rio identificar cada item com um n\xfamero exclusivo (n\xedvel iniciante)."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Primeiro exemplo: voc\xea cria um sistema de guias programando, por exemplo, um cat\xe1logo de endere\xe7os. Como o sistema retorna o n\xfamero da guia selecionada, voc\xea provavelmente n\xe3o precisar\xe1 de mais informa\xe7\xf5es do que isso. Nesse caso, n\xe3o se preocupe com os n\xfameros de refer\xeancia do item: passe qualquer valor (exceto 0) no par\xe2metro ",(0,r.jsx)(o.em,{children:"itemRef"}),". Observe que, para um sistema de cat\xe1logo de endere\xe7os, voc\xea pode predefinir uma lista A, B, ..., Z no modo Desenho. Tamb\xe9m \xe9 poss\xedvel cri\xe1-lo por programa\xe7\xe3o, de modo a eliminar quaisquer letras para as quais n\xe3o haja registros."]}),"\n",(0,r.jsxs)(o.li,{children:["Segundo exemplo: ao trabalhar com um banco de dados, voc\xea constr\xf3i progressivamente uma lista de palavras-chave. Voc\xea pode salvar essa lista no final de cada sess\xe3o usando os comandos ",(0,r.jsx)(o.code,{children:"SAVE LIST"})," ou ",(0,r.jsx)(o.code,{children:"LIST TO BLOB"})," e recarreg\xe1-la no in\xedcio de cada nova sess\xe3o usando os comandos ",(0,r.jsx)(o.code,{children:"Load list"})," ou ",(0,r.jsx)(o.code,{children:"BLOB to list"}),". Voc\xea pode exibir essa lista em uma paleta flutuante; quando cada usu\xe1rio clica em uma palavra-chave da lista, o item escolhido \xe9 inserido na \xe1rea de entrada selecionada no processo em primeiro plano. O importante \xe9 que voc\xea processe apenas o item selecionado, pois o comando ",(0,r.jsx)(o.code,{children:"Selected list items"})," retorna a posi\xe7\xe3o do item que voc\xea deve processar. Ao usar esse valor de posi\xe7\xe3o, voc\xea obt\xe9m o t\xedtulo do item por meio do comando ",(0,r.jsx)(o.code,{children:"GET LIST ITEM"}),". Aqui, novamente, n\xe3o \xe9 necess\xe1rio identificar cada item individualmente; voc\xea pode passar qualquer valor (exceto 0) no par\xe2metro ",(0,r.jsx)(o.em,{children:"itemRef"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Voc\xea precisa identificar parcialmente os itens da lista (n\xedvel intermedi\xe1rio).",(0,r.jsx)(o.br,{}),"\nO n\xfamero de refer\xeancia do item \xe9 usado para armazenar informa\xe7\xf5es necess\xe1rias quando voc\xea precisar trabalhar com o item; esse ponto \xe9 detalhado no exemplo do comando ",(0,r.jsx)(o.code,{children:"APPEND TO LIST"}),". Neste exemplo, usamos os n\xfameros de refer\xeancia do item para armazenar os n\xfameros de registro. No entanto, devemos conseguir estabelecer uma distin\xe7\xe3o entre os itens que correspondem aos registros do [Departament] e aqueles que correspondem aos registros dos [Employees]."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Voc\xea precisa identificar todos os itens da lista individualmente (n\xedvel atacante).",(0,r.jsx)(o.br,{}),"\nVoc\xea programa um gerenciamento elaborado de listas hier\xe1rquicas em que \xe9 absolutamente necess\xe1rio poder identificar cada item individualmente em cada n\xedvel da lista. Uma forma simples de o fazer \xe9 manter um contador pessoal. Suponha que voc\xea crie uma lista ",(0,r.jsx)(o.em,{children:"hlList"})," usando o comando ",(0,r.jsx)(o.code,{children:"APPEND TO LIST"}),". En esta etapa, se inicializa un contador ",(0,r.jsx)(o.em,{children:"vhlCounter"})," en 1. Toda vez que voc\xea chamar ",(0,r.jsx)(o.code,{children:"APPEND TO LIST"})," ou ",(0,r.jsx)(o.code,{children:"INSERT IN LIST"}),", voc\xea incrementar\xe1 esse contador ",(0,r.jsx)(o.code,{children:"(vhlCounter:=vhlCounter+1)"})," e passar\xe1 o n\xfamero do contador como o n\xfamero de refer\xeancia do item. O truque consiste em nunca diminuir o contador quando voc\xea exclui itens - o contador s\xf3 pode aumentar. Dessa forma, voc\xea garante a exclusividade dos n\xfameros de refer\xeancia do item. Como esses n\xfameros s\xe3o do tipo Longint, \xe9 poss\xedvel adicionar ou inserir mais de dois bilh\xf5es de itens em uma lista que foi reinicializada... (no entanto, se estiver trabalhando com um n\xfamero t\xe3o grande de itens, isso geralmente significa que voc\xea deve usar uma tabela em vez de uma lista)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Se voc\xea usar operadores bit a bit, tamb\xe9m poder\xe1 usar n\xfameros de refer\xeancia de itens para armazenar informa\xe7\xf5es que podem ser colocadas em um Longint, ou seja, 2 inteiros, valores de 4 bytes ou, mais uma vez, 32 boolianos."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"quando-\xe9-que-s\xe3o-necess\xe1rios-n\xfameros-de-refer\xeancia-\xfanicos",children:"Quando \xe9 que s\xe3o necess\xe1rios n\xfameros de refer\xeancia \xfanicos?"}),"\n",(0,r.jsxs)(o.p,{children:["Geralmente, ao usar listas hier\xe1rquicas para fins de interface usu\xe1rio e ao lidar apenas com o item selecionado (aquele sendo clicado ou arrastado), n\xe3o ser\xe1 necess\xe1rio usar n\xfameros de refer\xeancia de item. Usando ",(0,r.jsx)(o.code,{children:"Selected list items"})," e ",(0,r.jsx)(o.code,{children:"GET LIST ITEM"}),", voc\xea tem tudo o que precisa para lidar com o item selecionado no momento. Al\xe9m disso, comandos como ",(0,r.jsx)(o.code,{children:"INSERT IN LIST"})," e ",(0,r.jsx)(o.code,{children:"DELETE FROM LIST"}),' permitem que voc\xea manipule a lista "relativamente" em rela\xe7\xe3o ao item selecionado.']}),"\n",(0,r.jsx)(o.p,{children:"Basicamente, voc\xea precisa lidar com n\xfameros de refer\xeancia de itens quando quiser acessar diretamente qualquer item da lista de forma program\xe1tica e n\xe3o necessariamente o item selecionado no momento na lista."}),"\n",(0,r.jsx)(o.h2,{id:"elemento-modific\xe1vel",children:"Elemento modific\xe1vel"}),"\n",(0,r.jsxs)(o.p,{children:["Pode controlar se os itens da lista hier\xe1rquica podem ser modificados pelo usu\xe1rio, utilizando o atalho ",(0,r.jsx)(o.strong,{children:"Alt+click"}),"(Windows) / ",(0,r.jsx)(o.strong,{children:"Option+click"})," (macOS), ou fazendo um clique longo no texto do item."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Independentemente da fonte de dados da lista hier\xe1rquica, voc\xea pode controlar todo o objeto com a propriedade ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Entr\xe1vel"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Al\xe9m disso, se voc\xea preencher a lista hier\xe1rquica usando uma lista criada no editor de Listas, poder\xe1 controlar se um item em uma lista hier\xe1rquica \xe9 modific\xe1vel usando a op\xe7\xe3o ",(0,r.jsx)(o.strong,{children:"Elemento modific\xe1vel"})," no editor de Listas. Para obter mais informa\xe7\xf5es, consulte ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html",children:"Definir as propriedades das listas"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades-compat\xedveis",children:"Propriedades compat\xedveis"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesEntry#focusable",children:"Focusable"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#font",children:"Font"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAction#multi-selectable",children:"Multi-selectable"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,r.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},578232:function(e,o,s){s.d(o,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return n}});var i=s(667294);let r={},a=i.createContext(r);function n(e){let o=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(a.Provider,{value:o},e.children)}}}]);