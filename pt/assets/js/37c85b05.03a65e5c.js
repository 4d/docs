"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25722"],{597975:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","description":"LISTBOX MOVED ROW NUMBER ( { ;} objeto ; antPosi\xe7ao ; novaPosi\xe7ao* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-row-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-row-number","permalink":"/docs/pt/20-R7/commands/listbox-moved-row-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","slug":"/commands/listbox-moved-row-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/pt/20-R7/commands/listbox-moved-column-number"},"next":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/pt/20-R7/commands/listbox-select-break"}}'),r=o("785893"),t=o("250065");let d={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"antPosi\xe7ao"})," ; ",(0,r.jsx)(n.em,{children:"novaPosi\xe7ao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"antPosi\xe7ao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Posi\xe7\xe3o pr\xe9via da fila movimentada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"novaPosi\xe7ao"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nova posi\xe7\xe3o da fila movimentada"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando LISTBOX MOVED ROW NUMBER devolve dois n\xfameros em ",(0,r.jsx)(n.em,{children:"antPosi\xe7\xe3o"})," e ",(0,r.jsx)(n.em,{children:"novPosi\xe7\xe3o"})," indicando respectivamente a posi\xe7\xe3o anterior e a nova posi\xe7\xe3o da fila movida no list box, especificados pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," s\xf3 pode mover as linhas nos list box de tipo array."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando deve ser utilizado com o evento de formul\xe1rio On row moved (ver o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/form-event-code",children:"Form event code"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando n\xe3o considera o estado oculto/mostrado das linhas do list box."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/form-event-code",children:"Form event code"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"837"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let r={},t=s.createContext(r);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);