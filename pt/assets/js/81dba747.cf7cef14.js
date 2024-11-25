"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68718"],{843081:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>t,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/new-log-file","title":"New log file","description":"New log file  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/new-log-file","permalink":"/docs/pt/commands/new-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-log-file","title":"New log file","slug":"/commands/new-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOG FILE TO JSON","permalink":"/docs/pt/commands/log-file-to-json"},"next":{"title":"RESTORE","permalink":"/docs/pt/commands/restore"}}'),r=n("785893"),a=n("250065");let i={id:"new-log-file",title:"New log file",slug:"/commands/new-log-file",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"New log file"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Endere\xe7o de acesso completo do arquivo de hist\xf3rico fechado"})]})})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota preliminar:"})," este comando s\xf3 funciona com 4D Server. S\xf3 \xe9 poss\xedvel ser executado atrav\xe9s do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/execute-on-server",children:"Execute on server"})," ou em um procedimento armazenado."]}),"\n",(0,r.jsxs)(o.p,{children:["O comando New log file data ou arquivo de hist\xf3rico atual, lhe d\xe1 outro nome e cria um novo com o mesmo nome na mesma localiza\xe7\xe3o do anterior. Este comando \xe9 para definir um sistema de backup por espelho l\xf3gico. (ver a se\xe7\xe3o \u201C",(0,r.jsx)(o.em,{children:"Configurar um espelho l\xf3gico"}),"\u201D no Manual de 4D Server)."]}),"\n",(0,r.jsx)(o.p,{children:"O comando retorna a rota de acesso completa (rota de acesso + nome) do arquivo de hist\xf3rico fechado (chamado \u201Csegmento\u201D). Este arquivo \xe9 salvo na mesma localiza\xe7\xe3o do arquivo de hist\xf3rico atual (especificada na p\xe1gina Configura\xe7\xe3o no tema C\xf3pia de seguran\xe7a das Prefer\xeancias). O comando n\xe3o realiza nenhum processo (compress\xe3o, segmenta\xe7\xe3o) no arquivo salvo. N\xe3o aparece nenhuma caixa de di\xe1logo."}),"\n",(0,r.jsxs)(o.p,{children:["O arquivo \xe9 renomeado com os n\xfameros de backups atuais do banco de dados e o arquivo de hist\xf3rico, como se mostra no exemplo a seguir: ",(0,r.jsx)(o.em,{children:"NomeBanco[BackupNum-LogBackupNum].4DL"}),". Por exemplo:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Se o banco de dados MeuBanco.4DD foi salvo 4 vezes, o \xfaltimo arquivo de backup se chamar\xe1 ",(0,r.jsx)(o.em,{children:"MeuBanco[0004].4BK"}),". O nome do primeiro \u201Csegmento\u201D do arquivo de hist\xf3rico ser\xe1, portanto ",(0,r.jsx)(o.em,{children:"MeuBanco[0004-0001].journal"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Se o banco de dados MeuBanco.4DD foi salvo 3 vezes e o arquivo de hist\xf3rico foi salvo 5 vezes, o nome do sexto backup do arquivo de hist\xf3rico ser\xe1 ",(0,r.jsx)(o.em,{children:"MeuBanco[0003-0006].journal"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,r.jsxs)(o.p,{children:["Caso se apresente um erro, o comando gera um c\xf3digo que pode ser interceptado utilizando o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"_o_INTEGRATE LOG FILE"})})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return t},a:function(){return i}});var s=n(667294);let r={},a=s.createContext(r);function i(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);