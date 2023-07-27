"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?o.createElement(k,i(i({ref:t},p),{},{components:a})):o.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});a(67294);var o=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"breakpoints",title:"Breakpoints and Command Catching"},s=void 0,l={unversionedId:"Debugging/breakpoints",id:"version-20/Debugging/breakpoints",title:"Breakpoints and Command Catching",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Debugging/breakpoints.md",sourceDirName:"Debugging",slug:"/Debugging/breakpoints",permalink:"/docs/pt/20/Debugging/breakpoints",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbreakpoints.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"breakpoints",title:"Breakpoints and Command Catching"},sidebar:"docs",previous:{title:"Depurador",permalink:"/docs/pt/20/Debugging/debugger"},next:{title:"Depura\xe7\xe3o a partir de m\xe1quinas remotas",permalink:"/docs/pt/20/Debugging/debugging-remote"}},d={},p=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Breakpoints",id:"breakpoints",level:2},{value:"Propriedades do ponto de interrup\xe7\xe3o",id:"propriedades-do-ponto-de-interrup\xe7\xe3o",level:3},{value:"Pontos de interrup\xe7\xe3o na depura\xe7\xe3o remota",id:"pontos-de-interrup\xe7\xe3o-na-depura\xe7\xe3o-remota",level:3},{value:"Break List",id:"break-list",level:3},{value:"Comandos de captura",id:"comandos-de-captura",level:2},{value:"Definir uma condi\xe7\xe3o para um ponto de interrup\xe7\xe3o no comando",id:"definir-uma-condi\xe7\xe3o-para-um-ponto-de-interrup\xe7\xe3o-no-comando",level:3}],u={toc:p};function c(e){var{components:t}=e,i=r(e,["components"]);return(0,o.kt)("wrapper",n({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",n({},{id:"vis\xe3o-geral"}),"Vis\xe3o Geral"),(0,o.kt)("p",null,"Breakpoints and command catching are very efficient debugging techniques. Ambas t\xeam o mesmo efeito: fazem uma pausa na execu\xe7\xe3o do c\xf3digo (e apresentam a janela do depurador, se ainda n\xe3o tiver sido apresentada) num passo pretendido."),(0,o.kt)("p",null,"You set breakpoints on any line of code where you want the execution to be paused. \xc9 poss\xedvel associar uma condi\xe7\xe3o ao ponto de interrup\xe7\xe3o."),(0,o.kt)("p",null,"Catching a command enables you to start tracing the execution of any process as soon as a command is called by that process."),(0,o.kt)("h2",n({},{id:"breakpoints"}),"Breakpoints"),(0,o.kt)("p",null,"To create a break point, click in the left margin of the Source Code pane in the debugger or in the Code Editor."),(0,o.kt)("p",null,"In the following example, a break point (the red bullet) has been set, in the debugger, on the line ",(0,o.kt)("inlineCode",{parentName:"p"},"If ($in.dataClass#Null)"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"break-point",src:a(79047).Z,width:"672",height:"227"})),(0,o.kt)("p",null,"In the above example, clicking the ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/20/Debugging/debugger/#no-trace"}),(0,o.kt)("strong",{parentName:"a"},"No Trace"))," button resumes normal execution up to the line marked with the break point. That line is not executed itself \u2014 you are taken back to trace mode. Setting a break point beyond the program counter and clicking the ",(0,o.kt)("strong",{parentName:"p"},"No Trace")," button allows you to skip portions of the method being traced."),(0,o.kt)("p",null,"To remove a break point, click the corresponding bullet."),(0,o.kt)("h3",n({},{id:"propriedades-do-ponto-de-interrup\xe7\xe3o"}),"Propriedades do ponto de interrup\xe7\xe3o"),(0,o.kt)("p",null,"You can edit the behavior of a breakpoint using the Breakpoint Properties window:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"breakpoint-properties",src:a(97777).Z,width:"457",height:"337"})),(0,o.kt)("p",null,"This window is available from the Code Editor or the ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/pt/20/Debugging/debugger#source-code-pane"}),"Source Code Pane"),". Pode:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"right-click a line and select ",(0,o.kt)("strong",{parentName:"li"},"Edit Breakpoint")," in the contextual menu, or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Alt+click")," (Windows) or ",(0,o.kt)("inlineCode",{parentName:"li"},"Option+click")," (macOS) in the left margin.")),(0,o.kt)("p",null,"If a break point already exists, the window is displayed for that break point. Otherwise, a break point is created and the window is displayed for the newly created break point."),(0,o.kt)("p",null,"Segue-se uma descri\xe7\xe3o das propriedades:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Localiza\xe7\xe3o"),": indica o nome do m\xe9todo e o n\xfamero de linha associado ao ponto de paragem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interromper quando a express\xe3o seguinte \xe9 true"),": pode criar ",(0,o.kt)("strong",{parentName:"li"},"pontos de interrup\xe7\xe3o condicionais")," introduzindo uma f\xf3rmula 4D que devolva ",(0,o.kt)("inlineCode",{parentName:"li"},"True")," ou ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),". Por exemplo, insira ",(0,o.kt)("inlineCode",{parentName:"li"},"Records in selection(\\[aTable])=0")," para garantir que a quebra ocorre apenas se n\xe3o houver nenhum registo selecionado para a tabela ","[","aTable]. As condi\xe7\xf5es dos pontos de paragem est\xe3o dispon\xedveis na coluna ",(0,o.kt)("strong",{parentName:"li"},"Condi\xe7\xe3o")," da ",(0,o.kt)("a",n({parentName:"li"},{href:"#break-list"}),"lista de interrup\xe7\xf5es"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"N\xfamero de vezes a saltar antes de interromper"),": pode anexar um ponto de interrup\xe7\xe3o a uma linha localizada numa estrutura de ciclo (While, Repeat, ou For) ou localizada numa sub-rotina ou fun\xe7\xe3o chamada a partir de um ciclo."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"O ponto de interrup\xe7\xe3o est\xe1 desativado"),": se n\xe3o necessitar atualmente de um ponto de interrup\xe7\xe3o, mas poder\xe1 precisar dele mais tarde, pode desativ\xe1-lo temporariamente. A disabled break point appears as a dash (-) instead of a bullet (\u2022)|")),(0,o.kt)("h3",n({},{id:"pontos-de-interrup\xe7\xe3o-na-depura\xe7\xe3o-remota"}),"Pontos de interrup\xe7\xe3o na depura\xe7\xe3o remota"),(0,o.kt)("p",null,"A lista de pontos de paragem \xe9 armazenada localmente. In remote debugging mode, if the attached debugger is a remote 4D, the remote break point list replaces temporarily the server break point list during the debugging session."),(0,o.kt)("p",null,"The server break point list is automatically restored if it becomes again the attached debugger."),(0,o.kt)("h3",n({},{id:"break-list"}),"Break List"),(0,o.kt)("p",null,"The Break list is a page of the Runtime Explorer that lets you manage the breakpoints created in the Debugger Window or in the Code Editor. For more information on the Runtime Explorer, see its dedicated page in ",(0,o.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html"}),"the Design reference manual"),"."),(0,o.kt)("p",null,"To open the Break list page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Run menu"),", click ",(0,o.kt)("strong",{parentName:"p"},"Runtime Explorer..."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Break")," tab to display the Break list:"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"break-list-runtime-explorer",src:a(98141).Z,width:"1928",height:"1160"})),(0,o.kt)("p",null,"Usando esta janela, pode:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Definir condi\xe7\xf5es para os pontos de paragem na coluna ",(0,o.kt)("strong",{parentName:"li"},"Condi\xe7\xf5es")),(0,o.kt)("li",{parentName:"ul"},"Ative ou desative os pontos de interrup\xe7\xe3o clicando nos marcadores na margem. Os pontos de interrup\xe7\xe3o desactivados apresentam marcadores transparentes"),(0,o.kt)("li",{parentName:"ul"},"Elimine os pontos de interrup\xe7\xe3o premindo a tecla ",(0,o.kt)("inlineCode",{parentName:"li"},"Delete")," ou ",(0,o.kt)("inlineCode",{parentName:"li"},"Backspace"),", ou clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Delete")," abaixo da lista."),(0,o.kt)("li",{parentName:"ul"},"Abrir os m\xe9todos onde se encontram os pontos de interrup\xe7\xe3o fazendo duplo clique em qualquer linha da lista")),(0,o.kt)("p",null,"N\xe3o \xe9 poss\xedvel adicionar novos pontos de paragem a partir desta janela. Os pontos de paragem s\xf3 podem ser criados a partir da janela do depurador ou do editor de c\xf3digo."),(0,o.kt)("h2",n({},{id:"comandos-de-captura"}),"Comandos de captura"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Catch")," tab of the Runtime Explorer lets you add additional breaks to your code by catching calls to 4D commands. Unlike a break point, which is located in a particular project method (and therefore triggers a trace exception only when it is reached), the scope of catching a command includes all the processes that execute 4D code and call that command."),(0,o.kt)("p",null,"Catching a command is a convenient way to trace large portions of code without setting break points at arbitrary locations. For example, if a record that should not be deleted is deleted after you've executed one or several processes, you can try to reduce the field of your investigation by catching commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE RECORD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),". Each time these commands are called, you can check if the record in question has been deleted, and thus isolate the faulty part of the code."),(0,o.kt)("p",null,"Feel free to combine breakpoints and command catching."),(0,o.kt)("p",null,"To open the Caught Commands page:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Run")," > ",(0,o.kt)("strong",{parentName:"p"},"Runtime explorer...")," to open the Runtime Explorer.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clique em ",(0,o.kt)("strong",{parentName:"p"},"Catch")," para exibir a lista de pontos de interrup\xe7\xe3o nos comandos:"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"runtime-explorer-window",src:a(83610).Z,width:"868",height:"479"})),(0,o.kt)("p",null,"Esta p\xe1gina lista os comandos que devem ser capturados durante a execu\xe7\xe3o. \xc9 composto por duas colunas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A coluna da esquerda mostra o estado de ativa\xe7\xe3o/desativa\xe7\xe3o do ponto de interrup\xe7\xe3o no comando, seguido pelo nome do comando"),(0,o.kt)("li",{parentName:"ul"},"A coluna da direita mostra a condi\xe7\xe3o associada ao ponto de interrup\xe7\xe3o do comando, se houver")),(0,o.kt)("p",null,"Para adicionar um ponto de interrup\xe7\xe3o personalizado:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Add New Catch")," (com a forma de um +) situado por baixo da lista. \xc9 adicionada uma nova entrada \xe0 lista com o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"ALERT")," por padr\xe3o"),(0,o.kt)("li",{parentName:"ol"},"Clique na etiqueta ",(0,o.kt)("strong",{parentName:"li"},"ALERT"),", digite o nome do comando em que deseja definir um ponto de interrup\xe7\xe3o e pressione ",(0,o.kt)("strong",{parentName:"li"},"Enter"),".")),(0,o.kt)("p",null,"Para ativar ou desativar um ponto de interrup\xe7\xe3o de ordem, clique no ponto (-) na frente da etiqueta do comando. A bala \xe9 transparente quando o controle \xe9 desativado."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Desativar um ponto de interrup\xe7\xe3o no comando tem praticamente o mesmo efeito que exclu\xed-lo. Durante a execu\xe7\xe3o, o depurador quase n\xe3o passa tempo na entrada. A vantagem de desativar uma entrada \xe9 que n\xe3o tem de a recriar quando voltar a precisar dela.")),(0,o.kt)("p",null,"Para remover um ponto de interrup\xe7\xe3o no comando:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Seleccione um comando na lista."),(0,o.kt)("li",{parentName:"ol"},"Prima ",(0,o.kt)("strong",{parentName:"li"},"Backspace")," ou ",(0,o.kt)("strong",{parentName:"li"},"Delete")," no seu teclado ou clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Delete")," abaixo da lista (",(0,o.kt)("strong",{parentName:"li"},"Delete All")," remove todos os comandos da lista).")),(0,o.kt)("h3",n({},{id:"definir-uma-condi\xe7\xe3o-para-um-ponto-de-interrup\xe7\xe3o-no-comando"}),"Definir uma condi\xe7\xe3o para um ponto de interrup\xe7\xe3o no comando"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clique na entrada na coluna da direita"),(0,o.kt)("li",{parentName:"ol"},"Introduza uma f\xf3rmula 4D (express\xe3o, chamada comando ou m\xe9todo de projeto) que devolve um valor booleano.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para remover uma condi\xe7\xe3o, elimine a sua f\xf3rmula.")),(0,o.kt)("p",null,"A adi\xe7\xe3o de condi\xe7\xf5es permite-lhe parar a execu\xe7\xe3o quando o comando \xe9 invocado apenas se a condi\xe7\xe3o for cumprida. Por exemplo, se associar a condi\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"Records in selection(\\[Emp]>10)")," ao ponto de interrup\xe7\xe3o do comando ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION"),", o c\xf3digo n\xe3o ser\xe1 interrompido durante a execu\xe7\xe3o do comando ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE SELECTION")," se a sele\xe7\xe3o atual da tabela ","[","Emp] contiver apenas 9 registos (ou menos)."),(0,o.kt)("p",null,"A adi\xe7\xe3o de condi\xe7\xf5es a pontos de interrup\xe7\xe3o em comandos torna a execu\xe7\xe3o mais lenta, pois a condi\xe7\xe3o precisa ser avaliada toda vez que uma exce\xe7\xe3o \xe9 encontrada. Por outro lado, adicionar condi\xe7\xf5es acelera o processo de depura\xe7\xe3o, porque 4D automaticamente ignora ocorr\xeancias que n\xe3o correspondem \xe0s condi\xe7\xf5es."))}c.isMDXComponent=!0},98141:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/break-list-b89efee46224eee9896fd3573d311ece.png"},79047:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/break-dac3aff61c89edd51b1dc219bcce2aaa.png"},97777:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAckAAAFRCAIAAACQaMEIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABknSURBVHhe7d3Ni2TXecfxWntvzCxDwNgxAuNJWmQYrEAysV4gGMmyyMiRSy8eJ9KAZmm86WVv9SfMMqGRISRoZYOlRSCbWdoi0kZ4Y7ISxJCELCbPOec55zzn3lPV1VVPVXXd+/1Qmjn3uec899advj/d7pZ6Fj968ye8ePHixcv3FbL1KQDAT8rWB7oFAPAgubr4O7IVAFxJrpKtAOAsZutbZCsAeJJclWz9qW4BADxIri7eIFsBwJXk6uKNt8lWAPAkubr48dt/r1sAAA+Sq4sfv0O2AoAnyVXJ1n/QrY6PHiyqBx9p9ZqkyZ0PPtON6/nsgzvXXmvPedvjXtc25wlgsiRXF8srsjVHRoiP7dJ1h2y9QrdzLe458fb3vgCcNsnVxfInm2Xr9lGyvwzqdnY5503stTmAEya5Ktn6rm51mPiQoT62huKDB3f0iwTh4TCpu5WZH5vEPaEYKx/pwppPtVVe2qy988EH2jqWYrckz47KEjsOg945twdad0ppYuljhD3moMMlowsEYOokVxdvXpGtRUmGUMxBYjLlowc1koKyKw1CxOQWsW3aGcplWp7QFOte3V0nlr1WLdY2cU2eWtcPjq7DztHDMI4GffKwjkdLpJDfNoCZkFxdvPlgs+fWbuKEolGzL6nz75SUC0yHuBHWhVY1hLRYZ9ol3WIhxaI0NDOvOFCgxc67s9N64/GSWKmtAcyA5Kpk63u61WHjo2SSKbY5FdSKjNI0mR/DtU7stW1byYy4UWbaJd1icVXxigOJ/ilFdlpv3FkShLJJegDTJrm6eGvDbA3xkMaDTKkbQdk5mm+WmVU1jEJR06cpNk2ibrG4sijj7oHyjG5RDfqMx+MlSrp26wCmR3L1ymwtupmSkigLiZS3w7d8StykQdwVhqFSviOkMSdqq/Gx7EHrWEZBbSHszKItrjjQ2lNK1aaPObqpD5boJNGcJYAJi9n60zXZuidNQt0MN/CUAJwqyVXJ1oe6dThkK4Apk1xdvPcez62CbAXgRnJ18fDh4Z9bAWDKJFfJVgBwRrYCgD+yFQD8ka0A4I9sBQB/ZCsA+AvZeu/ePd0CAHgI2fro0aMvAQB+XnjhBbIVAJy9+uqrZCsAOHv33XfJVgBwxnMrAPjj660A4I//TgAA/JGtAOCPbAUAf2QrAPgjWwHAH9kKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/ZCsA+DtAtl4uF2cXT3TDzZOLs320BQAPp5Wt+4lpAPBGtgKAv7t37x4jW8Nn9Gp5qTVbTUVZqcJ23cqbuW2nW9x7oSvIYwAHFp5b7927p1s7+3ykl60hJTUE65dN13wBtXSwrWxx3C0UtWr2J3pmADCiMbGzkK3yj27trHdmNhCjkIA17GR32GiLKiZktDpbu926MwFgrXlka63IKHXoJSbZCsDJiWdrqOQ4bAK0nVfW1T3dxOx2684EgHVOLlsrDbkQgk0hqjNjQOZJZ8ulPrfmGWG3ScxON5undgwAK51WtgLAaSBbAcAf2QoA/shWAPBHtgKAP+dsff3113VrZ2QrgNPlmGCSq54/T4BsBXC6HBNMcpVsBYCAbAUAf97ZuiRbAYDnVgDYA7IVAPyRrQDgb1rZmn621dnFk/qzBDcUV+qPF6ziT8XapM92Px9rzaq869pv5CrhjTbvM77zdNW0AmB3U8rWUWxcwUZbGIs2X1LsrAqd4fLrZ9OaVds1XC/+m2K51B/5He3jMADExLL1WkFh54dx/dmuidRCEq3qOVx+nUMna1Zt13AT4V3lbL1c7ukgwOxNJ1v1U1t9zizZFAYSmvGJtv7g6+Wl1LMQNWm+zR2ZnCo5fuzqMD8ryy91Ql5gl9S+pRj/8tg6t1WO2w7Gf91sc1ZGWTckO/LMMJR/eUSrTgTAVqb63FrGMshVkypRZ36dkqK1zjGT9WlvsDwfJgxTjzqKCTjcHVOxdBgoze1g3LjsDcOml9nTkh16UrGPTlo5HcBW5pCtuTgMs958jdSwHRPI1OPjnQr7esvtOCzJKVYa5v65VjdaZdd4YMads7qSrM3zzLAZA9jZnLI1SnEUY6Q7P4affHave3K9Dcqou9yM2yVSDRuxvU5sVg2UXeOBGXfO6kqyNi8xw2YMYGezy1aR8607Pw7r463tM2i0Ynm7RPOqhmAthtqgZWWbDAaD4ooWdnpDdthATZO2CWkAa8wpW2WoNEa0ELbsWgmacfpoFqq4f8Xy7pKytyyTUv5ell2tSmk8aMejs1KdnonsMPPKcrsWwM6mlK2nqk07AFNAth4d0QpMENkKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/ZCsA+CNbAcAf2QoA/shWAPBHtgKAP7IVAPyRrQDgj2wFAH9kKwD4I1sBwN+NzlYAOF2aZTtzzlYAgCBbAcAf2QoA/shWAPBHtgKAP7IVAPyRrQDgj2wFAH9kKwD4I1sBwB/ZCgD+yFYA8Ee2AoA/shUA/JGtAOCPbAUAf2QrAPgjWwHAH9kKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/B8jWy+WiWl5q9ZqkydnFE93Y2HarRtI7WNmpHGXbwz25OHM5z4PZ5YRP7s0CWwnZ+s2X9p2t+V4K99V26bpdbG0bdg1psv6ky1FcDgcuI6bgMM+t5VbZ+rbZbqHLXXplkzLB5XDgMmIKDputMtQnwFBcLs/0iTA8zyZ1tzLzc341j5G1ZZ0TG4ZqrFxq83q/Dg8Xp13oIdvbOh4u0npdOz5uewI6qx7jivMsHcZnkrvFfbWsmrcTNnRGPU4cDa9DKK7+IxhsDzZra7NHV658F6qsHR4ykr1ZqNqTNAe1424b4Nics/XzkeZuqR/9oZhvDnOfXC7L3ROVXWkQbqPhDSR7UknWijhb5sVBOEptUOYNDxenlZ3DI5j5dnc4l9J6PBhNk1o+RO8868LRmdRRaKYzi7I2DHM3mZ5+TUIHndWctlk5aGJXi8FmnR+a6J62s1bN/iyvld8He1SeoGNzZk29HKvul5F+2AHbih9MDvyzVUeV+ehvbj9bNOo9mdT5Z3lxQ5bHariz5NEsjHPJHqWMO4frTatMJayteSA74kaZkAfdaRudZxmYcZlli0U4lpEOK7OaSGtWyUZ72r0msVLXDDbL2lCvx+l0bsaJXTvcF61a3huPzxzYwclma70XTbG9P4NakVGaJvNjuHZunjQnPW7JeHlZFq28GwddetMqU2nXyo64USbkQX9aOq3151kGZlynmWLRHkvJrJXZWhaYYrdJKps+ZtOcm1ko1WHnZpw0lcEholXLe+MVZw5sZ1rPrWFcN4KyczTfLitklv0se7mM8RUMjpLGMhg06U4rBnvzrVzv6jLBDsbTNjnPMhgUtUVoVickYW9bkopMT7+WSp7TOe00HvZNwjmbet4sa8PC+vb6nQeNh5XBIVYvrwcIZa3XEbC7k8vWonvPpLsmC3dP3g7fxii3UBrEXYObKdRyyY6bo5jx8HArpqm2UteOl3QPMVhrJ6ztYMcy1F7rv5clb+ei9DVHCK3id4TilBRPzbEGTWIyqzh9sGnX1oWlm+3cHiXIlWHPSveEcru8LJF/L5X64MyBHZxWtsJPyJEt8qNNKAArkK0zFZ7btglJshXYCNk6K7t/0ku2AhshWwHAH9kKAP6cs/VNshUA3LP1VbIVANyzla8JAIAgWwHAH9kKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBabvQ3jTK7va1LJ18bPf8uI1q5d+6K8lWfAF/Mw0W8/Pz58C80C2HsVcn1sXC/24A6busNn68fnt9AMqF4vb5x+HyuP7eXRNaxfKTnX/sZZuFrIVmLjDZWvM1Rp1H5+fh/EesjUcKB9Hj7KhrU/m2shWYOIOla028Kw9ZOv2CUm2boZsBa50oGxdFa0pzh7rlwpqsNUvHpRVg1LJQRkMPvUPFZOR7bF1XfztXL90ECfHPkk+gAqboYn21A47IVuBiTtctvbzKCZY2hWGKQNNej2+H0cm2lSa0+ZmFeqaikLm5kl5GA5Wj1ZH7UGCUkxL06+7IluBibsRz60aZ3mswZjJus7yMPn2MHBbsU9cVgJRo7p/3KYYt1Quxkr3bVwX2QpM3IGydWW49jJuPLefrTFc10ZdWScDaZ1+jXt6x7XFesR2EdkqyFbgSofK1lEwdf47AZtxtRqFqGsrOtmuV4/Pc8GsCgl5/379wsSq4+ZiGdYeUpLTT7/uimwFJu5w2SpCTmUaYibO7NjO1CiTvSoWyuQ4tfQI6kwbg6FaN82xzFhXhmn5DDSRa8TW0Q6OkK1H//uyyFbMykGz9agkN03SHtkRsvX5JdkKHM5cslWeNnd+2HTEcyswcTPI1vTZ/U1KVr7eCkzeXJ5bbxiyFZi4zbMVvvTKrjbBbOVnDGI+NsxWHN4Un1t58ZrTSz/0ccNMLVsB4CYgWwHAH9kKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/ZCsA+LvR2QoAp0uzbGfO2QoAEGQrAPgjWwHAH9kKAP7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/ZCsA+CNbAcAf2QoA/shWAPBHtgKAP7IVAPyRrQDgj2wFAH9kKwD4I1sBwB/ZCgD+yFYA8Bey9VWyFQBchWx9fkm2AoAnnlsBwN8Bvt56uVwsFstL3QqkcnbxRDeub8flPfEcV3Z9cnHmfsTtjd7+pqe38XVbfzU25fLHtPWbxZa+9rU//uWvfq0b2MFhsvXs7Mym6453nctNa0nDNvwD96MMbN1/3wu7V2MLLhfQpQmuQbL1u8+9QLzu7kDZenF5cVbvkR1vGPf7rdtw33f11v33vdDrjbv08ToZbEqy9enTp8Tr7g6VrU/sXVKG9s5pi5LF4fPS8AAVPguMmuV5Qllf5+lTV5i2XEqtfQir09IOmaZqK1OMk+IRNzq38WkMt6NB//FZWYMO9mRSqX965u0kK/Y27WPPSCd0Tiz0qRe2+/6C7uGuWFsPXwvlraWirZxdXOiC8duJ+2oZG0rZSrzuzjlbPx8Z3gz9waCY7xUzjON0w5lquJHKVJ0owzgK03KpqF36aytbLOOwfDyM43JueVU6DSno8QbMTLPenFU27JAWhnm5XFqFPjoc9+nvLWvDMI5MJS4ZnVgo1jXD5UWYpju3WVvmy2D1m03VMByOwprSP9KPSKz11a/+UcpW8ed3/urDX/yz7pgN/XDZmX+26qgqN0Mchg/8UjG7rijasS2GjdAy3klVcxTD3qRlbXdmUyzjbtGMx6cxvsWVWd4/q2zYISw8a4KztDI9x326e8cnbKf1T2wwwWiO1zvclWtlv0rTwvwN3mweS8861U7ApspzazK3p9eTzVa9WdfeHv2iHdtivvvz74adlrXTZMbwhq9ssYy7RTPunEYQyoPkscv7Z9UwHWT/4JuDpZXp2TmV3t7xLDutf2IrJ7S6J7N2ba3IKE2T+Zu82Twu62wR1zHIVjGreD3dbE33T3kqMbeXzNJi755pxnWqaWCKyq4twjQ9YrO2O7MUy7hbtGMZ1KrV3PXBYPn4rIZyB11o1pdh6KPFTp/uXlNUpnHcOzqx4YR2eWF2bbi27Azz00hLZlkZmlpT1COFHnUCNjXOVjGfeD3lbB180Id7IVou194zdhwG8fshcV2680Xsq0LVrjXqtO5RKqkGTSs7c8V4cBraRdQzTXRPKnfOKht2KMcqF7JUwqBzZdSKveuv25WXa7i86B5u/dq8HdbVdxQHcVcYloptZcYyTD34XtZWutn6P//7fzOJ19PKVhyMjZvZC2nchD020c1W8eWX/zWHeCVb0UW2VuH5lYtxfauyVfz+9/85+XglW9FFtq78CgU2tCZbxRdf/E7iVadOEdkKYC9stv7hD/+dBpKn9qVTp4hsBbAXJVslWL/yla/9y7/+UsbP/cWL//hPv9AZk0a2AtiLlK0pWH/5q19/85t/JptffPE7GeiMSSNbAeyFZGsJVtn83vOvfPLJv0u8ymAOj65kK4C9+O5zL5RgFTL4+te/I9n6m998+q1vPZuKE0a2AjgQeWKVYJV4/fa372ppushWAAfy6af/IY+ur//owSef/JuWpotsBQB/ZCsA+CNbAcAf2QoA/shWAPA3tWz9OUb00gA4oAlm61MYZCtwFGTrxJGtwFGQrRNHtgJHQbZOy0cP0g9zvvPBZ6lAtgJHQbZOiSTrg490oOlKtgJHQbZOSInWp08/++BOCleyFTgKsnU6Sp4GOWfJVuAoyNbpIFuBm8M5W98kW4+HbAVuDrJ1Qvh6K3BjOGcrXxM4JglUDVdJWX2EJVuBoyBbp0VCNcrPr2QrcBxk68SRrcBROGfr80uy9WYhW4Gj4Ll14shW4CjI1okjW4GjmGC2YkAvDYADmlq2AsBNQLYCgD+yFQD8ka0A4I9sBQB/ZCsA+CNbAcAf2QoA/iaYrbc3o7MBYA+mma36/3uuRrYC2CuyVVwu0w89jZaXWr0maXJ28UQ3rufJxdl1115vST63a6zqvp0N3+MOlwKYCrJVmCwI6bNduu4vUHbvvEWH7pIN++zvUgAng2wVNgu2zoX9Bcrunbfo0F2yYZ/9XQrgZJCtwmSBDPWxNRSXyzP9IkF4nm2+ZiC7lZkfm8Q9oRgrl7qwhk1tlZc2a88uLrR1LMVuSZ4dlSWjMyvyntjR9O+tqofRLnHm8OTL8t5hO4cD5otsFTVYTECFYidTLpdtbJRdaRACJreIbdPOUC7T8oSmWPfq7jqx7LVyUX4vp9yo62PotQdat8qcSRr2zzMNwjCOwvzR4YD5IluFSYpOjmhaVCXxVJ1/1nyryHSIG2FdaFVTTYt1pl3SLRa5uCrJpF6ro1bjVbJHtTMj2WjOc3xB+ocD5otsFTYLQmy0eWdqRa2UUJH5MVzrxF7btpXMiBtlpl3SLRZNMXTNma/KeQX9VnVVPauyzM4su3Oxzs/KuqA5CjBPZKswWRBSI41tQMi4TYuyczTfLDOrahiFosZSU2yaRN1iMSw24RbIBO0ejrOila4q5TC1zMxT++fZNoqVKw8HzAfZKkIuZCUL2lyIgaFChOTt8O2uQY6UbAmV+N2wIOVOUFuNj2UPWscyCmoLkffqPtHsDvKuzveyhqv6b2d08nm5GF6QtYcD5ods3R+SBZivaWbrJnT2HpGtwHxNMFtvDLIVmC+yFQD8OWfrw4cPdWtnZCuA0+WYYJKrZCsABGQrAPgjWwHAH9kKAP7IVgDw55ytL5OtAOCaYM++8nBx69m/1a2dka0ATpdjgn3jTx8tvnFvqVs7I1sBnC7HBLv13PuLZ1/mawIA4Jlg4WsC997wzFYAOF2aZTsL2er4vSwAgIjfy7r1km4BADzc+hPXn9UCABDO/+8AAECQrQDgj2wFAH9kKwD4I1sBwF/IVse/LwsAIJz/LkIAgCBbAcAf2QoA/shWAPBHtgKAP7IVAPyRrQDgj2wFAH9kKwD4I1sBwB/ZCgD+yFacmA+xgl6gDSx+9lte3ZdeIA9kK06MhMgXGCFbXV56gTyQrTgxZGvXFtmqKxGRrZg7srWLbN0R2Yq5I1u7yNYdka2Yuz1n68fntxfq9vnHWvTy+P4emiYnk61yDTJzLeyViX8E9x+njYMhWzF3e8zWwU398fm58w0++2wNwdpkaN6oV2aP12itvWTre++9p1vAjbe3bA23+p6flmaeraMrXAt6ZQ7wZ7CKe7ZKrvLcilOyr2xdfVuHh61E98cgONeqCcvQItGJw8K8s7VzhaWULki+pPu6PFdzz1aeW3Fi9pitV9zYJRlj2Ja01FFIjraBSdLH9+PIVLydRrYO332J23hJy7+TjsE9W8Nz6/e//33dAm68wz+35htfpGywEZnH4+WhYoSds8/W4RWWkrmkj2XCvq7PldyzVXKV51ackn1l66pwreU2CDQC1mfroN+8s3V8RWohXxn5fXjRDsQ9W8NzK9mKE7K3bE03trmz038nUPIwBEEa2Yjs7M5Cu1GlLfg5hWxNl6RcYHt96pUZX8fDIFsxd3vMVhHu7Mzc7HHz/v01z606Vpoftlso2cnOTiNbRb1I9gG1uTJhyr6u00pkK+Zuv9l6sk4mW28qshVzR7Z2ka07Ilsxd2RrF9m6I7IVc0e2dpGtO9pLtn7vx2QrTgbZ2rVFtvIav/QCeSBbcWIkRNClF2gDg0DhVV56gTyQrQDg79atW2QrADgjWwHAH9kKAP7IVgDwx/eyAMBfyFb5R7cAAB7IVgDwR7YCgD+yFQD8ka0A4I9sBQB/IVtf+cEPdQsA4EFydfHo0SPdAgB4CM+tZCsA+CJbAcAf2QoA/shWAPBHtgKAP7IVAPyRrQDgT7P15pATsu63tGq88oMf6iiSTW2Uvf/++7Lw5Zdfll9lrNWRv/zr7y3fenvNSybo1I28dvfWMy++oxuPHr3z4jO37r5WhkkqmJnNLqlnaeJwYa088+KLuYnpZk9hvHZcqoUyKbS4e1fKsdA5XKfvzaQfH1n8aKq0aqz/uPr2d17SUfat5168+zdvpJeMtXpt8c/stXKdzR/ksIgbQT8+sjvWnTv/D+ueFe7WzSu9AAAAAElFTkSuQmCC"},83610:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/catch-command-fd399840ad542aad76ae489a5e9de658.png"}}]);