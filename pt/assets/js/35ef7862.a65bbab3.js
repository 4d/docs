"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73353"],{572700:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"Admin/debugLogFiles","title":"Descri\xe7\xe3o de arquivos de hist\xf3rico","description":"Aplica\xe7\xf5es 4D podem gerar v\xe1rios arquivos de hist\xf3rico ou log \xfateis para depura\xe7\xe3o e otimizar sua execu\xe7\xe3o. Os logs s\xe3o geralmente iniciados ou parados usando seletores dos comandos SET DATABASE PARAMETER ou WEB SET OPTION sendo armazenados na pasta Logs do projeto.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Admin/debugLogFiles.md","sourceDirName":"Admin","slug":"/Admin/debugLogFiles","permalink":"/docs/pt/19/Admin/debugLogFiles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2FdebugLogFiles.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"debugLogFiles","title":"Descri\xe7\xe3o de arquivos de hist\xf3rico"},"sidebar":"docs","previous":{"title":"Interface de linha de comando","permalink":"/docs/pt/19/Admin/cli"},"next":{"title":"Vis\xe3o Geral","permalink":"/docs/pt/19/Users/overview"}}'),o=s("785893"),d=s("250065");let i={id:"debugLogFiles",title:"Descri\xe7\xe3o de arquivos de hist\xf3rico"},a=void 0,t={},c=[{value:"4DRequestsLog.txt",id:"4drequestslogtxt",level:2},{value:"Cabe\xe7alhos",id:"cabe\xe7alhos",level:4},{value:"Conte\xfados",id:"conte\xfados",level:4},{value:"4DRequestsLog_ProcessInfo.txt",id:"4drequestslog_processinfotxt",level:2},{value:"Cabe\xe7alhos",id:"cabe\xe7alhos-1",level:4},{value:"Conte\xfados",id:"conte\xfados-1",level:4},{value:"HTTPDebugLog.txt",id:"httpdebuglogtxt",level:2},{value:"4DDebugLog.txt (standard)",id:"4ddebuglogtxt-standard",level:2},{value:"4DDebugLog.txt (tabular)",id:"4ddebuglogtxt-tabular",level:2},{value:"4DDiagnosticLog.txt",id:"4ddiagnosticlogtxt",level:2},{value:"4DSMTPLog.txt, 4DPOP3Log.txt, e 4DIMAPLog.txt",id:"4dsmtplogtxt-4dpop3logtxt-e-4dimaplogtxt",level:2},{value:"Conte\xfados",id:"conte\xfados-2",level:4},{value:"Peti\xe7\xf5es cliente ORDA",id:"peti\xe7\xf5es-cliente-orda",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Aplica\xe7\xf5es 4D podem gerar v\xe1rios arquivos de hist\xf3rico ou log \xfateis para depura\xe7\xe3o e otimizar sua execu\xe7\xe3o. Os logs s\xe3o geralmente iniciados ou parados usando seletores dos comandos ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"})," ou ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1210.html",children:"WEB SET OPTION"})," sendo armazenados na pasta ",(0,o.jsx)(n.a,{href:"/docs/pt/19/Project/architecture#logs-folder",children:"Logs"})," do projeto."]}),"\n",(0,o.jsx)(n.p,{children:"Informa\xe7\xe3o gravada precisa ser analisada para detectar e corrigir os problemas. Esta se\xe7\xe3o oferece uma descri\xe7\xe3o detalhada dos arquivos de log abaixo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4drequestslogtxt",children:"4DRequestsLog.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"l#4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#httpdebuglogtxt",children:"HTTPDebugLog.txt"})}),"\n",(0,o.jsxs)(n.li,{children:["4DDebugLog.txt (",(0,o.jsx)(n.a,{href:"#4ddebuglogtxt-standard",children:"padr\xe3o"})," & ",(0,o.jsx)(n.a,{href:"#4ddebuglogtxt-tabular",children:"tabular"}),")"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4ddiagnosticlogtxt",children:"4DDiagnosticLog.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DIMAPLog.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DPOP3Log.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt",children:"4DSMTPLog.txt"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#orda-client-requests",children:"Peti\xe7\xf5es de arquivo de log por cliente ORDA"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Nota: quando um arquivo de hist\xf3rico for gerado seja em 4D Server ou em cliente remoto, a palavra "Server" \xe9 adicionada ao nome do arquivo do lado servidor, por exemplo, "4DRequestsLogServer.txt"'}),"\n",(0,o.jsx)(n.p,{children:"Arquivos de Hist\xf3rico compartilham alguns campos para que possa estabelecer uma cronologia e fazer conex\xf5es entre entradas quando depurar:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sequence_number"}),": esse n\xfamero \xe9 unico entre todos os arquivos de hist\xf3rico e \xe9 aumentado a cada nova entrada qualquer que seja o arquivo de log, para que possa saber a sequ\xeancia exata das opera\xe7\xf5es."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"connection_uuid"}),": para qualquer processo 4D criado em um cliente 4D que conecte a u m servidor, essa conex\xe3o UUID \xe9 registrada tanto no servior quanto no lado do cliente. Permite que facilmente identifique o cliente remoto que lan\xe7a cada processo."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"4drequestslogtxt",children:"4DRequestsLog.txt"}),"\n",(0,o.jsx)(n.p,{children:"Esses arquivos de hist\xf3rico gravam peti\xe7\xf5es normais realizadas pela m\xe1quina 4D Server ou a m\xe1quina remota 4D que executaram o comando (excluindo peti\xe7\xf5es Web)."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"no servidor:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(4D Server log recording;1)\n//lado servidor\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"em um cliente:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Client Log Recording;1)\n//lado remoto\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Esta declara\xe7\xe3o tamb\xe9m come\xe7a o arquivo de hist\xf3rico ",(0,o.jsx)(n.a,{href:"#4drequestslogtxt",children:"4DRequestsLog.txt"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"cabe\xe7alhos",children:"Cabe\xe7alhos"}),"\n",(0,o.jsx)(n.p,{children:"Este arquivo come\xe7a com os cabe\xe7alhos abaixo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Identificador de sess\xe3o de hist\xf3rico"}),"\n",(0,o.jsx)(n.li,{children:"Hostname do servidor que hospeda a aplica\xe7\xe3o"}),"\n",(0,o.jsx)(n.li,{children:"Nome login Usu\xe1rio: login do SO do usu\xe1rio que roda a aplica\xe7\xe3o 4D no servidor."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"conte\xfados",children:"Conte\xfados"}),"\n",(0,o.jsx)(n.p,{children:"Para cada peti\xe7\xe3o, os campos abaixo est\xe3o logados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Campo nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sequence_number"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"time"}),(0,o.jsx)(n.td,{children:"Data e hora usando formato ISO 8601: 'YYYY-MM-DDTHH:MM:SS.mmm'"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"systemid"}),(0,o.jsx)(n.td,{children:"ID de sistema"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"componente"}),(0,o.jsx)(n.td,{children:"Assinatura de componente (por exemplo '4SQLS' ou 'dbmg')"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"process_info_"}),(0,o.jsx)(n.td,{children:"Corresponde ao campo index no registro 4DRequestsLog_ProcessInfo.txt e permite vincular uma solicita\xe7\xe3o a um processo."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"request"}),(0,o.jsxs)(n.td,{children:["ID de peti\xe7\xe3o em C/S ou string de mensagem para peti\xe7\xf5es SQL ou mensagens ",(0,o.jsx)(n.code,{children:"LOG EVENT"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"bytes_in"}),(0,o.jsx)(n.td,{children:"N\xfamero de bytes recebidos"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"bytes_out"}),(0,o.jsx)(n.td,{children:"N\xfamero de bytes enviados"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"server_duration | exec_duration"}),(0,o.jsxs)(n.td,{children:["Depende de onde o hist\xf3rico for gerado:",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"server_duration"})," se for gerado no cliente - tempo que levou em microssegundos para o servidor processar a peti\xe7\xe3o e retornar a resposta. B a F na imagem abaixo OU"]}),(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:"exec_duration"})," se gerado no servidor - tempo que levou em microssegundos para o servidor processar a peti\xe7\xe3o. B a E na imagem abaixo."]})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"write_duration"}),(0,o.jsxs)(n.td,{children:["Tempo que levou em microssegundos para enviar:",(0,o.jsx)(n.li,{children:"a peti\xe7\xe3o (quando rodar no cliente). A a B na imagem abaixo."}),(0,o.jsx)(n.li,{children:"Resposta (quando rodar no servidor). E a F na imagem abaixo."})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"task_kind"}),(0,o.jsx)(n.td,{children:"Preemptivo ou cooperativo (respectivamente 'p' ou 'c')"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rtt"}),(0,o.jsxs)(n.td,{children:["Tempo estimado em microssegundos para o cliente enviar a peti\xe7\xe3o e o servidor para reconhec\xea-la. A a D e E a H na imagem abaixo.",(0,o.jsx)(n.li,{children:"S\xf3 medido quando usar a capa de rede ServerNet, retorna 0 se usado com capa de rede legado."}),(0,o.jsx)(n.li,{children:"Para vers\xf5es de Windows anteriores a Windows 10 ou Windows Server 2016, a chamada retorna 0."})]})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Fluxo de peti\xe7\xe3o:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(306082).Z+"",width:"535",height:"378"})}),"\n",(0,o.jsx)(n.h2,{id:"4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"}),"\n",(0,o.jsx)(n.p,{children:"Este arquivo de hist\xf3rico registra a informa\xe7\xe3o em cada processo criado na m\xe1quina 4D Server ou na m\xe1quina remota 4D que executa o comando (excluindo peti\xe7\xf5es Web)."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"no servidor:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(4D Server log recording;1) //lado servidor\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"em um cliente:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Client Log Recording;1) //lado remoto\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Esta declara\xe7\xe3o tamb\xe9m come\xe7a um arquivo de hist\xf3rico ",(0,o.jsx)(n.a,{href:"#4drequestslog_processinfotxt",children:"4DRequestsLog_ProcessInfo.txt"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"cabe\xe7alhos-1",children:"Cabe\xe7alhos"}),"\n",(0,o.jsx)(n.p,{children:"Este arquivo come\xe7a com os cabe\xe7alhos abaixo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Identificador de sess\xe3o de hist\xf3rico"}),"\n",(0,o.jsx)(n.li,{children:"Hostname do servidor que hospeda a aplica\xe7\xe3o"}),"\n",(0,o.jsx)(n.li,{children:"Nome login Usu\xe1rio: login do SO do usu\xe1rio que roda a aplica\xe7\xe3o 4D no servidor."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"conte\xfados-1",children:"Conte\xfados"}),"\n",(0,o.jsx)(n.p,{children:"Para cada processo, os campos abaixo s\xe3o registrados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Campo nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sequence_number"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"time"}),(0,o.jsx)(n.td,{children:'Hora e data usando o formato ISO 8601 format: "YYYY-MM-DDTHH:MM:SS.mmm"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"process_info_index"}),(0,o.jsx)(n.td,{children:"N\xfamero de processo \xfanico e sequencial"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"CDB4DBaseContext"}),(0,o.jsx)(n.td,{children:"DB4D contexto de componente database UUID"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"systemid"}),(0,o.jsx)(n.td,{children:"ID de sistema"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"server_process_id"}),(0,o.jsx)(n.td,{children:"ID de processo no servidor"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"remote_process_id"}),(0,o.jsx)(n.td,{children:"Id de processo no cliente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"process_name"}),(0,o.jsx)(n.td,{children:"Nome de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"cID"}),(0,o.jsx)(n.td,{children:"Identificador de conex\xe3o 4D"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"uID"}),(0,o.jsx)(n.td,{children:"Identificador de Cliente 4D"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"IP Client"}),(0,o.jsx)(n.td,{children:"IPv4/IPv6\u30A2\u30C9\u30EC\u30B9"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"host_name"}),(0,o.jsx)(n.td,{children:"Hostname do cliente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"user_name"}),(0,o.jsx)(n.td,{children:"Nome de login de usu\xe1rio no cliente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"connection_uuid"}),(0,o.jsx)(n.td,{children:"Identificador UUID da conex\xe3o de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"server_process_unique_id"}),(0,o.jsx)(n.td,{children:"ID de Processo \xfanico em Servidor"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"httpdebuglogtxt",children:"HTTPDebugLog.txt"}),"\n",(0,o.jsx)(n.p,{children:"Este arquivo registra cada peti\xe7\xe3o HTTP e cada resposta em modo raw (n\xe3o processado). Peti\xe7\xf5es inteiras, incluindo cabe\xe7alhos, s\xe3o registradas; opcionalmente, partes do corpo podem ser registradas tamb\xe9m."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"WEB SET OPTION(Web debug log;wdl enable without body)  \n//outros valores est\xe3o dispon\xedveis\n"})}),"\n",(0,o.jsx)(n.p,{children:"Os campos abaixo s\xe3o registrados tanto para Request quanto para Response:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Campo nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SocketID"}),(0,o.jsx)(n.td,{children:"ID da socked usada para comunica\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PeerIP"}),(0,o.jsx)(n.td,{children:"Endere\xe7o IPv4 do host (cliente)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PeerPort"}),(0,o.jsx)(n.td,{children:"Porta usada por host (cliente)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"TimeStamp"}),(0,o.jsx)(n.td,{children:"Timestamp em milisegundos (desde in\xedcio sistema)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ConnectionID"}),(0,o.jsx)(n.td,{children:"Connection UUID (UUID de VTCPSocket usada para comunica\xe7\xe3o)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SequenceNumber"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"4ddebuglogtxt-standard",children:"4DDebugLog.txt (standard)"}),"\n",(0,o.jsx)(n.p,{children:"Esses registros de hist\xf3rico gravam cada evento que ocorreu ao n\xedvel de programa\xe7\xe3o de 4D. Modo padr\xe3o oferece uma vista b\xe1sica de eventos."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Debug Log Recording;2)  \n//standard, all processes SET DATABASE PARAMETER(Current process debug log recording;2)  \n//standard, current process only\n"})}),"\n",(0,o.jsx)(n.p,{children:"Os campos abaixo est\xe3o registrados para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Coluna #"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:"ID de processo (p=xx) e ID de processo \xfanico (puid=xx)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:"N\xedvel de stack"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"5"}),(0,o.jsx)(n.td,{children:"Pode ser Command Name/ Method Name/Message/ Task Start Stop info/Plugin Name, event ou Callback/Connection UUID"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"6"}),(0,o.jsx)(n.td,{children:"Tempo que leva para a opera\xe7\xe3o de hist\xf3rico em milissegundos"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"4ddebuglogtxt-tabular",children:"4DDebugLog.txt (tabular)"}),"\n",(0,o.jsx)(n.p,{children:"Esse arquivo de hist\xf3rico registra cada evento que ocorrer ao n\xedvel de programa\xe7\xe3o 4D em um formato tabulado e compacto que inclui informa\xe7\xe3o adicional (comparado ao formato padr\xe3o)."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(Debug Log Recording;2+4)  \n//extended tabbed format, all processes SET DATABASE PARAMETER(Current process debug log recording;2+4)  \n//extended, current process only\n"})}),"\n",(0,o.jsx)(n.p,{children:"Os campos abaixo est\xe3o registrados para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Coluna #"}),(0,o.jsx)(n.th,{children:"Campo nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"sequence_number"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"time"}),(0,o.jsx)(n.td,{children:"Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:"ProcessID"}),(0,o.jsx)(n.td,{children:"Process ID"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:"unique_processID"}),(0,o.jsx)(n.td,{children:"ID de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"5"}),(0,o.jsx)(n.td,{children:"stack_level"}),(0,o.jsx)(n.td,{children:"N\xedvel de stack"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"6"}),(0,o.jsx)(n.td,{children:"operation_type"}),(0,o.jsxs)(n.td,{children:["Tipo opera\xe7\xe3o hist\xf3rico. Esse valor pode ser um valor absoluto:",(0,o.jsxs)(n.ol,{children:[(0,o.jsx)(n.li,{children:"Comando"}),(0,o.jsx)(n.li,{children:"M\xe9todo (m\xe9todo de projeto, m\xe9todo de banco de dados, etc)"}),(0,o.jsxs)(n.li,{children:["Mensagem (enviada s\xf3 pelo comando ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"}),")"]}),(0,o.jsx)(n.li,{children:"PluginMessage"}),(0,o.jsx)(n.li,{children:"PluginEvent"}),(0,o.jsx)(n.li,{children:"PluginCommand"}),(0,o.jsx)(n.li,{children:"PluginCallback"}),(0,o.jsx)(n.li,{children:"Tarefa"}),(0,o.jsx)(n.li,{children:"M\xe9todo membro (m\xe9todo anexado \xe0 cole\xe7\xe3o ou a um objeto)"})]}),"Quando fechar um n\xedvel de stack, as colunas ",(0,o.jsx)(n.code,{children:"operation_type"}),", ",(0,o.jsx)(n.code,{children:"operation"})," e ",(0,o.jsx)(n.code,{children:"operation_parameters"})," tem o mesmo valor que o n\xedvel de stack registrado na coluna ",(0,o.jsx)(n.code,{children:"stack_opening_sequence_number"})," column. Por exemplo:",(0,o.jsxs)(n.ol,{children:[(0,o.jsx)(n.li,{children:"121  15:16:50:777  5  8  1  2 CallMethod Parameters 0"}),(0,o.jsx)(n.li,{children:"122  15:16:50:777  5  8  2  1 283  0"}),(0,o.jsx)(n.li,{children:"123  15:16:50:777  5  8  2  1 283  0 122 3"}),(0,o.jsx)(n.li,{children:"124  15:16:50:777  5  8  1  2 CallMethod Parameters 0 121 61"})]}),"A primeira e segunda linha abrem o n\xedvel de stack, a terceira e quarta linha fecham o n\xedvel de stack. Valores nas colunas 6, 7 e 8 s\xe3o repetidos na linha do n\xedvel de stack ao fechar. A coluna 10 cont\xe9m os n\xfameros de sequ\xeancia de abertura do n\xedvel de stack, ou seja, 122 para a terceira linha e 121 para a quarta."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"7"}),(0,o.jsx)(n.td,{children:"operation"}),(0,o.jsxs)(n.td,{children:["Pode representar (dependendo do tipo da opera\xe7\xe3o):",(0,o.jsx)(n.li,{children:"uma ID de comando de linguagem (quando tipo =1)"}),(0,o.jsx)(n.li,{children:"um nome de m\xe9todo (quando tipo =2)"}),(0,o.jsx)(n.li,{children:"uma combina\xe7\xe3o de pluginIndex;pluginCommand (quando tipo=4, 5, 6 ou 7). Pode conter algo como '3;2'"}),(0,o.jsx)(n.li,{children:"uma UUID task connection (quando tipo = 8)"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"8"}),(0,o.jsx)(n.td,{children:"operation_parameters"}),(0,o.jsx)(n.td,{children:"Par\xe2metros passados a comandos, m\xe9todos ou plugins"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"9"}),(0,o.jsx)(n.td,{children:"form_event"}),(0,o.jsx)(n.td,{children:"Evento formul\xe1rio se houver: vazio em outros casos (suponha que a coluna \xe9 usada quando o c\xf3digo for executado em um m\xe9todo formul\xe1rio ou m\xe9todo objeto)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"10"}),(0,o.jsx)(n.td,{children:"stack_opening_sequence_number"}),(0,o.jsx)(n.td,{children:"S\xf3 para n\xedveis stack fechamento: n\xfamero sequencia do n\xedvel correspondente de abertura de stack"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"11"}),(0,o.jsx)(n.td,{children:"stack_level_execution_time"}),(0,o.jsx)(n.td,{children:"S\xf3 para n\xedveis de stack de fechamento: tempo decorrido em microssegundos da a\xe7\xe3o de hist\xf3rico atual; s\xf3 para os n\xedveis de stack de fechamento (ver d\xe9cima coluna em linhas 123 e 124 no hist\xf3rico acima)"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"4ddiagnosticlogtxt",children:"4DDiagnosticLog.txt"}),"\n",(0,o.jsxs)(n.p,{children:["Esse arquivo registra v\xe1rios eventos relacionados \xe0 opera\xe7\xe3o de aplica\xe7\xe3o e sua leitura humana. Pode incluir informa\xe7\xe3o personalizada nesse arquivo usando o comando ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page667.html",children:"LOG EVENT"})]}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" SET DATABASE PARAMETER(Diagnostic log recording;1) //come\xe7a o registro\n"})}),"\n",(0,o.jsx)(n.p,{children:"Os campos abaixo est\xe3o registrados para cada evento:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Nome de campo"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sequenceNumber"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"timestamp"}),(0,o.jsx)(n.td,{children:"Data e hora em formato ISO 8601 (YYYY-MM-DDThh:mm:ss.mmm)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"loggerID"}),(0,o.jsx)(n.td,{children:"Opcional"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"componentSignature"}),(0,o.jsx)(n.td,{children:"Opcional - assinatura interna de componente"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"messageLevel"}),(0,o.jsx)(n.td,{children:"Informa\xe7\xe3o, Aviso, Erro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"message"}),(0,o.jsx)(n.td,{children:"Descri\xe7\xe3o da entrada de hist\xf3rico"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Dependendo do evento, v\xe1rios outros campos podem ser registrados, como task, socket, etc."}),"\n",(0,o.jsx)(n.h2,{id:"4dsmtplogtxt-4dpop3logtxt-e-4dimaplogtxt",children:"4DSMTPLog.txt, 4DPOP3Log.txt, e 4DIMAPLog.txt"}),"\n",(0,o.jsx)(n.p,{children:"Esses hist\xf3ricos registram cada troca entre a aplica\xe7\xe3o 4D e o servidor de mail (SMTP, POP3, IMAP) que foram iniciados pelos comandos abaixo:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["SMTP - ",(0,o.jsx)(n.a,{href:"/docs/pt/19/API/SMTPTransporterClass#smtp-new-transporter",children:"SMTP New transporter"})]}),"\n",(0,o.jsxs)(n.li,{children:["POP3 - ",(0,o.jsx)(n.a,{href:"/docs/pt/19/API/POP3TransporterClass#pop3-new-transporter",children:"POP3 New transporter"})]}),"\n",(0,o.jsxs)(n.li,{children:["IMAP  - ",(0,o.jsx)(n.a,{href:"/docs/pt/19/API/IMAPTransporterClass#imap-new-transporter",children:"IMAP New transporter"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Os arquivos de hist\xf3rico podem ser produzidos em duas vers\xf5es:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["uma vers\xe3o comum:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"chamada 4DSMTPLog.txt, 4DPOP3Log.txt, ou 4DIMAPLog.txt"}),"\n",(0,o.jsx)(n.li,{children:"sem anexos"}),"\n",(0,o.jsx)(n.li,{children:"usa um arquivo circular autom\xe1tico que \xe9 reciclado a cada 10MB"}),"\n",(0,o.jsx)(n.li,{children:"para depura\xe7\xf5es comuns"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Para come\xe7ar esse hist\xf3rico:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"SET DATABASE PARAMETER(SMTP Log;1) //iniciar log SMTP\nSET DATABASE PARAMETER(POP3 Log;1) //iniciar log POP3\nSET DATABASE PARAMETER(IMAP Log;1) //iniciar log IMAP\n"})}),"\n",(0,o.jsxs)(n.p,{children:["4D Servidor: clique no bot\xe3o ",(0,o.jsx)(n.strong,{children:"Iniciar solicita\xe7\xe3o e Depurar Logs"})," na janela de administra\xe7\xe3o do servidor 4D ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4Dv18R5/4D/18-R5/Maintenance-Page.300-5149308.en.html",children:"Manuten\xe7\xe3o"})," da janela de administra\xe7\xe3o do servidor 4D."]}),"\n",(0,o.jsxs)(n.p,{children:["A rota do hist\xf3rico \xe9 retornada pelo comando ",(0,o.jsx)(n.code,{children:"Get 4D file"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["uma vers\xe3o estendida:\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"attachment(s) included no automatic recycling"}),"\n",(0,o.jsx)(n.li,{children:"nome personalizado"}),"\n",(0,o.jsx)(n.li,{children:"guardado para prop\xf3sitos espec\xedficos"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Para come\xe7ar esse hist\xf3rico:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$server:=New object\n...\n//SMTP\n$server.logFile:="MySMTPAuthLog.txt"\n$transporter:=SMTP New transporter($server)\n\n// POP3\n$server.logFile:="MyPOP3AuthLog.txt"\n$transporter:=POP3 New transporter($server)\n\n//IMAP\n$server.logFile:="MyIMAPAuthLog.txt"\n$transporter:=IMAP New transporter($server)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"conte\xfados-2",children:"Conte\xfados"}),"\n",(0,o.jsx)(n.p,{children:"Para cada peti\xe7\xe3o, os campos abaixo est\xe3o logados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Coluna #"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"Data e hora em formato RFC3339 (yyyy-mm-ddThh:mm:ss.ms)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"3"}),(0,o.jsx)(n.td,{children:"ID de 4D Process"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:"ID de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"5"}),(0,o.jsx)(n.td,{children:(0,o.jsxs)(n.ul,{children:[(0,o.jsx)(n.li,{children:"Informa\xe7\xe3o de in\xedcio de SMTP,POP3, ou sess\xe3o IMAP, incluindo nome de servidor host, n\xfamero de porta TCP usada para conectar com servidor SMTP,POP3, ou IMAP e status de TLS, ou"}),(0,o.jsx)(n.li,{children:'troca de dados entre servidor e cliente, come\xe7ando com "S <" (dados recebidos de servidor SMTP,POP3, ou IMAP) ou "C >" (dados enviados pelo cliente SMTP,POP3, ou IMAP client): lista de modo autentica\xe7\xe3o enviada pelo servidor e seleciona modo autentica\xe7\xe3o, qualquer erro relatado por servidor SMTP,POP3, ou IMAP, informa\xe7\xe3o de cabe\xe7alho do mail enviado (apenas na vers\xe3o normal) e se o mail foi salvo no servidor, ou'}),(0,o.jsx)(n.li,{children:"Informa\xe7\xe3o de fechamento de sess\xe3o de SMPT, POP3 ou IMAP."})]})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"peti\xe7\xf5es-cliente-orda",children:"Peti\xe7\xf5es cliente ORDA"}),"\n",(0,o.jsx)(n.p,{children:"Esse registro grava cada peti\xe7\xe3o ORDA enviada de uma m\xe1quina remota. Pode dirigir informa\xe7\xe3o de hist\xf3rico a uma mem\xf3ria ou a um arquivo em disco. O nome e rota desse arquivo pode ser escolhido."}),"\n",(0,o.jsx)(n.p,{children:"Como iniciar esse log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'//para executar em uma m\xe1quina remota\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//tamb\xe9m pode ser enviado a mem\xf3ria\n'})}),"\n",(0,o.jsx)(n.p,{children:"Se quiser usar esse n\xfamero de sequ\xeancia \xfanico em hist\xf3rico de peti\xe7\xf5es ORDA, necessita ativ\xe1-lo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'//to be executed on a remote machine SET DATABASE PARAMETER(Client Log Recording;1)  \n//to enable log sequence number\n\nds.startRequestLog(File("/PACKAGE/Logs/ordaLog.txt"))  \n//can be also sent to memory SET DATABASE PARAMETER(Client Log Recording;0)  \n//disabling sequence number\n'})}),"\n",(0,o.jsx)(n.p,{children:"Os campos abaixo s\xe3o registrados para cada peti\xe7\xe3o:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Campo nome"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(n.th,{children:"Exemplo"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sequenceNumber"}),(0,o.jsx)(n.td,{children:"N\xfamero de opera\xe7\xe3o \xfanico e sequencial da sess\xe3o de hist\xf3rico"}),(0,o.jsx)(n.td,{children:"104"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"url"}),(0,o.jsx)(n.td,{children:"URL de peti\xe7\xe3o de cliente ORDA"}),(0,o.jsx)(n.td,{children:'"rest/Persons(30001)"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"startTime"}),(0,o.jsx)(n.td,{children:"Data e hora de in\xedcio utilizando o formato ISO 8601"}),(0,o.jsx)(n.td,{children:'"2019-05-28T08:25:12.346Z"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"endTime"}),(0,o.jsx)(n.td,{children:"Data e hora final usando formato ISO 8601"}),(0,o.jsx)(n.td,{children:'"2019-05-28T08:25:12.371Z"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"duration"}),(0,o.jsx)(n.td,{children:"Dura\xe7\xe3o de processamento do cliente (ms)"}),(0,o.jsx)(n.td,{children:"25"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"response"}),(0,o.jsx)(n.td,{children:"Objeto resposta servidor"}),(0,o.jsx)(n.td,{children:'{"status":200,"body":{"__entityModel":"Persons",[...]'})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},306082:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/logRequestFlow-4d1667b5e86f1ae2bb483f71b5ee3414.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var r=s(667294);let o={},d=r.createContext(o);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);