"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52876"],{496474:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-get-rows-height","title":"LISTBOX Get rows height","description":"LISTBOX Get rows height ( { ;} objeto {; unidade*} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-rows-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-rows-height","permalink":"/docs/pt/20-R8/commands/listbox-get-rows-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-rows-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-rows-height","title":"LISTBOX Get rows height","slug":"/commands/listbox-get-rows-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row height","permalink":"/docs/pt/20-R8/commands/listbox-get-row-height"},"next":{"title":"LISTBOX Get static columns","permalink":"/docs/pt/20-R8/commands/listbox-get-static-columns"}}'),r=t("785893"),o=t("250065");let d={id:"listbox-get-rows-height",title:"LISTBOX Get rows height",slug:"/commands/listbox-get-rows-height",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX Get rows height"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"unidade"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unidade"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Unidade do valor da altura: 0 ou omitido = pixels, 1 = linhas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"altura da fila (em pixels)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"LISTBOX Get rows height"})," devolve a altura atual (em p\xedxels) das filas do objeto list box designado utilizando os par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"}),". O valor devolvido corresponde \xe0 altura de uma s\xf3 linha."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por padr\xe3o, se omitir o par\xe2metro ",(0,r.jsx)(n.em,{children:"unidade"}),", a altura da linha devolvida \xe9 expressada em pixels. para definir outra ",(0,r.jsx)(n.em,{children:"unidade"}),", no par\xe2metro unidade pode passar uma das seguintes const\xe2ntes do tema ",(0,r.jsx)(n.em,{children:"List box"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk lines"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"A altura designa um n\xfamero de linhas. 4D calcula a altura de uma linha em fun\xe7\xe3o da fonte."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk pixels"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"A altura \xe9 o n\xfamero de pixels (por padr\xe3o)."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," para mais informa\xe7\xe3o sobre o calculo de alturas de linhas, consulte o Manual de Desenho."]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height "}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-get-row-height",children:"LISTBOX Get row height "}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"836"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var s=t(667294);let r={},o=s.createContext(r);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);