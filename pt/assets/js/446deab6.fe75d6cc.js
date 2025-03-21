"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99582"],{87027:function(e,r,a){a.r(r),a.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/activity-snapshot","title":"ACTIVITY SNAPSHOT","description":"ACTIVITY SNAPSHOT ( arrActivities | arrUUID ; arrInicio ; arrDuracao ; arrInfo {; arrDetails}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/activity-snapshot.md","sourceDirName":"commands-legacy","slug":"/commands/activity-snapshot","permalink":"/docs/pt/commands/activity-snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Factivity-snapshot.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"activity-snapshot","title":"ACTIVITY SNAPSHOT","slug":"/commands/activity-snapshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tools","permalink":"/docs/pt/commands/theme/Tools"},"next":{"title":"BASE64 DECODE","permalink":"/docs/pt/commands/base64-decode"}}'),n=a("785893"),o=a("250065");let i={id:"activity-snapshot",title:"ACTIVITY SNAPSHOT",slug:"/commands/activity-snapshot",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Primeira sintaxe: ACTIVITY SNAPSHOT ( {* ;} arrActivities )",id:"primeira-sintaxe-activity-snapshot----arractivities-",level:3},{value:"Segunda sintaxe: ACTIVITY SNAPSHOT ( {* ;} arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} )",id:"segunda-sintaxe-activity-snapshot----arruuid--arrstart--arrduration--arrinfo-arrsubop-",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"ACTIVITY SNAPSHOT"})," ( arrActivities | arrUUID ; ",(0,n.jsx)(r.em,{children:"arrInicio"})," ; ",(0,n.jsx)(r.em,{children:"arrDuracao"})," ; ",(0,n.jsx)(r.em,{children:"arrInfo"})," {; ",(0,n.jsx)(r.em,{children:"arrDetails"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrActivities | arrUUID"}),(0,n.jsx)(r.td,{children:"Array objeto, Array texto"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsxs)(r.td,{children:["Descri\xe7\xe3o completa de opera\xe7\xf5es (object array) ou",(0,n.jsx)(r.br,{}),"UUIDs das opera\xe7\xf5es (text array)"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrInicio"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Horas de in\xedcio das opera\xe7\xf5es"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrDuracao"}),(0,n.jsx)(r.td,{children:"Integer array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Dura\xe7\xe3o das opera\xe7\xf5es em milisegundos"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrInfo"}),(0,n.jsx)(r.td,{children:"Text array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Descri\xe7\xe3o"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrDetails"}),(0,n.jsx)(r.td,{children:"Object array"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Details of context and sub-operations (if any)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"*"}),(0,n.jsx)(r.td,{children:"Operador"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Se passar = Trazer atividade do servidor"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando ",(0,n.jsx)(r.strong,{children:"ACTIVITY SNAPSHOT"})," retorna um array ou v\xe1rios que descrevem as opera\xe7\xf5es em progresso sobre os dados 4D. Estas opera\xe7\xf5es usualmente mostram uma janela de progresso."]}),"\n",(0,n.jsx)(r.p,{children:"Este comando se usa para trazer uma imagem das x opera\xe7\xf5es que mais consumem tempo e/ou que passam mais frequentemente, tais como escritura de cach\xea ou execu\xe7\xe3o de f\xf3rmulas."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," a informa\xe7\xe3o devolvida pelo comando ",(0,n.jsx)(r.strong,{children:"ACTIVITY SNAPSHOT"}),' \xe9 a mesma mostrada na p\xe1gina "Monitor em tempo real" (RTM) da janela de administra\xe7\xe3o de 4D Server (veja o ',(0,n.jsx)(r.em,{children:"Manual de 4D Server"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Por padr\xe3o, ",(0,n.jsx)(r.strong,{children:"ACTIVITY SNAPSHOT"})," processa as opera\xe7\xf5es realizadas a n\xedvel local (com 4D aut\xf4nomo, 4D Server ou 4D em modo remoto). No entanto, com 4D em modo remoto, tamb\xe9m pode obter uma instant\xe2nea das opera\xe7\xf5es realizadas no servidor: s\xf3 tem que passar o asterisco (*) como \xfaltimo par\xe2metro. Neste caso, o servidor de dados se recupera localmente.",(0,n.jsx)(r.br,{}),"\nO par\xe2metro ",(0,n.jsx)(r.em,{children:"*"})," se ignora quando o comando se executa em 4D Server ou 4D aut\xf4nomo."]}),"\n",(0,n.jsxs)(r.p,{children:["O comando ",(0,n.jsx)(r.strong,{children:"ACTIVITY SNAPSHOT"}),"  aceita duas sintaxes:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"sintaxe usando somente um array de objetos."}),"\n",(0,n.jsx)(r.li,{children:"sintaxe utilizando v\xe1rios arrays."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"primeira-sintaxe-activity-snapshot----arractivities-",children:"Primeira sintaxe: ACTIVITY SNAPSHOT ( {* ;} arrActivities )"}),"\n",(0,n.jsxs)(r.p,{children:["Com esta sintaxe, todas as opera\xe7\xf5es se devolvem em um formul\xe1rio estruturado no array de objetos 4D (",(0,n.jsx)(r.em,{children:"arrAtividades"}),"). Cada elemento do array \xe9 um objeto constru\xeddo da seguinte maneira:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'[\xa0\xa0\xa0 {\xa0\xa0\xa0 \xa0\xa0\xa0 "message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 "maxValue":12321,\xa0\xa0\xa0 \xa0\xa0\xa0 "currentValue":63212,\xa0\xa0\xa0 \xa0\xa0\xa0 "interruptible:0,\xa0\xa0\xa0 \xa0\xa0\xa0 "remote":0,\xa0\xa0\xa0 \xa0\xa0\xa0 "uuid":"deadbeef",\xa0\xa0\xa0 \xa0\xa0\xa0 "taskId":xxx,\xa0\xa0\xa0 \xa0\xa0\xa0 "startTime":"2014-03-20 13:37:00:123",\xa0\xa0\xa0 \xa0\xa0\xa0 "duration":92132,\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbContextInfo":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_id": xxx,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user_name": Jean,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "host_name": HAL,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "task_name": "CreateIndexLocal",\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_uid": "DE4DB33F33F"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "user4d_id ": 1,\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "client_version ": 123456\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "dbOperationDetails":{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 table: "myTable"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 field: "Field_1"\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\xa0\xa0\xa0 \xa0\xa0\xa0 "subOperations":[\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 {"message":"xxx",\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ...}\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 ]\xa0\xa0\xa0 },\xa0\xa0\xa0 {...}]\n'})}),"\n",(0,n.jsx)(r.p,{children:"Esta \xe9 uma descri\xe7\xe3o de cada propriedade devolvida:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"message"})," (texto): etiqueta da opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"maxValue"})," (n\xfamero): n\xfamero de intera\xe7\xf5es definidas para a opera\xe7\xe3o (-1 se a opera\xe7\xe3o n\xe3o \xe9 interativa)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"currentValue"})," (n\xfamero): intera\xe7\xe3o atual"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"interruptible"})," (n\xfamero): a opera\xe7\xe3o pode ser interrompida pelo usu\xe1rio (0=true, 1=false)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"remote"})," (n\xfamero): opera\xe7\xe3o por pares entre cliente e servidor (0=true, 1=false)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"uuid"})," (texto): identificador UUID da opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"taskId"})," (n\xfamero): identificador interno do processo na origem da opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"startTime"}),' (texto): a hora de in\xedcio da opera\xe7\xe3o em formato "aaaa:mm:dd hh:mm:ss:mls"']}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"duration"})," (n\xfamero): dura\xe7\xe3o da opera\xe7\xe3o em milisegundos"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"dbContextInfo"})," (objeto): informa\xe7\xe3o relativa as opera\xe7\xf5es manipuladas pelo motor da base de dados. Cont\xe9m as seguintes propriedades:\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"host_name"})," (cadeia): nome do host que lan\xe7ou a opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"user_name"})," (cadeia): nome do usu\xe1rio 4D cuja sess\xe3o lan\xe7ou a opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"task_name"})," (cadeia): nome do processo que lan\xe7ou a opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"task_id"})," (num): n\xfamero do ID do processo que lan\xe7ou a opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"client_uid"})," (cadeia): opcional, uuid do cliente que lan\xe7ou a opera\xe7\xe3o"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"is_remote_context"})," (booleano, 0 o 1): opcional, indica se a opera\xe7\xe3o da base foi lan\xe7ada por um cliente (valor 1) ou pelo servidor por meio do procedimento armazenado (valor 0)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"user4d_id"})," (num): n\xfamero do ID do usu\xe1rio 4D atual do lado do cliente"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"client_version"})," (cadeia): quatro d\xedgitos representam a vers\xe3o do motor 4D da aplica\xe7\xe3o, como os devolveu o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/application-version",children:"Application version"}),".",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.strong,{children:"Nota:"})," client_uid and is_remote_context s\xf3 est\xe1 dispon\xedvel em modo cliente/servidor. client_uid s\xf3 se devolve se a opera\xe7\xe3o da base de dados se iniciou em uma equipe cliente."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"dbOperationDetails"})," (objeto): propriedade devolvida unicamente se a opera\xe7\xe3o chama ao motor de base de dados (este \xe9 o caso, por exemplo, para pesquisa e ordena\xe7\xf5es). Este \xe9 um objeto que cont\xe9m informa\xe7\xe3o espec\xedfica relacionada com a opera\xe7\xe3o em si. As propriedades dispon\xedveis dependem do tipo da opera\xe7\xe3o de base de dados realizada. Mais especificamente, estas propriedades incluem:\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"table (cadeia): nome da tabela implicado na opera\xe7\xe3o"}),"\n",(0,n.jsx)(r.li,{children:"field (cadeia): nome do campo implicado na opera\xe7\xe3o"}),"\n",(0,n.jsx)(r.li,{children:"queryPlan (cadeia): plano de pesquisa definido para a opera\xe7\xe3o"}),"\n",(0,n.jsx)(r.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"subOperations"})," (array): array de objetos que cont\xe9m sub opera\xe7\xf5es da opera\xe7\xe3o atual (se existe). A estrutura de cada sub elemento \xe9 id\xeantica a do objeto principal. Se a opera\xe7\xe3o atual n\xe3o tem sub opera\xe7\xf5es, ent\xe3o ",(0,n.jsx)(r.em,{children:"subOperations"})," est\xe1 vazio."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"segunda-sintaxe-activity-snapshot----arruuid--arrstart--arrduration--arrinfo-arrsubop-",children:"Segunda sintaxe: ACTIVITY SNAPSHOT ( {* ;} arrUUID ; arrStart ; arrDuration ; arrInfo {;arrSubOp} )"}),"\n",(0,n.jsx)(r.p,{children:"Com esta sintaxe, todas as opera\xe7\xf5es se devolvem em v\xe1rios arrays sincronizados (cada opera\xe7\xe3o provoca que um elemento se adiciona a todos os arrays). Os seguintes arrays se devolvem:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"arrUUID"}),": cont\xe9m os identificadores UUID para cada opera\xe7\xe3o (corresponde a propriedade ",(0,n.jsx)(r.em,{children:"uuid"})," do objeto ",(0,n.jsx)(r.em,{children:"arrAtividades"})," na sintaxe anterior)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"arrInicio"}),": cont\xe9m as horas de in\xedcio de cada opera\xe7\xe3o (corresponde a propriedade ",(0,n.jsx)(r.em,{children:"startTime"})," do objeto ",(0,n.jsx)(r.em,{children:"arrAtividades"})," )."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"arrDuracao"}),": cont\xe9m as dura\xe7\xf5es de cada opera\xe7\xe3o em milissegundos (corresponde a propriedade ",(0,n.jsx)(r.em,{children:"duration"})," do objeto ",(0,n.jsx)(r.em,{children:"arrAtividades"})," )."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"arrInfo"}),": cont\xe9m as etiquetas que descrevem cada opera\xe7\xe3o (corresponde a propriedade ",(0,n.jsx)(r.em,{children:"message"})," do objeto ",(0,n.jsx)(r.em,{children:"arrAtividades"})," )."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"arrDetalhes"})," (opcional): cada elemento deste array \xe9 um objeto que cont\xe9m as seguintes propriedades:\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:'"dbContextInfo"'})," (objeto): ver acima"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:'"dbOperationDetails"'})," (objeto): ver acima"]}),"\n",(0,n.jsxs)(r.li,{children:['"subOperacoes". O valor desta propriedade \xe9 um array objeto que cont\xe9m todas as sub opera\xe7\xf5es da opera\xe7\xe3o atual. Se a opera\xe7\xe3o atual n\xe3o t\xeam sub opera\xe7\xf5es, o valor da propriedade ',(0,n.jsx)(r.em,{children:"subOperacoes"})," \xe9 um array vazio. (corresponde a propriedade ",(0,n.jsx)(r.em,{children:"subOperacoes"})," do objeto ",(0,n.jsx)(r.em,{children:"arrAtividades"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(r.p,{children:"Este m\xe9todo, executado em um processo separado em 4D ou 4D Server, oferece uma instant\xe2nea das opera\xe7\xf5es que est\xe3o em marcha:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY TEXT(arrUUID;0)\n\xa0ARRAY TEXT(arrStart;0)\n\xa0ARRAY LONGINT(arrDuration;0)\n\xa0ARRAY TEXT(arrInfo;0)\n\xa0\n\xa0Repeat\n\xa0\xa0\xa0\xa0ACTIVITY SNAPSHOT(arrUUID;arrStart;arrDuration;arrInfo)\n\xa0\xa0\xa0\xa0If(Size of array(arrUUID)>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\xa0// chamada do depurador\n\xa0\xa0\xa0\xa0End if\n\xa0Until(False)\xa0// Bucle infinito\n"})}),"\n",(0,n.jsx)(r.p,{children:"Obt\xe9m arrays do tipo:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:a(32399).Z+"",width:"585",height:"705"})}),"\n",(0,n.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"1277"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},32399:function(e,r,a){a.d(r,{Z:function(){return s}});let s=a.p+"assets/images/pict1213741.en-fb4452c45d68e10d51b10a4a335109a6.png"},250065:function(e,r,a){a.d(r,{Z:function(){return d},a:function(){return i}});var s=a(667294);let n={},o=s.createContext(n);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);