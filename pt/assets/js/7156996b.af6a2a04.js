"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55199"],{289483:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-set-grid","title":"LISTBOX SET GRID","description":"LISTBOX SET GRID ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-grid.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid","permalink":"/docs/pt/commands/listbox-set-grid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-grid","title":"LISTBOX SET GRID","slug":"/commands/listbox-set-grid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET FOOTERS HEIGHT","permalink":"/docs/pt/commands/listbox-set-footers-height"},"next":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/pt/commands/listbox-set-grid-color"}}'),r=n("785893"),o=n("250065");let i={id:"listbox-set-grid",title:"LISTBOX SET GRID",slug:"/commands/listbox-set-grid",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LISTBOX SET GRID"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objeto"})," ; ",(0,r.jsx)(s.em,{children:"horizontal"})," ; ",(0,r.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objeto"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"horizontal"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True=mostrar; False=ocultar"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vertical"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True=mostrar; False=ocultar"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando ",(0,r.jsx)(s.strong,{children:"LISTBOX SET GRID"})," lhe permite mostrar ou ocultar as linhas horizontais e verticais que comp\xf5e a matriz no list box designado pelos par\xe2metros ",(0,r.jsx)(s.em,{children:"objeto"})," e ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,r.jsx)(s.em,{children:"Propriedades dos objetos"})]}),"\n",(0,r.jsxs)(s.p,{children:["Passe nos par\xe2metros ",(0,r.jsx)(s.em,{children:"horizontal"})," e ",(0,r.jsx)(s.em,{children:"vertical"})," os valores booleanos que indicam se as linhas da matriz devem ser mostradas (",(0,r.jsx)(s.a,{href:"/docs/pt/commands/true",title:"True",children:"True"}),") ou ocultas (",(0,r.jsx)(s.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),"). A matriz \xe9 mostrada por padr\xe3o"]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-grid",children:"LISTBOX GET GRID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})]}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"841"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);