"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96835],{66584:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var n=o(474848),t=o(28453);const d={id:"listbox-set-locked-columns",title:"LISTBOX SET LOCKED COLUMNS",slug:"/commands/listbox-set-locked-columns",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/listbox-set-locked-columns",title:"LISTBOX SET LOCKED COLUMNS",description:"LISTBOX SET LOCKED COLUMNS ( { ;} objeto ; numColunas* )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-locked-columns.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-set-locked-columns",permalink:"/docs/pt/commands/listbox-set-locked-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-locked-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-set-locked-columns",title:"LISTBOX SET LOCKED COLUMNS",slug:"/commands/listbox-set-locked-columns",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SET HIERARCHY",permalink:"/docs/pt/commands/listbox-set-hierarchy"},next:{title:"LISTBOX SET PROPERTY",permalink:"/docs/pt/commands/listbox-set-property"}},l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function i(e){const s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," ( {* ;} ",(0,n.jsx)(s.em,{children:"objeto"})," ; ",(0,n.jsx)(s.em,{children:"numColunas"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Par\xe2metro"}),(0,n.jsx)(s.th,{children:"Tipo"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"*"}),(0,n.jsx)(s.td,{children:"Operador"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"objeto"}),(0,n.jsx)(s.td,{children:"any"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"numColunas"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"\u2192"}),(0,n.jsx)(s.td,{children:"N\xfamero de colunas a bloquear"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(s.p,{children:["O comando",(0,n.jsx)(s.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," bloqueia as primeiras ",(0,n.jsx)(s.em,{children:"numColunas"})," colunas esquerdas do list box designado pelos par\xe2metros ",(0,n.jsx)(s.em,{children:"objeto"})," e ",(0,n.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["As colunas bloqueadas s\xe3o mostradas na parte esquerda do list box e n\xe3o s\xe3o deslocadas com o resto das colunas do list box. Para maior informa\xe7\xe3o, consulte o Manual de ",(0,n.jsx)(s.em,{children:"Desenho"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Se passado o par\xe2metro opcional ",(0,n.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,n.jsx)(s.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,n.jsxs)(s.p,{children:["Em ",(0,n.jsx)(s.em,{children:"numColunas"}),", pode passar qualquer valor entre 1 e o n\xfamero total de colunas do list box -1. Para um list box com X colunas, se passa um valor > X-1 em ",(0,n.jsx)(s.em,{children:"numColunas"}),", ser\xe1 reduzido automaticamente ao valor X-1."]}),"\n",(0,n.jsxs)(s.p,{children:["Para eliminar o bloqueio de colunas, passe 0 em ",(0,n.jsx)(s.em,{children:"numColunas"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-get-locked-columns",children:"LISTBOX Get locked columns"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/pt/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})]})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>r,x:()=>c});var n=o(296540);const t={},d=n.createContext(t);function r(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);