"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82291"],{146727:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>c,toc:()=>i,contentTitle:()=>s});var a=JSON.parse('{"id":"commands-legacy/form-get-current-page","title":"FORM Get current page","description":"FORM Get current page {( * )} : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-get-current-page.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-current-page","permalink":"/docs/pt/commands/form-get-current-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-current-page.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-current-page","title":"FORM Get current page","slug":"/commands/form-get-current-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get color scheme","permalink":"/docs/pt/commands/form-get-color-scheme"},"next":{"title":"FORM GET ENTRY ORDER","permalink":"/docs/pt/commands/form-get-entry-order"}}'),o=r("785893"),t=r("250065");let d={id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},s=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FORM Get current page"})," {( * )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Retorna o n\xfamero da p\xe1gina de subformul\xe1rio atual"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero da p\xe1gina de formul\xe1rio exibida atualmente"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"FORM Get current page"})," retorna o n\xfamero da p\xe1gina atual do formul\xe1rio mostrado atualmente ou do formul\xe1rio atual carregado via o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro ",(0,o.jsx)(n.em,{children:"*"})," \xe9 \xfatil quando o comando \xe9 chamado no contexto de um subformul\xe1rio em p\xe1gina que cont\xe9m muitas p\xe1ginas. Neste caso, quando passar este par\xe2metro, o comando muda a p\xe1gina do subformul\xe1rio atual (a que chamou o comando). Por padr\xe3o, quando o par\xe2metro ",(0,o.jsx)(n.em,{children:"*"})," \xe9 omitido, o comando \xe9 sempre aplicado ao formul\xe1rio pai."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Em um formul\xe1rio, se seleciona um comando de menu da barra de menu ou quando o formul\xe1rio recebe uma chamada de outro processo, pode realizar diferentes a\xe7\xf5es dependendo da p\xe1gina do formul\xe1rio mostrada atualmente. Neste exemplo, voc\xea escreve:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formul\xe1rio [minhaTabela];"meuForm"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumeroMenu:=Menu selected>>16\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNumeroCmdo:=Menu selected\xa0&\xa00xFFFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumeroMenu=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNumeroCmdo=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Efetuar uma a\xe7\xe3o apropriada para a p\xe1gina 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Efetuar uma a\xe7\xe3o apropriada para a p\xe1gina 2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Dar uma resposta apropriada para a p\xe1gina 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Dar uma resposta apropriada para a p\xe1gina 2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"first-page.md",children:"FIRST PAGE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/form-goto-page",children:"FORM GOTO PAGE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"last-page.md",children:"LAST PAGE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"next-page.md",children:"NEXT PAGE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"previous-page.md",children:"PREVIOUS PAGE"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"276"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var a=r(667294);let o={},t=a.createContext(o);function d(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);