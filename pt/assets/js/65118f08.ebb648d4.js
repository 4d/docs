"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58792],{3905:(e,o,r)=>{r.d(o,{Zo:()=>m,kt:()=>u});var t=r(67294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var o=t.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):d(d({},o),e)),r},m=function(e){var o=i(e.components);return t.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(r),u=a,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||n;return r?t.createElement(g,d(d({ref:o},m),{},{components:r})):t.createElement(g,d({ref:o},m))}));function u(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=r.length,d=new Array(n);d[0]=c;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var i=2;i<n;i++)d[i]=r[i];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25497:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>l,toc:()=>m});r(67294);var t=r(3905);function a(){return a=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function n(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d={id:"error-handling",title:"Gest\xe3o de erros"},s=void 0,l={unversionedId:"Concepts/error-handling",id:"version-20-R3/Concepts/error-handling",title:"Gest\xe3o de erros",description:"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/pt/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"error-handling",title:"Gest\xe3o de erros"},sidebar:"docs",previous:{title:"Fluxo de controlo",permalink:"/docs/pt/Concepts/control-flow"},next:{title:"Modos interpretado e compilado",permalink:"/docs/pt/Concepts/interpreted-compiled"}},i={},m=[{value:"Erro ou status",id:"erro-ou-status",level:2},{value:"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros",id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros",level:2},{value:"Alcance e componentes",id:"alcance-e-componentes",level:3},{value:"Manejo de erros dentro do m\xe9todo",id:"manejo-de-erros-dentro-do-m\xe9todo",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Utilizar um m\xe9todo de gest\xe3o de erro vazio",id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio",level:3}],p={toc:m};function c(e){var{components:o}=e,d=n(e,["components"]);return(0,t.kt)("wrapper",a({},p,d,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"O manejo de erros \xe9 o processo de antecipar e responder aos erros que possam ocorrer em sua aplica\xe7\xe3o. 4D oferece assist\xeancia completa \xe0 detec\xe7\xe3o e notifica\xe7\xe3o de erros no tempo de execu\xe7\xe3o, assim como a an\xe1lise de suas condi\xe7\xf5es."),(0,t.kt)("p",null,"Manejo de erros responde \xe0 duas necessidades principais:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"descobrir e consertar erros potenciais e bugs no c\xf3digo durante a fase de desenvolvimento,"),(0,t.kt)("li",{parentName:"ul"},"detectar e recuperar de erros inesperados nas aplica\xe7\xf5es implementadas; em particular pode substituir di\xe1logos de erros de sistemas (disco cheio, arquivo faltando, etc) com sua pr\xf3pria interface.")),(0,t.kt)("p",null,":::dica Boa pr\xe1tica"),(0,t.kt)("blockquote",null,(0,t.kt)("blockquote",{parentName:"blockquote"},(0,t.kt)("p",{parentName:"blockquote"},"\xc9 recomendado instalar um m\xe9todo de gerenciamento de erros em 4D Server, para todos os c\xf3digos rodando no servidor. Quando 4D Server n\xe3o est\xe1 sendo executado ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/pt/Admin/cli"}),"headless")," (ou seja, \xe9 iniciado com sua ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/pt/ServerWindow/overview"}),"janela de administra\xe7\xe3o"),"), esse m\xe9todo evitaria que caixas de di\xe1logo inesperadas fossem exibidas na m\xe1quina do servidor. No modo headless, os erros s\xe3o registados no ficheiro ",(0,t.kt)("a",a({parentName:"p"},{href:"/docs/pt/Debugging/debugLogFiles#4ddebuglogtxt-standard"}),"4DDebugLog")," para an\xe1lise posterior."))),(0,t.kt)("p",null,":::"),(0,t.kt)("h2",a({},{id:"erro-ou-status"}),"Erro ou status"),(0,t.kt)("p",null,"Muitas fun\xe7\xf5es de classe 4D, tais como ",(0,t.kt)("inlineCode",{parentName:"p"},"entity.save()")," ou ",(0,t.kt)("inlineCode",{parentName:"p"},"transporter.send()"),', devolvem um objecto com o estatuto **. Este objecto \xe9 utilizado para armazenar erros "previs\xedveis" no contexto do tempo de execu\xe7\xe3o, por exemplo, palavra-passe inv\xe1lida, entidade bloqueada, etc., que n\xe3o interrompem a execu\xe7\xe3o do programa. Esta categoria de erros pode ser tratada por c\xf3digo normal.'),(0,t.kt)("p",null,'Outros erros "imprevis\xedveis" incluem erro de grava\xe7\xe3o em disco, falha de rede, ou em geral qualquer interrup\xe7\xe3o inesperada. Esta categoria de erros gera exce\xe7\xf5es e precisa ser tratada atrav\xe9s de um m\xe9todo de tratamento de erros.'),(0,t.kt)("h2",a({},{id:"instala\xe7\xe3o-de-um-m\xe9todo-de-gest\xe3o-de-erros"}),"Instala\xe7\xe3o de um m\xe9todo de gest\xe3o de erros"),(0,t.kt)("p",null,"Em 4D, todos os erros podem ser apanhados e tratados num m\xe9todo de projecto espec\xedfico, o m\xe9todo ",(0,t.kt)("strong",{parentName:"p"},"de tratamento de erros")," (ou ",(0,t.kt)("strong",{parentName:"p"},"de captura de erros"),")."),(0,t.kt)("p",null,"Uma vez instalados, os manipuladores de erros s\xe3o automaticamente chamados em modo interpretado ou compilado em caso de erro na aplica\xe7\xe3o 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em fun\xe7\xe3o do contexto de execu\xe7\xe3o (ver abaixo)."),(0,t.kt)("p",null,"Para ",(0,t.kt)("em",{parentName:"p"},"instalar")," um m\xe9todo de projecto de tratamento de erros, basta chamar o comando ",(0,t.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," com o nome do m\xe9todo de projecto e (opcionalmente) o \xe2mbito como par\xe2metros. Por exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_ERRORS") //Instala o m\xe9todo de gest\xe3o de erros\n')),(0,t.kt)("p",null,"Para deixar de detectar erros e devolver o controle a 4D, chame a ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," com uma string vazia:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) // d\xe1 o controle para o processo local\n')),(0,t.kt)("p",null,"O comando  ",(0,t.kt)("inlineCode",{parentName:"p"},"M\xe9todo chamado por erro")," permite saber o nome do m\xe9todo instalado por ",(0,t.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," para o processo atual. \xc9 particularmente \xfatil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o m\xe9todo de captura de erros do banco de dados local:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Se o documento n\xe3o pouder ser aberto, um erro \xe9 gerado\n $ref:=Open document("MyDocument")\n  //Reinstala\xe7\xe3o do m\xe9todo anterior\n ON ERR CALL($methCurrent)\n\n')),(0,t.kt)("h3",a({},{id:"alcance-e-componentes"}),"Alcance e componentes"),(0,t.kt)("p",null,"Um m\xe9todo de tratamento de erros pode ser definido para diferentes contextos de execu\xe7\xe3o:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'ON ERR CALL("") //devolve o controle a 4D'),(0,t.kt)("li",{parentName:"ul"},"o comando ",(0,t.kt)("inlineCode",{parentName:"li"},"GET LAST ERROR STACK")," que devolve informa\xe7\xe3o sobre a pilha de erros atual da aplica\xe7\xe3o 4D."),(0,t.kt)("li",{parentName:"ul"},"In the case of an error generated by a ",(0,t.kt)("strong",{parentName:"li"},"component"),", the ",(0,t.kt)("inlineCode",{parentName:"li"},"ON ERR CALL")," error-handling method of the host application is not called, and vice versa.")),(0,t.kt)("p",null,"Exemplos:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala um m\xe9todo local de tratamento de erros ON ERR CALL("globalHandler";ek global) //Instala um m\xe9todo global de tratamento de erros ON ERR CALL("componentHandler";ek erros de componentes) //Instala um m\xe9todo de tratamento de erros de componentes\n')),(0,t.kt)("p",null,'Pode instalar um gerenciador de erros global que servir\xe1 como "fallback" e m\xe9todos de erros locais espec\xedficos para certos processos. Um manipulador de erros global \xe9 tamb\xe9m \xfatil no servidor para evitar di\xe1logos de erro no servidor quando executado com interface.'),(0,t.kt)("p",null,"Pode definir um \xfanico m\xe9todo de captura de erros para toda a aplica\xe7\xe3o ou diferentes m\xe9todos por m\xf3dulo de aplica\xe7\xe3o. Entretanto, apenas um m\xe9todo pode ser instalado por processo."),(0,t.kt)("p",null,"Quando ocorre um erro, apenas um m\xe9todo \xe9 chamado, como descrito no diagrama seguinte:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"o comando &lt;code&gt;GET LAST ERROR STACK&lt;/code&gt; que devolve informa\xe7\xe3o sobre a pilha de erros atual da aplica\xe7\xe3o 4D.",src:r(82194).Z,width:"1195",height:"578"})),(0,t.kt)("h3",a({},{id:"manejo-de-erros-dentro-do-m\xe9todo"}),"Manejo de erros dentro do m\xe9todo"),(0,t.kt)("p",null,"Within the custom error method, you have access to several pieces of information that will help you identifying the error:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"vari\xe1veis sistema (*):"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error")," (inteiro longo): c\xf3digo de erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error method"),"(texto): nome do m\xe9todo que provocou o erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error line")," (entero largo): n\xfamero de l\xednea do m\xe9todo que provocou o erro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): f\xf3rmula do c\xf3digo 4D (texto bruto) que est\xe1 na origem do erro.")))),(0,t.kt)("admonition",a({},{type:"info"}),(0,t.kt)("p",{parentName:"admonition"},"(",(0,t.kt)("em",{parentName:"p"},") 4D mant\xe9m automaticamente uma s\xe9rie de vari\xe1veis chamadas ",(0,t.kt)("strong",{parentName:"em"},"vari\xe1veis sistema"),", que respondem a diferentes necessidades. Consulte o "),"Manual da linguagem de 4D*.")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"o comando ",(0,t.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"\xfaltimos erros"))," que devolve uma cole\xe7\xe3o da pilha actual de erros que ocorreram na aplica\xe7\xe3o 4D. Tamb\xe9m pode usar o comando ",(0,t.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,t.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," que devolve a mesma informa\xe7\xe3o que os arrays."),(0,t.kt)("li",{parentName:"ul"},"o comando ",(0,t.kt)("inlineCode",{parentName:"li"},"Get call chain")," que devolve uma cole\xe7\xe3o de objetos que descrevem cada passo da string de chamadas a m\xe9todos dentro do processo atual.")),(0,t.kt)("h4",a({},{id:"exemplo"}),"Exemplo"),(0,t.kt)("p",null,"Aqui est\xe1 um sistema de gest\xe3o de erros simples:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'//instalar o m\xe9todo de gest\xe3o de erros\n ON ERR CALL("errorMethod")\n //... executar o c\xf3digo\n ON ERR CALL("") //retorna o controle para 4D\n')),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo projeto errorMethod\n If(Error#1006) //essa n\xe3o \xe9 uma interrup\xe7\xe3o do usu\xe1rio\n    ALERT("Um erro foi produzido "+String(Error)+". O c\xf3digo em quest\xe3o \xe9: \\""+Error formula+"\\"")\n End if\n')),(0,t.kt)("h3",a({},{id:"utilizar-um-m\xe9todo-de-gest\xe3o-de-erro-vazio"}),"Utilizar um m\xe9todo de gest\xe3o de erro vazio"),(0,t.kt)("p",null,"Se quiser que a caixa de di\xe1logo fique escondida, pode instalar um m\xe9todo de gest\xe3o de erros vazio. A vari\xe1vel sistema ",(0,t.kt)("inlineCode",{parentName:"p"},"Error")," pode ser provada em qualquer m\xe9todo, ou seja, fora do m\xe9todo de gest\xe3o de erros:"),(0,t.kt)("pre",null,(0,t.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')))}c.isMDXComponent=!0},82194:(e,o,r)=>{r.d(o,{Z:()=>t});const t=r.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"}}]);