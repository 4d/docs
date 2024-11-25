"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57175"],{199592:function(e,s,o){o.r(s),o.d(s,{metadata:()=>n,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>c});var n=JSON.parse('{"id":"commands-legacy/pause-process","title":"PAUSE PROCESS","description":"PAUSE PROCESS ( processo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/pause-process.md","sourceDirName":"commands-legacy","slug":"/commands/pause-process","permalink":"/docs/pt/commands/pause-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpause-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"pause-process","title":"PAUSE PROCESS","slug":"/commands/pause-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New process","permalink":"/docs/pt/commands/new-process"},"next":{"title":"Process aborted","permalink":"/docs/pt/commands/process-aborted"}}'),r=o("785893"),t=o("250065");let c={id:"pause-process",title:"PAUSE PROCESS",slug:"/commands/pause-process",displayed_sidebar:"docs"},d=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function p(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"PAUSE PROCESS"})," ( ",(0,r.jsx)(s.em,{children:"processo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"processo"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de processo"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["PAUSE PROCESS suspende a execu\xe7\xe3o de ",(0,r.jsx)(s.em,{children:"processo"})," at\xe9 que seja reativada pelo comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"}),". Durante este per\xedodo, ",(0,r.jsx)(s.em,{children:"processo"})," n\xe3o toma tempo em sua m\xe1quina. Ainda que um processo esteja suspendido, o processo ainda est\xe1 em mem\xf3ria."]}),"\n",(0,r.jsxs)(s.p,{children:["Se ",(0,r.jsx)(s.em,{children:"processo"})," j\xe1 est\xe1 suspendido, PAUSE PROCESS n\xe3o faz nada. Se o processo h\xe1 sido retrasado utilizando o comando ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/delay-process",title:"DELAY PROCESS",children:"DELAY PROCESS"}),", se suspende o processo. \xc9 recebida a ordem ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/resume-process",title:"RESUME PROCESS",children:"RESUME PROCESS"})," retoma o processo imediatamente."]}),"\n",(0,r.jsxs)(s.p,{children:["Quando se suspende a execu\xe7\xe3o de um processo, as janelas que pertencem a este processo n\xe3o s\xe3o edit\xe1veis. Neste caso, para evitar confundir ao usu\xe1rio, considere ocultar o processo. Se ",(0,r.jsx)(s.em,{children:"processo"})," n\xe3o existe, o comando n\xe3o faz nada."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Advert\xeancia:"})," utilize PAUSE PROCESS unicamente com processos que voc\xea haja criado. PAUSE PROCESS n\xe3o tem nenhum efeito no processo principal."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," n\xe3o pode utilizar este comando para atribuir um procedimento armazenado na m\xe1quina servidor de uma m\xe1quina cliente. (",(0,r.jsx)(s.em,{children:"processo"}),"<0)."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/abort-process-by-id",children:"ABORT PROCESS BY ID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/delay-process",children:"DELAY PROCESS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/hide-process",children:"HIDE PROCESS"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/resume-process",children:"RESUME PROCESS"})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return d},a:function(){return c}});var n=o(667294);let r={},t=n.createContext(r);function c(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);