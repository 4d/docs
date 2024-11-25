"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27284"],{836818:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>i,frontMatter:()=>t});var o=JSON.parse('{"id":"ViewPro/commands/vp-run-offscreen-area","title":"VP Run offscreen area","description":"VP Run offscreen area ( parameters Mixed","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-run-offscreen-area.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-run-offscreen-area","permalink":"/docs/pt/ViewPro/commands/vp-run-offscreen-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-run-offscreen-area.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-run-offscreen-area","title":"VP Run offscreen area"},"sidebar":"docs","previous":{"title":"VP ROW AUTOFIT","permalink":"/docs/pt/ViewPro/commands/vp-row-autofit"},"next":{"title":"S","permalink":"/docs/pt/commands-legacy/S"}}'),s=r("785893"),d=r("250065");let t={id:"vp-run-offscreen-area",title:"VP Run offscreen area"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Run offscreen area"})," ( ",(0,s.jsx)(n.em,{children:"parameters"})," : Object) : Mixed"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"parameters"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto que cont\xe9m os atributos da \xe1rea fora do ecr\xe3"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"Mixed"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsxs)(n.td,{children:["propiedad ",(0,s.jsx)(n.code,{children:".result"})," do objeto ",(0,s.jsx)(n.code,{children:".onEvent"}),", ou Null se n\xe3o retorna um valor"]}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"})," command creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"parameters"})," object, pass any of the following optional properties. These properties will be available through the ",(0,s.jsx)(n.code,{children:"This"})," command within the ",(0,s.jsx)(n.code,{children:"onEvent"})," method and reference the instance:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'O nome da \xe1rea offscreen. Se omitido ou nulo, um nome gen\xe9rico \xe9 atribu\xeddo (por exemplo, "OffscreenArea1").'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onEvent"}),(0,s.jsx)(n.td,{children:"object (f\xf3rmula)"}),(0,s.jsxs)(n.td,{children:["Um m\xe9todo de callback que ser\xe1 iniciado quando a \xe1rea fora da tela estiver pronta. It can be either:",(0,s.jsxs)(n.li,{children:["an ",(0,s.jsx)(n.code,{children:"onEvent"})," function of a class, or"]}),(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.code,{children:"Formula"})," object"]}),"By default, the callback method is called on the ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onVpReady",children:(0,s.jsx)(n.code,{children:"On VP Ready"})}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onLoad",children:(0,s.jsx)(n.code,{children:"On Load"})}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onUnload",children:(0,s.jsx)(n.code,{children:"On Unload"})}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onVpRangeChanged",children:(0,s.jsx)(n.code,{children:"On VP Range Changed"})}),", or ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onTimer",children:(0,s.jsx)(n.code,{children:"On Timer"})})," events. The callback method can be used to access the ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/configuring#4d-view-pro-form-object-variable",children:"4D View Pro form object variable"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autoQuit"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["True (default value) if the command must stop the formula execution when the ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onEndUrlLoading",children:(0,s.jsx)(n.code,{children:"On End URL Loading"})})," or ",(0,s.jsx)(n.a,{href:"/docs/pt/Events/onUrlLoadingError",children:(0,s.jsx)(n.code,{children:"On URL Loading Error"})})," events occur. If false, you must use the ",(0,s.jsx)(n.code,{children:"CANCEL"})," or ",(0,s.jsx)(n.code,{children:"ACCEPT"})," commands in the ",(0,s.jsx)(n.em,{children:"onEvent"})," callback method."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Tempo m\xe1ximo (expresso em segundos) antes que a \xe1rea seja encerrada automaticamente, se nenhum evento for gerado. Se for definido para 0, n\xe3o \xe9 aplicada qualquer limita\xe7\xe3o. Valor por padr\xe3o: 60"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"resultado"}),(0,s.jsx)(n.td,{children:"misto"}),(0,s.jsx)(n.td,{children:"Resultado do processamento (se for caso disso)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<customProperty>"})}),(0,s.jsx)(n.td,{children:"misto"}),(0,s.jsxs)(n.td,{children:["Any custom attribute to be available in the ",(0,s.jsx)(n.em,{children:"onEvent"})," callback method."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"A seguinte propriedade \xe9 automaticamente adicionada pelo comando, se necess\xe1rio:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeoutReached"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Adicionado com valor true se o tempo limite tiver sido excedido"})]})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A \xe1rea fora da tela s\xf3 est\xe1 dispon\xedvel durante a execu\xe7\xe3o do comando ",(0,s.jsx)(n.code,{children:"VP Run offscreen area"}),". Ele ser\xe1 destru\xeddo automaticamente ap\xf3s o t\xe9rmino da execu\xe7\xe3o."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Os seguintes comandos podem ser utilizados no m\xe9todo de retorno de chamada:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ACCEPT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"CANCEL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SET TIMER"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA Evaluate JavaScript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser criar uma zona fora da \xe1rea da tela do 4D View Pro e ler o valor de uma c\xe9lula:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// cs.OffscreenArea class declaration \nClass constructor ($path : Text)\n This.filePath:=$path\n \n// This function will be called on each event of the offscreen area \nFunction onEvent()\n Case of\n  :(FORM Event.code=On VP Ready)\n      VP IMPORT DOCUMENT(This.area;This.filePath)\n       This.result:=VP Get value(VP Cell(This.area;6;22))\n \n       ALERT("The G23 cell contains the value: "+String(This.result))\n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo de retorno de chamada ",(0,s.jsx)(n.em,{children:"OffscreenArea"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs. OffscreenArea.new()\n\n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Se quiser carregar um grande documento offscreen, aguardar todos os c\xe1lculos para concluir a avalia\xe7\xe3o e export\xe1-lo como um PDF:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'//cs.OffscreenArea class declaration\nClass constructor($pdfPath : Text)\n This.pdfPath:=$pdfPath\n This.autoQuit:=False\n This.isWaiting:=False\n \nFunction onEvent()\n Case of\n     :(FORM Event.code=On VP Ready)\n // Document import\n   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)\n         This.isWaiting:=True\n \n // Start a timer to verify if all calculations are finished.\n // If during this period the "On VP Range Changed" is thrown, the timer will be restarted\n // The time must be defined according to the computer configuration.\n   SET TIMER(60)\n \n  :(FORM Event.code=On VP Range Changed)\n // End of calculation detected. Restarts the timer\n         If(This.isWaiting)\n           SET TIMER(60)\n         End if\n \n  :(FORM Event.code=On Timer)\n // To be sure to not restart the timer if you call others 4D View command after this point\n         This.isWaiting:=False\n \n\n\n // Stop the timer\n   SET TIMER(0)\n \n // Start the PDF export\n        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))\n \n     :(FORM Event.code=On URL Loading Error)\n\n         CANCEL \n End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo de retorno de chamada ",(0,s.jsx)(n.em,{children:"OffscreenArea"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"$o:=cs.OffscreenArea.new()\n \n$result:=VP Run offscreen area($o)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.4d.com/4d-view-pro-end-of-document-loading/",children:"Blog post: End of document loading"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var o=r(667294);let s={},d=o.createContext(s);function t(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);