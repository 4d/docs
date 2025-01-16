"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57175"],{199592:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/pause-process","title":"PAUSE PROCESS","description":"PAUSE PROCESS ( processo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pause-process.md","sourceDirName":"commands-legacy","slug":"/commands/pause-process","permalink":"/docs/pt/20-R7/commands/pause-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpause-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pause-process","title":"PAUSE PROCESS","slug":"/commands/pause-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New process","permalink":"/docs/pt/20-R7/commands/new-process"},"next":{"title":"Process aborted","permalink":"/docs/pt/20-R7/commands/process-aborted"}}'),r=n("785893"),d=n("250065");let t={id:"pause-process",title:"PAUSE PROCESS",slug:"/commands/pause-process",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"PAUSE PROCESS"})," ( ",(0,r.jsx)(s.em,{children:"processo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"processo"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de processo"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["PAUSE PROCESS suspende a execu\xe7\xe3o de ",(0,r.jsx)(s.em,{children:"processo"})," at\xe9 que seja reativada pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"}),". Durante este per\xedodo, ",(0,r.jsx)(s.em,{children:"processo"})," n\xe3o toma tempo em sua m\xe1quina. Ainda que um processo esteja suspendido, o processo ainda est\xe1 em mem\xf3ria."]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"processo"})," j\xe1 est\xe1 suspendido, PAUSE PROCESS n\xe3o faz nada. Se o processo h\xe1 sido retrasado utilizando o comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/delay-process",title:"DELAY PROCESS",children:"DELAY PROCESS"}),", se suspende o processo. \xc9 recebida a ordem ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"})," retoma o processo imediatamente."]}),"\n",(0,r.jsxs)(s.p,{children:["Quando se suspende a execu\xe7\xe3o de um processo, as janelas que pertencem a este processo n\xe3o s\xe3o edit\xe1veis. Neste caso, para evitar confundir ao usu\xe1rio, considere ocultar o processo. Se ",(0,r.jsx)(s.em,{children:"processo"})," n\xe3o existe, o comando n\xe3o faz nada."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Advert\xeancia:"})," utilize PAUSE PROCESS unicamente com processos que voc\xea haja criado. PAUSE PROCESS n\xe3o tem nenhum efeito no processo principal."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," n\xe3o pode utilizar este comando para atribuir um procedimento armazenado na m\xe1quina servidor de uma m\xe1quina cliente. (",(0,r.jsx)(s.em,{children:"processo"}),"<0)."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/abort-process-by-id",children:"ABORT PROCESS BY ID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/delay-process",children:"DELAY PROCESS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/hide-process",children:"HIDE PROCESS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/resume-process",children:"RESUME PROCESS"})]}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"319"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return t}});var o=n(667294);let r={},d=o.createContext(r);function t(e){let s=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(d.Provider,{value:s},e.children)}}}]);