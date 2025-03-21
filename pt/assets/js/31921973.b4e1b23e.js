"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92312"],{145923:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>s,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/level","title":"Level","description":"Level   : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/level.md","sourceDirName":"commands-legacy","slug":"/commands/level","permalink":"/docs/pt/20-R7/commands/level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flevel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"level","title":"Level","slug":"/commands/level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in print preview","permalink":"/docs/pt/20-R7/commands/is-in-print-preview"},"next":{"title":"OPEN PRINTING JOB","permalink":"/docs/pt/20-R7/commands/open-printing-job"}}'),o=r("785893"),i=r("250065");let d={id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},t=void 0,s={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Level"}),"   : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xedvel de ruptura ou do cabe\xe7alho atual"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"Level  se utiliza para determinar o n\xedvel de quebra do cabe\xe7alho atual. Devolve o n\xedvel de quebra durante os eventos On Header e On Printing Break."}),"\n",(0,o.jsx)(n.p,{children:"O n\xedvel 0 \xe9 o \xfaltimo n\xedvel a imprimir e \xe9 apropriado para a impress\xe3o de um total geral. Level  devolve 1 quando 4D imprime uma quebra no primeiro campo de ordena\xe7\xe3o, 2 quando 4D imprime uma quebra no segundo campo ordenado, e assim sucessivamente."}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Este exemplo \xe9 um modelo para um m\xe9todo de formul\xe1rio. Mostra cada evento poss\xedvel enquanto um relat\xf3rio utiliza um formul\xe1rio como formul\xe1rio de sa\xedda. Level  se chama quando um cabe\xe7alho ou uma quebra est\xe3o sendo impressas:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de formul\xe1rio para um formul\xe1rio de sa\xedda utilizado por um relat\xf3rio\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Header)\n\xa0\xa0// Se vai imprimir a \xe1rea de cabe\xe7alho\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTabela->))\n\xa0\xa0// O c\xf3digo para a primeira quebra do cabe\xe7alho deve ir aqui\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// O c\xf3digo para a quebra do cabe\xe7alho n\xedvel 1 deve ir aqui\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0// O c\xf3digo para a quebra do cabe\xe7alho n\xedvel 2 deve ir aqui\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Details)\n\xa0\xa0// Se vai imprimir um registro\n\xa0\xa0// O c\xf3digo para cada registro vai aqui\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0// Se vai imprimir uma \xe1rea de quebra\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0// O c\xf3digo para a quebra 0 vai aqui\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// O c\xf3digo para a quebra 1 vai aqui\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTabela->))\n\xa0\xa0// O c\xf3digo para o \xfaltimo rodap\xe9 deve ir aqui\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// O c\xf3digo para um rodap\xe9 deve ir aqui\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/accumulate",children:"ACCUMULATE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/break-level",children:"BREAK LEVEL"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/form-event-code",children:"Form event code"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"101"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var a=r(667294);let o={},i=a.createContext(o);function d(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);