"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82599"],{419421:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"commands-legacy/web-service-call","title":"WEB SERVICE CALL","description":"WEB SERVICE CALL ( urlAcesso ; soapAction ; nomeMetodo ; nomeEspa\xe7o {; tipoComplexo {; *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-call.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-call","permalink":"/docs/pt/commands/web-service-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-call.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-call","title":"WEB SERVICE CALL","slug":"/commands/web-service-call","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE AUTHENTICATE","permalink":"/docs/pt/commands/web-service-authenticate"},"next":{"title":"WEB SERVICE Get info","permalink":"/docs/pt/commands/web-service-get-info"}}'),a=s("785893"),r=s("250065");let d={id:"web-service-call",title:"WEB SERVICE CALL",slug:"/commands/web-service-call",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"modo RPC, entrada e sa\xedda simples",id:"modo-rpc-entrada-e-sa\xedda-simples",level:5},{value:"modo RPC, entrada complexa e sa\xedda simples",id:"modo-rpc-entrada-complexa-e-sa\xedda-simples",level:5},{value:"modo RPC, entrada simples e sa\xedda complexa",id:"modo-rpc-entrada-simples-e-sa\xedda-complexa",level:5},{value:"modo RPC, entrada e sa\xedda complexas",id:"modo-rpc-entrada-e-sa\xedda-complexas",level:5},{value:"modo DOC",id:"modo-doc",level:5},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"WEB SERVICE CALL"})," ( ",(0,a.jsx)(o.em,{children:"urlAcesso"})," ; ",(0,a.jsx)(o.em,{children:"soapAction"})," ; ",(0,a.jsx)(o.em,{children:"nomeMetodo"})," ; ",(0,a.jsx)(o.em,{children:"nomeEspa\xe7o"})," {; ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"urlAcesso"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Acesso URL ao Webservice"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"soapAction"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Conte\xfados do campo SOAPAction"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"nomeMetodo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome do m\xe9todo"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"nomeEspa\xe7o"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"nomeespa\xe7o XML"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tipoComplexo"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Configura\xe7\xe3o de tipos complexos (tipos simples se omitido)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"N\xe3o fechar a conex\xe3o"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"WEB SERVICE CALL"})," se utiliza para chamar um servi\xe7o web enviando uma peti\xe7\xe3o HTTP. Esta peti\xe7\xe3o cont\xe9m a mensagem SOAP criada previamente utilizando o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," ."]}),"\n",(0,a.jsxs)(o.p,{children:["Toda chamada posterior ao comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," provocar\xe1 a cria\xe7\xe3o de uma nova peti\xe7\xe3o. A execu\xe7\xe3o de um comando WEB SERVICE CALL tamb\xe9m apaga todo resultado do servi\xe7o web chamado anteriormente e o substitui com os novos resultados."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"urlAcesso"}),", passe a URL completa que permite acessar ao servi\xe7o web (n\xe3o confunda esta URL com a do arquivo WSDL, que descreve o servi\xe7o web)."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Acesso em modo seguro (SSL)"})}),"\n",(0,a.jsx)(o.p,{children:"Se desejar utilizar um servi\xe7o web em modo seguro utilizando SSL, passe https:// na frente da URL ao inv\xe9s de http://. Esta configura\xe7\xe3o ativa automaticamente a conex\xe3o em modo seguro."}),"\n",(0,a.jsxs)(o.p,{children:["Note que este comando pode utilizar um certificado servidor (ver o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/http-set-certificates-folder",children:"HTTP SET CERTIFICATES FOLDER"}),'). Se este certificado n\xe3o \xe9 v\xe1lido (vencido ou revogado), a vari\xe1vel sistema OK toma o valor e se devolve o erro 901 "Certificado servidor inv\xe1lido". Pode interceptar este erro utilizando um m\xe9todo de gest\xe3o de erros instalado pelo comando ',(0,a.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"soapAction"}),", passe o conte\xfado do campo SOAPAction da peti\xe7\xe3o. Este campo cont\xe9m geralmente o valor \u201CServiceName#MethodName\u201D."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"nomMetodo"}),", passe o nome do m\xe9todo remoto (que pertence ao servi\xe7o Web) que deseja executar."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"nomEspa\xe7o"}),", passe o espa\xe7o do nome XML (namespace) utilizado para a peti\xe7\xe3o SOAP. Para maior informa\xe7\xe3o sobre os nomes de espa\xe7os XML, consulte o Manual de Desenho."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," especifica a configura\xe7\xe3o dos par\xe2metros web Service enviados ou recebidos (definidos utilizando os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),")."]}),"\n",(0,a.jsxs)(o.p,{children:["O valor do par\xe2metro ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," depende do modo de publica\xe7\xe3o do servi\xe7o web (DOC ou RPC, ver o Manual de Desenho) e seus pr\xf3prios par\xe2metros."]}),"\n",(0,a.jsxs)(o.p,{children:["Em ",(0,a.jsx)(o.em,{children:"tipoComplexo"}),", deve passar uma das seguintes constantes, que ficam no tema ",(0,a.jsx)(o.em,{children:"Servi\xe7os Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Constante"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Valor"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Web Service dynamic"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"0"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Web Service manual"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"3"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Web Service manual in"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"1"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Web Service manual out"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"2"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"Cada constante corresponde a uma \u201Cconfigura\xe7\xe3o\u201D. Una configura\xe7\xe3o representa uma combina\xe7\xe3o entre o modo de publica\xe7\xe3o (RPC/DOC) e os tipos de par\xe2metros (entrada/sa\xedda, simples ou complexos) implementado."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": lembre que a caracter\xedstica \u201Centrada\u201D ou \u201Csa\xedda\u201D dos par\xe2metros se avalia desde o ponto de vista do m\xe9todo proxy/servi\xe7o web:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"um par\xe2metro \u201Centrada\u201D \xe9 um valor passado ao m\xe9todo proxy e portanto ao servi\xe7o web,"}),"\n",(0,a.jsx)(o.li,{children:"um par\xe2metro \u201Csa\xedda\u201D \xe9 retornado pelo servi\xe7o web e portanto pelo m\xe9todo proxy (geralmente atrav\xe9s de $0)."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"A seguinte tabela mostra todas as configura\xe7\xf5es poss\xedveis, assim como as constantes correspondentes:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:(0,a.jsx)(o.strong,{children:"Par\xe2metros entrada"})}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.strong,{children:"Par\xe2metros sa\xedda"})}),(0,a.jsx)(o.td,{children:(0,a.jsx)(o.strong,{children:"Simples"})}),(0,a.jsx)(o.td,{children:(0,a.jsx)(o.strong,{children:"Complexo"})})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:(0,a.jsx)(o.strong,{children:"Simples"})}),(0,a.jsx)(o.td,{children:"Web Service Dynamic"}),(0,a.jsx)(o.td,{children:"Web Service Manual In"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{children:"(modo RPC)"}),(0,a.jsx)(o.td,{children:"(modo RPC)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsxs)(o.td,{children:[(0,a.jsx)(o.strong,{children:"Complex"}),"o"]}),(0,a.jsx)(o.td,{children:"Web Service Manual Out"}),(0,a.jsx)(o.td,{children:"Web Service Manual"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"(modo RPC)"}),(0,a.jsx)(o.td,{children:"(modo RPC ou DOC)"}),(0,a.jsx)(o.td,{})]})]})]}),"\n",(0,a.jsx)(o.p,{children:"As cinco configura\xe7\xf5es descritas a continua\xe7\xe3o podem ser implementadas. Em todos os casos, 4D administrar\xe1 o formato da peti\xe7\xe3o SOAP a enviar ao servi\xe7o web al\xe9m de seu envelope. Voc\xea que decide o formato dos conte\xfados da peti\xe7\xe3o de acordo com a configura\xe7\xe3o utilizada."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": apesar do fato de que os tipos XML s\xe3o complexos, os arrays de dados s\xe3o tratados por 4D como tipos simples."]}),"\n",(0,a.jsx)(o.h5,{id:"modo-rpc-entrada-e-sa\xedda-simples",children:"modo RPC, entrada e sa\xedda simples"}),"\n",(0,a.jsxs)(o.p,{children:["Esta configura\xe7\xe3o \xe9 a mais f\xe1cil de utilizar. Neste caso, o par\xe2metro ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," cont\xe9m a constante Web Service Dynamic ou \xe9 omitido."]}),"\n",(0,a.jsx)(o.p,{children:"Os par\xe2metros enviados e as respostas recebidas podem ser manipulados diretamente, sem processamento pr\xe9vio."}),"\n",(0,a.jsxs)(o.p,{children:["Consulte o exemplo do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"})]}),"\n",(0,a.jsx)(o.h5,{id:"modo-rpc-entrada-complexa-e-sa\xedda-simples",children:"modo RPC, entrada complexa e sa\xedda simples"}),"\n",(0,a.jsxs)(o.p,{children:["Neste caso, o par\xe2metro ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," cont\xe9m a constante Web Service Manual In. Com esta configura\xe7\xe3o, deve passar \u201Cmanualmente\u201D ao servi\xe7o Web cada elemento XML fonte na forma de um BLOB, com a ajuda do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Depende de voc\xea formatar o BLOB inicial como um elemento XML v\xe1lido. Este BLOB deve conter como primeiro elemento o primeiro elemento \u201Cfilho\u201D do elemento  da peti\xe7\xe3o final."}),"\n",(0,a.jsx)(o.p,{children:"Exemplo"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var $1 : Blob\n\xa0var $0 : Boolean\n\xa0\n\xa0SET WEB SERVICE PARAMETER("MeuXMLBlob";$1)\n\xa0CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaActionSoap";"meuMetodo";\n\xa0"http://meu.nomespaco.com/";Web Service manual in)\n\xa0GET WEB SERVICE RESULT($0;"MinhaVarSaida";*)\n'})}),"\n",(0,a.jsx)(o.h5,{id:"modo-rpc-entrada-simples-e-sa\xedda-complexa",children:"modo RPC, entrada simples e sa\xedda complexa"}),"\n",(0,a.jsxs)(o.p,{children:["Neste caso, o par\xe2metro t",(0,a.jsx)(o.em,{children:"ipoComplexo"})," cont\xe9m a constante Web Service Manual Out. Cada par\xe2metro de sa\xedda ser\xe1 retornado pelo servi\xe7o Web na forma do elemento XML armazenado em um BLOB. Recupera este par\xe2metro utilizando o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),".Depois pode analizar o conte\xfado do BLOB recebido utilizando os comandos XML de 4D."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Exemplo"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Boolean\n\xa0\n\xa0SET WEB SERVICE PARAMETER("MinhaVarEntrada";$1)\n\xa0CALL WEB SERVICE("http://meu.dominio.com/meu_servi\xe7o";"MinhaAcaoSoap";"meuMetodo";\n\xa0"http://meu.nomespaco.com/";Web Service manual out)\n\xa0GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)\n'})}),"\n",(0,a.jsx)(o.h5,{id:"modo-rpc-entrada-e-sa\xedda-complexas",children:"modo RPC, entrada e sa\xedda complexas"}),"\n",(0,a.jsxs)(o.p,{children:["Neste caso, o par\xe2metro ",(0,a.jsx)(o.em,{children:"tipoComplexo"})," cont\xe9m as constantes Web Service Manual. Cada par\xe2metro de entrada e de sa\xedda deve ser armazenado na forma dos elementos XML nos BLOBs, como foi descrito nas duas configura\xe7\xf5es anteriores."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:(0,a.jsx)(o.strong,{children:"Exemplo"})}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0SET WEB SERVICE PARAMETER("MeuBlobXMLEntrada";$1)\n\xa0CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaAccionSoap";"meuMetodo";\n\xa0"http://meu.nomespaco.com/";Web Service manual)\n\xa0GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)\n'})}),"\n",(0,a.jsx)(o.h5,{id:"modo-doc",children:"modo DOC"}),"\n",(0,a.jsx)(o.p,{children:"Um m\xe9todo proxy de chamada de um servi\xe7o web DOC \xe9 similar a um m\xe9todo proxy de chamada de um servi\xe7o web RPC utilizando os par\xe2metros de entrada e de sa\xedda complexos"}),"\n",(0,a.jsx)(o.p,{children:"A \xfanica diferen\xe7a entre estas duas configura\xe7\xf5es \xe9 o nivel do conte\xfado XML dos par\xe2metros BLOB passados e recebidos. Desde o ponto de vista de 4D, a constru\xe7\xe3o e o envio da peti\xe7\xe3o SOAP s\xe3o id\xeanticos."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Exemplo"}),"\n"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Blob\n\xa0var $1 : Blob\n\xa0\n\xa0SET WEB SERVICE PARAMETER("MeuXMLEntrada";$1)\n\xa0CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaActionSoap";"meuMetodo";\n\xa0"http://meu.nomespaco.com/";Web Service manual)\n\xa0GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),': no caso dos servi\xe7os web DOC, o valor das strings (\u201CMeuXMLEntrada\u201D e \u201CMeuXMLSa\xedda\u201D) passadas como par\xe2metros n\xe3o importa, \xe9 poss\xedvel inclusive passar strings vazias"". De fato, estes valores n\xe3o s\xe3o utilizados na peti\xe7\xe3o SOAP contida no documento XML. \xc9 obrigat\xf3rio passar estes par\xe2metros.']}),"\n",(0,a.jsx)(o.p,{children:"Para utilizar um servi\xe7o web publicado em modo DOC (ou em modo RPC com tipos complexos), \xe9 recomend\xe1vel proceder desta forma:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Gerar o m\xe9todo proxy utilizando o Assistente Client Web Services.\nO m\xe9todo proxy ser\xe1 chamado dessa forma: ",(0,a.jsx)(o.em,{children:"$XMLresultadoBlob:=$DOCproxy_Metodo($XMLparamBlob)"})]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["\u2022 \xc9 bom se acostumar com os conte\xfados das peti\xe7\xf5es SOAP a enviar ao serv\xe7o web utilizando uma ferramenta de teste online (por exemplo, ",(0,a.jsx)(o.em,{children:(0,a.jsx)(o.a,{href:"http://soapclient.com/soaptest.html",children:"http://soapclient.com/soaptest.html"})}),"). Este tipo de ferramenta \xe9 utiliza para gerar os formul\xe1rios de teste HTML, a partir do WSDL do servi\xe7o web."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Copie o conte\xfado XML gerado a partir do primeiro filho de ."}),"\n",(0,a.jsxs)(o.li,{children:["Escreva o m\xe9todo permitindo localizar os valores reais dos par\xe2metros no c\xf3digo XML; este c\xf3digo deve estar localizado no BLOB ",(0,a.jsx)(o.em,{children:"$XMLparamBlob"}),"."]}),"\n",(0,a.jsx)(o.li,{children:"Para analizar a resposta, pode igualmente utilizar uma ferramenta de teste online, ou utilizar o WSDL que especifica os elementos retornados."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"O par\xe2metro * pode ser utilizado para otimizar chamadas. Quando for passado, o comando n\xe3o fecha a conex\xe3o utilizada pelo processo ao final de sua execu\xe7\xe3o. Neste caso, a pr\xf3xima chamada a WEB SERVICE CALL reutilizar\xe1 a mesma conex\xe3o se for passa o par\xe2metro *, etc. Para fechar a conex\xe3o, simplesmente execute o comando WEB SERVICE CALL sem o par\xe2metro *. Este mecanismo pode ser utilizado para acelerar bastante os processos em caso de chamadas sucessivas a v\xe1rios servi\xe7os web no mesmo servidor, especialmente em uma configura\xe7\xe3o WAN (via Internet, por exemplo). Note que este mecanismo depende do par\xe2metro \u201Ckeep-alive\u201D do servidor web. Este par\xe2metro geralmente define um n\xfamero m\xe1ximo de peti\xe7\xf5es atrav\xe9s da mesma conex\xe3o, e pode at\xe9 mesmo negar peti\xe7\xf5es. Se as peti\xe7\xf5es WEB SERVICE CALL seguirem uma atr\xe1s da outra na mesma conex\xe3o alcan\xe7arem este n\xfamero m\xe1ximo, ou se as conex\xf5es keep-alive n\xe3o forem permitidas, 4D criar\xe1 uma nova conex\xe3o para cada peti\xe7\xe3o."}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"Se a peti\xe7\xe3o for corretamente encaminhada, e o Web Service a aceitar, a vari\xe1vel sistema OK assume o valor 1. Do contr\xe1rio, assume o valor 0 e um erro \xe9 devolvido."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-get-result",children:"WEB SERVICE GET RESULT"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"})]}),"\n",(0,a.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"778"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2713"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return i},a:function(){return d}});var n=s(667294);let a={},r=n.createContext(a);function d(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);