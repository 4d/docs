"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47548],{209008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(474848),a=t(28453);const o={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/cut-named-selection",title:"CUT NAMED SELECTION",description:"CUT NAMED SELECTION ( {tabela ;} nome )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/cut-named-selection.md",sourceDirName:"commands-legacy",slug:"/commands/cut-named-selection",permalink:"/docs/pt/commands/cut-named-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"COPY NAMED SELECTION",permalink:"/docs/pt/commands/copy-named-selection"},next:{title:"USE NAMED SELECTION",permalink:"/docs/pt/commands/use-named-selection"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function r(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,s.jsx)(n.em,{children:"tabela"})," ;} ",(0,s.jsx)(n.em,{children:"nome"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabela"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabela da qual cortar sele\xe7\xe3o, ou Tabela por padr\xe3o, se omitida"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nome"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome da sele\xe7\xe3o temporal a criar"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["CUT NAMED SELECTION cria uma sele\xe7\xe3o temporal ",(0,s.jsx)(n.em,{children:"nome"})," e coloca ali a sele\xe7\xe3o atual de ",(0,s.jsx)(n.em,{children:"tabela"}),". Diferente de ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", este comando n\xe3o copia a sele\xe7\xe3o atual de ",(0,s.jsx)(n.em,{children:"tabela"}),", mas a move a pr\xf3pria tabela selecionada."]}),"\n",(0,s.jsxs)(n.p,{children:["Depois de executar o comando, a sele\xe7\xe3o atual de ",(0,s.jsx)(n.em,{children:"tabela"})," no processo atual fica vazia. Portanto, CUT NAMED SELECTION n\xe3o deve ser utilizado quando um registro est\xe1 sendo modificado."]}),"\n",(0,s.jsxs)(n.p,{children:["CUT NAMED SELECTION \xe9 mais eficiente em termos de utiliza\xe7\xe3o de mem\xf3ria, que ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),". ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", utiliza 4 bytes de mem\xf3ria por cada registro da sele\xe7\xe3o. CUT NAMED SELECTION, s\xf3 a refer\xeancia \xe0 lista \xe9 movida."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo seguinte vazia a sele\xe7\xe3o atual de uma tabela ",(0,s.jsx)(n.em,{children:"[Clientes]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Clientes];"AEliminar")\n\xa0CLEAR NAMED SELECTION("AEliminar")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/use-named-selection",children:"USE NAMED SELECTION"})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(296540);const a={},o=s.createContext(a);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);