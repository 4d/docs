"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"SignalClass",title:"Signal"},i=void 0,s={unversionedId:"API/SignalClass",id:"version-20-R2/API/SignalClass",title:"Signal",description:"Sinais s\xe3o ferramentas fornecidas pela linguagem 4D para gerenciar intera\xe7\xf5es e evitar conflitos entre processos em uma aplica\xe7\xe3o multiprocesso. Sinais permitem assegurar que um ou mais processos v\xe3o esperar por uma tarefa espec\xedfica a ser completada antes de continuar a execu\xe7\xe3o. Qualquer processo pode esperar ou liberar um sinal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/pt/20-R2/API/SignalClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/pt/20-R2/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/pt/20-R2/API/SMTPTransporterClass"}},p={},d=[{value:"Objeto sinal",id:"objeto-sinal",level:3},{value:"Trabalhar com sinais",id:"trabalhar-com-sinais",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"Resumo",id:"resumo",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo-1",level:4},{value:".description",id:"description",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4}],m={toc:d};function u(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",r({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sinais s\xe3o ferramentas fornecidas pela linguagem 4D para gerenciar intera\xe7\xf5es e evitar conflitos entre processos em uma aplica\xe7\xe3o multiprocesso. Sinais permitem assegurar que um ou mais processos v\xe3o esperar por uma tarefa espec\xedfica a ser completada antes de continuar a execu\xe7\xe3o. Qualquer processo pode esperar ou liberar um sinal."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Os sem\xe1foros podem ser usados para gerenciar intera\xe7\xf5es. Sem\xe1foros permitem ter certeza que dois ou mais processos n\xe3o modificam o mesmo recurso (arquivo, registro..) ao mesmo tempo. S\xf3 o processo que estabelece o sem\xe1foro pode remov\xea-lo.")),(0,n.kt)("h3",r({},{id:"objeto-sinal"}),"Objeto sinal"),(0,n.kt)("p",null,"Um sinal \xe9 um objeto partilhado que deve ser passado como par\xe2metro a comandos que chamam ou criam trabalhadores ou processo."),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"4D. Signal")," object contains the following built-in methods and properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#wait"}),(0,n.kt)("inlineCode",{parentName:"a"},".wait()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#trigger"}),(0,n.kt)("inlineCode",{parentName:"a"},".trigger()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#signaled"}),(0,n.kt)("inlineCode",{parentName:"a"},".signaled"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#description"}),(0,n.kt)("inlineCode",{parentName:"a"},".description")),".")),(0,n.kt)("p",null,"Qualquer worker/processo que chame ao m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},".wait()")," suspender\xe1 sua execu\xe7\xe3o at\xe9 que a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," seja verdaidera. Enquanto espera um sinal, o processo que chamar n\xe3o usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplica\xe7\xf5es multiprocesso. A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," se converte em true quando qualquer worker/processo chamar ao m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger()"),"."),(0,n.kt)("p",null,"Lembre que para evitar situa\xe7\xf5es de bloqueio, ",(0,n.kt)("inlineCode",{parentName:"p"},".wait()")," tamb\xe9m pode regrassar depois de que tenha alcan\xe7ado um tempo de espera definido."),(0,n.kt)("p",null,"Os objetos sinal se criam com o comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#new-signal"}),"New signal"),"."),(0,n.kt)("h3",r({},{id:"trabalhar-com-sinais"}),"Trabalhar com sinais"),(0,n.kt)("p",null,"Em 4D, se cria um novo objeto sinal chamando ao comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#new-signal"}),(0,n.kt)("inlineCode",{parentName:"a"},"New signal")),". Quando tiver criado o sinal, deve ser passado como par\xe2metro a ",(0,n.kt)("inlineCode",{parentName:"p"},"New process")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," para que a modifiquem quando terminem a tarefa que queira esperar."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signal.wait()")," deve ser chamado do worker/processo que precisa de outro worker/processo para terminar uma tarefa para poder continuar."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signal.trigger()")," deve ser chamado desde worker/processo que terminou sua execu\xe7\xe3o para liberar a todos os outros.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(12312).Z,width:"813",height:"324"})),(0,n.kt)("p",null,"Quando um sinal tiver sido lan\xe7ado usando uma chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"signal.trigger()"),", n\xe3o pode ser reutilizado. Se quiser estabelecer outro sinal, precisa chamar o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"New signal")," novamente."),(0,n.kt)("p",null,"Since a signal object is a ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/20-R2/Concepts/shared"}),"shared object"),", you can use it to return results from called workers/processes, provided that you do not forget to write values within a ",(0,n.kt)("inlineCode",{parentName:"p"},"Use... End use")," structure (see example)."),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' #DECLARE ($signal : 4D.\n  Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Open the form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Add a new attribute to your $signal shared object to pass your result to the other process:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Trigger the signal to the waiting process\n $signal.trigger()\n')),(0,n.kt)("p",null,"M\xe9todo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"OpenForm")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D. Signal\n\n  // Creation of a signal\n $signal:=New signal\n\n  // call main process and execute OpenForm method\n CALL WORKER(1;"OpenForm";$signal)\n  // do another calculation\n ... // Waiting for the end of the process\n $signaled:=$signal.wait()\n\n  // Processing of the results\n $calc:=$signal.result+...\n')),(0,n.kt)("h3",r({},{id:"resumo"}),"Resumo"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#description"}),(0,n.kt)("strong",{parentName:"a"},".description")," : Text"),"\xa0","\xa0","\xa0","\xa0","makes the current process wait until the ",(0,n.kt)("inlineCode",{parentName:"td"},".signaled")," property of the signal object to become ",(0,n.kt)("strong",{parentName:"td"},"true")," or the optional ",(0,n.kt)("em",{parentName:"td"},"timeout")," to expire")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#signaled"}),(0,n.kt)("strong",{parentName:"a"},".signaled")," : Boolean"),"\xa0","\xa0","\xa0","\xa0","cont\xe9m o estado actual do objecto ",(0,n.kt)("inlineCode",{parentName:"td"},"Sinal"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#trigger"}),(0,n.kt)("strong",{parentName:"a"},".trigger( )")),"\xa0","\xa0","\xa0","\xa0","coloca o ",(0,n.kt)("inlineCode",{parentName:"td"},"sinalizado")," propriedade do objecto de sinal em ",(0,n.kt)("strong",{parentName:"td"},"verdadeiro"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#wait"}),(0,n.kt)("strong",{parentName:"a"},".wait"),"( { ",(0,n.kt)("em",{parentName:"a"},"timeout")," : Real } ) : Boolean "),"\xa0","\xa0","\xa0","\xa0","faz com que o processo atual espere at\xe9 a propriedade ",(0,n.kt)("inlineCode",{parentName:"td"},".signaled")," do objeto sinal se tornar ",(0,n.kt)("strong",{parentName:"td"},"true")," ou expirar o opcional ",(0,n.kt)("em",{parentName:"td"},"timeout"))))),(0,n.kt)("h2",r({},{id:"new-signal"}),"New signal"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,"|"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o para o sinal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D. Signal"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto nativo encapsulando o sinal")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".description")," property contains a custom description for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Signal")," object.."),(0,n.kt)("p",null,"Um sinal \xe9 um objeto partilhado que pode ser passado como par\xe2metro de um worker ou processo para outro worker ou processo, de forma que:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado"),(0,n.kt)("li",{parentName:"ul"},"o worker/processo chamado pode parar sua execu\xe7\xe3o e esperar at\xe9 que o sinal seja atualizado, sem consumir qualquer recurso de CPU.")),(0,n.kt)("p",null,"Opcionalmente, no par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"description")," pode passar um texto personalizado descrevendo o sinal. Esse texto pode tamb\xe9m ser definido depois da cria\xe7\xe3o do sinal."),(0,n.kt)("p",null,"Since the signal object is a shared object, it can also be used to maintain user properties, including the ",(0,n.kt)("a",r({parentName:"p"},{href:"#description"}),(0,n.kt)("inlineCode",{parentName:"a"},".description"))," property, by calling the ",(0,n.kt)("inlineCode",{parentName:"p"},"Use... End use")," structure."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valor retornado")),(0,n.kt)("p",null,"A new ",(0,n.kt)("a",r({parentName:"p"},{href:"#signal-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"4D. Signal")," object"),"."),(0,n.kt)("h4",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,"Este \xe9 um exemplo t\xedpico de um worker que fixa um sinal:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D. Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //wait for 1 second max\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker no ha terminado en menos de 1s")\n End if\n')),(0,n.kt)("p",null,"O m\xe9todo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"doSomething"))," poderia ser algo como:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," #DECLARE ($signal : 4D. Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //retorna o resultado\n End use\n $signal.trigger() // O trabalho terminou\n")),(0,n.kt)("h2",r({},{id:"description"}),".description"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".description")," : Text"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".wait( )")," function makes the current process wait until the ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," property of the signal object to become ",(0,n.kt)("strong",{parentName:"p"},"true")," or the optional ",(0,n.kt)("em",{parentName:"p"},"timeout")," to expire."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".description")," pode ser definida ao criar o objeto signal ou a qualquer momento. Note that since the ",(0,n.kt)("inlineCode",{parentName:"p"},"Signal")," object is a shared object, any write-mode access to the ",(0,n.kt)("inlineCode",{parentName:"p"},".description")," property must be surrounded by a ",(0,n.kt)("inlineCode",{parentName:"p"},"Use... End use")," structure."),(0,n.kt)("p",null,"Essa propriedade \xe9",(0,n.kt)("strong",{parentName:"p"},"apenas escrita"),"."),(0,n.kt)("h2",r({},{id:"signaled"}),".signaled"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".signaled")," : Boolean"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," cont\xe9m o estado actual do objecto ",(0,n.kt)("inlineCode",{parentName:"p"},"Sinal"),". . Quando se cria um sinal, ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," \xe9 ",(0,n.kt)("strong",{parentName:"p"},"False"),"."),(0,n.kt)("p",null,"Essa propriedade \xe9 ",(0,n.kt)("strong",{parentName:"p"},"apenas leitura"),"."),(0,n.kt)("h2",r({},{id:"trigger"}),".trigger()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".trigger( )")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger()")," coloca o ",(0,n.kt)("inlineCode",{parentName:"p"},"sinalizado")," propriedade do objecto de sinal em ",(0,n.kt)("strong",{parentName:"p"},"verdadeiro")," e desperta todos os trabalhadores ou processos que esperam por este sinal."),(0,n.kt)("p",null,"Se o sinal j\xe1 estiver no estado de sinaliza\xe7\xe3o (ou seja, a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"signaled")," j\xe1 for ",(0,n.kt)("strong",{parentName:"p"},"true"),"), a fun\xe7\xe3o n\xe3o faz nada."),(0,n.kt)("h2",r({},{id:"wait"}),".wait()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Vers\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".wait"),"( { ",(0,n.kt)("em",{parentName:"p"},"timeout")," : Real } ) : Boolean "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"timeout"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tempo m\xe1ximo de espera do sinal em segundos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Resultados"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Estado da propriedade ",(0,n.kt)("inlineCode",{parentName:"td"},".signaled"))))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"A fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},".wait()")," faz com que o processo atual espere at\xe9 a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," do objeto sinal se tornar ",(0,n.kt)("strong",{parentName:"p"},"true")," ou expirar o opcional ",(0,n.kt)("em",{parentName:"p"},"timeout"),"."),(0,n.kt)("p",null,"Para evitar que o c\xf3digo se bloqueie, pode passar um tempo m\xe1ximo de espera em segundos no par\xe2metro ",(0,n.kt)("em",{parentName:"p"},"timeout")," (se aceitam decimais)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Atenci\xf3n"),": A chamada a ",(0,n.kt)("inlineCode",{parentName:"p"},".wait( )")," sem um ",(0,n.kt)("em",{parentName:"p"},"timeout")," no processo principal de 4D n\xe3o \xe9 recomend\xe1vel porque poderia congelar toda a aplica\xe7\xe3o 4D.")),(0,n.kt)("p",null,"Se o sinal j\xe1 estiver no estado de sinaliza\xe7\xe3o (ou seja, a propriedade",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," j\xe1 \xe9 ",(0,n.kt)("strong",{parentName:"p"},"true"),"), a fun\xe7\xe3o devolve imediatamente, sem esperar."),(0,n.kt)("p",null,"A fun\xe7\xe3o devolve o valor da propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled"),". Avaliar esse valor permite saber se a fun\xe7\xe3o retornou porque ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger( )")," foi chamado (",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," \xe9 ",(0,n.kt)("strong",{parentName:"p"},"true"),") ou se o ",(0,n.kt)("em",{parentName:"p"},"timeout")," expirou (",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," \xe9 ",(0,n.kt)("strong",{parentName:"p"},"false"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"O estado de um processo que espera um signal \xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Waiting for internal flag"),".")))}u.isMDXComponent=!0},12312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"}}]);