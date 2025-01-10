"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14309"],{851472:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/delay-process","title":"DELAY PROCESS","description":"DELAY PROCESS ( processo ; dura\xe7ao )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delay-process.md","sourceDirName":"commands-legacy","slug":"/commands/delay-process","permalink":"/docs/pt/commands/delay-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelay-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delay-process","title":"DELAY PROCESS","slug":"/commands/delay-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current process name","permalink":"/docs/pt/commands/current-process-name"},"next":{"title":"EXECUTE ON CLIENT","permalink":"/docs/pt/commands/execute-on-client"}}'),o=n("785893"),d=n("250065");let t={id:"delay-process",title:"DELAY PROCESS",slug:"/commands/delay-process",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"DELAY PROCESS"})," ( ",(0,o.jsx)(s.em,{children:"processo"})," ; ",(0,o.jsx)(s.em,{children:"dura\xe7ao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"processo"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de processo"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"dura\xe7ao"}),(0,o.jsx)(s.td,{children:"Real"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Dura\xe7\xe3o expressada em ticks"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["DELAY PROCESS permite atrasar um ",(0,o.jsx)(s.em,{children:"processo"})," por um n\xfamero de ticks (1 tick = 1/60 de segundo). Durante este per\xedodo, o ",(0,o.jsx)(s.em,{children:"processo"})," atrasado n\xe3o utiliza tempo de processamento. Ainda que a execu\xe7\xe3o de um processo pode ser retardada, ainda est\xe1 em mem\xf3ria."]}),"\n",(0,o.jsx)(s.p,{children:"Pode atrasar um processo por menos de um tick. Por exemplo, se passar 0.5 em dura\xe7\xe3o, o processo ser\xe1 atrasado por 1/2 tick, ou seja 1/120 de segundo."}),"\n",(0,o.jsxs)(s.p,{children:["Se o processo j\xe1 est\xe1 atrasado, este comando o atrasa novamente. O par\xe2metro ",(0,o.jsx)(s.em,{children:"dura\xe7ao"})," n\xe3o \xe9 adicionado ao tempo que falta, mas o substitui. Portanto passe zero (0) em ",(0,o.jsx)(s.em,{children:"dura\xe7ao"})," caso n\xe3o queira atrasar o processo."]}),"\n",(0,o.jsx)(s.p,{children:"Se o processo n\xe3o existe, o comando n\xe3o faz nada."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," n\xe3o pode utilizar este comando para atribuir um procedimento armazenado no equipo servidor de um equipo cliente (",(0,o.jsx)(s.em,{children:"processo"}),"<0)."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(s.p,{children:["Ver os exemplos em ",(0,o.jsx)(s.em,{children:"Record Locking"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsxs)(s.p,{children:["Ver o exemplo do comando ",(0,o.jsx)(s.a,{href:"process-number.md",children:"Process number"}),"."]}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/hide-process",children:"HIDE PROCESS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/pause-process",children:"PAUSE PROCESS"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"323"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var r=n(667294);let o={},d=r.createContext(o);function t(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);