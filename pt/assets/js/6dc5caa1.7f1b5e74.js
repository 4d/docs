"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73199"],{56742:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","description":"LISTBOX MOVED COLUMN NUMBER ( { ;} objeto ; antPosi\xe7ao ; novaPosi\xe7\xe3o* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-moved-column-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-column-number","permalink":"/docs/pt/commands/listbox-moved-column-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-column-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-column-number","title":"LISTBOX MOVED COLUMN NUMBER","slug":"/commands/listbox-moved-column-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVE COLUMN","permalink":"/docs/pt/commands/listbox-move-column"},"next":{"title":"LISTBOX MOVED ROW NUMBER","permalink":"/docs/pt/commands/listbox-moved-row-number"}}'),t=o("785893"),r=o("250065");let d={id:"listbox-moved-column-number",title:"LISTBOX MOVED COLUMN NUMBER",slug:"/commands/listbox-moved-column-number",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX MOVED COLUMN NUMBER"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"antPosi\xe7ao"})," ; ",(0,t.jsx)(n.em,{children:"novaPosi\xe7\xe3o"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"antPosi\xe7ao"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Posi\xe7\xe3o pr\xe9via da coluna movimentada"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"novaPosi\xe7\xe3o"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nova posi\xe7\xe3o da coluna movimentada"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando LISTBOX MOVED COLUMN NUMBER devolve dois n\xfameros em ",(0,t.jsx)(n.em,{children:"antPosi\xe7\xe3o"})," e ",(0,t.jsx)(n.em,{children:"novPosi\xe7\xe3o"})," indicando respectivamente a posi\xe7\xe3o anterior e a nova posi\xe7\xe3o da coluna movida no list box designado pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"objeto"})," e ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ."]}),"\n",(0,t.jsxs)(n.p,{children:["Este comando deve ser utilizado com o evento de formul\xe1rio On column moved (ver o comando ",(0,t.jsx)(n.a,{href:"form-event.md",title:"Form event",children:"Form event"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando considera as colunas invis\xedveis."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/listbox-moved-row-number",children:"LISTBOX MOVED ROW NUMBER"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"844"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);