"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10293"],{95078:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/process-state","title":"Process state","description":"Process state ( processo ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/process-state.md","sourceDirName":"commands-legacy","slug":"/commands/process-state","permalink":"/docs/pt/commands/process-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprocess-state.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"process-state","title":"Process state","slug":"/commands/process-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process number","permalink":"/docs/pt/commands/process-number"},"next":{"title":"REGISTER CLIENT","permalink":"/docs/pt/commands/register-client"}}'),r=s("785893"),o=s("250065");let d={id:"process-state",title:"Process state",slug:"/commands/process-state",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Process state"})," ( ",(0,r.jsx)(n.em,{children:"processo"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de processo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Estado do processo"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando Process state devolve o estado do processo cujo n\xfamero foi passado em ",(0,r.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"O resultado da fun\xe7\xe3o pode ser um dos valores das seguintes constantes predefinidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Does not exist"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-100"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aborted"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Executing"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Delayed"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for user event"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for input output"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Waiting for internal flag"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Paused"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_Hidden modal dialog"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Compatibilidad"}),"e: este estado de processo j\xe1 n\xe3o existe a partir de 4D v16. O comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/process-info",children:"Process info"})," ",(0,r.jsx)(n.br,{}),"devolve um estado equivalente quando ",(0,r.jsx)(n.em,{children:"procState"}),"=Waiting for user event e ",(0,r.jsx)(n.em,{children:"procMode"}),"=False."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Se o processo n\xe3o existe (o qual significa que n\xe3o passou um n\xfamero no intervalo de 1 a ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/count-tasks",title:"Count tasks",children:"Count tasks"}),"), Process state devolve Does not exist (-100)."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["O seguinte exemplo coloca o nome e n\xfamero de referencia para cada processo nos arrays ",(0,r.jsx)(n.em,{children:"asProcNome"})," e ",(0,r.jsx)(n.em,{children:"aiProcNum"}),"e. O m\xe9todo prova se o processo tem sido abortado. Neste caso, o nome e o n\xfamero do processo n\xe3o s\xe3o adicionados aos arrays:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlNbTareas:=Count tasks\n\xa0ARRAY TEXT(asProcNome;$vlNbTarfeas)\n\xa0ARRAY INTEGER(aiProcNume;$vlNbTarefas)\n\xa0$vlAtualCont:=0\n\xa0For($vlProcess;1;$vlNbTarefas)\n\xa0\xa0\xa0\xa0If(Process state($vlProcess)>=Executing)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlAtualCont:=$vlAtualCont+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PROCESS PROPERTIES($vlProcess;asProcNome{$vlAtualCont};$vlEstado;$vlHora)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0aiProcNume{$vlAtualCont}:=$vlProcess\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0\xa0// Eliminar os elementos extras sup\xe9rfluo\n\xa0ARRAY TEXT(asProcNome;$vlAtualCont)\n\xa0ARRAY INTEGER(aiProcNume;$vlAtualCont)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/count-tasks",children:"Count tasks"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/process-info",children:"Process info"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"330"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);