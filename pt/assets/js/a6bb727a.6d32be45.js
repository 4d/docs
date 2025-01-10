"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71907"],{367738:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>r,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/listbox-get-static-columns","title":"LISTBOX Get static columns","description":"LISTBOX Get static columns ( { ;} objeto* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-static-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-static-columns","permalink":"/docs/pt/commands/listbox-get-static-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-static-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-static-columns","title":"LISTBOX Get static columns","slug":"/commands/listbox-get-static-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get rows height","permalink":"/docs/pt/commands/listbox-get-rows-height"},"next":{"title":"LISTBOX GET TABLE SOURCE","permalink":"/docs/pt/commands/listbox-get-table-source"}}'),o=s("785893"),d=s("250065");let i={id:"listbox-get-static-columns",title:"LISTBOX Get static columns",slug:"/commands/listbox-get-static-columns",displayed_sidebar:"docs"},c=void 0,a={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get static columns"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"N\xfamero de colunas est\xe1ticas"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"LISTBOX Get static columns"})," devolve o n\xfamero de colunas est\xe1ticas no list box designado pelos par\xe2metros objeto e ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passado o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,o.jsxs)(n.p,{children:["As colunas est\xe1ticas podem ser definidas via a Lista de propriedades ou com a ajuda do comando ",(0,o.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-locked-columns",children:"LISTBOX SET LOCKED COLUMNS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se uma coluna \xe9 inserida ou \xe9 eliminada por programa\xe7\xe3o dentro de uma conjunto de colunas est\xe1ticas, o n\xfamero de colunas devolvidas por este comando t\xeam em conta esta mudan\xe7a.",(0,o.jsx)(n.br,{}),"\nNo entanto, o comando n\xe3o tem em conta o estado vis\xedvel/invis\xedvel das colunas."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," as colunas est\xe1ticas e as columnas bloqueadas s\xe3o duas fun\xe7\xf5es independentes. Para maior informa\xe7\xe3o, consulte o manual de ",(0,o.jsx)(n.em,{children:"Desenho"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1154"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let o={},d=t.createContext(o);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);