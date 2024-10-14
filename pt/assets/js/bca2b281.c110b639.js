"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33434],{628396:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var d=r(474848),s=r(28453);const a={id:"error-handling",title:"Gest\xe3o de erros"},n=void 0,t={id:"Concepts/error-handling",title:"Gest\xe3o de erros",description:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/pt/20/Concepts/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"error-handling",title:"Gest\xe3o de erros"},sidebar:"docs",previous:{title:"Fluxo de controlo",permalink:"/docs/pt/20/Concepts/control-flow"},next:{title:"Modos interpretado e compilado",permalink:"/docs/pt/20/Concepts/interpreted-compiled"}},i={},c=[{value:"Erro ou status",id:"erro-ou-status",level:2},{value:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros",id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",level:2},{value:"Alcance e componentes",id:"alcance-e-componentes",level:3},{value:"Manejo de erros dentro do m\xe9todo",id:"manejo-de-erros-dentro-do-m\xe9todo",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Utilizar um m\xe9todo de gest\xe3o de erro vazio",id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",level:3}];function l(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.p,{children:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es."}),"\n",(0,d.jsx)(o.p,{children:"Manejo de erros responde \xe0 duas necessidades principais:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"descobrir e consertar erros potenciais e bugs no c\xf3digo durante a fase de desenvolvimento,"}),"\n",(0,d.jsx)(o.li,{children:"detectar e recuperar de erros inesperados nas aplica\xe7\xf5es implementadas; em particular pode substituir di\xe1logos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua pr\xf3pria interface."}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:":::dica Boa pr\xe1tica"}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.p,{children:["\xc9 recomendado instalar um m\xe9todo de gerenciamento de erros em 4D Server, para todos os c\xf3digos rodando no servidor. Quando 4D Server n\xe3o est\xe1 sendo executado ",(0,d.jsx)(o.a,{href:"/docs/pt/20/Admin/cli",children:"headless"})," (ou seja, \xe9 iniciado com sua ",(0,d.jsx)(o.a,{href:"/docs/pt/20/ServerWindow/overview",children:"janela de administra\xe7\xe3o"}),"), esse m\xe9todo evitaria que caixas de di\xe1logo inesperadas fossem exibidas na m\xe1quina do servidor. No modo headless, os erros s\xe3o registados no ficheiro ",(0,d.jsx)(o.a,{href:"/docs/pt/20/Debugging/debugLogFiles#4ddebuglogtxt-standard",children:"4DDebugLog"})," para an\xe1lise posterior."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:":::"}),"\n",(0,d.jsx)(o.h2,{id:"erro-ou-status",children:"Erro ou status"}),"\n",(0,d.jsxs)(o.p,{children:["Muitas fun\xe7\xf5es de classe 4D, tais como ",(0,d.jsx)(o.code,{children:"entity.save()"})," ou ",(0,d.jsx)(o.code,{children:"transporter.send()"}),', devolvem um objecto com o estatuto **. Este objecto \xe9 utilizado para armazenar erros "previs\xedveis" no contexto do tempo de execu\xe7\xe3o, por exemplo, palavra-passe inv\xe1lida, entidade bloqueada, etc., que n\xe3o interrompem a execu\xe7\xe3o do programa. Esta categoria de erros pode ser tratada por c\xf3digo normal.']}),"\n",(0,d.jsx)(o.p,{children:'Outros erros "imprevis\xedveis" incluem erro de grava\xe7\xe3o em disco, falha de rede, ou em geral qualquer interrup\xe7\xe3o inesperada. Esta categoria de erros gera exce\xe7\xf5es e precisa ser tratada atrav\xe9s de um m\xe9todo de tratamento de erros.'}),"\n",(0,d.jsx)(o.h2,{id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",children:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros"}),"\n",(0,d.jsxs)(o.p,{children:["Em 4D, todos os erros podem ser apanhados e tratados num m\xe9todo de projecto espec\xedfico, o m\xe9todo ",(0,d.jsx)(o.strong,{children:"de tratamento de erros"})," (ou ",(0,d.jsx)(o.strong,{children:"de captura de erros"}),")."]}),"\n",(0,d.jsx)(o.p,{children:"Uma vez instalados, os manipuladores de erros s\xe3o automaticamente chamados em modo interpretado ou compilado em caso de erro na aplica\xe7\xe3o 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em fun\xe7\xe3o do contexto de execu\xe7\xe3o (ver abaixo)."}),"\n",(0,d.jsxs)(o.p,{children:["Para ",(0,d.jsx)(o.em,{children:"instalar"})," um m\xe9todo de projecto de tratamento de erros, basta chamar o comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page155.html",children:(0,d.jsx)(o.code,{children:"ON ERR CALL"})})," com o nome do m\xe9todo de projecto e (opcionalmente) o \xe2mbito como par\xe2metros. Por exemplo:"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("IO_ERRORS") //Instala o m\xe9todo de gest\xe3o de erros\n'})}),"\n",(0,d.jsxs)(o.p,{children:["Para deixar de detectar erros e devolver o controle a 4D, chame a ",(0,d.jsx)(o.code,{children:"ON ERR CALL"})," com uma string vazia:"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("";ek local) // d\xe1 o controle para o processo local\n'})}),"\n",(0,d.jsxs)(o.p,{children:["O comando  ",(0,d.jsx)(o.code,{children:"M\xe9todo chamado por erro"})," permite saber o nome do m\xe9todo instalado por ",(0,d.jsx)(o.code,{children:"ON ERR CALL"})," para o processo atual. \xc9 particularmente \xfatil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o m\xe9todo de captura de erros do banco de dados local:"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Se o documento n\xe3o pouder ser aberto, um erro \xe9 gerado\n $ref:=Open document("MyDocument")\n  //Reinstala\xe7\xe3o do m\xe9todo anterior\n ON ERR CALL($methCurrent)\n\n'})}),"\n",(0,d.jsx)(o.h3,{id:"alcance-e-componentes",children:"Alcance e componentes"}),"\n",(0,d.jsx)(o.p,{children:"Um m\xe9todo de tratamento de erros pode ser definido para diferentes contextos de execu\xe7\xe3o:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:'ON ERR CALL("") //devolve o controle a 4D'}),"\n",(0,d.jsxs)(o.li,{children:["o comando ",(0,d.jsx)(o.code,{children:"GET LAST ERROR STACK"})," que devolve informa\xe7\xe3o sobre a pilha de erros atual da aplica\xe7\xe3o 4D."]}),"\n",(0,d.jsxs)(o.li,{children:["In the case of an error generated by a ",(0,d.jsx)(o.strong,{children:"component"}),", the ",(0,d.jsx)(o.code,{children:"ON ERR CALL"})," error-handling method of the host application is not called, and vice versa."]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala um m\xe9todo local de tratamento de erros ON ERR CALL("globalHandler";ek global) //Instala um m\xe9todo global de tratamento de erros ON ERR CALL("componentHandler";ek erros de componentes) //Instala um m\xe9todo de tratamento de erros de componentes\n'})}),"\n",(0,d.jsx)(o.p,{children:'Pode instalar um gerenciador de erros global que servir\xe1 como "fallback" e m\xe9todos de erros locais espec\xedficos para certos processos. Um manipulador de erros global \xe9 tamb\xe9m \xfatil no servidor para evitar di\xe1logos de erro no servidor quando executado com interface.'}),"\n",(0,d.jsx)(o.p,{children:"Pode definir um \xfanico m\xe9todo de captura de erros para toda a aplica\xe7\xe3o ou diferentes m\xe9todos por m\xf3dulo de aplica\xe7\xe3o. Entretanto, apenas um m\xe9todo pode ser instalado por processo."}),"\n",(0,d.jsx)(o.p,{children:"Quando ocorre um erro, apenas um m\xe9todo \xe9 chamado, como descrito no diagrama seguinte:"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.img,{alt:"o comando &lt;code&gt;GET LAST ERROR STACK&lt;/code&gt; que devolve informa\xe7\xe3o sobre a pilha de erros atual da aplica\xe7\xe3o 4D.",src:r(146747).A+"",width:"1195",height:"578"})}),"\n",(0,d.jsx)(o.h3,{id:"manejo-de-erros-dentro-do-m\xe9todo",children:"Manejo de erros dentro do m\xe9todo"}),"\n",(0,d.jsx)(o.p,{children:"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["\n",(0,d.jsx)(o.p,{children:"vari\xe1veis sistema (*):"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:[(0,d.jsx)(o.code,{children:"Error"})," (inteiro longo): c\xf3digo de erro"]}),"\n",(0,d.jsxs)(o.li,{children:[(0,d.jsx)(o.code,{children:"Error method"}),"(texto): nome do m\xe9todo que provocou o erro"]}),"\n",(0,d.jsxs)(o.li,{children:[(0,d.jsx)(o.code,{children:"Error line"})," (entero largo): n\xfamero de l\xednea do m\xe9todo que provocou o erro"]}),"\n",(0,d.jsxs)(o.li,{children:[(0,d.jsx)(o.code,{children:"Error formula"})," (text): f\xf3rmula do c\xf3digo 4D (texto bruto) que est\xe1 na origem do erro."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(o.admonition,{type:"info",children:(0,d.jsxs)(o.p,{children:["4D automatically maintains a number of variables called ",(0,d.jsx)(o.a,{href:"/docs/pt/20/Concepts/variables#system-variables",children:(0,d.jsx)(o.strong,{children:"system variables"})}),", meeting different needs."]})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["o comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html",children:(0,d.jsx)(o.code,{children:"\xfaltimos erros"})})," que devolve uma cole\xe7\xe3o da pilha actual de erros que ocorreram na aplica\xe7\xe3o 4D. Tamb\xe9m pode usar o comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html",children:(0,d.jsx)(o.code,{children:"GET LAST ERROR STACK"})})," que devolve a mesma informa\xe7\xe3o que os arrays."]}),"\n",(0,d.jsxs)(o.li,{children:["o comando ",(0,d.jsx)(o.code,{children:"Get call chain"})," que devolve uma cole\xe7\xe3o de objetos que descrevem cada passo da string de chamadas a m\xe9todos dentro do processo atual."]}),"\n"]}),"\n",(0,d.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(o.p,{children:"Aqui est\xe1 um sistema de gest\xe3o de erros simples:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'//instalar o m\xe9todo de gest\xe3o de erros\n ON ERR CALL("errorMethod")\n //... executar o c\xf3digo\n ON ERR CALL("") //retorna o controle para 4D\n'})}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'// m\xe9todo projeto errorMethod\n If(Error#1006) //essa n\xe3o \xe9 uma interrup\xe7\xe3o do usu\xe1rio\n    ALERT("Um erro foi produzido "+String(Error)+". O c\xf3digo em quest\xe3o \xe9: \\""+Error formula+"\\"")\n End if\n'})}),"\n",(0,d.jsx)(o.h3,{id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",children:"Utilizar um m\xe9todo de gest\xe3o de erro vazio"}),"\n",(0,d.jsxs)(o.p,{children:["Se quiser que a caixa de di\xe1logo fique escondida, pode instalar um m\xe9todo de gest\xe3o de erros vazio. A vari\xe1vel sistema ",(0,d.jsx)(o.code,{children:"Error"})," pode ser provada em qualquer m\xe9todo, ou seja, fora do m\xe9todo de gest\xe3o de erros:"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n'})})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},146747:(e,o,r)=>{r.d(o,{A:()=>d});const d=r.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},28453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>t});var d=r(296540);const s={},a=d.createContext(s);function n(e){const o=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),d.createElement(a.Provider,{value:o},e.children)}}}]);