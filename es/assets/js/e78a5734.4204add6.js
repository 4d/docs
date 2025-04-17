"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30108"],{688642:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>t,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"commands/new-signal","title":"New signal","description":"New signal { ( description 4D.Signal","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/new-signal.md","sourceDirName":"commands","slug":"/commands/new-signal","permalink":"/docs/es/20-R8/commands/new-signal","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fnew-signal.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"new-signal","title":"New signal","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"KILL WORKER","permalink":"/docs/es/20-R8/commands/kill-worker"},"next":{"title":"Semaphore","permalink":"/docs/es/20-R8/commands/semaphore"}}'),r=s("785893"),d=s("250065");let l={id:"new-signal",title:"New signal",displayed_sidebar:"docs"},a=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New signal"})," { ( ",(0,r.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n para la se\xf1al"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"4D.Signal"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto nativo que encapsula la se\xf1al"})]})]})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"New signal"})," crea un objeto ",(0,r.jsx)(n.code,{children:"4D.Signal"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Una se\xf1al es un objeto compartido que puede ser pasado como par\xe1metro de un worker o proceso a otro worker o proceso, de manera que:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"el worker/proceso llamado puede actualizar el objeto de la se\xf1al despu\xe9s de que se haya completado el procesamiento espec\xedfico"}),"\n",(0,r.jsx)(n.li,{children:"el worker/proceso que llama puede detener su ejecuci\xf3n y esperar hasta que se actualice la se\xf1al, sin consumir recursos de la CPU."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, en el par\xe1metro ",(0,r.jsx)(n.em,{children:"description"})," puede pasar un texto personalizado que describa la se\xf1al. Este texto tambi\xe9n puede definirse despu\xe9s de la creaci\xf3n de la se\xf1al."]}),"\n",(0,r.jsxs)(n.p,{children:["Dado que el objeto signal es un objeto compartido, tambi\xe9n puede utilizarse para mantener propiedades de usuario, incluida la propiedad ",(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),", llamando a la estructura ",(0,r.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,r.jsxs)(n.p,{children:["Un nuevo objeto ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/API/SignalClass#signal-object",children:(0,r.jsx)(n.code,{children:"4D.Signal"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este es un ejemplo t\xedpico de un worker que fija una se\xf1al:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("Esta es mi primer signal")\n\n CALL WORKER("myworker"; "doSomething";$signal)\n $signaled:=$signal.wait(1) //espera 1 segundo m\xe1ximo\n\n If($signaled)\n    ALERT("myworker ha terminado el trabajo. Resultado: "+$signal.myresult)\n Else\n    ALERT("myworker no ha terminado en menos de 1s")\n End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"doSomething"})})," puede ser como:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //cualquier procesamiento\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //devuelve el resultado\n End use\n $signal.trigger() // El trabajo ha terminado\n"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1641"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var i=s(667294);let r={},d=i.createContext(r);function l(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);