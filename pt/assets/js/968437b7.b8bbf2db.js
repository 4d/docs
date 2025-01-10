"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21256"],{630584:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/copy-set","title":"COPY SET","description":"COPY SET ( comOrigem ; comDestino )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/copy-set.md","sourceDirName":"commands-legacy","slug":"/commands/copy-set","permalink":"/docs/pt/commands/copy-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-set","title":"COPY SET","slug":"/commands/copy-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SET","permalink":"/docs/pt/commands/clear-set"},"next":{"title":"CREATE EMPTY SET","permalink":"/docs/pt/commands/create-empty-set"}}'),t=o("785893"),d=o("250065");let c={id:"copy-set",title:"COPY SET",slug:"/commands/copy-set",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"COPY SET"})," ( ",(0,t.jsx)(n.em,{children:"comOrigem"})," ; ",(0,t.jsx)(n.em,{children:"comDestino"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comOrigem"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome do conjunto de origem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"comDestino"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome do Conjunto de Destino"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando COPY SET copia o conte\xfado do conjunto ",(0,t.jsx)(n.em,{children:"comOrigem"})," no conjunto ",(0,t.jsx)(n.em,{children:"comDestino"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['Os dois conjuntos podem ser processos, inter-processos, ou conjuntos locais. Os dois conjuntos n\xe3o precisam tem o mesmo tipo (como mostrado abaixo), desde que ambos sejam vis\xedveis na m\xe1quina. Para saber mais sobre isso, veja "',(0,t.jsx)(n.em,{children:"Visibilidade de Conjuntos"}),'".']}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:['O seguinte exemplo, copia o conjunto "',(0,t.jsx)(n.em,{children:"ConjuntoA"}),'", no conjunto "',(0,t.jsx)(n.em,{children:"ConjuntoB"}),'":']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("ConjuntoA";"ConjuntoB")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:['O seguinte exemplo em Cliente/Servidor, copia o conjunto processo "',(0,t.jsx)(n.em,{children:"ConjuntoA"}),'", conservado na m\xe1quina servidor, no conjunto local "',(0,t.jsx)(n.em,{children:"$ConjuntoB"}),'", conservado no m\xe1quina cliente:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0COPY SET("ConjuntoA";"$ConjuntoB")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Conjuntos"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"600"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return r},a:function(){return c}});var s=o(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);