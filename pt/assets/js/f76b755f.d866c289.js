"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41614"],{534024:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/apply-to-selection","title":"APPLY TO SELECTION","description":"APPLY TO SELECTION ( tabela ; formula )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/apply-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/apply-to-selection","permalink":"/docs/pt/commands/apply-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fapply-to-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"apply-to-selection","title":"APPLY TO SELECTION","slug":"/commands/apply-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ALL RECORDS","permalink":"/docs/pt/commands/all-records"},"next":{"title":"Before selection","permalink":"/docs/pt/commands/before-selection"}}'),n=s("785893"),a=s("250065");let d={id:"apply-to-selection",title:"APPLY TO SELECTION",slug:"/commands/apply-to-selection",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"APPLY TO SELECTION"})," ( ",(0,n.jsx)(o.em,{children:"tabela"})," ; ",(0,n.jsx)(o.em,{children:"formula"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela na qual vai aplicar a f\xf3rmula ou Tabela por padr\xe3o, se omitida"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"formula"}),(0,n.jsx)(o.td,{children:"Expression"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Uma linha de c\xf3digo ou um m\xe9todo"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["APPLY TO SELECTION aplica ",(0,n.jsx)(o.em,{children:"formula"})," a cada registro da sele\xe7\xe3o atual de tabela. A ",(0,n.jsx)(o.em,{children:"f\xf3rmula"})," pode ser uma linha de instru\xe7\xf5es ou um m\xe9todo. Se ",(0,n.jsx)(o.em,{children:"formula"})," modifica um registro de tabela, o registro modificado \xe9 salvado. Se f\xf3rmula n\xe3o modifica um registro, o registro n\xe3o \xe9 salvado. Se a sele\xe7\xe3o atual estiver vazia, APPLY TO SELECTION n\xe3o tem efeito. Se a rela\xe7\xe3o for autom\xe1tica, a f\xf3rmula pode conter um campo de uma tabela relacionada."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Aviso:"})," Par\xe2metros ($1...$n) n\xe3o s\xe3o aceitos em ",(0,n.jsx)(o.em,{children:"formula"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"APPLY TO SELECTION pode ser utilizado para reunir informa\xe7\xe3o da sele\xe7\xe3o de registros (por exemplo, c\xe1lculo de um total), ou para modificar uma sele\xe7\xe3o (por exemplo, passando a mai\xfascula a primeira letra de um campo). Se este comando for utilizado dentro de uma transa\xe7\xe3o, todas as mudan\xe7as podem ser desfeitas se a transa\xe7\xe3o for cancelada."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"4D Server"}),": o servidor n\xe3o executa nenhum dos comandos que s\xe3o passados em ",(0,n.jsx)(o.em,{children:"formula"}),". Cada registro da sele\xe7\xe3o ser\xe1 enviado a m\xe1quina cliente para ser modificada."]}),"\n",(0,n.jsxs)(o.p,{children:["Um term\xf4metro de progress\xe3o \xe9 mostrado enquanto \xe9 executado APPLY TO SELECTION. Para ocult\xe1-lo, utilize ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/messages-off",children:"MESSAGES OFF"})," antes de chamar a APPLY TO SELECTION. Se o term\xf4metro de progresso \xe9 mostrado, o usu\xe1rio pode cancelar a opera\xe7\xe3o."]}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(o.p,{children:"O exemplo a seguir muda mai\xfasculas todos os nomes na tabela [Empregados]:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0APPLY TO SELECTION([Empregados];[Empregados]Sobrenome:=Uppercase([Empregados]Sobrenome))\n"})}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(o.p,{children:"Se um registro estiver bloqueado durante a execu\xe7\xe3o de APPLY TO SELECTION e esse registro \xe9 modificado, o registro n\xe3o ser\xe1 guardado. Todos os registros bloqueados que s\xe3o encontrados s\xe3o colocados em um conjunto chamado LockedSet. Depois de executar APPLY TO SELECTION, \xe9 recomend\xe1vel testar LockedSet para verificar se houver registros bloqueados. O seguinte loop \xe9 executado at\xe9 que todos os registros tenham sido modificados:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0Repeat\n\xa0\xa0\xa0\xa0&NBSP;APPLY TO SELECTION([Empregados];[Empregados]Sobrenome:=Uppercase([Empregados]Sobrenome))USE SET("LockedSet")\xa0// Sele\xe7\xe3o de registros bloqueados unicamente\n\xa0\xa0\xa0\xa0&NBSP;Until(Records im set("LockedSet")=0)\xa0// At\xe9 que n\xe3o haja registros bloqueados\n'})}),"\n",(0,n.jsx)(o.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(o.p,{children:"Este exemplo utiliza um m\xe9todo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0ALL RECORDS([Empregados])\n\xa0APPLY TO SELECTION([Empregados];M_Cap)\n"})}),"\n",(0,n.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,n.jsx)(o.p,{children:"Se o usu\xe1rio clicar no bot\xe3o Deter no term\xf4metro de progress\xe3o, a vari\xe1vel sistema OK assume o valor 0. Do contr\xe1rio, assume o valor 1."}),"\n",(0,n.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"Conjuntos"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/edit-formula",children:"EDIT FORMULA"})]}),"\n",(0,n.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"70"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,n.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return d}});var r=s(667294);let n={},a=r.createContext(n);function d(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);