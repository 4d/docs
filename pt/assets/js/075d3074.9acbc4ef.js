"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43340"],{873646:function(e,o,s){s.r(o),s.d(o,{metadata:()=>n,contentTitle:()=>t,default:()=>p,assets:()=>d,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"commands-legacy/open-printing-job","title":"OPEN PRINTING JOB","description":"OPEN PRINTING JOB","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-printing-job.md","sourceDirName":"commands-legacy","slug":"/commands/open-printing-job","permalink":"/docs/pt/commands/open-printing-job","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-printing-job.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-printing-job","title":"OPEN PRINTING JOB","slug":"/commands/open-printing-job","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Level","permalink":"/docs/pt/commands/level"},"next":{"title":"PAGE BREAK","permalink":"/docs/pt/commands/page-break"}}'),r=s("785893"),a=s("250065");let i={id:"open-printing-job",title:"OPEN PRINTING JOB",slug:"/commands/open-printing-job",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){let o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"OPEN PRINTING JOB"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(o.table,{children:(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,r.jsx)(o.th,{})]})})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando OPEN PRINTING JOB abre uma tarefa de impress\xe3o e empilha todas as ordens de impress\xe3o executadas at\xe9 que se chame o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),'. Este comando lhe permite controlar os trabalhos de impress\xe3o e, mais particularmente, ter certeza que nenhuma tarefa de impress\xe3o "parasita" possa ser inserida em uma sequ\xeancia de impress\xe3o.']}),"\n",(0,r.jsx)(o.p,{children:"O comando OPEN PRINTING JOB pode ser utilizado com todos os comandos de impress\xe3o 4D, os comandos do editor de relat\xf3rios r\xe1pidos, e os comandos de impress\xe3o dos plug-ins 4D Write e 4D View."}),"\n",(0,r.jsx)(o.p,{children:"Quando um trabalho de impress\xe3o for local ao processo, cada processo tem suas proprias configura\xe7\xf5es de impress\xe3o (op\xe7\xf5es de impress\xe3o, impressora atual, etc). V\xe1rias impress\xf5es podem ser abertas ao mesmo tempo em 4D.."}),"\n",(0,r.jsxs)(o.p,{children:["Deve chamar ao comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," para determinar o trabalho de impress\xe3o e enviar o documento de impress\xe3o a impressora. Se omitir este comando, o documento de impress\xe3o permanecer\xe1 na pilha"]}),"\n",(0,r.jsxs)(o.p,{children:["OPEN PRINTING JOB utiliza os par\xe2metros de impress\xe3o atuais (par\xe2metros padr\xe3o ou definidos atrav\xe9s dos comandos ",(0,r.jsx)(o.em,{children:"_o_PAGE SETUP"})," ou ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"}),"). Os comandos que modificam os par\xe2metros de impress\xe3o devem ser chamados antes de OPEN PRINTING JOB. Do contr\xe1rio, um erro \xe9 gerado (excepci\xf3n: Orientation option pode ser chamado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})," dentro de um trabalho de impress\xe3o)."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota de compatibilidade:"})," A partir de 4D v20 R4, trabalhos de impress\xe3o n\xe3o bloqueiam nos novos projetos. Para saber mais veja ",(0,r.jsx)(o.a,{href:"https://developer.4d.com/docs/settings/compatibility/",children:"Non-blocking printing option"})," ."]}),"\n",(0,r.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(o.p,{children:"A vari\xe1vel sistema OK se estabelece em 1 se o trabalho de impress\xe3o foi aberto com sucesso. Sen\xe3o, leva o valor 0, por exemplo nos casos:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"se o trabalho tiver sido cancelado pelo usu\xe1rio"}),"\n",(0,r.jsx)(o.li,{children:"em Windows, o formato de vista pr\xe9via de impress\xe3o selecionado n\xe3o est\xe1 dispon\xedve"}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/commands/close-printing-job",children:"CLOSE PRINTING JOB"})})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return i}});var n=s(667294);let r={},a=n.createContext(r);function i(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);