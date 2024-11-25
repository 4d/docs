"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25401"],{957243:function(e,s,r){r.r(s),r.d(s,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","description":"LISTBOX SET GRID COLOR ( { ;} objeto ; cor ; horizontal ; vertical* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-grid-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid-color","permalink":"/docs/pt/commands/listbox-set-grid-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid-color.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","slug":"/commands/listbox-set-grid-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID","permalink":"/docs/pt/commands/listbox-set-grid"},"next":{"title":"LISTBOX SET HEADERS HEIGHT","permalink":"/docs/pt/commands/listbox-set-headers-height"}}'),n=r("785893"),t=r("250065");let i={id:"listbox-set-grid-color",title:"LISTBOX SET GRID COLOR",slug:"/commands/listbox-set-grid-color",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"LISTBOX SET GRID COLOR"})," ( {* ;} ",(0,n.jsx)(s.em,{children:"objeto"})," ; ",(0,n.jsx)(s.em,{children:"cor"})," ; ",(0,n.jsx)(s.em,{children:"horizontal"})," ; ",(0,n.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Operador"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"objeto"}),(0,n.jsx)(s.td,{children:"any"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cor"}),(0,n.jsx)(s.td,{children:"Text, Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Valor RGB da cor"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"horizontal"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Use a cor para linhas de grade horizontais"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"vertical"}),(0,n.jsx)(s.td,{children:"Boolean"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Use a cor para linhas de grade vertical"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando ",(0,n.jsx)(s.strong,{children:"LISTBOX SET GRID COLOR"})," lhe permite modificar a cor da grade do objeto list box designado pelos par\xe2metros ",(0,n.jsx)(s.em,{children:"objeto"})," e ",(0,n.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Se passa o par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,n.jsx)(s.em,{children:"Propriedades dos objetos"}),".."]}),"\n",(0,n.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,n.jsx)(s.em,{children:"cor"})," um valor de cor RGB. Para maior informa\xe7\xe3o sobre as cores RGB, consulte a descri\xe7\xe3o do comando ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),".."]}),"\n",(0,n.jsxs)(s.p,{children:["Os par\xe2metros ",(0,n.jsx)(s.em,{children:"horizontal"})," e ",(0,n.jsx)(s.em,{children:"vertical"})," lhe permitem especificar as linhas as quais deseja dar cor:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Se passar ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," em ",(0,n.jsx)(s.em,{children:"horizontal"}),", a cor ser\xe1 aplicada \xe0s linhas horizontais da matriz. Se passa ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),", a cor das linhas horizontais n\xe3o mudar\xe1."]}),"\n",(0,n.jsxs)(s.li,{children:["Se passar ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," em ",(0,n.jsx)(s.em,{children:"vertical"}),", a cor se aplicar\xe1 \xe0s linhas verticais da matriz. Se passar ",(0,n.jsx)(s.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),", a cor das linhas verticais n\xe3o mudar\xe1"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-grid-colors",children:"LISTBOX GET GRID COLORS"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return i}});var o=r(667294);let n={},t=o.createContext(n);function i(e){let s=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);