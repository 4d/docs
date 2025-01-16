"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17929"],{101431:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands/process-info","title":"Process info","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/process-info.md","sourceDirName":"commands","slug":"/commands/process-info","permalink":"/docs/es/20-R7/commands/process-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-info","title":"Process info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process activity","permalink":"/docs/es/20-R7/commands/process-activity"},"next":{"title":"Process number","permalink":"/docs/es/20-R7/commands/process-number"}}'),d=s("785893"),t=s("250065");let i={id:"process-info",title:"Process info",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function h(n){let e={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.details,{children:[(0,d.jsx)(e.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Lanzamiento"}),(0,d.jsx)(e.th,{children:"Modificaciones"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"20 R7"}),(0,d.jsx)(e.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Process info"})," ( ",(0,d.jsx)(e.em,{children:"processNumber"})," : Integer ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Par\xe1metros"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{style:{textAlign:"center"}}),(0,d.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"processNumber"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2192"}),(0,d.jsx)(e.td,{children:"Process number"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Result"}),(0,d.jsx)(e.td,{children:"Object"}),(0,d.jsx)(e.td,{style:{textAlign:"center"},children:"\u2190"}),(0,d.jsx)(e.td,{children:"Information about the process"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(e.p,{children:["El comando ",(0,d.jsx)(e.code,{children:"Process info"})," devuelve un objeto que da informaci\xf3n detallada sobre el proceso cuyo n\xfamero se pasa en ",(0,d.jsx)(e.em,{children:"processNumber"}),". Si pasa un n\xfamero de proceso incorrecto, el comando devuelve un objeto null."]}),"\n",(0,d.jsx)(e.p,{children:"El objeto devuelto contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Propiedad"}),(0,d.jsx)(e.th,{children:"Tipo"}),(0,d.jsx)(e.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cpuTime"}),(0,d.jsx)(e.td,{children:"Real"}),(0,d.jsx)(e.td,{children:"Tiempo en ejecuci\xf3n (segundos)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"cpuUsage"}),(0,d.jsx)(e.td,{children:"Real"}),(0,d.jsx)(e.td,{children:"Porcentaje de tiempo dedicado a este proceso (entre 0 y 1)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"creationDateTime"}),(0,d.jsx)(e.td,{children:"Text (Date ISO 8601)"}),(0,d.jsx)(e.td,{children:"Fecha y hora de creaci\xf3n del proceso"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ID"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"ID \xfanico del proceso"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"name"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"Nombre del proceso"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"number"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"Process number"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"apropiativo"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"True si se ejecuta de forma apropiativa, false en caso contrario"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sessionID"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"Session UUID"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"state"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"Estado actual. Valores posibles: ver abajo"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"systemID"}),(0,d.jsx)(e.td,{children:"Text"}),(0,d.jsx)(e.td,{children:"ID del proceso de usuario, proceso 4D o proceso de reserva"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"type"}),(0,d.jsx)(e.td,{children:"Integer"}),(0,d.jsx)(e.td,{children:"Tipo de proceso en ejecuci\xf3n. Valores posibles: ver abajo"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"visible"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"True si es visible, false en caso contrario"})]})]})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:'Valores posibles para "state":'}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Valor"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Does not exist"}),(0,d.jsx)(e.td,{children:"-100"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Aborted"}),(0,d.jsx)(e.td,{children:"-1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Executing"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Delayed"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Waiting for user event"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Waiting for input output"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Waiting for internal flag"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Paused"}),(0,d.jsx)(e.td,{children:"5"})]})]})]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:'Possible values for "type":'}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Constante"}),(0,d.jsx)(e.th,{children:"Valor"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Apple event manager"}),(0,d.jsx)(e.td,{children:"-7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Backup process"}),(0,d.jsx)(e.td,{children:"-19"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Cache manager"}),(0,d.jsx)(e.td,{children:"-4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Client manager process"}),(0,d.jsx)(e.td,{children:"-31"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Compiler process"}),(0,d.jsx)(e.td,{children:"-29"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Created from execution dialog"}),(0,d.jsx)(e.td,{children:"3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Created from menu command"}),(0,d.jsx)(e.td,{children:"2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Cron"}),(0,d.jsx)(e.td,{children:"-49"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Flush cache"}),(0,d.jsx)(e.td,{children:"-46"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Garbage collector"}),(0,d.jsx)(e.td,{children:"-47"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Index builder"}),(0,d.jsx)(e.td,{children:"-45"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Listener"}),(0,d.jsx)(e.td,{children:"-51"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Mirror"}),(0,d.jsx)(e.td,{children:"-50"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"DB4D Worker pool user"}),(0,d.jsx)(e.td,{children:"-48"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Design process"}),(0,d.jsx)(e.td,{children:"-2"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Event manager"}),(0,d.jsx)(e.td,{children:"-8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Execute on client process"}),(0,d.jsx)(e.td,{children:"-14"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Execute on server process"}),(0,d.jsx)(e.td,{children:"1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"External task"}),(0,d.jsx)(e.td,{children:"-9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP Listener"}),(0,d.jsx)(e.td,{children:"-56"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP Log flusher"}),(0,d.jsx)(e.td,{children:"-58"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"HTTP Worker pool server"}),(0,d.jsx)(e.td,{children:"-55"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Indexing process"}),(0,d.jsx)(e.td,{children:"-5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Internal 4D server process"}),(0,d.jsx)(e.td,{children:"-18"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Internal timer process"}),(0,d.jsx)(e.td,{children:"-25"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Log file process"}),(0,d.jsx)(e.td,{children:"-20"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Logger process"}),(0,d.jsx)(e.td,{children:"-57"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Main 4D process"}),(0,d.jsx)(e.td,{children:"-39"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Main process"}),(0,d.jsx)(e.td,{children:"-1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Method editor macro process"}),(0,d.jsx)(e.td,{children:"-17"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Monitor process"}),(0,d.jsx)(e.td,{children:"-26"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"MSC process"}),(0,d.jsx)(e.td,{children:"-22"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Ninguno"}),(0,d.jsx)(e.td,{children:"0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On exit process"}),(0,d.jsx)(e.td,{children:"-16"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Other 4D process"}),(0,d.jsx)(e.td,{children:"-10"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Other internal process"}),(0,d.jsx)(e.td,{children:"-40"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Other user process"}),(0,d.jsx)(e.td,{children:"4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Restore Process"}),(0,d.jsx)(e.td,{children:"-21"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Serial Port Manager"}),(0,d.jsx)(e.td,{children:"-6"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Server interface process"}),(0,d.jsx)(e.td,{children:"-15"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ServerNet Listener"}),(0,d.jsx)(e.td,{children:"-43"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"ServerNet Session manager"}),(0,d.jsx)(e.td,{children:"-44"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SOAP process"}),(0,d.jsx)(e.td,{children:"-33"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SQL Listener"}),(0,d.jsx)(e.td,{children:"-54"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SQL Method execution process"}),(0,d.jsx)(e.td,{children:"-24"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SQL Net Session manager"}),(0,d.jsx)(e.td,{children:"-53"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"SQL Worker pool server"}),(0,d.jsx)(e.td,{children:"-52"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Web process on 4D remote"}),(0,d.jsx)(e.td,{children:"-12"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Web process with no context"}),(0,d.jsx)(e.td,{children:"-3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Web server process"}),(0,d.jsx)(e.td,{children:"-13"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Web server spare process"}),(0,d.jsx)(e.td,{children:"-32"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Worker pool in use"}),(0,d.jsx)(e.td,{children:"-41"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Worker pool spare"}),(0,d.jsx)(e.td,{children:"-42"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Worker process"}),(0,d.jsx)(e.td,{children:"5"})]})]})]}),"\n",(0,d.jsx)(e.admonition,{type:"note",children:(0,d.jsx)(e.p,{children:"Los procesos internos de 4D tienen un valor de tipo negativo y los procesos generados por el usuario tienen un valor positivo. Los procesos worker lanzados por el usuario son de tipo 5."})}),"\n",(0,d.jsx)(e.p,{children:"He aqu\xed un ejemplo de objeto de salida:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-json",children:'\n{\n    "number": 4,\n    "name": "Application process",\n    "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",\n    "ID": 4,\n    "visible": true,\n    "type": -18,\n    "state": 0,\n    "creationDateTime": "2024-09-22T12:46:39.787Z",\n    "preemptive": false,\n    "systemID": "123145476132864",\n    "cpuUsage": 0,\n    "cpuTime": 0.006769\n}\n\n'})}),"\n",(0,d.jsx)(e.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(e.p,{children:"Quiere saber si el proceso es apropiativo:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\nvar $preemptive : Boolean\n$preemptive:=Process info(Current process).preemptive\n\n\n"})}),"\n",(0,d.jsx)(e.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/es/20-R7/commands/count-tasks",children:"Count tasks"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/commands/process-activity",children:"Process activity"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/commands/process-state",children:"Process state"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/es/20-R7/commands/session-info",children:"Session info"})]})]})}function x(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);