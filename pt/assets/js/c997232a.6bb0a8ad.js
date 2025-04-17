"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72055"],{234606:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>i,assets:()=>l,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"commands/new-signal","title":"New signal","description":"New signal { ( description 4D.Signal","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands/new-signal.md","sourceDirName":"commands","slug":"/commands/new-signal","permalink":"/docs/pt/commands/new-signal","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-signal.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"new-signal","title":"New signal","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"KILL WORKER","permalink":"/docs/pt/commands/kill-worker"},"next":{"title":"Semaphore","permalink":"/docs/pt/commands/semaphore"}}'),r=s("785893"),d=s("250065");let t={id:"new-signal",title:"New signal",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New signal"})," { ( ",(0,r.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Descri\xe7\xe3o para o sinal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"4D. Signal"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto nativo encapsulando o sinal"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"New signal"})," cria um objeto ",(0,r.jsx)(n.code,{children:"4D.Signal"})," ."]}),"\n",(0,r.jsx)(n.p,{children:"Um sinal \xe9 um objeto partilhado que pode ser passado como par\xe2metro de um worker ou processo para outro worker ou processo, de forma que:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado"}),"\n",(0,r.jsx)(n.li,{children:"o worker/processo chamado pode parar sua execu\xe7\xe3o e esperar at\xe9 que o sinal seja atualizado, sem consumir qualquer recurso de CPU."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally, in the ",(0,r.jsx)(n.em,{children:"description"})," parameter you can pass a custom text describing the signal. Esse texto pode tamb\xe9m ser definido depois da cria\xe7\xe3o do sinal."]}),"\n",(0,r.jsxs)(n.p,{children:["Since the signal object is a shared object, it can also be used to maintain user properties, including the ",(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})})," property, by calling the ",(0,r.jsx)(n.code,{children:"Use...End use"})," structure."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valor retornado"})}),"\n",(0,r.jsxs)(n.p,{children:["Um novo ",(0,r.jsxs)(n.a,{href:"/docs/pt/API/SignalClass#signal-object",children:["objeto ",(0,r.jsx)(n.code,{children:"4D.Signal"})]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este \xe9 um exemplo t\xedpico de um worker que fixa um sinal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //wait for 1 second max\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker has not finished in less than 1s")\n End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"doSomething"})})," poderia ser como:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //return the result\n End use\n $signal.trigger() // The work is finished\n"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1641"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return t}});var i=s(667294);let r={},d=i.createContext(r);function t(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);