"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54903"],{400435:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","description":"LISTBOX SET COLUMN FORMULA ( { ;} objeto ; formula ; tipoDado* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-column-formula.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-column-formula","permalink":"/docs/pt/20-R7/commands/listbox-set-column-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-column-formula","title":"LISTBOX SET COLUMN FORMULA","slug":"/commands/listbox-set-column-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET AUTO ROW HEIGHT","permalink":"/docs/pt/20-R7/commands/listbox-set-auto-row-height"},"next":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/pt/20-R7/commands/listbox-set-column-width"}}'),d=o("785893"),r=o("250065");let a={id:"listbox-set-column-formula",title:"LISTBOX SET COLUMN FORMULA",slug:"/commands/listbox-set-column-formula",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"formula"})," ; ",(0,d.jsx)(n.em,{children:"tipoDado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"formula"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"F\xf3rmula 4D associada \xe0 coluna"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoDado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo de resultado da f\xf3rmula"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"LISTBOX SET COLUMN FORMULA"})," modifica a ",(0,d.jsx)(n.em,{children:"formula"})," associada \xe0 coluna de list box designada pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"objeto"})," e ",(0,d.jsx)(n.em,{children:"*"}),". As f\xf3rmulas s\xf3 podem ser utilizadas quando a propriedade \u201CFonte de dados\u201D do list box forem de ",(0,d.jsx)(n.strong,{children:"Sele\xe7\xe3o atual"}),", ",(0,d.jsx)(n.strong,{children:"Sele\xe7\xe3o temporal"})," ou ",(0,d.jsx)(n.strong,{children:"Cole\xe7\xe3o ou Sele\xe7\xe3o de Entidades."})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Pode usar o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})," para definir a fonte de dados de uma list box tipo array."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passado o par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,d.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,d.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro ",(0,d.jsx)(n.em,{children:"formula"})," pode conter toda express\xe3o valida:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"uma instru\xe7\xe3o,"}),"\n",(0,d.jsx)(n.li,{children:"uma f\xf3rmula gerada utilizando o editor de f\xf3rmulas,"}),"\n",(0,d.jsx)(n.li,{children:"uma chamada a um comando 4D,"}),"\n",(0,d.jsx)(n.li,{children:"uma chamada a um m\xe9todo de projeto."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Quando o comando \xe9 chamado, a f\xf3rmula \xe9 analisada e logo executada."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": utilize o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/command-name",children:"Command name"})," para definir as f\xf3rmulas independentes da linguagem da aplica\xe7\xe3o (quando s\xe3o chamados os comandos 4D)."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro ",(0,d.jsx)(n.em,{children:"tipoDados"})," designa o tipo de dados resultantes da execu\xe7\xe3o da f\xf3rmula. Neste par\xe2metro, passe uma das constantes do tema ",(0,d.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),". Se o resultado da f\xf3rmula n\xe3o corresponde ao tipo de dados esperado, um erro \xe9 gerado."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/listbox-get-column-formula",children:"LISTBOX Get column formula"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-data-source",children:"OBJECT SET DATA SOURCE"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"1203"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return a}});var s=o(667294);let d={},r=s.createContext(d);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);