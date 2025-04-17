"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93628"],{239719:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/current-time","title":"Current time","description":"Current time {( * )} : Time","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/current-time.md","sourceDirName":"commands-legacy","slug":"/commands/current-time","permalink":"/docs/es/20-R8/commands/current-time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-time.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-time","title":"Current time","slug":"/commands/current-time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current date","permalink":"/docs/es/20-R8/commands/current-date"},"next":{"title":"Date","permalink":"/docs/es/20-R8/commands/date"}}'),i=r("785893"),s=r("250065");let d={id:"current-time",title:"Current time",slug:"/commands/current-time",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Current time"})," {( * )} : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Devuelve la hora actual del servidor"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Time"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Hora actual"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El comando Current time devuelve la hora actual del reloj de sistema."}),"\n",(0,i.jsxs)(n.p,{children:["La hora actual siempre est\xe1 entre ",(0,i.jsx)(n.em,{children:"00:00:00"})," y ",(0,i.jsx)(n.em,{children:"23:59:59"}),". Utilice ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/string",title:"String",children:"String"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/time-string",title:"Time string",children:"Time string"})," para convertir en cadena la expresi\xf3n de tipo hora devuelta por Current time."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server:"})," si utiliza el par\xe1metro (*) cuando ejecuta esta funci\xf3n en un equipo 4D Client, la funci\xf3n devuelve la hora actual del servidor."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo le muestra c\xf3mo medir la duraci\xf3n de una operaci\xf3n. Ac\xe1, LongOperation es un m\xe9todo que necesita ser cronometrado:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time\xa0//Guardar la hora de inicio, segundos despu\xe9s de 1.1.1980\n\xa0LongOperation\xa0//Realizar la operaci\xf3n\n\xa0$vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time\n\xa0ALERT("The operation took "+String($vhEndTime-$vhStartTime)+" seconds.")\xa0//Mostrar la duraci\xf3n de la operaci\xf3n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo extrae las horas, minutos y segundos de la hora actual:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$vhAhora:=Current time\n\xa0ALERT("La hora actual es: "+String($vhAhora\\3600))\n\xa0ALERT("El minuto actual es: "+String(($vhAhora\\60)%60))\n\xa0ALERT("El segundo actual es: "+String($vhAhora%60))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/milliseconds",children:"Milliseconds"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/string",children:"String"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/tickcount",children:"Tickcount"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"178"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);