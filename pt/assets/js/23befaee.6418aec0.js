"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70538"],{321544:function(e,o,r){r.r(o),r.d(o,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/select-log-file","title":"SELECT LOG FILE","description":"SELECT LOG FILE ( historico )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/select-log-file.md","sourceDirName":"commands-legacy","slug":"/commands/select-log-file","permalink":"/docs/pt/commands/select-log-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fselect-log-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"select-log-file","title":"SELECT LOG FILE","slug":"/commands/select-log-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE INFO","permalink":"/docs/pt/commands/restore-info"},"next":{"title":"BLOB","permalink":"/docs/pt/category/blob"}}'),n=r("785893"),i=r("250065");let d={id:"select-log-file",title:"SELECT LOG FILE",slug:"/commands/select-log-file",displayed_sidebar:"docs"},a=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"SELECT LOG FILE"})," ( ",(0,n.jsx)(o.em,{children:"historico"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"historico"}),(0,n.jsx)(o.td,{children:"*, Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome do arquivo de hist\xf3rico ou * para fechar o hist\xf3rico atual"})]})})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"SELECT LOG FILE"})," cria, ou fecha o arquivo de hist\xf3rico de acordo com o valor que se passe em ",(0,n.jsx)(o.em,{children:"historico"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Passe em ",(0,n.jsx)(o.em,{children:"historico"}),", o nome ou a rota de acesso completa do arquivo de hist\xf3rico a criar. Se voc\xea passa somente um nome, o arquivo ser\xe1 criado junto ao arquivo de estrutura do banco de dados."]}),"\n",(0,n.jsxs)(o.p,{children:["Se voc\xea passa uma cadeia vazia em ",(0,n.jsx)(o.em,{children:"historico"}),", ",(0,n.jsx)(o.strong,{children:"SELECT LOG FILE"})," apresenta uma caixa de di\xe1logo padr\xe3o de registro de arquivo, permitindo ao usu\xe1rio escolher o nome e a localiza\xe7\xe3o do arquivo de hist\xf3rico a criar. Se o arquivo \xe9 criado corretamente, a vari\xe1vel OK toma o valor 1. Pelo contr\xe1rio, se o usu\xe1rio clica no bot\xe3o Cancelar ou se o arquivo de hist\xf3rico n\xe3o pode ser criado, OK toma o valor 0."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," o novo arquivo de hist\xf3rico n\xe3o \xe9 gerado de imediato depois da execu\xe7\xe3o do comando, mas sim depois do backup seguinte (o par\xe2metro \xe9 conservado no arquivo de dados e ser\xe1 levado em conta inclusive se o banco de dados \xe9 fechado). \xc9 poss\xedvel chamar o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/backup",children:"BACKUP"})," para provocar a cria\xe7\xe3o do arquivo de hist\xf3rico."]}),"\n",(0,n.jsxs)(o.p,{children:["Se voc\xea passa ",(0,n.jsx)(o.em,{children:'"*"'})," em ",(0,n.jsx)(o.em,{children:"historico"}),", ",(0,n.jsx)(o.strong,{children:"SELECT LOG FILE"})," fecha o arquivo de hist\xf3rico atual do banco de dados. A vari\xe1vel OK toma o valor 1 quando o arquivo de hist\xf3rico est\xe1 fechado."]}),"\n",(0,n.jsxs)(o.p,{children:["Se voc\xea utiliza ",(0,n.jsx)(o.strong,{children:"SELECT LOG FILE"})," para criar um arquivo de hist\xf3rico antes que o backup tenha terminado e o arquivo de dados j\xe1 contenha registros, 4D gera o erro ",(0,n.jsx)(o.em,{children:"-4447,"})," o qual pode ser interceptado com um m\xe9todo ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"OK recebe o valor 1 se o arquivo de hist\xf3rico \xe9 criado ou fechado corretamente."}),"\n",(0,n.jsx)(o.h4,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,n.jsxs)(o.p,{children:["\xc9 gerado o erro -4447 se n\xe3o for poss\xedvel realizar a opera\xe7\xe3o porque o banco de dados necessita uma c\xf3pia de seguran\xe7a. \xc9 poss\xedvel interceptar o erro com um m\xe9todo ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"345"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(o.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return a},a:function(){return d}});var s=r(667294);let n={},i=s.createContext(n);function d(e){let o=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);