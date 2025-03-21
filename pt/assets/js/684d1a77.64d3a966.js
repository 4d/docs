"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76826"],{941042:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/resume-process","title":"RESUME PROCESS","description":"RESUME PROCESS ( processo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resume-process.md","sourceDirName":"commands-legacy","slug":"/commands/resume-process","permalink":"/docs/pt/20-R7/commands/resume-process","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresume-process.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resume-process","title":"RESUME PROCESS","slug":"/commands/resume-process","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REGISTER CLIENT","permalink":"/docs/pt/20-R7/commands/register-client"},"next":{"title":"Session","permalink":"/docs/pt/20-R7/commands/session"}}'),o=n("785893"),t=n("250065");let d={id:"resume-process",title:"RESUME PROCESS",slug:"/commands/resume-process",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"RESUME PROCESS"})," ( ",(0,o.jsx)(s.em,{children:"processo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"processo"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de processo"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:["RESUME PROCESS reativa um ",(0,o.jsx)(s.em,{children:"processo"})," cuja execu\xe7\xe3o foi atrasada ou suspendida. Se ",(0,o.jsx)(s.em,{children:"processo"})," n\xe3o est\xe1 atrasado ou suspendido, RESUME PROCESS n\xe3o faz nada."]}),"\n",(0,o.jsxs)(s.p,{children:["Se ",(0,o.jsx)(s.em,{children:"processo"})," foi atrasado anteriormente, consulte os comandos ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/pause-process",title:"PAUSE PROCESS",children:"PAUSE PROCESS"})," ou ",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/delay-process",title:"DELAY PROCESS",children:"DELAY PROCESS"}),". Se ",(0,o.jsx)(s.em,{children:"processo"})," n\xe3o existe, o comando n\xe3o faz nada."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," n\xe3o pode utilizar este comando para adicionar um procedimento armazenado na m\xe1quina servidor de uma m\xe1quina cliente. (",(0,o.jsx)(s.em,{children:"processo"}),"<0)."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/delay-process",children:"DELAY PROCESS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/20-R7/commands/pause-process",children:"PAUSE PROCESS"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"320"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Proibido no servidor"}),(0,o.jsx)(s.td,{})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return d}});var r=n(667294);let o={},t=r.createContext(o);function d(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);