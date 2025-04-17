"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18038"],{766908:function(n,e,d){d.r(e),d.d(e,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/window-kind","title":"Window kind","description":"Window kind {( janela )} : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/window-kind.md","sourceDirName":"commands-legacy","slug":"/commands/window-kind","permalink":"/docs/pt/20-R8/commands/window-kind","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-kind.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"window-kind","title":"Window kind","slug":"/commands/window-kind","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tool bar height","permalink":"/docs/pt/20-R8/commands/tool-bar-height"},"next":{"title":"WINDOW LIST","permalink":"/docs/pt/20-R8/commands/window-list"}}'),t=d("785893"),s=d("250065");let r={id:"window-kind",title:"Window kind",slug:"/commands/window-kind",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(n){let e={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Window kind"})," {( ",(0,t.jsx)(e.em,{children:"janela"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe2metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"janela"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"N\xfamero de refer\xeancia da Janela, ou a janela ativa do processo atual, se omitido"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Resultado"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Tipo de janela"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(e.p,{children:["O comando Window kind devolve o tipo de janela 4D cujo n\xfamero de refer\xeancia for passado no par\xe2metro ",(0,t.jsx)(e.em,{children:"janela"}),". Se a janela n\xe3o existir, Window kind devolve ",(0,t.jsx)(e.em,{children:"0 (zero)"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Do contr\xe1rio, Window kind devolve uma das seguintes constantes pr\xe9-definidas (tema ",(0,t.jsx)(e.em,{children:"Janela"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constante"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{children:"Valor"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"External window"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Floating window"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"14"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Modal dialog"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Regular window"}),(0,t.jsx)(e.td,{children:"Inteiro longo"}),(0,t.jsx)(e.td,{children:"8"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["Se omitir o par\xe2metro ",(0,t.jsx)(e.em,{children:"janela"}),", Window kind devolve o tipo da janela do primeiro plano do processo atual."]}),"\n",(0,t.jsx)(e.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(e.p,{children:["Ver o exemplo do comando ",(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/window-list",children:"WINDOW LIST"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/get-window-rect",children:"GET WINDOW RECT"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/get-window-title",children:"Get window title"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/20-R8/commands/window-process",children:"Window process"})]}),"\n",(0,t.jsx)(e.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"N\xfamero do comando"}),(0,t.jsx)(e.td,{children:"445"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread-seguro"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,d){d.d(e,{Z:function(){return o},a:function(){return r}});var i=d(667294);let t={},s=i.createContext(t);function r(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);