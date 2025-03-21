"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91509"],{301911:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-channel","title":"SET CHANNEL","description":"SET CHANNEL ( porta ; configura\xe7ao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-channel.md","sourceDirName":"commands-legacy","slug":"/commands/set-channel","permalink":"/docs/pt/commands/set-channel","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-channel.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-channel","title":"SET CHANNEL","slug":"/commands/set-channel","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND VARIABLE","permalink":"/docs/pt/commands/send-variable"},"next":{"title":"SET TIMEOUT","permalink":"/docs/pt/commands/set-timeout"}}'),d=s("785893"),o=s("250065");let a={id:"set-channel",title:"SET CHANNEL",slug:"/commands/set-channel",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Trabalho com portas seriais: SET CHANNEL (porta, configura\xe7\xf5es)",id:"trabalho-com-portas-seriais-set-channel-porta-configura\xe7\xf5es",level:2},{value:"Nota sobre as portas seriais",id:"nota-sobre-as-portas-seriais",level:3},{value:"Exemplo 1",id:"exemplo-1",level:3},{value:"Exemplo 2",id:"exemplo-2",level:3},{value:"Exemplo 3",id:"exemplo-3",level:3},{value:"Trabalhando com documentos em disco: SET CHANNEL (opera\xe7\xe3o; documento)",id:"trabalhando-com-documentos-em-disco-set-channel-opera\xe7\xe3o-documento",level:2},{value:"Exemplo 4",id:"exemplo-4",level:3},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"porta"})," ; ",(0,d.jsx)(n.em,{children:"configura\xe7ao"})," )\xa0",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.strong,{children:"SET CHANNEL"})," ( ",(0,d.jsx)(n.em,{children:"opera\xe7ao"})," ; ",(0,d.jsx)(n.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"porta"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero da porta serial"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"configura\xe7ao"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Configura\xe7\xe3o da porta serial"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SET CHANNEL ( opera\xe7ao ; documento )"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Par\xe2metro"}),(0,d.jsx)(n.td,{children:"Tipo"}),(0,d.jsx)(n.td,{children:"Descri\xe7\xe3o"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"opera\xe7ao"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Opera\xe7\xe3o de documento a ser realizada"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"documento"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome do documento"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(n.p,{children:"O comando SET CHANNEL abre uma porta serial ou um documento. Voc\xea pode abrir apenas uma porta serial ou um documento de uma vez com este comando. Para fechar uma porta serial aberta, passe SET CHANNEL (11)."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota hist\xf3rica:"})," Este comando era originalmente o primeiro comando 4D utilizado para trabalhar com portas seriais e documentos em disquetes. Desde aquela \xe9poca, novos comandos foram adicionados. Hoje, voc\xea normalmente ir\xe1 trabalhar com documentos no disco usando os comandos ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",title:"Open document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/create-document",title:"Create document",children:"Create document"})," e ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/append-document",title:"Append document",children:"Append document"}),". Com esses comandos, voc\xea pode ler e escrever caracteres para e de documentos usando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"})," ou ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"})," (estes comandos funcionam com SET CHANNEL, tamb\xe9m). No entanto, se voc\xea quiser usar os comandos ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," e ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),", voc\xea deve usar SET CHANNEL para acessar o documento no disco."]}),"\n",(0,d.jsx)(n.p,{children:"A descri\xe7\xe3o de SET CHANNEL \xe9 composta de duas se\xe7\xf5es:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Trabalhando com portas seriais"}),"\n",(0,d.jsx)(n.li,{children:"Trabalhando com documentos"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"trabalho-com-portas-seriais-set-channel-porta-configura\xe7\xf5es",children:"Trabalho com portas seriais: SET CHANNEL (porta, configura\xe7\xf5es)"}),"\n",(0,d.jsxs)(n.p,{children:["A primeira forma do comando SET CHANNEL abre uma porta serial, atribui o protocolo de cria\xe7\xe3o e informa\xe7\xe3o de outra porta. Os dados podem ser enviados com ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-record",title:"SEND RECORD",children:"SEND RECORD"})," ou ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-variable",title:"SEND VARIABLE",children:"SEND VARIABLE"})," e recebido com ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-buffer",title:"RECEIVE BUFFER",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"})," ou ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-variable",title:"RECEIVE VARIABLE",children:"RECEIVE VARIABLE"}),"."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["O primeiro par\xe2metro, ",(0,d.jsx)(n.em,{children:"porta"}),", seleciona a porta e o protocolo. Voc\xea pode dirigir at\xe9 99 portas seriais (uma de cada vez):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Valores porta"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descri\xe7\xe3o"})}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Porta impressora (Macintosh) ou COM2 (PC) sem protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Porta modem (Macintosh) ou COM1 (PC) sem protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"20"}),(0,d.jsx)(n.td,{children:"Porta impressora (Macintosh) ou COM2 (PC) com protocolo de sofware tal"}),(0,d.jsx)(n.td,{children:"como XON/XOFF"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"21"}),(0,d.jsx)(n.td,{children:"Porta modem (Macintosh) ou COM1 (PC) com protocolo de sofware tal como XON/XOFF"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"Porta impressora (Macintosh) ou COM2 (PC) com protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"31"}),(0,d.jsx)(n.td,{children:"Porta modem (Macintosh) ou COM1 (PC) com protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"101 a 199"}),(0,d.jsx)(n.td,{children:"Comunica\xe7\xe3o serial sem protocolo"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"201 a 299"}),(0,d.jsx)(n.td,{children:"Comunica\xe7\xe3o serial com protocolo de software tal como XON/XOFF"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"301 a 399"}),(0,d.jsx)(n.td,{children:"Comunica\xe7\xe3o serial com protocolo de hardware tal como RTS/CTS"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Importante:"})," O valor que voc\xea passa na ",(0,d.jsx)(n.em,{children:"porta"})," deve se referir a uma porta serial COM j\xe1 existente e reconhecida pelo sistema operacional. Por exemplo, a fim de ser capaz de usar os valores de 101, 103 e 125, as portas seriais COM1, COM3 e COM25 deve ter sido configuradas corretamente."]}),"\n",(0,d.jsx)(n.h3,{id:"nota-sobre-as-portas-seriais",children:"Nota sobre as portas seriais"}),"\n",(0,d.jsxs)(n.p,{children:["Uma configura\xe7\xe3o padr\xe3o do Mac OS e Windows suportam duas portas seriais: no Mac OS, a porta do modem e a porta de impressora, no Windows, as portas COM1 e COM2. No entanto, portas seriais adicionais podem ser adicionados atrav\xe9s da utiliza\xe7\xe3o de placas de extens\xe3o. Originalmente, 4D s\xf3 asignava duas portas seriais padr\xe3o e foi s\xf3 depois que o apoio de portas adicionais foi implementado. Por raz\xf5es de compatibilidade, os dois sistemas de endere\xe7amento foram mantidos.",(0,d.jsx)(n.br,{}),"\n- Se voc\xea quiser um endere\xe7o de porta serial padr\xe3o (printer/COM2 ou modem/COM1), voc\xea pode passar no par\xe2metro porta os seguintes valores 0, 1, 20, 21, 30 e 31 (que correspondem a velho m\xe9todo de endere\xe7amento), ou um valor maior que 100 (leia a explica\xe7\xe3o a seguir).",(0,d.jsx)(n.br,{}),"\n- Se voc\xea quer abordar portas seriais adicionais, voc\xea precisar\xe1 passar o valor de N+100 (onde N \xe9 o valor da porta com o endere\xe7o). Voc\xea tamb\xe9m pode considerar a adi\xe7\xe3o de 100 ou 200 ao valor acima mencionado (N+100), se voc\xea quer selecionar, respectivamente, um software ou um protocolo de hardware."]}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Se voc\xea quiser usar a porta printer/COM2 sem protocolo, voc\xea pode usar uma das seguintes sintaxes:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(0;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"ou"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(102;param)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"Se voc\xea quiser usar a porta modem/COM1 com o protocolo XON / XOFF, voc\xea pode usar uma das seguintes sintaxes:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(21;param)\n"})}),"\n",(0,d.jsx)(n.p,{children:"ou"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(201;param)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,d.jsx)(n.p,{children:"Se voc\xea quiser usar a porta COM 25 com o protocolo RTS / CTS, voc\xea precisa usar a seguinte sintaxe:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET CHANNEL(325;param)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u2022 As configura\xe7\xf5es de par\xe2metros definem a velocidade, o n\xfamero de bits de dados, n\xfamero de stop bits e a paridade. Voc\xea determina o valor das configura\xe7\xf5es adicionando a velocidade, bits de dados, bits de parada, e os valores de paridade, conforme listado na tabela a seguir. Por exemplo, para definir 1200 baud, 8 bits de dados, 1 bit de parada e sem paridade, voc\xea poderia adicionar 94 + 3072 + 16384 + 0 = 19550. Voc\xea usaria ent\xe3o 19.550 como o valor do par\xe2metro de ",(0,d.jsx)(n.em,{children:"configura\xe7ao"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:[(0,d.jsx)(n.strong,{children:"Valor a acumular"})," ",(0,d.jsx)(n.strong,{children:"em param"})]}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Descri\xe7\xe3o"})}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Velocidade"}),(0,d.jsx)(n.td,{children:"380"}),(0,d.jsx)(n.td,{children:"300"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"(em baud)"}),(0,d.jsx)(n.td,{children:"189"}),(0,d.jsx)(n.td,{children:"600"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"94"}),(0,d.jsx)(n.td,{children:"1200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"62"}),(0,d.jsx)(n.td,{children:"1800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"46"}),(0,d.jsx)(n.td,{children:"2400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"3600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"22"}),(0,d.jsx)(n.td,{children:"4800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"14"}),(0,d.jsx)(n.td,{children:"7200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"9600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"19200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"28800"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"38400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"57600"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1022"}),(0,d.jsx)(n.td,{children:"115200"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1021"}),(0,d.jsx)(n.td,{children:"230400"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bits de dados"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"2048"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"1024"}),(0,d.jsx)(n.td,{children:"7"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"3072"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bits de stop"}),(0,d.jsx)(n.td,{children:"16384"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u201332768"}),(0,d.jsx)(n.td,{children:"1.5"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"\u201316384"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Paridade"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Nenhuma"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"4096"}),(0,d.jsx)(n.td,{children:"\xcdmpar"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12288"}),(0,d.jsx)(n.td,{children:"Par"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Truque:"})," Os diferentes valores num\xe9ricos para serem acumulados e passados na ",(0,d.jsx)(n.em,{children:"porta"})," e ",(0,d.jsx)(n.em,{children:"configura\xe7ao"})," (mas n\xe3o incluindo os valores para COM1 ... COM99) est\xe3o dispon\xedveis como constantes predefinidas no tema das ",(0,d.jsx)(n.em,{children:"Comunica\xe7\xf5es"})," dentro do ambiente de desenho. Para COM1 ...COM99 , usar literais num\xe9ricos."]}),"\n",(0,d.jsx)(n.h2,{id:"trabalhando-com-documentos-em-disco-set-channel-opera\xe7\xe3o-documento",children:"Trabalhando com documentos em disco: SET CHANNEL (opera\xe7\xe3o; documento)"}),"\n",(0,d.jsxs)(n.p,{children:["A segunda forma do comando SET CHANNEL permite criar, abrir e fechar um documento. Ao contr\xe1rio dos comandos de documentos do sistema, ele pode abrir apenas um documento de cada vez. O documento pode ser lido ou escrito. Consulte a se\xe7\xe3o ",(0,d.jsx)(n.em,{children:"Documentos de Sistema"})," para maiores informa\xe7\xf5es a respeito."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro de ",(0,d.jsx)(n.em,{children:"opera\xe7ao"})," especifica a opera\xe7\xe3o a ser realizada sobre o documento especificado por ",(0,d.jsx)(n.em,{children:"documento"}),". A tabela a seguir lista os valores de funcionamento e \xe0 ",(0,d.jsx)(n.em,{children:"opera\xe7ao"})," resultante, com valores diferentes para o ",(0,d.jsx)(n.em,{children:"documento"}),". A primeira coluna apresenta os valores permitidos para a ",(0,d.jsx)(n.em,{children:"opera\xe7ao"}),". A segunda coluna relaciona os valores permitidos para o ",(0,d.jsx)(n.em,{children:"documento"}),". A terceira coluna lista o resultado da opera\xe7\xe3o."]}),"\n",(0,d.jsx)(n.p,{children:"Por exemplo, para exibir uma caixa de di\xe1logo Abrir arquivo para abrir um arquivo de texto, voc\xea usaria a seguinte linha:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(13;"")\n'})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Opera\xe7\xe3o"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Documento"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Resultado"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:"Cadeia"}),(0,d.jsx)(n.td,{children:"Abre o documento especificado pela String."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Se o documento n\xe3o existir, o documento \xe9 aberto e criado."}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"10"}),(0,d.jsx)(n.td,{children:'"" (cadena vac\xeda)'}),(0,d.jsx)(n.td,{children:"Exibe a caixa di\xe1logo Abrir Arquivo para abrir um arquivo."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Todos os tipos de arquivos s\xe3o exibidos."}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"11"}),(0,d.jsx)(n.td,{children:"nenhum"}),(0,d.jsx)(n.td,{children:"Fecha um arquivo aberto."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"12"}),(0,d.jsx)(n.td,{children:'"" (cadeia vazia)'}),(0,d.jsx)(n.td,{children:"Exibe a caixa de di\xe1logo Salvar arquivo para criar um novo arquivo."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"13"}),(0,d.jsx)(n.td,{children:'"" (cadeia vazia)'}),(0,d.jsx)(n.td,{children:"Exibe a caixa di\xe1logo Abrir Arquivo para abrir um arquivo. Apenas os tipos de arquivo de texto s\xe3o exibidos."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Todas as opera\xe7\xf5es nesta tabela atribui a vari\xe1vel de sistema de documentos, se necess\xe1rio. Eles tamb\xe9m definem a vari\xe1vel de sistema OK para 1 se a opera\xe7\xe3o foi bem sucedida. Caso contr\xe1rio, a vari\xe1vel de sistema OK \xe9 definido como 0."}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,d.jsxs)(n.p,{children:["Veja os exemplos para os comandos ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-buffer",title:"RECEIVE BUFFER",children:"RECEIVE BUFFER"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-timeout",title:"SET TIMEOUT",children:"SET TIMEOUT"})," e ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-record",title:"RECEIVE RECORD",children:"RECEIVE RECORD"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/append-document",children:"Append document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Comunica\xe7\xf5es"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/create-document",children:"Create document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-serial-port-mapping",children:"GET SERIAL PORT MAPPING"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/open-document",children:"Open document"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-packet",children:"RECEIVE PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-packet",children:"SEND PACKET"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/send-variable",children:"SEND VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-timeout",children:"SET TIMEOUT"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"77"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK, Document"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let d={},o=r.createContext(d);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);