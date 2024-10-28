"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85799],{988906:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=n(474848),a=n(28453);const s={id:"http-set-option",title:"HTTP SET OPTION",slug:"/commands/http-set-option",displayed_sidebar:"docs"},d=void 0,r={id:"commands-legacy/http-set-option",title:"HTTP SET OPTION",description:"HTTP SET OPTION ( op\xe7\xe3o ; valor )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-set-option.md",sourceDirName:"commands-legacy",slug:"/commands/http-set-option",permalink:"/docs/pt/commands/http-set-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"http-set-option",title:"HTTP SET OPTION",slug:"/commands/http-set-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"HTTP SET CERTIFICATES FOLDER",permalink:"/docs/pt/commands/http-set-certificates-folder"},next:{title:"APPEND TO LIST",permalink:"/docs/pt/commands/append-to-list"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"HTTP SET OPTION"})," ( ",(0,t.jsx)(o.em,{children:"op\xe7\xe3o"})," ; ",(0,t.jsx)(o.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"op\xe7\xe3o"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"C\xf3digo da op\xe7\xe3o a definir"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"valor"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Valor da op\xe7\xe3o"})]})]})]}),"\n",(0,t.jsx)(o.admonition,{title:"Compatibilidade",type:"info",children:(0,t.jsxs)(o.p,{children:["Esse comando \xe9 mantido apenas por motivos de compatibilidade. Agora \xe9 recomend\xe1vel usar ",(0,t.jsx)(o.a,{href:"/docs/pt/API/HTTPRequestClass",children:(0,t.jsx)(o.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"HTTP SET OPTION"})," permite definir diferentes op\xe7\xf5es utilizadas durante a pr\xf3xima solicita\xe7\xe3o disparada pelos comandos ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-get",children:"HTTP Get"})," ou ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-request",children:"HTTP Request"}),". Voc\xea pode chamar este comando quantas vezes como op\xe7\xf5es a definir."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": as op\xe7\xf5es definidas s\xe3o locais ao processo atual. Para componentes, s\xe3o locais ao componente em execu\xe7\xe3o."]}),"\n",(0,t.jsxs)(o.p,{children:["Passe no par\xe2metro ",(0,t.jsx)(o.em,{children:"op\xe7\xe3o"})," o n\xfamero da op\xe7\xe3o a definir e no par\xe2metro ",(0,t.jsx)(o.em,{children:"valor"})," o novo valor desta op\xe7\xe3o. Pode utilizar para o par\xe2metro ",(0,t.jsx)(o.em,{children:"op\xe7\xe3o"})," uma das seguintes constantes, que se encontram no tema ",(0,t.jsx)(o.em,{children:"HTTP Client"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Constante"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{children:"Valor"}),(0,t.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP client log"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"7"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"value"}),' = uma das constantes abaixo: HTTP disable log: HTTP client debug log \xe9 desativado (padr\xe3o normal) HTTP enable log with all body parts: HTTP client debug log \xe9 ativado com partes do corpo em resposta e peti\xe7\xe3o HTTP enable log with request body: HTTP client debug log \xe9 ativado com partes do corpo apenas por peti\xe7\xe3o HTTP enable log with response body: HTTP client debug log \xe9 ativado com partes do corpo apenas por resposta HTTP enable log without body: HTTP client debug log \xe9 ativado sem partes do corpo (tamanho do corpo \xe9 fornecido neste caso) Permite obter ou estabelecer o estado arquivo de hist\xf3rico da peti\xe7\xe3o do cliente HTTP. Quando ativado, este arquivo chamado "4DHTTPClientLog_nn.txt", \xe9 armazenado na pasta "Logs" da aplica\xe7\xe3o (nn \xe9 o n\xfamero de arquivo). \xc9 \xfatil para depurar problemas com peti\xe7\xf5es de cliente HTTP. Registra cada peti\xe7\xe3o em modo raw. Peti\xe7\xf5es inteiras, incluindo cabe\xe7alhos, s\xe3o armazenadas: partes do corpo tamb\xe9m podem ser registradas, para saber mais veja ',(0,t.jsx)(o.em,{children:"Description of log files"}),"."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP compression"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"6"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o comprimir) ou 1 (comprimir). Por defeito: 0",(0,t.jsx)(o.br,{}),"Esta op\xe7\xe3o ativa ou desativa o mecanismo de compreens\xe3o das peti\xe7\xf5es entre o cliente e o servidor, para acelerar os interc\xe2mbios. Quando este mecanismo est\xe1 ativo, o cliente HTTP utiliza a compreens\xe3o deflate ou GZIP em fun\xe7\xe3o da resposta do servidor."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP display auth dial"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"4"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o mostrar o di\xe1logo) ou 1 (mostrar o di\xe1logo). Por defeito: 0",(0,t.jsx)(o.br,{}),"Esta op\xe7\xe3o controla a visualiza\xe7\xe3o da caixa de di\xe1logo de autentica\xe7\xe3o ao executar o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-get",title:"HTTP Get",children:"HTTP Get"})," ou ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-request",title:"HTTP Request",children:"HTTP Request"}),". Por defeito, este comando n\xe3o provoca a visualiza\xe7\xe3o da caixa de di\xe1logo, normalmente deve utilizar o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-authenticate",title:"HTTP AUTHENTICATE",children:"HTTP AUTHENTICATE"}),". Entretanto, se deseja que apare\xe7a uma caixa de di\xe1logo de autentica\xe7\xe3o do usu\xe1rio para que introduza seu nome de usu\xe1rio e senha, passe 1 em ",(0,t.jsx)(o.em,{children:"valor"}),". A caixa de di\xe1logo aparece somente se a solicita\xe7\xe3o requer autentica\xe7\xe3o."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP follow redirect"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"2"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o aceita redirecionamentos) o 1 (aceita redirecionamentos).",(0,t.jsx)(o.br,{}),"Valor por defeito = 2"]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP max redirect"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"3"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = n\xfamero m\xe1ximo de redirecionamentos aceitos",(0,t.jsx)(o.br,{}),"Valor por defeito = 2"]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP reset auth settings"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"5"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = 0 (n\xe3o apagar a informa\xe7\xe3o) ou 1 (apagar). Por defeito: 0",(0,t.jsx)(o.br,{}),"Esta op\xe7\xe3o permite indicar a 4D memorizar a informa\xe7\xe3o de autentica\xe7\xe3o do usu\xe1rio (nome de usu\xe1rio, senha, m\xe9todo, etc.) Com a finalidade de voltar a usar-los mais a frente. Por defeito, esta informa\xe7\xe3o \xe9 apagada depois de cada execu\xe7\xe3o do comando ",(0,t.jsx)(o.em,{children:"HTTP Get"})," ou ",(0,t.jsx)(o.em,{children:"HTTP Request"}),". Passe 0 em ",(0,t.jsx)(o.em,{children:"valor"})," para memorizar-los e para apagar-los. Tenha em conta que quando passa 0, a informa\xe7\xe3o \xe9 conservada durante a se\xe7\xe3o, mas n\xe3o \xe9 guardada."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"HTTP timeout"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"1"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.em,{children:"valor"})," = timeout da solicita\xe7\xe3o do cliente, expressada em segundos. O time out \xe9 o tempo de espera do cliente HTTP no caso de n\xe3o haver resposta por parte do servidor. Ao final deste per\xedodo, o cliente fecha a se\xe7\xe3o, e o pedido \xe9 perdido.",(0,t.jsx)(o.br,{}),"Por defeito, este tempo \xe9 de 120 segundos. Pode ser mudado em fun\xe7\xe3o de caracter\xedsticas espec\xedficas (estado da rede, caracter\xedsticas da aplica\xe7\xe3o, etc)."]})]})]})]}),"\n",(0,t.jsx)(o.p,{children:"N\xe3o importa a ordem das op\xe7\xf5es de chamada. Se a mesma op\xe7\xe3o \xe9 definida mais de uma vez, apenas uma \xe9 considera o valor da \xfaltima chamada."}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-authenticate",children:"HTTP AUTHENTICATE"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/http-get-option",children:"HTTP GET OPTION"})]})]})}function m(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>r});var t=n(296540);const a={},s=t.createContext(a);function d(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);