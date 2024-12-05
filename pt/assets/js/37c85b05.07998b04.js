"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25722"],{597975:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","description":"LISTBOX MOVED ROW NUMBER ( { ;} objeto ; antPosi\xe7ao ; novaPosi\xe7ao* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-row-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-row-number","permalink":"/docs/pt/commands/listbox-moved-row-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","slug":"/commands/listbox-moved-row-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/pt/commands/listbox-moved-column-number"},"next":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/pt/commands/listbox-select-break"}}'),r=n("785893"),t=n("250065");let d={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,r.jsx)(o.em,{children:"objeto"})," ; ",(0,r.jsx)(o.em,{children:"antPosi\xe7ao"})," ; ",(0,r.jsx)(o.em,{children:"novaPosi\xe7ao"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objeto"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"antPosi\xe7ao"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Posi\xe7\xe3o pr\xe9via da fila movimentada"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"novaPosi\xe7ao"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Nova posi\xe7\xe3o da fila movimentada"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando LISTBOX MOVED ROW NUMBER devolve dois n\xfameros em ",(0,r.jsx)(o.em,{children:"antPosi\xe7\xe3o"})," e ",(0,r.jsx)(o.em,{children:"novPosi\xe7\xe3o"})," indicando respectivamente a posi\xe7\xe3o anterior e a nova posi\xe7\xe3o da fila movida no list box, especificados pelos par\xe2metros ",(0,r.jsx)(o.em,{children:"objeto"})," e ",(0,r.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," s\xf3 pode mover as linhas nos list box de tipo array."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ."]}),"\n",(0,r.jsxs)(o.p,{children:["Este comando deve ser utilizado com o evento de formul\xe1rio On row moved (ver o comando ",(0,r.jsx)(o.a,{href:"form-event-code.md",children:"Form event code"}),")."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," este comando n\xe3o considera o estado oculto/mostrado das linhas do list box."]}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"form-event-code.md",children:"Form event code"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var s=n(667294);let r={},t=s.createContext(r);function d(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);