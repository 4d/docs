"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5265],{673264:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(474848),n=o(28453);const a={id:"get-process-variable",title:"GET PROCESS VARIABLE",slug:"/commands/get-process-variable",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/get-process-variable",title:"GET PROCESS VARIABLE",description:"GET PROCESS VARIABLE ( processo ; srcVar ; dstVar {; srcVar2 ; dstVar2 ; ... ; srcVarN ; dstVarN} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-process-variable.md",sourceDirName:"commands-legacy",slug:"/commands/get-process-variable",permalink:"/docs/pt/commands/get-process-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-process-variable",title:"GET PROCESS VARIABLE",slug:"/commands/get-process-variable",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CLEAR SEMAPHORE",permalink:"/docs/pt/commands/clear-semaphore"},next:{title:"KILL WORKER",permalink:"/docs/pt/commands/kill-worker"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Restri\xe7\xf5es",id:"restri\xe7\xf5es",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function t(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," ( ",(0,r.jsx)(s.em,{children:"processo"})," ; ",(0,r.jsx)(s.em,{children:"srcVar"})," ; ",(0,r.jsx)(s.em,{children:"dstVar"})," {; ",(0,r.jsx)(s.em,{children:"srcVar2"})," ; ",(0,r.jsx)(s.em,{children:"dstVar2"})," ; ... ; ",(0,r.jsx)(s.em,{children:"srcVarN"})," ; ",(0,r.jsx)(s.em,{children:"dstVarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"processo"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de processo da fonte"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"srcVar"}),(0,r.jsx)(s.td,{children:"Variable"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Vari\xe1vel fonte"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"dstVar"}),(0,r.jsx)(s.td,{children:"Variable"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Vari\xe1vel destino"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando GET PROCESS VARIABLE l\xea o valor de as vari\xe1veis processo ",(0,r.jsx)(s.em,{children:"srcVar"})," (",(0,r.jsx)(s.em,{children:"srvVar2"}),", etc.) desde o processo fonte cujo n\xfamero se passa em ",(0,r.jsx)(s.em,{children:"processo"})," e devolve seus valores atuais nas vari\xe1veis ",(0,r.jsx)(s.em,{children:"dstVar"})," (",(0,r.jsx)(s.em,{children:"dstVar2"}),", etc.) do processo atual."]}),"\n",(0,r.jsx)(s.p,{children:"Cada vari\xe1vel fonte pode ser una vari\xe1vel, um array ou um elemento de array. Entretanto, tenha em conta as restri\xe7\xf5es listadas mais adiante nesta se\xe7\xe3o."}),"\n",(0,r.jsxs)(s.p,{children:["Em cada dupla de vari\xe1veis ",(0,r.jsx)(s.em,{children:"srcVar;dstVar"}),", as duas vari\xe1veis devem ser de tipos compat\xedveis, do contr\xe1rio os valores que voc\xea obt\xe9m poderiam n\xe3o ser significativos."]}),"\n",(0,r.jsx)(s.p,{children:"O processo atual \u201cespia\u201d as vari\xe1veis do processo fonte, o processo fonte n\xe3o for advertido de nenhuma maneira de que outro processo est\xe1 lendo a inst\xe2ncia de suas vari\xe1veis."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"4D Server"}),": utilizando 4D Client, pode ler as vari\xe1veis num processo de destino executado na m\xe1quina servidor (procedimento armazenado). Para fazer isto, coloque um sinal menos antes do n\xfamero de identifica\xe7\xe3o do processo no par\xe2metro ",(0,r.jsx)(s.em,{children:"processo"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["A comunica\xe7\xe3o processo \u201cIntermachine\u201d, oferecida pelos comandos GET PROCESS VARIABLE, ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/set-process-variable",title:"SET PROCESS VARIABLE",children:"SET PROCESS VARIABLE"})," e ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/variable-to-variable",title:"VARIABLE TO VARIABLE",children:"VARIABLE TO VARIABLE"}),", \xe9 poss\xedvel unicamente desde o cliente ao servidor. Sempre \xe9 um processo cliente o que l\xea ou escreve as vari\xe1veis de um procedimento armazenado."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Dica"}),": se n\xe3o conhece o n\xfamero de identifica\xe7\xe3o do processo servidor, ainda pode utilizar as vari\xe1veis inter-processo do servidor. Para fazer isto, pode utilizar qualquer valor negativo em ",(0,r.jsx)(s.em,{children:"processo"}),". Em outras palavras, n\xe3o \xe9 necess\xe1rio conhecer o n\xfamero de identifica\xe7\xe3o do processo para poder utilizar o comando GET PROCESS VARIABLE com as vari\xe1veis inter-processo do servidor. Esta possibilidade \xe9 muito \xfatil particularmente quando um procedimento armazenado \xe9 lan\xe7ado utilizando o m\xe9todo base On server startup. Como as m\xe1quinas cliente n\xe3o conhecem automaticamente o n\xfamero de identifica\xe7\xe3o desse processo, todo valor negativo pode ser passado no par\xe2metro ",(0,r.jsx)(s.em,{children:"processo"}),"."]}),"\n",(0,r.jsx)(s.h5,{id:"restri\xe7\xf5es",children:"Restri\xe7\xf5es"}),"\n",(0,r.jsx)(s.p,{children:"GET PROCESS VARIABLE n\xe3o aceita vari\xe1veis locais como vari\xe1veis fonte."}),"\n",(0,r.jsx)(s.p,{children:"Por outra parte, as vari\xe1veis de destino podem ser interprocesso, processo ou locais. Os valores s\xe3o \u201crecebidos\u201d unicamente nas vari\xe1veis, n\xe3o nos campos."}),"\n",(0,r.jsx)(s.p,{children:"GET PROCESS VARIABLE aceita todo tipo de vari\xe1vel fonte, processo ou interprocesso, exceto:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ponteiros"}),"\n",(0,r.jsx)(s.li,{children:"Array de ponteiros"}),"\n",(0,r.jsx)(s.li,{children:"Arrays de duas dimens\xf5es"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"O processo fonte deve ser um processo usu\xe1rio; n\xe3o pode ser um processo kernel. Se o processo fonte n\xe3o existe, este comando n\xe3o tem efeito."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," em modo interpretado, se uma vari\xe1vel fonte n\xe3o existe, s\xe3o devolvidos o valor indefinido. Pode detectar isto utilizando a fun\xe7\xe3o ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/type",title:"Type",children:"Type"})," para provar a vari\xe1vel de destino correspondente."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(s.p,{children:["Esta linha de c\xf3digo l\xea o valor da vari\xe1vel texto ",(0,r.jsx)(s.em,{children:"vtEstadoActual"})," no processo cujo n\xfamero for ",(0,r.jsx)(s.em,{children:"$vlProcesso"})," e devolve o resultado na vari\xe1vel processo ",(0,r.jsx)(s.em,{children:"vtInfo"})," do processo atual:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;vtInfo)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsxs)(s.p,{children:["Esta linha de c\xf3digo faz o mesmo, mas devolve o valor na vari\xe1vel local ",(0,r.jsx)(s.em,{children:"$vtInfo"})," de m\xe9todo que est\xe1 sendo executando no processo atual:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;$vtInfo)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsxs)(s.p,{children:["Esta linha de c\xf3digo faz o mesmo mas devolve o valor na vari\xe1vel ",(0,r.jsx)(s.em,{children:"vtEstadoAtual"})," do processo atual:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;vtEstadoAtual;vtEstadoAtual)\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," o primeiro ",(0,r.jsx)(s.em,{children:"vtCurStatus"})," designa a inst\xe2ncia da vari\xe1vel no processo fonte, o segundo ",(0,r.jsx)(s.em,{children:"vtCurStatus"})," designa a inst\xe2ncia da vari\xe1vel no processo atual."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsxs)(s.p,{children:["Este exemplo l\xea sequencialmente os elementos de um array processo desde o processo indicado por ",(0,r.jsx)(s.em,{children:"$vlProceso"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;vl_IPCom_Array;$vlTam)\n\xa0For($vlElem;1;$vlTam)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0// Fazer algo com $vtElem\n\xa0End for\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," neste exemplo, a vari\xe1vel processo ",(0,r.jsx)(s.em,{children:"vl_IPCom_Array"})," cont\xe9m o tamanho do Array ",(0,r.jsx)(s.em,{children:"at_IPCom_Array"}),", e deve ser mantida pelo processo fonte."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(s.p,{children:"Este exemplo faz o mesmo que o anterior, mas l\xea o array como um todo, ao inv\xe9s de ler os elementos de maneira sequencial:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0// Fazer algo com $anArray{$vlElem}\n\xa0End for\n"})}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,r.jsxs)(s.p,{children:["Este exemplo l\xea as inst\xe2ncias das vari\xe1veis ",(0,r.jsx)(s.em,{children:"v1"}),",",(0,r.jsx)(s.em,{children:"v2"}),",",(0,r.jsx)(s.em,{children:"v3"})," no processo fonte e devolve seus valores na inst\xe2ncia das mesmas vari\xe1veis do processo atual:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProcesso;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,r.jsx)(s.p,{children:"Ver o exemplo do comando DRAG AND DROP PROPERTIES."}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"_o_DRAG AND DROP PROPERTIES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Arrastar e Soltar"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Processos"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>d,x:()=>i});var r=o(296540);const n={},a=r.createContext(n);function d(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);