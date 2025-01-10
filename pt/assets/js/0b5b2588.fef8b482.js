"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86353"],{144388:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>l,toc:()=>a,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-get-column-width","title":"LISTBOX Get column width","description":"LISTBOX Get column width ( { ;} objeto {; larguraMin {; larguraMax*}} )  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-column-width.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-column-width","permalink":"/docs/pt/commands/listbox-get-column-width","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-column-width.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-column-width","title":"LISTBOX Get column width","slug":"/commands/listbox-get-column-width","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get column formula","permalink":"/docs/pt/commands/listbox-get-column-formula"},"next":{"title":"LISTBOX Get footer calculation","permalink":"/docs/pt/commands/listbox-get-footer-calculation"}}'),r=t("785893"),s=t("250065");let d={id:"listbox-get-column-width",title:"LISTBOX Get column width",slug:"/commands/listbox-get-column-width",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX Get column width"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"larguraMin"})," {; ",(0,r.jsx)(n.em,{children:"larguraMax"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"larguraMin"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Largura m\xednima da coluna (em pixels)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"larguraMax"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Largura m\xe1xima da coluna (em p\xedxels)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado da fun\xe7\xe3o"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Largura da coluna (em pixels)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando LISTBOX Get column width devolve a largura (em pixels) da coluna designada pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*."})," Pode passar indiferentemente uma coluna ou um t\xedtulo de coluna de list box no par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional *, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ."]}),"\n",(0,r.jsxs)(n.p,{children:["LISTBOX Get column width pode devolver nos par\xe2metros ",(0,r.jsx)(n.em,{children:"larguraMin e"})," ",(0,r.jsx)(n.em,{children:"larguraMax"})," os limites de redimensionamento da coluna. Estes limites podem ser definidos utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-column-width",title:"LISTBOX SET COLUMN WIDTH",children:"LISTBOX SET COLUMN WIDTH"}),".",(0,r.jsx)(n.br,{}),"\nSe n\xe3o tiver definido nenhum valor de largura m\xednima ou m\xe1xima para a coluna, o par\xe2metro correspondente devolve 0."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-column-width",children:"LISTBOX SET COLUMN WIDTH"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"834"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var o=t(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);