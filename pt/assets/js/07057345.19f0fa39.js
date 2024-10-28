"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10370],{115538:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=d(474848),i=d(28453);const s={id:"window-kind",title:"Window kind",slug:"/commands/window-kind",displayed_sidebar:"docs"},t=void 0,r={id:"commands-legacy/window-kind",title:"Window kind",description:"Window kind {( janela )} -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/window-kind.md",sourceDirName:"commands-legacy",slug:"/commands/window-kind",permalink:"/docs/pt/commands/window-kind",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-kind.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"window-kind",title:"Window kind",slug:"/commands/window-kind",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Tool bar height",permalink:"/docs/pt/commands/tool-bar-height"},next:{title:"WINDOW LIST",permalink:"/docs/pt/commands/window-list"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function a(n){const e={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Window kind"})," {( ",(0,o.jsx)(e.em,{children:"janela"})," )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Par\xe2metro"}),(0,o.jsx)(e.th,{children:"Tipo"}),(0,o.jsx)(e.th,{}),(0,o.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"janela"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"\u2192"}),(0,o.jsx)(e.td,{children:"N\xfamero de refer\xeancia da Janela, ou a janela ativa do processo atual, se omitido"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Resultado"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"\u2190"}),(0,o.jsx)(e.td,{children:"Tipo de janela"})]})]})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(e.p,{children:["O comando Window kind devolve o tipo de janela 4D cujo n\xfamero de refer\xeancia for passado no par\xe2metro ",(0,o.jsx)(e.em,{children:"janela"}),". Se a janela n\xe3o existir, Window kind devolve ",(0,o.jsx)(e.em,{children:"0 (zero)"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Do contr\xe1rio, Window kind devolve uma das seguintes constantes pr\xe9-definidas (tema ",(0,o.jsx)(e.em,{children:"Janela"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Constante"}),(0,o.jsx)(e.th,{children:"Tipo"}),(0,o.jsx)(e.th,{children:"Valor"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"External window"}),(0,o.jsx)(e.td,{children:"Inteiro longo"}),(0,o.jsx)(e.td,{children:"5"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Floating window"}),(0,o.jsx)(e.td,{children:"Inteiro longo"}),(0,o.jsx)(e.td,{children:"14"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Modal dialog"}),(0,o.jsx)(e.td,{children:"Inteiro longo"}),(0,o.jsx)(e.td,{children:"9"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Regular window"}),(0,o.jsx)(e.td,{children:"Inteiro longo"}),(0,o.jsx)(e.td,{children:"8"})]})]})]}),"\n",(0,o.jsxs)(e.p,{children:["Se omitir o par\xe2metro ",(0,o.jsx)(e.em,{children:"janela"}),", Window kind devolve o tipo da janela do primeiro plano do processo atual."]}),"\n",(0,o.jsx)(e.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsxs)(e.p,{children:["Ver o exemplo do comando ",(0,o.jsx)(e.a,{href:"/docs/pt/commands/window-list",children:"WINDOW LIST"}),"."]}),"\n",(0,o.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/pt/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,o.jsx)(e.br,{}),"\n",(0,o.jsx)(e.a,{href:"/docs/pt/commands/get-window-title",children:"Get window title"}),(0,o.jsx)(e.br,{}),"\n",(0,o.jsx)(e.a,{href:"/docs/pt/commands/window-process",children:"Window process"})]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>t,x:()=>r});var o=d(296540);const i={},s=o.createContext(i);function t(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);