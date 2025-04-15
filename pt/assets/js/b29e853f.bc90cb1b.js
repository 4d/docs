"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62869"],{643788:function(e,n,d){d.r(n),d.d(n,{default:()=>c,frontMatter:()=>o,metadata:()=>a,assets:()=>t,toc:()=>i,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/field-name","title":"Field name","description":"Field name ( pontCampo ) Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/field-name.md","sourceDirName":"commands-legacy","slug":"/commands/field-name","permalink":"/docs/pt/20-R7/commands/field-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"field-name","title":"Field name","slug":"/commands/field-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Field","permalink":"/docs/pt/20-R7/commands/field"},"next":{"title":"Get external data path","permalink":"/docs/pt/20-R7/commands/get-external-data-path"}}'),r=d("785893"),s=d("250065");let o={id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},l=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Field name"})," ( ",(0,r.jsx)(n.em,{children:"pontCampo"})," ) : Text",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Field name"})," ( ",(0,r.jsx)(n.em,{children:"numTabela"})," ; ",(0,r.jsx)(n.em,{children:"numCampo"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pontCampo|numTabela"}),(0,r.jsx)(n.td,{children:"Ponteiro, Inteiro longo"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Ponteiro Campo ou n\xfamero da tabela"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numCampo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero do campo se a o n\xfamero da tabela foi passado no primeiro par\xe2metro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nome do campo"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando Field name retorna o nome do campo cujo ponteiro se passa en ",(0,r.jsx)(n.em,{children:"pontCampo"})," ou cujos n\xfameros de tabela e de campos se passan en ",(0,r.jsx)(n.em,{children:"numTabela e numCampo"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["Este exemplo atribui o segundo elemento do array ",(0,r.jsx)(n.em,{children:"campArray{1}"})," ao nome do segundo campo na primeira tabela. ",(0,r.jsx)(n.em,{children:"campArray"})," \xe9 um array de duas dimens\xf5es:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0campArray{1}{2}:=Field name(1;2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsxs)(n.p,{children:["Este exemplo atribui o segundo elemento do array ",(0,r.jsx)(n.em,{children:"campArray"}),"{1} ao nome do campo [",(0,r.jsx)(n.em,{children:"MinhaTabela]MeuCampo"}),". campArray \xe9 um array de duas dimens\xf5es:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0campArray{1}{2}:=Field name(->[MinhaTabela]MeuCampo)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo mostra um alerta. Este m\xe9todo passa um ponteiro a um campo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("O n\xfamero do campo "+Field name($1)+" da tabela "\n\xa0+Table name(Table($1))+" deve ser de mais de cinco caracteres.")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/field",children:"Field"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/last-field-number",children:"Last field number"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/table-name",children:"Table name"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"257"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return l},a:function(){return o}});var a=d(667294);let r={},s=a.createContext(r);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);