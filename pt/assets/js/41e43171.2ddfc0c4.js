"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15689],{767438:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=n(474848),t=n(28453);const r={id:"load-set",title:"LOAD SET",slug:"/commands/load-set",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/load-set",title:"LOAD SET",description:"LOAD SET ( {tabela ;} conjunto ; documento )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-set.md",sourceDirName:"commands-legacy",slug:"/commands/load-set",permalink:"/docs/pt/commands/load-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"load-set",title:"LOAD SET",slug:"/commands/load-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Is in set",permalink:"/docs/pt/commands/is-in-set"},next:{title:"Records in set",permalink:"/docs/pt/commands/records-in-set"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"LOAD SET"})," ( {",(0,s.jsx)(o.em,{children:"tabela"})," ;} ",(0,s.jsx)(o.em,{children:"conjunto"})," ; ",(0,s.jsx)(o.em,{children:"documento"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tabela"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela \xe0 qual o conjunto pertence, ou tabela padr\xe3o, se omitido"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"conjunto"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome do conjunto a ser criado em mem\xf3ria"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"documento"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Documento que cont\xe9m o conjunto"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["LOAD SET carrega um conjunto desde o arquivo ",(0,s.jsx)(o.em,{children:"documento"}),", criado com o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/save-set",children:"SAVE SET"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["O conjunto guardado em ",(0,s.jsx)(o.em,{children:"documento"})," deve aplicar a ",(0,s.jsx)(o.em,{children:"tabela"}),". O conjunto criado em mem\xf3ria \xe9 reescrito se j\xe1 existir."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"documento"})," \xe9 o nome do documento disco que cont\xe9m o conjunto. O documento n\xe3o necessita ter o mesmo nome do conjunto. Se passa uma cadeia vazia em ",(0,s.jsx)(o.em,{children:"documento"}),", se mostra uma caixa de di\xe1logo padr\xe3o de Abertura de arquivos, permitindo ao usu\xe1rio escolher o conjunto a carregar."]}),"\n",(0,s.jsx)(o.p,{children:"Lembre que um conjunto \xe9 uma reapresenta\xe7\xe3o de uma sele\xe7\xe3o de registros no momento em que o conjunto \xe9 criado. Se os registros representados pelo conjunto mudam, o conjunto poderia ficar inv\xe1lido. Portanto, um conjunto carregado desde um disco deve representar a um grupo de registros que n\xe3o muda frequentemente. V\xe1rias coisas podem tornar um conjunto inv\xe1lido: modifica\xe7\xe3o ou elimina\xe7\xe3o de um registro do conjunto, ou modifica\xe7\xe3o dos crit\xe9rios que determinam a cria\xe7\xe3o do conjunto."}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo abaixo utiliza LOAD SET para carregar um conjunto de sedes da empresa Acme em Nova Iorque:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0LOAD SET([Empresas];"NY Acme";"NYAcmeSt")\xa0// Carregar o conjunto em mem\xf3ria\n\xa0USE SET("NY Acme")\xa0// Mudar a sele\xe7\xe3o atual a NY Acme\n\xa0CLEAR SET("NY Acme")\xa0// Apagar o conjunto da mem\xf3ria\n'})}),"\n",(0,s.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(o.p,{children:"Se o usu\xe1rio clicar em Cancelar na caixa de di\xe1logo de abrir arquivos, ou se for produzido um erro durante o carregamento, a vari\xe1vel sistema OK assume o valor 0. Do contr\xe1rio, assume o valor 1."}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/save-set",children:"SAVE SET"})})]})}function l(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>a});var s=n(296540);const t={},r=s.createContext(t);function d(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);