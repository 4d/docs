"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75832"],{729581:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>t,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/kill-worker","title":"KILL WORKER","description":"KILL WORKER {( processo )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/kill-worker.md","sourceDirName":"commands-legacy","slug":"/commands/kill-worker","permalink":"/docs/pt/20-R7/commands/kill-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fkill-worker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"kill-worker","title":"KILL WORKER","slug":"/commands/kill-worker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PROCESS VARIABLE","permalink":"/docs/pt/20-R7/commands/get-process-variable"},"next":{"title":"New signal","permalink":"/docs/pt/20-R7/commands/new-signal"}}'),s=n("785893"),a=n("250065");let d={id:"kill-worker",title:"KILL WORKER",slug:"/commands/kill-worker",displayed_sidebar:"docs"},c=void 0,i={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"KILL WORKER"})," {( ",(0,s.jsx)(r.em,{children:"processo"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"processo"}),(0,s.jsx)(r.td,{children:"Text, Integer"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"N\xfamero ou nome de processo a terminar (terminar processo atual se omitido)"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando ",(0,s.jsx)(r.strong,{children:"KILL WORKER"})," envia uma mensagem ao processo worker cujo nome ou n\xfamero que passa em ",(0,s.jsx)(r.em,{children:"processo"}),", pedindo ignorar as mensagens pendentes e por fim a sua execu\xe7\xe3o logo que terminem as tarefas atuais."]}),"\n",(0,s.jsxs)(r.p,{children:["Este comando s\xf3 pode ser utilizado com os processos worker. Para saber mais, por favor consulte a se\xe7\xe3o ",(0,s.jsx)(r.em,{children:"Sobre Workers"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Em ",(0,s.jsx)(r.em,{children:"processo"}),", se passa o nome ou o n\xfamero do processo worker cuja execu\xe7\xe3o deve ser terminado. Se n\xe3o existir nenhum worker com o nome ou o n\xfamero de processo especificado, ",(0,s.jsx)(r.strong,{children:"KILL WORKER"})," n\xe3o faz nada."]}),"\n",(0,s.jsxs)(r.p,{children:["Se n\xe3o passar nenhum par\xe2metro, ",(0,s.jsx)(r.strong,{children:"KILL WORKER"})," aplica aos processos worker atualmente em execu\xe7\xe3o e portanto \xe9 equivalente a ",(0,s.jsxs)(r.em,{children:[(0,s.jsx)(r.em,{children:"KILL WORKER"})," (Current process)"]}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Se ",(0,s.jsx)(r.strong,{children:"KILL WORKER"})," for aplicado a um worker que n\xe3o foi criado expl\xedcitamente utilizando o comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/call-worker",children:"CALL WORKER"})," (por exemplo, o proceso worker principal da aplica\xe7\xe3o), s\xf3 pede a este trabalhador esvaziar sua caixa de mensagens. Em consequ\xeancia, ",(0,s.jsxs)(r.em,{children:[(0,s.jsx)(r.em,{children:"KILL WORKER"})," (1)"]})," n\xe3o faz nada."]}),"\n",(0,s.jsxs)(r.p,{children:["Se chamar ao comando ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/call-worker",children:"CALL WORKER"})," para enviar uma mensagem a um worker que acaba de ser finalizado por ",(0,s.jsx)(r.strong,{children:"KILL WORKER"}),", um novo processo \xe9 iniciado. Para ter certeza de que s\xf3 h\xe1 um processo que se executa por vez para um trabalhador, o novo processo se iniciar\xe1 assim que o anterior tenha finalizado. Entrentato, lembre que se ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/call-worker",children:"CALL WORKER"})," for chamado por um worker para ser enviada uma mensagem, enquanto acaba de ser eliminado por ",(0,s.jsx)(r.strong,{children:"KILL WORKER"}),", o comando n\xe3o faz nada."]}),"\n",(0,s.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:"O comando abaixo (executado desde um formul\xe1rio, por exemplo) dar\xe1 lugar a termina\xe7ao do trabajador:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0CALL WORKER(vWorkerName;"theWorker";"end")\n'})}),"\n",(0,s.jsxs)(r.p,{children:["No m\xe9todo (",(0,s.jsx)(r.em,{children:"theWorker"}),"), adicionou c\xf3digo para manejar esta situa\xe7ao:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0//m\xe9todo theWorker\n\xa0var $1 : Text\xa0//param\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1="call")\xa0//se chama ao worker\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//fazer algo\n\xa0\xa0\xa0\xa0:($1="end")\xa0// pede ao worker se suicidar\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0KILL WORKER\n\xa0End case\n'})}),"\n",(0,s.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/call-worker",children:"CALL WORKER"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/current-process-name",children:"Current process name"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Sobre Workers"})]}),"\n",(0,s.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"1390"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var o=n(667294);let s={},a=o.createContext(s);function d(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);