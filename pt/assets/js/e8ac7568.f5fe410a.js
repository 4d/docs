"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76338],{93254:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=a(474848),n=a(28453);const r={id:"web-service-set-option",title:"WEB SERVICE SET OPTION",slug:"/commands/web-service-set-option",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/web-service-set-option",title:"WEB SERVICE SET OPTION",description:"WEB SERVICE SET OPTION ( op\xe7ao ; valor )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-service-set-option.md",sourceDirName:"commands-legacy",slug:"/commands/web-service-set-option",permalink:"/docs/pt/commands/web-service-set-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"web-service-set-option",title:"WEB SERVICE SET OPTION",slug:"/commands/web-service-set-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WEB SERVICE GET RESULT",permalink:"/docs/pt/commands/web-service-get-result"},next:{title:"WEB SERVICE SET PARAMETER",permalink:"/docs/pt/commands/web-service-set-parameter"}},t={},c=[{value:"Nota preliminar",id:"nota-preliminar",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"WEB SERVICE SET OPTION"})," ( ",(0,s.jsx)(o.em,{children:"op\xe7ao"})," ; ",(0,s.jsx)(o.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"op\xe7ao"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"C\xf3digo da op\xe7\xe3o a estabelecer"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"valor"}),(0,s.jsx)(o.td,{children:"Integer, Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Valor da op\xe7\xe3o"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"nota-preliminar",children:"Nota preliminar"}),"\n",(0,s.jsx)(o.p,{children:"Este comando est\xe1 criado para os usu\xe1rios de servi\xe7os web. Seu uso \xe9 opcional."}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando WEB SERVICE SET OPTION permite definir diferentes op\xe7\xf5es que se utilizar\xe3o durante a pr\xf3xima peti\xe7\xe3o SOAP provocada pelo comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Pode chamar este comando tantas vezes quantas op\xe7\xf5es houver a definir."}),"\n",(0,s.jsxs)(o.p,{children:["No par\xe2metro ",(0,s.jsx)(o.em,{children:"op\xe7ao"}),", passe o n\xfamero da op\xe7\xe3o a definir e no par\xe2metro ",(0,s.jsx)(o.em,{children:"valor"}),", passe o novo valor da op\xe7\xe3o. Para estes par\xe2metros, pode utilizar uma das seguintes constantes predefinidas do tema ",(0,s.jsx)(o.em,{children:"Servi\xe7os Web (Cliente)"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Constante"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Valor"}),(0,s.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service display auth dialog"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"4"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o mostrar a caixa de di\xe1logo) ou 1 (mostrar a caixa de di\xe1logo)Esta op\xe7\xe3o administra a visualiza\xe7\xe3o da caixa de di\xe1logo de atualiza\xe7\xe3o enquanto o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"})," \xe9 executado. Por padr\xe3o, este comando nunca mostra a caixa de di\xe1logo, geralmente, para faz\xea-lo tem que usar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-authenticate",children:"WEB SERVICE AUTHENTICATE"}),". Contudo, se quiser que a caixa de di\xe1logo de autentica\xe7\xe3o apare\xe7a, a fim de que o usu\xe1rio possa introduzir seus identificadores, dever\xe1 usar a seguinte op\xe7\xe3o: passe 1 em valor a fim de mostrar a caixa de di\xe1logo, do contr\xe1rio passe 0. A caixa de di\xe1logo somente \xe9 mostrada se o servi\xe7o web precisa de autentica\xe7\xe3o."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service HTTP compression"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"6"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.em,{children:"valor"})," = Web Service Compression ",(0,s.jsx)(o.br,{})," Esta op\xe7\xe3o permite ativar um mecanismo interno de compress\xe3o das peti\xe7\xf5es SOAP com o fim de acelerar as mudan\xe7as entre aplica\xe7\xf5es 4D. Quando executa a instru\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),'(Web Service HTTP Compression; Web Service Compression) no cliente 4D do servi\xe7o web, os dados da pr\xf3xima peti\xe7\xe3o SOAP enviados pelo cliente ser\xe3o comprimidos utilizando um mecanismo padr\xe3o HTTP ("gzip" ou "deflate" em fun\xe7\xe3o do conte\xfado da peti\xe7\xe3o) antes de seu envio ao servidor SOAP 4D. O servidor descomprimir\xe1 e analisar\xe1 a peti\xe7\xe3o, depois responder\xe1 automaticamente utilizando o mesmo mecanismo. S\xf3 afeta a peti\xe7\xe3o que segue a chamada ao comando ',(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),". Portanto deve chamar este comando cada vez que queira utilizar a compress\xe3o. Por padr\xe3o, 4D n\xe3o comprime as peti\xe7\xf5es HTTP dos servi\xe7os web.",(0,s.jsx)(o.br,{}),(0,s.jsx)(o.strong,{children:"Nota:"})," Este mecanismo n\xe3o pode ser utilizado para as peti\xe7\xf5es enviadas a um servidor SOAP 4D de uma vers\xe3o anterior a 11.3. Para que possa otimizar mais este funcionamento, as op\xe7\xf5es adicionais configuram o limite e a taixa de compress\xe3o das peti\xe7\xf5es. Estas op\xe7\xf5es s\xe3o acess\xedveis via o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service HTTP timeout"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"1"}),(0,s.jsx)(o.td,{children:'valor = "timeout" da parte cliente expressado em segundos.O timeout da parte clientes \xe9 o per\xedodo de espera do cliente servi\xe7o web caso n\xe3o haja resposta do servidor. Ap\xf3s este per\xedodo, o cliente fecha a sess\xe3o e a peti\xe7\xe3o \xe9 perdida.Por padr\xe3o, o timeout \xe9 de 180 segundos. Pode ser modificado por raz\xf5es espec\xedficas (status da rede, especifica\xe7\xf5es do servi\xe7o web, etc.).'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service reset auth settings"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"5"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o apagar a informa\xe7\xe3o) ou 1 (apaga a informa\xe7\xe3o)Esta op\xe7\xe3o permite indicar ao 4D para memorizar a informa\xe7\xe3o de autentica\xe7\xe3o do usu\xe1rio (nome de usu\xe1rio, senha, m\xe9todo, etc.), para que possa ser utilizada mais tarde. Por Padr\xe3o, esta informa\xe7\xe3o \xe9 apagada ap\xf3s cada execu\xe7\xe3o do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),". Passe 0 em valor para salvar a informa\xe7\xe3o e 1 para exclu\xed-la. Note que quando passar 0, a informa\xe7\xe3o \xe9 conservada durante a sess\xe3o mas n\xe3o \xe9 armazenada."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service SOAP header"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"2"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.em,{children:"valor"})," = refer\xeancia do elemento XML raiz a ser inserido como cabe\xe7alho da peti\xe7\xe3o SOAP.Esta op\xe7\xe3o permite inserir um cabe\xe7alho na peti\xe7\xe3o SOAP gerada fazendo uso do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"}),". Por padr\xe3o, as peti\xe7\xf5es SOAP n\xe3o cont\xe9m um cabe\xe7alho espec\xedfico. Contudo, alguns servi\xe7os web requerem um cabe\xe7alho, por exemplo para a gest\xe3o dos par\xe2metros de identifica\xe7\xe3o."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Web Service SOAP version"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"3"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.em,{children:"valor"})," = Web Service SOAP_1_1 ou Web Service SOAP_1_2Esta op\xe7\xe3o permite especificar a vers\xe3o do protocolo SOAP usado na peti\xe7\xe3o. Passe a constante Web Service SOAP_1_1 para valor a fim de indicar a vers\xe3o 1.1 e a constante Web Service SOAP_1_2 para indicar a vers\xe3o 1.2."]})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["A ordem na qual as op\xe7\xf5es s\xe3o chamadas n\xe3o \xe9 importante. Se a mesma ",(0,s.jsx)(o.em,{children:"op\xe7ao"})," for estabelecida v\xe1rias vezes, somente o valor da \xfaltima chamada \xe9 levado em conta."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Insere um cabe\xe7alho personalizado na peti\xe7\xe3o SOAP:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// Cria\xe7\xe3o de uma refer\xeancia XML\n\xa0var vRootRef;vElemRef : Text\n\xa0vRootRef:=DOM Create XML Ref("RootElement")\n\xa0vxPath:="/RootElement/Elem1/Elem2/Elem3"\n\xa0vElemRef:=DOM Create XML element(vRootRef;vxPath)\n\xa0\xa0//Modifica\xe7\xe3o do cabe\xe7alho SOAP com a refer\xeancia\n\xa0WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Utiliza\xe7\xe3o da vers\xe3o 1.2 do protocolo SOAP:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)\n"})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/web-service-call",children:"WEB SERVICE CALL"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>d});var s=a(296540);const n={},r=s.createContext(n);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);